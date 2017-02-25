import React, { Component } from 'react';
import { render } from './benchmark';

class List extends Component {
  // This will be trigger on every toggle as we are not doing a shallow compare
  // Can be solved using React.PureComponent
  // All the children will also be called
  // Check ListExample2.js
  render() {
    console.log('--Rendering First List--');
    const name = 'First list';
    const listItems = render(ListItem, this.props.listClass, name);
    return (
      <div className="list">
        <h2>{name}</h2>
        { listItems }
      </div>
    );
  }
}

const ListItem = ({ listClass }) => {
  return (
    <div className={`list-item ${listClass}`}>
      <ListItemContent />
    </div>
  );
};

const ListItemContent = () => {
  return (
    <div>
      <ListItemHeader />
      <ListItemBody />
    </div>
  );
};

const ListItemHeader = () => (<p>Sport</p>);
const ListItemBody = () => (<img src="http://lorempixel.com/120/120/sports/"/>);

export default List;