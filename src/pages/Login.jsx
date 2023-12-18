import React from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import SideImage from "../assets/img/Rectangle5932.jpg";
import emailIcon from "../assets/img/Email.svg";
import passwordIcon from "../assets/img/Password.svg";
import bgImage from "../assets/img/Rectangle5934.svg";

const Login = () => {
  return (
    <div
      className="d-flex flex-grow-0 justify-content-center align-items-center"
      style={{
        width: "100%",
        height: "100vh",
        background: `url(${bgImage}) center / cover no-repeat`,
        borderStyle: "none",
      }}
    >
      <Container style={{ width: "60%" }}>
        <Row style={{ background: "white", margin: 0 }}>
          <Col md={6} style={{ padding: 0 }}>
            <Image fluid src={SideImage} />
          </Col>
          <Col md={6} className="flex-shrink-0" style={{ padding: 0 }}>
            <div
              className="d-flex flex-column justify-content-center"
              style={{ height: "100%" }}
            >
              <div
                className="d-flex justify-content-center"
                style={{ marginBottom: "20px" }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{
                    padding: "6px",
                    background: "rgb(247, 248, 248)",
                    borderRadius: "14px",
                    paddingLeft: "15px",
                    width: "70%",
                    height: "37px",
                  }}
                >
                  <img src={emailIcon} alt="email" />
                  <Form.Control
                    type="text"
                    style={{
                      borderStyle: "none",
                      background: "transparent",
                      marginLeft: "10px",
                      fontSize: "14px",
                      width: "100%",
                    }}
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ marginBottom: "60px" }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{
                    padding: "7px",
                    background: "rgb(247, 248, 248)",
                    borderRadius: "14px",
                    paddingLeft: "15px",
                    width: "70%",
                  }}
                >
                  <img src={passwordIcon} alt="password" />
                  <Form.Control
                    type="password"
                    style={{
                      borderStyle: "none",
                      background: "transparent",
                      marginLeft: "10px",
                      fontSize: "14px",
                      width: "100%",
                    }}
                    placeholder="Enter Password"
                  />
                </div>
              </div>
              <small
                style={{
                  textAlign: "center",
                  fontSize: "10px",
                  marginBottom: "20px",
                }}
              >
                Register your account{" "}
                <Link to="/register">
                  <span style={{ textDecoration: "underline" }}>Sign up</span>
                </Link>
              </small>
              <div className="d-flex justify-content-center">
                <div
                  className="d-flex justify-content-center align-items-center "
                  style={{
                    background:
                      "linear-gradient(-133deg, rgb(249, 86, 1) 0%, rgb(253, 189, 155) 100%)",
                    padding: "5px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    borderRadius: "50px",
                    width: "70%",
                    height: "40px",
                  }}
                >
                  <Link to="/home" style={{ textDecoration: "none" }}>
                    <h5
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      Sign in
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
