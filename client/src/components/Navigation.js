import React from "react";
import Auth from "../utils/auth";

const logo = require("../../src/assets/logo.png");
const user = require("../assets/icons/navigation/profile.png");
const home = require("../assets/icons/navigation/home.png");
const about = require("../assets/icons/navigation/about.png");
const search = require("../assets/icons/navigation/search.png");

export default function Navigation() {
  return (
    <>
      <nav>
        <img id="logo" src={logo} />
        <h1>MATERIALS TRADER</h1>
        <h2>peer-to-peer recycling</h2>
        <div class="buttons">
          {/* ABOUT BUTTON */}
          <button id="aboutBtn">
            <a href="/about">
              <img id="about-icon" src={about} />
              <h3 id="about-text">ABOUT</h3>
            </a>
          </button>

          {/* HOME BUTTON */}
          <button id="homeBtn">
            <a href="/">
              <img id="home-icon" src={home} />
              <h3 id="home-text">HOME</h3>
            </a>
          </button>

          {/* LOGIN/SIGN-UP BUTTON */}

          <button id="loginOrProfileBtn">
            <img id="profile-icon" src={user} />

            {Auth.loggedIn() ? (
              <a href="/profile">
                <h3 id="profile-text">PROFILE</h3>
              </a>
            ) : (
              <a href="/login">
                <h3 id="profile-text">LOGIN</h3>
              </a>
            )}
          </button>

          {/* SEARCH BUTTON */}

          <button id="searchBtn">
            <a href="/search">
              <img id="search-icon" src={search} />
              <h3 id="search-text">SEARCH</h3>
            </a>
          </button>
        </div>
      </nav>
    </>
  );
}
