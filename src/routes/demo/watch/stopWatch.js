import React from 'react';
import MajorClock from './Majorclock';
import ControlButtons from './ControlButtons';
import SplitTimes from './SplitTimes';

class StopWatch extends React.Component {
  state = {
    isStarted: false,
    startTime: null,
    currentTime: null,
    splits: []
  }
  onSplit = () => {
    this.setState({
      splits: [...this.state.splits, this.state.currentTime - this.state.startTime]
    });
  }
  onStart = () => {
    this.setState({
      isStarted: true,
      startTime: new Date(),
      currentTime: new Date()
    });

    this.intervalHandle = setInterval(() => {
      this.setState({currentTime: new Date()});
    }, 1000 / 60);
  }

  onPause = () => {
    clearInterval(this.intervalHandle);
    this.setState({
      isStarted: false
    });
  }

  onReset = () => {
    this.setState({
      startTime: null,
      currentTime: null,
      splits: []
    });
  }
  render () {
    return (
      <div>
        <MajorClock milliseconds={this.state.currentTime - this.state.startTime} />
        <ControlButtons
          activated={this.state.isStarted}
          onPause={this.onPause}
          onReset={this.onReset}
          onSplit={this.onSplit}
          onStart={this.onStart}
        />
        <SplitTimes value={this.state.splits} />
      </div>
    );
  }
}

export default StopWatch;