import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const K8ListItem = ({ heading, data }) => {
  // group the images by subheading
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.subheading]) {
      acc[item.subheading] = [];
    }
    acc[item.subheading].push(item);
    return acc;
  }, {});

  // state for accordion expansion
  const [isExpanded, setIsExpanded] = useState(false);

  // toggle accordion expansion
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border border-gray-300 rounded-md p-4 mb-4 bg-gray-200">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleExpansion}
      >
        <h2 className="text-3xl font-medium mb-2">{heading}</h2>
        <div className="transform origin-center">
          <FiChevronDown
            size={24}
            className={`${
              isExpanded ? "rotate-180" : "rotate-0"
            }  transition-all duration-300`}
          />
        </div>
      </div>
      <hr className="border-gray-600 mb-4" />
      <div
        className={`overflow-hidden transition-max-height duration-200 ${
          !isExpanded ? "max-h-screen" : "max-h-0"
        }`}
      >
        {Object.entries(groupedData).map(([subheading, images]) => (
          <div key={subheading} className="mb-4">
            <h3 className="text-xl font-medium mb-4">{subheading}</h3>
            <div className="overflow-x-auto whitespace-nowrap">
              {images.map((image, index) => (
                <div key={index} className="inline-block mr-16 text-center">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-40 rounded-md h-40"
                  />
                  <p className="text-sm font-medium mt-2">{image.title}</p>
                </div>
              ))}
              <hr className="border-gray-400 mt-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default K8ListItem;
