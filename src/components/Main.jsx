import React,{useContext} from "react";
import productImg from "../images/products/image-product-1.jpg";
import minusIcon from "../images/icons/icon-minus.png";
import plusIcon from "../images/icons/icon-plus.png";
import product1 from "../images/products/image-product-1.jpg";
import product2 from "../images/products/image-product-2.jpg";
import product3 from "../images/products/image-product-3.jpg";
import product4 from "../images/products/image-product-4.jpg";
import { Context } from "./Context";

export default function Main() {
  const {count,incrementCount,decrementCount} = useContext(Context)

  const mainProductStyles = {
    borderRadius: "10px",
    height: "356px",
    objectFit: "cover",
  };
  return (
    <div className="wrapper flex">
      <div className="main-product">
        <div className="main-product-image">
          <img style={mainProductStyles} src={productImg} alt="producut-1" />
        </div>
        <div className="small-images">
          <img src={product1} alt="product-1" />
          <img src={product2} alt="product-2" />
          <img src={product3} alt="product-3" />
          <img src={product4} alt="product-4" />
        </div>
      </div>
      <div className="main-info">
        <h3 className="sub-heading">sneaker company</h3>
        <h2 className="product-title">Fall Limited Edition Sneakers</h2>
        <p className="product-descripion">
          These low profile sneakers are perfect for your casual wear companion,
          featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="price-container">
          <p className="price">$125.00</p>
          <div className="discount-price">50%</div>
        </div>
        <p className="price-before">$250.00</p>
        <div className="main-cart">
          <div className="icons-container">
            <div className="minus">
              <img onClick={decrementCount} className="minus-icon" src={minusIcon} alt="minus-icon" />
            </div>
            <p
              style={{ margin: "0", fontWeight: "bold" }}
              className="product-count"
            >
              {count}
            </p>
            <div className="plus">
              <img onClick={incrementCount} className="plus-icon" src={plusIcon} alt="plus-icon" />
            </div>
          </div>
          <div className="btn-container">
            <button className="btn cart-btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
