import React from "react";
import Button from "@material-ui/core/Button";
import '../styles.css'
import SimpleCard from './SimpleCard'

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
      <div className = 'categoryContainer'>
         <h4>Which companies do you pay?</h4>
         <Button>Don't see one here? Add your own!</Button>

        <div className = 'catCardsContainer'>
        <div  className = 'categoryCards'> 
        <SimpleCard />
        </div>
        <div className = 'categoryCards'> 
        <SimpleCard />
        </div>

        </div>

      </div>
        


      </>
    );
  }
}

export default Categories;
