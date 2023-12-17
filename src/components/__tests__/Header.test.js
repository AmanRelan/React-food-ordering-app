import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Test Cases", () => {
  describe("Login Button Case Coverage", () => {
    it("should render Header component with a login button", () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      const loginButton = screen.getByRole("button", { name: "Login" });
      // const loginButton = screen.getByText("Login");
      expect(loginButton).toBeInTheDocument();
    });
    it("should change login button to logout on click", () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      const loginButton = screen.getByRole("button", { name: "Login" });
      fireEvent.click(loginButton);
      const logoutButton = screen.getByRole("button", { name: "Logout" });
      expect(logoutButton).toBeInTheDocument();
    });
  });

  describe("Render Other Element", () => {
    it("should render Header component with a cart items 0", () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      // const cartItems = screen.getByText("Cart - (0 items)");
      // Can also use a regex
      const cartItems = screen.getByText(/Cart/);
      expect(cartItems).toBeInTheDocument();
    });
    it("should render Header component with List Items", () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      const cartItems = screen.getAllByRole("listitem");
      expect(cartItems.length).toBe(7);
    });
  });
});
