import React from 'react';

/**
 * Card component is a reusable container that is being applied as container.
 * 
 * @param {React.ReactNode} children - The content or child components to be displayed inside the card.
 * 
 * @returns {JSX.Element} Card container that wraps the provided children.
 */
const Card = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-md">
      {/* The div acts as a card container with maximum width set to '3xl', auto horizontal margins, padding, white background, shadow, and rounded corners */}
      {children}  
    </div>
  );
};

export default Card;
