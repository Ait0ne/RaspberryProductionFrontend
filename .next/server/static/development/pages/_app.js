module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/AreaInput/area-input.component.jsx":
/*!*******************************************************!*\
  !*** ./components/AreaInput/area-input.component.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\bonaf\\Desktop\\Projects\\Ecommerce\\Malinka\\frontend\\malinka\\components\\AreaInput\\area-input.component.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const AreaInput = (_ref) => {
  let {
    handleChange,
    label
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["handleChange", "label"]);

  return __jsx("div", {
    className: "group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 5
    }
  }, __jsx("textarea", _extends({
    className: "form-input",
    onChange: handleChange
  }, otherProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  })), label ? __jsx("label", {
    className: `${otherProps.value.length ? 'shrink' : ''} form-input-label`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }, label) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (AreaInput);

/***/ }),

/***/ "./components/Chat/chat.component.jsx":
/*!********************************************!*\
  !*** ./components/Chat/chat.component.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AreaInput_area_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AreaInput/area-input.component */ "./components/AreaInput/area-input.component.jsx");
/* harmony import */ var _firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase/firebase.utils */ "./firebase/firebase.utils.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_redux_chat_chat_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/redux/chat/chat.actions */ "./src/redux/chat/chat.actions.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ClickOutside_ClickOutside_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ClickOutside/ClickOutside.component */ "./components/ClickOutside/ClickOutside.component.jsx");
var _jsxFileName = "C:\\Users\\bonaf\\Desktop\\Projects\\Ecommerce\\Malinka\\frontend\\malinka\\components\\Chat\\chat.component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class Chat extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "unsubscribe", channel => {
      if (!firebase_app__WEBPACK_IMPORTED_MODULE_5___default.a.apps.length) {
        firebase_app__WEBPACK_IMPORTED_MODULE_5___default.a.initializeApp({
          apiKey: "AIzaSyABugTRykVjU3cO3nkANbnArtyZ_TPix1Q",
          authDomain: "raspberry-dacc1.firebaseapp.com",
          databaseURL: "https://raspberry-dacc1.firebaseio.com",
          projectId: "raspberry-dacc1",
          storageBucket: "raspberry-dacc1.appspot.com",
          messagingSenderId: "435336134829",
          appId: "1:435336134829:web:36258d0b8bdb9bf9810624",
          measurementId: "G-E4XKDDZNWV"
        });
      }

      firebase_app__WEBPACK_IMPORTED_MODULE_5___default.a.firestore().collection('Chat').doc(`${channel}`).collection(`messages`).where('createdAt', '>', 1590246123874).orderBy('createdAt', 'desc').onSnapshot(docs => {
        const messages = [];
        docs.forEach(function (doc) {
          messages.push(doc.data());
        });
        this.props.setMessages(messages);
        this.props.setNewMessages(true);
      });
    });

    _defineProperty(this, "listener", async event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        const userRef = await Object(_firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_2__["sendMessage"])(this.state.text, this.props.channel);
        this.setState({
          text: ''
        });
      }
    });

    _defineProperty(this, "handleSubmit", async event => {
      event.preventDefault();
      const userRef = await Object(_firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_2__["sendMessage"])(this.state.text, this.props.channel);
      this.setState({
        text: ''
      });
    });

    _defineProperty(this, "handleChange", event => {
      this.setState({
        text: event.target.value
      });
    });

    this.state = {
      text: '',
      deviceWidth: 0
    };
    this.updateDeviceWidth = this.updateDeviceWidth.bind(this);
  }

  componentDidMount() {
    const {
      channel
    } = this.props;
    this.unsubscribe(channel);
    document.addEventListener("keydown", this.listener);
    this.updateDeviceWidth();
    window.addEventListener('resize', this.updateDeviceWidth);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.listener);
    window.removeEventListener('resize', this.updateDeviceWidth);
  }

  updateDeviceWidth() {
    this.setState({
      deviceWidth: window.innerWidth
    });
  }

  render() {
    const {
      messages,
      channel,
      toggleChatHidden,
      setNewMessages
    } = this.props;
    const {
      deviceWidth
    } = this.state;
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"].div, {
      initial: "initial",
      animate: "animate",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }
    }, __jsx(_ClickOutside_ClickOutside_component__WEBPACK_IMPORTED_MODULE_10__["default"], {
      onClick: () => {
        toggleChatHidden();
        setNewMessages(false);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"].div, {
      initial: {
        width: '0px',
        opacity: 0
      },
      animate: {
        width: `${deviceWidth > 768 ? '336px' : `${deviceWidth}px`}`,
        opacity: 1,
        transition: {
          duration: 0.3,
          staggerChildren: 0.09
        }
      },
      className: "chat-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "chat-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }
    }, "Company Name"), deviceWidth < 769 ? __jsx("div", {
      className: "close-chat-small-device",
      onClick: () => {
        toggleChatHidden();
        setNewMessages(false);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 25
      }
    }, "\u2715") : null), __jsx("div", {
      className: "messages-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }
    }, messages ? messages.map(message => __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"].div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1,
        transition: {
          delay: 0.1,
          duration: 0.8
        }
      },
      className: `${message.user.id === channel ? 'message-user' : 'message-support'} chat-message`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 48
      }
    }, message.text)) : null), __jsx("form", {
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 21
      }
    }, __jsx(_AreaInput_area_input_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "message-box",
      name: "text",
      handleChange: this.handleChange,
      value: this.state.text,
      placeholder: "Type your message here...",
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 25
      }
    }), __jsx("button", {
      className: "message-send-button",
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 25
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      className: "message-send-button-icon",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faArrowUp"],
      size: "lg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 29
      }
    }))))));
  }

}

const mapStateToProps = state => ({
  messages: state.chat.messages,
  channel: state.chat.channel,
  chatHidden: state.chat.chatHidden
});

const mapDispatchToProps = dispatch => ({
  setMessages: messages => dispatch(Object(_src_redux_chat_chat_actions__WEBPACK_IMPORTED_MODULE_4__["setMessages"])(messages)),
  setNewMessages: bool => dispatch(Object(_src_redux_chat_chat_actions__WEBPACK_IMPORTED_MODULE_4__["setNewMessages"])(bool)),
  toggleChatHidden: () => dispatch(Object(_src_redux_chat_chat_actions__WEBPACK_IMPORTED_MODULE_4__["toggleChatHidden"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Chat));

/***/ }),

/***/ "./components/Chat/chat.styles.css":
/*!*****************************************!*\
  !*** ./components/Chat/chat.styles.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ChatBody/chat-body.component.jsx":
/*!*****************************************************!*\
  !*** ./components/ChatBody/chat-body.component.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Chat/chat.component */ "./components/Chat/chat.component.jsx");
/* harmony import */ var _Chatbutton_chat_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Chatbutton/chat-button.component */ "./components/Chatbutton/chat-button.component.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\bonaf\\Desktop\\Projects\\Ecommerce\\Malinka\\frontend\\malinka\\components\\ChatBody\\chat-body.component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ChatBody = ({
  chatHidden
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, !chatHidden ? __jsx(_Chat_chat_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 28
    }
  }) : null, __jsx(_Chatbutton_chat_button_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }));
};

const mapStateToProps = state => ({
  chatHidden: state.chat.chatHidden
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(ChatBody));

/***/ }),

/***/ "./components/Chatbutton/chat-button.component.jsx":
/*!*********************************************************!*\
  !*** ./components/Chatbutton/chat-button.component.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_redux_chat_chat_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/redux/chat/chat.actions */ "./src/redux/chat/chat.actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\bonaf\\Desktop\\Projects\\Ecommerce\\Malinka\\frontend\\malinka\\components\\Chatbutton\\chat-button.component.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ChatButton = ({
  newMessages,
  setNewMessages,
  toggleChatHidden,
  chatHidden
}) => {
  return __jsx("div", {
    className: "chat-button",
    onClick: () => {
      toggleChatHidden();
      setNewMessages(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, newMessages && chatHidden ? __jsx("div", {
    className: "new-messages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }) : null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "chat-button-icon",
    icon: chatHidden ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faComments"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"],
    size: "2x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }));
};

const mapStateToProps = state => ({
  newMessages: state.chat.newMessages,
  chatHidden: state.chat.chatHidden
});

const mapDispatchToProps = dispatch => ({
  setNewMessages: bool => dispatch(Object(_src_redux_chat_chat_actions__WEBPACK_IMPORTED_MODULE_3__["setNewMessages"])(bool)),
  toggleChatHidden: () => dispatch(Object(_src_redux_chat_chat_actions__WEBPACK_IMPORTED_MODULE_3__["toggleChatHidden"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(ChatButton));

/***/ }),

/***/ "./components/Chatbutton/chat-button.styles.css":
/*!******************************************************!*\
  !*** ./components/Chatbutton/chat-button.styles.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/CheckoutItem/checkout-item.styles.css":
/*!**********************************************************!*\
  !*** ./components/CheckoutItem/checkout-item.styles.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ClickOutside/ClickOutside.component.jsx":
/*!************************************************************!*\
  !*** ./components/ClickOutside/ClickOutside.component.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const ClickOutside = ({
  children,
  onClick,
  ref
}) => {
  const refs = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])());

  const handleClick = e => {
    const isOutside = refs.every(ref => {
      return !ref.current.contains(e.target);
    });

    if (isOutside) {
      onClick();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, (element, idx) => react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(element, {
    ref: refs[idx]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ClickOutside);

/***/ }),

/***/ "./components/Footer/footer.styles.css":
/*!*********************************************!*\
  !*** ./components/Footer/footer.styles.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/FormInput/forminput.styles.css":
/*!***************************************************!*\
  !*** ./components/FormInput/forminput.styles.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Header/header.component.jsx":
/*!************************************************!*\
  !*** ./components/Header/header.component.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart-icon/cart-icon.component */ "./components/cart-icon/cart-icon.component.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase/firebase.utils */ "./firebase/firebase.utils.js");
/* harmony import */ var _src_redux_user_user_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/redux/user/user.action */ "./src/redux/user/user.action.js");
/* harmony import */ var _cart_dropdown_cart_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cart-dropdown/cart-dropdown.component */ "./components/cart-dropdown/cart-dropdown.component.jsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ClickOutside_ClickOutside_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ClickOutside/ClickOutside.component */ "./components/ClickOutside/ClickOutside.component.jsx");
var _jsxFileName = "C:\\Users\\bonaf\\Desktop\\Projects\\Ecommerce\\Malinka\\frontend\\malinka\\components\\Header\\header.component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const Header = ({
  currentUser,
  setCurrentUser,
  cartHidden
}) => {
  const {
    0: hidden,
    1: setHidden
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const handleSignOut = () => {
    _firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_6__["auth"].signOut();
    setCurrentUser(null);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
    initial: "initial",
    animate: "animate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header-navbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, "Your Logo")), __jsx("div", {
    className: "header-navigation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg-hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "navigation-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, "SHOP")), currentUser ? __jsx("span", {
    className: "navigation-button",
    onClick: handleSignOut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }, "SIGN OUT") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/auth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "navigation-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, "SIGN IN"))), __jsx("span", {
    className: "navigation-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx(_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 62
    }
  })), __jsx("div", {
    className: "navigation-toggle-container",
    onClick: () => setHidden(!hidden),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    className: "navigation-toggle",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"],
    size: "2x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }))))), !hidden ? __jsx(_ClickOutside_ClickOutside_component__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => setHidden(!hidden),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "navigation-hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "menu-hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "button-hidden",
    onClick: () => setHidden(!hidden),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, "SHOP")), currentUser ? __jsx("span", {
    className: "button-hidden",
    onClick: handleSignOut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, "SIGN OUT") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/auth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 26
    }
  }, __jsx("span", {
    className: "button-hidden",
    onClick: () => setHidden(!hidden),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, "SIGN IN"))))) : null, cartHidden ? null : __jsx(_cart_dropdown_cart_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 35
    }
  })));
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  cartHidden: state.cart.cartHidden
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(Object(_src_redux_user_user_action__WEBPACK_IMPORTED_MODULE_7__["setCurrentUser"])(user))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./components/Header/header.styles.css":
/*!*********************************************!*\
  !*** ./components/Header/header.styles.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/layout.component.jsx":
/*!************************************************!*\
  !*** ./components/Layout/layout.component.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/header.component */ "./components/Header/header.component.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase/firebase.utils */ "./firebase/firebase.utils.js");
/* harmony import */ var _src_redux_user_user_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/redux/user/user.action */ "./src/redux/user/user.action.js");
/* harmony import */ var _src_redux_chat_chat_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/redux/chat/chat.actions */ "./src/redux/chat/chat.actions.js");
/* harmony import */ var _ChatBody_chat_body_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ChatBody/chat-body.component */ "./components/ChatBody/chat-body.component.jsx");
var _jsxFileName = "C:\\Users\\bonaf\\Desktop\\Projects\\Ecommerce\\Malinka\\frontend\\malinka\\components\\Layout\\layout.component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Layout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "unsubscribeFromAuth", null);
  }

  componentDidMount() {
    const {
      setCurrentUser,
      channel,
      setChannel
    } = this.props;
    this.unsubscribeFromAuth = _firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_4__["auth"].onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await Object(_firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_4__["createUserProfileDocument"])(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser(_objectSpread({
            id: snapShot.id
          }, snapShot.data()));
        });
      }

      ;
    });

    if (channel.length === 0) {
      setChannel(new Date().getTime());
    }
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, __jsx("link", {
      href: `https://fonts.googleapis.com/css2?family=Lora:ital@0;1&family=Open+Sans:wght@400;600;700&display=swap`,
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }), __jsx("link", {
      href: `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&display=swap`,
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }), __jsx("meta", {
      name: "theme-color",
      content: "#425566",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }), __jsx("meta", {
      name: "Description",
      content: "\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }), __jsx("meta", {
      httpEquiv: "Content-Type",
      content: "text/html; charset=utf-8",
      charSet: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    })), __jsx(_Header_header_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "main",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }, this.props.children), __jsx(_ChatBody_chat_body_component__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }));
  }

}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  channel: state.chat.channel
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(Object(_src_redux_user_user_action__WEBPACK_IMPORTED_MODULE_5__["setCurrentUser"])(user)),
  setChannel: channel => dispatch(Object(_src_redux_chat_chat_actions__WEBPACK_IMPORTED_MODULE_6__["setChannel"])(channel))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Layout));

/***/ }),

/***/ "./components/Review/review.styles.css":
/*!*********************************************!*\
  !*** ./components/Review/review.styles.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Slider/slider.styles.css":
/*!*********************************************!*\
  !*** ./components/Slider/slider.styles.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/cart-dropdown/cart-dropdown.component.jsx":
/*!**************************************************************!*\
  !*** ./components/cart-dropdown/cart-dropdown.component.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_redux_cart_cart_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/redux/cart/cart.actions */ "./src/redux/cart/cart.actions.js");
/* harmony import */ var react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollbars-custom */ "react-scrollbars-custom");
/* harmony import */ var react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cart-item/cart-item.component */ "./components/cart-item/cart-item.component.jsx");
/* harmony import */ var _ClickOutside_ClickOutside_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ClickOutside/ClickOutside.component */ "./components/ClickOutside/ClickOutside.component.jsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\bonaf\\Desktop\\Projects\\Ecommerce\\Malinka\\frontend\\malinka\\components\\cart-dropdown\\cart-dropdown.component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const CartDropdown = ({
  cartItems,
  toggleCartHidden,
  total
}) => {
  const {
    0: deviceWidth,
    1: setDeviceWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: deviceHeight,
    1: setDeviceHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    updateDeviceDimensions();
    window.addEventListener('resize', updateDeviceDimensions);
    return window.removeEventListener('resize', updateDeviceDimensions);
  });

  const updateDeviceDimensions = () => {
    setDeviceWidth(window.innerWidth);
    setDeviceHeight(window.innerHeight);
  };

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"].div, {
    initial: "initial",
    animate: "animate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, console.log(deviceWidth, deviceHeight), __jsx(_ClickOutside_ClickOutside_component__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => toggleCartHidden(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"].div, {
    className: "cart-dropdown",
    initial: {
      height: '0px'
    },
    animate: {
      height: '340px',
      transition: {
        duration: 0.3
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      height: '280px',
      width: `100%`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "cart-items",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, cartItems.length ? cartItems.map(cartItem => __jsx(_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: cartItem.id,
    cartItem: cartItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 55
    }
  })) : __jsx("span", {
    className: "empty-message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }, "Your cart is empty"))), __jsx("span", {
    className: "cart-dropdown-total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, "Total: $", total), __jsx("button", {
    className: "checkout-button",
    type: "button",
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/checkout');
      toggleCartHidden();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "GO TO CHECKOUT"))));
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  total: state.cart.cartItems.reduce((sum, cartItem) => sum + cartItem.price * cartItem.quantity, 0)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(Object(_src_redux_cart_cart_actions__WEBPACK_IMPORTED_MODULE_3__["toggleCartHidden"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CartDropdown));

/***/ }),

/***/ "./components/cart-dropdown/cart-dropdown.styles.css":
/*!***********************************************************!*\
  !*** ./components/cart-dropdown/cart-dropdown.styles.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/cart-icon/cart-icon.component.jsx":
/*!******************************************************!*\
  !*** ./components/cart-icon/cart-icon.component.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_redux_cart_cart_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/redux/cart/cart.actions */ "./src/redux/cart/cart.actions.js");
var _jsxFileName = "C:\\Users\\bonaf\\Desktop\\Projects\\Ecommerce\\Malinka\\frontend\\malinka\\components\\cart-icon\\cart-icon.component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CartIcon = ({
  cartItems,
  toggleCartHidden
}) => {
  return __jsx("div", {
    className: "cart-icon-container",
    onClick: () => toggleCartHidden(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "cart-icon",
    alt: "cart-icon",
    src: "./icon32.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "cart-icon-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, cartItems));
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(Object(_src_redux_cart_cart_actions__WEBPACK_IMPORTED_MODULE_2__["toggleCartHidden"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(CartIcon));

/***/ }),

/***/ "./components/cart-icon/cart-icon.styles.css":
/*!***************************************************!*\
  !*** ./components/cart-icon/cart-icon.styles.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/cart-item/cart-item.component.jsx":
/*!******************************************************!*\
  !*** ./components/cart-item/cart-item.component.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_redux_cart_cart_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/redux/cart/cart.actions */ "./src/redux/cart/cart.actions.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\bonaf\\Desktop\\Projects\\Ecommerce\\Malinka\\frontend\\malinka\\components\\cart-item\\cart-item.component.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CartItem = ({
  cartItem,
  addItem,
  removeItem,
  clearItemFromCart
}) => {
  return __jsx("div", {
    className: "cart-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "cart-item-image-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "cart-item-image",
    alt: "item-image",
    src: `${_routes__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_URL"]}${cartItem.gallery[0].formats.thumbnail.url}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "cart-item-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/itemgallery/[item]",
    as: `/itemgallery/${cartItem.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "cart-item-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 85
    }
  }, cartItem.name)), __jsx("div", {
    className: "cart-item-quantity",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "cart-item-arrow",
    onClick: () => removeItem(cartItem),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "\u276E"), __jsx("span", {
    className: "cart-item-value",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, cartItem.quantity), __jsx("div", {
    className: "cart-item-arrow",
    onClick: () => addItem(cartItem),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, "\u276F"), __jsx("span", {
    className: "cart-item-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, "$", cartItem.price), __jsx("div", {
    className: "cart-item-remove-button",
    onClick: () => setTimeout(() => clearItemFromCart(cartItem), 100),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "\u2715"))));
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(Object(_src_redux_cart_cart_actions__WEBPACK_IMPORTED_MODULE_2__["addItem"])(item)),
  removeItem: item => dispatch(Object(_src_redux_cart_cart_actions__WEBPACK_IMPORTED_MODULE_2__["removeItem"])(item)),
  clearItemFromCart: item => dispatch(Object(_src_redux_cart_cart_actions__WEBPACK_IMPORTED_MODULE_2__["clearItemFromCart"])(item))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(CartItem));

/***/ }),

/***/ "./components/cart-item/cart-item.styles.css":
/*!***************************************************!*\
  !*** ./components/cart-item/cart-item.styles.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/sign-in/sign-in.styles.css":
/*!***********************************************!*\
  !*** ./components/sign-in/sign-in.styles.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/sign-up/sign-up.styles.css":
/*!***********************************************!*\
  !*** ./components/sign-up/sign-up.styles.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./firebase/firebase.utils.js":
/*!************************************!*\
  !*** ./firebase/firebase.utils.js ***!
  \************************************/
/*! exports provided: createUserProfileDocument, Fire, sendMessage, auth, firestore, signInwithGoogle, signInWithFacebook, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserProfileDocument", function() { return createUserProfileDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fire", function() { return Fire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firestore", function() { return firestore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInwithGoogle", function() { return signInwithGoogle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithFacebook", function() { return signInWithFacebook; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const config = {
  apiKey: "AIzaSyABugTRykVjU3cO3nkANbnArtyZ_TPix1Q",
  authDomain: "raspberry-dacc1.firebaseapp.com",
  databaseURL: "https://raspberry-dacc1.firebaseio.com",
  projectId: "raspberry-dacc1",
  storageBucket: "raspberry-dacc1.appspot.com",
  messagingSenderId: "435336134829",
  appId: "1:435336134829:web:36258d0b8bdb9bf9810624",
  measurementId: "G-E4XKDDZNWV"
};
const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const {
      displayName,
      email
    } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set(_objectSpread({
        displayName,
        email,
        createdAt
      }, data));
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const Fire = () => {
  if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
  }
};
const sendMessage = async (message, channel) => {
  const channelRef = firestore.collection('Chat').doc(`${channel}`);
  const snapshot = await channelRef.get();

  if (!snapshot.exists) {
    await channelRef.set({
      name: channel
    });
  }

  const chatRef = firestore.collection('Chat').doc(`${channel}`).collection(`messages`).doc(`${new Date()}`);

  try {
    await channelRef.update({
      userMessages: true,
      text: message,
      time: new Date()
    });
    await chatRef.set({
      id: new Date(),
      text: message,
      createdAt: new Date().getTime(),
      user: {
        id: channel
      }
    });
  } catch (err) {
    alert(err.message);
  }
};
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const firestore = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
const signInwithGoogle = () => auth.signInWithPopup(provider);
const facebookProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({
  prompt: 'select_account'
});
const signInWithFacebook = () => auth.signInWithPopup(facebookProvider).catch(err => alert('Your account is associated with a different Login method!'));
/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/styles.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout/layout.component */ "./components/Layout/layout.component.jsx");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_with_redux_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/with-redux-store */ "./src/with-redux-store.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Slider_slider_styles_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Slider/slider.styles.css */ "./components/Slider/slider.styles.css");
/* harmony import */ var _components_Slider_slider_styles_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_Slider_slider_styles_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Header_header_styles_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Header/header.styles.css */ "./components/Header/header.styles.css");
/* harmony import */ var _components_Header_header_styles_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_Header_header_styles_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_cart_icon_cart_icon_styles_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/cart-icon/cart-icon.styles.css */ "./components/cart-icon/cart-icon.styles.css");
/* harmony import */ var _components_cart_icon_cart_icon_styles_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_cart_icon_cart_icon_styles_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_sign_in_sign_in_styles_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/sign-in/sign-in.styles.css */ "./components/sign-in/sign-in.styles.css");
/* harmony import */ var _components_sign_in_sign_in_styles_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_sign_in_sign_in_styles_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_sign_up_sign_up_styles_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/sign-up/sign-up.styles.css */ "./components/sign-up/sign-up.styles.css");
/* harmony import */ var _components_sign_up_sign_up_styles_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_sign_up_sign_up_styles_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_FormInput_forminput_styles_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/FormInput/forminput.styles.css */ "./components/FormInput/forminput.styles.css");
/* harmony import */ var _components_FormInput_forminput_styles_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_components_FormInput_forminput_styles_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _auth_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth.css */ "./pages/auth.css");
/* harmony import */ var _auth_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_auth_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_cart_dropdown_cart_dropdown_styles_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/cart-dropdown/cart-dropdown.styles.css */ "./components/cart-dropdown/cart-dropdown.styles.css");
/* harmony import */ var _components_cart_dropdown_cart_dropdown_styles_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_components_cart_dropdown_cart_dropdown_styles_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_cart_item_cart_item_styles_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/cart-item/cart-item.styles.css */ "./components/cart-item/cart-item.styles.css");
/* harmony import */ var _components_cart_item_cart_item_styles_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_components_cart_item_cart_item_styles_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_Footer_footer_styles_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Footer/footer.styles.css */ "./components/Footer/footer.styles.css");
/* harmony import */ var _components_Footer_footer_styles_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_components_Footer_footer_styles_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _itemgallery_item_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./itemgallery/item.css */ "./pages/itemgallery/item.css");
/* harmony import */ var _itemgallery_item_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_itemgallery_item_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_Review_review_styles_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/Review/review.styles.css */ "./components/Review/review.styles.css");
/* harmony import */ var _components_Review_review_styles_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_components_Review_review_styles_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_CheckoutItem_checkout_item_styles_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/CheckoutItem/checkout-item.styles.css */ "./components/CheckoutItem/checkout-item.styles.css");
/* harmony import */ var _components_CheckoutItem_checkout_item_styles_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_components_CheckoutItem_checkout_item_styles_css__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _checkout_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./checkout.css */ "./pages/checkout.css");
/* harmony import */ var _checkout_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_checkout_css__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_Chatbutton_chat_button_styles_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/Chatbutton/chat-button.styles.css */ "./components/Chatbutton/chat-button.styles.css");
/* harmony import */ var _components_Chatbutton_chat_button_styles_css__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_components_Chatbutton_chat_button_styles_css__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _components_Chat_chat_styles_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/Chat/chat.styles.css */ "./components/Chat/chat.styles.css");
/* harmony import */ var _components_Chat_chat_styles_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_components_Chat_chat_styles_css__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _payment_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./payment.css */ "./pages/payment.css");
/* harmony import */ var _payment_css__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_payment_css__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_28__);
var _jsxFileName = "C:\\Users\\bonaf\\Desktop\\Projects\\Ecommerce\\Malinka\\frontend\\malinka\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 // import wrapper  from '../src/redux/store';


























 // config.autoAddCss = false

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  constructor(props) {
    super(props);
    this.persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_6__["persistStore"])(props.reduxStore);
  }

  render() {
    const {
      Component,
      pageProps,
      reduxStore
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: reduxStore,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    }, __jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__["PersistGate"], {
      loading: __jsx(Component, _extends({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 38
        }
      })),
      persistor: this.persistor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_28__["AnimatePresence"], {
      exitBeforeEnter: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 23
      }
    }, __jsx(_components_Layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 31
      }
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_with_redux_store__WEBPACK_IMPORTED_MODULE_8__["default"])(MyApp));

/***/ }),

/***/ "./pages/auth.css":
/*!************************!*\
  !*** ./pages/auth.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/checkout.css":
/*!****************************!*\
  !*** ./pages/checkout.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/itemgallery/item.css":
/*!************************************!*\
  !*** ./pages/itemgallery/item.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/payment.css":
/*!***************************!*\
  !*** ./pages/payment.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! exports provided: UPLOAD_URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_URL", function() { return UPLOAD_URL; });
const API_URL = 'https://raspberrynextjsstrapi2.herokuapp.com';
const UPLOAD_URL = '';
/* harmony default export */ __webpack_exports__["default"] = (API_URL);

/***/ }),

/***/ "./src/redux/cart/cart.actions.js":
/*!****************************************!*\
  !*** ./src/redux/cart/cart.actions.js ***!
  \****************************************/
/*! exports provided: toggleCartHidden, addItem, addMultipleItems, clearItemFromCart, removeItem, clearCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCartHidden", function() { return toggleCartHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMultipleItems", function() { return addMultipleItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearItemFromCart", function() { return clearItemFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCart", function() { return clearCart; });
const toggleCartHidden = () => ({
  type: 'TOGGLE_CART_HIDDEN'
});
const addItem = item => ({
  type: 'ADD_ITEM',
  payload: item
});
const addMultipleItems = items => ({
  type: 'ADD_MULTIPLE_ITEMS',
  payload: items
});
const clearItemFromCart = item => ({
  type: 'CLEAR_ITEM_FROM_CART',
  payload: item
});
const removeItem = item => ({
  type: 'REMOVE_ITEM',
  payload: item
});
const clearCart = () => ({
  type: 'CLEAR_CART'
});

/***/ }),

/***/ "./src/redux/cart/cart.reducer.js":
/*!****************************************!*\
  !*** ./src/redux/cart/cart.reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.utils */ "./src/redux/cart/cart.utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITIAL_STATE = {
  cartItems: [],
  cartHidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return _objectSpread(_objectSpread({}, state), {}, {
        cartHidden: !state.cartHidden
      });

    case 'ADD_ITEM':
      return _objectSpread(_objectSpread({}, state), {}, {
        cartItems: Object(_cart_utils__WEBPACK_IMPORTED_MODULE_0__["addItemToCart"])(state.cartItems, action.payload)
      });

    case 'ADD_MULTIPLE_ITEMS':
      return _objectSpread(_objectSpread({}, state), {}, {
        cartItems: Object(_cart_utils__WEBPACK_IMPORTED_MODULE_0__["addMultipleItemsToCart"])(state.cartItems, action.payload)
      });

    case 'CLEAR_ITEM_FROM_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      });

    case 'REMOVE_ITEM':
      return _objectSpread(_objectSpread({}, state), {}, {
        cartItems: Object(_cart_utils__WEBPACK_IMPORTED_MODULE_0__["removeItemFromCart"])(state.cartItems, action.payload)
      });

    case 'CLEAR_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        cartItems: []
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (cartReducer);

/***/ }),

/***/ "./src/redux/cart/cart.utils.js":
/*!**************************************!*\
  !*** ./src/redux/cart/cart.utils.js ***!
  \**************************************/
/*! exports provided: addItemToCart, addMultipleItemsToCart, removeItemFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemToCart", function() { return addItemToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMultipleItemsToCart", function() { return addMultipleItemsToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItemFromCart", function() { return removeItemFromCart; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? _objectSpread(_objectSpread({}, cartItem), {}, {
      quantity: cartItem.quantity + 1
    }) : cartItem);
  }

  return [...cartItems, _objectSpread(_objectSpread({}, cartItemToAdd), {}, {
    quantity: 1
  })];
};
const addMultipleItemsToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd[0].id);

  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd[0].id ? _objectSpread(_objectSpread({}, cartItem), {}, {
      quantity: cartItem.quantity + cartItemToAdd[1]
    }) : cartItem);
  }

  return [...cartItems, _objectSpread(_objectSpread({}, cartItemToAdd[0]), {}, {
    quantity: cartItemToAdd[1]
  })];
};
const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems;
  }

  return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? _objectSpread(_objectSpread({}, cartItem), {}, {
    quantity: cartItem.quantity - 1
  }) : cartItem);
};

/***/ }),

/***/ "./src/redux/chat/chat.actions.js":
/*!****************************************!*\
  !*** ./src/redux/chat/chat.actions.js ***!
  \****************************************/
/*! exports provided: setChannel, setMessages, setNewMessages, toggleChatHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChannel", function() { return setChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMessages", function() { return setMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNewMessages", function() { return setNewMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleChatHidden", function() { return toggleChatHidden; });
const setChannel = channel => ({
  type: 'SET_CHANNEL',
  payload: channel
});
const setMessages = messages => ({
  type: 'SET_MESSAGES',
  payload: messages
});
const setNewMessages = bool => ({
  type: 'SET_NEW_MESSAGES',
  payload: bool
});
const toggleChatHidden = () => ({
  type: 'TOGGLE_CHAT_HIDDEN'
});

/***/ }),

/***/ "./src/redux/chat/chat.reducers.js":
/*!*****************************************!*\
  !*** ./src/redux/chat/chat.reducers.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const INITIAL_STATE = {
  channel: '',
  messages: [],
  newMessages: false,
  chatHidden: true
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_MESSAGES':
      return _objectSpread(_objectSpread({}, state), {}, {
        messages: action.payload
      });

    case 'SET_CHANNEL':
      return _objectSpread(_objectSpread({}, state), {}, {
        channel: action.payload
      });

    case 'SET_NEW_MESSAGES':
      return _objectSpread(_objectSpread({}, state), {}, {
        newMessages: action.payload
      });

    case 'TOGGLE_CHAT_HIDDEN':
      return _objectSpread(_objectSpread({}, state), {}, {
        chatHidden: !state.chatHidden
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (chatReducer);

/***/ }),

/***/ "./src/redux/filter/filter.reducer.js":
/*!********************************************!*\
  !*** ./src/redux/filter/filter.reducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { HYDRATE } from "next-redux-wrapper";
const INITIAL_STATE = {
  currentFilter: 'Bouquet'
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case HYDRATE:
    //     return {...state,...action.payload}
    case 'SET_CURRENT_FILTER':
      return _objectSpread(_objectSpread({}, state), {}, {
        currentFilter: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (filterReducer);

/***/ }),

/***/ "./src/redux/pagination/pagination.reducer.js":
/*!****************************************************!*\
  !*** ./src/redux/pagination/pagination.reducer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { HYDRATE } from "next-redux-wrapper";
const INITIAL_STATE = {
  activePage: 1,
  perPage: 10,
  pageRange: 3
};

const paginationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case HYDRATE:
    //     return {...state,...action.payload}
    case "SET_CURRENT_PAGE":
      return _objectSpread(_objectSpread({}, state), {}, {
        activePage: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (paginationReducer);

/***/ }),

/***/ "./src/redux/root-reducer.js":
/*!***********************************!*\
  !*** ./src/redux/root-reducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pagination_pagination_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination/pagination.reducer */ "./src/redux/pagination/pagination.reducer.js");
/* harmony import */ var _sort_sort_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort/sort.reducer */ "./src/redux/sort/sort.reducer.js");
/* harmony import */ var _filter_filter_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter/filter.reducer */ "./src/redux/filter/filter.reducer.js");
/* harmony import */ var _user_user_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.reducer */ "./src/redux/user/user.reducer.js");
/* harmony import */ var _cart_cart_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.reducer */ "./src/redux/cart/cart.reducer.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _chat_chat_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat/chat.reducers */ "./src/redux/chat/chat.reducers.js");








 // export default  combineReducers({
//     user:userReducer,
//     cart:cartReducer,
//     filter: filterReducer,
//     pagination: paginationReducer,
//     sort: sortReducer
// })

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _user_user_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  cart: _cart_cart_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  filter: _filter_filter_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  pagination: _pagination_pagination_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  sort: _sort_sort_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  chat: _chat_chat_reducers__WEBPACK_IMPORTED_MODULE_8__["default"]
});
const persistConfig = {
  key: 'primary',
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7___default()),
  whitelist: ['filter', 'cart', 'chat']
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_persist__WEBPACK_IMPORTED_MODULE_6__["persistReducer"])(persistConfig, rootReducer));

/***/ }),

/***/ "./src/redux/sort/sort.reducer.js":
/*!****************************************!*\
  !*** ./src/redux/sort/sort.reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { HYDRATE } from "next-redux-wrapper";
const INITIAL_STATE = {
  sorted: 'Newest'
};

const sortReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case HYDRATE:
    //     return {...state,...action.payload}
    case 'SET_CURRENT_SORT':
      return _objectSpread(_objectSpread({}, state), {}, {
        sorted: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (sortReducer);

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: makestore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makestore", function() { return makestore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root-reducer */ "./src/redux/root-reducer.js");



const middlewares = [];

if (true) {
  middlewares.push(redux_logger__WEBPACK_IMPORTED_MODULE_1___default.a);
}

const startState = {
  cart: {
    cartItems: [],
    cartHidden: true
  },
  filter: {
    currentFilter: 'Bouquet'
  },
  pagination: {
    activePage: 1,
    perPage: 10,
    pageRange: 3
  },
  sort: {
    sorted: 'Newest'
  },
  user: {
    currentUser: null
  },
  chat: {
    channel: '',
    messages: [],
    newMessages: false,
    chatHidden: true
  }
}; // const makestore = (initialState, options) => createStore(persistReducer, initialState, applyMiddleware(...middlewares))
// export default makestore;

function makestore(initialState = startState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_root_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
}

/***/ }),

/***/ "./src/redux/user/user.action.js":
/*!***************************************!*\
  !*** ./src/redux/user/user.action.js ***!
  \***************************************/
/*! exports provided: setCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
});

/***/ }),

/***/ "./src/redux/user/user.reducer.js":
/*!****************************************!*\
  !*** ./src/redux/user/user.reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return _objectSpread(_objectSpread({}, state), {}, {
        currentUser: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ }),

/***/ "./src/with-redux-store.js":
/*!*********************************!*\
  !*** ./src/with-redux-store.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withReduxStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.js");
var _jsxFileName = "C:\\Users\\bonaf\\Desktop\\Projects\\Ecommerce\\Malinka\\frontend\\malinka\\src\\with-redux-store.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const isServer = true;
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["makestore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["makestore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

function withReduxStore(App) {
  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    static async getInitialProps(appContext) {
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return _objectSpread(_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 14
        }
      }));
    }

  };
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-scrollbars-custom":
/*!******************************************!*\
  !*** external "react-scrollbars-custom" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollbars-custom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FyZWFJbnB1dC9hcmVhLWlucHV0LmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0L2NoYXQuY29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXRCb2R5L2NoYXQtYm9keS5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhdGJ1dHRvbi9jaGF0LWJ1dHRvbi5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2xpY2tPdXRzaWRlL0NsaWNrT3V0c2lkZS5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L2xheW91dC5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC1kcm9wZG93bi9jYXJ0LWRyb3Bkb3duLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJ0LWljb24vY2FydC1pY29uLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UvZmlyZWJhc2UudXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9jYXJ0L2NhcnQuYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvY2FydC9jYXJ0LnJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2NhcnQvY2FydC51dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvY2hhdC9jaGF0LmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2NoYXQvY2hhdC5yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvZmlsdGVyL2ZpbHRlci5yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9wYWdpbmF0aW9uL3BhZ2luYXRpb24ucmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcm9vdC1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zb3J0L3NvcnQucmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3VzZXIvdXNlci5hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3VzZXIvdXNlci5yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy93aXRoLXJlZHV4LXN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbGJhcnMtY3VzdG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJBcmVhSW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJsYWJlbCIsIm90aGVyUHJvcHMiLCJ2YWx1ZSIsImxlbmd0aCIsIkNoYXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiY2hhbm5lbCIsImZpcmViYXNlIiwiYXBwcyIsImluaXRpYWxpemVBcHAiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwid2hlcmUiLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsImRvY3MiLCJtZXNzYWdlcyIsImZvckVhY2giLCJwdXNoIiwiZGF0YSIsInByb3BzIiwic2V0TWVzc2FnZXMiLCJzZXROZXdNZXNzYWdlcyIsImV2ZW50IiwiY29kZSIsInVzZXJSZWYiLCJzZW5kTWVzc2FnZSIsInN0YXRlIiwidGV4dCIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJkZXZpY2VXaWR0aCIsInVwZGF0ZURldmljZVdpZHRoIiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwidW5zdWJzY3JpYmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaXN0ZW5lciIsIndpbmRvdyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlubmVyV2lkdGgiLCJyZW5kZXIiLCJ0b2dnbGVDaGF0SGlkZGVuIiwid2lkdGgiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwibWFwIiwibWVzc2FnZSIsImRlbGF5IiwidXNlciIsImlkIiwiaGFuZGxlU3VibWl0IiwiZmFBcnJvd1VwIiwibWFwU3RhdGVUb1Byb3BzIiwiY2hhdCIsImNoYXRIaWRkZW4iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJvb2wiLCJjb25uZWN0IiwiQ2hhdEJvZHkiLCJDaGF0QnV0dG9uIiwibmV3TWVzc2FnZXMiLCJmYUNvbW1lbnRzIiwiZmFUaW1lcyIsIkNsaWNrT3V0c2lkZSIsImNoaWxkcmVuIiwib25DbGljayIsInJlZiIsInJlZnMiLCJDaGlsZHJlbiIsInVzZVJlZiIsImhhbmRsZUNsaWNrIiwiZSIsImlzT3V0c2lkZSIsImV2ZXJ5IiwiY3VycmVudCIsImNvbnRhaW5zIiwidXNlRWZmZWN0IiwiZWxlbWVudCIsImlkeCIsImNsb25lRWxlbWVudCIsIkhlYWRlciIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJjYXJ0SGlkZGVuIiwiaGlkZGVuIiwic2V0SGlkZGVuIiwidXNlU3RhdGUiLCJoYW5kbGVTaWduT3V0IiwiYXV0aCIsInNpZ25PdXQiLCJmYUJhcnMiLCJjYXJ0IiwiTGF5b3V0Iiwic2V0Q2hhbm5lbCIsInVuc3Vic2NyaWJlRnJvbUF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyQXV0aCIsImNyZWF0ZVVzZXJQcm9maWxlRG9jdW1lbnQiLCJzbmFwU2hvdCIsIkRhdGUiLCJnZXRUaW1lIiwiQ2FydERyb3Bkb3duIiwiY2FydEl0ZW1zIiwidG9nZ2xlQ2FydEhpZGRlbiIsInRvdGFsIiwic2V0RGV2aWNlV2lkdGgiLCJkZXZpY2VIZWlnaHQiLCJzZXREZXZpY2VIZWlnaHQiLCJ1cGRhdGVEZXZpY2VEaW1lbnNpb25zIiwiaW5uZXJIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiaGVpZ2h0IiwiY2FydEl0ZW0iLCJSb3V0ZXIiLCJyZWR1Y2UiLCJzdW0iLCJwcmljZSIsInF1YW50aXR5IiwiQ2FydEljb24iLCJDYXJ0SXRlbSIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwiY2xlYXJJdGVtRnJvbUNhcnQiLCJVUExPQURfVVJMIiwiZ2FsbGVyeSIsImZvcm1hdHMiLCJ0aHVtYm5haWwiLCJ1cmwiLCJuYW1lIiwic2V0VGltZW91dCIsIml0ZW0iLCJjb25maWciLCJ1aWQiLCJzbmFwc2hvdCIsImdldCIsImV4aXN0cyIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJjcmVhdGVkQXQiLCJzZXQiLCJlcnIiLCJGaXJlIiwiY2hhbm5lbFJlZiIsImNoYXRSZWYiLCJ1cGRhdGUiLCJ1c2VyTWVzc2FnZXMiLCJ0aW1lIiwiYWxlcnQiLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNldEN1c3RvbVBhcmFtZXRlcnMiLCJwcm9tcHQiLCJzaWduSW53aXRoR29vZ2xlIiwic2lnbkluV2l0aFBvcHVwIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aEZhY2Vib29rIiwiY2F0Y2giLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJocmVmIiwicGFyc2UiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImVudHJ5IiwiaGFzIiwiY2IiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsImVycm9yIiwiTGluayIsInAiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJub2RlTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJyZXNvbHZlIiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImJvZHkiLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImdldFBhdGhzIiwicGFyc2VkSHJlZiIsInBhcnNlZEFzIiwicmVzb2x2ZWRIcmVmIiwiaGFuZGxlUmVmIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImpvaW4iLCJvcHRpb25zIiwicGF0aHMiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJvbmx5Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJ0eXBlIiwicHJvY2VzcyIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwicHJvcE5hbWUiLCJfZGVmYXVsdCIsInVzZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsImNyZWF0ZVJvdXRlciIsIndpdGhSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwic2xpY2UiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsInF1ZXJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJhdHRlbXB0cyIsImdldFJlc3BvbnNlIiwiZmV0Y2giLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwibWV0aG9kIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVEVTVF9ST1VURSIsInRlc3QiLCJyZSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfIiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNDYXRjaEFsbCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfYSIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXQiLCJTUCIsIm1lYXN1cmUiLCJDb250YWluZXIiLCJjcmVhdGVVcmwiLCJBcHBJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfcmVmIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJfZXJyb3JJbmZvIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJwdXNoVXJsIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIiwicGVyc2lzdG9yIiwicGVyc2lzdFN0b3JlIiwicmVkdXhTdG9yZSIsIndpdGhSZWR1eFN0b3JlIiwiQVBJX1VSTCIsInBheWxvYWQiLCJhZGRNdWx0aXBsZUl0ZW1zIiwiaXRlbXMiLCJjbGVhckNhcnQiLCJJTklUSUFMX1NUQVRFIiwiY2FydFJlZHVjZXIiLCJhY3Rpb24iLCJhZGRJdGVtVG9DYXJ0IiwiYWRkTXVsdGlwbGVJdGVtc1RvQ2FydCIsInJlbW92ZUl0ZW1Gcm9tQ2FydCIsImNhcnRJdGVtVG9BZGQiLCJleGlzdGluZ0NhcnRJdGVtIiwiZmluZCIsImNhcnRJdGVtVG9SZW1vdmUiLCJjaGF0UmVkdWNlciIsImN1cnJlbnRGaWx0ZXIiLCJmaWx0ZXJSZWR1Y2VyIiwiYWN0aXZlUGFnZSIsInBlclBhZ2UiLCJwYWdlUmFuZ2UiLCJwYWdpbmF0aW9uUmVkdWNlciIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlclJlZHVjZXIiLCJwYWdpbmF0aW9uIiwic29ydCIsInNvcnRSZWR1Y2VyIiwicGVyc2lzdENvbmZpZyIsInN0b3JhZ2UiLCJ3aGl0ZWxpc3QiLCJwZXJzaXN0UmVkdWNlciIsInNvcnRlZCIsIm1pZGRsZXdhcmVzIiwibG9nZ2VyIiwic3RhcnRTdGF0ZSIsIm1ha2VzdG9yZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiaXNTZXJ2ZXIiLCJfX05FWFRfUkVEVVhfU1RPUkVfXyIsImdldE9yQ3JlYXRlU3RvcmUiLCJBcHBXaXRoUmVkdXgiLCJhcHBDb250ZXh0IiwiYXBwUHJvcHMiLCJpbml0aWFsUmVkdXhTdGF0ZSIsImdldFN0YXRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxNQUFNQSxTQUFTLEdBQUc7QUFBQSxNQUFDO0FBQUNDLGdCQUFEO0FBQWVDO0FBQWYsR0FBRDtBQUFBLE1BQTBCQyxVQUExQjs7QUFBQSxTQUNkO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVUsYUFBUyxFQUFDLFlBQXBCO0FBQWlDLFlBQVEsRUFBRUY7QUFBM0MsS0FBNkRFLFVBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FE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LDBDOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImNvbnN0IEFyZWFJbnB1dCA9ICh7aGFuZGxlQ2hhbmdlLCBsYWJlbCwgLi4ub3RoZXJQcm9wc30pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdncm91cCc+XHJcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT0nZm9ybS1pbnB1dCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gey4uLm90aGVyUHJvcHN9Lz5cclxuICAgICAgICB7bGFiZWwgP1xyXG4gICAgICAgICg8bGFiZWxcclxuICAgICAgICBjbGFzc05hbWU9e2Ake290aGVyUHJvcHMudmFsdWUubGVuZ3RoID8gJ3Nocmluayc6ICcnfSBmb3JtLWlucHV0LWxhYmVsYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICA8L2xhYmVsPiApXHJcbiAgICAgICAgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFyZWFJbnB1dDsiLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBcmVhSW5wdXQgZnJvbSAnLi4vQXJlYUlucHV0L2FyZWEtaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHtzZW5kTWVzc2FnZX0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UudXRpbHMnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JzsgXHJcbmltcG9ydCB7c2V0TWVzc2FnZXMsIHNldE5ld01lc3NhZ2VzLCB0b2dnbGVDaGF0SGlkZGVufSBmcm9tICcuLi8uLi9zcmMvcmVkdXgvY2hhdC9jaGF0LmFjdGlvbnMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQge2ZhQXJyb3dVcH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IENsaWNrT3V0c2lkZSBmcm9tICcuLi9DbGlja091dHNpZGUvQ2xpY2tPdXRzaWRlLmNvbXBvbmVudCdcclxuXHJcblxyXG5cclxuXHJcbmNsYXNzICBDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0ZXh0OicnLFxyXG4gICAgICAgICAgICBkZXZpY2VXaWR0aDogMCxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXZpY2VXaWR0aD0gdGhpcy51cGRhdGVEZXZpY2VXaWR0aC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlID0gKGNoYW5uZWwpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpS2V5OiBcIkFJemFTeUFCdWdUUnlrVmpVM2NPM25rQU5ibkFydHlaX1RQaXgxUVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhEb21haW46IFwicmFzcGJlcnJ5LWRhY2MxLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcmFzcGJlcnJ5LWRhY2MxLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkOiBcInJhc3BiZXJyeS1kYWNjMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwicmFzcGJlcnJ5LWRhY2MxLmFwcHNwb3QuY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDM1MzM2MTM0ODI5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IFwiMTo0MzUzMzYxMzQ4Mjk6d2ViOjM2MjU4ZDBiOGJkYjliZjk4MTA2MjRcIixcclxuICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudElkOiBcIkctRTRYS0REWk5XVlwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdDaGF0JykuZG9jKGAke2NoYW5uZWx9YCkuY29sbGVjdGlvbihgbWVzc2FnZXNgKS53aGVyZSgnY3JlYXRlZEF0JywnPicsMTU5MDI0NjEyMzg3NCApLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsJ2Rlc2MnKVxyXG4gICAgICAgICAgICAub25TbmFwc2hvdCgoZG9jcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZXM9W10gXHJcbiAgICAgICAgICAgICAgICBkb2NzLmZvckVhY2goZnVuY3Rpb24oZG9jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRNZXNzYWdlcyhtZXNzYWdlcykgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldE5ld01lc3NhZ2VzKHRydWUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgbGlzdGVuZXIgPSBhc3luYyBldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiRW50ZXJcIiB8fCBldmVudC5jb2RlID09PSBcIk51bXBhZEVudGVyXCIpIHtcclxuICAgICAgICAgIGNvbnN0IHVzZXJSZWYgPSBhd2FpdCBzZW5kTWVzc2FnZSh0aGlzLnN0YXRlLnRleHQsIHRoaXMucHJvcHMuY2hhbm5lbCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0ZXh0OicnfSlcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoYW5uZWx9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoY2hhbm5lbClcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmxpc3RlbmVyKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURldmljZVdpZHRoKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlRGV2aWNlV2lkdGgpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmxpc3RlbmVyKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVEZXZpY2VXaWR0aClcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQgPSBhc3luYyBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB1c2VyUmVmID0gYXdhaXQgc2VuZE1lc3NhZ2UodGhpcy5zdGF0ZS50ZXh0LCB0aGlzLnByb3BzLmNoYW5uZWwpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RleHQ6Jyd9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RleHQ6ZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEZXZpY2VXaWR0aCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkZXZpY2VXaWR0aDp3aW5kb3cuaW5uZXJXaWR0aH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCB7bWVzc2FnZXMsY2hhbm5lbCwgdG9nZ2xlQ2hhdEhpZGRlbiwgc2V0TmV3TWVzc2FnZXN9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHtkZXZpY2VXaWR0aH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD0naW5pdGlhbCcgYW5pbWF0ZT0nYW5pbWF0ZSc+XHJcbiAgICAgICAgICAgIDxDbGlja091dHNpZGUgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2hhdEhpZGRlbigpXHJcbiAgICAgICAgICAgICAgICBzZXROZXdNZXNzYWdlcyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7d2lkdGg6JzBweCcsIG9wYWNpdHk6MH19XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7d2lkdGg6YCR7ZGV2aWNlV2lkdGg+NzY4ID8gJzMzNnB4JzogYCR7ZGV2aWNlV2lkdGh9cHhgfWAsb3BhY2l0eToxLCAgdHJhbnNpdGlvbjp7ZHVyYXRpb246MC4zLCBzdGFnZ2VyQ2hpbGRyZW46IDAuMDl9fX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGF0LWNvbnRhaW5lcidcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LXRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q29tcGFueSBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGV2aWNlV2lkdGg8NzY5P1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xvc2UtY2hhdC1zbWFsbC1kZXZpY2UnIG9uQ2xpY2s9eygpPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVDaGF0SGlkZGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROZXdNZXNzYWdlcyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0+JiMxMDAwNTs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2VzLWNvbnRhaW5lcicgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgICBtZXNzYWdlcyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLm1hcChtZXNzYWdlPT4gPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OjB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OjEsIHRyYW5zaXRpb246e2RlbGF5OjAuMSwgZHVyYXRpb246MC44fX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake21lc3NhZ2UudXNlci5pZD09PWNoYW5uZWwgPyAnbWVzc2FnZS11c2VyJzogJ21lc3NhZ2Utc3VwcG9ydCd9IGNoYXQtbWVzc2FnZWB9PnttZXNzYWdlLnRleHR9PC9tb3Rpb24uZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOm51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJlYUlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21lc3NhZ2UtYm94J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSB5b3VyIG1lc3NhZ2UgaGVyZS4uLidcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbWVzc2FnZS1zZW5kLWJ1dHRvbicgIHR5cGU9J3N1Ym1pdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nbWVzc2FnZS1zZW5kLWJ1dHRvbi1pY29uJyBpY29uPXtmYUFycm93VXB9IHNpemU9J2xnJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvQ2xpY2tPdXRzaWRlPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgbWVzc2FnZXM6IHN0YXRlLmNoYXQubWVzc2FnZXMsXHJcbiAgICBjaGFubmVsOiBzdGF0ZS5jaGF0LmNoYW5uZWwsXHJcbiAgICBjaGF0SGlkZGVuOiBzdGF0ZS5jaGF0LmNoYXRIaWRkZW5cclxufSlcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBzZXRNZXNzYWdlczogbWVzc2FnZXMgPT4gZGlzcGF0Y2goc2V0TWVzc2FnZXMobWVzc2FnZXMpKSxcclxuICAgIHNldE5ld01lc3NhZ2VzOmJvb2wgPT4gZGlzcGF0Y2goc2V0TmV3TWVzc2FnZXMoYm9vbCkpLFxyXG4gICAgdG9nZ2xlQ2hhdEhpZGRlbjogKCkgPT4gZGlzcGF0Y2godG9nZ2xlQ2hhdEhpZGRlbigpKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2hhdCk7IiwiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaGF0IGZyb20gJy4uL0NoYXQvY2hhdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgQ2hhdEJ1dHRvbiBmcm9tICcuLi9DaGF0YnV0dG9uL2NoYXQtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IENoYXRCb2R5ID0gKHtjaGF0SGlkZGVufSkgPT4ge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgeyAhY2hhdEhpZGRlbiA/PENoYXQgLz4gOiBudWxsfVxyXG4gICAgICAgICAgICA8Q2hhdEJ1dHRvbi8+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgY2hhdEhpZGRlbjogc3RhdGUuY2hhdC5jaGF0SGlkZGVuXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2hhdEJvZHkpOyIsImltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQge2ZhQ29tbWVudHMsIGZhVGltZXN9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7c2V0TmV3TWVzc2FnZXMsIHRvZ2dsZUNoYXRIaWRkZW59IGZyb20gJy4uLy4uL3NyYy9yZWR1eC9jaGF0L2NoYXQuYWN0aW9ucydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IENoYXRCdXR0b24gPSAoe25ld01lc3NhZ2VzLCBzZXROZXdNZXNzYWdlcywgdG9nZ2xlQ2hhdEhpZGRlbixjaGF0SGlkZGVufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1idXR0b24nIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgIHRvZ2dsZUNoYXRIaWRkZW4oKTtcclxuICAgICAgICAgICAgc2V0TmV3TWVzc2FnZXMoZmFsc2UpXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICB7ICAgbmV3TWVzc2FnZXMgJiYgY2hhdEhpZGRlbiA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3LW1lc3NhZ2VzJz48L2Rpdj5cclxuICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2NoYXQtYnV0dG9uLWljb24nIGljb249e2NoYXRIaWRkZW4/ZmFDb21tZW50czpmYVRpbWVzfSBzaXplPScyeCcvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIG5ld01lc3NhZ2VzOiBzdGF0ZS5jaGF0Lm5ld01lc3NhZ2VzLFxyXG4gICAgY2hhdEhpZGRlbjogc3RhdGUuY2hhdC5jaGF0SGlkZGVuXHJcbn0pXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgc2V0TmV3TWVzc2FnZXM6IGJvb2wgPT4gZGlzcGF0Y2goc2V0TmV3TWVzc2FnZXMoYm9vbCkpLFxyXG4gICAgdG9nZ2xlQ2hhdEhpZGRlbjooKSA9PiBkaXNwYXRjaCh0b2dnbGVDaGF0SGlkZGVuKCkpXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKENoYXRCdXR0b24pOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ2xpY2tPdXRzaWRlID0gKHsgY2hpbGRyZW4sIG9uQ2xpY2ssIHJlZiB9KSA9PiB7XHJcbiAgY29uc3QgcmVmcyA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKCkgPT4gdXNlUmVmKCkpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XHJcbiAgICBjb25zdCBpc091dHNpZGUgPSByZWZzLmV2ZXJ5KHJlZiA9PiB7XHJcbiAgICAgIHJldHVybiAhcmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZiAoaXNPdXRzaWRlKSB7XHJcbiAgICAgIG9uQ2xpY2soKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoZWxlbWVudCwgaWR4KSA9PlxyXG4gICAgUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHsgcmVmOiByZWZzW2lkeF0gfSlcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGlja091dHNpZGU7IiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHtmYUJhcnN9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBDYXJ0SWNvbiBmcm9tICcuLi9jYXJ0LWljb24vY2FydC1pY29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge2F1dGh9IGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLnV0aWxzJztcclxuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXIgfSBmcm9tICcuLi8uLi9zcmMvcmVkdXgvdXNlci91c2VyLmFjdGlvbic7XHJcbmltcG9ydCBDYXJ0RHJvcGRvd24gZnJvbSAnLi4vY2FydC1kcm9wZG93bi9jYXJ0LWRyb3Bkb3duLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7bW90aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IENsaWNrT3V0c2lkZSBmcm9tICcuLi9DbGlja091dHNpZGUvQ2xpY2tPdXRzaWRlLmNvbXBvbmVudCdcclxuXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoe2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlciwgY2FydEhpZGRlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2lnbk91dCA9ICgpID0+IHtcclxuICAgICAgICBhdXRoLnNpZ25PdXQoKVxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyKG51bGwpXHJcbiAgICB9XHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPSdpbml0aWFsJyBhbmltYXRlPSdhbmltYXRlJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyLW5hdmJhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPllvdXIgTG9nbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlci1uYXZpZ2F0aW9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xnLWhpZGRlbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSduYXZpZ2F0aW9uLWJ1dHRvbic+U0hPUDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50VXNlciA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSduYXZpZ2F0aW9uLWJ1dHRvbicgb25DbGljaz17aGFuZGxlU2lnbk91dH0+U0lHTiBPVVQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9Jy9hdXRoJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J25hdmlnYXRpb24tYnV0dG9uJz5TSUdOIElOPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbmF2aWdhdGlvbi1idXR0b24nID48Q2FydEljb24vPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmlnYXRpb24tdG9nZ2xlLWNvbnRhaW5lcicgb25DbGljaz17KCkgPT5zZXRIaWRkZW4oIWhpZGRlbil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J25hdmlnYXRpb24tdG9nZ2xlJyAgaWNvbj17ZmFCYXJzfSBzaXplPScyeCcvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7IWhpZGRlbiA/XHJcbiAgICAgICAgICAgIDxDbGlja091dHNpZGUgb25DbGljaz17KCkgPT5zZXRIaWRkZW4oIWhpZGRlbil9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmlnYXRpb24taGlkZGVuJz4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUtaGlkZGVuJz4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdidXR0b24taGlkZGVuJyBvbkNsaWNrPXsoKSA9PnNldEhpZGRlbighaGlkZGVuKX0+U0hPUDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGN1cnJlbnRVc2VyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uLWhpZGRlbicgb25DbGljaz17aGFuZGxlU2lnbk91dH0+U0lHTiBPVVQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDo8TGluayAgaHJlZj0nL2F1dGgnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uLWhpZGRlbicgb25DbGljaz17KCkgPT5zZXRIaWRkZW4oIWhpZGRlbil9PlNJR04gSU48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DbGlja091dHNpZGU+ICAgXHJcbiAgICAgICAgICAgIDpudWxsfVxyXG4gICAgICAgICAgICB7IGNhcnRIaWRkZW4gPyBudWxsIDogPENhcnREcm9wZG93bi8+ICB9XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuXHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBjdXJyZW50VXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcclxuICAgIGNhcnRIaWRkZW46IHN0YXRlLmNhcnQuY2FydEhpZGRlblxyXG59KVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIHNldEN1cnJlbnRVc2VyOiB1c2VyID0+IGRpc3BhdGNoKHNldEN1cnJlbnRVc2VyKHVzZXIpKSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoSGVhZGVyKTsiLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge2F1dGgsIGNyZWF0ZVVzZXJQcm9maWxlRG9jdW1lbnR9IGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLnV0aWxzJztcclxuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXIgfSBmcm9tICcuLi8uLi9zcmMvcmVkdXgvdXNlci91c2VyLmFjdGlvbic7XHJcbmltcG9ydCB7c2V0Q2hhbm5lbH0gZnJvbSAnLi4vLi4vc3JjL3JlZHV4L2NoYXQvY2hhdC5hY3Rpb25zJ1xyXG5pbXBvcnQgQ2hhdEJvZHkgZnJvbSAnLi4vQ2hhdEJvZHkvY2hhdC1ib2R5LmNvbXBvbmVudCdcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xyXG5cclxuXHJcblxyXG4gICAgdW5zdWJzY3JpYmVGcm9tQXV0aCA9IG51bGw7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qge3NldEN1cnJlbnRVc2VyLCBjaGFubmVsLCBzZXRDaGFubmVsfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21BdXRoID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoYXN5bmMgdXNlckF1dGggPT57XHJcbiAgICAgICAgICAgIGlmICh1c2VyQXV0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlclJlZiA9IGF3YWl0IGNyZWF0ZVVzZXJQcm9maWxlRG9jdW1lbnQodXNlckF1dGgpO1xyXG4gICAgICAgICAgICAgICAgdXNlclJlZi5vblNuYXBzaG90KHNuYXBTaG90ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50VXNlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBzbmFwU2hvdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc25hcFNob3QuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGNoYW5uZWwubGVuZ3RoPT09MCkge1xyXG4gICAgICAgICAgICBzZXRDaGFubmVsKG5ldyBEYXRlKCkuZ2V0VGltZSgpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbUF1dGgoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudCA+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPXtgaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOml0YWxAMDsxJmZhbWlseT1PcGVuK1NhbnM6d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBgfSByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9e2BodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6d2dodEA0MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwYH0gcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM0MjU1NjZcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIkRlc2NyaXB0aW9uXCIgY29udGVudD1cItC+0L/QuNGB0LDQvdC40LUg0YHQsNC50YLQsFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIgY2hhclNldD1cInV0Zi04XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4nPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPENoYXRCb2R5IC8+XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gICAgY3VycmVudFVzZXI6IHN0YXRlLnVzZXIuY3VycmVudFVzZXIsXHJcbiAgICBjaGFubmVsOiBzdGF0ZS5jaGF0LmNoYW5uZWxcclxufSlcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBzZXRDdXJyZW50VXNlcjogdXNlciA9PiBkaXNwYXRjaChzZXRDdXJyZW50VXNlcih1c2VyKSksXHJcbiAgICBzZXRDaGFubmVsOiBjaGFubmVsID0+IGRpc3BhdGNoKHNldENoYW5uZWwoY2hhbm5lbCkpXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShMYXlvdXQpOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7dG9nZ2xlQ2FydEhpZGRlbn0gIGZyb20gJy4uLy4uL3NyYy9yZWR1eC9jYXJ0L2NhcnQuYWN0aW9ucyc7XHJcbmltcG9ydCBTY3JvbGxCYXIgZnJvbSAncmVhY3Qtc2Nyb2xsYmFycy1jdXN0b20nO1xyXG5pbXBvcnQgQ2FydEl0ZW0gZnJvbSAnLi4vY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgQ2xpY2tPdXRzaWRlIGZyb20gJy4uL0NsaWNrT3V0c2lkZS9DbGlja091dHNpZGUuY29tcG9uZW50J1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5jb25zdCBDYXJ0RHJvcGRvd24gPSAoe2NhcnRJdGVtcyx0b2dnbGVDYXJ0SGlkZGVuLCB0b3RhbH0pID0+IHtcclxuICAgIGNvbnN0IFtkZXZpY2VXaWR0aCwgc2V0RGV2aWNlV2lkdGhdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtkZXZpY2VIZWlnaHQsIHNldERldmljZUhlaWdodF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHVwZGF0ZURldmljZURpbWVuc2lvbnMoKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVEZXZpY2VEaW1lbnNpb25zKVxyXG4gICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlRGV2aWNlRGltZW5zaW9ucylcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgdXBkYXRlRGV2aWNlRGltZW5zaW9ucyA9ICgpID0+IHtcclxuICAgICAgICBzZXREZXZpY2VXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgICAgc2V0RGV2aWNlSGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPSdpbml0aWFsJyBhbmltYXRlPSdhbmltYXRlJz5cclxuICAgICAgICAgICAge2NvbnNvbGUubG9nKGRldmljZVdpZHRoLCBkZXZpY2VIZWlnaHQpfVxyXG4gICAgICAgIDxDbGlja091dHNpZGUgb25DbGljaz17KCk9PiB0b2dnbGVDYXJ0SGlkZGVuKCl9PlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9J2NhcnQtZHJvcGRvd24nXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7aGVpZ2h0OicwcHgnfX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3toZWlnaHQ6JzM0MHB4JywgdHJhbnNpdGlvbjp7ZHVyYXRpb246IDAuM319fVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgID4gICBcclxuXHJcbiAgICAgICAgICAgICAgICA8U2Nyb2xsQmFyICBzdHlsZT17e2hlaWdodDonMjgwcHgnLCB3aWR0aDogYDEwMCVgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaXRlbXMnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyAgIGNhcnRJdGVtcy5sZW5ndGggP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydEl0ZW1zLm1hcChjYXJ0SXRlbSA9PiA8Q2FydEl0ZW0ga2V5PXtjYXJ0SXRlbS5pZH0gY2FydEl0ZW09e2NhcnRJdGVtfS8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZW1wdHktbWVzc2FnZSc+WW91ciBjYXJ0IGlzIGVtcHR5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1Njcm9sbEJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcnQtZHJvcGRvd24tdG90YWwnPlRvdGFsOiAke3RvdGFsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NoZWNrb3V0LWJ1dHRvbicgXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jaGVja291dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2FydEhpZGRlbigpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEdPIFRPIENIRUNLT1VUXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj4gXHJcblxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPC9DbGlja091dHNpZGU+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGNhcnRJdGVtczogc3RhdGUuY2FydC5jYXJ0SXRlbXMsXHJcbiAgICB0b3RhbDogc3RhdGUuY2FydC5jYXJ0SXRlbXMucmVkdWNlKChzdW0sIGNhcnRJdGVtKSA9PiBcclxuICAgIHN1bSArIGNhcnRJdGVtLnByaWNlKmNhcnRJdGVtLnF1YW50aXR5LCAwXHJcbiAgICApXHJcbn0pXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgdG9nZ2xlQ2FydEhpZGRlbjogKCkgPT4gZGlzcGF0Y2godG9nZ2xlQ2FydEhpZGRlbigpKVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydERyb3Bkb3duKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHt0b2dnbGVDYXJ0SGlkZGVufSBmcm9tICcuLi8uLi9zcmMvcmVkdXgvY2FydC9jYXJ0LmFjdGlvbnMnO1xyXG5cclxuXHJcblxyXG5jb25zdCBDYXJ0SWNvbiA9ICh7Y2FydEl0ZW1zLHRvZ2dsZUNhcnRIaWRkZW59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWljb24tY29udGFpbmVyJyBvbkNsaWNrPXsoKSA9PiB0b2dnbGVDYXJ0SGlkZGVuKCl9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nY2FydC1pY29uJyBhbHQ9J2NhcnQtaWNvbicgc3JjPScuL2ljb24zMi5wbmcnLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJ0LWljb24tdGV4dCc+e2NhcnRJdGVtc308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBjYXJ0SXRlbXM6IHN0YXRlLmNhcnQuY2FydEl0ZW1zLnJlZHVjZSgoc3VtLCBjYXJ0SXRlbSkgPT4gc3VtK2NhcnRJdGVtLnF1YW50aXR5LCAwKVxyXG59KVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIHRvZ2dsZUNhcnRIaWRkZW46ICgpID0+IGRpc3BhdGNoKHRvZ2dsZUNhcnRIaWRkZW4oKSlcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydEljb24pOyIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge2FkZEl0ZW0scmVtb3ZlSXRlbSxjbGVhckl0ZW1Gcm9tQ2FydH0gZnJvbSAnLi4vLi4vc3JjL3JlZHV4L2NhcnQvY2FydC5hY3Rpb25zJztcclxuaW1wb3J0IEFQSV9VUkwsIHtVUExPQURfVVJMfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNvbnN0IENhcnRJdGVtID0gKHtjYXJ0SXRlbSwgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgY2xlYXJJdGVtRnJvbUNhcnR9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWl0ZW0nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1pdGVtLWltYWdlLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjYXJ0LWl0ZW0taW1hZ2UnIGFsdD0naXRlbS1pbWFnZScgc3JjPXtgJHtVUExPQURfVVJMfSR7Y2FydEl0ZW0uZ2FsbGVyeVswXS5mb3JtYXRzLnRodW1ibmFpbC51cmx9YH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaXRlbS1jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9pdGVtZ2FsbGVyeS9baXRlbV0nIGFzPXtgL2l0ZW1nYWxsZXJ5LyR7Y2FydEl0ZW0uaWR9YH0+PHNwYW4gY2xhc3NOYW1lPSdjYXJ0LWl0ZW0tbmFtZSc+e2NhcnRJdGVtLm5hbWV9PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWl0ZW0tcXVhbnRpdHknPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT0nY2FydC1pdGVtLWFycm93JyBvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtKGNhcnRJdGVtKX0+JiMxMDA5NDs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcnQtaXRlbS12YWx1ZSc+e2NhcnRJdGVtLnF1YW50aXR5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1pdGVtLWFycm93JyBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKGNhcnRJdGVtKX0+JiMxMDA5NTs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcnQtaXRlbS1wcmljZSc+JHtjYXJ0SXRlbS5wcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaXRlbS1yZW1vdmUtYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBzZXRUaW1lb3V0KCgpID0+IGNsZWFySXRlbUZyb21DYXJ0KGNhcnRJdGVtKSwxMDApfT4mIzEwMDA1OzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIGFkZEl0ZW06IGl0ZW0gPT4gZGlzcGF0Y2goYWRkSXRlbShpdGVtKSksXHJcbiAgICByZW1vdmVJdGVtOiBpdGVtID0+IGRpc3BhdGNoKHJlbW92ZUl0ZW0oaXRlbSkpLFxyXG4gICAgY2xlYXJJdGVtRnJvbUNhcnQ6IGl0ZW0gPT4gZGlzcGF0Y2goY2xlYXJJdGVtRnJvbUNhcnQoaXRlbSkpXHJcbiAgICAgICAgICAgXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydEl0ZW0pO1xyXG5cclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lBQnVnVFJ5a1ZqVTNjTzNua0FOYm5BcnR5Wl9UUGl4MVFcIixcclxuICAgIGF1dGhEb21haW46IFwicmFzcGJlcnJ5LWRhY2MxLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9yYXNwYmVycnktZGFjYzEuZmlyZWJhc2Vpby5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJyYXNwYmVycnktZGFjYzFcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwicmFzcGJlcnJ5LWRhY2MxLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0MzUzMzYxMzQ4MjlcIixcclxuICAgIGFwcElkOiBcIjE6NDM1MzM2MTM0ODI5OndlYjozNjI1OGQwYjhiZGI5YmY5ODEwNjI0XCIsXHJcbiAgICBtZWFzdXJlbWVudElkOiBcIkctRTRYS0REWk5XVlwiXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlclByb2ZpbGVEb2N1bWVudCA9IGFzeW5jICh1c2VyQXV0aCxkYXRhKSA9PiB7XHJcbiAgICBpZiAoIXVzZXJBdXRoKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgdXNlclJlZiA9IGZpcmVzdG9yZS5kb2MoYHVzZXJzLyR7dXNlckF1dGgudWlkfWApO1xyXG4gICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCB1c2VyUmVmLmdldCgpO1xyXG5cclxuICAgIGlmICghc25hcHNob3QuZXhpc3RzKSB7XHJcbiAgICAgICAgY29uc3Qge2Rpc3BsYXlOYW1lLGVtYWlsfSA9IHVzZXJBdXRoO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRBdCA9IG5ldyBEYXRlKClcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGF3YWl0IHVzZXJSZWYuc2V0KHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQsXHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgY3JlYXRpbmcgdXNlcicsIGVyci5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1c2VyUmVmO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEZpcmUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZylcclxuICAgICAgICB9XHJcblxyXG59IFxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRNZXNzYWdlID0gYXN5bmMgKG1lc3NhZ2UsIGNoYW5uZWwpID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgY2hhbm5lbFJlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKCdDaGF0JykuZG9jKGAke2NoYW5uZWx9YClcclxuICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgY2hhbm5lbFJlZi5nZXQoKTtcclxuXHJcbiAgICBpZiAoIXNuYXBzaG90LmV4aXN0cykge1xyXG4gICAgICAgIGF3YWl0IGNoYW5uZWxSZWYuc2V0KHtuYW1lOmNoYW5uZWx9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhdFJlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKCdDaGF0JykuZG9jKGAke2NoYW5uZWx9YCkuY29sbGVjdGlvbihgbWVzc2FnZXNgKS5kb2MoYCR7bmV3IERhdGUoKX1gKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjaGFubmVsUmVmLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXJNZXNzYWdlczp0cnVlLFxyXG4gICAgICAgICAgICB0ZXh0Om1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHRpbWU6bmV3IERhdGUoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXdhaXQgY2hhdFJlZi5zZXQoe1xyXG4gICAgICAgICAgICBpZDpuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICB0ZXh0Om1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIHVzZXI6IHtpZDpjaGFubmVsfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBhbGVydChlcnIubWVzc2FnZSlcclxuICAgIH1cclxuXHJcblxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5leHBvcnQgY29uc3QgZmlyZXN0b3JlID1maXJlYmFzZS5maXJlc3RvcmUoKTtcclxuXHJcbmNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcbnByb3ZpZGVyLnNldEN1c3RvbVBhcmFtZXRlcnMoe3Byb21wdDonc2VsZWN0X2FjY291bnQnfSk7XHJcbmV4cG9ydCBjb25zdCBzaWduSW53aXRoR29vZ2xlID0gKCkgPT4gYXV0aC5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpO1xyXG5cclxuY29uc3QgZmFjZWJvb2tQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyKCk7XHJcbmZhY2Vib29rUHJvdmlkZXIuc2V0Q3VzdG9tUGFyYW1ldGVycyh7cHJvbXB0OidzZWxlY3RfYWNjb3VudCd9KTtcclxuZXhwb3J0IGNvbnN0IHNpZ25JbldpdGhGYWNlYm9vayA9ICgpID0+IGF1dGguc2lnbkluV2l0aFBvcHVwKGZhY2Vib29rUHJvdmlkZXIpXHJcbi5jYXRjaChlcnIgPT4gYWxlcnQoJ1lvdXIgYWNjb3VudCBpcyBhc3NvY2lhdGVkIHdpdGggYSBkaWZmZXJlbnQgTG9naW4gbWV0aG9kIScpKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXJsPXJlcXVpcmUoXCJ1cmxcIik7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO3ZhciBfcm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm91dGVyXCIpKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO2Z1bmN0aW9uIGlzTG9jYWwoaHJlZil7dmFyIHVybD0oMCxfdXJsLnBhcnNlKShocmVmLGZhbHNlLHRydWUpO3ZhciBvcmlnaW49KDAsX3VybC5wYXJzZSkoKDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpLGZhbHNlLHRydWUpO3JldHVybiF1cmwuaG9zdHx8dXJsLnByb3RvY29sPT09b3JpZ2luLnByb3RvY29sJiZ1cmwuaG9zdD09PW9yaWdpbi5ob3N0O31mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jKXt2YXIgbGFzdEhyZWY9bnVsbDt2YXIgbGFzdEFzPW51bGw7dmFyIGxhc3RSZXN1bHQ9bnVsbDtyZXR1cm4oaHJlZixhcyk9PntpZihsYXN0UmVzdWx0JiZocmVmPT09bGFzdEhyZWYmJmFzPT09bGFzdEFzKXtyZXR1cm4gbGFzdFJlc3VsdDt9dmFyIHJlc3VsdD1mb3JtYXRGdW5jKGhyZWYsYXMpO2xhc3RIcmVmPWhyZWY7bGFzdEFzPWFzO2xhc3RSZXN1bHQ9cmVzdWx0O3JldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZm9ybWF0VXJsKHVybCl7cmV0dXJuIHVybCYmdHlwZW9mIHVybD09PSdvYmplY3QnPygwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikodXJsKTp1cmw7fXZhciBvYnNlcnZlcjt2YXIgbGlzdGVuZXJzPW5ldyBNYXAoKTt2YXIgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP3dpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcjpudWxsO3ZhciBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIGdldE9ic2VydmVyKCl7Ly8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbmlmKG9ic2VydmVyKXtyZXR1cm4gb2JzZXJ2ZXI7fS8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuaWYoIUludGVyc2VjdGlvbk9ic2VydmVyKXtyZXR1cm4gdW5kZWZpbmVkO31yZXR1cm4gb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9PntpZighbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKXtyZXR1cm47fXZhciBjYj1saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCk7aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjApe29ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO2xpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtjYigpO319KTt9LHtyb290TWFyZ2luOicyMDBweCd9KTt9dmFyIGxpc3RlblRvSW50ZXJzZWN0aW9ucz0oZWwsY2IpPT57dmFyIG9ic2VydmVyPWdldE9ic2VydmVyKCk7aWYoIW9ic2VydmVyKXtyZXR1cm4oKT0+e307fW9ic2VydmVyLm9ic2VydmUoZWwpO2xpc3RlbmVycy5zZXQoZWwsY2IpO3JldHVybigpPT57dHJ5e29ic2VydmVyLnVub2JzZXJ2ZShlbCk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO31saXN0ZW5lcnMuZGVsZXRlKGVsKTt9O307Y2xhc3MgTGluayBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IocHJvcHMpe3N1cGVyKHByb3BzKTt0aGlzLnA9dm9pZCAwO3RoaXMuY2xlYW5VcExpc3RlbmVycz0oKT0+e307dGhpcy5mb3JtYXRVcmxzPW1lbW9pemVkRm9ybWF0VXJsKChocmVmLGFzSHJlZik9PntyZXR1cm57aHJlZjooMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGhyZWYpKSxhczphc0hyZWY/KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChhc0hyZWYpKTphc0hyZWZ9O30pO3RoaXMubGlua0NsaWNrZWQ9ZT0+e3Zhcntub2RlTmFtZSx0YXJnZXR9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUubmF0aXZlRXZlbnQmJmUubmF0aXZlRXZlbnQud2hpY2g9PT0yKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxucmV0dXJuO312YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTtpZighaXNMb2NhbChocmVmKSl7Ly8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxucmV0dXJuO312YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjtocmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsaHJlZik7YXM9YXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxhcyk6aHJlZjtlLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG52YXJ7c2Nyb2xsfT10aGlzLnByb3BzO2lmKHNjcm9sbD09bnVsbCl7c2Nyb2xsPWFzLmluZGV4T2YoJyMnKTwwO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbl9yb3V0ZXIuZGVmYXVsdFt0aGlzLnByb3BzLnJlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdzp0aGlzLnByb3BzLnNoYWxsb3d9KS50aGVuKHN1Y2Nlc3M9PntpZighc3VjY2VzcylyZXR1cm47aWYoc2Nyb2xsKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtkb2N1bWVudC5ib2R5LmZvY3VzKCk7fX0pO307aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHByb3BzLnByZWZldGNoKXtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319dGhpcy5wPXByb3BzLnByZWZldGNoIT09ZmFsc2U7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7fWdldFBhdGhzKCl7dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247dmFye2hyZWY6cGFyc2VkSHJlZixhczpwYXJzZWRBc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTt2YXIgcmVzb2x2ZWRIcmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkSHJlZik7cmV0dXJuW3Jlc29sdmVkSHJlZixwYXJzZWRBcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEFzKTpyZXNvbHZlZEhyZWZdO31oYW5kbGVSZWYocmVmKXtpZih0aGlzLnAmJkludGVyc2VjdGlvbk9ic2VydmVyJiZyZWYmJnJlZi50YWdOYW1lKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt2YXIgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbdGhpcy5nZXRQYXRocygpLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldO2lmKCFpc1ByZWZldGNoZWQpe3RoaXMuY2xlYW5VcExpc3RlbmVycz1saXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCgpPT57dGhpcy5wcmVmZXRjaCgpO30pO319fS8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG5wcmVmZXRjaChvcHRpb25zKXtpZighdGhpcy5wfHx0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbnZhciBwYXRocz10aGlzLmdldFBhdGhzKCk7Ly8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbl9yb3V0ZXIuZGVmYXVsdC5wcmVmZXRjaChwYXRoc1svKiBocmVmICovMF0scGF0aHNbLyogYXNQYXRoICovMV0sb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7cHJlZmV0Y2hlZFtwYXRocy5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXT10cnVlO31yZW5kZXIoKXt2YXJ7Y2hpbGRyZW59PXRoaXMucHJvcHM7dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxudmFyIGNoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt2YXIgcHJvcHM9e3JlZjplbD0+e3RoaXMuaGFuZGxlUmVmKGVsKTtpZihjaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZil7aWYodHlwZW9mIGNoaWxkLnJlZj09PSdmdW5jdGlvbicpY2hpbGQucmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZC5yZWY9PT0nb2JqZWN0Jyl7Y2hpbGQucmVmLmN1cnJlbnQ9ZWw7fX19LG9uTW91c2VFbnRlcjplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXRoaXMucHJlZmV0Y2goe3ByaW9yaXR5OnRydWV9KTt9LG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe3RoaXMubGlua0NsaWNrZWQoZSk7fX19Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZih0aGlzLnByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7cHJvcHMuaHJlZj1hc3x8aHJlZjt9Ly8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCl7dmFyIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0PXJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O2lmKHByb3BzLmhyZWYmJnR5cGVvZiBfX05FWFRfREFUQV9fIT09J3VuZGVmaW5lZCcmJl9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCl7cHJvcHMuaHJlZj1yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKTt9fXJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO319aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt2YXIgd2Fybj0oMCxfdXRpbHMuZXhlY09uY2UpKGNvbnNvbGUuZXJyb3IpOy8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxudmFyIFByb3BUeXBlcz1yZXF1aXJlKCdwcm9wLXR5cGVzJyk7dmFyIGV4YWN0PXJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTsvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG5MaW5rLnByb3BUeXBlcz1leGFjdCh7aHJlZjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLGFzOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLHByZWZldGNoOlByb3BUeXBlcy5ib29sLHJlcGxhY2U6UHJvcFR5cGVzLmJvb2wsc2hhbGxvdzpQcm9wVHlwZXMuYm9vbCxwYXNzSHJlZjpQcm9wVHlwZXMuYm9vbCxzY3JvbGw6UHJvcFR5cGVzLmJvb2wsY2hpbGRyZW46UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsKHByb3BzLHByb3BOYW1lKT0+e3ZhciB2YWx1ZT1wcm9wc1twcm9wTmFtZV07aWYodHlwZW9mIHZhbHVlPT09J3N0cmluZycpe3dhcm4oXCJXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+XCIpO31yZXR1cm4gbnVsbDt9XSkuaXNSZXF1aXJlZH0pO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL3ZhciBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG52YXIgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJ107dmFyIHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTt2YXIgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09ZnVuY3Rpb24oKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LGZ1bmN0aW9uKCl7dmFyIGV2ZW50RmllbGQ9XCJvblwiK2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2V2ZW50LnN1YnN0cmluZygxKTt2YXIgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJndW1lbnRzKTt9Y2F0Y2goZXJyKXsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihcIkVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiBcIitldmVudEZpZWxkKTsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihlcnIubWVzc2FnZStcIlxcblwiK2Vyci5zdGFjayk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7dmFyIG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG52YXIgY3JlYXRlUm91dGVyPWZ1bmN0aW9uIGNyZWF0ZVJvdXRlcigpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXthcmdzW19rZXldPWFyZ3VtZW50c1tfa2V5XTt9c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe3ZhciBfcm91dGVyPXJvdXRlcjt2YXIgaW5zdGFuY2U9e307Zm9yKHZhciBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKHt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT1mdW5jdGlvbigpe3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cmV0dXJuIGluc3RhbmNlO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPVwid2l0aFJvdXRlcihcIituYW1lK1wiKVwiO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fSIsIlwidXNlIHN0cmljdFwiO1xuLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtaXR0KCkge1xuICAgIGNvbnN0IGFsbCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb24odHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9LFxuICAgICAgICBvZmYodHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQodHlwZSwgLi4uZXZ0cykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKC4uLmV2dHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1pdHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IG1pdHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgaXNfZHluYW1pY18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbmNvbnN0IHJvdXRlX21hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG5jb25zdCByb3V0ZV9yZWdleF8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoO1xufVxuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICAgICAgOiBwYXRoO1xufVxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLyc7XG59XG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aCkgPT4gdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpO1xuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIGlzU2VydmVyUmVuZGVyLCBjYikge1xuICAgIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDE7XG4gICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYCksXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBlcnIuY29kZSA9ICdQQUdFX0xPQURfRVJST1InO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUsIHF1ZXJ5LCBhcywgeyBpbml0aWFsUHJvcHMsIHBhZ2VMb2FkZXIsIEFwcCwgd3JhcEFwcCwgQ29tcG9uZW50LCBlcnIsIHN1YnNjcmlwdGlvbiwgaXNGYWxsYmFjaywgfSkge1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHt9O1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIHV0aWxzXzEuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAoZS5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgICAgICAgICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgICAgICAgICAgIHVybF8xLnBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUodXJsXzEucGFyc2UoYXNQYXRoKS5wYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICAgICAgICAgICAgOiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBudWxsLCB0aGlzLmlzU3NyLCBkYXRhID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHVybF8xLnBhcnNlKGFzUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMuYXNQYXRoID1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgIGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhcztcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICAgIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShyb3V0ZSwgbW9kKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZC5kZWZhdWx0IHx8IG1vZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IENvbXBvbmVudCwgX19OX1NTRzogbW9kLl9fTl9TU0csIF9fTl9TU1A6IG1vZC5fX05fU1NQIH0pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YTtcbiAgICAgICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICAgKi9cbiAgICBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcHVzaCh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICByZXBsYWNlKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjaGFuZ2UobWV0aG9kLCBfdXJsLCBfYXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgICAgIGlmICh1dGlsc18xLlNUKSB7XG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybDtcbiAgICAgICAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzO1xuICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKTtcbiAgICAgICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcyk7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHVybF8xLnBhcnNlKGFzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gcm91dGVfcmVnZXhfMS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcm91dGVfbWF0Y2hlcl8xLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW0gPT4gIXF1ZXJ5W3BhcmFtXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgICAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKHJvdXRlSW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IHV0aWxzXzEuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAgICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyLCBsb2FkRXJyb3JGYWlsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnaXBFcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcyA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICB9KSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhKCgpID0+IF9fTl9TU0dcbiAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICB0aGlzLm5vdGlmeShkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgICAqL1xuICAgIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICAgICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyk7XG4gICAgICAgICAgICBlLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhKSB7XG4gICAgICAgIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblJvdXRlci5ldmVudHMgPSBtaXR0XzEuZGVmYXVsdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87XG5mdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO1xufVxuZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZSA9IGlzRHluYW1pY1JvdXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkge1xuICAgIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleDtcbiAgICByZXR1cm4gKHBhdGhuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVjb2RlID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtcbiAgICAgICAgICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXTtcbiAgICAgICAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcChlbnRyeSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgICAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVNYXRjaGVyID0gZ2V0Um91dGVNYXRjaGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cbmZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKSB7XG4gICAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICAgIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJyk7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgbGV0IGdyb3VwSW5kZXggPSAxO1xuICAgIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICBncm91cHNbJDFcbiAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfTtcbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAnLyguKz8pJyA6ICcvKFteL10rPyknO1xuICAgIH0pO1xuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTtcbiAgICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJyk7XG4gICAgICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSwgZ3JvdXBzIH0sIChuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICAgICAgfVxuICAgICAgICA6IHt9KSk7XG59XG5leHBvcnRzLmdldFJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG4vKipcbiAqIFV0aWxzXG4gKi9cbmZ1bmN0aW9uIGV4ZWNPbmNlKGZuKSB7XG4gICAgbGV0IHVzZWQgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJldHVybiAoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICB1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmV4ZWNPbmNlID0gZXhlY09uY2U7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWA7XG59XG5leHBvcnRzLmdldExvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW47XG5mdW5jdGlvbiBnZXRVUkwoKSB7XG4gICAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7XG59XG5leHBvcnRzLmdldFVSTCA9IGdldFVSTDtcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IENvbXBvbmVudFxuICAgICAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG59XG5leHBvcnRzLmdldERpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnQ7XG59XG5leHBvcnRzLmlzUmVzU2VudCA9IGlzUmVzU2VudDtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCBjdHgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKChfYSA9IEFwcC5wcm90b3R5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICAgIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpO1xuICAgIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG59XG5leHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHMgPSBsb2FkR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy51cmxPYmplY3RLZXlzID0gW1xuICAgICdhdXRoJyxcbiAgICAnaGFzaCcsXG4gICAgJ2hvc3QnLFxuICAgICdob3N0bmFtZScsXG4gICAgJ2hyZWYnLFxuICAgICdwYXRoJyxcbiAgICAncGF0aG5hbWUnLFxuICAgICdwb3J0JyxcbiAgICAncHJvdG9jb2wnLFxuICAgICdxdWVyeScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NsYXNoZXMnLFxuXTtcbmZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwb3J0cy51cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxfMS5mb3JtYXQodXJsLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb24gPSBmb3JtYXRXaXRoVmFsaWRhdGlvbjtcbmV4cG9ydHMuU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0cy5TVCA9IGV4cG9ydHMuU1AgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuQ29udGFpbmVyPUNvbnRhaW5lcjtleHBvcnRzLmNyZWF0ZVVybD1jcmVhdGVVcmw7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5BcHBJbml0aWFsUHJvcHM9X3V0aWxzLkFwcEluaXRpYWxQcm9wczsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF9yZWYpe3ZhcntDb21wb25lbnQsY3R4fT1fcmVmO3ZhciBwYWdlUHJvcHM9YXdhaXQoMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQ29tcG9uZW50LGN0eCk7cmV0dXJue3BhZ2VQcm9wc307fWNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHsvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbi8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbmNvbXBvbmVudERpZENhdGNoKGVycm9yLF9lcnJvckluZm8pe3Rocm93IGVycm9yO31yZW5kZXIoKXt2YXJ7cm91dGVyLENvbXBvbmVudCxwYWdlUHJvcHMsX19OX1NTRyxfX05fU1NQfT10aGlzLnByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCxPYmplY3QuYXNzaWduKHt9LHBhZ2VQcm9wcywvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbi8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4hKF9fTl9TU0d8fF9fTl9TU1ApP3t1cmw6Y3JlYXRlVXJsKHJvdXRlcil9Ont9KSk7fX1leHBvcnRzLmRlZmF1bHQ9QXBwO0FwcC5vcmlnR2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztBcHAuZ2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wczt2YXIgd2FybkNvbnRhaW5lcjt2YXIgd2FyblVybDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7d2FybkNvbnRhaW5lcj0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS53YXJuKFwiV2FybmluZzogdGhlIGBDb250YWluZXJgIGluIGBfYXBwYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZFwiKTt9KTt3YXJuVXJsPSgwLF91dGlscy5leGVjT25jZSkoKCk9Pntjb25zb2xlLmVycm9yKFwiV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy91cmwtZGVwcmVjYXRlZFwiKTt9KTt9Ly8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmZ1bmN0aW9uIENvbnRhaW5lcihwKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuQ29udGFpbmVyKCk7cmV0dXJuIHAuY2hpbGRyZW47fWZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXIpey8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG52YXJ7cGF0aG5hbWUsYXNQYXRoLHF1ZXJ5fT1yb3V0ZXI7cmV0dXJue2dldCBxdWVyeSgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcXVlcnk7fSxnZXQgcGF0aG5hbWUoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHBhdGhuYW1lO30sZ2V0IGFzUGF0aCgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gYXNQYXRoO30sYmFjazooKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyb3V0ZXIuYmFjaygpO30scHVzaDoodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnB1c2godXJsLGFzKTt9LHB1c2hUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHB1c2hSb3V0ZT1hcz9ocmVmOicnO3ZhciBwdXNoVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUscHVzaFVybCk7fSxyZXBsYWNlOih1cmwsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsYXMpO30scmVwbGFjZVRvOihocmVmLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTt2YXIgcmVwbGFjZVJvdXRlPWFzP2hyZWY6Jyc7dmFyIHJlcGxhY2VVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSxyZXBsYWNlVXJsKTt9fTt9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciwgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbi8vIGltcG9ydCB3cmFwcGVyICBmcm9tICcuLi9zcmMvcmVkdXgvc3RvcmUnO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgcGVyc2lzdFN0b3JlIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0J1xyXG5pbXBvcnQgd2l0aFJlZHV4U3RvcmUgZnJvbSAnLi4vc3JjL3dpdGgtcmVkdXgtc3RvcmUnO1xyXG5pbXBvcnQge2h5ZHJhdGV9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL1NsaWRlci9zbGlkZXIuc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLnN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvY2FydC1pY29uL2NhcnQtaWNvbi5zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL3NpZ24taW4vc2lnbi1pbi5zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL3NpZ24tdXAvc2lnbi11cC5zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL0Zvcm1JbnB1dC9mb3JtaW5wdXQuc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi9hdXRoLmNzcyc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9jYXJ0LWRyb3Bkb3duL2NhcnQtZHJvcGRvd24uc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9jYXJ0LWl0ZW0vY2FydC1pdGVtLnN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvRm9vdGVyL2Zvb3Rlci5zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuL2l0ZW1nYWxsZXJ5L2l0ZW0uY3NzJztcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL1Jldmlldy9yZXZpZXcuc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9DaGVja291dEl0ZW0vY2hlY2tvdXQtaXRlbS5zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuL2NoZWNrb3V0LmNzcyc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9DaGF0YnV0dG9uL2NoYXQtYnV0dG9uLnN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvQ2hhdC9jaGF0LnN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJy4vcGF5bWVudC5jc3MnXHJcblxyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gY29uZmlnLmF1dG9BZGRDc3MgPSBmYWxzZVxyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMucGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHByb3BzLnJlZHV4U3RvcmUpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgICBjb25zdCB7Q29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmV9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgIHJldHVybiAoICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtyZWR1eFN0b3JlfT5cclxuICAgICAgICAgICAgICAgICAgICA8UGVyc2lzdEdhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9ezxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzaXN0b3I9e3RoaXMucGVyc2lzdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QZXJzaXN0R2F0ZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eFN0b3JlKE15QXBwKVxyXG5cclxuXHJcbiIsImNvbnN0IEFQSV9VUkw9J2h0dHBzOi8vcmFzcGJlcnJ5bmV4dGpzc3RyYXBpMi5oZXJva3VhcHAuY29tJ1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1VSTD0nJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQVBJX1VSTDsiLCJleHBvcnQgY29uc3QgdG9nZ2xlQ2FydEhpZGRlbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiAnVE9HR0xFX0NBUlRfSElEREVOJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZEl0ZW0gPSBpdGVtID0+ICh7XHJcbiAgICB0eXBlOiAnQUREX0lURU0nLFxyXG4gICAgcGF5bG9hZDogaXRlbVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZE11bHRpcGxlSXRlbXMgPSBpdGVtcyA9PiAoe1xyXG4gICAgdHlwZTogJ0FERF9NVUxUSVBMRV9JVEVNUycsXHJcbiAgICBwYXlsb2FkOiBpdGVtc1xyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhckl0ZW1Gcm9tQ2FydCA9IGl0ZW0gID0+ICh7XHJcbiAgICB0eXBlOiAnQ0xFQVJfSVRFTV9GUk9NX0NBUlQnLFxyXG4gICAgcGF5bG9hZDogaXRlbVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSBpdGVtID0+ICh7XHJcbiAgICB0eXBlOiAnUkVNT1ZFX0lURU0nLFxyXG4gICAgcGF5bG9hZDogaXRlbVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyQ2FydCA9ICgpID0+ICh7XHJcbiAgICB0eXBlOidDTEVBUl9DQVJUJ1xyXG59KSIsImltcG9ydCB7YWRkSXRlbVRvQ2FydCwgcmVtb3ZlSXRlbUZyb21DYXJ0LGFkZE11bHRpcGxlSXRlbXNUb0NhcnR9IGZyb20gJy4vY2FydC51dGlscydcclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICAgIGNhcnRJdGVtczpbXSxcclxuICAgIGNhcnRIaWRkZW46IHRydWVcclxufVxyXG5cclxuY29uc3QgY2FydFJlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1RPR0dMRV9DQVJUX0hJRERFTic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnRIaWRkZW46ICFzdGF0ZS5jYXJ0SGlkZGVuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdBRERfSVRFTSc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnRJdGVtczogYWRkSXRlbVRvQ2FydChzdGF0ZS5jYXJ0SXRlbXMsIGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnQUREX01VTFRJUExFX0lURU1TJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2FydEl0ZW1zOiBhZGRNdWx0aXBsZUl0ZW1zVG9DYXJ0KHN0YXRlLmNhcnRJdGVtcywgYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdDTEVBUl9JVEVNX0ZST01fQ0FSVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnRJdGVtczogc3RhdGUuY2FydEl0ZW1zLmZpbHRlcihjYXJ0SXRlbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRJdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ1JFTU9WRV9JVEVNJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2FydEl0ZW1zOiByZW1vdmVJdGVtRnJvbUNhcnQoc3RhdGUuY2FydEl0ZW1zLCBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ0NMRUFSX0NBUlQnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJ0SXRlbXM6IFtdXHJcbiAgICAgICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJ0UmVkdWNlcjsiLCJleHBvcnQgY29uc3QgYWRkSXRlbVRvQ2FydCA9IChjYXJ0SXRlbXMsIGNhcnRJdGVtVG9BZGQpID0+IHtcclxuICAgIGNvbnN0IGV4aXN0aW5nQ2FydEl0ZW0gPWNhcnRJdGVtcy5maW5kKFxyXG4gICAgICAgIGNhcnRJdGVtID0+IGNhcnRJdGVtLmlkID09PWNhcnRJdGVtVG9BZGQuaWRcclxuICAgICAgICApO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0NhcnRJdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhcnRJdGVtcy5tYXAoY2FydEl0ZW0gPT5cclxuICAgICAgICAgICAgY2FydEl0ZW0uaWQ9PT1jYXJ0SXRlbVRvQWRkLmlkXHJcbiAgICAgICAgICAgID8gey4uLmNhcnRJdGVtLCBxdWFudGl0eTogKGNhcnRJdGVtLnF1YW50aXR5ICsxKSAgfVxyXG4gICAgICAgICAgICA6IGNhcnRJdGVtIFxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFsuLi5jYXJ0SXRlbXMsIHsuLi5jYXJ0SXRlbVRvQWRkLHF1YW50aXR5OjF9XVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRNdWx0aXBsZUl0ZW1zVG9DYXJ0ID0gKGNhcnRJdGVtcywgY2FydEl0ZW1Ub0FkZCkgPT4ge1xyXG4gICAgY29uc3QgZXhpc3RpbmdDYXJ0SXRlbSA9Y2FydEl0ZW1zLmZpbmQoXHJcbiAgICAgICAgY2FydEl0ZW0gPT4gY2FydEl0ZW0uaWQgPT09Y2FydEl0ZW1Ub0FkZFswXS5pZFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nQ2FydEl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gY2FydEl0ZW1zLm1hcChjYXJ0SXRlbSA9PlxyXG4gICAgICAgICAgICBjYXJ0SXRlbS5pZD09PWNhcnRJdGVtVG9BZGRbMF0uaWRcclxuICAgICAgICAgICAgPyB7Li4uY2FydEl0ZW0sIHF1YW50aXR5OiAoY2FydEl0ZW0ucXVhbnRpdHkgKyBjYXJ0SXRlbVRvQWRkWzFdKSAgfVxyXG4gICAgICAgICAgICA6IGNhcnRJdGVtIFxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFsuLi5jYXJ0SXRlbXMsIHsuLi5jYXJ0SXRlbVRvQWRkWzBdLHF1YW50aXR5OmNhcnRJdGVtVG9BZGRbMV19XVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtRnJvbUNhcnQgPSAoY2FydEl0ZW1zLCBjYXJ0SXRlbVRvUmVtb3ZlKSA9PiB7XHJcbiAgICBjb25zdCBleGlzdGluZ0NhcnRJdGVtID1jYXJ0SXRlbXMuZmluZChcclxuICAgICAgICBjYXJ0SXRlbSA9PiBjYXJ0SXRlbS5pZCA9PT1jYXJ0SXRlbVRvUmVtb3ZlLmlkXHJcbiAgICAgICAgKTtcclxuICAgIGlmIChleGlzdGluZ0NhcnRJdGVtLnF1YW50aXR5PT09MSkge1xyXG4gICAgICAgIHJldHVybiBjYXJ0SXRlbXNcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FydEl0ZW1zLm1hcChcclxuICAgICAgICBjYXJ0SXRlbSA9PiBcclxuICAgICAgICBjYXJ0SXRlbS5pZCA9PT0gY2FydEl0ZW1Ub1JlbW92ZS5pZCBcclxuICAgICAgICA/IHsuLi5jYXJ0SXRlbSwgcXVhbnRpdHk6IChjYXJ0SXRlbS5xdWFudGl0eSAtIDEpfVxyXG4gICAgICAgIDogY2FydEl0ZW1cclxuICAgIClcclxufVxyXG4iLCJleHBvcnQgY29uc3Qgc2V0Q2hhbm5lbCA9IGNoYW5uZWwgPT4gKHtcclxuICAgIHR5cGU6ICdTRVRfQ0hBTk5FTCcsXHJcbiAgICBwYXlsb2FkOiBjaGFubmVsXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNldE1lc3NhZ2VzID0gbWVzc2FnZXMgPT4gKHtcclxuICAgIHR5cGU6ICdTRVRfTUVTU0FHRVMnLFxyXG4gICAgcGF5bG9hZDogbWVzc2FnZXNcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBzZXROZXdNZXNzYWdlcyA9IChib29sKSA9PiAoe1xyXG4gICAgdHlwZTogJ1NFVF9ORVdfTUVTU0FHRVMnLFxyXG4gICAgcGF5bG9hZDogYm9vbFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZUNoYXRIaWRkZW4gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogJ1RPR0dMRV9DSEFUX0hJRERFTidcclxufSkiLCJjb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gICAgY2hhbm5lbDogJycsXHJcbiAgICBtZXNzYWdlczogW10sXHJcbiAgICBuZXdNZXNzYWdlczogZmFsc2UsXHJcbiAgICBjaGF0SGlkZGVuOnRydWUsXHJcbn1cclxuXHJcbmNvbnN0IGNoYXRSZWR1Y2VyID0gKHN0YXRlPUlOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnU0VUX01FU1NBR0VTJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdTRVRfQ0hBTk5FTCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdTRVRfTkVXX01FU1NBR0VTJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbmV3TWVzc2FnZXM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdUT0dHTEVfQ0hBVF9ISURERU4nOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjaGF0SGlkZGVuOiAhc3RhdGUuY2hhdEhpZGRlblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXRSZWR1Y2VyOyIsIi8vIGltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gICAgY3VycmVudEZpbHRlcjogJ0JvdXF1ZXQnXHJcbn0gXHJcblxyXG5cclxuY29uc3QgZmlsdGVyUmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIC8vIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHsuLi5zdGF0ZSwuLi5hY3Rpb24ucGF5bG9hZH1cclxuICAgICAgICBjYXNlICdTRVRfQ1VSUkVOVF9GSUxURVInOlxyXG4gICAgICAgICAgICByZXR1cm4gIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEZpbHRlcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlsdGVyUmVkdWNlcjsiLCIvLyBpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5cclxuXHJcbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XHJcbiAgICBhY3RpdmVQYWdlOjEsXHJcbiAgICBwZXJQYWdlOjEwLFxyXG4gICAgcGFnZVJhbmdlOjNcclxufVxyXG5cclxuY29uc3QgcGFnaW5hdGlvblJlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAvLyBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB7Li4uc3RhdGUsLi4uYWN0aW9uLnBheWxvYWR9XHJcbiAgICAgICAgY2FzZSBcIlNFVF9DVVJSRU5UX1BBR0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2luYXRpb25SZWR1Y2VyOyIsImltcG9ydCAgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBwYWdpbmF0aW9uUmVkdWNlciBmcm9tICcuL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5yZWR1Y2VyJztcclxuaW1wb3J0IHNvcnRSZWR1Y2VyIGZyb20gJy4vc29ydC9zb3J0LnJlZHVjZXInO1xyXG5pbXBvcnQgZmlsdGVyUmVkdWNlciBmcm9tICcuL2ZpbHRlci9maWx0ZXIucmVkdWNlcic7XHJcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3VzZXIvdXNlci5yZWR1Y2VyJztcclxuaW1wb3J0IGNhcnRSZWR1Y2VyIGZyb20gJy4vY2FydC9jYXJ0LnJlZHVjZXInO1xyXG5pbXBvcnQge3BlcnNpc3RSZWR1Y2VyfSBmcm9tICdyZWR1eC1wZXJzaXN0JztcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XHJcbmltcG9ydCBjaGF0UmVkdWNlciBmcm9tICcuL2NoYXQvY2hhdC5yZWR1Y2Vycyc7XHJcblxyXG5cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0ICBjb21iaW5lUmVkdWNlcnMoe1xyXG4vLyAgICAgdXNlcjp1c2VyUmVkdWNlcixcclxuLy8gICAgIGNhcnQ6Y2FydFJlZHVjZXIsXHJcbi8vICAgICBmaWx0ZXI6IGZpbHRlclJlZHVjZXIsXHJcbi8vICAgICBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uUmVkdWNlcixcclxuLy8gICAgIHNvcnQ6IHNvcnRSZWR1Y2VyXHJcbi8vIH0pXHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgdXNlcjp1c2VyUmVkdWNlcixcclxuICAgICAgICBjYXJ0OmNhcnRSZWR1Y2VyLFxyXG4gICAgICAgIGZpbHRlcjogZmlsdGVyUmVkdWNlcixcclxuICAgICAgICBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uUmVkdWNlcixcclxuICAgICAgICBzb3J0OiBzb3J0UmVkdWNlcixcclxuICAgICAgICBjaGF0OiBjaGF0UmVkdWNlclxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAgICAgIGtleTogJ3ByaW1hcnknLFxyXG4gICAgICAgIHN0b3JhZ2UsXHJcbiAgICAgICAgd2hpdGVsaXN0OiBbJ2ZpbHRlcicsJ2NhcnQnLCdjaGF0J11cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByb290UmVkdWNlcik7IiwiLy8gaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gICAgc29ydGVkOiAnTmV3ZXN0J1xyXG59XHJcblxyXG5jb25zdCBzb3J0UmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIC8vIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHsuLi5zdGF0ZSwuLi5hY3Rpb24ucGF5bG9hZH1cclxuICAgICAgICBjYXNlICdTRVRfQ1VSUkVOVF9TT1JUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc29ydGVkOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzb3J0UmVkdWNlcjsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcic7XHJcbmltcG9ydCBwZXJzaXN0UmVkdWNlciBmcm9tICcuL3Jvb3QtcmVkdWNlcic7XHJcblxyXG5cclxuY29uc3QgbWlkZGxld2FyZXMgPSBbXTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gIG1pZGRsZXdhcmVzLnB1c2gobG9nZ2VyKTtcclxufVxyXG5cclxuY29uc3Qgc3RhcnRTdGF0ZT17XHJcbiAgICBjYXJ0OntcclxuICAgIGNhcnRJdGVtczpbXSxcclxuICAgIGNhcnRIaWRkZW46IHRydWV9LFxyXG4gICAgZmlsdGVyOntjdXJyZW50RmlsdGVyOiAnQm91cXVldCd9LFxyXG4gICAgcGFnaW5hdGlvbjp7YWN0aXZlUGFnZToxLFxyXG4gICAgcGVyUGFnZToxMCxcclxuICAgIHBhZ2VSYW5nZTozfSxcclxuICAgIHNvcnQ6e3NvcnRlZDogJ05ld2VzdCd9LFxyXG4gICAgdXNlcjp7Y3VycmVudFVzZXI6IG51bGx9LFxyXG4gICAgY2hhdDoge2NoYW5uZWw6ICcnLFxyXG4gICAgbWVzc2FnZXM6IFtdLCBuZXdNZXNzYWdlczpmYWxzZSwgY2hhdEhpZGRlbjp0cnVlfSxcclxuICAgIFxyXG5cclxufVxyXG5cclxuXHJcbi8vIGNvbnN0IG1ha2VzdG9yZSA9IChpbml0aWFsU3RhdGUsIG9wdGlvbnMpID0+IGNyZWF0ZVN0b3JlKHBlcnNpc3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBtYWtlc3RvcmU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZXN0b3JlKGluaXRpYWxTdGF0ZSA9IHN0YXJ0U3RhdGUpIHtcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgICAgcGVyc2lzdFJlZHVjZXIsXHJcbiAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKVxyXG4gICAgKVxyXG4gIH0iLCJleHBvcnQgY29uc3Qgc2V0Q3VycmVudFVzZXIgPSB1c2VyID0+ICh7XHJcbiAgICB0eXBlOiAnU0VUX0NVUlJFTlRfVVNFUicsXHJcbiAgICBwYXlsb2FkOiB1c2VyXHJcbn0pIiwiY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICAgIGN1cnJlbnRVc2VyOiBudWxsXHJcbn1cclxuXHJcbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlPUlOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NFVF9DVVJSRU5UX1VTRVInOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VXNlcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyOyIsIlxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHttYWtlc3RvcmV9IGZyb20gJy4vcmVkdXgvc3RvcmUnXHJcblxyXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXHJcbmNvbnN0IF9fTkVYVF9SRURVWF9TVE9SRV9fID0gJ19fTkVYVF9SRURVWF9TVE9SRV9fJ1xyXG5cclxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICAvLyBBbHdheXMgbWFrZSBhIG5ldyBzdG9yZSBpZiBzZXJ2ZXIsIG90aGVyd2lzZSBzdGF0ZSBpcyBzaGFyZWQgYmV0d2VlbiByZXF1ZXN0c1xyXG4gIGlmIChpc1NlcnZlcikge1xyXG4gICAgcmV0dXJuIG1ha2VzdG9yZShpbml0aWFsU3RhdGUpXHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgc3RvcmUgaWYgdW5hdmFpbGFibGUgb24gdGhlIGNsaWVudCBhbmQgc2V0IGl0IG9uIHRoZSB3aW5kb3cgb2JqZWN0XHJcbiAgaWYgKCF3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dKSB7XHJcbiAgICB3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dID0gbWFrZXN0b3JlKGluaXRpYWxTdGF0ZSlcclxuICB9XHJcbiAgcmV0dXJuIHdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX11cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJlZHV4U3RvcmUoQXBwKSB7XHJcbiAgcmV0dXJuIGNsYXNzIEFwcFdpdGhSZWR1eCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpIHtcclxuXHJcbiAgICAgIGNvbnN0IHJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKClcclxuXHJcbiAgICAgIC8vIFByb3ZpZGUgdGhlIHN0b3JlIHRvIGdldEluaXRpYWxQcm9wcyBvZiBwYWdlc1xyXG4gICAgICBhcHBDb250ZXh0LmN0eC5yZWR1eFN0b3JlID0gcmVkdXhTdG9yZVxyXG5cclxuICAgICAgbGV0IGFwcFByb3BzID0ge31cclxuICAgICAgaWYgKHR5cGVvZiBBcHAuZ2V0SW5pdGlhbFByb3BzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYXBwUHJvcHMsXHJcbiAgICAgICAgaW5pdGlhbFJlZHV4U3RhdGU6IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKSxcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICB0aGlzLnJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKHByb3BzLmluaXRpYWxSZWR1eFN0YXRlKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIDxBcHAgey4uLnRoaXMucHJvcHN9IHJlZHV4U3RvcmU9e3RoaXMucmVkdXhTdG9yZX0gLz5cclxuICAgIH1cclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxiYXJzLWN1c3RvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1sb2dnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=