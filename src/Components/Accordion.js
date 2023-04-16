import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function Accordion({ heading, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 rounded-md p-2 mb-4 bg-gray-200">
      <div
        className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-medium">{heading}</h2>
        <FiChevronDown
          size={24}
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          }  transition-all duration-300`}
        />
      </div>
      <hr className="border-gray-600 mb-4" />
      <div
        className={`overflow-hidden transition-max-height duration-500 px-4 ${
          isOpen ? "max-h-fit" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
