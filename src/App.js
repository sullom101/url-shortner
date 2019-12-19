import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Bannar from './Components/Bannar/Index';
import Shorten from './Components/Shorten/Shorten';
import Services from './Components/Services/Index'
import Boost from './Components/Boost/Boost';
import Footer from './Components/Footer/Index';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = { 
      width: 0
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
        <Bannar width={this.state.width}/>

        <main style={{backgroundColor:'#f0f1f6', position:'relative', zIndex:0}}>
        <Shorten width={this.state.width}/>
        <Services width={this.state.width}/>
        <Boost />
        </main>
        <Footer width={this.state.width} />
      </div>
    );
  }
}

export default App;
