import React, { useState, useEffect } from "react";

const PreLoader = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
      document.body.style.display = "block";
      document.body.classList.remove("overflow-hidden");
    }, 3000);

    // clean up the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>{loader ? <div className="preloader ">Loading...</div> : null}</>
  );
};

export default PreLoader;
