import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);

  function handleClick() {
    setIsInCart((isInCart) => !isInCart)
  };

  const className = isInCart? "in-cart" : "";
  const buttonClassName = isInCart? "remove" : "add";
  const buttonText = isInCart? "Remove From Cart" : "Add To Cart";

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClassName} onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
