import { Avatar } from "@material-ui/core";
import {
  CommentOutlined,
  Send,
  Share,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar src={photoUrl} />
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post-body">
        <p>{message}</p>
      </div>

      <div className="post-buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" />
        <InputOption Icon={CommentOutlined} title="Comment" />
        <InputOption Icon={Share} title="Share" />
        <InputOption Icon={Send} title="Send" />
      </div>
    </div>
  );
}

export default Post;
