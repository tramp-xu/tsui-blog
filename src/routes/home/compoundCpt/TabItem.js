import React from 'react';

const TabItem = (props) => {
  const  {active, onClick} = props;
  const tabStyle = {
    maxWidth: '150px',
    color: active ? 'red' : 'green',
    border: active ? '1px solid red' : 'none'
  };
  return (
    <h1
      onClick={onClick}
      style={tabStyle}
    >
      {props.children}
    </h1>
  );
};

export default TabItem;