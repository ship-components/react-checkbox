jest.dontMock('../Checkbox');
jest.setMock('ship-components-highlight-click', 'div');
jest.mock('../check-box.css');

import React from 'react';
// import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Checkbox from '../Checkbox';

describe('Checkbox', function() {
  it('should assign a custom css class', function() {

    let className = 'testClass';
    let reactTree = TestUtils.renderIntoDocument(
      <Checkbox.default
        className={className}
      />
    );

    let comp = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    expect(comp).toBeDefined();
  });

  it('should toggle its state when clicked', function(){
    let className = 'testClass';
    let reactTree = TestUtils.renderIntoDocument(
      <Checkbox.default
        className={className}
        defaultValue={false}
      />
    );

    let comp = TestUtils.findRenderedComponentWithType(reactTree, Checkbox);
    let el = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    expect(comp.state.selected).toBe(false);
    TestUtils.Simulate.click(el);
    expect(comp.state.selected).toBe(true);
  });

  it('should call onChange when clicked', function(){

    let fn = jest.genMockFunction();
    let className = 'testClass';
    let reactTree = TestUtils.renderIntoDocument(
      <Checkbox.default
        onChange={fn}
        className={className}
        defaultValue={false}
      />
    );

    // let comp = TestUtils.findRenderedComponentWithType(reactTree, Checkbox);
    let el = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    TestUtils.Simulate.click(el);
    expect(fn.mock.calls.length).toBe(1);
  });
});
