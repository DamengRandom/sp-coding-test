
import { render, screen, cleanup } from "@testing-library/react";
import Home from "../../pages/index";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  afterEach(cleanup);

  it("renders the main title crashing", () => {
    expect(
      screen.getByText("Welcome to Scalapay")
    ).toBeInTheDocument();
  });

  it('renders the heading text', () => {
    expect(
      screen.getByText("Buy now and pay later ~~")
    ).toBeInTheDocument();
  });

  it('renders the buttons', () => {
    expect(
      screen.getByText("Create a order")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Configurations")
    ).toBeInTheDocument();
  });
});
