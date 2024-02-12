import React from "react";
import "./header.css";
import companyLogo from "../assets/real-estate-house.png";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="mt-2">
        <Row className="nav-row">
          <Col className="col-4 logo-col ">
            <img
              className="mt-1"
              style={{ height: "50px" }}
              src={companyLogo}
              alt=""
            />
          </Col>
          <Col className="col-8 pt-3">
            <Link to="/" className="company-name">
              XYZ SYSTEMS LLP
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Header;
