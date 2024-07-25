import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CSurfer } from '../CSurfer/CSurfer';
import '../Header/Header.css'

export const Header = () => {

    const navigate = useNavigate();
    const passport = JSON.parse(localStorage.getItem("passport"));
    let token;
    if (passport) {
      token = passport.token;
    }
  
    return (
      <>
        <div className="flex justify-space-between">
          <CSurfer path="/" content="Home" />
          <CSurfer path="/books" content="Books" />
          {token ? (
            <>
              <div onClick={() => localStorage.removeItem("passport")}> LOGOUT </div>
              <CSurfer path="/profile" content="Profile" />
            </>
          ) : (
            <>
              <div onClick={() => navigate("/login")}> Login </div>
              <CSurfer path="/register" content="Register" />
            </>
          )}
        </div>
      </>
    );
  };


//   return (
//     <>
//     <div className="flex justify-space-betwwen">
//         <CSurfer path="/" content="Home"/>
//         <CSurfer path="/register" content="Register"/>
//         <CSurfer path="/login" content="Login"/>
//         <CSurfer path="/services" content="Services"/>
//         <CSurfer path="/profile" content="Profile"/>
//         <CSurfer path="/books" content="Books"/>
//     </div>
//     </>
//   )
// } 
