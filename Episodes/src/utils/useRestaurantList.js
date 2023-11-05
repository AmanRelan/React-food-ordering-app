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
    const restaurant_list = "top_brands_for_you";
    // const restaurant_list = "FavouriteRestaurantInfoWithStyle";
    const restaurantCard = swiggyJsonData?.data?.cards?.find(
      (card) => card.card.card.id === restaurant_list
    );
    const restaurantData =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setAllRestaurantInfo(restaurantData);
  };
  return allRestaurantInfo;
};

export default useRestaurantList;
