import React, { useEffect } from "react";
import PropTypes from "prop-types";
import withRouter from "../../../components/Common/withRouter";
import { isEmpty } from "lodash";
import { Col, Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import { getProjectDetail as onGetProjectDetail } from "../../../store/projects/actions";
import ProjectDetail from "./projectDetail";
import CanvasTimeline from "./canvasTimeline";
import FrameTimeline from "./frameTimeline";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

const ProjectsOverview = props => {

  //meta title
  document.title = "Project Overview | MCL PPM";

  const dispatch = useDispatch();

  const projectDetailSelector = createSelector(
    state => state.projects,
    (projects) => ({
      projectDetail: projects.projectDetail
    })
  );

  const { projectDetail } = useSelector(projectDetailSelector);

  const params = props.router.params;

  useEffect(() => {
    if (params && params.id) {
      dispatch(onGetProjectDetail(params.id));
    }
  }, [onGetProjectDetail]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Projects" breadcrumbItem="Project Overview" />

          {!isEmpty(projectDetail) && (
            <>
              <Row>
                <Col lg="12">
                  <ProjectDetail project={projectDetail} />
                </Col>
              </Row>
            </>
          )}
            <Row>
              <Col lg="12">
                <CanvasTimeline />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <FrameTimeline />
              </Col>
              </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

ProjectsOverview.propTypes = {
  match: PropTypes.object,
};

export default withRouter(ProjectsOverview);
