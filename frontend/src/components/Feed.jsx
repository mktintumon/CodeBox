import { useEffect, useState } from "react";
import FeedHeader from "./FeedHeader";
import axios from "axios";
import Loader from "./Loader";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Feed() {
  const [data, setData] = useState([]);

  const codeStyle = {
    fontSize: "14px",
    color: "black",
    lineHeight: "1.5",
    backgroundColor: "#F8F7F0",
    padding: "10px",
    overflow: "auto",
    height: "80%",
    width: "100%",
    borderRadius: "0.5rem",
    paddingRight: "initial"
  };

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/posts`);
        const todosData = response.data;
        setData(todosData.reverse());
        console.log(todosData);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    getAllPosts();
  }, []);

  return (
    <>
      {data ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "2rem",
              gap: "2rem",
              margin: "auto",
              marginTop: "-3rem",
            }}
          >
            <FeedHeader />

            {data.map((post) => (
              <div
                key={post.postId}
                style={{
                  height: "20rem",
                  width: "36rem",
                  border: "1px solid grey",
                  borderRadius: "0.5rem",
                  padding: "1.5rem",
                  textAlign: "justify",
                }}
              >
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "-0.6rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  {post.title}
                </h3>

                <SyntaxHighlighter style={vs2015} customStyle={codeStyle}>
                  {post.content}
                </SyntaxHighlighter>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </>
  );
}
