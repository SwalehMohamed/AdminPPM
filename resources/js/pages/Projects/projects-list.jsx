import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";
import Spinners from "../../components/Common/Spinner";
import moment from 'moment';
import {
  Badge,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  FormFeedback,
  Label,
  Card,
  CardBody,
  Button,
} from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Component
import Breadcrumbs from "../../components/Common/Breadcrumb";
import DeleteModal from "../../components/Common/DeleteModal";

import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/themes/material_blue.css";

import {
  getProjects as onGetProjects,
  updateProject as onUpdateProject,
  deleteProject as onDeleteProject,
} from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import TableContainer from "../../components/Common/TableContainer";
import { ToastContainer } from "react-toastify";

const ProjectStatus = ({ comment }) => {
  switch (comment) {
    case "Inprogress":
      return <Badge className="bg-warning"> {comment} </Badge>;

    case "Delay":
      return <Badge className="bg-danger"> {comment} </Badge>;

    case "Completed":
      return <Badge className="bg-success"> {comment} </Badge>;

    default:
      return <Badge className="bg-success"> {comment} </Badge>;
  }
};

const CanvasStatus = ({ cstatus }) => {
  switch (cstatus) {
    case "Not Applicable":
      return <Badge className="bg-danger"> {cstatus} </Badge>;

    case "Store":
      return <Badge className="bg-warning"> {cstatus} </Badge>;

    case "Approval":
      return <Badge className="bg-warning"> {cstatus} </Badge>;

    case "Cutting":
      return <Badge className="bg-warning"> {cstatus} </Badge>;

    case "PVC Welding":
      return <Badge className="bg-warning"> {cstatus} </Badge>;

    case "Stitching":
      return <Badge className="bg-warning"> {cstatus} </Badge>;
  
      case "Branding":
      return <Badge className="bg-warning"> {cstatus} </Badge>;

    case "Complete":
      return <Badge className="bg-success"> {cstatus} </Badge>;

    default:
      return <Badge className="bg-danger"> {cstatus} </Badge>;
  }
};

const FrameStatus = ({ fstatus }) => {
  switch (fstatus) {
    case "Not Applicable":
      return <Badge className="bg-danger"> {fstatus} </Badge>;

    case "Cutting":
      return <Badge className="bg-warning"> {fstatus} </Badge>;

    case "Setting":
      return <Badge className="bg-warning"> {fstatus} </Badge>;

    case "Welding":
      return <Badge className="bg-warning"> {fstatus} </Badge>;

    case "Grinding":
      return <Badge className="bg-warning"> {fstatus} </Badge>;

    case "Filler":
      return <Badge className="bg-warning"> {fstatus} </Badge>;
  
    case "Sanding":
      return <Badge className="bg-warning"> {fstatus} </Badge>;

    case "Painting":
      return <Badge className="bg-warning"> {fstatus} </Badge>;

    case "Complete":
      return <Badge className="bg-success"> {fstatus} </Badge>;

    default:
      return <Badge className="bg-danger"> {fstatus} </Badge>;
  }
};

const ProjectsList = () => {

  //meta title
  document.title = "Project List | MCL PPM";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ProjectsProperties = createSelector(
    (state) => state.projects,
    (Projects) => ({
      projects: Projects.projects,
      loading: Projects.loading
    })
  );

  const { projects, loading } = useSelector(ProjectsProperties);

  const [isLoading, setLoading] = useState(loading);
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [project, setProject] = useState();
  const [projectData, setProjectData] = useState();

  const toggle = () => {
    if (modal) {
      setModal(false);
      setProject(null);
    } else {
      setModal(true);
    }
  };

  const handleProjectClick = useCallback((arg) => {
    const project = arg;
    console.log("project edit", project);
    setProject({
      id: project.id,
      mo: project.mo,
      cstatus: project.cstatus,
      fstatus: project.fstatus,
      endDate: project.endDate,
      comment: project.comment,
    });

    setIsEdit(true);

    toggle();
  }, [toggle]);

  //delete order
  const [deleteModal, setDeleteModal] = useState(false);
  const onClickDelete = useCallback((project) => {
    setProject(project);
    setDeleteModal(true);
  }, []);

  const handleDeleteOrder = () => {
    if (project && project.id) {
      dispatch(onDeleteProject(project.id));
    }
    setDeleteModal(false);
  };


  useEffect(() => {
    dispatch(onGetProjects());
  }, [dispatch]);

  useEffect(() => {
    setProjectData(projects);
  }, [projects]);


  const handleProjectClicks = () => {
    navigate("/projects-create");
  };

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      id: (project && project.id) || "",
      mo: (project && project.mo) || "",
      cstatus: (project && project.cstatus) || "",
      fstatus: (project && project.fstatus) || "",
      endDate: (project && project.endDate) || "",
      comment: (project && project.comment) || "",
    },
    validationSchema: Yup.object({
      cstatus: Yup.string().required("Please Enter Canvas Status"),
      fstatus: Yup.string().required("Please Enter Frame Status"),
      comment: Yup.string().required("Please Enter Status of MO"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updateProject = {
          id: project.id,
          mo: values.mo,
          cstatus: values.cstatus,
          fstatus: values.fstatus,
          endDate: values.endDateDate,
          comment: values.comment,
        };
        // update project
        dispatch(onUpdateProject(updateProject));
      }
      toggle();
    },
  });

  const columns = useMemo(
    () => [
      {
        header: "Projects",
        accessorKey: "Projects",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cellProps) => {
          return (
            <>
              <h5 className="text-truncate font-size-14">
                <Link to={`/projects-overview/${cellProps.row.original.id}`} className="text-dark">{cellProps.row.original.mo} </Link>
              </h5>

            </>
          );
        }
      },
      {
        header: "Canvas Status",
        accessorKey: "cstatus",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cellProps) => <CanvasStatus cstatus={cellProps.row.original.cstatus} />,
      },
      {
        header: "Frame Status",
        accessorKey: "fstatus",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cellProps) => <FrameStatus fstatus={cellProps.row.original.fstatus} />,
      },
      {
        header: "End Date",
        accessorKey: "endDate",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "Comment",
        accessorKey: "comment",
        cell: (cellProps) => <ProjectStatus comment={cellProps.row.original.comment} />,
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "Action",
        enableColumnFilter: false,
        enableSorting: false,
        cell: (cellProps) => {
          return (
            <UncontrolledDropdown>
              <DropdownToggle tag="a" href="#" className="card-drop">
                <i className="fab fa-dots-horizontal font-size-18" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem href="#!" onClick={() => handleProjectClick(cellProps.row.original)}>
                  <i className="fab fa-pencil font-size-16 text-success me-1" />Edit
                </DropdownItem>
                <DropdownItem href="#!" onClick={() => onClickDelete(cellProps.row.original)}>
                  <i className="fab fa-trash-can font-size-16 text-danger me-1" />Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          );
        }
      },
    ],
    []
  );



  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteOrder}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <Container fluid>

          <Breadcrumbs title="Projects" breadcrumbItem="Projects List" />

          <Row>
            <Col lg="12">
              <div>
                {
                  isLoading ? <Spinners setLoading={setLoading} />
                    :
                    <Row>
                      <Col lg={12}>
                        <Card>
                          <CardBody>
                            <TableContainer
                              columns={columns}
                              data={projectData || []}
                              isGlobalFilter={true}
                              isAddButton={true}
                              isPagination={true}
                              isCustomPageSize={true}
                              handleUserClick={handleProjectClicks}
                              SearchPlaceholder="9 records..."
                              buttonClass="btn btn-success btn-rounded"
                              buttonName=" Add New Project"
                              tableClass="project-list-table align-middle table-nowrap dt-responsive nowrap w-100 table-borderless dataTable no-footer dtr-inline"
                              theadClass="table-light"
                              paginationWrapper="dataTables_paginate paging_simple_numbers pagination-rounded"
                              pagination="pagination"
                            />
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                }
              </div>
            </Col>
          </Row>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} tag="h4">
              {!!isEdit ? "Edit Project" : "Add Project"}
            </ModalHeader>
            <ModalBody>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
                autoComplete="off">

                <Row>
                  <Col xs={12}>
                    <div className="mb-3">
                      <Label>mo</Label>
                      <Input
                        name="mo"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.mo || ""}
                        invalid={
                          validation.touched.mo && validation.errors.mo ? true : false
                        }
                      />
                      {validation.touched.mo && validation.errors.mo ? (
                        <FormFeedback type="invalid">{validation.errors.mo}</FormFeedback>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <Label>Canvas Status</Label>
                      <Input
                        name="cstatus"
                        id="cstatus"
                        type="select"
                        className="form-select"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.cstatus || ""}
                        invalid={
                          validation.touched.cstatus && validation.errors.cstatus ? true : false
                        }
                      >
                        <option>Not Applicable</option>
                        <option>Store</option>
                        <option>Approval</option>
                        <option>Cutting</option>
                        <option>PVC Welding</option>
                        <option>Stitching</option>
                        <option>Branding</option>
                        <option>Complete</option>
                      </Input>
                      {validation.touched.cstatus && validation.errors.cstatus ? (
                        <FormFeedback type="invalid">{validation.errors.cstatus}</FormFeedback>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <Label>Frame Status</Label>
                      <Input
                        name="fstatus"
                        id="fstatus"
                        type="select"
                        className="form-select"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.fstatus || ""}
                        invalid={
                          validation.touched.fstatus && validation.errors.fstatus ? true : false
                        }
                      >
                        <option>Not Applicable</option>
                        <option>Cutting</option>
                        <option>Setting</option>
                        <option>Welding</option>
                        <option>Grinding</option>
                        <option>Filler</option>
                        <option>Sanding</option>
                        <option>Painting</option>
                        <option>Complete</option>
                      </Input>
                      {validation.touched.fstatus && validation.errors.fstatus ? (
                        <FormFeedback type="invalid">{validation.errors.fstatus}</FormFeedback>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <Label>End Date</Label>
                      <Flatpickr
                        type="date"
                        name="endDate"
                        className="form-control"
                        value={validation.values.dueDate || ""}
                        onChange={(date) => validation.setFieldValue("endDate", moment(date[0]).format('DD MMMM, YYYY'))}
                        options={{
                          mode: "single",
                          dateFormat: "d M, Y"
                        }}
                      />
                      {
                        validation.touched.endDate && validation.errors.endDate ? (
                          <span className="text-danger">{validation.errors.endDate}</span>
                        ) : null
                      }
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="text-end">
                      <Button type="submit" color="success" className="save-user">Save</Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </ModalBody>
          </Modal>
        </Container>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default withRouter(ProjectsList);

