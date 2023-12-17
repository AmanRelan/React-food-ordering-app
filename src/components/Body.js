import RestaurantCard, { withVegetarianLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const RestaurantCardVeg = withVegetarianLabel(RestaurantCard);

  const listOfRestaurants = useRestaurantList();
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    setFilteredRestaurant(listOfRestaurants);
  }, [listOfRestaurants]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    if (value.trim() === "") {
      setFilteredRestaurant(listOfRestaurants);
    } else {
      const filtered = listOfRestaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredRestaurant(filtered);
    }
  };

  if (onlineStatus === false) {
    return (
      <h1 className="text-center font-bold">
        Looks like you are offline, please check your internet connection.
      </h1>
    );
  }

  return (
    <div className="body">
      <div className="text-center">
        <div className="search m-4 p-4">
          <input
            data-testid="searchInput"
            type="text"
            className="search-box rounded-lg border border-solid border-black w-6/12 h-10"
            placeholder="Search for food to satisfy your taste buds..."
            value={searchText}
            onChange={handleSearch}
            size={100}
          />
          <button
            className="px-4 py-1 bg-green-200 m-4 rounded-lg hover: border border-red-300 h-10"
            onClick={() => {}}
          >
            Search
          </button>
        </div>
      </div>
      {listOfRestaurants.length === 0 ? (
        <div className="flex">{<Shimmer />}</div>
      ) : filteredRestaurant.length > 0 ? (
        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.veg ? (
                <RestaurantCardVeg resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center font-bold">
          No restaurant found in your area! Please check your location settings.
        </div>
      )}
    </div>
  );
};

export default Body;
