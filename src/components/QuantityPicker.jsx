import { useState } from "react";

function QuantityPicker() {
  // const [state, setState] = useState(initialValue)
  const [quantity, setQuantity] = useState(1);
  //quantity = quantity + 1; 

  function onDecrease() {
    console.log('decreasing the quantity');

    if (quantity > 1) {
      setQuantity(quantity-1)
    } 
  }

  function onIncrease() {
    console.log("increasing the quantity");
    setQuantity(quantity+1)
  }

  return (
    <div className="quantity-picker-container">
      <button className="btn btn-primary btn-filter" onClick={onDecrease}>-</button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  )
}

export default QuantityPicker;