import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Form, FormFeedback, Input, Label, Row, UncontrolledTooltip } from "reactstrap";
import SimpleBar from "simplebar-react";

//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { cstatus, fstatus } from "../../common/data/projects";

const ProjectsCreate = () => {

  //meta title
  document.title = "Create New Project | MCL PPM";

  const [imgStore, setImgStore] = useState([]);
  const [dropList, setDropList] = useState(false);
  const [active, setActive] = useState(0);


  const handleClick = (item) => {
    const isItemInImgStore = imgStore.some((imgItem) => imgItem.id === item.id);
    setActive(item.id);
    if (!isItemInImgStore) {
      const newData = [...imgStore, item];
      setImgStore(newData);
      validation.setFieldValue('assignedto', newData);
    } else {
      const newData = imgStore.filter((imgItem) => imgItem.id !== item.id);
      setImgStore(newData);
      validation.setFieldValue('assignedto', newData);
    }
  };

  // validation
  const validation = useFormik({
    initialValues: {
      mo: '',
      so: '',
      pname: '',
      cstatus: [],
      cteam: '',
      fstatus: [],
      fteam: '',
      startdate: '',
      enddate: '',
      comment: []
    },
    validationSchema: Yup.object({
      mo: Yup.string().required("Please Enter Your Project MO Number"),
      so: Yup.string().required("Please Enter Your Project SO Number"),
      pname: Yup.string().required("Please Enter The Products Name"),
      cstatus: Yup.array().min(1, "Please Select"),
      cteam: Yup.string().required("Please Enter Your Start Date"),
      fstatus: Yup.array().min(1, "Please Select"),
      fteam: Yup.string().required("Please Select Image"),
      startdate: Yup.string().required("Please Enter Your Start Date"),
      enddate: Yup.string().required("Please Select Image"),
      comment: Yup.array().min(1, "Please Select"),
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Projects" breadcrumbItem="Create New" />

          <Form id="createproject-form" onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
            return false;
          }}>
            <Row>
              <Col lg={8}>
                <Card>
                  <CardBody>
                    <input type="hidden" className="form-control" id="formAction" name="formAction" defaultValue="add" />
                    <input type="hidden" className="form-control" id="project-id-input" />
                    <div className="mb-3">
                      <Label htmlFor="mo">Manufacturing Orders</Label>
                      <Input
                        id="mo"
                        name="mo"
                        type="text"
                        placeholder="Enter MO Number..."
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.mo || ""}
                      />
                      {validation.touched.mo && validation.errors.mo ? (
                        <FormFeedback type="invalid" className="d-block">{validation.errors.mo}</FormFeedback>
                      ) : null}

                    </div>
                    <div className="mb-3">
                      <Label htmlFor="so">Sales Orders</Label>
                      <Input
                        id="so"
                        name="so"
                        type="text"
                        placeholder="Enter SO Number..."
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.soo || ""}
                      />
                      {validation.touched.so && validation.errors.so ? (
                        <FormFeedback type="invalid" className="d-block">{validation.errors.so}</FormFeedback>
                      ) : null}

                    </div>
                    <div className="mb-3">
                      <Label htmlFor="pname">Product Name</Label>
                      <Input
                        id="pname"
                        name="pname"
                        type="text"
                        placeholder="Enter Product name..."
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.pname || ""}
                      />
                      {validation.touched.pname && validation.errors.pname ? (
                        <FormFeedback type="invalid" className="d-block">{validation.errors.pname}</FormFeedback>
                      ) : null}

                    </div>
                  
                    <div className="mb-3 position-relative">
                      <Label htmlFor="task-assign-input">Canvas Status</Label>

                      <div className="select-element" id="select-element">
                        <button className="btn btn-light w-100 d-flex justify-content-between" type="button" onClick={() => setDropList(!dropList)}>
                          <span>Select One</span> <i className="fab fa-chevron-down"></i>
                        </button>
                        <div className={`w-100 dropdown-menu ${dropList ? "show" : ""}`}>
                          <SimpleBar data-simplebar="init" style={{ maxHeight: "172px" }}>
                            <ul className="list-unstyled mb-0 assignto-list">
                              {
                                (cstatus|| [])?.map((item, index) => (
                                  <a className={`d-flex align-items-center dropdown-item ${active === item.id ? "active" : ""}`} href="#!" key={index} onClick={() => handleClick(item)}>
                                    <div className="flex-grow-1">{item.name}</div>
                                  </a>
                                ))
                              }
                            </ul>
                          </SimpleBar>
                        </div>
                      </div>

                      {validation.touched.cstatus && validation.errors.cstatus ? (
                        <FormFeedback type="invalid" className="d-block">{validation.errors.cstatus}</FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label htmlFor="cteam">Canvas Team</Label>
                      <Input
                        id="cteam"
                        name="cteam"
                        type="text"
                        placeholder="Enter Names Of Team Members..."
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.cteam || ""}
                      />
                      {validation.touched.cteam && validation.errors.cteam ? (
                        <FormFeedback type="invalid" className="d-block">{validation.errors.cteam}</FormFeedback>
                      ) : null}

                    </div>
                    <div className="mb-3 position-relative">
                      <Label htmlFor="task-assign-input">Frame Status</Label>

                      <div className="select-element" id="select-element">
                        <button className="btn btn-light w-100 d-flex justify-content-between" type="button" onClick={() => setDropList(!dropList)}>
                          <span>Select One</span> <i className="fab fa-chevron-down"></i>
                        </button>
                        <div className={`w-100 dropdown-menu ${dropList ? "show" : ""}`}>
                          <SimpleBar data-simplebar="init" style={{ maxHeight: "172px" }}>
                            <ul className="list-unstyled mb-0 assignto-list">
                              {
                                (fstatus|| [])?.map((item, index) => (
                                  <a className={`d-flex align-items-center dropdown-item ${active === item.id ? "active" : ""}`} href="#!" key={index} onClick={() => handleClick(item)}>
                                    <div className="flex-grow-1">{item.name}</div>
                                  </a>
                                ))
                              }
                            </ul>
                          </SimpleBar>
                        </div>
                      </div>

                      {validation.touched.fstatus && validation.errors.fstatus ? (
                        <FormFeedback type="invalid" className="d-block">{validation.errors.fstatus}</FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label htmlFor="fteam">Frame Team</Label>
                      <Input
                        id="fteam"
                        name="fteam"
                        type="text"
                        placeholder="Enter Names Of Team Members..."
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.fteam || ""}
                      />
                      {validation.touched.fteam && validation.errors.fteam ? (
                        <FormFeedback type="invalid" className="d-block">{validation.errors.fteam}</FormFeedback>
                      ) : null}

                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={4}>
                <Card>
                  <CardBody>
                    <h5 className="card-title mb-3">Comment</h5>
                    <div className="mb-3">
                      <Label htmlFor="comment">Comment</Label>
                      <select className="form-select pageSize" id="comment">
                        <option value="Completed">Completed</option>
                        <option value="Inprogress">Inprogress</option>
                        <option value="Delay">Delay</option>
                      </select>
                      <div className="invalid-feedback">Please select project status.</div>
                    </div>
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <h5 className="card-title mb-3">Start Date</h5>
                    <Flatpickr
                      className="form-control d-block"
                      id="orderdate"
                      name="startdate"
                      placeholder="Select date"
                      options={{
                        mode: "single",
                        dateFormat: 'd M, Y',
                      }}
                      onChange={(customerdate) => validation.setFieldValue("startdate", moment(customerdate[0]).format("DD MMMM ,YYYY"))}
                      value={validation.values.startdate || ''}
                    />
                    {validation.errors.startdate && validation.touched.startdate ? (
                      <FormFeedback type="invalid" className="d-block">{validation.errors.startdate}</FormFeedback>
                    ) : null}
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <h5 className="card-title mb-3">End Date</h5>
                    <Flatpickr
                      className="form-control d-block"
                      id="enddate"
                      name="enddate"
                      placeholder="Select date"
                      options={{
                        mode: "single",
                        dateFormat: 'd M, Y',
                      }}
                      onChange={(customerdate) => validation.setFieldValue("startdate", moment(customerdate[0]).format("DD MMMM ,YYYY"))}
                      value={validation.values.enddate || ''}
                    />
                    {validation.errors.enddate && validation.touched.enddate ? (
                      <FormFeedback type="invalid" className="d-block">{validation.errors.enddate}</FormFeedback>
                    ) : null}
                  </CardBody>
                </Card>
              </Col>
              <Col lg={8}>
                <div className="text-end mb-4">
                  <Button type="submit" color="primary">Create Project</Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ProjectsCreate;
