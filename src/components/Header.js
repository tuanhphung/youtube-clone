import React, { useState } from "react";

import logo from "../assets/YouTube_Logo.svg";
import camera_icon from "../assets/camera_icon.svg";
import menu_icon from "../assets/menu_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import search_icon from "../assets/search_icon.svg";
import app_icon from "../assets/app_icon.svg";
import avatar from "../assets/user.svg";

import Sidebar from "./HomePage/Sidebar/Sidebar";

import { connect } from "react-redux";
import { fetchVideos } from "../actions";
import { Link, useHistory } from "react-router-dom";

const Header = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  const [open, setOpen] = useState(false);

  //call api for the search term
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.fetchVideos(searchTerm);
    history.push("/");
  };

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <nav className='header-container'>
      <div className='header-container__logo-container'>
        <ul>
          <img
            src={menu_icon}
            alt='menu_icon'
            className='header-container__icon'
            onClick={() => toggleSidebar()}
          />
          {open ? <Sidebar open={open} toggleClick={() => toggleSidebar()} /> : null}
        </ul>

        <Link to='/'>
          <img src={logo} alt='logo' className='header-container__logo' />
        </Link>
      </div>
      <div className='header-container__searchbar'>
        <form onSubmit={onFormSubmit}>
          <input
            type='text'
            className='search-bar'
            placeholder='Search'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </form>
        <img
          src={search_icon}
          alt='search_icon'
          className='header-container__icon'
          onClick={onFormSubmit}
        />
      </div>
      <ul className='header-container__icon-list'>
        <img src={camera_icon} alt='camera_icon' className='header-container__icon' />
        <img src={app_icon} alt='app_icon' className='header-container__icon' />
        <img src={bell_icon} alt='bell_icon' className='header-container__icon' />
        <img src={avatar} alt='avatar_icon' className='header-container__icon' />
      </ul>
    </nav>
  );
};

export default connect(null, { fetchVideos })(Header);
