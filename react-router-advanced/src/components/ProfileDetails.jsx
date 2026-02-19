// src/components/ProfileDetails.jsx
import React from "react";

const ProfileDetails = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h3>Profile Details</h3>
      <p>This section contains your personal profile information.</p>
      <ul>
        <li>Name: John Doe</li>
        <li>Email: johndoe@example.com</li>
        <li>Username: johndoe123</li>
      </ul>
    </div>
  );
};

export default ProfileDetails;
