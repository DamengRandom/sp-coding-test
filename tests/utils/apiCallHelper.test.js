import apiCallHelper from '../../utils/apiCallHelper';

const mockResponse = {
  "type": "PAY_BY_INSTALLMENT",
  "description": "'Pay over time'",
  "minimumAmount": {
      "amount": "4.00",
      "currency": "EUR"
  },
  "maximumAmount": {
      "amount": "600.00",
      "currency": "EUR"
  },
  "numberOfPayments": 3,
  "promotionUrl": "https://promotion.scalapay.it/popup/600/",
  "locales": [
      "en",
      "fr",
      "it"
  ]
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockResponse),
  })
);

describe("Test API call helper function", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("Should get configurations data returned for Front end", async () => {
    // Arrange
    const url = '/v2/configurations';
    const options = {
      method: 'GET'
    };

    // Act
    const getResponse = await apiCallHelper(url, options);

    // Assert
    expect(getResponse.type).toBe('PAY_BY_INSTALLMENT');
    expect(getResponse.numberOfPayments).toBe(3);
  });

  it("Should not get configurations data (failed case)", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API is down"));
    
    const getResponse = await apiCallHelper();

    expect(getResponse).toBeUndefined();
  });
});
