// import React from 'react';
import Counter from './Counter';
import {increment} from '@/redux/action/counter';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return  {
    increment: increment
  };
};

const mapDispatchToProps = dispath => {
  return {
    onIncrement: () => {
      dispath(increment());
    }
  };
};

const CounterDemo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterDemo;
