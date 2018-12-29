import React from 'react';

const getUserName = () => 'jjj';

const Login = (props) => {
  const userName = getUserName();

  if (userName) {
    const allProps = { userName, ...props };
    return (
      <React.Fragment>
        {props.children(allProps)}
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default Login;