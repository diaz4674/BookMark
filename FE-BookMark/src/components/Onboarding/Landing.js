import React from "react";
import OnboardNav from "../Navbars/OnboardNav";
import "../../styles.css";
import { Link } from "react-router-dom";
import bookmark from "../../images/bookmark.jpg";
import { makeStyles } from "@material-ui/core/styles";
import personalCard from "../../images/personal.PNG";
import moneyCard from "../../images/money.PNG";

const useStyles = makeStyles(theme => ({
  // Component CSS
  backgroundImg: {
    width: "100%"
  },

  landingContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden"
  },
  landingText: {
    padding: "0px 50px",
    position: "absolute",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  secondSection: {
    backgroundColor: "#faf9f7"
  },
  sectionExample: {
    display: "flex",
    justifyContent: "space-around",
    margin: "25px",
    ["@media (max-width:770px)"]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  },
  sectionTextContainer: {
    padding: "25px",
    flexWrap: "wrap",
    width: "50%"
  },
  sectionTitle: {
    fontSize: "40px"
  },
  sectionText: {
    fontSize: "30px"
  },
  cardImgs: {
    height: "28em"
  },
  thirdSection: {
    padding: "25px 0",
    backgroundColor: "#F4FAFF"
  }
}));

const Landing = props => {
  const classes = useStyles();
  const [image, setVideo] = React.useState();

  return (
    <>
      <OnboardNav />
      <div>
        <div className={classes.landingContainer}>
          <img
            src={bookmark}
            alt="computer"
            className={classes.backgroundImg}
          />

          <div className={classes.landingText}>
            <h1>BookMark </h1>
            <h2> A place for all your favorite sites</h2>
            {/* This CSS is linked to the Styles.CSS file to incorporate the animation button */}
            <div className="buttons-landing">
              <Link className="cover this" to="/login">
                Visit your Dashboard!
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.secondSection}>
          <div className={classes.sectionExample}>
            <div className={classes.sectionTextContainer}>
              <h3 className={classes.sectionTitle}>Save Time</h3>
              <p className={classes.sectionText}>
                Avoid constant google searches, and have all your favorite sites
                in one place.
              </p>
            </div>
            <img src={personalCard} className={classes.cardImgs} />
          </div>
        </div>

        <div className={classes.thirdSection}>
          <div className={classes.sectionExample}>
            <img src={moneyCard} className={classes.cardImgs} />
            <div className={classes.sectionTextContainer}>
              <h3 className={classes.sectionTitle}>Organize Better</h3>
              <p className={classes.sectionText}>
                Our user friendly site makes it easy for people to organize and
                access their sites at a fast pace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
