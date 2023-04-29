import React from "react";

import Filter from "../../Components/filter/Filter";
import List from "../../Components/List/List";
import SearchFilter from "../../Components/SearchFilter/SearchFilter";
import Header from "../../Components/Header/Header";
import HeroBanner from "../../Components/Banner/HeroBanner";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <div className="main__container">
        <HeroBanner />
        <SearchFilter />
        <div className="filter__list__container">
          <div className="filter__container">
            <Filter />
          </div>
          <div className="list__container">
            <List />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
