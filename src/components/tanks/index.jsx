import React, { useEffect, useState } from "react";
import PieChart from "../piechart";
import { formatDate } from "@/pages/utils/dateFormatter";
import ProgressBar from "../progressbar";

const Motors = () => {
  const [tanks, setTanks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://9i2im325lb.execute-api.us-east-1.amazonaws.com/waterplant");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTanks(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-gray-100 pb-10 pt-14 dark:bg-dark lg:pb-20 lg:pt-[60px] text-black">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Tanks
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark text-black sm:text-4xl md:text-[40px]">
                Tank Details
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Find the details of our water Tanks below.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center ">
          {tanks.map((tank) => (
            <TankCard
              key={tank.id}
              name={tank.name}
              currentLevel={tank.currentLevel}
              totalCapacity={tank.totalCapacity}
              location={tank.location}
              timestamp={tank.timestamp}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Motors;

const TankCard = ({
  name,
  currentLevel,
  totalCapacity,
  location,
  timestamp,
}) => {
  const [waterLevel, setWaterLevel] = useState(250000);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaterLevel(Math.floor(Math.random() * 500001));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-6 md:w-1/2 lg:w-1/4 border-2 rounded-2xl ml-2  shadow-md">
      <div className="mb-4 w-full  ">
        <div>
          <PieChart waterLevel={waterLevel} />
        </div>
        <ProgressBar value={waterLevel} max="500000" label="Water Level" />

        <div>
          <h1 className="inline-block text-xl font-semibold text-gray-600 text-dark  py-2 sm:text-2xl lg:text-xl xl:text-2xl">
            {name}
          </h1>
          <div className="flex py-1 ">
            <h1 className="text-black font-semibold">CurrentLevel : </h1>{" "}
            <p className=" text-gray-600 font-medium dark:text-dark-6 pl-2">
              {waterLevel}
            </p>
          </div>
          <div className="flex  py-1 ">
            <h1 className="text-black font-semibold">TotalCapacity : </h1>{" "}
            <p className=" text-gray-600 font-medium dark:text-dark-6 pl-2">
              {totalCapacity}
            </p>
          </div>
          <div className="flex  py-1 ">
            <h1 className="text-black font-semibold">Location : </h1>{" "}
            <p className=" text-gray-600 font-medium dark:text-dark-6 pl-2">
              {location}
            </p>
          </div>
          <div className="flex  py-1 ">
            <h1 className="text-black font-semibold">Timestamp : </h1>
            {/* <p className=" text-gray-600 font-medium dark:text-dark-6 pl-2">
              {formatDate(timestamp)}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
