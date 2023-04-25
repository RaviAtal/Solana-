import React, { useState, useEffect } from "react";
import logo from "../Assets/Images/png/solana_nav_logo.png";

const PreLoader = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
      document.body.style.display = "block";
      document.body.classList.remove("overflow-hidden");
    }, 5000);

    // clean up the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader ? (
        <div className="preloader ">
          <img className="start" src={logo} alt="logo" />
        </div>
      ) : null}
    </>
  );
};

export default PreLoader;
