import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footer_logo from "../Assets/Images/png/footer_logo.png";
import youtube_logo_footer from "../Assets/Images/png/youtube_logo_footer.png";
import twit_logo_footer from "../Assets/Images/png/twit_logo_footer.png";
import discord_logo_footer from "../Assets/Images/png/discord_logo_footer.png";
import redit_logo_footer from "../Assets/Images/png/redit_logo_footer.png";
import github_logo_footer from "../Assets/Images/png/github_logo_footer.png";
import teli_logo_footer from "../Assets/Images/png/teli_logo_footer.png";
import glob_footer from "../Assets/Images/png/glob_footer.png";

const Footer = () => {
  return (
    <>
      <footer className="bg_footer">
        <section className="py-5">
          <Container className="py-lg-4">
            <Row className=" justify-content-between">
              <Col md={4}>
                <div>
                  <a href="/">
                    <img src={footer_logo} alt="footer_logo" />
                  </a>
                  <p className="mb-4 ff_helvetica fw-normal fs_iv text-white mt-4">
                    Managed by Solana Foundation
                  </p>
                  <div className="d-flex">
                    <a href="#">
                      <img
                        className="anim"
                        src={youtube_logo_footer}
                        alt="youtube_logo_footer"
                      />
                    </a>
                    <a href="#">
                      <img
                        className="ms-2 ps-2"
                        src={twit_logo_footer}
                        alt="twit_logo_footer"
                      />
                    </a>
                    <a href="#">
                      <img
                        className="ms-2 ps-2"
                        src={discord_logo_footer}
                        alt="discord_logo_footer"
                      />
                    </a>
                    <a href="#">
                      <img
                        className="ms-2 ps-2"
                        src={redit_logo_footer}
                        alt="redit_logo_footer"
                      />
                    </a>
                    <a href="#">
                      <img
                        className="ms-2 ps-2"
                        src={github_logo_footer}
                        alt="github_logo_footer"
                      />
                    </a>
                    <a href="#">
                      <img
                        className="ms-2 ps-2"
                        src={teli_logo_footer}
                        alt="teli_logo_footer"
                      />
                    </a>
                  </div>
                  <p className=" ff_helvetica fw-normal fs_iv  mt-3 ff_gray py-3">
                    © 2023Solana Foundation. All rights reserved.
                  </p>
                </div>
              </Col>
              <Col md={7} lg={6}>
                <Row className=" justify-content-md-evenly justify-content-xxl-between">
                  <Col xs={6} md={4} xxl={3}>
                    <ul className="mb-0 ps-0">
                      <li className="ff_helvetica fw-normal fs_iv text-white text-uppercase">
                        Solana
                      </li>
                      <li className="mt_13">
                        <a
                          href="#"
                          className="ff_helvetica fw-normal fs_iii ff_gray clr_white_hover"
                        >
                          Grants
                        </a>
                      </li>
                      <li className="mt_11">
                        <a
                          href="#"
                          className="ff_helvetica fw-normal fs_iii ff_gray clr_white_hover"
                        >
                          Break Solana
                        </a>
                      </li>
                      <li className="mt_11">
                        <a
                          href="#"
                          className="ff_helvetica fw-normal fs_iii ff_gray clr_white_hover"
                        >
                          Media Kit
                        </a>
                      </li>
                      <li className="mt_11">
                        <a
                          href="#"
                          className="ff_helvetica fw-normal fs_iii ff_gray clr_white_hover"
                        >
                          Careers
                        </a>
                      </li>
                      <li className="mt_11">
                        <a
                          href="#"
                          className="ff_helvetica fw-normal fs_iii ff_gray clr_white_hover"
                        >
                          Disclaimer
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col xs={6} md={4} xxl={3}>
                    <ul className="mb-0 ps-0">
                      <li className="ff_helvetica fw-normal fs_iv text-white text_uppercase ">
                        Get Connected
                      </li>
                      <li className="mt_13">
                        <a
                          href="#"
                          className="ff_helvetica fw-normal fs_iii ff_gray clr_white_hover"
                        >
                          Ecosystem
                        </a>
                      </li>
                      <li className="mt_11">
                        <a
                          href="#"
                          className="ff_helvetica fw-normal fs_iii ff_gray clr_white_hover"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="mt_11">
                        <a
                          href="#"
                          className="ff_helvetica fw-normal fs_iii  ff_gray clr_white_hover"
                        >
                          Newsletter
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col xs={6} md={4} xxl={3} className="mt-4 mt-md-0">
                    <div className="d-flex align-items-center cur_poi">
                      <img src={glob_footer} alt="glob_footer" />
                      <p className="mb-0 text_uppercase ff_helvetica fw-normal fs_iii ff_gray ms-1 clr_white_hover">
                        en
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </footer>
    </>
  );
};

export default Footer;
