import React from 'react';

/**
 * CommonButton component renders a customizable button.
 * It accepts multiple props to control the button's appearance and behavior.
 * 
 * @param {string} text - The text to display on the button.
 * @param {function} onClick - The callback function to handle button click events.
 * @param {string} bgColor - The background color of the button (e.g., 'bg-blue-500').
 * @param {string} hoverColor - The hover color effect (e.g., 'bg-blue-700').
 * @param {string} textColor - The text color of the button (e.g., 'text-white').
 * @param {boolean} isActive - Determines whether the button is active (applies border styling).
 * @param {string} height - The height of the button (defaults to 'h-10').
 * @param {string} width - The width of the button (defaults to 'min-w-[6vw]').
 * 
 * @returns {JSX.Element} A styled button element with the given props.
 */
const CommonButton = ({
  text, 
  onClick, 
  bgColor, 
  hoverColor, 
  textColor, 
  isActive,
  height = 'h-10',  // Default height set to 'h-10' if not provided
  width = 'min-w-[6vw]', // Default width set to 'min-w-[6vw]' if not provided
}) => {
  return (
    <button
      onClick={onClick}  // Calls the onClick handler passed via props when button is clicked
      className={`px-4 py-2 rounded-md transition duration-300 ${bgColor} ${textColor} hover:${hoverColor} ${height} ${width} ${isActive ? 'border-2 border-black' : 'border-2 border-white'}`}
      // Combines classes to style the button. Uses conditional classes for hover, border, and active states.
    >
      {text}
    </button>
  );
};

export default CommonButton;
