import React from "react";

import Filter from "../../Components/filter/Filter";
import List from "../../Components/List/List";
import SearchFilter from "../../Components/SearchFilter/SearchFilter";

const HomePage = () => {
  return (
    <div className="container">
      <SearchFilter/>
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
