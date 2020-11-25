import axios from "axios";

export async function getTourListSupport(
  pagination,
  rows_per_page,
  price_filter
) {
  let api_url = `https://interview.tripresso.com/tour/search?page=${pagination}&row_per_page=${rows_per_page}`;

  // 判斷當前是否有升降冪的篩選條件
  if (price_filter) {
    api_url += `&sort=${price_filter}`;
  }
  let tour_tmp_list = [];
  await axios
    .get(api_url)
    .then((response) => {
      if (response.statusText === "OK") {
        tour_tmp_list = response.data.data.tour_list;
      } else {
        console.log(response);
      }
    })
    .catch((error) => {
      console.log(error);
    });

  try {
    const tour_list = tour_tmp_list;
    return tour_list;
  } catch {
    console.log("取得資料失敗");
  }
}
