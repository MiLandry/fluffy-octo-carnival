import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { isAdult } from './utils'

const Container = styled.div`
`

const LabelWrapper = styled.div`

`


class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    const selected = (isAdult(props.label)) ? 1 : 0
    this.state = {
      selected,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {

  }

  render() {
    const {
      label,
      disabled,
    } = this.props
    console.log('disabled', disabled)


    const labelInitialValueMapping = {
      Adult: 1,
      Children: 0,
    }

    const labelAgeRangeMapping = {
      Adult: '(18+)',
      Children: '(0-17)',
    }

    const adultOptions = [1, 2]
    const childrenOptions = [0, 1, 2]
    const options = (isAdult(label)) ? adultOptions : childrenOptions
    const ageRange = labelAgeRangeMapping[label]


    const optionElements = options.map((value) => {
      const attributes = { value }
      if (labelInitialValueMapping[label] === value) {
        attributes.selected = 'true' // add selected attribute
      }
      return (<option {...attributes}>{value}</option>)
    })

    return (
      <Container>
        <LabelWrapper>
          {label}
          <br />
          {ageRange}
        </LabelWrapper>
        <select
          disabled={disabled}
        >
          {optionElements}
        </select>
      </Container>
    )
  }
}

Dropdown.propTypes = {
  dicePoolNumber: PropTypes.number.isRequired,
}

export default Dropdown
