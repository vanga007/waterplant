import React, { useEffect, useState } from "react";

const Motors = () => {
  const [motors, setMotors] = useState([]);

  useEffect(() => {
    fetch("/dummydata.json")
      .then((response) => response.json())
      .then((data) => setMotors(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className=" pb-10 pt-14 dark:bg-dark lg:pb-20 lg:pt-[60px] text-black">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Motors
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark text-black sm:text-4xl md:text-[40px]">
                Motor Details
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Find the details of our water motors below.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {motors.map((motor, index) => (
            <MotorCard
              key={index}
              name={motor.name}
              Power={motor.Power}
              Voltage={motor.Voltage}
              Phase={motor.Phase}
              capacity={motor.capacity}
              onOffState={motor.onOffState}
              hoursRun={motor.hoursRun}
              image={motor.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const MotorCard = ({
  name,
  Power,
  capacity,
  onOffState,
  hoursRun,
  Voltage,
  Phase,
  image,
}) => {
  const cardBackgroundColor =
    onOffState === "On" ? "bg-green-100" : "bg-red-100";

  return (
    <div
      className={`w-full px-6 md:w-1/2 lg:w-1/4 border-2 rounded-2xl ml-2 mt-2 ${cardBackgroundColor}`}
    >
      <div className="mb-10 w-full">
        <div className="mb-4 overflow-hidden rounded-2xl mt-4">
          <img src={image} alt={name} className="w-full" />
        </div>
        <div>
          <h3 className="mb-4 inline-block text-xl font-semibold text-dark text-gray-600 sm:text-2xl lg:text-xl xl:text-2xl">
            {name}
          </h3>
          <div className="flex">
            <h1 className="text-black font-semibold">Power:</h1>
            <p className="text-gray-600 font-medium dark:text-dark-6 pl-2">
              {Power}
            </p>
          </div>
          <div className="flex">
            <h1 className="text-black font-semibold">Voltage:</h1>
            <p className="text-gray-600 font-medium dark:text-dark-6 pl-2">
              {Voltage}
            </p>
          </div>
          <div className="flex">
            <h1 className="text-black font-semibold">Phase:</h1>
            <p className="text-gray-600 font-medium dark:text-dark-6 pl-2">
              {Phase}
            </p>
          </div>
          <div className="flex">
            <h1 className="text-black font-semibold">Capacity:</h1>
            <p className="text-gray-600 font-medium dark:text-dark-6 pl-2">
              {capacity}
            </p>
          </div>
          <div className="flex">
            <h1 className="text-black font-semibold">Status:</h1>
            <p className="text-gray-600 font-medium dark:text-dark-6 pl-2">
              {onOffState}
            </p>
          </div>
          <div className="flex">
            <h1 className="text-black font-semibold">Hours Run:</h1>
            <p className="text-gray-600 font-medium dark:text-dark-6 pl-2">
              {hoursRun}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motors;
