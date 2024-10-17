import React from "react";
import "./Header.css";
import christLogo from '../../assets/logoofchristies.png'
const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center m-0 p-0">
      <div
        style={{ fontFamily: "Arial", fontWeight: "600" }}
        className="iccsstText"
      ><h1 style={{fontWeight:600}}>ICCSST - 2025</h1>
        
      </div>
      <div className="col text-end">
        <img
          src={christLogo}
          alt="Christ (Deemed to be) University Logo"
          className="align-text-top img-fluid"
        />
      </div>
    </div>
  );
};

export default Header;
