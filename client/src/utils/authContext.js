import React from "react";
import Cookies from 'js-cookie'

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      Cookies.set('userId', undefined)
      //localStorage.setItem('isAuthenticated', false)
      setTimeout(cb, 100);
    }
  };

export default fakeAuth;