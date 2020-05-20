import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar.js";
import ContactForm from "../src/Components/ContactForm/ContactForm.js";
import About from "./Components/About/About.js";
import LandingPage from "./Components/Landingpage/LandingPage.js";
import DroneGallery from "./Components/Galleries/Drone/DroneGallery.js";
import Footer from "./Components/Footer/Footer.js";
import Hero from "./Components/Hero/Hero.js";
// import background from "./images/reg-pics/IMG_3070.PNG";
// import drone from "../src/images/reg-pics/Drone_Reel_1.mp4";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      // style={{ backgroundImage: `url(${background})`, minHeight: "100vh" }}
      style={{ background: "#212121", minHeight: "100vh" }}
      // style={{ background: "#0A0A0A", minHeight: "100vh" }}
      // style={{ backgroundImage: `url(${drone})`, minHeight: "100vh" }}
      // style={{
      //   background:
      //     "linear-gradient(to right, #000 0%,  #000 50%, #fff 50% #fff 100%)",
      // }}
    >
      <Navbar />
      <div>
        <React.StrictMode>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/contact-us" component={ContactForm} />
            <Route exact path="/about" component={About} />
            <Route exact path="/drone" component={DroneGallery} />
            <Route exact path="/hero-101" component={Hero} />
          </Switch>
        </React.StrictMode>
      </div>
      <Footer />
    </div>
  );
}

export default App;
