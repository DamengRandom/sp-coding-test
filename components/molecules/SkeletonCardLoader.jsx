import React from "react";
import SkeletonBar from '../atoms/SkeletonBar';

export default function SkeletonCardLoader() {
  return (
    <div className="card-skeleton-loader rounded overflow-hidden shadow-lg p-6 border-t-8">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <SkeletonBar classArray={[
            "w-1/4 rounded bg-white h-8",
            "w-3/4 rounded bg-gray-400 h-8"
          ]} />
          <SkeletonBar classArray={[
            "w-full rounded bg-gray-400 h-24"
          ]} />
          <SkeletonBar classArray={[
            "w-full rounded bg-gray-400 h-16"
          ]} />
          <SkeletonBar classArray={[
            "w-6/12 rounded bg-gray-400 h-8",
            "w-4/12 rounded bg-white h-8",
            "w-2/12 rounded bg-gray-400 h-8"
          ]} />
          <SkeletonBar classArray={[
            "w-5/12 rounded bg-gray-400 h-8",
            "w-2/12 rounded bg-white h-8",
            "w-5/12 rounded bg-gray-400 h-8"
          ]} />
        </div>
      </div>
    </div>
  );
}
