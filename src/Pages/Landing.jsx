import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import community from "../assets/membership.jpg";
import "./landing.css";
import Carousel from "../Component/Carousel";
import Navigation from "../Component/Navigation";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Navigation />
      <Container className="ps-5 pe-5 pb-5">
        <h3 className="newArrival">New Arrival</h3>

        <Row>
          <Col clas lg={4}>
            <p style={{ fontSize: "12px" }}>
              <b>
                <u>JOIN</u> TODAY
              </b>
            </p>
            <img src={community} className="w-100 ps-4 pe-4" alt="" />
            <div className="mt-5 ms-5 me-5 ">
              <button className="joinbtn">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  JOIN NOW
                </Link>
              </button>
            </div>
          </Col>

          <Col lg={8}>
            <h3 className="premiumFeatures" style={{ textAlign: "center" }}>
              Unlock Premium Features Now
            </h3>
            <h5 style={{ textAlign: "center" }}>_______________________</h5>
            <Carousel />
            <div className="button-container mt-2">
              <button class="gradient-button">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  UNLOCK NOW
                </Link>
              </button>
            </div>
            <div className="button-container">
              <button class="gradient-button2">DETAILS</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
