import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import MenuShimmer from "./MenuShimmer";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const resInfo = useRestaurantMenu(restaurantId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <MenuShimmer />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  const itemCategories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (singleCategory) =>
        singleCategory?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="my-6 font-bold text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")}- {costForTwoMessage}
      </p>
      <img
        className="rounded-lg w-60 h-40"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-logo"
      />
      {/* Categories Accordions*/}
      {itemCategories.map((singleCategory, index) => (
        // This is now a controlled Component
        <RestaurantCategory
          key={singleCategory?.card?.card?.title}
          data={singleCategory?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
