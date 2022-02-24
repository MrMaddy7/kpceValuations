import React from "react";
import Heading from "./components/Heading";
import Carousel from "./components/Carousel";
import Testing from "./components/Testing";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <React.Fragment>
      <Heading />
      <Carousel />
      <AboutUs />
      <Testing />
    </React.Fragment>
  );
}
export default App;
