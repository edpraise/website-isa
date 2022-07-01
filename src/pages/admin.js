import React, { useEffect } from "react";
import { auth, db } from "../firebase";
import toast from "react-hot-toast";
import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Head from "next/head";

function admin() {
  const [title, setTitle] = React.useState("");
  const [imgUrl, setImgUrl] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [tags, setTags] = React.useState("");
  const [userData, setUserData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(title, imgUrl, description, tags);
    const newPost = {
      title,
      imgUrl,
      description,
      tags,
    };

    if (title === "" || imgUrl === "" || description === "" || tags === "") {
      toast.error("Please fill all the fields");
    }

    try {
      const posts = await addDoc(collection(db, "posts"), newPost);
      // get all posts
      //   const posts = await getDocs(db, "posts");
      console.log(posts);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };
  return (
    <div className="container">
      <Head>
        <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/animate/animate.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/css-hamburgers/hamburgers.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/select2/select2.min.css"
        />
        <link rel="stylesheet" type="text/css" href="css/util.css" />
        <link rel="stylesheet" type="text/css" href="css/main.css" />
      </Head>
      <h1>Admin</h1>
      <form>
        <label>Post Title:</label> <br />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
        />{" "}
        <br />
        <label>Image Url:</label> <br />
        <input
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          type="text"
          name="imgUrl"
        />{" "}
        <br />
        <label>Description:</label> <br />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
        />{" "}
        <br />
        <label>Tags:</label> <br />
        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          type="text"
          name="tags"
        />{" "}
        <br />
        <button onClick={handleSubmit}>
          {loading ? "Loading" : "Submit"}{" "}
        </button>
      </form>
    </div>
  );
}

export default admin;
