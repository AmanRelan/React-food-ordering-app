import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import MenuShimmer from "./MenuShimmer";
import { CDN_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const resInfo = useRestaurantMenu(restaurantId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <MenuShimmer />;
  console.log(resInfo?.cards[0]?.card?.card?.info);
  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    areaName,
    locality,
    avgRating,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { deliveryTime } = resInfo?.cards[0]?.card?.card?.info?.sla;
  const itemCategories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (singleCategory) =>
        singleCategory?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div>
      <div className="flex mx-auto w-6/12">
        <img
          className="py-4 rounded-lg w-60 h-40"
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant-logo"
        />
        <div>
          <div>
            <h1 className="pt-4 pl-2 font-bold text-3xl">{name}</h1>
            <div className="pl-2 mt-1">
              <p>{cuisines.join(",")}</p>
            </div>
            <div className="pl-2">
              <p>{`${areaName},${locality}`}</p>
            </div>
            <div className="h-6/12 flex mt-3 pl-2">
              <div className="w-2/12 flex text-lg font-bold">
                <span>{avgRating}</span>
                <span className="pl-1 mt-1">{<FaStar />}</span>
              </div>
              <span> &emsp;| </span>{" "}
              <div className="w-6/12 pl-2">{deliveryTime} MINS</div>
              <span> &emsp;| </span>{" "}
              <div className="pl-2 w-9/12">{costForTwoMessage}</div>
            </div>
          </div>
        </div>
      </div>
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
