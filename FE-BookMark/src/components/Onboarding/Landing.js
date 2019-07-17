import React from "react";
import OnboardNav from "../Navbars/OnboardNav";
import "../../styles.css";
import { Link } from "react-router-dom";

const Landing = props => {
  const [videoURL, setVideo] = React.useState(
    "https://www.videvo.net/videvo_files/images/preview_160812_019_Facebook2_4K.jpg"
  );

  return (
    <>
      <OnboardNav />
      <div>
        <div className="landingContainer">
          <video id="background-video" loop autoPlay>
            <source src={videoURL} type="video/mp4" />
            <source src={videoURL} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <div className="landingText">
            <div className="textContainer">
              <div className="innertext">
                <div className="Logo-landing">
                  <h1 className="logo-title"> BookMark</h1>
                </div>
                <div className="landing-text">
                  <h1> A place for all your favorite content</h1>

                  <div>
                    <p>
                      Match with people that get your vibe, and meet awesome
                      people.
                    </p>
                  </div>
                </div>
                <div className="buttons-landing">
                  <Link className="cover this" to="/login">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
