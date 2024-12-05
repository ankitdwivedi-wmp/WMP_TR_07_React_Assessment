import React from 'react';

/**
 * Main page of application that displays 
 * It displays a welcome message and a brief description of the app.
 * 
 * @returns {JSX.Element} A centered welcome message with a description.
 */
function Home() {
  return (
    <div className="h-[91vh] flex flex-col items-center justify-center">
      {/* Container div that takes 91% of the viewport height, and uses flexbox to center content vertically and horizontally */}
      
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-3xl">
        {/* Card-like container with centered text, padding, white background, rounded corners, shadow, and maximum width */}
        
        <h1 className="text-4xl font-bold text-green-500 mb-4">
          {/* Heading with large font size, bold text, green color, and margin-bottom */}
          Welcome to My App
        </h1>
        
        <p className="text-lg text-gray-700 mb-6">
          {/* Paragraph with larger font size, gray color, and margin-bottom */}
          One-stop platform for managing tasks, exploring posts, and navigating through states and cities.
        </p>
      </div>
    </div>
  );
}

export default Home;
