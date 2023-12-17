import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "./mocks/restaurantListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Search Component Test", () => {
  it("should search the restaurant list for haldiram text input", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
    const restaurantCardsPreSearch = screen.getAllByTestId("restaurantCard");
    expect(restaurantCardsPreSearch.length).toBe(9);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "Haldiram" } });
    fireEvent.click(searchBtn);

    // Screen should load 1 card
    //Find Restaurant Card
    const restaurantCardsPostSearch = screen.getAllByTestId("restaurantCard");
    expect(restaurantCardsPostSearch.length).toBe(1);
  });
  it("should filter top rated restaurants when clicked on the button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
    const restaurantCardsPreFilteringTopRated =
      screen.getAllByTestId("restaurantCard");
    expect(restaurantCardsPreFilteringTopRated.length).toBe(9);

    const topRatedButton = screen.getByRole("button", {
      name: "Top Rated Restaurant in your City",
    });
    expect(topRatedButton).toBeInTheDocument();
    fireEvent.click(topRatedButton);
    const restaurantCardsPostFilteringTopRated =
      screen.getAllByTestId("restaurantCard");
    expect(restaurantCardsPostFilteringTopRated.length).toBe(5);
  });
});
