import React, { Component } from 'react';
import './menu.css';
import Papa from "papaparse";

class Menu extends Component {
  constructor() {
    super()
    this.state = {
      menuSections: []
    }
  }

  componentDidMount() {

    fetch('menu.csv')
      .then(response => response.text())
      .then(csvtext => {
        
        let food = []
        let foodhtml = {}
        
        Papa.parse(csvtext, {
          header: true,
          skipEmptyLines: true,
          complete: function(results) {
            results.data.forEach(x => food.push(x))
          }
        });

        foodhtml["Biryani"] = food.filter(x => x.Subcategory === "Biryani");
        foodhtml["Vegan and Vegetarian"] = food.filter(x => x.Subcategory === "Vegan" || x.Subcategory === "Vegetarian");
        foodhtml["Chicken"] = food.filter(x => x.Subcategory === "Chicken");
        foodhtml["Beef"] = food.filter(x => x.Subcategory === "Beef");
        foodhtml["Appetizers"] = food.filter(x => x.Category === "Appetizer");
        foodhtml["Drinks and Desserts"] = food.filter(x => x.Category === "Drinks" || x.Category === "Dessert");

        Object.keys(foodhtml).forEach(section => {
          foodhtml[section] = foodhtml[section].map((item, i) => {

            let priceComponent;
            if(item.Large !== "0") {
              priceComponent = 
                <div className="level">
                  <p className="level-item">Regular: ${item.Regular}</p>
                  <p className="level-item">Large: ${item.Large}</p>
                </div>;
            } else {
              priceComponent = <p>${item.Regular}</p>
            }

            return (
              <div key={i} className="has-text-centered menu-item">
                <p className="is-size-5">{item.Name}</p>
                <p className="is-italic">{item.Description}</p>
                {priceComponent}
              </div>
            )
          })
        })

        let menuSections = Object.keys(foodhtml).map((sectionName, i) => {
          let header;
          let headerType = sectionName === "Appetizers" || sectionName === "Drinks and Desserts" ? "main":"sub";
          if(headerType === "sub") {
            header = <h3 className="is-size-3 has-text-centered has-text-weight-normal has-text-grey">{sectionName}</h3>
          } else {
            header = <h2 className="is-size-2 has-text-centered ">{sectionName}</h2>
          }
          return (
            <div key={i}>
              {header}
              <div className="menu-item-container">
                {foodhtml[sectionName]}
              </div>
            </div>
          )
        })

        this.setState({menuSections})
      })
  }

  render() {
    return (
      <div>
        <header className="menu centercontent">
          <h1 className="has-text-light">Menu</h1>
        </header>
        <div className="menu-container">
          <h2 className="is-size-2 has-text-centered">Main courses</h2>
          {this.state.menuSections}
        </div>
      </div>
    )
  }
}

export default Menu;