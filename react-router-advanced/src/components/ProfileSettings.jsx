// src/components/ProfileSettings.jsx
import React from "react";

const ProfileSettings = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h3>Profile Settings</h3>
      <p>Manage your profile preferences and account settings here.</p>
      <ul>
        <li>Change Password</li>
        <li>Update Email</li>
        <li>Notification Preferences</li>
      </ul>
    </div>
  );
};

export default ProfileSettings;
