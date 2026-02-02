import React, { useState } from "react";
import githubService from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await githubService.fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem" }}>
          Search
        </button>
      </form>

      <div style={{ marginTop: "1rem" }}>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {userData && (
          <div>
            <img
              src={userData.avatar_url}
              alt={userData.login}
              width="100"
              style={{ borderRadius: "50%" }}
            />
            <h3>{userData.name || userData.login}</h3>
            <a href={userData.html_url} target="_blank">
              Visit GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
