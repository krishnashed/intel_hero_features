import React from "react";

const DocLink = ({ link, text }) => {
  return (
    <a className="text-blue-500 hover:underline" href={link} target="_blank">
      {text || link}
    </a>
  );
};

export default DocLink;
