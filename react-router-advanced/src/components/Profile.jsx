// src/components/Profile.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

const Profile = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Profile</h2>

      {/* Navigation for nested routes */}
      <nav style={{ marginBottom: "15px" }}>
        <Link to="details" style={{ marginRight: "10px" }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        {/* Default content if no nested route is selected */}
        <Route path="*" element={<p>Please select a section above.</p>} />
      </Routes>
    </div>
  );
};

export default Profile;
