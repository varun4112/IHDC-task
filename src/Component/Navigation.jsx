import React from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import "./navigation.css";
import { Link } from "react-router-dom";
import usermenu from "../assets/1179644-200.png";

function Navigation() {
  return (
    <>
      <Row className="pt-2">
        <Col className="d-none d-md-block"></Col>
        <Col>
          <div className="d-none d-md-block">
            <ul className="d-flex" style={{ listStyle: "none" }}>
              <li className="ms-3">
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Home{" "}
                </Link>
              </li>
              <li className="ms-3">
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Dashboard
                </Link>
              </li>
              <li className="ms-3">
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Products
                </Link>
              </li>
              <li className="ms-3">
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Transactions
                </Link>
              </li>
              <li className="ms-3">
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          <div className=" d-block d-md-none">
            <Dropdown>
              <Dropdown.Toggle
                className=" m-1 w-25"
                variant="outline-dark"
                id="dropdown-basic"
              >
                <i class="fa-solid fa-bars fa-lg"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/"
                  >
                    Home{" "}
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/"
                  >
                    Dashboard
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/"
                  >
                    Products
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/"
                  >
                    Transactions
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/"
                  >
                    Journal
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
        <Col>
          <div className="d-flex justify-content-end me-5">
            <img src={usermenu} style={{ height: "30px" }} alt="" />
          </div>
          <div className="d-flex justify-content-end me-3">
            <p>Joseph Iazar</p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Navigation;
