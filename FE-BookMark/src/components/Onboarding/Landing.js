import React from "react";
import OnboardNav from "../Navbars/OnboardNav";
import "../../styles.css";
import { Link } from "react-router-dom";
import bookmark from "../../images/bookmark.jpg";
import { makeStyles } from "@material-ui/core/styles";
import personalCard from "../../images/personal.PNG";

const useStyles = makeStyles(theme => ({
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

    // ["@media (max-width:1305px)"]: {
    //   top: "10%",
    //   left: "5%"
    // }
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
  personalImg: {
    height: "28em"
  }
}));

const Landing = props => {
  const classes = useStyles();
  const [image, setVideo] = React.useState();

  return (
    <>
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
            {/* <div>
                <p>
                  Store your sites, so you can save time from google searches.
                </p>
              </div> */}
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
              <h3 className={classes.sectionTitle}>Bookmark</h3>
              <p className={classes.sectionText}>
                Save time from constant google searches, and have all your
                favorite sites in one place.
              </p>
            </div>
            <img src={personalCard} className={classes.personalImg} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
