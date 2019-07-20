import React from 'react';
import FinanceCard from "./Onboarding/FinancialCard"
import ShoppingCard from './Onboarding/ShoppingCard'
import PersonalCard from './Onboarding/PersonalCard'
import AddedCats from './AddedCats'

const AddMore = props => {
    const [navOff] = React.useState(true)
    const [showFinance, setShowFinance] = React.useState(true)
    const [showShopping, setShowShopping] = React.useState(false)
    const [showPersonal, setPersonal] = React.useState(false)
    const [showSuccess, setshowSuccess] = React.useState(false)

    const [redirect, setRedirect] = React.useState(true)
    
    const turnOffFinance = () => {
        setShowFinance(false)
        setShowShopping(true)
    }
    const turnOffShopping = () => {
        setShowFinance(false)
        setShowShopping(false)
        setPersonal(true)
    }
    const turnOffPersonal = () => {
        setShowFinance(false)
        setShowShopping(false)
        setPersonal(false)
        setshowSuccess(true)
    }

    let showComponent
    

    if(showFinance){
        showComponent =<FinanceCard navbarOff = {navOff} turnOffFinance= {turnOffFinance} redirect = {redirect}/>
    }
    if(showShopping){
        showComponent = <ShoppingCard navbarOff = {navOff} turnOffShopping= {turnOffShopping} redirect = {redirect}/>
    }
    if(showPersonal){
        showComponent = <PersonalCard navbarOff = {navOff} turnOffPersonal= {turnOffPersonal} redirect = {redirect}/>
    }
    if(showSuccess) {
        showComponent = <AddedCats /> 
    }

    return(
        <>
       {showComponent}
        </>
    )
}

export default AddMore;