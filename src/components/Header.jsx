import React from "react";
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  Search,
  SupervisorAccount,
} from "@material-ui/icons";
import HeaderOption from "./HeaderOption";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src="images/linkedin-logo.png" alt="" />

        <div className="header-search">
          <Search />
          <input type="text" />
        </div>
      </div>

      <div className="header-right">
        <HeaderOption title="Home" Icon={Home} />
        <HeaderOption title="My Network" Icon={SupervisorAccount} />
        <HeaderOption title="Jobs" Icon={BusinessCenter} />
        <HeaderOption title="Messaging" Icon={Chat} />
        <HeaderOption title="Notification" Icon={Notifications} />
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/C4D03AQGth8XiEgxItw/profile-displayphoto-shrink_200_200/0/1650913298323?e=1659571200&v=beta&t=meINaTbF4C_5pnHkzPYY6YQAsUZQsTHVYGASZiQGIBg"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
