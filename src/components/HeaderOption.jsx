import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar, title, Icon }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption-icon" />}
      {avatar && <Avatar className="headerOption-icon" src={avatar} />}
      <h3 className="headerOption-title">{title}</h3>
    </div>
  );
}

export default HeaderOption;