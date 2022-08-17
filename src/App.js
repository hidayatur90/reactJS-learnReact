import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Timer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      seconds : props.second,
      minutes : props.minute,
      hours : props.hour,
    }
  }

  // Lifecycle
  componentDidMount(){
    this.addInterval = setInterval( () => this.increase(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.addInterval)
  }

  increase(){

    if (this.state.seconds === 59) {
      this.setState((state, props) => ({
        seconds: parseInt(state.seconds) - 59,
        minutes: parseInt(state.minutes) + 1
      }))
    } else if (this.state.minutes === 59){
      this.setState((state, props) => ({
        minutes: parseInt(state.minutes) - 59,
        hours: parseInt(state.hours) + 1
      }))
    } else {
      this.setState((state, props) => ({
        seconds: parseInt(state.seconds) + 1
      }))
    }
  }

  render() {
    return <h1>{this.state.hours} : {this.state.minutes} : {this.state.seconds}</h1>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timer second="0" minute="0" hour="0" />
        </header>
      </div>
    );
  }
}

export default App;
