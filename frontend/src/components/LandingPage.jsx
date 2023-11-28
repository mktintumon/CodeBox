import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        <h1 style={{ color: "whitesmoke", marginBottom: "3rem" }}>
          {" "}
          &lt;&nbsp;Unlock the World of Code /&gt;
        </h1>
        <h2
          style={{ color: "#39c65c", marginBottom: "5rem", lineHeight: "2rem" }}
        >
          Your Ultimate Hub for Learning, Collaborating, and Mastering <br />
          CODING Skills at CodeBOX🎁
        </h2>
        <img
          src="/codebox_home_logo.png"
          alt="logo"
          style={{ height: "5rem", borderRadius: "4rem", marginBottom: "2rem" }}
        />
        {localStorage.getItem("userId") != null ? (
          <Link to="/home" style={{ textDecoration: "none" }}>
            <h3 style={{ color: "whitesmoke" }}>
              <u>Click Here to Explore the Feed Section</u>
            </h3>
          </Link>
        ) : (
          <h3 style={{ color: "whitesmoke" }}>
            Please Login / Register to Explore...
          </h3>
        )}
      </div>
    </>
  );
}

export default LandingPage;
