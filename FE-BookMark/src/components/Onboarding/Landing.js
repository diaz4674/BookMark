import React from "react";
import OnboardNav from "../Navbars/OnboardNav";
import "../../styles.css";
import { Link } from "react-router-dom";
import bookmark from '../../images/BookMark.jpg'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  backgroundImg: {
    width: "100%",
    height: "100vh",
  },
  landingContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
  },
  landingText: {
    top: "30%",
    left: "15%",
    borderRadius: "10px",
    position: "absolute",
    height: "450px",
    padding: "25px",
    margin: "-107px",
    width: "450px",
    fontFamily: "Roboto Slab, serif",
    fontWeight: "bold",
    backgroundColor: "white",
    border: "1px solid black"
  }
}))

const Landing = props => {
  const classes = useStyles();
  const [image, setVideo] = React.useState();

  return (
    <>
      <OnboardNav />
      <div>
        <div className= {classes.landingContainer}>
          <img src={bookmark} alt="computer" className={classes.backgroundImg} />

          <div className= {classes.landingText}>
            <div >
              <div >
                  <h1> A place for all your favorite sites</h1>
                  <div>
                    <p>
                      Store your sites, so you can save on google searches.
                    </p>
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
