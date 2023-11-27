import { useEffect, useState } from "react";
import FeedHeader from "./FeedHeader";
import axios from "axios";
import Loader from "./Loader";

export default function Feed() {
  const [data, setData] = useState([]);

 
  useEffect(() => {
    async function api() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/posts?limit=10"
        );
        setData(response.data.posts);
        console.log(response.data.posts);
      } catch (error) {
        console.error(error);
      }
    }

    api()
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
              margin:"auto",
              marginTop:"-3rem"

            }}
          >
            <FeedHeader />
  
            {data.map((post) => (
              <div
                key={post.id}
                style={{
                  height: "11rem",
                  width: "36rem",
                  border: "1px solid grey",
                  borderRadius: "2rem",
                  padding: "1.5rem",
                  textAlign: "justify",
                }}
              >
                <h2>{post.title}</h2>
                <p>
                  {post.body.substring(0, 200)}.....<b><a href="/">Read More</a></b>
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                  }}
                >
                  <p style={{ marginTop: "0.6rem" }}>
                    <u>
                      <b>Tags </b>
                    </u>
                    :
                  </p>
  
                  {post.tags.map((tag) => (
                    <p
                      key={tag}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "green",
                        borderRadius: "1rem",
                        color: "white",
                        fontSize: "0.8rem",
                        padding: "0.2rem",
                        height: "1rem",
                        width: "4rem",
                      }}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
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
