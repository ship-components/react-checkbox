/*!
 *                               __                   .__    .__                        .__                   __   ___.                 
 * _______   ____ _____    _____/  |_            _____|  |__ |__|_____             ____ |  |__   ____   ____ |  | _\_ |__   _______  ___
 * \_  __ \_/ __ \\__  \ _/ ___\   __\  ______  /  ___/  |  \|  \____ \   ______ _/ ___\|  |  \_/ __ \_/ ___\|  |/ /| __ \ /  _ \  \/  /
 *  |  | \/\  ___/ / __ \\  \___|  |   /_____/  \___ \|   Y  \  |  |_> > /_____/ \  \___|   Y  \  ___/\  \___|    < | \_\ (  <_> >    < 
 *  |__|    \___  >____  /\___  >__|           /____  >___|  /__|   __/           \___  >___|  /\___  >\___  >__|_ \|___  /\____/__/\_ \
 *              \/     \/     \/                    \/     \/   |__|                  \/     \/     \/     \/     \/    \/            \/
 * react-ship-checkbox 0.1.0
 * Description: React checkbox component
 * Author: Isaac Suttell
 * Homepage: https://github.com/ship-components/react-ship-checkbox#readme
 * Bugs: https://github.com/ship-components/react-ship-checkbox/issues
 * License: MIT
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** ****************************************************************************
	 * CheckBox
	 *
	 * @author       Isaac Suttell <isaac@isaacsuttell.com>
	 * @file         Reusable checkbox component
	 ******************************************************************************/

	// Modules
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _reactAddons = __webpack_require__(2);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactHighlightClick = __webpack_require__(1);

	var _reactHighlightClick2 = _interopRequireDefault(_reactHighlightClick);

	// Lets animate it
	var ReactCSSTransitionGroup = _reactAddons2['default'].addons.CSSTransitionGroup;

	var CheckBox = (function (_React$Component) {
	  _inherits(CheckBox, _React$Component);

	  /**
	   * Material Design inspired Cseckbox Component. Can either be controlled or uncontrolled.
	   * @param  {Object} props
	   */

	  function CheckBox(props) {
	    _classCallCheck(this, CheckBox);

	    _get(Object.getPrototypeOf(CheckBox.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      selected: props.readOnly === true ? props.selected : props.defaultValue
	    };
	  }

	  /**
	   * Type Checks
	   * @type {Object}
	   * @static
	   */

	  /**
	   * If we're in readOnly mode then keep the state in sync with the props
	   * @param  {Object} nextProps
	   */

	  _createClass(CheckBox, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.readOnly === true && this.state.selected !== nextProps.selected) {
	        this.setState({
	          selected: nextProps.selected
	        });
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return this.props.selected !== nextProps.selected || this.state.selected !== nextState.selected;
	    }

	    /**
	     * Toggle it
	     */
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      var _this = this;

	      // Toggle
	      this.setState({
	        selected: !this.state.selected
	      }, function () {
	        // Ensure the state is update to date
	        _this.triggerChangeEvent();
	      });
	    }

	    /**
	     * Create and send a change event to the parent
	     */
	  }, {
	    key: 'triggerChangeEvent',
	    value: function triggerChangeEvent() {
	      // Generate a change event to let the parent know
	      var customEvent = new window.MouseEvent('change');

	      // Grab the dom element so the event.target is correct
	      var el = _reactAddons2['default'].findDOMNode(this.refs.input);

	      // Calls parent change function with the custom event and the right target
	      var handler = (function (ev) {
	        // Clean up
	        el.removeEventListener('change', handler);
	        if (typeof this.props.onChange === 'function') {
	          // Call
	          this.props.onChange.call(ev, ev);
	        }
	      }).bind(this);

	      // Attach
	      el.addEventListener('change', handler);

	      // Trigger
	      el.dispatchEvent(customEvent);
	    }

	    /**
	     * Render Method
	     * @return {React}
	     */
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = 'check-box';

	      var selected = this.props.readOnly === true ? this.props.selected : this.state.selected;

	      if (selected) {
	        classes += ' check-box--checked';
	      }

	      if (this.props.className) {
	        classes += ' ' + this.props.className;
	      }

	      return _reactAddons2['default'].createElement(
	        _reactHighlightClick2['default'],
	        {
	          className: classes,
	          onClick: this.handleClick.bind(this) },
	        _reactAddons2['default'].createElement(
	          'div',
	          {
	            className: 'check-box--input' },
	          this.props.outlineIcon,
	          _reactAddons2['default'].createElement(
	            ReactCSSTransitionGroup,
	            {
	              transitionName: 'check-box--icon' },
	            selected === true ? this.props.selectedIcon : null
	          )
	        ),
	        _reactAddons2['default'].createElement(
	          'label',
	          { className: 'check-box--label' },
	          this.props.label || this.props.children
	        ),
	        _reactAddons2['default'].createElement('input', {
	          className: 'check-box--controller',
	          readOnly: this.props.readOnly,
	          type: this.props.type,
	          checked: this.state.selected,
	          defaultValue: this.props.value,
	          value: this.props.value || this.state.selected,
	          ref: 'input'
	        })
	      );
	    }
	  }]);

	  return CheckBox;
	})(_reactAddons2['default'].Component);

	exports['default'] = CheckBox;
	CheckBox.propTypes = {
	  defaultValue: _reactAddons2['default'].PropTypes.string,
	  readOnly: _reactAddons2['default'].PropTypes.bool,
	  selected: _reactAddons2['default'].PropTypes.bool,
	  value: _reactAddons2['default'].PropTypes.string,
	  label: _reactAddons2['default'].PropTypes.string,
	  onChange: _reactAddons2['default'].PropTypes.func,
	  outlineIcon: _reactAddons2['default'].PropTypes.element.isRequired,
	  selectedIcon: _reactAddons2['default'].PropTypes.element.isRequired
	};

	/**
	 * Defaults
	 * @type {Object}
	 * @static
	 */
	CheckBox.defaultProps = {
	  type: 'checkbox',
	  defaultValue: '',
	  readOnly: false,
	  outlineIcon: _reactAddons2['default'].createElement('span', { className: 'check-box--icon-background icon-check_box_outline_blank' }),
	  selectedIcon: _reactAddons2['default'].createElement('span', { className: 'check-box--icon icon-check_box' })
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-highlight-click");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react/addons");

/***/ }
/******/ ]);