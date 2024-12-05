import React, { useEffect, useState } from 'react';
import StateDropdown from './StateDropdown'; // Dropdown for state selection
import CityDropdown from './CityDropdown'; // Dropdown for city selection
import SelectionDisplay from './SelectionDisplay'; // Component to display selected state and city
import { fetchCitiesForState, fetchStatesForIndia } from '../../services/api-service'; // API service functions
import Card from '../../components/card'; // Reusable Card component for UI layout

/**
 * StateCitySelector component provides functionality to select a state and corresponding city.
 * Fetches data dynamically from an API and updates the dropdowns.
 */
const StateCitySelector = () => {
  // State management for the list of states, cities, and user selections
  const [states, setStates] = useState([]); // List of available states
  const [cities, setCities] = useState([]); // List of cities based on the selected state
  const [selectedState, setSelectedState] = useState(''); // Currently selected state
  const [selectedCity, setSelectedCity] = useState(''); // Currently selected city

  // Effect to fetch states from the API when the component is mounted
  useEffect(() => {
    const getStates = async () => {
      try {
        const statesData = await fetchStatesForIndia(); // Fetch states list from the API
        setStates(statesData); // Update the state list
      } catch (error) {
        console.error('Failed to fetch states', error); // Log errors if API fails
      }
    };

    getStates(); // Trigger API call
  }, []); // Empty dependency ensures it runs only once when mounted

  // Effect to fetch cities whenever the selected state changes
  useEffect(() => {
    console.log(selectedState); // Debug: Log the selected state
    if (selectedState) {
      const getCities = async () => {
        try {
          const citiesData = await fetchCitiesForState('India', selectedState); // Fetch cities for the selected state
          setCities(citiesData); // Update cities list
        } catch (error) {
          console.error('Failed to fetch cities', error); // Log errors if API fails
        }
      };

      getCities(); // Trigger API call
    } else {
      setCities([]); // Reset cities if no state is selected
    }
  }, [selectedState]); // Run whenever `selectedState` changes

  // Handle state selection and reset city when state changes
  const handleStateChange = (stateName) => {
    setSelectedState(stateName); // Set the selected state
    setSelectedCity(''); // Reset the city selection
  };

  // Handle city selection
  const handleCityChange = (city) => {
    setSelectedCity(city); // Set the selected city
    console.log('Selected City:', city); // Debug: Log selected city
  };

  return (
    <Card>
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-6">State and City Selector</h2>
      <div className="mb-4">
        {/* StateDropdown component renders the list of states */}
        <StateDropdown
          states={states}
          selectedState={selectedState}
          onStateChange={handleStateChange}
        />
      </div>

      {/* Conditionally render CityDropdown if a state is selected */}
      {selectedState && (
        <div className="mb-4">
          <CityDropdown
            cities={cities}
            selectedCity={selectedCity}
            onCityChange={handleCityChange}
          />
        </div>
      )}

      {/* Display the selected state and city */}
      <SelectionDisplay selectedState={selectedState} selectedCity={selectedCity} />
    </Card>
  );
};

export default StateCitySelector;
