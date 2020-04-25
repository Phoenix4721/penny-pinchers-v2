import Cookies from 'js-cookie'

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      Cookies.remove('userId', { path: '' })
      Cookies.remove('userUn', { path: '' })
      Cookies.remove('userPw', { path: '' })
      setTimeout(cb, 100);
    }
  };

export default fakeAuth;