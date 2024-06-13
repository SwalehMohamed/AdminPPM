import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Card,
  CardBody,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const CardProject = ({ projects }) => {
  return (
    <React.Fragment>
      {(projects || [])?.map((project, key) => (
        <Col xl="4" sm="6" key={key}>
          <Card>
            <CardBody>
              <div className="d-flex">

                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="text-truncate font-size-15">
                    <Link
                      to={`/projects-overview/${project.id}`}
                      className="text-dark"
                    >
                      {project.mo}
                    </Link>
                  </h5>
                  <p className="text-muted mb-4">SO No. {project.so}</p>
                  <p className="text-muted mb-4">Product Name {project.pname}</p>
                  <p className="text-muted mb-4">Start Date {project.startdate}</p>
                </div>
              </div>
            </CardBody>
            <div className="px-4 py-3 border-top">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-3">
                  <Badge className={"bg-sucess"}>
                    {project.cstatus}
                  </Badge>
                </li>{" "}
                <li className="list-inline-item me-3">
                  <Badge className={"bg-sucess"}>
                    {project.fstatus}
                  </Badge>
                </li>{" "}
                <li className="list-inline-item me-3" id="endDate">
                  <i className="fab fa-calendar me-1" /> {project.endDate}
                  <UncontrolledTooltip placement="top" target="endDate">
                    Due Date
                  </UncontrolledTooltip>
                </li>{" "}
                <li className="list-inline-item me-3" id="comment">
                  <i className="fab fa-comment-dots me-1" />{" "}
                  {project.comment}
                  <UncontrolledTooltip placement="top" target="comment">
                    Comments
                  </UncontrolledTooltip>
                </li>
              </ul>
            </div>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  );
};

CardProject.propTypes = {
  projects: PropTypes.array,
};

export default CardProject;
