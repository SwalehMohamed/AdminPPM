import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

const CanvasTimeline = () => { 
    const cstatus = [
        {
          id: 1,
          name: "Not Applicable",
        },
        {
          id: 2,
          name: "Store",
        },
        {
          id: 3,
          name: "Approval",
        },
        {
          id: 4,
          name: "Cutting",
        },
        {
          id: 5,
          name: "PVC Welding",
        },
        {
          id: 6,
          name: "Stitching",
        },
        {
          id: 7,
          name: "Branding",
        },
        {
          id: 8,
          name: "Complete",
        }
      ];
  return (
    <React.Fragment>
    <div className="page-content">
      <div className="container-fluid">
    <Row>
    <Col lg="12">
      <Card>
        <CardBody>
          <CardTitle className="mb-5">Vertical Timeline</CardTitle>
          <div >
            <ul className="verti-timeline list-unstyled">
              {/* Render Horizontal Timeline Events */}
              {cstatus.map((cstatus, key) => (
                <li key={key} className="event-list">
                  <div className="event-timeline-dot">
                    <i
                      className={
                        cstatus.id === 3
                          ? "bx bx-right-arrow-circle bx-fade-right"
                          : "bx bx-right-arrow-circle"
                      }
                    />
                  </div>
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <div>
                        <h5>{cstatus.name}</h5>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  </Row>
  </div>
</div>
</React.Fragment>
  );
};

CanvasTimeline.propTypes = {
  project: PropTypes.object,
};

export default CanvasTimeline;
