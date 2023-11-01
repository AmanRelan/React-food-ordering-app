import { CDN_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an Action
    dispatch(addItem(item));
  };
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div>
                <span className="py-2">{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
              <div className="absolute">
                <button
                  className="p-2 mx-10 bg-green-200 text-black shadow-lg rounded-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>

              {item.card.info.imageId ? (
                <img src={CDN_URL + item.card.info.imageId} />
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
