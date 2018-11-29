import React, { Component } from "react";
import "./App.css";
import Room from "./Room";
import styled from "styled-components";

const Button = styled.button`
  background-color: grey;
  clear: both;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80px;
  height: 30px;
  color: white;
`;

const defaultRoom = {
  isDisabled: true,
  adults: 1,
  children: 0
};

class App extends Component {
  constructor(props) {
    super(props);
    const initialState = JSON.parse(window.localStorage.getItem("state"));

    this.state = initialState || {
      rooms: [
        { ...defaultRoom, isDisabled: false },
        defaultRoom,
        defaultRoom,
        defaultRoom
      ]
    };
    this.onToggle = this.onToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    window.localStorage.setItem("state", JSON.stringify(this.state));
    console.log("");
  }

  handleChange(value, age, roomNumber) {
    const rooms = this.state.rooms;
    rooms[roomNumber - 1][age.toLowerCase()] = parseInt(value);

    this.setState({ rooms });
  }

  onToggle(label, isToggledOn) {
    const { rooms } = this.state;
    const roomNumber = parseInt(label[label.length - 1]);
    const selectedIndex = roomNumber - 1;
    let newRooms;

    // If enabling, enable selected room and all the rooms before it
    // , and disable the rest
    if (isToggledOn) {
      const newIsDisabledValues = Array(selectedIndex + 1)
        .fill(false)
        .concat(Array(4 - selectedIndex - 1).fill(true));

      newRooms = rooms.map((room, i) => {
        return { ...room, isDisabled: newIsDisabledValues[i] };
      });
    }

    // If disabling, then reset the selected room to default
    // and all the rooms after it
    else {
      newRooms = rooms.map((room, i) => {
        if (selectedIndex <= i) {
          return defaultRoom;
        }
        return room;
      });
    }

    //the first room is always enabled
    newRooms[0].isDisabled = false;

    this.setState({ rooms: newRooms });
  }

  render() {
    const { rooms } = this.state;

    const roomElements = rooms.map((room, index) => (
      <Room
        roomNumber={index + 1}
        onToggle={this.onToggle}
        disabled={room.isDisabled}
        adults={room.adults}
        children={room.children}
        handleChange={this.handleChange}
        key={index}
      />
    ));
    return (
      <div className="App">
        {roomElements}
        <Button onClick={this.onSubmit}>Submit</Button>
      </div>
    );
  }
}

export default App;
