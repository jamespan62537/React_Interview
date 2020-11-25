import "../../../../Styles/SearchResultContent.css";
import FilterContainer from "../../../Container/FilterContainer";
import StrokeBox from "./Box/StrokeBox";
import TourContainer from "../../../Container/TourContainer";

export default function SearchResultContent({}) {
  return (
    <div className="result-container">
      <FilterContainer />
      <StrokeBox />
      <TourContainer />
    </div>
  );
}
