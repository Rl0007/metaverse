import React from "react";
import aboutus_image from "./aboutus_banner.jpg";
import "./Aboutus.css";
import myphoto from "./myphoto.jpg";
import github_logo from "./github_logo.png";
import linkedin_logo from "./linkedin_logo.jpg";
function Aboutus() {
  return (
    <div className="aboutus">
      {/* <img src={aboutus_image} className="aboutus_banner" alt="" /> */}
      <div className="about_company_text">
        <h1 className="my_story">My Story</h1>
        <div className="profile_and_description">
          <img
            src={myphoto}
            onClick={() => {
              window.open(
                "https://instagram.com/rahulagrawal1741?igshid=ZDc4ODBmNjlmNQ=="
              );
            }}
            className="profile_photo"
          />
          <p className="aboutme_desc">
            I'm Rahul Agrawal, a motivated and enthusiastic fresher in the field
            of full stack development. Recently graduating with a Bachelor's
            degree in Engineering from Government Engineering College Jagdalpur,
            I possess a strong foundation in creating innovative digital
            solutions. With a keen eye for detail and a passion for continuous
            learning, I strive to stay up-to-date with the industry.
          </p>
        </div>
      </div>
      <h1 className="other_link_title">Other Links</h1>
      <div className="other_link">
        <p className="github_desc">
          {" "}
          In my expansive GitHub repository, you'll discover a plethora of
          diverse projects I have been passionately working on. These projects
          cover a wide array of areas, ranging from cutting-edge frontend and
          backend development to sophisticated data analysis and beyond. I
          invite you to immerse yourself in this digital haven of innovation and
          creativity, where each project showcases my expertise and dedication.
        </p>
        <img
          src={github_logo}
          onClick={() => {
            // window.location.href = "https://github.com/Rl0007";
            window.open("https://github.com/Rl0007");
          }}
          className="github_logo"
        />
      </div>
      <div className="other_link">
        <img
          src={linkedin_logo}
          onClick={() => {
            window.open("https://www.linkedin.com/in/Rl0007");
          }}
          className="linkedin_logo"
        />
        <p className="linkedin_desc">
          On my LinkedIn profile, you'll find a showcase of my passion for
          technology and my eagerness to contribute to the professional world as
          a fresher. While I may be at the beginning of my career journey, I
          have already embarked on exciting projects that demonstrate my
          dedication and potential.
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
