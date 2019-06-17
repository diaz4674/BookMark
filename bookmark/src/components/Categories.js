import React from "react";
import Button from "@material-ui/core/Button";

class Categories extends React.Component {
  state = {
    companies: [],
    newCompany: ""
  };

  componentDidMount() {
    this.setState({});
  }
  render() {
    return (
      <>
        <h4>Which companies do you pay?</h4>

        <Button>Don't see one here? Add your own!</Button>
      </>
    );
  }
}

export default Categories;
