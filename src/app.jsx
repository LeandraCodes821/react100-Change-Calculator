import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
  amtDue: "",
  amtReceived: "",
  changeOwed: 0,
  Twenties: 0, 
  Tens: 0,
  Fives: 0,
  Ones: 0,
  Quarters: 0, 
  Dimes: 0,
  Nickels: 0,
  Pennies: 0,
    }}

  render() {
    return(
      <div container>
        <h1>Change Calculator</h1>
      </div>
    )
    //const {changeOwed,Twenties, Tens, Fives, Ones, Quarters, Dimes, Nickels, Pennies} = this.state;
  }
}

export default App;
