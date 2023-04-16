import React from "react";

const K8CompactListItem = ({ heading, data }) => {
  return (
    <>
    <div className="border border-gray-300 rounded-md my-4 mx-2  bg-gray-200">
      <h2 className="text-xl  bg-white font-medium px-4 ">{heading}</h2>
      {/* <hr className="border-gray-600 mb-4" /> */}
      <div className="overflow-x-auto my-2 whitespace-nowrap flex justify-evenly">
        {data.map(({ src, title }, i) => (
          <img
            src={src}
            alt={title}
            className="w-16 rounded-md h-16 m-2 opacity-25 hover:w-18 hover:h-18 hover:opacity-100 hover:outline hover:outline-2 backdrop-blur-xl hover:outline-offset-5 hover:outline-blue-950 hover:shadow-2xl hover:shadow-blue-950"
            key={i}
          />
        ))}
      </div>
    </div>

    </>
  );
};

export default K8CompactListItem;
