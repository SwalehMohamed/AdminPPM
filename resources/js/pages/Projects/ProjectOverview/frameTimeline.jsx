import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

const FrameTimeline = () => { 
    const fstatus = [
        {
          id: 1,
          name: "Not Applicable",
        },
        {
          id: 2,
          name: "Cutting",
        },
        {
          id: 3,
          name: "Setting",
        },
        {
          id: 4,
          name: "Welding",
        },
        {
          id: 5,
          name: "Grinding",
        },
        {
          id: 6,
          name: "Filler",
        },
        {
          id: 7,
          name: "Sanding",
        },
        {
          id: 8,
          name: "Painting",
        },
        {
          id: 9,
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
              {fstatus.map((fstatus, key) => (
                <li key={key} className="event-list">
                  <div className="event-timeline-dot">
                    <i
                      className={
                        fstatus.id === 3
                          ? "bx bx-right-arrow-circle bx-fade-right"
                          : "bx bx-right-arrow-circle"
                      }
                    />
                  </div>
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <div>
                        <h5>{fstatus.name}</h5>
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

FrameTimeline.propTypes = {
  project: PropTypes.object,
};

export default FrameTimeline;
