import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar.js";
import ContactForm from "../src/Components/ContactForm/ContactForm.js";
import About from "./Components/About/About.js";
import LandingPage from "./Components/Landingpage/LandingPage.js";

import background from "./images/reg-pics/IMG_3070.PNG";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${background})`, minHeight: "100vh" }}
    >
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/contact-us" component={ContactForm} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
