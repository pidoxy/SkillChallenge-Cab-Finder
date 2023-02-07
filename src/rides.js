import "./App.css";

import Papa from "papaparse";
import { useState } from "react";

// Allowed extensions for input file
const allowedExtensions = ["csv"];

function Rides() {
  // This state will store the parsed data
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  // It state will contain the error when
  // correct file extension is not used
  const [error, setError] = useState("");

  // It will store the file uploaded by the user
  const [file, setFile] = useState("");

  // This function will be called when
  // the file input changes

  const handleFileChange = (e) => {
    setError("");

    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }

      // If input type is correct set the state
      setFile(inputFile);
    }
  };
  const handleParse = () => {
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      const columns = Object.keys(parsedData[0]);
      console.log(csv.data);
      setData(csv.data)
      setColumns(columns);
    };
    reader.readAsText(file);
  };

  return (
    <div className="container mx-auto text-center justify-center space-y-5">
      <h2> Read CSV File</h2>

      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        for="file_input"
      >
        Upload CSV file
      </label>
      <input
        onChange={handleFileChange}
        name="file"
        className="block w-1/3 mx-auto text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
      />

      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
          onClick={handleParse}
        >
          Parse
        </button>
      </div>
      <div style={{ marginTop: "3rem" }}>
        {error ? error : columns.map((col, idx) => <div key={idx}>{col}</div>)}
      </div>
    <h2> Rides Table</h2>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {error
                ? error
                : columns.map((col, idx) => (
                    <th key={idx} scope="col" class="px-6 py-3">
                      {col}
                    </th>
                  ))}
            </tr>
          </thead>
          <tbody>
          {error ? error : data.map((field, idx) =>
            <tr key={idx} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {field.ride_id}
              </th>
              <td class="px-6 py-4">{field.location_id}</td>
              <td class="px-6 py-4">{field.rideservice_id}</td>
              <td class="px-6 py-4">{field.estimated_arrival_time }</td>
            </tr>
)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Rides;
