jest.dontMock('../Checkbox');
jest.mock('../check-box.css');

jest.setMock('ship-components-highlight-click', 'div');
jest.setMock('react-addons-css-transition-group', 'div');


import React from 'react';
// import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Checkbox', function() {
  let Checkbox;

  beforeEach(() => {
    Checkbox = require('../Checkbox').default;
  });
  it('should assign a custom css class', function() {

    let className = 'testClass';
    let reactTree = TestUtils.renderIntoDocument(
      <Checkbox
        className={className}
      />
    );

    let comp = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);
    expect(comp).toBeDefined();
  });

  it('should toggle its state when clicked', function(){
    let className = 'testClass';
    let reactTree = TestUtils.renderIntoDocument(
      <Checkbox
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
      <Checkbox
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
