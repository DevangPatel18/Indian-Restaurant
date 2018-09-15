import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './mystyles.css';
import 'bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css';
import Home from './components/home.js';
import Menu from './components/menu.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Reservations from './components/reservations.js';
import Error from './components/error.js';
import Navbar from './components/Navbar.js';
import Footer from './components/footer.js';
import ScrollToTop from './components/scrollToTop.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  componentDidMount() {
    AOS.init()
  }
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
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
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
