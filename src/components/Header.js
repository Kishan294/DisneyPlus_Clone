import React from 'react'
import styled from 'styled-components'
import  {signInWithPopup}  from 'firebase/auth'
import { auth, provider } from '../firebase.config'

// Assets Import
import logo from '../assets/images/logo.svg'
import HomeIcon from '../assets/images/home-icon.svg'
import SearchIcon from '../assets/images/search-icon.svg'
import WatchListIcon from '../assets/images/watchlist-icon.svg'
import OriginalsIcon from '../assets/images/original-icon.svg'
import MoviesIcon from '../assets/images/movie-icon.svg'
import SeriesIcon from '../assets/images/series-icon.svg'

const Header = () => {
  const handleAuth = async() =>{
    const response = await signInWithPopup(auth, provider);
    console.log(response);
  }
  return (
    <Nav>
      <Logo src={logo} />
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
      <Login onClick={handleAuth} >
        Login
      </Login>
      {/* <UserImage src= "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" /> */}

    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`

const Logo = styled.img`
  width: 80px;
  
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;
    a{
      display: flex;
      align-items: center;
      padding: 0 12px;
      cursor: pointer;
      img{
        width: 20px;
      }

      span{
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;
        
        &:after{
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
        &:hover{
          span:after{
            transform: scaleX(1);
            opacity: 1;
          }
      }
    }

      
`

// const UserImage = styled.img`
//   width: 48px;
//   height: 48px;
//   object-fit: contain;
//   border-radius: 50%;
//   cursor: pointer;

// `

const Login = styled.a`
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all .2s ease 0s;

  &:hover{
    background: #f9f9f9;
    color: #000000;
    border-color: transparent;
  }
`