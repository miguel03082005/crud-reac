import React from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../components/ContentHeader";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="content-wrapper">
         
        <ContentHeader
          titulo={"modulos"}
          breadCumb1={"Inicio"}
          breadCumb2={"Dashboard"}
          ruta1={"/home"}
        />

        <section className="content">
          <div className="container-fluid">
          <Dashboard></Dashboard>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;