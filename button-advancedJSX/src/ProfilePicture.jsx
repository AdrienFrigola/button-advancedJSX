import React from 'react';

/**
 * Functional component for displaying a profile picture.
 */
function ProfilePicture() {
    // Define the image URL
    const imageUrl = './src/assets/profile.jpg';

    // Handle click event to hide the picture
    const handleClick = (e) => e.target.style.display = "none";

    // Return JSX for the profile picture component
    return (
        <img onClick={e => handleClick(e)} src={imageUrl} alt="Profile Picture" />
    );
}

// Export the ProfilePicture component as default
export default ProfilePicture;
