import React from 'react';

export const render = (Component, listClass, calledBy) => {
  const numberOfitems = 5500;
  let list = [];
  var t0 = performance.now();
  for (var i = 0; i < numberOfitems; i++) {
    list.push(<Component key={i} listClass={listClass} />);
  }
  var t1 = performance.now();
  console.log(`${calledBy} took ${t1 - t0} milliseconds.`);
  return list;
};