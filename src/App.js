import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar.js";
import ContactForm from "../src/Components/ContactForm/ContactForm.js";
import About from "./Components/About/About.js";
import LandingPage from "./Components/Landingpage/LandingPage.js";
import DroneGallery from "./Components/Galleries/DroneGallery/DroneGallery.js";
import Footer from "./Components/Footer/Footer.js";
import Hero from "./Components/Hero/Hero.js";
import CarouselComp from "./Components/Carousel/CarouselComp.js";
import GalleryPage from "./Components/Galleries/Gallery/GalleryPage.js";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ background: "#212121", minHeight: "100vh" }}>
      <Navbar />
      <div>
        <React.StrictMode>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/contact-us" component={ContactForm} />
            <Route exact path="/about" component={About} />
            <Route exact path="/drone-page" component={DroneGallery} />
            <Route exact path="/hero-101" component={Hero} />
            <Route exact path="/carousel" component={CarouselComp} />
            <Route exact path="/gallery-page" component={GalleryPage} />
          </Switch>
        </React.StrictMode>
      </div>
      <Footer />
    </div>
  );
}

export default App;
