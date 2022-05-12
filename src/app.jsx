import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
  amtDue: Number,
  amtReceived: Number,
  changeOwed: Number
  };

  this.handleAmtDue = this.handleAmtDue.bind(this);
  this.handleAmtRecieved = this.handleAmtRecieved.bind(this);
  this.handleChangeOwed = this.handleChangeOwed.bind(this);
}

handleAmtDue(event) {
  this.setState({ amtDue: event.target.value });
}

handleAmtRecieved(event) {
  this.setState({ amtReceived: event.target.value });
}

handleChangeOwed(event) {
  const calChange = (this.state.amtReceived - this.state.amtDue).toFixed(2);
  this.setstate({
    changeOwed: calChange,
    twenties: Number.parseFloat(Math.floor(calChange / 20).toFixed(2)),
    tens: Number.parseFloat((Math.floor(calChange / 10) % 2).toFixed(2)),
    fives: Number.parseFloat(Math.floor((calChange / 5) % 2).toFixed(2)),
    ones: Number.parseFloat(Math.floor(calChange % 5).toFixed(2)),
    quarters: Number.parseFloat(Math.floor(((calChange * 100) % 100) / 25).toFixed(2)),
    dimes: Number.parseFloat(Math.floor((((calChange * 100) % 100) % 25) / 10).toFixed(2)),
    nickels: Number.parseFloat(((((Math.floor(calChange * 100) % 100) % 25) % 10) / 5).toFixed(2)),
    pennies: Number.parseFloat((Math.floor(calChange * 100) % 5 + 0.01).toFixed(2)),
  });
}
  render() {
    return(
      <React.Fragment>
        <div class="container">
          <h1>Change Calculator</h1>
        <div class="row align-items-start">
          The total change due is
        </div>
        </div><div class="col">
          Twenties
        </div><div class="col">
          Tens
        </div><div class="col">
          Fives
        </div><div class="col">
          Ones
        </div>
      </React.Fragment>
    )
    //const {changeOwed,Twenties, Tens, Fives, Ones, Quarters, Dimes, Nickels, Pennies} = this.state;
  }
}

export default App;
