import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";

function Sidebar() {
  const recentItems = (topic) => {
    return (
      <div className="sidebar-recentItem">
        <span className="sidebar-hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://cdn.pixabay.com/photo/2016/04/18/16/22/watercolour-1336856_960_720.jpg"
          alt=""
        />
        <Avatar className="sidebar-avatar" />
        <h2>Pasindu Weeararthne</h2>
        <h4>pasi@g.com</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNo">230</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statNo">240</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItems("reactJs")}
        {recentItems("programming")}
        {recentItems("Angular")}
        {recentItems("softwareengineering")}
        {recentItems("design")}
      </div>
    </div>
  );
}

export default Sidebar;
