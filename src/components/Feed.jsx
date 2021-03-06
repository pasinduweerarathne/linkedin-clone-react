import {
  CalendarViewDay,
  Create,
  EventNote,
  Photo,
  Subscriptions,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./Feed.css";
import firebase from "firebase/compat/app";

import InputOption from "./InputOption";
import Post from "./Post";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/userSlice";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const user = useSelector(selectUser);

  // getting data from database when the page is loading for the first time
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      {/* share post */}
      <div className="feed-inpurtContainer">
        <div className="feed-input">
          <form onSubmit={sendPost}>
            <input
              value={input}
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>

        <div className="feed-inputOptions">
          <InputOption Icon={Photo} color="#378fe9" title="Photo" />
          <InputOption Icon={Subscriptions} color="#5f9b41" title="Photo" />
          <InputOption Icon={EventNote} color="#dbb071" title="Event" />
          <InputOption
            Icon={CalendarViewDay}
            color="#e16745"
            title="Write article"
          />
        </div>
      </div>

      {/* posts */}
      {posts.map(({ id, data: { name, description, message, photoURL } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoURL}
        />
      ))}
    </div>
  );
}

export default Feed;
