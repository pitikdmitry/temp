import React from 'react';
import logo from './logo.svg';
import ImageComponent from './imageComponent';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0
    this.state = {
      counter: this.counter
    };
  }

  changeSlide = () => {
    this.counter += 1
    if (this.counter === 2) {
      this.counter = 0;
    }
    this.setState({
      counter: this.counter
    })
    console.log(this.counter)
  }

  render = () => {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
              <ImageComponent counter={this.counter}/>
            </div>

            <button onClick={this.changeSlide}>
              Activate Lasers
            </button>

            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }
}

export default App;
