import React from "react";
import Aside from "./aside";
import Products from "./products";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: ["all"],
      cart: [],
    };
  }
  handleClick = (value, image) => {
    var imageD = document.getElementById(`image${value}`);
    imageD.src = image;
  };
  handleSearch = (value) => {
    if (value === "all") {
      this.setState({
        size: ["all"],
      });
    } else {
      this.setState({
        size: this.state.size.filter((i) => i !== "all"),
      });
    }
    if (this.state.size.includes(value)) {
      this.setState({
        size: this.state.size.filter((i) => i !== value),
      });
    } else {
      this.setState((prevState) => ({
        size: [...prevState.size, value],
      }));
    }
  };
  addToCart = (products) => {
    products.quantity = 1;
    if (
      this.state.cart.find(
        (product) =>
          product.title === products.title && product.size === products.size
      )
    ) {
      this.state.cart.find((product) => {
        if (
          product.title === products.title &&
          product.size === products.size
        ) {
          product.quantity = product.quantity + 1;
          this.forceUpdate();
        }
      });
    } else {
      this.setState((prevState) => ({
        cart: [...prevState.cart, products],
      }));
    }
  };
  decreaseQuantity = (index) => {
    if (this.state.cart[index].quantity > 1) {
      this.state.cart[index].quantity -= 1;
    } else if (this.state.cart[index].quantity === 1) {
      this.handleDelete(index);
    }
    this.forceUpdate();
  };
  increaseQuantity = (index) => {
    this.state.cart[index].quantity += 1;
    this.forceUpdate();
  };
  handleDelete = (index) => {
    delete this.state.cart[index];
    this.forceUpdate();
  };
  render() {
    return (
      <>
        <h1 className="text-center fs-40 golden margin-2">Products</h1>
        <div className="flex">
          <Products
            handleClick={this.handleClick}
            filter={this.state.size}
            addToCart={this.addToCart}
          />
          <Aside
            handleSearch={this.handleSearch}
            increaseQuantity={this.increaseQuantity}
            decreaseQuantity={this.decreaseQuantity}
            thisState={this.state}
            handleDelete={this.handleDelete}
          />
        </div>
      </>
    );
  }
}

export default App;
