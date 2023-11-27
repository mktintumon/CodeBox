import React, { useState } from "react";
import "./createPost.css";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Notification from "./Notification";

const CreatePost = () => {
  const [code, setCode] = useState("");

  const navigateTo = useNavigate();

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "2rem",
        marginTop: "6rem",
      }}
    >
      <Profile />
      <div className="code-post-container">
        <h2>Post Your Code</h2>
        <textarea
          value={code}
          onChange={handleCodeChange}
          placeholder="Enter your code here..."
          className="code-input"
        ></textarea>
        <div className="button-container">
          <button className="cancel-button" onClick={() => navigateTo("/")}>
            Cancel
          </button>
          <button className="post-button">Post</button>
        </div>
      </div>
      <Notification />
    </div>
  );
};

export default CreatePost;
