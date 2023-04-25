import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import arrow from "../Assets/Images/png/arrow_right_dignal.png";
import arightarrow from "../Assets/Images/svg/right_arrow_dignal.svg";
import change_log from "../Assets/Images/png/change_log.png";
import youtube_logo from "../Assets/Images/png/youtube.png";
import pod_cast from "../Assets/Images/png/pod_cast.png";

const GoToSource = () => {
  return (
    <>
      <section className=" GoToSource_bg">
        <Container className="py-5">
          <div className="py-3">
            <p className=" ff_helvetica fw-normal fs_xv text-white m-0">
              Go to the source.
            </p>
            <p className=" ff_helvetica fw-normal fs_viii text_light_white">
              Read the documentation for Solana and popular tools.
            </p>
          </div>
          <Row className=" flex-column-reverse  flex-lg-row">
            <Col lg={6} className="pt-4 pt-lg-0">
              <div className="me-2">
                <div className="d-flex justify-content-between border_bottom py-4 align-items-center">
                  <h5 className=" m-0 ff_helvetica fw-normal fs_xiii text-white">
                    Solana Docs
                  </h5>
                  <button className=" btn ff_roboto fw-normal fs_iii text-white  border-1 border-white rounded-5 bg-transparent py-2 text-uppercase">
                    View all
                    <span className="mx-3">
                      <img src={arrow} alt="arrow" />
                    </span>
                  </button>
                </div>
                <p className=" ff_helvetica fw-normal fs_viii text-white pe-lg-4 col-lg-8 pt-4">
                  Learn how Solana works and get a high-level understanding of
                  Solana's architecture.
                </p>
              </div>
            </Col>
            <Col lg={6} className="pt-4 pt-lg-0">
              <div className="me-2">
                <div className="d-flex justify-content-between border_bottom py-4 align-items-center">
                  <h5 className=" m-0 ff_helvetica fw-normal fs_xiii text-white">
                    Metaplex Docs
                  </h5>
                  <button className=" btn ff_roboto fw-normal fs_iii text-white  border-1 border-white rounded-5 bg-transparent py-2 text-uppercase">
                    View all
                    <span className="mx-3">
                      <img src={arrow} alt="arrow" />
                    </span>
                  </button>
                </div>
                <p className=" ff_helvetica fw-normal fs_viii text-white col-lg-10 pe-lg-4 pt-4">
                  Learn what you build with Metaplex, make the process of
                  creating and launching NFTs easier.
                </p>
              </div>
            </Col>
            <Col lg={6} className="pt-lg-5 pt-5">
              <div className="h-100">
                <h5 className=" ff_helvetica fw-normal fs_xviii m-0 text-white pb-3 text-nowrap">
                  Solana Changelog
                </h5>
                <p className=" ff_helvetica fw-normal fs_viii text-white pb-5 col-xl-9">
                  Some more Solana changes from Jacob & Joe. Subscribe to the
                  newsletter: https://solana.us17.list-manage.com/s... Proposal
                  - Priced Compute Units: ...
                </p>
                <button className=" btn border-1 border-white rounded-5 cur_poi d-inline-block ps-4 mb-0 py-0 ps-1 ff_roboto fw-normal fs_iii text-white text-uppercase">
                  Latest episode
                  <img
                    src={arightarrow}
                    alt="arightarrow"
                    className="pe-4 ps-2"
                  />
                </button>
              </div>
            </Col>
            <Col lg={6} className="pt-lg-5 pt-5">
              <div className="h-100">
                <img className="w-100" src={change_log} alt="change_log" />
              </div>
            </Col>
          </Row>
          {/* row_2 */}
          <Row className="py-5">
            <Col lg={6}>
              <div className="bg_dark rounded-4 p-md-5 p-2 h-100">
                <p className=" ff_helvetica fw-normal fs_xv text-white">
                  Solana Developer Update
                </p>
                <p className=" ff_helvetica fw-normal fs_v text_light_white pe-md-5 pt-md-4 pb-md-3">
                  Sign up to the newsletter and learn about new resources, new
                  commits, new proposals, and more.
                </p>
                <form className="rounded-5 bg-black d-flex flex-column flex-md-row justify-content-between mt-5 w_495">
                  <input
                    type="email"
                    placeholder="Email"
                    className=" ff_roboto fw_600 fs_iii ff_gray bg-black border-0 b_radius_800 w_md_79 outline_0 py-4 px-3"
                  />
                  <button className=" ff_roboto fw-normal fs_iii text-black bg_lemonclr bg_green rounded-5 my-2 mx-2 px-4 py-2 text-nowrap">
                    Sign up
                  </button>
                </form>
              </div>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <div className="bg_dark rounded-4 p-md-5 p-2 h-100">
                <p className=" ff_helvetica fw-normal fs_xv text-white">
                  Even more resources
                </p>
                <p className=" ff_helvetica fw-normal fs_vi text_light_white pe-md-5 pt-md-4 pb-md-3 col-xl-10">
                  More videos, more episodes. Discussions between industry
                  leaders in both blockchain and technology, our team, and
                  community developers..
                </p>
                <div className="d-flex mt-5 align-items-center">
                  <button className=" bg-transparent text-white ff_roboto fw-normal  fs_iii py-2 text-center rounded-5 btn border-1 border-white text-nowrap w_189">
                    YouTube
                    <img
                      src={youtube_logo}
                      alt="youtube_logo"
                      className="ms-2"
                    />
                  </button>
                  <button className="bg-transparent text-white ff_roboto fw-normal  fs_iii py-2 text-center rounded-5 ms-4 btn border-1 border-white text-nowrap w_189">
                    Podcast
                    <img src={pod_cast} alt="pod_cast" className="ms-2" />
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default GoToSource;
