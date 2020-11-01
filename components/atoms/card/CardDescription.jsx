import React from 'react';

export default function CardDescription({ description }) {
  return (
    <div className="pt-6">
      <strong>Description: </strong>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  );
};
