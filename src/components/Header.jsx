import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/logo.png";
import cartIcon from "../../public/images/icons/icon-cart.png";
import avatarIcon from "../../public/images/image-avatar.png";
import menuIcon from "../../public/images/icons/icon-menu.png";
import iconClose from "../../public/images/icons/icon-close.png";
import { Context } from "./Context";
import Cart from "./Cart";

export default function Header() {
  const { handleClick, open, count, isCartClicked, handleCartClick } =
    useContext(Context);

  const styles = {
    display: !open ? "block" : "none",
    transform: !open ? "translateX(0)" : "translateX(-100%)",
  };

  function menuClose() {
    if (!open) {
      return iconClose;
    } else {
      return menuIcon;
    }
  }

  return (
    <>
      <header>
        {isCartClicked && <Cart />}
        <div
          style={{ display: count ? "block" : "none" }}
          className="count-para"
        >
          {count}
        </div>
        <div className="wrapper">
          <div onClick={handleClick} className="menu hide">
            <img src={menuClose()} alt="menu-icon" />
          </div>
          <div className="left">
            <Link className="nav-link" to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
            <nav className="show translate-show" style={styles}>
              <ul className="list">
                <Link className="nav-list" to="/collections">
                  Collections
                </Link>
                <Link className="nav-list" to="/men">
                  Men
                </Link>
                <Link className="nav-list" to="/women">
                  Women
                </Link>
                <Link className="nav-list" to="/about">
                  About
                </Link>
                <Link className="nav-list" to="/contacts">
                  Contacts
                </Link>
              </ul>
            </nav>
          </div>
          <div className="right">
            <img
              onClick={handleCartClick}
              className="cart-img"
              src={cartIcon}
              alt="cart-icon"
            />
            <img className="user-img" src={avatarIcon} alt="avatar" />
          </div>
        </div>
        <div style={{ marginTop: "2em" }} className="line"></div>
      </header>
    </>
  );
}
