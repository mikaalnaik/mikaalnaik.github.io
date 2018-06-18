import React, {Component} from 'react';

class NavBar extends Component {

  showSettings (event) {
  event.preventDefault();
}

  render() {
    return (
      <div className="navbar">

  <div className='navbar-brand'>  Toronto Beach Report </div>
  </div>
    );
  }
}

export default NavBar;
