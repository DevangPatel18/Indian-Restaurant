import React from 'react';
import './menu.css';
import Papa from "papaparse";

const Menu = () => {
  let food = []

  fetch('menu.csv')
    .then(response => response.text())
    .then(csvtext => {
      
      Papa.parse(csvtext, {
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
          results.data.forEach(x => food.push(x))
        }
      });
    })

  return (
    <div>
      <header className="menu centercontent">
        <h1 className="has-text-light">Menu</h1>
      </header>
    </div>
  )
}

export default Menu;