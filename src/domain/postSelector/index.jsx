import React, { useState } from 'react';
import PostDropdown from './PostDropdown';
import PostDetails from './PostDetails';
import Card from '../../components/card';

/**
 * PostSelector component manages the selection and display of posts.
 * It integrates PostDropdown for selecting posts and PostDetails for displaying the selected post.
 * 
 * @returns {JSX.Element} A component that allows users to select and view posts.
 */
const PostSelector = () => {
  // State to keep track of the currently selected post
  const [selectedPost, setSelectedPost] = useState(null);

  /**
   * Handles the post selection from the PostDropdown.
   * @param {object} post - The selected post object containing its details.
   */
  const handlePostSelect = (post) => {
    setSelectedPost(post); // Update the state with the selected post
  };

  return (
    <Card>
      {/* Renders a heading for the Post Selector section */}
      <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
        Post Selector
      </h1>

      {/* Dropdown for selecting posts. Passes the setSelectedPost function as a prop */}
      <PostDropdown onPostSelect={setSelectedPost} />

      {/* Displays PostDetails only if a post is selected */}
      {selectedPost && <PostDetails post={selectedPost} />}
    </Card>
  );
};

export default PostSelector;
