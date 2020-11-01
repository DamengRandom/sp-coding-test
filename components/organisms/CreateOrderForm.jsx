import React, { useState } from "react";
import { useForm } from "react-hook-form";
// constants
import { orders_api_url, requiredMessage } from "../../configs/constants";
// helpers
import createOrder from "../../pages/api/orders";
// components
import Button from "../atoms/Button";
import Checkbox from "../atoms/form/Checkbox";
import Fieldset from "../atoms/form/Fieldset";
import InputField from "../atoms/form/InputField";
import PriceCurrencyInput from "../atoms/form/PriceCurrencyInput";

const createNewOrder = async (url, body) => {
  const orderRequest = await createOrder(url, body);
  if (orderRequest) {
    if (orderRequest && orderRequest.checkoutUrl) {
      window.location.replace(orderRequest.checkoutUrl);
    }
  }
};

// @TODO: refactor this component (lose weight ~~)
export default function CreateOrderForm() {
  const { register, handleSubmit, errors,  watch } = useForm();
  const [size, setSize] = useState(1);

  const increaseNumberOfItems = (length) =>
    Array.from({ length }, (_, k) => k + 1);

  const onSubmit = (submitData) => {
    let itemsObject = {},
        itemsArray = [],
        subcategory = [];

    // logics for handling items data
    for (let i = 0; i < size; i++) {
      // Explain: the reason why we put i + 1 is because react-hook-form field array data structure first element returns as null

      // get subcategory logic
      if(submitData.itemSubcategoryOne[i + 1]) {
        submitData.itemSubcategoryOne[i + 1] = 'Shirt';
      }else {
        submitData.itemSubcategoryOne[i + 1] = '';
      }
      if(submitData.itemSubcategoryTwo[i + 1]) {
        submitData.itemSubcategoryTwo[i + 1] = 'Long-sleeve';
      }else {
        submitData.itemSubcategoryTwo[i + 1] = '';
      }
      subcategory = [submitData.itemSubcategoryOne[i + 1], submitData.itemSubcategoryTwo[i + 1]]
        .filter(el => el !== '');
      
      // get items logic
      itemsObject = {
        name: submitData.itemName[i + 1],
        category: submitData.itemCategory[i + 1],
        subcategory,
        brand: submitData.itemBrand[i + 1],
        gtin: submitData.itemGtin[i + 1],
        sku: submitData.itemSku[i + 1],
        quantity: submitData.itemQuantity[i + 1],
        price: {
          amount: submitData.itemPriceValue[i + 1],
          currency: submitData.itemPriceCurrency[i + 1],
        },
      };

      itemsArray.push(itemsObject);
    }

    // get form body for create an order
    let formBody = {
      totalAmount: {
        amount: submitData.totalAmountValue,
        currency: submitData.totalAmountCurrency,
      },
      consumer: {
        givenNames: submitData.consumerGivenNames,
        surname: submitData.consumerSurname,
        email: submitData.consumerEmail,
      },
      shipping: {
        name: submitData.shippingName,
        line1: submitData.shippingLine,
        suburb: submitData.shippingSuburb,
        postcode: submitData.shippingPostcode,
        countryCode: submitData.shippingCountryCode,
        phoneNumber: submitData.shippingPhoneNumber,
      },
      items: itemsArray,
      merchant: {
        redirectConfirmUrl: submitData.merchantRedirectConfirmUrl,
        redirectCancelUrl: submitData.merchantRedirectCancelUrl,
      },
      merchantReference: submitData.merchantReference,
    };

    createNewOrder(orders_api_url, JSON.stringify(formBody));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="block m-auto w-full max-w-sm"
    >
      {/* Group 1: totalAmount */}
      <Fieldset ledgendText={"Total Amount"}>
        <PriceCurrencyInput
          label={"Total Amount: "}
          valueType={"text"}
          valueName={"totalAmountValue"}
          valueRegister={register({ required: true })}
          valueError={errors.totalAmountValue && <span>{requiredMessage}</span>}
          currencyName={"totalAmountCurrency"}
          currencyRegister={register({ required: true })}
          currencyError={
            errors.totalAmountCurrency && <span>{requiredMessage}</span>
          }
        />
      </Fieldset>
      {/* Group 2: consumer */}
      <Fieldset ledgendText={"Consumer Information"}>
        <InputField
          label={"Consumer Given Names: "}
          id={"consumerGivenNames"}
          name={"consumerGivenNames"}
          register={register({ required: true })}
          error={errors.consumerGivenNames && <span>{requiredMessage}</span>}
          placeholder="eg: test"
        />
        <InputField
          label={"Consumer Surname: "}
          id={"consumerSurname"}
          name={"consumerSurname"}
          register={register({ required: true })}
          error={errors.consumerSurname && <span>{requiredMessage}</span>}
          placeholder="eg: test"
        />
        <InputField
          label={"Consumer Email: "}
          id={"consumerEmail"}
          name={"consumerEmail"}
          type={"email"}
          register={register({ required: true })}
          error={errors.consumerEmail && <span>{requiredMessage}</span>}
          placeholder="eg: test@test.com"
        />
      </Fieldset>
      {/* Group 3: shipping */}
      <Fieldset ledgendText={"Shipping Information"}>
        <InputField
          label={"Shipping Name: "}
          id={"shippingName"}
          name={"shippingName"}
          register={register({ required: true })}
          error={errors.shippingName && <span>{requiredMessage}</span>}
          placeholder="eg: test"
        />
        <InputField
          label={"Shipping Line Address: "}
          id={"shippingLine"}
          name={"shippingLine"}
          register={register({ required: true })}
          error={errors.shippingLine && <span>{requiredMessage}</span>}
          placeholder="eg: Via della Rosa, 58"
        />
        <InputField
          label={"Shipping Suburb: "}
          id={"shippingSuburb"}
          name={"shippingSuburb"}
          register={register({ required: true })}
          error={errors.shippingSuburb && <span>{requiredMessage}</span>}
          placeholder="eg: Montelupo Fiorentino"
        />
        <InputField
          label={"Shipping Postcode: "}
          id={"shippingPostcode"}
          name={"shippingPostcode"}
          register={register({ required: true })}
          error={errors.shippingPostcode && <span>{requiredMessage}</span>}
          placeholder="eg: 50056"
        />
        <InputField
          label={"Shipping Country Code: "}
          id={"shippingCountrycode"}
          name={"shippingCountrycode"}
          register={register({ required: true })}
          error={errors.shippingCountrycode && <span>{requiredMessage}</span>}
          placeholder="eg: IT"
        />
        <InputField
          label={"Shipping Phone Number: "}
          id={"shippingPhoneNumber"}
          name={"shippingPhoneNumber"}
          type={"tel"}
          register={register({ required: true })}
          error={errors.shippingPhoneNumber && <span>{requiredMessage}</span>}
          placeholder="eg: 0400000000"
        />
      </Fieldset>
      {/* Group 4: items */}
      <Fieldset ledgendText={"Item(s) Information"}>
        {increaseNumberOfItems(size).map((index) => (
          <div key={`item-${index}`}>
            <div className="border-sloid border-b-2 border-gray-300 pb-4 my-8">Item {index}:</div>
            <InputField
              label={"Item Name: "}
              id={`itemName[${index}]`}
              name={`itemName[${index}]`}
              register={register({ required: true })}
              error={errors.itemName?.[index] && <span>{requiredMessage}</span>}
              placeholder="eg: T-Shirt"
            />
            <InputField
              label={"Item Category: "}
              id={`itemCategory[${index}]`}
              name={`itemCategory[${index}]`}
              register={register({ required: true })}
              error={
                errors.itemCategory?.[index] && <span>{requiredMessage}</span>
              }
              placeholder="eg: clothes"
            />
            {/* @TODO: Just for demo only, later need to change based on category load differet subcategories */}
            <div>
              <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Item Subcategory
              </p>
              <div className="flex">
                <Checkbox
                  name={`itemSubcategoryOne[${index}]`}
                  checkboxRegister={register}
                  text={"Shirt"}
                />
                <Checkbox
                  name={`itemSubcategoryTwo[${index}]`}
                  checkboxRegister={register}
                  text={"Long-sleeve"}
                />
              </div>
            </div>
            <InputField
              label={"Item Brand: "}
              id={`itemBrand[${index}]`}
              name={`itemBrand[${index}]`}
              register={register({ required: true })}
              error={
                errors.itemBrand?.[index] && <span>{requiredMessage}</span>
              }
              placeholder="eg: TopChoice"
            />
            <InputField
              label={"Item Gtin: "}
              id={`itemGtin[${index}]`}
              name={`itemGtin[${index}]`}
              register={register({ required: true })}
              error={errors.itemGtin?.[index] && <span>{requiredMessage}</span>}
              placeholder="eg: 123458791330"
            />
            <InputField
              label={"Item Sku: "}
              id={`itemSku[${index}]`}
              name={`itemSku[${index}]`}
              register={register({ required: true })}
              error={errors.itemSku?.[index] && <span>{requiredMessage}</span>}
              placeholder="eg: 12341234"
            />
            <InputField
              label={"Item Quantity: "}
              id={`itemQuantity[${index}]`}
              name={`itemQuantity[${index}]`}
              register={register({ required: true })}
              error={
                errors.itemQuantity?.[index] && <span>{requiredMessage}</span>
              }
              placeholder="eg: 1"
            />
            <PriceCurrencyInput
              label={"Item Price: "}
              valueType={"text"}
              valueName={`itemPriceValue[${index}]`}
              valueRegister={register({ required: true })}
              valueError={
                errors.itemPriceValue?.[index] && <span>{requiredMessage}</span>
              }
              currencyName={`itemPriceCurrency[${index}]`}
              currencyRegister={register({ required: true })}
              currencyError={
                errors.itemPriceCurrency?.[index] && (
                  <span>{requiredMessage}</span>
                )
              }
            />
          </div>
        ))}
        
        <Button
          classes="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right mt-8"
          type="button"
          clickEvent={() => setSize(size + 1)}
        >
          Add New Item
        </Button>
      </Fieldset>
      {/* Group 5: merchant */}
      <Fieldset ledgendText={"Merchant Information"}>
        <InputField
          label={"Merchant Redirect Confirm Url: "}
          id={"merchantRedirectConfirmUrl"}
          name={"merchantRedirectConfirmUrl"}
          register={register({ required: true })}
          error={
            errors.merchantRedirectConfirmUrl && <span>{requiredMessage}</span>
          }
          placeholder="eg: https://staging.portal.scalapay.com/success-url"
        />
        <InputField
          label={"Merchant Redirect Cancel Url: "}
          id={"merchantRedirectCancelUrl"}
          name={"merchantRedirectCancelUrl"}
          register={register({ required: true })}
          error={
            errors.merchantRedirectCancelUrl && <span>{requiredMessage}</span>
          }
          placeholder="eg: https://staging.portal.scalapay.com/failure-url"
        />
        <InputField
          label={"Merchant Reference: "}
          id={"merchantReference"}
          name={"merchantReference"}
          register={register({ required: true })}
          error={errors.merchantReference && <span>{requiredMessage}</span>}
          placeholder="eg: merchantOrder-1234"
        />
      </Fieldset>
      {/* Sunmit Form Button */}
      {/* @TODO: add logic to disable button when submitting status */}
      <input data-testid="order-submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right mb-8"
        type="submit" />
    </form>
  );
}
