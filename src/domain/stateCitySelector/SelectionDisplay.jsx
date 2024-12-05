import React from 'react';

/**
 * SelectionDisplay Component
 * 
 * Displays the selected state and city or prompts the user to select them if not selected.
 * 
 * @param {string} selectedState - The currently selected state.
 * @param {string} selectedCity - The currently selected city.
 */
const SelectionDisplay = ({ selectedState, selectedCity }) => {
  return (
    <div>
      {/* Conditional rendering based on whether both state and city are selected */}
      {selectedState && selectedCity ? (
        <div>
          {/* Display the selected state */}
          <p className='text-xl pd-3 text-green-500'>
            Selected State: {selectedState}
          </p>
          {/* Display the selected city */}
          <p className='text-xl text-green-500'>
            Selected City: {selectedCity}
          </p>
        </div>
      ) : (
        // Message prompting the user to select a state and city if none are selected
        <p className='text-xl text-center'>Please select a state and a city</p>
      )}
    </div>
  );
};

export default SelectionDisplay;
