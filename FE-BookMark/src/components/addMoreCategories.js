import React from "react";
import FinanceCard from "./Onboarding/FinancialCard";
import ShoppingCard from "./Onboarding/ShoppingCard";
import PersonalCard from "./Onboarding/PersonalCard";
import AddedCats from "./AddedCats";

const AddMore = props => {
  //Component States
  const [navOff] = React.useState(true);
  const [showFinance, setShowFinance] = React.useState(true);
  const [showShopping, setShowShopping] = React.useState(false);
  const [showPersonal, setPersonal] = React.useState(false);
  const [showSuccess, setshowSuccess] = React.useState(false);
  const [redirect, setRedirect] = React.useState(true);

  //function sets states to true/false to render certain component to user.
  const turnOffFinance = () => {
    setShowFinance(false);
    setShowShopping(true);
  };
  const turnOffShopping = () => {
    setShowFinance(false);
    setShowShopping(false);
    setPersonal(true);
  };
  const turnOffPersonal = () => {
    setShowFinance(false);
    setShowShopping(false);
    setPersonal(false);
    setshowSuccess(true);
  };

  let showComponent;
  //showComponent variable renders certain components when the state is toggled

  if (showFinance) {
    showComponent = (
      //if showFinance is true, renders the FinanceCard component that lets users add more sites to their dashboard.
      //the passed components disable the navbar from appearing, and passed functions take user to the next compnent, when submitted.
      <FinanceCard
        navbarOff={navOff}
        turnOffFinance={turnOffFinance}
        redirect={redirect}
      />
    );
  }
  if (showShopping) {
    //if showShopping is true, renders the ShoppingCard component that lets users add more sites to their dashboard.
    //the passed components disable the navbar from appearing, and passed functions take user to the next compnent, when submitted.
    showComponent = (
      <ShoppingCard
        navbarOff={navOff}
        turnOffShopping={turnOffShopping}
        redirect={redirect}
      />
    );
  }
  if (showPersonal) {
    //if showPersonal is true, renders the PersonalCard component that lets users add more sites to their dashboard.
    //the passed components disable the navbar from appearing, and passed functions take user to the next compnent, when submitted.
    showComponent = (
      <PersonalCard
        navbarOff={navOff}
        turnOffPersonal={turnOffPersonal}
        redirect={redirect}
      />
    );
  }
  if (showSuccess) {
    //if showSuccess is true, renders the AddedCats component that let's users know that their sites have been successfully updated.
    showComponent = <AddedCats />;
  }

  return <>{showComponent}</>;
};

export default AddMore;
