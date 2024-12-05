/**
 * fetchStatesForIndia fetches the list of states in India.
 * It sends a POST request to the API to get the list of states, processes the response,
 * and returns the list of states with their names and codes.
 * 
 * @returns {Array} An array of state objects, each containing the name and code of the state.
 * 
 * @throws {Error} Throws an error if the API request fails.
 */
export const fetchStatesForIndia = async () => {
  try {
    // Sending POST request to fetch states for India
    const response = await axiosInstance.post(`${BASE_URLS.countries}${API_ROUTES.states}`, {
      country: 'India'
    });

    // Log the states data for debugging
    console.log('States in India:', response.data.data.states);

    // Extract states from the response and map it to just the names and codes for dropdown
    const states = response.data.data.states.map(state => ({
      name: state.name,
      code: state.state_code
    }));

    // Return the states data
    return states;
  } catch (error) {
    console.error('Error fetching states:', error);
    throw error; // Throw error for further handling
  }
};

/**
 * fetchCitiesForState fetches the list of cities for a specific state in a given country.
 * It sends a POST request to the API to get the list of cities based on the provided country and state.
 * 
 * @param {string} country - The name of the country.
 * @param {string} state - The name of the state.
 * 
 * @returns {Array} An array of city objects for the specified state.
 * 
 * @throws {Error} Throws an error if the API request fails.
 */
export const fetchCitiesForState = async (country, state) => {
  try {
    // Sending POST request to fetch cities for a given state and country
    const response = await axiosInstance.post(`${BASE_URLS.countries}${API_ROUTES.cities}`, {
      country,
      state
    });

    // Log the cities data for debugging
    console.log(`Cities in ${state}, ${country}:`, response.data.data);

    // Return the cities data
    return response.data.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error; // Throw error for further handling
  }
};

/**
 * fetchPostsFromAPI fetches the posts from the API.
 * It sends a GET request to fetch posts and returns the response.
 * 
 * @returns {Object} The response object containing posts data.
 * 
 * @throws {Error} Throws an error if the API request fails.
 */
export const fetchPostsFromAPI = async () => {
  try {
    const response = await axiosInstance.get(`${API_ROUTES.posts}`);
    return response; // Return the response containing posts data
  } catch (error) {
    throw error; // Throw error for further handling
  }
};
