import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import i1 from "../../assets/callpapers.svg";
import { scroller } from "react-scroll";

import { useLocation } from "react-router-dom";
import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";
export default function KeynoteSpeakers() {
  let navigate = useNavigate();
  return (
    <>
      <div className="row m-3 p-2 mt-5 align-items-center " id="mainpage">
        <div className="col-md-7  mt-5  col-12 m-0 p-0">
          <div>
            <br />
            <br />
            <h1>Keynote Speakers</h1>
            <br />
            <br />
          </div>
        </div>

        <div className="col-md-5 col-12 m-0 p-0 bg-white h-100 ">
          <img className="m-0 w-100 justify-content-end" src={i1} alt="..." />
        </div>
      </div>
      <div class="container-fluid" style={{ marginBottom: "30px" }}>
        <div class="row m-0 p-0 justify-content-center">

          <div class="col-lg-3 col-md-4 col-sm-6 mx-2 my-2 col-12 ">
            <div
              class="card h-100"
              id="key"
              onClick={(e) => {
                let path = `/PravinHungund`;
                navigate(path);
              }}
            >
              <img class="card-img-top" src={person2} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Mr. Pravin Hungund</h5>
                <p class="card-text">Chief Technology Officer</p>
                <p class="card-text">Metaz Digital</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6 mx-2 my-2 col-12 ">
            <div
              class="card h-100"
              id="key"
              onClick={(e) => {
                let path = `/BalamuruganEaswaran`;
                navigate(path);
              }}
            >
              <img class="card-img-top" src={person3} style={{ height: "330px" }} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Dr. Zahid Akhtar</h5>
                <p class="card-text">State University of New York Polytechnic Institute C135</p>
                <p class="card-text">USA</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6 mx-2 my-2 col-12 ">
            <div
              class="card h-100"
              id="key"
              onClick={(e) => {
                let path = `/BharaniPJaganMohan`;
                navigate(path);
              }}
            >
              <img class="card-img-top" src={person1} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Mr. Bharani P Jagan Mohan</h5>
                <p class="card-text">Manager </p>
                <p class="card-text">
                  Seagen
                </p>
              </div>
            </div>
          </div>




        </div>
      </div>
    </>
  );
}
