import React, { useEffect } from "react";
import "../../../../../Styles/TourBox.css";

const TourBox = (props) => {
  let tour_list = [];

  useEffect(() => {
    if (props) {
      props.getTourList();
    }
  }, []);

  if(props.data) {
    tour_list = props.data.tour_list;
  }

  return (
    <div className="tourList-container">
      <ul>
        {tour_list.map((value, key) => {
            return (
              <li key={key}>
                <div className="tour-img" />
                <div className="tour-detail">
                  <div className="tour-agency">{value.agency}</div>
                  <div className="tour-title">{value.title}</div>
                  <div className="tour-tag">企業包團</div>
                  <div className="tour-footer">
                    <div className="tour-group-date"></div>
                    <div className="tour-price">{value.min_price}</div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TourBox;
