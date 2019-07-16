//Component that contains the images that display in the Welcome Component

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import "../../styles.css";

const useStyles = makeStyles(theme => ({
  //Component CSS
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
  mediaContainer: {
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
  }
}));

const Categories = props => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <CardContent className={classes.cardsContainer}>
          <Card className={classes.moneyCard}>
            <CardContent className={classes.mediaContainer}>
              <CardMedia
                className={classes.media}
                image="https://cdn0.iconfinder.com/data/icons/shopping-icons-rounded/110/Money-Bag-512.png"
                title="Money"
              />
              <Typography variant="h5" component="h2" className={classes.text}>
                Financial
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.shoppingCard}>
            <CardContent className={classes.mediaContainer}>
              <CardMedia
                className={classes.media}
                image="https://cdn0.iconfinder.com/data/icons/commerce-and-retail/512/shopping_bag_purchase_product_ecommerce_buy_sales_sale_delivery_order_commerce_marketing_market_store_online_packing_packaging_flat_design_icon-512.png"
                title="shopping"
              />
              <Typography variant="h5" component="h2" className={classes.text}>
                Shopping
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.personalCard}>
            <CardContent className={classes.mediaContainer}>
              <CardMedia
                className={classes.media}
                image="https://image.flaticon.com/icons/png/512/528/528351.png"
                title="shopping"
              />
              <Typography variant="h5" component="h2" className={classes.text}>
                Personal
              </Typography>
            </CardContent>
          </Card>
        </CardContent>
      </div>
    </div>
  );
};

export default Categories;
