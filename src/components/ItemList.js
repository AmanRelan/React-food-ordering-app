import { CDN_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an Action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 flex flex-col md:flex-row justify-between"
        >
          <div className="w-full md:w-9/12">
            <span className="py-2">{item.card.info.name}</span>
            <span>
              {" "}
              - ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-full md:w-3/12 flex flex-col items-center">
            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                className="mb-2 w-40 h-40"
              />
            )}
            <button
              className="p-2 bg-green-200 text-black shadow-lg rounded-lg w-40"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
