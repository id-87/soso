import React, { useState } from "react";
import axios from "axios";

const url = import.meta.env.VITE_baseurl + "/posts/create";

const Feed = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const token = localStorage.getItem("token"); // 👈 get token

  async function createPost(e) {
    e.preventDefault();

    try {
      const resp=await axios.post(
        url,
        { title, body },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(resp)
      alert("Post created successfully")

      // setTitle("");
      // setBody("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <p>Feed of soso</p>

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
      </form>
    </div>
  );
};

export default Feed;
