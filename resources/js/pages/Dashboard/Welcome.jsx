import React from "react"

import { Row, Col, Card, CardBody } from "reactstrap"

const Welcome = () => {
    return (
      <React.Fragment>
        <Card className="overflow-hidden">
          <div className="bg-primary-subtle">
            <Row>
              <Col xs="7">
                <div className="text-primary p-3">
                  <h5 className="text-primary">Welcome</h5>
                  <p>This Is Mombasa Canvas Limited's Project Progress Management System.</p>
                </div>
              </Col>
            </Row>
           </div>
        </Card>
       </React.Fragment>
    )
}

export default Welcome