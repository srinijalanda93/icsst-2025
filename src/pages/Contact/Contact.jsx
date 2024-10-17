import React, { useEffect } from "react";
import i1 from "../../assets/callpapers.svg";
import Header from '../HeaderCom/Header';
import { scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <div className="row m-3 p-2 mt-5 align-items-center " id="mainpage">
      <div className="my-3">
      <Header />
    </div>
        <div className="col-md-7  mt-5  col-12 m-0 p-0">
          <div>
          
            <br />
            <h1>Contact Us</h1>
            <br />
          
          </div>
          <div className="col-10" style={{ fontFamily: "Nunito" }}></div>
        </div>

        {/* <div className="col-md-5 col-12 m-0 mt-5 p-0 bg-white h-100 ">
          <img
            className="m-0 w-100 justify-content-end media-query"
            src={i1}
            alt="..."
          />
        </div> */}

        <div className="mt-5 justify-content-center text-center" id="contact">
          <h3> Tell us your queries</h3>
          <div class="row  g-3  justify-content-center text-center mt-4">
            <div class="col-md-4 col-8">
              <label for="inputName" class="visually-hidden">
                Name
              </label>{" "}
              <input
                name="Name"
                type="text"
                class="form-control"
                id="inputName"
                placeholder="Name"
              />
            </div>
            <div class="col-md-4 col-8">
              <label for="inputEmail" class="visually-hidden">
                Email
              </label>{" "}
              <input
                type="text"
                class="form-control"
                id="inputEmail"
                name="Email"
                placeholder="Email"
              />
            </div>
            <div class="col-md-4 col-8">
              <label for="inputQuery" class="visually-hidden">
                Your Query
              </label>{" "}
              <input
                type="text"
                class="form-control"
                id="inputQuery"
                name="Query"
                placeholder="Your Query"
              />
            </div>

            <div class="col-12">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={(e) => {
                  var formData = new FormData();
                  var name = document.getElementById("inputName").value;
                  var email = document.getElementById("inputEmail").value;
                  var query = document.getElementById("inputQuery").value;
                  if (name.length < 3) {
                    alert("Please enter a valid name.");
                    return;
                  }
                  if (
                    !email.match(
                      "^[\\w-\\.+]*[\\w-\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$"
                    )
                  ) {
                    alert("Please enter a valid email.");
                    return;
                  }
                  formData.set("Name", name);
                  formData.set("Email", email);
                  formData.set("Query", query);
                  document.getElementById("contact").innerHTML =
                    "<h2>Sending...</h2>";
                  return fetch(
                    `https://script.google.com/macros/s/AKfycbxMzkx94W_iDvWEE77cTx6X9o4L3-3iaNUnzuwRnpwjkf9BH5gooarpGeT8yh1_gFTB/exec`,
                    {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                      },
                      body: formData,
                    }
                  )
                    .then((res) => {
                      document.getElementById("contact").innerHTML =
                        "<h2>Thankyou for contacting!</h2>";
                    })
                    .catch((err) => console.log(err));
                }}
              >
                Send
              </button>

              <p className="mt-3">
                You can send your queries to the following email id
                iccsst@conference.christuniversity.in
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-3 p-2 align-items-center " id="mainpage">
        <div className="col-md-4  my-5  col-4 m-0 p-0">
          <div>
            <br />
            <br />
            <p style={{ fontSize: "1.2rem" }}>
              CHRIST (Deemed to be University)
              <br />
              <br />
              Address:
              <br />
              Dharmaram College Post, Hosur Road,
              <br />
              Bengaluru - 560029, Karnataka, India
              <br />
              <br />
              Contact:
              <br />
              Dr. Chandra J - +91 98863 06307 <br />
              Dr. Joseph Mani - +96 82458 3566
            </p>
          </div>
          <div className="col-10" style={{ fontFamily: "Nunito" }}></div>
        </div>
        {/* <div className="col-md-8 col-12 mt-5  p-0 bg-white h-100 ">
          <table className="table">
            <tbody>
            
              <tr>
                <td style={{ border: "none" }}>
                  <div>
                    <p style={{ fontSize: "1.2rem" }}>
                      Lincoln University College
                    </p>
                    <div className="d-flex flex-column">
                      <p>
                        <FontAwesomeIcon icon={faLocationDot} /> Location
                        Address
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faPhone} /> Contact Number
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ border: "none" }}>
                  <div>
                    <p style={{ fontSize: "1.2rem" }}>University of Buraimi</p>
                    <div className="d-flex flex-column">
                      <p>
                        <FontAwesomeIcon icon={faLocationDot} /> Location
                        Address
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faPhone} /> Contact Number
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
             
              <tr>
                <td style={{ border: "none" }}>
                  <div>
                    <p style={{ fontSize: "1.2rem" }}>Another College</p>
                    <div className="d-flex flex-column">
                      <p>
                        <FontAwesomeIcon icon={faLocationDot} /> Location
                        Address
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faPhone} /> Contact Number
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ border: "none" }}>
                  <div>
                    <p style={{ fontSize: "1.2rem" }}>Yet Another College</p>
                    <div className="d-flex flex-column">
                      <p>
                        <FontAwesomeIcon icon={faLocationDot} /> Location
                        Address
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faPhone} /> Contact Number
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            
              <tr>
                <td style={{ border: "none" }} colSpan="2">
                  <div>
                    <p style={{ fontSize: "1.2rem" }}>Final Location</p>
                    <div className="d-flex flex-column">
                      <p>
                        <FontAwesomeIcon icon={faLocationDot} /> Location
                        Address
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faPhone} /> Contact Number
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
       */}
      </div>
       
    </>
  );
}
