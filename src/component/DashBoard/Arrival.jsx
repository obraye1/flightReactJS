import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const DataTable = () => {
  const [airData, setAirData] = useState([]);
  const [airportCode, setAirportCode] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://opensky-network.org/api/flights/arrival?airport=${airportCode}&begin=1517227200&end=1517230000`;
        const response = await fetch(url);
        const data = await response.json();
        
        const flights = data.map((flight) => {
          const { icao24, callsign, firstSeen, lastSeen, estArrivalAirport } = flight;
          const time = new Date(firstSeen * 1000).toLocaleString();
          const arriving = new Date(lastSeen * 1000).toLocaleString();
          return {
            icao24,
            callsign,
            time,
            arriving,
            airport: estArrivalAirport,
          };
        });

        setAirData(flights);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [airportCode]);

  const handleInputChange = (event) => {
    setAirportCode(event.target.value);
  };

  return (
    <div className="p-5 h-full overflow-scroll bg-gray-100 ">
      <label htmlFor="airport-code " className="px-4 font-semibold">Enter Valid Airport Code:</label>
      <input
      className="w-[50%] outline-none px-3 py-2"
        id="airport-code"
        type="text"
        value={airportCode}
        onChange={handleInputChange}
      />

<div className="flex justify-between items-center mx-auto w-[1240px]">
        <h1 className="text-4xl p-4 font-bold">Flight Details</h1>
        <ul className="flex gap-2 items-center justify-center font-bold">
          <li className="border px-3 py-2 bg-transparent cursor-pointer"><Link to='/'> Home </Link> </li>
          <li className="border px-3 py-2 bg-transparent cursor-pointer"><Link to='depart'>Departure</Link> </li>
        </ul>
      </div>

      <table className="table-auto w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
              ICAO24
            </th>
            <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
              Callsign
            </th>
            <th className="w-40 p-3 text-sm font-semibold tracking-wide text-left">
              Time
            </th>
            <th className="w-40 p-3 text-sm font-semibold tracking-wide text-left">
              Arriving
            </th>
            <th className="w-40 p-3 text-sm font-semibold tracking-wide text-left">
              Airport
            </th>
          </tr>
        </thead>
        <tbody>
          {airData.map((flight, index) => (
            <tr key={index}>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {flight.icao24}
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {flight.callsign}
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {flight.time}
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {flight.arriving}
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {flight.airport}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
