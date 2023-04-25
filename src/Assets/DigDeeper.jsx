import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import arrow_right from "../Assets/Images/png/arrow_right_dignal.png";
import { digDeeper_arr } from "../Components/DigDeeperMap";

const DigDeeper = () => {
  return (
    <>
      <section className="bg-black">
        <Container className="py-lg-5">
          <div className="py-5">
            <p className=" ff_helvetica fw-normal fs_xvi text-white m-0">
              Dig deeper.
            </p>
            <p className=" ff_helvetica fw-normal fs_viii text_light_white">
              Learn from resources across the greater Solana ecosystem.
            </p>
            <Row>
              {digDeeper_arr.map((index) => {
                return (
                  <Col lg={4} md={6} className="mt-4">
                    <div className="rounded-4 black_bg h-100 p-4 position-relative overflow-hidden cur_poi">
                      <p className=" ff_helvetica fw-normal fs_ii texr_purple">
                        tool / library
                      </p>
                      <p className=" ff_helvetica fw-normal fs_vii text-white">
                        {index.para1}
                      </p>
                      <p className=" ff_helvetica fw-normal fs_iv text-white col-xxl-8 pb-3">
                        {index.para2}
                      </p>
                      <div className=" position-absolute bottom-0 start-0 px-4 mb-2 ">
                        <div className="pt-4 pb-3 d-flex align-items-center gap-2">
                          <a
                            href="#"
                            y
                            className="ff_helvetica fw-normal fs_i text-white arrowimg"
                          >
                            Learn more
                          </a>
                          <img src={arrow_right} alt="arrow_right" />
                        </div>
                      </div>
                      <div className="purple_blur_hover position-absolute start-50 bottom_8 translate-middle-x"></div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default DigDeeper;
