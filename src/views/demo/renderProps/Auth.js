import React from 'react';

const getUserName = () => '';
const Auth = (props) => {
  const userName = getUserName();

  if (userName) {
    const allProps = {userName, ...props};
    return (
      <React.Fragment>
        {props.login(allProps)}
      </React.Fragment>
    );
  } else {
    return  (
      <React.Fragment>
        {props.nologin(props)}
      </React.Fragment>
    );
  }
};

export default Auth;