import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

// import i1 from "../../assets/1.svg";
// import i2 from "../../assets/2.svg";
// import i3 from "../../assets/3.svg";
// import i4 from "../../assets/4.svg";
// import i5 from "../../assets/5.svg";
// import i6 from "../../assets/6.svg";
//import oman from "../../assets/MCBS_Logo.png";
import '../../index.css';
import Header from '../HeaderCom/Header';
import bg from "../../assets/bg.svg";
import si from "../../assets/callpapers.svg";
import poster from "../../assets/poster.png";
// import oman from "../../assets/OMAN.png";
import christlogo from "../../assets/logoofchristies.png";
import oman from "../../assets/UNigeria.png";
import texila from "../../assets/Texila.png";
import UBuraimi from "../../assets/UBuraimi.png";
import Ucinicinnati from "../../assets/resizeCincinnati.png";
import Unizwaz from "../../assets/Unizwaz.png";
import lincoln from "../../assets/lincoln university.png";

export default function Home() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const scrollToSection = () => {
    scroller.scrollTo(id);
  };

  const startTimer = () => {
    const countdownDate = new Date("June 05,2025 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    scrollToSection();
    startTimer();
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearInterval(interval.current);
    };
  });

  let navigate = useNavigate();

  return (
    <div>
      {id}
      <div
        className="row m-0 p-0 p-5 justify-content-between align-items-center"
        style={{ minHeight: "60vh", backgroundImage: `url(${bg})` }}
      >
      <div>
      <Header />
    </div>
        {/* <marquee
          className="font-weight-bold"
          style={{
            fontFamily: "Nunito",
            fontWeight: "600",
            fontSize: "1.3rem",
            color: "nk-blue-bg",
            width: "50%",
            margin: "0 auto",
            display: "block",
          }}
        >
          Results for Review Submission were Published on April 21, 2025
        </marquee> */}

        <div className="col-12 mt-5">
          <h1
            className="font-weight-bold"
            style={{ fontFamily: "Arial", fontSize: "3rem" }}
          >
            <div style={{ marginTop: "1rem" }}>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "1.42rem",
                  marginTop: "1rem",
                  color: "nk-blue-bg",
                  textAlign: "center",
                }}
              >
                INTERNATIONAL CONFERENCE ON COMPUTATIONAL SCIENCES AND SUSTAINABLE TECHNOLOGIES
              </p>
              <p style={{ fontSize: "1.42rem", fontWeight: '600', textAlign:'center' }}>
                In Collaboration with Department of Computer Science
              </p>
            </div>
          </h1>
          <div style={{ marginTop: "1rem" }}>
            <h3
              style={{
                fontFamily: "Arial",
                fontSize: "1.2rem",
                fontWeight: 550,
                textTransform: "uppercase",
                textAlign:'center'
              }}
            >
              Republic of Zambia | United States of America | Federation of
              Malaysia | Sultanate of Oman
            </h3>
          </div>
        </div>

        <div className="d-flex TimerDiv">
          <div className="col-md-6 col-12 m-0 p-0 py-1">
            <div className="row m-0 p-0 text-light font-weight-bold">
              <div className="col-md-8 col-12 m-0 p-0">
                <div className="row m-0 my-2 p-0 p-4  nk-blue-bg justify-content-between">
                  <div className="col m-0 p-0">
                    <h5 className="m-0 p-0">Start</h5>
                    {/* Changing the data */}
                    <p className="m-0 p-0 fs-3">05.06.2025</p>
                  </div>
                  <div className="col m-0 p-0 text-end">
                    <h5 className="m-0 p-0">End</h5>
                    <p className="m-0 p-0 fs-3">06.06.2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 m-0 p-0 py-1">
            <div className="col-md-8 col-12 m-0 p-0">
              <div className="row m-0 p-4 textColorHour nk-yellow-bg justify-content-center align-items-end text-center ">
                <div className="col-2 m-0 p-0 ">
                  <p>Days</p>
                  <h5 className="fs-5">{timerDays}</h5>
                </div>
                <div className="col-1 m-0 p-0">
                  <h5 className="fs-5">:</h5>
                </div>
                <div className="col-2 m-0 p-0">
                  <p>Hours</p>
                  <h5 className="fs-5">{timerHours}</h5>
                </div>
                <div className="col-1 m-0 p-0">
                  <h5 className="fs-5">:</h5>
                </div>
                <div className="col-2 m-0 p-0">
                  <p>Min</p>
                  <h5 className="fs-5">{timerMinutes}</h5>
                </div>
                <div className="col-1 m-0 p-0 ">
                  <h5 className="fs-5">:</h5>
                </div>
                <div className="col-2 m-0 p-0">
                  <p>Sec</p>
                  <h5 className="fs-5">{timerSeconds}</h5>
                </div>
              </div>
            </div>
            <div className="row m-0 p-0 justify-content-start">
              <div className="col-md-5 col-12 m-0 p-0 ">
                <div className=" text-center border-0 m-0 my-2 p-0">
                  <div
                    className="nk-blue-bg p-3 px-5 text-light nk-btn fw-bold"
                    onClick={(e) => {
                      let path = `/callForPapers/mainpage`;
                      navigate(path);
                    }}
                  >
                    Call for Papers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col-md-5 col-12 m-0 p-0 bg-white h-100 "
        style={{ display: "none" }}
      >
        <img className="m-0 w-100 justify-content-end" src={si} alt="..." />
      </div>

      <div
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
          fontFamily: "Nunito",
        }}
      >
        <h3
          style={{
            paddingBottom: "20px",
            paddingTop: "20px",
            fontFamily: "Playfair Display",
          }}
        >
          About the Conference
        </h3>
        <p style={{ textAlign: "justify" }}>
          {/* This conference be conducted jointly by CHRIST (Deemed to be
          University), Bangalore, India and Modern College of Business and
          Science, Muscat, Oman. It would provide an opportunity to spotlight
          research ideas to an international community as well as be a platform
          to get abreast on the latest trends in the field of Businesses and
          Computing Sciences.In the last three decades, numerous technologies
          have surfaced replacing the older ones and also getting themselves
          replaced rapidly, while on the other hand, alternate technologies with
          competitive affordability also have been produced swiftly. Therefore,
          the challenge for new technology is its sustainability and
          affordability. This conference aims in exploring research outputs that
          are bringing out new technologies that are both sustainable and
          affordable to the millions who consume them or make a commodity of
          them. */}
          This conference is conducted jointly by CHRIST (Deemed to be
          University), Bangalore, India, and Modern College of Business and
          Science, Muscat, Oman. It would provide an opportunity to spotlight
          research ideas to an international community as well as be a platform
          to get abreast on the latest trends in the field of Business and
          Computing Sciences. In the last three decades, numerous technologies
          have surfaced replacing the older ones and also getting themselves
          replaced rapidly, while on the other hand, alternate technologies with
          competitive affordability also have been produced swiftly. Therefore,
          the challenge for new technology is its sustainability and
          affordability. This conference aims in exploring research outputs that
          are bringing out new technologies that are both sustainable and
          affordable to the millions who consume them or make a commodity of
          them.{" "}
        </p>
        <p style={{ textAlign: "justify" }}>
          {/* It aims to offer an international platform for academicians,
          researchers, engineers, entrepreneurs, industrial experts and budding
          research scholars around the world to share their research findings
          with global experts. Such gathering will also help the delegates to
          establish research or business relations as well as to find
          international linkage for future collaborations in their career path. */}
          It aims to offer an international platform for academicians,
          researchers, engineers, entrepreneurs, industry experts, and budding
          research scholars around the world to share their research findings
          with global experts. Such a gathering will also help the delegates to
          establish research or business relations as well as to find
          international linkage for future collaborations in their career path.
        </p>

        <p style={{ textAlign: "justify", paddingBottom: "20px" }}>
          {/* This Conference will be carried out in a hybrid format, allowing
          world-scattered researchers, academicians, business and industry
          professionals, and policy makers to participate in this Conference.
          There will be two venues for the conference; Modern College of
          Business and Science, Muscat, Oman and CHRIST (Deemed to be
          University), Bangalore, India. */}
          This Conference will be carried out in a hybrid format, allowing
          world-scattered researchers, academicians, business and industry
          professionals, and policymakers to participate in this Conference.
          There will be two venues for the conference; Modern College of
          Business and Science, Muscat, Oman, and CHRIST (Deemed to be
          University), Bangalore, India.{" "}
        </p>
      </div>

      {/* important dates */}
      <div
        id="dates"
        className="row p-0 text-light align-items-center nk-bg-7 CaPaFoIm"
      >
        <div className="col-md-3 col-12 m-0 p-4 ">
          <h2>Important Dates</h2>
        </div>
        <div
          className="col-md-9 col-12 m-0 p-4 nk-bg-1"
          style={{ fontFamily: "Nunito" }}
        >
          {/* change the padding-inline-block here */}
          <div className="row m-0 p-3 align-items-center border-bottom-custom">
            <div className="col m-0 p-0">
              <h5 className="mt-4 fontControl">
                Last date for submission of Full length paper
              </h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4 fontControl">25 February 2025</h5>
            </div>
          </div>
          <div className="row m-0 p-3 align-items-center border-bottom-custom">
            <div className="col m-0 p-0">
              <h5 className="mt-4 fontControl">Author Notification</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4 fontControl">25 March 2025</h5>
            </div>
          </div>
          <div className="row m-0 p-3 align-items-center border-bottom-custom">
            <div className="col m-0 p-0">
              <h5 className="mt-4 fontControl">
                Camera ready submission with copy right
              </h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4 fontControl">30 March 2025</h5>
            </div>
          </div>
          <div className="row m-0 p-3 align-items-center border-bottom-custom">
            <div className="col m-0 p-0">
              <h5 className="mt-4 fontControl">Date for Registration</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4 fontControl">10 April 2025</h5>
            </div>
          </div>
          <div className="row m-0 p-3 align-items-center border-bottom-custom">
            <div className="col m-0 p-0">
              <h5 className="mt-4 fontControl">Conference Date</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4 fontControl"> 05 & 06th June 2025</h5>
            </div>
          </div>
          <div className="row m-0 p-3 align-items-center ">
            <div className="col m-0 p-0">
              <h5 className="mt-4 fontControl">Result</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4 fontControl">Update soon</h5>
            </div>
          </div>
        </div>
      </div>

      {/* presentation topic */}

      <div
        id="topics"
        className="row mt-4 p-0 text-light align-items-center nk-bg-4 CaPaFoIm"
      >
        <div className="col-md-3 col-12 m-0 p-4 ">
          <h2>Important Topics</h2>
        </div>
        <div
          className="col-md-9 col-12 m-0 p-4 nk-bg-5"
          style={{ fontFamily: "Nunito" }}
        >
          {/* change the padding-inline-block here */}
          <div className="row m-0 p-3 align-items-center border-bottom-custom">
            <div className="col m-0 p-0">
              <h5 className="mt-4 fontControl">Artifical Intelligence</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <button
                className="btn btn-outline-light"
                onClick={() => navigate("/callForPapers/AI")}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="row m-0 p-3 align-items-center border-bottom-custom">
            <div className="col m-0 p-0">
              <h5 className="mt-4 fontControl">Blockchain Technology</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <button
                className="btn btn-outline-light"
                onClick={() => navigate("/callForPapers/BT")}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="row m-0 p-3 align-items-center border-bottom-custom">
            <div className="col m-0 p-0">
              <h5 className="mt-4 fontControl">Cloud Computing</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <button
                className="btn btn-outline-light"
                onClick={() => navigate("/callForPapers/CC")}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="row m-0 p-3 align-items-center border-bottom-custom">
            <div className="col m-0 p-0">
              <h5 className="mt-4 fontControl">Cyber Security</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <button
                className="btn btn-outline-light"
                onClick={() => navigate("/callForPapers/CS")}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="row m-0 p-3 align-items-center border-bottom-custom">
            <div className="col m-0 p-0">
              <h5 className="mt-4 fontControl">Data Science</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4 fontControl">
                {" "}
                <button
                  className="btn btn-outline-light"
                  onClick={() => navigate("/callForPapers/DS")}
                >
                  Learn More
                </button>
              </h5>
            </div>
          </div>
          <div className="row m-0 p-3 align-items-center border-bottom-custom">
            <div className="col m-0 p-0">
              <h5 className="mt-4 fontControl">E-Commerce</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <button
                className="btn btn-outline-light"
                onClick={() => navigate("/callForPapers/EC")}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="row m-0 p-3 align-items-center border-bottom-custom">
            <div className="col m-0 p-0">
              <h5 className="mt-4 fontControl">Computer Architectures</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <button
                className="btn btn-outline-light"
                onClick={() => navigate("/callForPapers/HPCA")}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="row m-0 p-3 align-items-center border-bottom-custom">
            <div className="col m-0 p-0">
              <h5 className="mt-4 fontControl">Image and Video Processing</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <button
                className="btn btn-outline-light"
                onClick={() => navigate("/callForPapers/IMP")}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="row m-0 p-3 align-items-center border-bottom-custom">
            <div className="col m-0 p-0">
              <h5 className="mt-4 fontControl"> Pandemic Preparedness and Digital Technology</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <button
                className="btn btn-outline-light"
                onClick={() => navigate("/callForPapers/PPD")}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="row m-0 p-3 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4 fontControl"> Pattern Recognition and Classification</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <button
                className="btn btn-outline-light"
                onClick={() => navigate("/callForPapers/PRC")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Poster */}
      <div>
        <div className="p-4"></div>
        <div
          id="experts"
          className="row m-0 p-0 align-items-center "
        // style={{ height: "14rem" }}
        >
          <img
            src={poster}
            alt="Poster"
            className="align-text-top img-fluid center"
            style={{ width: "600px" }}
          />
        </div>
      </div>

      

      
      {/* keynote speakers */}
      <div>
        <div className="p-4"></div>
        <div
          id="experts"
          className="row m-0 p-0 align-items-center "
        // style={{ height: "14rem" }}
        >
          <div className="col-md-3 col-12 m-0 p-0 text-center">
            <h3>KEYNOTE SPEAKERS</h3>
          </div>
          <div
            className="col-md-9 col-12 m-0 p-0"
            style={{ fontFamily: "Nunito" }}
          >
            <div className="row m-0 p-0">
              <div className="col-md-4 col m-0 p-4 text-light nk-bg-4 h-105">
                {/* <h5>Mr. Pravin Hungund</h5> */}
                <p>
                  UPADATE
                  <br />
                  SOON <br />
                  {/* Email: adhoc.khan@gmail.com */}
                </p>
              </div>

              <div className="col-md-4 col m-0 p-4 text-light nk-bg-2 h-105">
                {/* <h5>Dr. Zahid Akhtar</h5> */}
                <p>
                  UPDATE
                  <br />
                  SOON
                  <br />
                  {/* Email: mario.jose.divan.koller@intel.com  */}
                </p>
              </div>

              <div className="col-md-4 col m-0 p-4 text-light nk-bg-3 h-105">
                {/* <h5>Mr. Bharani P Jagan Mohan</h5> */}
                <p>
                  UPDATE
                  <br />
                  SOON
                  <br />
                  <br />
                  {/* Email: dsingh@nust.na */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom University collaboration */}
      <div
        className="row justify-content-round align-items-center mx-5 px-5 py-3 bottom-image"
      // style={{ display: "inline", alignContent: "flex-start" }}
      >
        <div className="col ">
          <img
            src={oman}
            alt="modern college of bussines and science"
            width="208"
            className="align-text-top"
          />
          {/* <img src={oman} alt="..."  width="208" className="align-text-top oman" /> */}
        </div>
        <div className="col">
          <img
            src={texila}
            alt="Texila American University Zambia"
            width="208"
            className="align-text-top"
          />
        </div>
        <div className="col">
          <img
            src={Ucinicinnati}
            alt="University of Cincinnati"
            width="208"
            className="align-text-top"
          />
        </div>
        <div className="col">
          <img
            src={lincoln}
            alt="University of Cincinnati"
            width="208"
            className="align-text-top"
          />
        </div>
        <div className="col">
          <img
            src={UBuraimi}
            alt="University of Buraimi"
            width="208"
            height="200"
            className="align-text-top"
          />
        </div>

        <div className="col">
          <img
            src={Unizwaz}
            alt="University of nizwaz"
            width="208"
            className="align-text-top "
          />
        </div>

        <div className="col">
          {/* <marquee
              className="font-weight-bold"
              style={{
                fontFamily: "Nunito",
                fontWeight: "600",
                fontSize: "1.3rem",
                color: "nk-blue-bg",
              }}
            >
              Results for Review Submission were Published on April 21, 2023
            </marquee> */}
        </div>
      </div>
    </div>
  );
}
