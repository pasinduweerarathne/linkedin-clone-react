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
import { logout, selectUser } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutApp = () => {
    // logout from front end
    dispatch(logout());
    // logout from firebase
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header-left">
        <img src="images/linkedin-logo.png" alt="" />

        <div className="header-search">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header-right">
        <HeaderOption title="Home" Icon={Home} />
        <HeaderOption title="My Network" Icon={SupervisorAccount} />
        <HeaderOption title="Jobs" Icon={BusinessCenter} />
        <HeaderOption title="Messaging" Icon={Chat} />
        <HeaderOption title="Notification" Icon={Notifications} />
        <HeaderOption
          title={user.displayName}
          avatar={true}
          onClick={logoutApp}
        />
      </div>
    </div>
  );
}

export default Header;
