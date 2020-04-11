import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import FinancialDashboard from "./FinancialDashboard";
import PersonalDashboard from "./PersonalDashboard";
import ShoppingDashboard from "./ShoppingDashboard";
import AddMore from "./addMoreCategories";
import { Link } from "react-router-dom";
import axios from "axios";
import { getTokenId } from "./common/UserId";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  //Component CSS
  root: {
    display: "flex"
  },
  appBar: {
    backgroundColor: "#ba78fe",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  titleNav: {
    color: "white"
  },
  menuButton: {
    backgroundColor: "white",
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    backgroundColor: "#4f3f58",
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  logoutButton: {
    display: "flex",
    justifyContent: "flex-end"
  },
  navItem: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
    transition: ".4s",
    "&:hover": {
      transform: "scale(1.2,1.2)",
      fontWeight: "bold"
    }
  },
  welcome: {
    color: "white",
    fontSize: "20px",
    margin: "0"
  },
  usernameContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "16px"
  },
  close: {
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#ba78fe"
    }
  },
  logout: {
    color: "white",
    textDecoration: "none"
  },
  navTrue: {
    backgroundColor: "#7e7285",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
    fontWeight: "bold",
    transition: ".4s"
  },
  navText: {
    color: "white",
    fontFamily: "Roboto Slab, serif"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

 const PersistentDrawerLeft = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  //Compnent States
  const [open, setOpen] = React.useState(false);
  const [financialDash, setfinancialDash] = React.useState(true);
  const [shoppingDash, setshoppingDash] = React.useState(false);
  const [personalDash, setpersonalDash] = React.useState(false);
  const [addMoreDash, setaddMoreDash] = React.useState(false);
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    //When Component Mounts, deconstructs token to get the user ID
    let id = getTokenId();
    //sets token to headers for authentication
    const headers = { authorization: localStorage.getItem("token") };

    axios
      //sends GET request to backend to retrieve user information by user id,
      .get(`https://be-bookmark.herokuapp.com/userInfo/${id}`, {
        headers
      })
      .then(res => {
        //sets username state to the user information username
        setUsername(res.data.username);
      })
      .catch(err => console.log(err));
  }, []);

  function handleDrawerOpen() {
    //opens the side navigation bar
    setOpen(true);
  }

  function handleDrawerClose() {
    //closes the side navigation bar
    setOpen(false);
  }

  let showThis;
  //showThis is a variable that mounts the selected component if the state is true for the statmements below.
  //showThis is rendered and shows the selected component to the user when toggled.
  if (financialDash) {
    showThis = <FinancialDashboard />;
  }

  if (shoppingDash) {
    showThis = <ShoppingDashboard />;
  }

  if (personalDash) {
    showThis = <PersonalDashboard />;
  }

  if (addMoreDash) {
    showThis = <AddMore />;
  }

  const showFinancial = () => {
    // When the  Function is selected, it sets all states false, and the Financial state to true,
    // so it makes the showThis variable mount the Financial Dashbaord Component.
    setfinancialDash(true);
    setshoppingDash(false);
    setpersonalDash(false);
    setaddMoreDash(false);
  };

  const showShopping = () => {
    // When the  Function is selected, it sets all states false, and the shopping state to true,
    // so it makes the showThis variable mount the Shopping Dashbaord Component.
    setfinancialDash(false);
    setshoppingDash(true);
    setpersonalDash(false);
    setaddMoreDash(false);
  };

  const showPersonal = () => {
    // When the  Function is selected, it sets all states false, and the Personal state to true,
    // so it makes the showThis variable mount the Personal Site Dashbaord Component.
    setfinancialDash(false);
    setshoppingDash(false);
    setpersonalDash(true);
    setaddMoreDash(false);
  };

  const showAddMore = () => {
    // When the  Function is selected, it sets all states false, and the addMoreDash state to true,
    // so it makes the showThis variable mount the AddMore Dashbaord Component.
    setfinancialDash(false);
    setshoppingDash(false);
    setpersonalDash(false);
    setaddMoreDash(true);
  };

  const logOut = () => {
    //when user logs out, it clears the token from the local storage
    localStorage.removeItem("token");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        // AppBar is the top navbar
        color="initial"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          {/* Icon button that opens the side nav */}
          <IconButton
            color="white"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.titleNav}>
            BookMark
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        // Drawer is the side bar navigation
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <div className={classes.usernameContainer}>
            <p className={classes.welcome}> Welcome </p>
            {/* username is rendering the user's username from the component mount GET request */}
            <p className={classes.welcome}> {username} </p>
          </div>
          <IconButton onClick={handleDrawerClose} className={classes.close}>
            {/* IconButton closes the side navigation bar */}
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* //List of ListItems that toggles the rendered components that the user views */}
          <ListItem
            onClick={showFinancial}
            className={financialDash ? classes.navTrue : classes.navItem}
          >
            <p className={classes.navText}> Financial</p>
          </ListItem>
          <ListItem
            onClick={showShopping}
            className={shoppingDash ? classes.navTrue : classes.navItem}
          >
            <p className={classes.navText}> Shopping</p>
          </ListItem>
          <ListItem
            onClick={showPersonal}
            className={personalDash ? classes.navTrue : classes.navItem}
          >
            <p className={classes.navText}> Personal</p>
          </ListItem>
          <Divider />
          <ListItem
            onClick={showAddMore}
            className={addMoreDash ? classes.navTrue : classes.navItem}
          >
            <p className={classes.navText}> Add more sites </p>
          </ListItem>
          <Divider />
          <ListItem onClick={logOut} className={classes.navItem}>
            <Link to="/login" className={classes.logout}>
              <p> Log Out</p>
            </Link>
          </ListItem>
          <Divider />
        </List>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {/* The showThis variable renders the component that is mounted to this variable */}
        {showThis}
      </main>
    </div>
  );
}

export default PersistentDrawerLeft;