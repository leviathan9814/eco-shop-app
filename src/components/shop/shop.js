import React from "react";
import Header from "../header/header";
import TitleBlock from "../title-block/title-block";
import CargoBlock from "../cargo-block/cargo-block";
import SetsBlock from "../sets-block/sets-block";
import OrderBlock from "../order-block/order-block";
import InstagramBlock from "../instagram-block/instagram-block";
import Footer from "../footer/footer";
import Basket from "../basket/basket";
import { useSelector } from "react-redux";


import './shop.css';

const Shop = () => {

  const totalItem = useSelector(state => state.cart.totalItem);


  return (
    <div className="shop">
      <Header/>
      <TitleBlock/>
      <CargoBlock/>
      <SetsBlock/>
      <OrderBlock/>
      <InstagramBlock/>
      { totalItem > 0 ? <Basket/> : null}
      <div className="footer-block">
        <Footer/>
      </div>
    </div>
  );
}

export default Shop;
