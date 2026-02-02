import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <h1>GitHub User Search</h1>
      <p>Search for GitHub users using the GitHub API.</p>

      {/* Tailwind test */}
      <div className="p-4 bg-blue-200 text-center mt-4">
        Tailwind is working!
      </div>

      {/* Optional: Add Search component */}
      <Search />
    </div>
  );
}

export default App;
