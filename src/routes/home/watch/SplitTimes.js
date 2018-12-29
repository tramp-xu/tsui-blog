import React from 'react';
import MajorClock from './Majorclock';

const SplitTimes = ({value=[]}) => {
  return value.map((v, k) => (
    <MajorClock
      key={k}
      milliseconds={v}
    />
  ));
};
export default SplitTimes;