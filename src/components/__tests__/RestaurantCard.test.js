import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "./mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";

describe("Restaurant Card Test Cases", () => {
  it("should render restaurant card component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const restaurantName = screen.getByText("Haldiram's");
    expect(restaurantName).toBeInTheDocument();
  });
  it("should render Restaurant card component with vegetarian label", () => {
    //Test Higher order Component with Vegetarian Label.
  });
});
