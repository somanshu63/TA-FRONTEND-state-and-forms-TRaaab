import React from "react";
import data from "./data.json";
var categories = [];
categories.push("all");
data.map((item) => {
  if (!categories.includes(item.category)) {
    categories.push(item.category);
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "all",
    };
  }
  handleCategory(category) {
    this.setState({
      category: category,
    });
  }
  render() {
    return (
      <>
        <div className="menu">
          <h1 className="text-center">Our Menu</h1>
          <div className="underline"></div>
          <div className="flex categories justify-center">
            {categories.map((category) => {
              return (
                <button
                  onClick={(event) => {
                    this.handleCategory(event.target.id);
                  }}
                  key={category}
                  id={category}
                  className={
                    this.state.category === category
                      ? "active category"
                      : "category"
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div className="menu-list justify-space-between flex">
            {data
              .filter((item) => {
                if (this.state.category === "all") {
                  return item;
                }
                if (item.category === this.state.category) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <div className="menu-items width-45 flex">
                    <img
                      className="width-30"
                      src={item.img}
                      alt={item.title}
                    ></img>
                    <div className="details width-70">
                      <div className="flex justify-space-between">
                        <h3>{item.title}</h3>
                        <span>${item.price}</span>
                      </div>
                      <div className="hr"></div>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
