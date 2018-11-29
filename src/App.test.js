import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Room from './Room'
import Dropdown from './Dropdown'

it('renders without crashing', () => {
  shallow(<App />);
});

it('dropdown fields for Adult and children are disabled for room 2, 3, 4', () => {
  const testRoom = (wrapper, number) => {
    const room = wrapper.find('Room').at(1)
    const dropdown = room.find('Dropdown').at(0)
    const select = dropdown.find('select')
    expect(select.prop('disabled')).toBe(true)
  }

  const wrapper = mount(<App />);
  expect(wrapper.find('Room')).toHaveLength(4);
  testRoom(wrapper, 2)
  testRoom(wrapper, 3)
  testRoom(wrapper, 4)
});

it('default values are correct', () => {
  const wrapper = mount(<App />);
  const room = wrapper.find('Room').at(0)
  const dropdown = room.find('Dropdown').at(0)
  const select = dropdown.find('select')
  expect(select.prop('value')).toBe(1)

  const children = room.find('Dropdown').at(1)
  const select2 = children.find('select')
  expect(select2.prop('value')).toBe(0)


});

