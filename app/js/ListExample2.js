import React, { PureComponent } from 'react';
import { render } from './benchmark';

class List extends PureComponent {
  // This will only trigger if this.props.listClass changed
  render() {
    console.log('--Rendering Second List--');
    const name = 'Second list';
    const listItems = render(ListItem, this.props.listClass, name);
    return (
      <div className={`list`}>
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

class ListItemContent extends PureComponent {
  // This will NOT be trigger on every toggle even if this.props.listClass for ListItem changed
  render() {
    return (
      <div>
        <ListItemHeader />
        <ListItemBody />
      </div>
    )
  };
}

const ListItemHeader = () => (<p>Cats</p>);
const ListItemBody = () => (<img src="http://lorempixel.com/120/120/cats/"/>);

export default List;