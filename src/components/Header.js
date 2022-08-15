import React, { useEffect } from "react";
import styled from "styled-components";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase.config";

// Assets Import
import logo from "../assets/images/logo.svg";
import HomeIcon from "../assets/images/home-icon.svg";
import SearchIcon from "../assets/images/search-icon.svg";
import WatchListIcon from "../assets/images/watchlist-icon.svg";
import OriginalsIcon from "../assets/images/original-icon.svg";
import MoviesIcon from "../assets/images/movie-icon.svg";
import SeriesIcon from "../assets/images/series-icon.svg";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/home");
      }
    });
  }, []);

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      navigate("/home");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      navigate("/");
    });
  };

  return (
    <Nav>
      <Logo src={logo} />
      {!userName ? (
        <Login onClick={signIn}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/">
              <img src={HomeIcon} alt="" />
              <span>HOME</span>
            </a>
            <a href="/">
              <img src={SearchIcon} alt="" />
              <span>SEARCH</span>
            </a>
            <a href="/">
              <img src={WatchListIcon} alt="" />
              <span>WATCHLIST</span>
            </a>
            <a href="/">
              <img src={OriginalsIcon} alt="" />
              <span>ORIGINALS</span>
            </a>
            <a href="/">
              <img src={MoviesIcon} alt="" />
              <span>MOVIES</span>
            </a>
            <a href="/">
              <img src={SeriesIcon} alt="" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImage onClick={signOut} src={userPhoto} />
        </>
      )}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      width: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: #ffffff;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -4px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.a`
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background: #f9f9f9;
    color: #000000;
    border-color: transparent;
  }
`;
