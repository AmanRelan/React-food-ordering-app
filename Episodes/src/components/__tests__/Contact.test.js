import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact us Test Page Element", () => {
  test("should load the heading in the contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  it("should load button inside the contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
  test("should load three input boxes on the contact component", () => {
    render(<Contact />);
    const allInputBoxes = screen.getAllByRole("textbox");
    expect(allInputBoxes.length).toBe(3);
  });
});

describe("Should test various Input fields", () => {
  test("should find input with placeholder name inside the contact component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Name");
    expect(input).toBeInTheDocument();
  });
  test("should find input with placeholder message inside the contact component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Message");
    expect(input).toBeInTheDocument();
  });
  test("should find input with placeholder email inside the contact component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Email");
    expect(input).toBeInTheDocument();
  });
});
