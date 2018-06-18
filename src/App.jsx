import React, {Component} from 'react';
import NavBar from './navbar.jsx';
import BeachCard from './beachcard.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    }
    this.caller()
  }

  caller = async () => {
    let response = await fetch('/beach')
    response = await response.text()
    let beachData = JSON.parse(response)
    this.setState({beach: beachData})
    this.setState({isLoaded: true})
  }

  render() {
    if(this.state.isLoaded === false){
       return (<div> Loading </div>)
     } else{

    return (<div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <BeachCard beachData={this.state.beach}/>

    </div>);
  }
  }
}

export default App;
