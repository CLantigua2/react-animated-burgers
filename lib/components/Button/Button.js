'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyledButton = require('./StyledButton');

var _StyledBox = require('../styledBox/StyledBox');

var _StyledLines = require('../styledLines/StyledLines');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = exports.Button = function Button(props) {
  var toggleButton = props.toggleButton,
      buttonColor = props.buttonColor,
      buttonWidth = props.buttonWidth,
      buttonStyle = props.buttonStyle,
      className = props.className,
      Box = props.Box,
      Lines = props.Lines,
      barColor = props.barColor,
      isActive = props.isActive;


  return _react2.default.createElement(
    _StyledButton.StyledButton,
    _extends({
      onClick: toggleButton
    }, { buttonWidth: buttonWidth, buttonColor: buttonColor, buttonStyle: buttonStyle, className: className }),
    _react2.default.createElement(
      Box,
      { buttonWidth: buttonWidth },
      _react2.default.createElement(Lines, { buttonWidth: buttonWidth, barColor: barColor, isActive: isActive })
    )
  );
};

Button.defaultProps = {
  buttonWidth: 40,
  Box: _StyledBox.StyledBox,
  Lines: _StyledLines.StyledLines
};