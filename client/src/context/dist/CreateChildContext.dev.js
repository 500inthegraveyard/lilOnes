"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _yup = require("yup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CreateChildContext = _react["default"].createContext({
  firstName: ""
});

var _default = CreateChildContext;
exports["default"] = _default;