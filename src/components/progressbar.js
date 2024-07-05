// components/ProgressBar.js
import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ value, max, label }) => {
  const percentage = (value / max) * 100;

  return (
    <>
      <div className="w-full  bg-gray-200 rounded-lg overflow-hidden my-2">
        <div
          className="bg-blue-500 flex items-center h-8 text-[10px] py-2 font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg transition-all duration-300"
          style={{ width: `${percentage}%` }}
        >
          <span className=" uppercase  text-black text-xs whitespace-nowrap">
            {label} : {value} L
          </span>
        </div>
      </div>
    </>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  label: PropTypes.string,
};

ProgressBar.defaultProps = {
  label: "Water Level",
};

export default ProgressBar;
