import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "./constants";

const useRestaurantList = () => {
  const [allRestaurantInfo, setAllRestaurantInfo] = useState([]);

  // Fetch Data only once
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_URL);
    const swiggyJsonData = await data.json();
    let restaurantList =
      swiggyJsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    if (restaurantList === undefined) {
      restaurantList =
        swiggyJsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
    }
    console.log(swiggyJsonData?.data?.cards);
    console.log(restaurantList);

    setAllRestaurantInfo(restaurantList);
  };
  return allRestaurantInfo;
};

export default useRestaurantList;
