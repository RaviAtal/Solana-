import React from "react";
import NavBar from "./NavBar";
import { Row } from "react-bootstrap";
import rounds_loop_img from "../Assets/Images/png/rounds_loop_img.png";

const DeveloperResourcesHero = () => {
  return (
    <>
      <section className=" bg-black d-flex flex-column min-vh-100">
        <NavBar />
        <div className="container flex-grow-1">
          <Row className="align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 ">
              <h1 className=" m-0 ff_helvetica fs_xxiii fw-normal text-white">
                Developer Resources
              </h1>
              <p className=" ff_helvetica fw-normal fs_ix m-0 col-lg-7 text_light_white pt-3">
                A manual for joining the Solana ecosystem. By builders for
                builders.
              </p>
              <div className="d-flex pt-5 gap-2">
                <button className="btn border-0  rounded-5 px-3 text-nowrap bg_green hover_hero">
                  <a
                    className=" ff_roboto fs_iii fw-normal text-black text-uppercase text-nowrap"
                    href=""
                  >
                    Build Now
                  </a>
                </button>
                <button className="btn border-1 border-white rounded-5 px-3 d-flex align-items-center text-nowrap hover_hero">
                  <a
                    className=" ff_roboto fs_iii fw-normal text-white text-uppercase text-nowrap"
                    href=""
                  >
                    Stack Exchange
                  </a>
                  <svg
                    width="16"
                    className="ms-2 hover_svg_white"
                    height="19"
                    viewBox="0 0 16 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.882812 12.3185H15.6221V13.1043C15.6221 14.4507 14.5757 15.5328 13.29 15.5328H12.6114L9.51138 18.7364V15.5328H3.21496C1.92924 15.5328 0.882812 14.4507 0.882812 13.1043V12.3185ZM0.882812 11.4757H15.6221V8.43997H0.882812V11.4757ZM0.882812 7.56854H15.6221V4.53283H0.882812V7.56854ZM13.2864 0.450684H3.21496C1.92924 0.450684 0.882812 1.53283 0.882812 2.86854V3.66497H15.6221V2.86854C15.6185 1.53283 14.5721 0.450684 13.2864 0.450684Z"
                      fill="#848895"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <div className=" bg_pur top-0 start-0"></div>
                <img
                  className="z_index_1 w-100 position_lg_relative left_10_per top-0"
                  src={rounds_loop_img}
                  alt="rounds_loop_img"
                />
              </div>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
};

export default DeveloperResourcesHero;
