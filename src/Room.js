import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Dropdown from './Dropdown'
import Checkbox from './Checkbox'

const Container = styled.div`
  height: 120px;
  width: 200px;
  margin: 30px;
  border-style: solid;
  border-color: grey;
  float: left;

  ${props => props.disabled
    && css`
      background-color: grey;
    `};
`


const Header = styled.div`
  background-color: grey;
`

const Main = styled.div`
  display: flex;
  justify-content: space-around;
`

class Room extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const {
      roomNumber,
      disabled,
      onToggle,
    } = this.props

    const header = `Room ${roomNumber}`

    return (
      <>
        <Container disabled={disabled}>
          <Header>
            {
          (roomNumber !== 1)
            ? <Checkbox label={header} handleCheckboxChange={onToggle} />
            : header
          }
          </Header>
          <Main>
            <Dropdown label="Adult" disabled={disabled} />
            <Dropdown label="Children" disabled={disabled} />
          </Main>
        </Container>
      </>
    )
  }
}

Room.propTypes = {
  dicePoolNumber: PropTypes.number.isRequired,
}

export default Room
