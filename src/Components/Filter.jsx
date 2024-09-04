import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Filter = () => {
  const { setCategory , filterData } = useContext(AppContext);

  function handleFilter(title) {
    setCategory(title);
  }

  return (
    <div className="filterContainer">
      {filterData.map((data) => (
        <button
          key={data.id}
          className="filterButton"
          onClick={() => handleFilter(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
