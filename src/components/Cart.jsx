import React, { useContext } from "react";
import { Context } from "../components/Context";
import productImg from "../../public/images/products/image-product-1.jpg";
import deleteIcon from "../../public/images/icons/icon-delete.png";

function Cart() {
  const { count } = useContext(Context);

  function cartItem() {
    return (
      <div className="cart-item">
        <div className="cart-item-img">
          <img src={productImg} alt="product-img" />
        </div>
        <div className="cart-item-info">
          <p className="item-title">Fall Limited Edition Sneakers</p>
          <p className="item-calc">
            $125.00x{count}{" "}
            <span className="total-price">${125.0 * count}</span>
          </p>
        </div>
        <div className="delete">
          <img src={deleteIcon} alt="delete-icon" />
        </div>
      </div>
    );
  }

  function emptyCart() {
    return (
      <div className="empty-cart">
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <p>Cart</p>
      <hr />
      {count !== 0 ? cartItem() : emptyCart()}
      <button
        style={{ display: count ? "block" : "none" }}
        className="checkout-btn"
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;
