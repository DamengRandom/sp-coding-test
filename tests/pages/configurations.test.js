import { render, screen } from "@testing-library/react";
import ConfigurationCard from '../../components/organisms/ConfigurationCard';

describe("Configurations", () => {
  beforeEach(() => {
    const configurationProps = {
      title: 'Test',
      description: 'Test Description',
      numberOfPayments: 10,
      promotionLink: 'http://abc.com',
      languages: ['en', 'fr'],
      minAmount: 1,
      maxAmount: 100
    };
    render(<ConfigurationCard {...configurationProps} />);
  });

  it("renders the 'Description'", () => {
    expect(
      screen.getByText("Test Description")
    ).toBeInTheDocument();
  });

  it("renders the 'Amount'", () => {
    expect(
      screen.getByText("Amount: (Min ~ Max)")
    ).toBeInTheDocument();
  });

  it("renders the 'Number of Payments'", () => {
    expect(
      screen.getByText("Number of Payments:")
    ).toBeInTheDocument();
    expect(
      screen.getByText("10")
    ).toBeInTheDocument();
  });

  it("renders the 'Promotion' button", () => {
    expect(
      screen.getByText(/Promotion/i)
    ).toBeInTheDocument();
  });
});
