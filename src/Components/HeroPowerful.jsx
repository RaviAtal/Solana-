import React, { useState } from "react";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import img_one from "../Assets/Images/png/brace_img.png";
import img_two from "../Assets/Images/png/circle_img.png";
import img_three from "../Assets/Images/png/discord_img.png";
import img_four from "../Assets/Images/png/google_img.png";
import img_five from "../Assets/Images/png/jump_img.png";
import img_six from "../Assets/Images/png/lollapalzaimg.png";
import img_seven from "../Assets/Images/png/magic_img.png";

export const HeroPowerful = () => {
  const [first, setfirst] = useState(0);

  return (
    <>
      <header className="bg-black">
        <NavBar />
        <section className="bg_hero bg_pos_xs_29">
          <Container>
            <div className="pt-lg-3"></div>
            <div className="pt-lg-5"></div>
            <div className="text-center pt-5">
              <p className="ff_helvetica fw-normal fs_xxii text-white ">
                Powerful for developers.
                <br />
                <span className="fs_xxi">Fast for everyone.</span>
              </p>
              <p className="ff_helvetica fw-normal fs_ix max_w_589 mx-auto text-white pt-md-5">
                Bring blockchain to the people. Solana supports experiences for
                power users, new consumers, and everyone in between.
              </p>
              <div className="d-flex justify-content-center pt-4 pt-md-5">
                <button
                  onClick={() => {
                    setfirst(0);
                  }}
                  className={
                    first === 0
                      ? "py-2 px_sm_3 py-md-3 px_33 rounded-5 border-0 border-white btn bg-transparent text-white text-uppercase purple_bglinear_on_hover purple_bglinear fs_iii text-nowrap"
                      : "py-2 px_sm_3 py-md-3 px_33 rounded-5 border-1 border-white btn bg-transparent text-white text-uppercase purple_bglinear_on_hover fs_iii text-nowrap"
                  }
                >
                  Start building
                </button>
                <button
                  onClick={() => {
                    setfirst(1);
                  }}
                  className={
                    first === 1
                      ? "py-2 px_sm_3 py-md-3 px_33 rounded-5 border-0 border-white btn bg-transparent text-white text-uppercase purple_bglinear_on_hover purple_bglinear ms-3 fs_iii  text-nowrap"
                      : "py-2 px_sm_3 py-md-3 px_33 rounded-5 border-1 border-white btn bg-transparent text-white text-uppercase purple_bglinear_on_hover ms-3 fs_iii text-nowrap"
                  }
                >
                  Read docs
                </button>
              </div>
              <div className="pt-md-5 pt-1">
                <p className="ff_helvetica fw-normal fs_iii text_blue text-uppercase pt-5">
                  Powering tools and integrations from companies all around the
                  world
                </p>
              </div>
            </div>
            <Marquee speed={100} pauseOnHover>
              <img src={img_one} alt="img_one" className="ms-5" />
              <img src={img_two} alt="img_two" className="ms-5" />
              <img src={img_three} alt="img_three" className="ms-5" />
              <img src={img_four} alt="img_four" className="ms-5" />
              <img src={img_five} alt="img_five" className="ms-5" />
              <img src={img_six} alt="img_six" className="ms-5" />
              <img src={img_seven} alt="img_seven" className="ms-5" />
            </Marquee>
          </Container>
        </section>
      </header>
    </>
  );
};
