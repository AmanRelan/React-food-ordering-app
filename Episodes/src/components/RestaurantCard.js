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
      className="m-4 p-4 w-[250px] h-[500px]  rounded-lg bg-gray-200 hover:bg-gray-400 shadow-xl"
    >
      <img
        className="rounded-lg w-64 h-56 object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-logo"
      />
      <div className="w-64 h-16">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
      </div>
      <div>
        <h4 className="h-16 overflow-hidden text-sm py-2">
          {cuisines.join(", ")}
        </h4>
      </div>
      <div className="flex justify-between py-4">
        <div className="flex h-10">
          <h4>{avgRating}</h4>
          <h4 className="p-1">{<FaStar />}</h4>
        </div>
        <div className="flex ml-4">
          <p>🥪</p>
          <h4>{deliveryTime} mins</h4>
        </div>
      </div>
      <h4>{costForTwo}</h4>
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
