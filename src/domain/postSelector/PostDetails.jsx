import React from 'react';

/**
 * PostDetails component displays the details of a selected post.
 * It shows the post's title and body in a card.
 * 
 * @param {object} post - The post object containing the title and body.
 * 
 * @returns {JSX.Element|null} A styled card displaying the post details or null if no post is provided.
 */
const PostDetails = ({ post }) => {
  // If no post is selected, do not render anything
  if (!post) return null;

  return (
    <div className="post-card">
      {/* Displays the post title with a specific font size, color, and weight */}
      <h2 className='text-2xl text-green-500 font-medium'>
        Title: {post.title}
      </h2>

      {/* Displays the post body with a different font size and color */}
      <p className='text-xl text-yellow-500'>
        Post: {post.body}
      </p>
    </div>
  );
};

export default PostDetails;
