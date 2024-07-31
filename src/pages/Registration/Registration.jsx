import React, { useEffect } from 'react'
import i1 from "../../assets/callpapers.svg";
import { scroller } from "react-scroll";

import { useLocation } from "react-router-dom";


export default function Registration() {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    useEffect(() => {
        scrollToSection();
    });

    const scrollToSection = () => {
        scroller.scrollTo(id);
    };

    return (
        <>
            <div className="row m-3 p-2 mt-5 align-items-center " id="mainpage">
                <div className="col-md-7  mt-5  col-12 m-0 p-0">
                    <div>
                        <br />
                        <br />
                        <h1>Registration</h1>
                        <br />
                        <br />
                    </div>
                    {/* <p>
                    Registration will open in the coming months. Would you like to be notified when the registration is open? Please submit your email address below and we’ll notify you when the registration is live.
                    </p> */}
                </div>

                <div className="col-md-5 col-12 m-0 p-0 bg-white h-100 ">
                    <img className="m-0 w-100 justify-content-end media-query" src={i1} alt="..." />
                </div>
            </div>

            <div className="container-fluid">
                <div className="row m-0 p-0">
                    <div className="col-6 m-0 p-4">
                        <h2>Registration Fee</h2>
                        <h4 className="fw-bold">Paper Presenters</h4>
                        <ul>
                            <li>Academicians and Industry Persons - ₹3500 (Indian Authors) / $60 (International Authors)</li>

                        </ul>
                        <h4 className="fw-bold">Attendees</h4>
                        <ul>
                            <li>PhD Scholars - ₹1000 / $14</li>
                            <li>UG/PG - ₹500 / $7</li>
                        </ul>
                    </div>
                    <div className="col-6 m-0 p-4">
                        <h2>Registration fee includes</h2>
                        <ul>
                            <li>Publication in UGC Journal / Springer (SCOPUS indexed)</li>
                            <li>Participation in all sessions of the conference</li>
                            <li>Paper presentation certificate</li>
                            <li>Softcopy of Book of Abstract</li>
                            <li>Lunch and Refreshments</li>
                            <li>Depending on the reviewers comments accepted papers will be recommended for Springer CCIS (Scopus Indexed) / Mapana Journal of science (UGC care list - Group I) / proceeding with ISBN number</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='row m-0 mt-5 p-0 align-items-center '>
                <div className="col-md-12 col-12 m-0 p-0">
                    <div className="row m-0 p-0">
                        <div className="col-md-12 col-12 m-0 p-4  h-100 justify-content-center align-items-center text-center" id="subscribe">
                            <h3 className="justify-content-center align-items-center text-center"> Author's Instruction</h3><br />
                            <p style={{ fontFamily: "Nunito" }}>
                                Particularly we would like to ask the authors to apply Springer conference paper templates, which can be find in the below button</p>
                            <button className="btn btn-primary" style={{ fontFamily: "Nunito" }}>
                                <a href="http://www.springer.com/computer/lncs?SGWID=0-164-6-793341-0" style={{ textDecoration: "none", color: "white" }}>
                                    Guidelines
                                </a>
                            </button>
                        </div>

                        <p className="text-center" style={{ fontFamily: "Nunito" }}><h5>Abstracted & Indexed In</h5>
                        DBLP<br />
                        EI Compendex<br />
                        INSPEC<br />
                        Japanese Science and Technology Agency (JST)<br />
                        Norwegian Register for Scientific Journals and Series<br />
                        SCImago<br />
                        SCOPUS<br />
                        zbMATH<br />
                        </p>
                    </div>
                </div>
            </div>


            <div className='row m-0 mt-5 p-0 align-items-center '>
                <div className="col-md-12 col-12 m-0 p-0">
                    <div className="row m-0 p-0">
                        <div className="col-md-6 col-12 m-0 p-4 h-100">

                        </div>

                        <div className="col-md-12 col-12 m-0 p-4  h-100 justify-content-center align-items-center text-center" id="subscribe">
                            <h3 className="justify-content-center align-items-center text-center"> Submit your details for further updates regarding the Conference</h3>


                            <div class="row  g-3  justify-content-center text-center mt-4">
                                <div class="col-md-6 col-12">
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
                                <div class="col-md-6 col-12">
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

                                <div class="col-12">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                        onClick={(e) => {
                                            var formData = new FormData();
                                            var name = document.getElementById("inputName").value;
                                            var email = document.getElementById("inputEmail").value;
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
                                            document.getElementById('subscribe').innerHTML = "<h2>Sending...</h2>"
                                            return fetch(
                                                `https://script.google.com/macros/s/AKfycbzE0KZCrl_HVQvWSakbF5I1i-s46eo2tyAPIsC8yMtZnOf28-spRys5Tlwbjig1wbwD/exec`,
                                                {
                                                    method: "POST",
                                                    headers: {
                                                        Accept: "application/json",
                                                    },
                                                    body: formData,
                                                }
                                            )
                                                .then((response) => {
                                                    document.getElementById('subscribe').innerHTML = "<h2>Thankyou for subscribing.</h2>"

                                                })
                                                .catch((err) => console.log(err));
                                        }}
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>


                        </div>


                        <div className="col-md-12 col-12 m-0 p-4  h-100 justify-content-center align-items-center text-center" id="subscribe">
                            <h3 className="justify-content-center align-items-center text-center">ICCSST 2023 Attendee Registration form</h3>
                            <div class="row  g-3  justify-content-center text-center mt-4">
                                <p>Kindly click the below button to participate as an attendee in the conference</p>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary"><a style={{ color: "white", textDecoration: "none" }} href="https://forms.gle/2mDnJxcacvLLPXne9">Click Here</a></button>

                                </div>

                            </div>


                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}