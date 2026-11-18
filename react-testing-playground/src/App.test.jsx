import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render User Management heading", () => {
  render(<App />);

  const heading = screen.getByText("User Management");

  expect(heading).toBeInTheDocument();
});
