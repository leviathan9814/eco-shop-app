import React from "react";
import Shop from "../shop/shop";
import { Route, Switch } from "react-router-dom";
import CargoDetails from "../cargo-details/cargo-details";
import AssortmentDetails from "../assortment-details/assortment-details";
import DeliveryAndPayment from "../delivery-and-payment/delivery-and-payment";
import Cart from "../cart/cart";

import './app.css';



const App = () => {
  return (
    <div className="app-wrapper">
      <Switch>
        <Route exact path="/" render={() => <Shop/>}/>
        <Route path="/cargo-details/:itemId" render={() => <CargoDetails/>}/>
        <Route path="/assortment-details/:itemId" render={() => <AssortmentDetails/>}/>
        <Route path="/delivery-and-payment" render={() => <DeliveryAndPayment/>}/>
        <Route path="/cart" render={() => <Cart/>}/>
      </Switch>
    </div>
  );
}

export default App;
