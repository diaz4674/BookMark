import React from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  Container: {
    height: "100%",
    padding: "0"
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%"
  },
  moneyCard: {
    minWidth: 275,
    backgroundColor: "#47d26b",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px"
  },

  button: {
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#9471e9",
      color: "white"
    }
  },
  shoppingCard: {
    minWidth: 275,
    backgroundColor: "pink",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px"
  },
  personalCard: {
    minWidth: 275,
    backgroundColor: "#add2ec",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  media: {
    margin: "0 auto",
    height: 140,
    width: "50.6%",
    borderRadius: "0%",
    ["@media (max-width:780px)"]: {
      height: 100,
      width: "36%"
    }
  },
  title: {
    fontSize: 14
  },
  text: {
    color: "white",
    margin: "0 auto"
  },
  pos: {
    marginBottom: 12,
    color: "white",
    ["@media (max-width:780px)"]: {
      margin: "0"
    }
  }
});

const SimpleCard = props => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.Container}>
        <h2>Select Category to Bookmark your favorite Sites</h2>
        <div className={classes.cardsContainer}>
          <Card className={classes.moneyCard}>
            <CardContent className={classes.container}>
              <CardMedia
                className={classes.media}
                image="https://cdn0.iconfinder.com/data/icons/shopping-icons-rounded/110/Money-Bag-512.png"
                title="Money"
              />
              <Typography variant="h5" component="h2" className={classes.text}>
                Financial
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className={classes.button}
                size="small"
                onClick={props.loadFinancial}
              >
                Select
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.shoppingCard}>
            <CardContent className={classes.container}>
              <CardMedia
                className={classes.media}
                image="https://cdn0.iconfinder.com/data/icons/commerce-and-retail/512/shopping_bag_purchase_product_ecommerce_buy_sales_sale_delivery_order_commerce_marketing_market_store_online_packing_packaging_flat_design_icon-512.png"
                title="shopping"
              />
              <Typography variant="h5" component="h2" className={classes.text}>
                Shopping
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className={classes.button}
                onClick={props.loadShopping}
                size="small"
              >
                Select
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.personalCard}>
            <CardContent className={classes.container}>
              <CardMedia
                className={classes.media}
                image="https://image.flaticon.com/icons/png/512/528/528351.png"
                title="shopping"
              />
              <Typography variant="h5" component="h2" className={classes.text}>
                Personal
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className={classes.button}
                onClick={props.loadPersonal}
                size="small"
              >
                Select
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default withRouter(SimpleCard);
