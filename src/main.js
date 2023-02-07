import { useState } from "react";
import "./App.css";
import locations from './data/locations.json'

function Main() {
    const [route, setRoute] = useState({destination: "", starting_point: ""});
    const [error, setError] = useState("");
    const [result, setResult] = useState([]);

    const handleChange = (e) => {
        setRoute({ ...route, [e.target.name]: e.target.value });
      };
    // const [rideServices, setRideServices] = useState([]);
    // const [rides, setRides] = useState([]);
    // const [locations, setLocations] = useState([]);

    const getRoute =() => {
        console.log(`${route.destination} to ${route.starting_point}`)
        // locations.map((item, id) => console.log(item.location_description))
        locations.filter((item, id) => 
            (item.location_description.includes(route.destination) && item.location_description.includes(route.starting_point)) ? setResult([...result, item.location_description]) : setError("No route found")
            )
        locations.filter((item, id) => 
            (item.location_description.includes(route.destination) && item.location_description.includes(route.starting_point)) ? console.log(item.location_description) : null
            )
            console.log(result)
    }

  return (
    <div className="py-3 mx-auto">
      <h1 class="mb-4 text-4xl font-extrabold leading-none md:text-5xl lg:text-6xl">
        Contoso Cheap Cab Finder
      </h1>
      <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        We're here to help you find your next cheap cab ride.
      </p>
        <form class="px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="Starting point"
            >Starting Point</label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="starting_point"
              type="text"
              placeholder="starting point"
              onChange={(e) => handleChange(e)}
                name="starting_point"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="destination"
            >
              Destination
            </label>
            <input
              class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="destination"
              type="text"
              placeholder="destination"
              onChange={(e) => handleChange(e)}
              name="destination"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={getRoute}
            >
              Check Routes
            </button>
          </div>
        </form>
        {/* <div style={{ marginTop: "3rem" }}>
                {error ? error : data.map((col,
                  idx) => <div key={idx}>{col}</div>)}
            </div> */}
        <p class="text-center text-gray-500 text-xs">
          &copy;2023 Contoso Corp. All rights reserved.
        </p>
      </div>
  );
}

export default Main;
