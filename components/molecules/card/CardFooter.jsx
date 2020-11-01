import React from 'react';
import CardPromotionLink from '../../atoms/card/CardPromotionLink';
import CardLanguageList from './CardLanguageList';

export default function CardFooter({ promotionLink, languages }) {
  return (
    <div className="flex justify-between items-center pt-10">
      <CardLanguageList languages={languages} />
      <CardPromotionLink promotionLink={promotionLink} />
    </div>
  );
};
