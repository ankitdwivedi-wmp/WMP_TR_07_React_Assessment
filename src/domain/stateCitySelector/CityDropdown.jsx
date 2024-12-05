import React from 'react';

/**
 * CityDropdown component renders a dropdown list of cities for selection.
 * Allows users to select a city and triggers a callback when the city changes.
 * 
 * @param {Array} cities - List of cities to display in the dropdown.
 * @param {string} selectedCity - The currently selected city.
 * @param {Function} onCityChange - Callback function triggered when the selected city changes.
 * 
 * @returns {JSX.Element} A dropdown menu for selecting cities.
 */
const CityDropdown = ({ cities, selectedCity, onCityChange }) => {
  return (
    <div className="mb-4">
      {/* Label for the dropdown to enhance accessibility */}
      <label htmlFor="city" className="block text-lg font-medium text-gray-700 mb-2">
        Select City:
      </label>

      {/* Dropdown for city selection */}
      <select
        id="city"
        value={selectedCity} // Bind the current city value
        onChange={(e) => onCityChange(e.target.value)} // Trigger callback on city change
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
      >
        {/* Default option prompting users to select a city */}
        <option value="">--Select City--</option>

        {/* Map through the list of cities and render each as an option */}
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityDropdown;
