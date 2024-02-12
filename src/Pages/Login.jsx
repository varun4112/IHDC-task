import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import loginImg from "../assets/celeb.png";
import Regform from "../Component/Regform";

function Login() {
  return (
    <>
      <Container className="w-100">
        <Row className="d-flex flex-wrap pt-5">
          <Col
            xs={12}
            lg={6}
            className="pt-5 pb-5 ps-5"
          >
            <h1
              className="ms-5"
              style={{
                color: "#61b2e7",
              }}
            >
              Unlock Exclusive Benefits
            </h1>
            <Regform />
          </Col>

          <Col
            className=" ps-5 pe-5 pt-lg-5 pt-xs-1 pb-5 "
            style={{ boxSizing: "border-box" }}
          >
            <img className="w-100 mt-lg-5 mt-xs-1" src={loginImg} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
