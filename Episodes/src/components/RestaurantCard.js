import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      data-testid="restaurantCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-400"
    >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-logo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minutes</h4>
      <h4>{loggedInUser}</h4>
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
