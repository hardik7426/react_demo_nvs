import React, { useState } from "react";
export default function CartTheme() {
  const [cartItems, setCartItems] = useState([]);
  const [theme, setTheme] = useState("light");
  const items = [
    { id: "item1", name: "Coffee", price: 2.5 },
    { id: "item2", name: "Tea", price: 2.0 },
    { id: "item3", name: "Croissant", price: 3.0 },
    { id: "item4", name: "Muffin", price: 4.5 },
  ];
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(0);
  const [selectedItem, setSelectedItem] = useState({
    id: "item1",
    name: "Coffee",
    price: 2.5,
  });
  const [cartTotal, setCartTotal] = useState(0);

  const handleSelectionChange = (id) => {
    const item = items.find((item) => item.id === id);
    setSelectedItem(item);
    setTotal(item.price * qty);
  };

  const handleQtyChange = (e) => {
    setQty(e.target.value);
    setTotal(selectedItem.price * e.target.value);
  };

  const addtoCart = () => {
    const newItem = { ...selectedItem, qty, cart_id: Date.now() };
    setCartItems([...cartItems, newItem]);
    setCartTotal(cartTotal + total);
  };

  const removeItem = (cart_id) => {
    const itemToRemove = cartItems.find((item) => item.cart_id === cart_id);
    setCartTotal(cartTotal - itemToRemove.price * itemToRemove.qty);
    const newCartItems = cartItems.filter((item) => item.cart_id !== cart_id);
    setCartItems(newCartItems);
  };
  return (
    <>
      <label>Select Item :</label>
      <select onChange={(e) => handleSelectionChange(e.target.value)}>
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name} - {item.price}
          </option>
        ))}
      </select>
      <br />
      <label>Decide Quantity:</label>
      <input type="number" value={qty} onChange={(e) => handleQtyChange(e)} />
      <br />
      {total}
      <br />
      <button onClick={() => addtoCart()}>Add to Cart</button>
      {cartTotal}
      <br />
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} x {item.qty} = {item.price * item.qty}
            <button onClick={() => removeItem(item.cart_id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
