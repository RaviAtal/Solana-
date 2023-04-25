import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Community = () => {
  return (
    <>
      <main className="bg-black">
        <section className="py-md-5 bg_line_milloin">
          <Container className="py-3 py-md-5">
            <Row className=" justify-content-between">
              <Col lg={4}>
                <div className=" pt-lg-5 text-center text-lg-start">
                  <p className="mb-0 ff_helvetica fw-normal fs_xix text-white pt-3">
                    Join a community
                  </p>
                  <p className="ff_helvetica fw-normal fs_xix text-white">
                    of millions
                  </p>
                </div>
              </Col>
              <Col lg={7} className="text-center text-lg-start">
                <div className="ps-lg-5">
                  <p className="blue_bg_linear ff_helvetica fw-normal fs_xxiv mb-0">
                    11.5M+
                  </p>
                  <p className=" ff_roboto fw-normal fs_iv text_light_white">
                    Active accounts
                  </p>
                </div>
                <div className="mt-5 ps-lg-5">
                  <p className="millon_bg_linear_21 ff_helvetica fw-normal fs_xxiv mb-0">
                    21.9M
                  </p>
                  <p className=" ff_roboto fw-normal fs_iv text_light_white">
                    NFTs minted
                  </p>
                </div>
                <div className="mt-5 ps-lg-5">
                  <p className="doller_bg_linear ff_helvetica fw-normal fs_xxiv mb-0">
                    $0.00025
                  </p>
                  <p className=" ff_roboto fw-normal fs_iv text_light_white">
                    Average cost per transaction
                  </p>
                </div>
              </Col>
            </Row>
            <div className="pt-lg-5"></div>
            <div className="pt-lg-5"></div>
            {/* done */}
            <Row className="py-lg-5">
              <Col lg={4}>
                <div className=" pt-lg-5 text-center text-lg-start">
                  <p className="mb-0 ff_helvetica fw-normal fs_xix text-white pt-3">
                    Made for
                  </p>
                  <p className="ff_helvetica fw-normal fs_xix text-white">
                    mass adoption.
                  </p>
                  <span className=" ff_roboto fw-normal fs_iv text_light_white text-uppercase bluedot position-relative ps-2">
                    Live data
                  </span>
                </div>
              </Col>
              <Col lg={8}>
                <Row>
                  <Col md={6}>
                    <Row className="flex-column trans_trans_y_lg_80">
                      <Col className="mt-3 mt-md-5 mt-lg-0">
                        <div className="bg_rbga_sec2 p-4">
                          <p className=" ff_helvetica fw-normal fs_xii text-white fast position-relative ps-3">
                            Fast
                          </p>
                          <p className=" ff_helvetica fw-normal fs_sm text_light_white pe-5">
                            Don’t keep your users waiting. Solana has block
                            times of 400 milliseconds — and as hardware gets
                            faster, so will the network.
                          </p>
                          <p className="bluedot position-relative ff_helvetica fw-normal fs_xii text-white ps-2">
                            3,969
                          </p>
                          <p className=" ff_roboto fw-normal fs_iv text_light_white">
                            Transactions per second
                          </p>
                        </div>
                      </Col>
                      <Col className="mt-3 mt-md-5 mt-lg-0">
                        <div className="bg_rbga_sec2 p-4">
                          <p className=" ff_helvetica fw-normal fs_xii text-white scalable ps-3 position-relative">
                            Scalable
                          </p>
                          <p className=" ff_helvetica fw-normal fs_sm text_light_white pe-5">
                            Get big, quick. Solana is made to handle thousands
                            of transactions per second, and fees for both
                            developers and users remain less than $0.01.
                          </p>
                          <p className="bluedot position-relative ff_helvetica fw-normal fs_xii text-white ps-2">
                            163,077,581,394
                          </p>
                          <p className=" ff_roboto fw-normal fs_iv text_light_white">
                            Total transactions
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row className="flex-column">
                      <Col className="mt-3 mt-md-5  mt-lg-0">
                        <div className="bg_rbga_sec2 p-4">
                          <p className=" ff_helvetica fw-normal fs_xii text-white decentralized position-relative ps-3">
                            Decentralized
                          </p>
                          <p className=" ff_helvetica fw-normal fs_sm text_light_white pe-5">
                            The Solana network is validated by thousands of
                            nodes that operate independently of each other,
                            ensuring your data remains secure and censorship
                            resistant.
                          </p>
                          <p className="bluedot position-relative ff_helvetica fw-normal fs_xii text-white ps-2">
                            1,675
                          </p>
                          <p className=" ff_roboto fw-normal fs_iv text_light_white">
                            Validator nodes
                          </p>
                        </div>
                      </Col>
                      <Col className="mt-3 mt-md-5 mt-lg-0">
                        <div className="bg_rbga_sec2 p-4">
                          <p className=" ff_helvetica fw-normal fs_xii text-white energy position-relative ps-3">
                            Energy Efficient
                          </p>
                          <p className=" ff_helvetica fw-normal fs_sm text_light_white pe-5">
                            Solana’s proof of stake network and other
                            innovations minimize its impact on the
                            <a
                              href="#"
                              className="text_green text-decoration-underline"
                            >
                              environment.
                            </a>
                            Each Solana transaction uses about the same energy
                            as a few Google searches.
                          </p>
                          <p className=" ff_helvetica fw-normal fs_xii text-white ps-2">
                            0%
                          </p>
                          <p className=" ff_roboto fw-normal fs_iv text_light_white">
                            Net carbon impact
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Community;
