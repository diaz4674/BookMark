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
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import FinancialDashboard from "./FinancialDashboard";
import PersonalDashboard from "./PersonalDashboard";
import ShoppingDashboard from "./ShoppingDashboard";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    backgroundColor: "#af63db",
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

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [financialDash, setfinancialDash] = React.useState(false);
  const [shoppingDash, setshoppingDash] = React.useState(true);
  const [personalDash, setpersonalDash] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  let showThis;

  if (financialDash === true) {
    showThis = <FinancialDashboard />;
  }

  if (shoppingDash === true) {
    showThis = <ShoppingDashboard />;
  }

  if (personalDash === true) {
    showThis = <PersonalDashboard />;
  }

  const showFinancial = () => {
    setfinancialDash(true);
    setshoppingDash(false);
    setpersonalDash(false);
  };

  const showShopping = () => {
    setfinancialDash(false);
    setshoppingDash(true);
    setpersonalDash(false);
  };

  const showPersonal = () => {
    setfinancialDash(false);
    setshoppingDash(false);
    setpersonalDash(true);
  };

  const logOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="initial"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
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
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
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
          <ListItem onClick={logOut} className={classes.navItem}>
            <Link to="/" className={classes.logout}>
              <p> Log Out</p>
            </Link>
          </ListItem>
          <Divider />
          {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />

        {showThis}
      </main>
    </div>
  );
}
