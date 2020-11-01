import React from 'react';

export default function SkeletonBar({ classArray }) {
  return (
    <div className="flex mb-4">
      {
        classArray.map((classname, index) =>
          <div
            key={`${index}-${classname}`}
            className={classname}>
          </div>)
      }
    </div>
  );
};
