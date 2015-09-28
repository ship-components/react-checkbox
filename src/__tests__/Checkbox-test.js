jest.dontMock('../Checkbox');

import React from 'react/addons';
const Checkbox = require('../Checkbox');
const TestUtils = React.addons.TestUtils;

describe('Checkbox', function() {
  it('should assign a custom css class', function() {

    let cssClass = 'testClass';

    // Render a checkbox with label in the document
    let reactTree = TestUtils.renderIntoDocument(
      <Checkbox
        className={cssClass}
      />
    );

    let el = TestUtils.findRenderedDOMComponentWithClass(reactTree, cssClass);
    expect(React.findDOMNode(el).className.indexOf(cssClass)).toBeGreaterThan(-1);
  });
});
