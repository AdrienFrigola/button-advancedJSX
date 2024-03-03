import React from 'react';

/**
 * Functional component representing a button.
 * Changes the button text to "OUCH! 😫" when double-clicked.
 */
function Button() {

    // handleClick function to change the button text
    const handleClick = (e) => e.target.textContent = "OUCH! 😫";

    // Return a button element with onClick event handler
    return (
        <button onDoubleClick={(e) => handleClick(e)}>Click me 🙂</button>
    );
}

// Export the Button component as default
export default Button;
