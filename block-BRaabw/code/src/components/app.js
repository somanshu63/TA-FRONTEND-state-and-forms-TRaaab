import React from "react";
import Aside from "./aside";
import Products from "./products";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: [],
      cart: [],
    };
  }
  componentDidMount() {
    if (localStorage.cart) {
      this.setState({
        cart: JSON.parse(localStorage.cart) || [],
      });
    }
    window.addEventListener("beforeunload", this.handleLocalStorage);
  }
  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handleLocalStorage);
  }

  handleLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  handleClick = (value, image) => {
    var imageD = document.getElementById(`image${value}`);
    imageD.src = image;
  };
  handleSearch = (value) => {
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
      const cart = this.state.cart.map((product) => {
        if (
          product.title === products.title &&
          product.size === products.size
        ) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      this.setState({
        cart: cart,
      });
    } else {
      this.setState((prevState) => ({
        cart: [...prevState.cart, products],
      }));
    }
  };
  decreaseQuantity = (index) => {
    if (this.state.cart[index].quantity > 1) {
      var increasedProducts = this.state.cart.map((product, i) => {
        if (i === index) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      this.setState({
        cart: increasedProducts,
      });
    } else if (this.state.cart[index].quantity === 1) {
      this.handleDelete(index);
    }
  };
  increaseQuantity = (index) => {
    var increasedProducts = this.state.cart.map((product, i) => {
      if (i === index) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    this.setState({
      cart: increasedProducts,
    });
  };
  handleDelete = (index) => {
    this.setState({
      cart: this.state.cart.filter((product, i) => i !== index),
    });
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
