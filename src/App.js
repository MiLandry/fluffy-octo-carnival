import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Room from "./Room";
import styled from "styled-components";

const Button = styled.button`
  background-color: grey;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
        { isDisabled: false },
        { isDisabled: true },
        { isDisabled: true },
        { isDisabled: true }
      ]
    };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(label, isToggledOn) {
    const roomNumber = parseInt(label[label.length - 1]);
    const index = roomNumber - 1;
    let newRooms;

    if (isToggledOn) {
      // enable on all the rooms before and including
      // the selected room, and disable the rest
      newRooms = Array(index + 1)
        .fill({ isDisabled: false })
        .concat(Array(4 - index - 1).fill({ isDisabled: true }));
    }
    // else {
    //   // otherwise disable
    //     newRooms = Array(index + 1)
    //       .fill({ isDisabled: false })
    //       .concat(Array(4 - index - 1).fill({ isDisabled: true }));
    //   }

    this.setState({ rooms: newRooms });
  }

  render() {
    const { rooms } = this.state;

    const roomElements = rooms.map((room, index) => (
      <Room
        roomNumber={index + 1}
        onToggle={this.onToggle}
        disabled={room.isDisabled}
      />
    ));
    return (
      <div className="App">
        {roomElements}
        <br />
        <Button>Submit</Button>
      </div>
    );
  }
}

export default App;
