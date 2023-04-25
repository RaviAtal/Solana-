import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Main from "./Components/Main";
import BuildDeveloperResources from "./Components/BuildDeveloperResources";
import BackToTop from "./Components/BackToTop";
import PreLoader from "./Components/PreLoader";
import { useState } from "react";

function App() {
 
  return (
    <div className="App">
      <PreLoader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/BuildDeveloperResources"
          element={<BuildDeveloperResources />}
        />
      </Routes>
      <BackToTop />
    </div>
  );
}

export default App;
