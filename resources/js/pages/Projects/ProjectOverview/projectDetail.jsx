import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Card, CardBody } from "reactstrap";

const ProjectDetail = ({ project }) => {
  return (
    <Card>
      <CardBody>
        <div className="d-flex">

          <div className="flex-grow-1 overflow-hidden">
            <h5 className="text-truncate font-size-15">Dashboard</h5>
          </div>
        </div>

        <h5 className="font-size-15 mt-4">Project Details :</h5>

        <p className="text-muted">
          {get(project, "mo")}
          {get(project, "so")}
          {get(project, "pname")}
          {get(project, "cstatus")}
          {get(project, "cteam")}
          {get(project, "fstatus")}
          {get(project, "fteam")}
          {get(project, "startdate")}
          {get(project, "enddate")}
          {get(project, "comment")}
        </p>
      </CardBody>
    </Card>
  );
};

ProjectDetail.propTypes = {
  project: PropTypes.object,
};

export default ProjectDetail;
