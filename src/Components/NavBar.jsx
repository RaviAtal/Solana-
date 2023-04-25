import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo_nav from "../Assets/Images/png/solana_nav_logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  if (showNav) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <>
      <nav>
        {/* blue_bar */}
        <section className="bg_clr_NavBar text-center px-2">
          <a
            className=" ff_robonto fw-normal fs_v text-black getEarlyAccess_hover"
            href="/"
          >
            Breakpoint 2023 - New City. New Vibes - Get Early Access ->
          </a>
        </section>
        {/* nav_bar */}
        <section className="bg_nav">
          <Container>
            <div className="d-flex justify-content-between py-3 align-items-center">
              <Link to="/">
                <img className="" src={logo_nav} alt="logo" />
              </Link>
              <ul className="d-none mb-0 d-md-flex align-items-center gap-5">
                <li class=" dropdown">
                  <a
                    class="nav-link dropdown-toggle ff_helvetica ff_gray fs_v fw-normal hover_text_nav"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Learn
                  </a>
                  <ul class="dropdown-menu bg_drop_down">
                    <li>
                      <a
                        class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                        href="#"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                        href="#"
                      >
                        Another action
                      </a>
                    </li>
                    <li> </li>
                    <li>
                      <a
                        class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                        href="#"
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class=" dropdown">
                  <a
                    class="nav-link dropdown-toggle ff_helvetica ff_gray fs_v fw-normal hover_text_nav"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Build
                  </a>
                  <ul class="dropdown-menu bg_drop_down">
                    <li>
                      <a
                        class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                        href="#"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                        href="#"
                      >
                        Another action
                      </a>
                    </li>
                    <li>
                      <Link
                        class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                        to="/BuildDeveloperResources"
                      >
                        Developer Resources
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class=" dropdown">
                  <a
                    class="nav-link dropdown-toggle ff_helvetica ff_gray fs_v fw-normal hover_text_nav"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Network
                  </a>
                  <ul class="dropdown-menu bg_drop_down">
                    <li>
                      <a
                        class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                        href="#"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                        href="#"
                      >
                        Another action
                      </a>
                    </li>
                    <li> </li>
                    <li>
                      <a
                        class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                        href="#"
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class=" dropdown">
                  <a
                    class="nav-link dropdown-toggle ff_helvetica ff_gray fs_v fw-normal hover_text_nav"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Community
                  </a>
                  <ul class="dropdown-menu bg_drop_down">
                    <li>
                      <a
                        class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                        href="#"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                        href="#"
                      >
                        Another action
                      </a>
                    </li>
                    <li> </li>
                    <li>
                      <a
                        class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                        href="#"
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <button
                onClick={() => setShowNav(true)}
                className="btn border-0 d-md-none"
              >
                <span className="bars"></span>
                <span className="bars"></span>
                <span className="bars"></span>
              </button>
              {/* respove nav */}
              <div className={showNav ? "show_nav" : "hide_nav"}>
                <ul className="d-flex d-md-none flex-column mb-5 align-items-center justify-content-center">
                  <div className=" d-flex justify-content-between align-items-center w-100 mb-4">
                    <Link to="/">
                      <img className="" src={logo_nav} alt="logo" />
                    </Link>
                    <button
                      onClick={() => setShowNav(false)}
                      className="btn btn-close p-3 rounded-5 text-white bg-white"
                    ></button>
                  </div>
                  <ul className="mb-0 p-0 w-100 d-flex flex-column gap-3 mt-4">
                    <li class=" dropdown w-100 ">
                      <a
                        class="nav-link dropdown-toggle ff_helvetica ff_gray fs_v fw-normal hover_text_nav "
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Learn
                      </a>
                      <ul class="dropdown-menu bg_drop_down w-100">
                        <li>
                          <a
                            class="dropdown-item ff_helvetica fs_v fw-normal text-white  "
                            href="#"
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                            href="#"
                          >
                            Another action
                          </a>
                        </li>
                        <li> </li>
                        <li>
                          <a
                            class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                            href="#"
                          >
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <hr className="line_in_nav_resp" />
                    <li class=" dropdown">
                      <a
                        class="nav-link dropdown-toggle ff_helvetica ff_gray fs_v fw-normal hover_text_nav"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Build
                      </a>
                      <ul class="dropdown-menu bg_drop_down w-100">
                        <li>
                          <a
                            class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                            href="#"
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                            href="#"
                          >
                            Another action
                          </a>
                        </li>
                        <li>
                          <Link
                            class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                            to="/BuildDeveloperResources"
                          >
                            Developer Resources
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <hr className="line_in_nav_resp" />
                    <li class=" dropdown">
                      <a
                        class="nav-link dropdown-toggle ff_helvetica ff_gray fs_v fw-normal hover_text_nav"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Network
                      </a>
                      <ul class="dropdown-menu bg_drop_down w-100">
                        <li>
                          <a
                            class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                            href="#"
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                            href="#"
                          >
                            Another action
                          </a>
                        </li>
                        <li> </li>
                        <li>
                          <a
                            class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                            href="#"
                          >
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <hr className="line_in_nav_resp" />
                    <li class=" dropdown">
                      <a
                        class="nav-link dropdown-toggle ff_helvetica ff_gray fs_v fw-normal hover_text_nav"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Community
                      </a>
                      <ul class="dropdown-menu bg_drop_down w-100">
                        <li>
                          <a
                            class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                            href="#"
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                            href="#"
                          >
                            Another action
                          </a>
                        </li>
                        <li> </li>
                        <li>
                          <a
                            class="dropdown-item ff_helvetica fs_v fw-normal text-white hover_text_dropdown"
                            href="#"
                          >
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </nav>
    </>
  );
};

export default NavBar;
