/**
 * axiosInstance is a custom Axios instance configured with a base URL.
 * This instance is used to make HTTP requests for interacting with the posts API.
 * @returns {AxiosInstance} A configured Axios instance for making HTTP requests to the posts API.
 */
import axios from 'axios';
import { BASE_URLS } from '../utils/apiUrl';

// Create an Axios instance for different APIs
const axiosInstance = axios.create({
  baseURL: BASE_URLS.posts,  // Set the base URL for the posts API (you can switch to another URL for different services)
});

/**
 * Response Interceptor for handling API responses.
 * - The interceptor processes successful responses before returning them.
 * - If an error occurs during the request, the error is thrown for handling by the caller.
 * 
 * @param {object} response - The HTTP response object.
 * @param {object} error - The error object in case of failure.
 * 
 * @returns {object} The processed response.
 * @throws {object} The error object in case of a failed request.
 */
axiosInstance.interceptors.response.use(
  (response) => {
    return response; // Return the response if it is successful
  },
  (error) => {
    throw error; // Throw the error to be handled elsewhere
  }
);

export default axiosInstance;
