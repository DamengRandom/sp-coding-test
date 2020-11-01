import React from 'react';
// components
import CardTitle from '../atoms/card/CardTitle';
import CardDescription from '../atoms/card/CardDescription';
import RangeSlider from '../atoms/card/RangeSlider';
import CardPaymentTimes from '../atoms/card/CardPaymentTimes';
import CardFooter from '../molecules/card/CardFooter';

export default function ConfigurationCard({
  title,
  description,
  numberOfPayments,
  promotionLink,
  languages,
  minAmount,
  maxAmount
}) {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg p-6 border-t-8">
      {title && <CardTitle title={title} />}
      {description && <CardDescription description={description}/>}
      {minAmount && maxAmount && <RangeSlider
        minAmount={minAmount}
        maxAmount={maxAmount}
      />}
      {numberOfPayments && <CardPaymentTimes numberOfPayments={numberOfPayments}/>}
      {promotionLink && languages && <CardFooter
        promotionLink={promotionLink}
        languages={languages}
      />}
    </div>
  );
};
