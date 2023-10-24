import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)

  function handleClick() {
    setIsInCart((isInCart) => !isInCart)
  }

  const className = isInCart? "in-cart" : ""
  const buttonClassName = isInCart? "remove" : "add"

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClassName} onClick={handleClick}>{isInCart? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
