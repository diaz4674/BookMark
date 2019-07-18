import React from "react";
import OnboardNav from "../Navbars/OnboardNav";
import "../../styles.css";
import { Link } from "react-router-dom";

const Landing = props => {
  const [imageURL, setVideo] = React.useState(
    "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  );

  return (
    <>
      <OnboardNav />
      <div>
        <div className="landingContainer">
          <img src={imageURL} alt="computer" className="landingImg" />

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
