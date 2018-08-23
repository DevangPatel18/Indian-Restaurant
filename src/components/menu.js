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

        foodhtml["Appetizers"] = food.filter(x => x.Category === "Appetizer");
        foodhtml["Biryani"] = food.filter(x => x.Subcategory === "Biryani");
        foodhtml["Vegan and Vegetarian"] = food.filter(x => x.Subcategory === "Vegan" || x.Subcategory === "Vegetarian");
        foodhtml["Chicken"] = food.filter(x => x.Subcategory === "Chicken");
        foodhtml["Beef"] = food.filter(x => x.Subcategory === "Beef");
        foodhtml["Dessert"] = food.filter(x => x.Category === "Dessert");

        Object.keys(foodhtml).forEach(section => {
          foodhtml[section] = foodhtml[section].map((item, i) => {

            let priceComponent;
            let rgPrice = <span className="has-text-weight-semibold">${item.Regular}</span>
            if(item.Large !== "0") {
              let lgPrice = <span className="has-text-weight-semibold">${item.Large}</span>
              priceComponent = 
                <div className="level">
                  <p className="level-item">Regular: {rgPrice}</p>
                  <p className="level-item">Large: {lgPrice}</p>
                </div>;
            } else {
              priceComponent = <p>{rgPrice}</p>
            }

            return (
              <div key={i} className="has-text-centered menu-item">
                <p className="is-size-5 has-text-weight-semibold">{item.Name}</p>
                <p className="has-text-grey">{item.Description}</p>
                {priceComponent}
              </div>
            )
          })
        })

        let menuSections = Object.keys(foodhtml).map((sectionName, i) => {
          let header;
          let headerType = sectionName === "Appetizers" || sectionName === "Dessert" ? "main":"sub";
          
          if(sectionName === "Biryani") {
            header = (
              <div>
                <h2 className="title is-2 has-text-centered ">Main Courses</h2>
                <h3 className="is-size-3 has-text-centered has-text-weight-normal has-text-grey">{sectionName}</h3>
              </div>
            )
          } else {
            if(headerType === "sub") {
              header = <h3 className="is-size-3 has-text-centered has-text-weight-normal has-text-grey">{sectionName}</h3>
            } else {
              header = <h2 className="title is-2 has-text-centered ">{sectionName}</h2>
            }
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
          {this.state.menuSections}
        </div>
      </div>
    )
  }
}

export default Menu;