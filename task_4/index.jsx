import React, { Component, createRef } from 'react';

class MainComponent extends Component {
  myRef = createRef(); // create simple ref

  toggleChildVisibility = () => this.myRef.current.toggleButton(); // method to hide or show child component

  render() {
    return (
      <>
        <button onClick={this.toggleChildVisibility}>
          toggle child component
        </button>
        <ChildComponent ref={this.myRef} />{' '}
        {/* set ref for controlling child component */}
      </>
    );
  }
}

const ChildComponent = React.forwardRef((props, ref) => {
  const [isActive, setIsActive] = React.useState(true);

  console.log(ref);

  React.useImperativeHandle(ref, () => ({
    toggleButton() {
      setIsActive(!isActive);
    },
  }));

  return isActive ? <div>child component</div> : null;
});
