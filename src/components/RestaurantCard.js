import { CDN_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div
      data-testid="restaurantCard"
      className="m-4 p-4 w-[240px] h-[350px]  rounded-lg bg-gray-200 hover:bg-gray-400 shadow-2xl"
    >
      <img
        className="rounded-lg w-60 h-40"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-logo"
      />
      <div className="h-16 overflow-hidden">
        <h3 className="font-bold py-4 text-base">{name}</h3>
      </div>
      <div>
        <h4 className="h-16 overflow-hidden text-sm py-2">
          {cuisines.join(", ")}
        </h4>
      </div>
      <div className="flex justify-between py-4">
        <div className="flex w-2/12">
          <h4>{avgRating}</h4>
          <h4 className="p-1">{<FaStar />}</h4>
        </div>
        <div className="flex w-5/12 ml-4 text-sm">
          <p>🥪</p>
          <h4>{deliveryTime} mins</h4>
        </div>
        <div className="w-6/12 text-sm font-bold">
          <h4>{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component which will be an enhanced Restaurant Card with Label
// Input- RestaurantCard => Output- RestaurantCardVeg
export const withVegetarianLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="m-2 p-2 rounded-lg absolute bg-black text-white">
          Vegetarian
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
