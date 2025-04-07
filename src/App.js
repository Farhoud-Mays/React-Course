import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/content";
import SideNav from "./components/SideNav";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Footer />
      <Header />

      <div>
        <Content />
      </div>

      {/* Global layout container */}
      {/* <Container className="my-global-layout">
        <div className="row m-3"> */}

      {/* </div>
      </Container> */}
    </div>
  );
}

export default App;
