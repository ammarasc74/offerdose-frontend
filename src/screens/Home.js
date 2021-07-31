import React from "react";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/cards/Card";
import Footer from "../components/footer/Footer";
import Cover from "../components/cover/Cover";

import Dashboard from "../components/cards/Dashboard.json";
import Partner from "../components/cards/Partner.json";
import "./Home.css";
import "tachyons";

export default function Home() {
  return (
    <>
      <div className="home">
        <div>
          <Navbar />
        </div>
        <div className="cover">
          <Cover />
        </div>
        <div className="dashboard-title">
          <h1>Dashboard Features</h1>
        </div>
        <div className="dashboard-section">
          {Dashboard.map((item, index) => {
            return <Card title={item.title} description={item.description} />;
          })}
        </div>
        <div>
          <div className="partners-title">
            <h1>Partners</h1>
          </div>
        </div>
        <div className="partners-section">
          {Partner.map((item, index) => {
            return <Card title={item.title} description={item.description} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
