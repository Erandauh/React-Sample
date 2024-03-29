import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar';
import Counters from './component/counters';
import NavBar2 from './component/navbar2';

class App extends Component {

    state = {
        counters:[
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
            {id:5, value:0},
        ]
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value++;
        this.setState({counters:counters});
    }

    handleReset = () => {
        const counters = this.state.counters.map(c=> {
            c.value = 0;
            return c;
        });
        this.setState({counters:counters});
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters:counters});
    };

  render() {
    return (
        <React.Fragment>
        <NavBar2 totalCounters={this.state.counters.filter(c => c.value>0).length}/>
        <main className="container">
          <Counters counters={this.state.counters}
                    onReset={this.handleReset}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
