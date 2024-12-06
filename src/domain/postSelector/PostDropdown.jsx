import React, { useEffect, useState } from 'react';
import { fetchPostsFromAPI } from '../../services/api-service';

/**
 * PostDropdown component fetches posts from an API and renders them in a dropdown.
 * Allows users to select a post and triggers a callback with the selected post.
 * 
 * @param {Function} onPostSelect - Callback function to handle the selected post.
 * 
 * @returns {JSX.Element} A dropdown menu populated with post titles.
 */
const PostDropdown = ({ onPostSelect }) => {
  // State to store the list of posts fetched from the API
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch posts from the API service
        const response = await fetchPostsFromAPI();
        setPosts(response.data); // Update the posts state with the fetched data
      } catch (error) {
        console.error('Error fetching posts:', error); // Log errors to the console
      }
    };

    fetchPosts(); // Trigger the fetch operation
  }, []); // Empty dependency array ensures it runs only on mount

  return (
    <div className="mb-4">
      {/* Label for the dropdown for better accessibility */}
      <label htmlFor="post" className="block text-sm font-medium text-gray-700 mb-2">
        Select Post:
      </label>

      {/* Dropdown for selecting a post */}
      <select
        id="post"
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => {
          // Find the selected post based on its ID and trigger the callback
          const selectedPost = posts.find(post => post.id === Number(e.target.value));
          onPostSelect(selectedPost); // Pass the selected post to the parent component
        }}
      >
        {/* Default option prompting users to select a post */}
        <option value="">--Select Post--</option>

        {/* Map through posts and render each as an option */}
        {posts.map(post => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PostDropdown;
