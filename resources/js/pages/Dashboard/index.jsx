import PropTypes from "prop-types";
import React from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
import Welcome from "./Welcome";
import Tables from "./table";


const Dashboard = props => {

  //meta title
  document.title = "Dashboard | MCL PPM";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title={props.t("Dashboard")}/>

          <Row>
            <Col lg="12">
            <Welcome/>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
            <Tables/>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
};

export default withTranslation()(Dashboard);
