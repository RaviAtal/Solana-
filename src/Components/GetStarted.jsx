import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rightcrcle from "../Assets/Images/png/right_arrow.png";
import Card_1 from "../Assets/Images/png/1Card.png";
import Card_2 from "../Assets/Images/png/2Card.png";
import Card_3 from "../Assets/Images/png/3Card.png";
import Card_4 from "../Assets/Images/png/4Card.png";
import Card_5 from "../Assets/Images/png/5Card.png";
import Card_6 from "../Assets/Images/png/fullCard_img.png";

const GetStarted = () => {
  return (
    <section className="bg-black">
      <Container className="py-5 pt-lg-0">
        <p className=" ff_helvetica fw-normal fs_xvii text-white mb-0 text-break">
          Get started.
        </p>
        <h4 className=" ff_helvetica fw-normal fs_viii text_light_white pb-3">
          Use these Solana Foundation and community courses to begin your
          journey into Solana development.
        </h4>
        <div className="bg_GetStarted p-lg-5 mt-4 py-5 box_hover_brightness cursor_poi">
          <div className="p-lg-4">
            <a className=" ff_helvetica fw-normal fs_xsm text-white bg_prple_br_16 px-2 py-1">
              17 Chapters
            </a>
            <p className=" ff_helvetica fw-normal fs_xviii text-white mt-3">
              Solana Development Course
            </p>
            <p className=" ff_helvetica fw-normal fs_vi text-white mt-4">
              Quickstart your Solana development starting <br /> from nothing to
              complex programs.
            </p>
            <a href="#">
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0801 27.5C22.9836 27.5 28.5801 21.9036 28.5801 15C28.5801 8.09644 22.9836 2.5 16.0801 2.5C9.17652 2.5 3.58008 8.09644 3.58008 15C3.58008 21.9036 9.17652 27.5 16.0801 27.5Z"
                  stroke="#848895"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.0801 20L21.0801 15L16.0801 10"
                  stroke="#848895"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.0801 15H21.0801"
                  stroke="#848895"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="pb-lg-5"></div>
        </div>
        <Row>
          <Col lg={4} sm={6} xs={10} className="m-auto mt-4">
            <div className=" position-relative cursor_poi box_hover_brightness">
              <img className="w-100" src={Card_1} alt="image_1" />
              <div className="d-flex justify-content-between align-items-center position-absolute w-100 botom_10">
                <div className="ms-4">
                  <span className=" fs_I text-white ff_helvetica fw-normal bg_prple_br_16 px-2 py-1 text-break">
                    14 Chapters
                  </span>
                  <p className="ff_helvetica fw-normal fs_vi text-white mt-2 mb-0">
                    Buildspace
                  </p>
                </div>
                <svg
                  className="me-4"
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0801 27.5C22.9836 27.5 28.5801 21.9036 28.5801 15C28.5801 8.09644 22.9836 2.5 16.0801 2.5C9.17652 2.5 3.58008 8.09644 3.58008 15C3.58008 21.9036 9.17652 27.5 16.0801 27.5Z"
                    stroke="#848895"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.0801 20L21.0801 15L16.0801 10"
                    stroke="#848895"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.0801 15H21.0801"
                    stroke="#848895"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} xs={10} className="m-auto mt-4">
            <div className=" position-relative cursor_poi box_hover_brightness">
              <img className="w-100" src={Card_2} alt="image_1" />
              <div className="d-flex justify-content-between align-items-center position-absolute w-100 botom_10">
                <div className="ms-4">
                  <span className=" fs_I text-white ff_helvetica fw-normal bg_prple_br_16 px-2 py-1 text-break">
                    12 Chapters
                  </span>
                  <p className="ff_helvetica fw-normal fs_vi text-white mt-2 mb-0">
                    Solana Bytes
                  </p>
                </div>
                <img className="me-4" src={rightcrcle} alt="rightcrcle" />
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} xs={10} className="m-auto mt-4">
            <div className=" position-relative cursor_poi box_hover_brightness">
              <img className="w-100" src={Card_3} alt="image_1" />
              <div className="d-flex justify-content-between align-items-center position-absolute w-100 botom_10">
                <div className="ms-4">
                  <span className=" fs_I text-white ff_helvetica fw-normal bg_prple_br_16 px-2 py-1 text-break">
                    1 Chapter
                  </span>
                  <p className="ff_helvetica fw-normal fs_vi text-white mt-2 mb-0">
                    Scaffold Series
                  </p>
                </div>
                <img className="me-4" src={rightcrcle} alt="rightcrcle" />
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} xs={10} className="m-auto mt-4">
            <div className=" position-relative cursor_poi box_hover_brightness">
              <img className="w-100" src={Card_4} alt="image_1" />
              <div className="d-flex justify-content-between align-items-center position-absolute w-100 botom_10">
                <div className="ms-4">
                  <span className=" fs_I text-white ff_helvetica fw-normal bg_prple_br_16 px-2 py-1 text-break">
                    3 Chapters
                  </span>
                  <p className="ff_helvetica fw-normal fs_vi text-white mt-2 mb-0">
                    Freecodecamp Solana <br /> Course
                  </p>
                </div>
                <img className="me-4" src={rightcrcle} alt="rightcrcle" />
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} xs={10} className="m-auto mt-4">
            <div className=" position-relative cursor_poi box_hover_brightness">
              <img className="w-100" src={Card_5} alt="image_1" />
              <div className="d-flex justify-content-between align-items-center position-absolute w-100 botom_10">
                <div className="ms-4">
                  <span className=" fs_I text-white ff_helvetica fw-normal bg_prple_br_16 px-2 py-1 text-break">
                    167 Chapters
                  </span>
                  <p className="ff_helvetica fw-normal fs_vi text-white mt-2 mb-0">
                    Solana Development <br /> by Knox
                  </p>
                </div>
                <img className="me-4" src={rightcrcle} alt="rightcrcle" />
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} xs={10} className="m-auto mt-4">
            <div className=" position-relative cursor_poi box_hover_brightness">
              <img className="w-100" src={Card_6} alt="image_1" />
              <div className="d-flex justify-content-between align-items-center position-absolute w-100 botom_10">
                <div className="ms-4">
                  <span className=" fs_I text-white ff_helvetica fw-normal bg_prple_br_16 px-2 py-1 text-break">
                    8 Chapters
                  </span>
                  <p className="ff_helvetica fw-normal fs_vi text-white mt-2 mb-0">
                    Solana Bootcamp
                  </p>
                </div>
                <img className="me-4" src={rightcrcle} alt="rightcrcle" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetStarted;
