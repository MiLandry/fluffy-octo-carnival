import React from "react";
import styled, { css } from "styled-components";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";

const Container = styled.div`
  height: 120px;
  width: 200px;
  margin: 30px;
  border-style: solid;
  border-color: grey;
  float: left;

  ${props =>
    props.disabled &&
    css`
      background-color: grey;
    `};
`;

const Header = styled.div`
  background-color: grey;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-around;
`;

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { handleChange, roomNumber } = this.props;
    const value = event.target.value;
    const age = event.target.attributes.label.value;

    handleChange(value, age, roomNumber);
  }

  render() {
    const { roomNumber, disabled, onToggle, adults, children } = this.props;

    const header = `Room ${roomNumber}`;

    return (
      <>
        <Container disabled={disabled}>
          <Header>
            {roomNumber !== 1 ? (
              <Checkbox
                isChecked={!disabled}
                label={header}
                handleCheckboxChange={onToggle}
              />
            ) : (
              header
            )}
          </Header>
          <Main>
            <Dropdown
              handleChange={this.handleChange}
              label="Adults"
              disabled={disabled}
              value={adults}
            />
            <Dropdown
              handleChange={this.handleChange}
              label="Children"
              disabled={disabled}
              value={children}
            />
          </Main>
        </Container>
      </>
    );
  }
}

Room.propTypes = {
};

export default Room;
