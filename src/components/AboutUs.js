import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer"; // use it understand which html div is in the viewport
import "./scss/aboutus.css";

function AboutUs() {
  const { ref: aboutInfoRef, inView: aboutInfoIsVisible } = useInView(); //About us section with text and LOGOimage
  const { ref: experRef, inView: experIsVisible } = useInView(); //handle OUR EXPERTISE H5 TAG
  console.log(aboutInfoIsVisible);

  return (
    <div className="aboutUs-section">
      <div className={aboutInfoIsVisible ? "aboutUs-info" : "aboutUs-info"} ref={aboutInfoRef}>
        <div className="aboutUs-info-text">
          <h5>ABOUT US</h5>
          <p>
            We are KPC Advisory & Evaluation Services LLP. Authorized to deal in insurance products of various insurance companies, we give you the privilege of choosing policies
            and comparing prices. We find the best insurance for you. Designing a comprehensive policy, negotiating competitive terms with insurers, and managing all your claims.
            We aspire to meet the highest standard of service.
          </p>
        </div>
        <img className="aboutUs-info-img" src={require("./images/aboutusKPC.jpg")} alt="" />
      </div>
      <h5 ref={experRef}>OUR EXPERTISE</h5>
      <div className="aboutUs-card-section">
        <div className="aboutUs-card one">
          <img src={require("./images/Life Insurance.png")} className="card-img" alt="" />
          <h5>Life Insurance</h5>
          <p>In this, a person pays premium, in return for a sum of money to be paid to them after a maturity.</p>
        </div>
        <div className="aboutUs-card two">
          <img className="card-img" src={require("./images/General-Insurance.png")} alt="" />
          <h5>General Insurance</h5>
          <p>This includes all types of insurance (such as home, automobile or business related), which is not part of life insurance.</p>
        </div>
        <div className="aboutUs-card three">
          <img className="card-img" src={require("./images/Home Insurance.png")} alt="" />
          <h5>Home Insurance</h5>
          <p>Home insurance is an insurance coverage for your home, its contents and your possessions on it.</p>
        </div>
        <div className="aboutUs-card four">
          <img className="card-img" src={require("./images/Medical Insurance.png")} alt="" />
          <h5>Health Insurance</h5>
          <p>It is an insurance which covers medical expenses. All your medicals bills can be claimed under this.</p>
        </div>
        <div className="aboutUs-card five">
          <img className="card-img" src={require("./images/Travel Insurance.png")} alt="" />
          <h5>Travel Insurance</h5>
          <p>It covers losses that may be incurred while travelling. For eg- medical, flight cancellations etc.</p>
        </div>
        <div className="aboutUs-card six">
          <img className="card-img" src={require("./images/Vehical Insurance.png")} alt="" />
          <h5>Vehicle Insurance</h5>
          <p>Vehicle insurance is insurance purchased for cars, trucks, motorcycles and other road vehicles.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
