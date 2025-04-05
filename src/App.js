import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/content";
import SideNav from "./components/SideNav";
function App() {
  return (
    <div className="App">
      {/* Other components go here */}
      <Footer />
      <Header />
      <div className="row m-3 align-items-center">
        <SideNav />
        <Content />
      </div>
    </div>
  );
}

export default App;
