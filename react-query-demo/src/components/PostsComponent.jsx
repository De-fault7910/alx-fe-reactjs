import React from "react";
import { useQuery } from "@tanstack/react-query";

// fetch function for posts
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(
  ["posts"],        // query key
  fetchPosts,       // fetch function
  {
    staleTime: 10000,           // 10 seconds before data considered stale
    cacheTime: 300000,          // 5 minutes cache
    refetchOnWindowFocus: true, // refetch when tab/window is focused
    keepPreviousData: true      // keep previous data while fetching new
  }
);


  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: "15px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
