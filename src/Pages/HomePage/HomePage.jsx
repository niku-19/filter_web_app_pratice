import React from "react";
import Search from "../../Components/Search/search";
import Filter from "../../Components/filter/Filter";
import List from "../../Components/List/List";

const HomePage = () => {
  return (
    <div className="container">
      <Search />
      <div className="filter__list__container">
        <div className="filter__container">
          <Filter />
        </div>
        <div className="list__container">
          <List />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
