import React, { useEffect, useState } from "react";
import PieChart from "../piechart";
import ProgressBar from "../progressbar";
import { useRouter } from "next/router";

const Motors = () => {
  const router = useRouter();
  const { pathname } = router;
  const [tanks, setTanks] = useState([]);
  const [storedData, setStoredData] = useState();

  // Fetch activeCredential from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const activeCredential = localStorage.getItem("activeCredential");
      setStoredData(activeCredential);
    }
  }, []);

  // Shrashine and Military API endpoints
  const Militaryendpoint = "https://7vut6337yf.execute-api.us-east-1.amazonaws.com/militaryHsptl";
  const ShrashineEndpoint = "https://9i2im325lb.execute-api.us-east-1.amazonaws.com/waterplant";

  // Fetch data based on the current URL
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Log pathname to debug
        console.log("Current Path:", pathname);

        // Set endpoint dynamically based on pathname
        const endpoint = pathname.includes("dashboard") ? ShrashineEndpoint : Militaryendpoint;

        console.log("Fetching from endpoint:", endpoint);

        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("API Response Data:", data);

        const filteredTanks = data.filter((tank) => {
          if (storedData === "KVT") {
            return tank.name === " KVT ";
          } else if (storedData === "Military") {
            return tank.name === " MH TANK ";
          } else if (storedData === "bmh") {
            return tank.name === " BMH TANK ";
          } else if (storedData === "JCOMAPLINE") {
            return tank.name === " JCO MAP LINE ";
          } else if (storedData === "GUNROCKTANK2") {
            return tank.name === " GUN ROCK TANK 2 ";
          } else if (storedData === "GOUGHLINETANK") {
            return tank.name === " GOUGH LINE TANK ";
          } else if (storedData === "GUNROCKTANK1") {
            return tank.name === " GUN ROCK TANK 1 ";
          }

          return true;
        });

        // Sort tanks by name
        const sortedData = filteredTanks.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        });

        setTanks(sortedData);
        console.log("Sorted Tanks:", sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pathname, storedData]); // Re-run when pathname or activeCredential changes

  return (
    <section className="bg-gray-100 pb-10 pt-14 dark:bg-dark lg:pb-20 lg:pt-[60px] text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full text-center mb-[60px] lg:mb-20">
            <h2 className="mb-4 text-3xl font-bold text-dark text-black sm:text-4xl md:text-[40px]">
              Live Tank Details
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          {tanks.length > 0 ? (
            tanks.map((tank) => (
              <TankCard
                key={tank.id}
                name={tank.name}
                currentLevel={tank.currentLevel}
                totalCapacity={tank.totalCapacity}
                location={tank.location}
                timestamp={tank.timestamp}
              />
            ))
          ) : (
            <div>No tanks available for the selected credential.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Motors;

const TankCard = ({ name, currentLevel, totalCapacity, location, timestamp }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="border-2 rounded-2xl shadow-md p-6">
        <div className="mb-4 w-full">
          <PieChart waterLevel={currentLevel} totalCapacity={totalCapacity} />
        </div>
        <ProgressBar value={currentLevel} max={totalCapacity} />
        <div>
          <h1 className="inline-block text-xl font-semibold text-gray-600 text-dark py-2 sm:text-2xl lg:text-xl xl:text-2xl">
            {name}
          </h1>
          <div className="flex py-1">
            <h1 className="text-black font-semibold text-xl whitespace-nowrap">
              Current Level:
            </h1>
            <p className="text-gray-600 font-medium text-xl dark:text-dark-6 pl-2">
              {currentLevel} G
            </p>
          </div>
          <div className="flex py-1">
            <h1 className="text-black font-semibold text-xl whitespace-nowrap">
              Total Capacity:
            </h1>
            <p className="text-gray-600 font-medium text-xl dark:text-dark-6 pl-2">
              {totalCapacity} G
            </p>
          </div>
          <div className="flex py-1">
            <h1 className="text-black text-xl font-semibold whitespace-nowrap">
              Location:
            </h1>
            <p className="text-gray-600 text-xl font-medium dark:text-dark-6 pl-2">
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
