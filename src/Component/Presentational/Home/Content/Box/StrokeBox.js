import { connect } from "react-redux";

import "../../../../../Styles/StrokeBox.css";

function StrokeBox() {
  return (
    <>
      <div className="strokeBox-container">
        台灣旅遊 <span>130</span> 個行程，平均團費 <span>4,493</span> 元
      </div>
    </>
  );
}
export default connect()(StrokeBox);
