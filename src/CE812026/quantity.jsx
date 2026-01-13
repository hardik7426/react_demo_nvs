import React, { Component } from "react";

class ProductSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { label: "Apple", price: 10 },
        { label: "Banana", price: 5 },
        { label: "Orange", price: 8 }
      ],
      selectedIndex: 0,
      quantity: 1
    };
  }

  handleItemChange = (e) => {
    this.setState({
      selectedIndex: Number(e.target.value)
    });
  };

  increaseQuantity = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1
    }));
  };

  decreaseQuantity = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity - 1
    }));
  };

  render() {
    const { items, selectedIndex, quantity } = this.state;
    const selectedItem = items[selectedIndex];
    const totalPrice = selectedItem.price * quantity;

    return (
      <div style={{ width: "300px", margin: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <select onChange={this.handleItemChange} value={selectedIndex}>
            {items.map((item, index) => (
              <option key={index} value={index}>
                {item.label} (₹{item.price})
              </option>
            ))}
          </select>

          <button onClick={this.decreaseQuantity} disabled={quantity === 0}>
            -
          </button>

          <span>{quantity}</span>

          <button onClick={this.increaseQuantity}>+</button>
        </div>

        <h3>Total Price: ₹{totalPrice}</h3>
      </div>
    );
  }
}

export default ProductSelector;
