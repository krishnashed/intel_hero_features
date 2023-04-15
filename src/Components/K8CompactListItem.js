import React from "react";

const K8CompactListItem = ({ heading, data }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 mb-4 bg-gray-200">
      <h2 className="text-3xl font-medium mb-2">{heading}</h2>
      <hr className="border-gray-600 mb-4" />
      <div className="overflow-x-auto whitespace-nowrap flex">
        {data.map(({ src, title }, i) => (
          <img
            src={src}
            alt={title}
            className="w-24 rounded-md h-24 mr-6"
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default K8CompactListItem;
