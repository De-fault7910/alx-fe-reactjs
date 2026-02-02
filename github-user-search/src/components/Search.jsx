// src/components/Search.jsx
import React, { useState } from "react";
import githubService from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUserData([]);

    try {
      const data = await githubService.advancedSearch({
        username,
        location,
        minRepos,
      });

      if (!data || data.length === 0) {
        setError("Looks like we can't find the user");
      } else {
        setUserData(data);
      }
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-2 mb-4"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="p-2 border rounded flex-1"
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="p-2 border rounded flex-1"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repos (optional)"
          className="p-2 border rounded flex-1"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Loading / Error */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Results */}
      {userData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userData.map((user) => (
            <div
              key={user.id}
              className="border p-4 rounded shadow flex flex-col items-center text-center"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full mb-2"
              />
              <h3 className="font-bold">{user.login}</h3>
              {user.location && <p>Location: {user.location}</p>}
              <p>Repos: {user.public_repos ?? "N/A"}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-1"
              >
                Visit Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
