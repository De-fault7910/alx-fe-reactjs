// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Get dynamic parameter

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Blog Post #{id}</h2>
      <p>This is the content for blog post with ID: {id}</p>
    </div>
  );
};

export default BlogPost;
