import React from 'react';
import { ThemeConsumer } from './context';

const Paragraph = (props) => {
  return (
    <ThemeConsumer>
      {
        (theme) => (
          <p style={{color: theme.textColor}}>
            {props.children}
          </p>
        )
      }
    </ThemeConsumer>
  );
};

export default Paragraph;