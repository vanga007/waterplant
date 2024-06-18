// components/ProgressBar.js
import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ value, max, label }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-lg overflow-hidden my-2">
      <div
        className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg transition-all duration-300"
        style={{ width: `${percentage}%` }}
      >
        {label}: {value} L
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  label: PropTypes.string,
};

ProgressBar.defaultProps = {
  label: 'Water Level',
};

export default ProgressBar;
