import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import axios from "axios";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsloaded] = useState(false);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:8080/project/posts")

      .then((result) => {
        setIsloaded(true);
        setPostList(result.data);
      })
      .catch((error) => {
        setIsloaded(true);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error !!!</div>;
  } else if (!isLoaded) {
    return <div>Loading ...</div>;
  } else {
    return (
      <div className="container">
        Home!!!
        {postList.map((post) => (
          <Post title={post.title} text={post.text}></Post>
        ))}
      </div>
    );
  }
}

export default Home;
