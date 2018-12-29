import React from 'react';
import { ThemeConsumer } from './context';

class Subject extends React.Component {
  render () {
    return (
      <ThemeConsumer>
        {
          (theme) => (
            <h1
              className="title"
              style={{color: theme.mainColor}}
            >
              {this.props.children}
            </h1>
          )
        }
      </ThemeConsumer>
    );
  }
}

export default Subject;