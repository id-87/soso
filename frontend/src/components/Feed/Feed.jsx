import React, { useEffect, useState } from "react";
import axios from "axios";

const createUrl = import.meta.env.VITE_baseurl + "/posts/create";
const fetchUrl = import.meta.env.VITE_baseurl + "/posts/fetch";

const Feed = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [create, setCreate] = useState(false);
  const [posts, setPosts] = useState([]);

  const token = localStorage.getItem("token");

  // 🔹 Fetch feed posts
  useEffect(() => {
    async function fetchPosts() {
      try {
        const resp = await axios.get(fetchUrl);
        setPosts(resp.data.posts);
        console.log("Fetched posts:", resp.data);

      } catch (err) {
        console.log(err);
      }
    }

    fetchPosts();
  }, []);

  // 🔹 Create post
  async function createPost(e) {
    e.preventDefault();

    try {
      await axios.post(
        createUrl,
        { title, body },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Post created");

      setTitle("");
      setBody("");
      setCreate(false);

      // Refresh feed
      const resp = await axios.get(fetchUrl);
      console.log(resp)
      setPosts(resp.data.posts);
      
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {create ? (
        /* 🔹 CREATE POST VIEW */
        <div>
          <h1>Create Post</h1>

          <form onSubmit={createPost}>
            <label>
              Title
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>

            <label>
              Body
              <input
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </label>

            <button type="submit">Create Post</button>
            <button type="button" onClick={() => setCreate(false)}>
              Cancel
            </button>
          </form>
        </div>
      ) : (
        /* 🔹 FEED VIEW */
        <div>
          <h1>Feed of soso</h1>
          <button onClick={() => setCreate(true)}>Create Post</button>

          {posts.map((post, index) => (
            <div key={index}>
              <h3>{post.username}</h3>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Feed;
