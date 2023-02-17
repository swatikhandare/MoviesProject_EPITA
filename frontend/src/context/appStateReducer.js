const AppStateReducer = (state, action) => {
  switch (action.type) {
    case 'Login': {
      // Add the user 
      localStorage.setItem(
        'NetflixCloneProfile',
        JSON.stringify({ ...action.payload, isAuthenticated: true })
      );

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    }

    case 'Register': {
      // Add the user 
      localStorage.setItem(
        'NetflixCloneProfile',
        JSON.stringify({ ...action.payload, isAuthenticated: true })
      );

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    }

    case 'Logout': {
      window.localStorage.removeItem('NetflixCloneProfile');
      return {
        isAuthenticated: false,
        user: null,
      };
    }

    default:
      return state;
  }
};

export default AppStateReducer;
