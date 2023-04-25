import React, { useState } from "react";
import { Container } from "react-bootstrap";
import first from "../Assets/Images/png/11000_no.png";
import second from "../Assets/Images/png/women.png";
import third from "../Assets/Images/png/bigimg.png";
import forth from "../Assets/Images/png/computer.png";
import five from "../Assets/Images/png/48000_no.png";
import six from "../Assets/Images/png/girl.png";
import seven from "../Assets/Images/png/3800_no.png";
import eight from "../Assets/Images/png/mens.png";
import Marquee from "react-fast-marquee";

const GridSection = () => {
  const [last, setlast] = useState(2);
  return (
    <>
      <main className="bg-black">
        <section className=" overflow-hidden pt-lg-5 z_index_4 position-relative">
          <Container className="pt-5">
            <p className=" ff_helvetica fs-normal fs_xvii text-white text-center text-lg-start">
              Join a thriving community.
            </p>
          </Container>
          <Marquee pauseOnHover>
            <div className="d-grid gridclass">
              <div className="girditems grid1 ms-3">
                <img src={first} alt="first" className="w-100" />
              </div>
              <div className="girditems grid2 ms-3">
                <img src={second} alt="second" className="w-100" />
              </div>
              <div className="girditems grid3">
                <img src={third} alt="third" className="w-100 h-100" />
              </div>
              <div className="girditems grid4">
                <img src={forth} alt="forth" className="w-100 " />
              </div>
              <div className="girditems grid5">
                <img src={five} alt="five" className="w-100 " />
              </div>
              <div className="girditems grid6">
                <img src={six} alt="six" className="w-100 " />
              </div>
              <div className="girditems grid7">
                <img src={seven} alt="seven" className="w-100 " />
              </div>
              <div className="girditems grid8">
                <img src={eight} alt="eight" className="w-100 " />
              </div>
            </div>
          </Marquee>
          <Container>
            <div className="py-lg-5"></div>
            <div className="py-5 text-center">
              <p className=" ff_helvetica fs-normal fs_xvii text-white">
                It's time to join the thousands of creators, <br /> artists, and
                developers using Solana.
              </p>
              <button
                onClick={() => {
                  setlast(0);
                }}
                className={
                  last === 0
                    ? "py-2 px_3 py-md-3 px-3 rounded-5 border-white bg-transparent text-white text-uppercase purple_bglinear_on_hover purple_bglinear fs_iii border-0"
                    : "py-2 px_3 py-md-3 px-3 rounded-5 border-white bg-transparent text-white text-uppercase purple_bglinear_on_hover purple_bglinear fs_iii border-0"
                }
              >
                Start building
              </button>
            </div>
            <div className="py-lg-5"></div>
          </Container>
          <div>
            <Container className="bg_GridSection z_index_1"></Container>
          </div>
        </section>
      </main>
    </>
  );
};

export default GridSection;
