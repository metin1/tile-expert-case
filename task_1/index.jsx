import React, { Component } from 'react';

// functional component
const areEqual = (nextProps, previousProps) => {
  return nextProps.name === previousProps.name;
};

const FirstComponent = React.memo(
  ({ name }) => <div>my name is {name}</div>,
  areEqual
);

// class component
class SecondComponent extends React.PureComponent {
  render() {
    return <div>my name is {this.props.name}</div>;
  }
}
