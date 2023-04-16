import React from "react";
import { Link } from "react-router-dom";

const K8CompactListItem = ({ heading, data, showTitle }) => {
  return (
    <>
      <div className="border border-gray-300 rounded-md my-2 mx-2  bg-gray-200">
        {showTitle ? (
          <h2 className="text-xl  bg-white font-medium px-4 ">{heading}</h2>
        ) : (
          <></>
        )}
        <div className="overflow-x-auto my-1 whitespace-nowrap flex justify-evenly">
          {data.map(({ src, title, link }, i) =>
            link ? (
              <Link to={link}>
                <img
                  src={src}
                  alt={title}
                  title={title}
                  className={`rounded-md my-1 mx-2 ${
                    !showTitle
                      ? "h-16"
                      : "w-16 h-16 hover:w-18 hover:h-18 hover:opacity-100 hover:outline hover:outline-2 backdrop-blur-xl hover:outline-offset-5 hover:outline-blue-950 hover:shadow-2xl hover:shadow-blue-950 opacity-25 "
                  }`}
                  key={i}
                />
              </Link>
            ) : (
              <img
                src={src}
                alt={title}
                title={title}
                className={`rounded-md my-1 mx-2 ${
                  !showTitle
                    ? "h-16"
                    : "w-16 h-16 hover:w-18 hover:h-18 hover:opacity-100 hover:outline hover:outline-2 backdrop-blur-xl hover:outline-offset-5 hover:outline-blue-950 hover:shadow-2xl hover:shadow-blue-950 opacity-25 "
                }`}
                key={i}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default K8CompactListItem;
