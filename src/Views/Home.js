import React from "react";
import Technology from "../components/Technology";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Product from "../components/Product";
import Partners from "../components/Partners";
import Comment from "../components/Comment";
import Options from "../components/Options";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Product />
      <Technology />
      <Partners />
      <Comment />
      <Options />
      <Footer />
    </div>
  );
};

export default Home;
