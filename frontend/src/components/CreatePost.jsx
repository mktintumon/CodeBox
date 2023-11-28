import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Notification from "./Notification";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./createPost.css";

const CreatePost = () => {
  const userId = localStorage.getItem("userId");
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");

  const navigateTo = useNavigate();

  async function addPost() {
    const response = await axios.post(`http://localhost:8081/create-post/${userId}`, {
      title: title,
      content: code,
    });
    console.log(response.data);
    toast.success("Your code posted!!!",{autoClose: 2000});
    navigateTo("/home")
  }

  return (
    <>
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your Title here..."
          className="title-input"
        ></textarea>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your Code here..."
          className="code-input"
        ></textarea>

        <div className="button-container">
          <button className="cancel-button" onClick={() => navigateTo("/home")}>
            CANCEL
          </button>
          <button onClick={addPost} className="post-button">
            POST
          </button>
        </div>
      </div>
      <Notification />
    </div>
    <ToastContainer />
    </>
  );
};

export default CreatePost;
