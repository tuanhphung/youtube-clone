import React from "react";

import xicon from "../../../assets/xicon.svg";

import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const handleClick = () => {
    props.toggleClick();
  };

  return (
    <div>
      {props.open ? (
        <div class='sidebar'>
          <img
            src={xicon}
            alt='close_icon'
            className='sidebar_close'
            onClick={() => handleClick()}
          />
          <ul className='sidebar_list'>
            <Link to='/favourites'>
              <SidebarItem>Favourites</SidebarItem>
            </Link>
            <Link to='/history'>
              <SidebarItem>History</SidebarItem>
            </Link>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
