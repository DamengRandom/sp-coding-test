

import { fireEvent, render, screen } from "@testing-library/react";
import Orders from '../../pages/orders';
import CreateOrderForm from '../../components/organisms/CreateOrderForm';

describe("Configurations", () => {
  it("renders the form title", () => {
    render(<Orders />);
    expect(
      screen.getByText(/here./i)
    ).toBeInTheDocument();
  });

  it("renders the form fieldset legend text", () => {
    const mockCreateOrder = jest.fn();
    render(<CreateOrderForm createOrder={mockCreateOrder} />);

    expect(
      screen.getByText("Total Amount")
    ).toBeInTheDocument();
  });

  it("triggers validation error message show up when clicks 'submit' button", async () => {
    // Arrange
    const mockCreateOrder = jest.fn();
    render(<CreateOrderForm createOrder={mockCreateOrder} />);

    // Act
    const submitButton = screen.getByTestId("order-submit");
    fireEvent(
      submitButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));

    const requiredText = await screen.findAllByText(/This field is required/i)

    // Assert
    expect(
      requiredText
    ).toHaveLength(21);
  });
});
