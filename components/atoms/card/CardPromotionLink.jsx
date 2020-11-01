import React from 'react';

export default function CardPromotionLink({ promotionLink }) {
  return (
    <a 
      className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
      href={promotionLink}
      target="_blank"
    >
      Promotion &#8250; &#8250;
    </a>
  );
};
