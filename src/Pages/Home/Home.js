import React from "react";

import "../../Styles/Home.css";
import KvContainer from "../../Component/Presentational/Home/Header/KvHeader";
import SearchResultContent from "../../Component/Presentational/Home/Content/SearchResultContent";

function Home() {
  // 取得精選團旅（預設）產品
  // const [tour_list, getTourListService] = useState([]);

  // 預設頁數
  // const [pagination, setPage] = useState(1);

  // 預設每頁產品數量
  // const [rows_per_page] = useState(20);

  // 預設價格篩選
  // const [price_filter, priceFilter] = useState(undefined);

  // const [click_count, setClickCount] = useState(0);

  // async function fetchData() {
  //   getTourListService(
  //     await getTourListSupport(pagination, rows_per_page, price_filter)
  //   );
  // }

  // 當畫面第一次載入以及 pagination, rows_per_page, price_filter 其中一個變動時
  // render 才會呼叫 fetchData
  // useEffect(() => {
  //   fetchData();
  // }, [pagination, rows_per_page, price_filter]);

  // 當 pagination 變動時執行 setPage 並把當前 pagination 帶入
  // useEffect(() => {
  //   setPage(pagination);
  // }, [pagination]);

  // 當 price_filter 變動時執行 priceFilter 並把當前 price_filter 帶入
  // useEffect(() => {
  //   priceFilter(price_filter);
  // }, [price_filter]);

  // 測試點擊功能
  // useEffect(() => {
  //   setClickCount(click_count)
  // }, [click_count]);
  
  return (
    <>
      <KvContainer />
      <SearchResultContent />
    </>
  );
}

export default Home;
