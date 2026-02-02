// src/services/githubService.js
import axios from "axios";

const githubService = {
  // Single user fetch (optional)
  fetchUserData: async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  },

  // Advanced search for multiple users
  advancedSearch: async ({ username, location, minRepos }) => {
    let query = username || "";

    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const url = `https://api.github.com/search/users?q=${query}`;
    const response = await axios.get(url);

    // API returns an object { total_count, items }, we need items array
    return response.data.items;
  },
};

export default githubService;
