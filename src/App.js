import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Bannar from './Components/Bannar/Bannar';
import '@fortawesome/fontawesome-free/css/all.css';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = { 
      width: window.innerWidth
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
    console.log(this.state.width);
  }

  render() {
    return (
      <div className="App">
        <Header width={this.state.width} /> 
        <Bannar/>
      </div>
    );
  }
}

export default App;
