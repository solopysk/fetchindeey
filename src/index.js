import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  
  state = {
    beers: []
  }
  
  fetchBeers = (param) => {
    fetch(`https://api.punkapi.com/v2/beers?${param}`)
      .then(data => data.json())
      .then(beers => {
        this.setState({ beers });
      })
      .catch(error => {
        console.log(error);
    })
  }
  
  render(){
    let beers = this.state.beers.map(beer => <p style={styles}> {beer.name} </p>);
    return(
        <div>
          <button onClick={this.fetchBeers}> 
              All 
          </button>
          <button onClick={() => this.fetchBeers("food=taco") }> 
              Beers for taco!
          </button>
          
          <section>
            { beers }
          </section>
        </div>
    );
  }
}

const styles = {
  font: '100%/1.5 monospace',
  color: '#222',
  fontWeight: 'bold'
}


render(<App />, document.getElementById('root'));
