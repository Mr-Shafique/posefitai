import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Form, Dropdown } from "react-bootstrap";

import SideImage from "../assets/img/Rectangle5932.jpg";
import emailIcon from "../assets/img/Email.svg";
import passwordIcon from "../assets/img/Password.svg";
import bgImage from "../assets/img/Rectangle5934.svg";
import userIcon from "../assets/img/user.svg";
import swapIcon from "../assets/img/Swap.svg";
import calendarIcon from "../assets/img/Calendar.svg";
import weightIcon from "../assets/img/weight-scale.svg";

const Register = () => {
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
                style={{ marginBottom: "10px" }}
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
                      fontSize: "12px",
                      width: "100%",
                    }}
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ marginBottom: "10px" }}
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
                      fontSize: "12px",
                      width: "100%",
                    }}
                    placeholder="Enter Password"
                  />
                </div>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ marginBottom: "10px" }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{
                    padding: "7px",
                    background: "rgb(247, 248, 248)",
                    borderRadius: "14px",
                    paddingLeft: "15px",
                    width: "70%",
                    position: "relative",
                  }}
                >
                  <img
                    width="55"
                    height="47"
                    src={userIcon}
                    alt="user"
                    style={{ width: "18px", height: "18px" }}
                  />
                  <Dropdown style={{ width: "100%", height: "auto" }}>
                    <Dropdown.Toggle
                      variant="primary"
                      className="d-flex justify-content-between align-items-center"
                      style={{
                        width: "100%",
                        height: "20px",
                        padding: "0px",
                        textAlign: "left",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        background: "rgb(247, 248, 248)",
                        color: "rgb(117, 117, 117)",
                        fontSize: "12px",
                        borderStyle: "none",
                      }}
                    >
                      Choose Gender
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{
                        color: "rgb(117, 117, 117)",
                        fontSize: "12px",
                        width: "100%",
                        background: "white",
                        height: "auto",
                        padding: "0px",
                        paddingTop: "10px",
                        marginRight: "0px",
                        border: "0.3px solid rgb(242, 144, 158)",
                        boxShadow: "0px 0px 5px",
                      }}
                    >
                      <Dropdown.Item
                        href="#"
                        style={{ color: "rgb(117, 117, 117)" }}
                      >
                        Male
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#"
                        style={{ color: "rgb(117, 117, 117)" }}
                      >
                        Female
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ marginBottom: "10px" }}
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
                  <img src={calendarIcon} alt="calendar" />
                  <Form.Control
                    type="text"
                    style={{
                      borderStyle: "none",
                      background: "transparent",
                      marginLeft: "10px",
                      fontSize: "12px",
                      width: "100%",
                    }}
                    placeholder="Date of birth"
                  />
                </div>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ marginBottom: "10px" }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{
                    padding: "7px",
                    background: "rgb(247, 248, 248)",
                    borderRadius: "14px",
                    paddingLeft: "15px",
                    width: "60%",
                  }}
                >
                  <img src={weightIcon} alt="weight" />
                  <Form.Control
                    type="text"
                    style={{
                      borderStyle: "none",
                      background: "transparent",
                      marginLeft: "10px",
                      fontSize: "12px",
                      width: "100%",
                    }}
                    placeholder="Weight"
                  />
                </div>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "10%",
                    marginLeft: "5px",
                    borderStyle: "none",
                    background:
                      "linear-gradient(-108deg, rgb(242, 144, 158), rgb(252, 94, 36))",
                    color: "white",
                    borderRadius: "14px",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "10px",
                      marginBottom: "0px",
                      fontWeight: "bold",
                    }}
                  >
                    KG
                  </h1>
                </div>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ marginBottom: "10px" }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{
                    padding: "7px",
                    background: "rgb(247, 248, 248)",
                    borderRadius: "14px",
                    paddingLeft: "15px",
                    width: "60%",
                  }}
                >
                  <img src={swapIcon} alt="height" />
                  <Form.Control
                    type="text"
                    style={{
                      borderStyle: "none",
                      background: "transparent",
                      marginLeft: "10px",
                      fontSize: "12px",
                      width: "100%",
                    }}
                    placeholder="Height"
                  />
                </div>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "10%",
                    marginLeft: "5px",
                    borderStyle: "none",
                    background:
                      "linear-gradient(-108deg, rgb(242, 144, 158), rgb(252, 94, 36))",
                    color: "white",
                    borderRadius: "14px",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "10px",
                      marginBottom: "0px",
                      fontWeight: "bold",
                    }}
                  >
                    CM
                  </h1>
                </div>
              </div>
              <small
                style={{
                  textAlign: "center",
                  fontSize: "10px",
                  marginBottom: "20px",
                }}
              >
                Already have an account{" "}
                <Link to="/login">
                  <span style={{ textDecoration: "underline" }}>sign in</span>
                </Link>
              </small>
              <div className="d-flex justify-content-center">
                <div
                  className="d-flex justify-content-center align-items-center"
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
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <h5
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      Sign up
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

export default Register;
