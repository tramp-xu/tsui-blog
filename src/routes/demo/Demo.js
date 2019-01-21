import React from 'react';
import './Demo.css';
import Login from './renderProps/login';
import Auth from './renderProps/Auth';
import Page from './providerPatttern/page';
import {ThemeProvider} from './providerPatttern/context';
import TabDemo from './compoundCpt/TabDemo';
// import Counter from './redux/Counter';
import CounterDemo from './redux/Demo';
// import style from './watch/watch.css';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <TabDemo></TabDemo>
        <Login>
          {({userName}) => <h1>Hello {userName}</h1>}
        </Login>
        <Auth
          login={({userName}) => <h1>Hello {userName}</h1>}
          nologin={() => <h1>Please login</h1>}
        ></Auth>
        <ThemeProvider value={{mainColor: 'green', textColor: 'red'}} >
          <Page />
        </ThemeProvider>
        <div className="title">fgasgsdg</div>
        <CounterDemo></CounterDemo>
        {/* <Counter></Counter> */}
      </div>
    );
  }
}

export default Demo;