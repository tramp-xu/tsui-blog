import React from 'react';

const getUserId = () => true;

const withLogin = (Component) => {
  const NewCpt = (props) => {
    if (getUserId()) {
      return <Component {...props} />;
    } else {
      return null;
    }
  };

  NewCpt.displayName = `withLogin(${Component.displayName || Component.name || 'Component'})`;

  return NewCpt;
};

export default withLogin;