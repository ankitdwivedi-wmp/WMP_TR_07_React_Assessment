import React from 'react';

/**
 * StateDropdown Component
 * 
 * Dropdown menu to select a state from a list of states.
 * 
 * @param {Array} states - An array of state objects containing state information.
 * @param {string} selectedState - The currently selected state.
 * @param {Function} onStateChange - Callback function to handle state selection changes.
 */
const StateDropdown = ({ states, selectedState, onStateChange }) => {
  
  // Logs the current selected state for debugging purposes
  console.log('states from dropdown', selectedState);

  return (
    <div className="mb-4">
      {/* Label for the state dropdown */}
      <label htmlFor="state" className="block text-lg font-medium text-gray-700 mb-2">
        Select State:
      </label>
      
      {/* State dropdown menu */}
      <select
        id="state"
        value={selectedState} // Controlled component, value tied to selectedState
        onChange={(e) => onStateChange(e.target.value)} // Triggers callback on change
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
      >
        {/* Placeholder option prompting the user to select a state */}
        <option value="">--Select State--</option>
        
        {/* Mapping through states array to generate dropdown options */}
        {states.map((state, index) => (
          <option key={index} value={state.name}>
            {state.name} {/* Display the state name */}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StateDropdown;
