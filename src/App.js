import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css';
import Home from './components/home.js';
import Menu from './components/menu.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Reservations from './components/reservations.js';
import Error from './components/error.js';
import Navbar from './components/Navbar.js';
import Footer from './components/footer.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
            <Route path="/reservations" component={Reservations} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
