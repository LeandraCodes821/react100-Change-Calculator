import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: Number,
      amountReceived: Number,
      changeDue: Number
    };

    this.handleAmountDue = this.handleAmountDue.bind(this);
    this.handleAmountReceived = this.handleAmountReceived.bind(this);
    this.handleAllChange = this.handleAllChange.bind(this);
  }

  handleAmountDue(event) {
    this.setState({ amountDue: event.target.value });
  }

  handleAmountReceived(event) {
    this.setState({ amountReceived: event.target.value });
  }

  handleAllChange() {
    const calculateChange = (this.state.amountReceived - this.state.amountDue).toFixed(2);
    this.setState({
      changeDue: calculateChange,
      twenties: Number.parseFloat(Math.floor(calculateChange / 20).toFixed(2)),
      tens: Number.parseFloat(Math.floor((calculateChange / 10) % 2).toFixed(2)),
      fives: Number.parseFloat(Math.floor((calculateChange / 5) % 2).toFixed(2)),
      ones: Number.parseFloat(Math.floor(calculateChange % 5).toFixed(2)),
      quarters: Number.parseFloat(Math.floor(((calculateChange * 100) % 100) / 25).toFixed(2)),
      dimes: Number.parseFloat(Math.floor((((calculateChange * 100) % 100) % 25) / 10).toFixed(2)),
      nickels: Number.parseFloat(Math.floor(((((calculateChange * 100) % 100) % 25) % 10) / 5).toFixed(2)),
      pennies: Number.parseFloat(Math.floor((calculateChange * 100) % 5 + 0.01).toFixed(2))
    });
  }

  render() {
    return (
      
      <div className='container-fluid'>
        <h1 className='text-align:center'>Change Calculator</h1>

        <hr />
        {/* <div class="card" style="width: 18rem;">
  <div class="card-header">
    Featured
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div> */}
      

      
        <div className='row'>
          <div className='col-sm-4'>
            <div className='card'>
              <div className='card-header card-title'>Enter Information</div>
              
                <div className='panel-body'>
                  How much is due?
                  <input
                    name='amountDue'
                    className='form-control'
                    value={ this.state.amountDue }
                    onChange={ this.handleAmountDue }
                    placeholder='Enter amount due'
                    type='number'
                  />
                </div>
                <div className='panel-body'>
                  How much was received?
                  <input
                    name='amountReceived'
                    className='form-control'
                    value={ this.state.amountReceived }
                    onChange={ this.handleAmountReceived }
                    placeholder='Enter amount received'
                    type='number'
                  />
                </div>
              

              <div className='row'>
                <button className="btn btn-primary" type='button' onClick={ this.handleAllChange }>
                  Calculate
                </button>
                </div>
            </div>
          </div>
         

          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='card'>
                <div className='card-header card-title alert alert-success' role='alert'>
                  The total change due is ${this.state.changeDue}
                </div>
                <div className='row'>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center'>
                      <p className='lead change'>{this.state.twenties}</p> Twenties
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center'>
                      <p className='lead change'>{this.state.tens}</p> Tens
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center'>
                      <p className='lead change'>{this.state.fives}</p> Fives
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center'>
                      <p className='lead change'>{this.state.ones}</p> Ones
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center'>
                      <p className='lead change'>{this.state.quarters}</p> Quarters
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center'>
                      <p className='lead change'>{this.state.dimes}</p> Dimes
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center'>
                      <p className='lead change'>{this.state.nickels}</p> Nickles
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center'>
                      <p className='lead change'>{this.state.pennies}</p> Pennies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
    

        

export default App;
