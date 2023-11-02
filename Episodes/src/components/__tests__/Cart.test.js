import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "./mocks/restaurantMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Testing Add to Cart Functionality", () => {
  it("should load Restaurant  Menu Component", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });
    const accordionHeader = screen.getByText("Bengali Sweets(2)");
    fireEvent.click(accordionHeader);
    const visibleFoodItems = screen.getAllByTestId("foodItems");
    expect(visibleFoodItems.length).toBe(2);
    const addButtons = screen.getAllByRole("button", { name: "Add +" });
    const beforeupdateHeader = screen.getByText("Cart - (0 items)");
    expect(beforeupdateHeader).toBeInTheDocument();

    fireEvent.click(addButtons[0]);

    //When I click on add + button, it should update Header with Cart - (1 items)
    const updatedHeader = screen.getByText("Cart - (1 items)");
    expect(updatedHeader).toBeInTheDocument();

    fireEvent.click(addButtons[1]);
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    //But we also want to test that our Cart page has 2 items.
    const cartAddedItems = screen.getAllByTestId("foodItems");
    expect(cartAddedItems.length).toBe(4);
    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getAllByTestId("foodItems").length).toBe(2);
  });
});
