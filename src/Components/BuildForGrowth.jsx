import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import mainimg from "../Assets/Images/png/mainimg.png";
import ok from "../Assets/Images/png/okay.png";
import anybody from "../Assets/Images/png/anybodies.png";
import clay from "../Assets/Images/png/clay.png";
import monkey from "../Assets/Images/png/monkey.png";
import shib from "../Assets/Images/png/shib.png";

const BuildForGrowth = () => {
  const [first, setfirst] = useState(0);
  const [Change, setChange] = useState(1);

  return (
    <section className="bg-black">
      <Container>
        <div className="d-flex align-items-center justify-content-between  flex-column flex-lg-row">
          <p className="ff_helvetica fw-normal fs_xviii text-white mb-0">
            Build for growth.
          </p>
          <div className="mt-lg-0 w_300px_over_f_x_500_scrl mt-3 scroll">
            <div className="d-flex align-items-center justify-content-lg-end gap-4 max_w_589 py-3 py-lg-0">
              <div
                onClick={() => {
                  setfirst(0);
                  setChange(1);
                }}
                className={
                  first === 0
                    ? "bg_black111 border_purple border_radius_15 py10_x14 cursor_poi "
                    : "bg_black111 border_radius_15 py10_x14 cursor_poi border_111"
                }
              >
                <p className="ff_helvetica fw-normal fs_iii mb-0 text-white">
                  NFTs
                </p>
              </div>
              <div
                onClick={() => {
                  setfirst(4);
                  setChange(2);
                }}
                className={
                  first === 4
                    ? "bg_black111 border_purple border_radius_15 py10_x14 cursor_poi"
                    : "bg_black111 border_radius_15 py10_x14 cursor_poi border_111"
                }
              >
                <p className="ff_helvetica fw-normal fs_iii mb-0 text-white">
                  DeFi
                </p>
              </div>
              <div
                onClick={() => {
                  setfirst(1);
                  setChange(1);
                }}
                className={
                  first === 1
                    ? "bg_black111 border_purple border_radius_15 py10_x14 cursor_poi"
                    : "bg_black111  border_radius_15 py10_x14 cursor_poi border_111"
                }
              >
                <p className="ff_helvetica fw-normal fs_iii mb-0 text-white">
                  Payments
                </p>
              </div>
              <div
                onClick={() => {
                  setfirst(2);
                  setChange(2);
                }}
                className={
                  first === 2
                    ? "bg_black111 border_purple border_radius_15 py10_x14 cursor_poi"
                    : "bg_black111  border_radius_15 py10_x14 cursor_poi border_111"
                }
              >
                <p className="ff_helvetica fw-normal fs_iii mb-0 text-white">
                  Gaming
                </p>
              </div>
              <div
                onClick={() => {
                  setfirst(3);
                  setChange(1);
                }}
                className={
                  first === 3
                    ? "bg_black111 border_purple border_radius_15 py10_x14 cursor_poi"
                    : "bg_black111  border_radius_15 py10_x14 cursor_poi border_111"
                }
              >
                <p className="ff_helvetica fw-normal fs_iii mb-0 text-white">
                  DAOs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg_light_grey mt-4">
          <Row className={Change == 1 ? "align-items-center" : "d-none"}>
            <Col lg={6} className="text-center text-lg-start py-3 py-lg-0">
              <img src={mainimg} alt="mainimg" className="w-100 w_lg_658px" />
            </Col>
            <Col lg={6}>
              <div className="ps-lg-5 text-center text-lg-start p-3 pt-0 p-lg-0">
                <img src={anybody} alt="anybody" />
                <p className="ff_helvetica fw-normal fs_ix text-white mb-0 mt-3 pe-lg-5">
                  It’s time to bridge the digital and physical. Anybodies helps
                  established brands like Toys’R’Us connect real-life places and
                  products with NFTs.
                </p>
                <div className="d-flex mt-3 justify-content-center justify-content-lg-start">
                  <p>
                    <a
                      href="#"
                      className="texr_purple ff_helvetica fw-normal fs_viii"
                    >
                      Learn more about
                    </a>
                  </p>
                  <p className="ms-2">
                    <a
                      href="#"
                      className="texr_purple ff_helvetica fw-normal fs_viii"
                    >
                      NFTs on Solana
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className={Change == 2 ? "align-items-center" : "d-none"}>
            <Col lg={6}>
              <div className="ps-lg-5 text-center text-lg-start p-3 pt-0 p-lg-0">
                <img src={anybody} alt="anybody" />
                <p className="ff_helvetica fw-normal fs_ix text-white mb-0 mt-3 pe-lg-5">
                  It’s time to bridge the digital and physical. Anybodies helps
                  established brands like Toys’R’Us connect real-life places and
                  products with NFTs.
                </p>
                <div className="d-flex mt-3 justify-content-center justify-content-lg-start">
                  <p>
                    <a
                      href="#"
                      className="texr_purple ff_helvetica fw-normal fs_viii"
                    >
                      Learn more about
                    </a>
                  </p>
                  <p className="ms-2">
                    <a
                      href="#"
                      className="texr_purple ff_helvetica fw-normal fs_viii"
                    >
                      NFTs on Solana
                    </a>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center text-lg-start py-3 py-lg-0">
              <img src={mainimg} alt="mainimg" className="w-100 w_lg_658px" />
            </Col>
          </Row>
        </div>
        <div className="mx_12 mt-3">
          <Row className=" align-items-center img_bg rounded-4 py-2">
            <Col xs={6} md={3} className="text-center">
              <img src={clay} alt="clay" />
            </Col>
            <Col xs={6} md={3} className="text-center">
              <img src={monkey} alt="monkey" />
            </Col>
            <Col xs={6} md={3} className="text-center mt-4 mt-lg-0">
              <img src={shib} alt="shib" />
            </Col>
            <Col xs={6} md={3} className="text-center mt-4 mt-lg-0">
              <img src={ok} alt="ok" />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default BuildForGrowth;
