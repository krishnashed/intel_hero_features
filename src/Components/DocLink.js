import React from "react";

const DocLink = ({ link, text }) => {
  return (
    <a className="text-blue-500 hover:underline" href={link}>
      {text || link}
    </a>
  );
};

export default DocLink;
