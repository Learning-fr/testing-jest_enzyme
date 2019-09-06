import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


/**
 * Factory function to create shallow wrapper for te App component
 * @param {object} props - App props specific for this setup
 * @param {object} state - Initial state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) {
    wrapper.setState(state)
  }
  return wrapper
}

/**
 * Returns ShallowWrapper containing node(s) with data-test attribute
 * @param {ShallowWrapper} wrapper - Shallow wrapper given by setup
 * @param {string} dataName  - Data test name attribute
 * @returns {ShallowWrapper}
 */
const findByDataAttr = (wrapper, dataName) => {
  return wrapper.find(`[data-test="${dataName}"]`)
}

test('renders without errors', () => {
  const wrapper = setup()
  const appComponent = findByDataAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const incrementButton = findByDataAttr(wrapper, 'increment-button')
  expect(incrementButton.length).toBe(1);
})

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByDataAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1);
})

test('counters start at 0', () => {
  const wrapper = setup()
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0)
})

test('clicking button increment counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  //Simulate button click
  const button = findByDataAttr(wrapper, 'increment-button');
  button.simulate('click');
  wrapper.update();
  //Test if counterdisplay contains counter + 1
  const counterDisplay = findByDataAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
})