import React from "react";
import PieChart from "../piechart";

const TankCard = ({
  name,
  specifications,
  capacity,
  onOffState,
  hoursRun,
  waterLevels,
}) => {
  return (
    <div className="w-full px-6 md:w-1/2 lg:w-1/4 border-2 rounded-2xl ml-2 mt-2">
      <div className="mb-10 w-full ">
        <div className="mb-4 overflow-hidden rounded-2xl mt-4">
        <PieChart waterLevels={waterLevels} title={name} />
        </div>
        <div>
          <h3 className="mb-4 inline-block text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {name}
          </h3>
          <p className="text-base text-black dark:text-dark-6">
            <strong>Specifications:</strong> {specifications}
          </p>
          <p className="text-base text-black dark:text-dark-6">
            <strong>Capacity:</strong> {capacity} liters
          </p>
          <p className="text-base text-black dark:text-dark-6">
            <strong>State:</strong> {onOffState}
          </p>
          <p className="text-base text-black dark:text-dark-6">
            <strong>Hours Run:</strong> {hoursRun}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TankCard;
