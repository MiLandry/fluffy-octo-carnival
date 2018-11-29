import React from "react";
import styled from "styled-components";
import { isAdult } from "./utils";

const Container = styled.div``;

const LabelWrapper = styled.div``;

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {}

  render() {
    const { label, disabled, value, handleChange } = this.props;

    const labelAgeRangeMapping = {
      Adults: "(18+)",
      Children: "(0-17)"
    };
    const adultOptions = [1, 2];
    const childrenOptions = [0, 1, 2];
    const options = isAdult(label) ? adultOptions : childrenOptions;
    const ageRange = labelAgeRangeMapping[label];

    const optionElements = options.map(option => {
      return (
        <option key={option} value={option}>
          {option}
        </option>
      );
    });

    return (
      <Container>
        <LabelWrapper>
          {label}
          <br />
          {ageRange}
        </LabelWrapper>
        <select
          disabled={disabled}
          value={value}
          onChange={handleChange}
          label={label}
        >
          {optionElements}
        </select>
      </Container>
    );
  }
}

Dropdown.propTypes = {
};

export default Dropdown;
