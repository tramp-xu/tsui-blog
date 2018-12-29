import React from 'react';
import ms2Time from './utils';

const MajorClock = ({milliseconds=0}) => {
  return (
    <React.Fragment>
      <style jsx>
        {`
          h1 {
            font-family: monospace
          }
        `}
      </style>
      <h1>{ms2Time(milliseconds)}</h1>
    </React.Fragment>
  );
};
export default MajorClock;