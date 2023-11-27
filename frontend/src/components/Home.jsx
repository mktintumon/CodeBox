import React from "react";
import Profile from "./Profile";
import Notification from "./Notification";
import Post from "./Feed";
import Loader from "./Loader";

function Home() {
  return (
    <>
    {/* <Loader/> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin:"2rem",
          marginTop:"6rem"
        }}
      >
        <Profile/>
        <Post/>
        <Notification />
      </div>
    </>
  );
}

export default Home;
