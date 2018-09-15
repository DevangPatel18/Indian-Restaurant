import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('navbar-menu-open');

      });
    });
  }

  // Collapse mobile menu after clicking link
  const button = document.querySelector('.navbar-burger')
  const menu = document.querySelector('.navbar-menu')

  document.querySelectorAll('.navbar-item').forEach(x => x.addEventListener('click', () => {
    if (button.classList.contains("is-active")) {
      button.classList.toggle("is-active");
      menu.classList.toggle("navbar-menu-open");
    }
  }))
});