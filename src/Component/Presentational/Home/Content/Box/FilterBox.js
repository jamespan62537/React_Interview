import React from "react";
import "../../../../../Styles/FilterBox.css";

const FilterBox = (props) => {
  return (
    <div className="filterBox-container">
      <ul>
        <li className="filter-string">
          <a>排序</a>
        </li>
        <li>
          <a>精選評分</a>
        </li>
        <li>
          <a>價格</a>
          <ul>
            <li onClick={() => props.getTourListByFilter("price_asc")}>價格：低到高</li>
            <li onClick={() => props.getTourListByFilter("price_desc")}>價格：高到低</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default FilterBox;
