import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ListExample1 from './ListExample1';
import ListExample2 from './ListExample2';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstClass: 'full',
      secondClass: 'full'
    };
  }

  toggleFirst = () => {
    const firstClass = this.state.firstClass === 'full' ? 'half' : 'full';
    this.setState({ firstClass });
  };

  toggleSecond = () => {
    const secondClass = this.state.secondClass === 'full' ? 'half' : 'full';
    this.setState({ secondClass });
  };

  render() {
    const { firstClass, secondClass } = this.state;
    return (
      <div className="app">
        <ListExample1 listClass={ firstClass } />
        <ListExample2 listClass={ secondClass } />
        <div>
          <button onClick={this.toggleFirst}>Toggle First List</button>
          <button onClick={this.toggleSecond}>Toggle second list</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));