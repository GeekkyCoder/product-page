import React, { useState, createContext } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [open, setIsOpen] = useState(false);
  const [cartItems,setCartItems] = useState([])
  const[isCartClicked,setIsCartClicked] = useState(false)
  const [count,setCount] = useState(0)

  function handleClick() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function incrementCount(){
    setCount(prevCount=> prevCount + 1)
  }

  function decrementCount(){
    if(count<=0) {
      setCount(0)
    }else{
    setCount(prevCount=> prevCount - 1)
    }
  }

  function handleCartClick(){
    setIsCartClicked(prevState=> !prevState)
  }

  return (
    <Context.Provider value={
      {
         handleClick,
         open,
         count,
         incrementCount,
         decrementCount,
         isCartClicked,
         handleCartClick,
         }
      }>
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
