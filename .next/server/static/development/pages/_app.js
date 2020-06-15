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
/* harmony import */ var _src_redux_user_user_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/redux/user/user.action */ "./src/redux/user/user.action.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ClickOutside_ClickOutside_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ClickOutside/ClickOutside.component */ "./components/ClickOutside/ClickOutside.component.jsx");
var _jsxFileName = "C:\\Users\\bonaf\\Desktop\\Projects\\Ecommerce\\Malinka\\frontend\\malinka\\components\\Chat\\chat.component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class Chat extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "unsubscribe", channel => {
      if (!firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.apps.length) {
        firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.initializeApp({
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

      firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.firestore().collection('Chat').doc(`${channel}`).collection(`messages`).where('createdAt', '>', 1590246123874).orderBy('createdAt', 'desc').onSnapshot(docs => {
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
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].div, {
      initial: "initial",
      animate: "animate",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, __jsx(_ClickOutside_ClickOutside_component__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onClick: () => {
        toggleChatHidden();
        setNewMessages(false);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].div, {
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
        lineNumber: 105,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "chat-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 21
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
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
        lineNumber: 115,
        columnNumber: 25
      }
    }, "\u2715") : null), __jsx("div", {
      className: "messages-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    }, messages ? messages.map(message => __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].div, {
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
        lineNumber: 126,
        columnNumber: 48
      }
    }, message.text)) : null), __jsx("form", {
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
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
        lineNumber: 136,
        columnNumber: 25
      }
    }), __jsx("button", {
      className: "message-send-button",
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 25
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
      className: "message-send-button-icon",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faArrowUp"],
      size: "lg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
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
      columnNumber: 13
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
      columnNumber: 17
    }
  }, __jsx(react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      height: '280px',
      width: `100%`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "cart-items",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, cartItems.length ? cartItems.map(cartItem => __jsx(_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: cartItem.id,
    cartItem: cartItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 59
    }
  })) : __jsx("span", {
    className: "empty-message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, "Your cart is empty"))), __jsx("span", {
    className: "cart-dropdown-total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 43,
      columnNumber: 21
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
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/messaging */ "firebase/messaging");
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_messaging__WEBPACK_IMPORTED_MODULE_3__);
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
const sendMessage = async (message, channel, token) => {
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

  const pushMessage = {
    "token": "",
    "notification": {
      "title": `${channel}`,
      "body": `${message}`
    }
  };
  const response = await fetch(`http://localhost:5000/push`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      message: pushMessage
    })
  });
  console.log(response);
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
    currentUser: null,
    token: null
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
/*! exports provided: setCurrentUser, setToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
});
const setToken = token => ({
  type: 'SET_TOKEN',
  payload: token
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
  currentUser: null,
  token: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return _objectSpread(_objectSpread({}, state), {}, {
        currentUser: action.payload
      });

    case 'SET_TOKEN':
      return _objectSpread(_objectSpread({}, state), {}, {
        token: action.payload
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

/***/ "firebase/messaging":
/*!*************************************!*\
  !*** external "firebase/messaging" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/messaging");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FyZWFJbnB1dC9hcmVhLWlucHV0LmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0L2NoYXQuY29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXRCb2R5L2NoYXQtYm9keS5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhdGJ1dHRvbi9jaGF0LWJ1dHRvbi5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2xpY2tPdXRzaWRlL0NsaWNrT3V0c2lkZS5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L2xheW91dC5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC1kcm9wZG93bi9jYXJ0LWRyb3Bkb3duLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJ0LWljb24vY2FydC1pY29uLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UvZmlyZWJhc2UudXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9jYXJ0L2NhcnQuYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvY2FydC9jYXJ0LnJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2NhcnQvY2FydC51dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvY2hhdC9jaGF0LmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2NoYXQvY2hhdC5yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvZmlsdGVyL2ZpbHRlci5yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9wYWdpbmF0aW9uL3BhZ2luYXRpb24ucmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcm9vdC1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zb3J0L3NvcnQucmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3VzZXIvdXNlci5hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3VzZXIvdXNlci5yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy93aXRoLXJlZHV4LXN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9tZXNzYWdpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbGJhcnMtY3VzdG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJBcmVhSW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJsYWJlbCIsIm90aGVyUHJvcHMiLCJ2YWx1ZSIsImxlbmd0aCIsIkNoYXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiY2hhbm5lbCIsImZpcmViYXNlIiwiYXBwcyIsImluaXRpYWxpemVBcHAiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwid2hlcmUiLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsImRvY3MiLCJtZXNzYWdlcyIsImZvckVhY2giLCJwdXNoIiwiZGF0YSIsInByb3BzIiwic2V0TWVzc2FnZXMiLCJzZXROZXdNZXNzYWdlcyIsImV2ZW50IiwiY29kZSIsInVzZXJSZWYiLCJzZW5kTWVzc2FnZSIsInN0YXRlIiwidGV4dCIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJkZXZpY2VXaWR0aCIsInVwZGF0ZURldmljZVdpZHRoIiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwidW5zdWJzY3JpYmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaXN0ZW5lciIsIndpbmRvdyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlubmVyV2lkdGgiLCJyZW5kZXIiLCJ0b2dnbGVDaGF0SGlkZGVuIiwid2lkdGgiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwibWFwIiwibWVzc2FnZSIsImRlbGF5IiwidXNlciIsImlkIiwiaGFuZGxlU3VibWl0IiwiZmFBcnJvd1VwIiwibWFwU3RhdGVUb1Byb3BzIiwiY2hhdCIsImNoYXRIaWRkZW4iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJvb2wiLCJjb25uZWN0IiwiQ2hhdEJvZHkiLCJDaGF0QnV0dG9uIiwibmV3TWVzc2FnZXMiLCJmYUNvbW1lbnRzIiwiZmFUaW1lcyIsIkNsaWNrT3V0c2lkZSIsImNoaWxkcmVuIiwib25DbGljayIsInJlZiIsInJlZnMiLCJDaGlsZHJlbiIsInVzZVJlZiIsImhhbmRsZUNsaWNrIiwiZSIsImlzT3V0c2lkZSIsImV2ZXJ5IiwiY3VycmVudCIsImNvbnRhaW5zIiwidXNlRWZmZWN0IiwiZWxlbWVudCIsImlkeCIsImNsb25lRWxlbWVudCIsIkhlYWRlciIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJjYXJ0SGlkZGVuIiwiaGlkZGVuIiwic2V0SGlkZGVuIiwidXNlU3RhdGUiLCJoYW5kbGVTaWduT3V0IiwiYXV0aCIsInNpZ25PdXQiLCJmYUJhcnMiLCJjYXJ0IiwiTGF5b3V0Iiwic2V0Q2hhbm5lbCIsInVuc3Vic2NyaWJlRnJvbUF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyQXV0aCIsImNyZWF0ZVVzZXJQcm9maWxlRG9jdW1lbnQiLCJzbmFwU2hvdCIsIkRhdGUiLCJnZXRUaW1lIiwiQ2FydERyb3Bkb3duIiwiY2FydEl0ZW1zIiwidG9nZ2xlQ2FydEhpZGRlbiIsInRvdGFsIiwic2V0RGV2aWNlV2lkdGgiLCJkZXZpY2VIZWlnaHQiLCJzZXREZXZpY2VIZWlnaHQiLCJ1cGRhdGVEZXZpY2VEaW1lbnNpb25zIiwiaW5uZXJIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiaGVpZ2h0IiwiY2FydEl0ZW0iLCJSb3V0ZXIiLCJyZWR1Y2UiLCJzdW0iLCJwcmljZSIsInF1YW50aXR5IiwiQ2FydEljb24iLCJDYXJ0SXRlbSIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwiY2xlYXJJdGVtRnJvbUNhcnQiLCJVUExPQURfVVJMIiwiZ2FsbGVyeSIsImZvcm1hdHMiLCJ0aHVtYm5haWwiLCJ1cmwiLCJuYW1lIiwic2V0VGltZW91dCIsIml0ZW0iLCJjb25maWciLCJ1aWQiLCJzbmFwc2hvdCIsImdldCIsImV4aXN0cyIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJjcmVhdGVkQXQiLCJzZXQiLCJlcnIiLCJGaXJlIiwidG9rZW4iLCJjaGFubmVsUmVmIiwiY2hhdFJlZiIsInVwZGF0ZSIsInVzZXJNZXNzYWdlcyIsInRpbWUiLCJhbGVydCIsInB1c2hNZXNzYWdlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2V0Q3VzdG9tUGFyYW1ldGVycyIsInByb21wdCIsInNpZ25JbndpdGhHb29nbGUiLCJzaWduSW5XaXRoUG9wdXAiLCJmYWNlYm9va1Byb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoRmFjZWJvb2siLCJjYXRjaCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZW50cnkiLCJoYXMiLCJjYiIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwiZXJyb3IiLCJMaW5rIiwicCIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlc29sdmUiLCJzY3JvbGwiLCJpbmRleE9mIiwicmVwbGFjZSIsInNoYWxsb3ciLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZm9jdXMiLCJwcmVmZXRjaCIsIndhcm4iLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwib25seSIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwidHlwZSIsInByb2Nlc3MiLCJleGVjT25jZSIsIlByb3BUeXBlcyIsImV4YWN0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInByb3BOYW1lIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiRXJyb3IiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIkNvbnRhaW5lciIsImNyZWF0ZVVybCIsIkFwcEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsIl9yZWYiLCJjb21wb25lbnREaWRDYXRjaCIsIl9lcnJvckluZm8iLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsInB1c2hVcmwiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiTXlBcHAiLCJwZXJzaXN0b3IiLCJwZXJzaXN0U3RvcmUiLCJyZWR1eFN0b3JlIiwid2l0aFJlZHV4U3RvcmUiLCJBUElfVVJMIiwicGF5bG9hZCIsImFkZE11bHRpcGxlSXRlbXMiLCJpdGVtcyIsImNsZWFyQ2FydCIsIklOSVRJQUxfU1RBVEUiLCJjYXJ0UmVkdWNlciIsImFjdGlvbiIsImFkZEl0ZW1Ub0NhcnQiLCJhZGRNdWx0aXBsZUl0ZW1zVG9DYXJ0IiwicmVtb3ZlSXRlbUZyb21DYXJ0IiwiY2FydEl0ZW1Ub0FkZCIsImV4aXN0aW5nQ2FydEl0ZW0iLCJmaW5kIiwiY2FydEl0ZW1Ub1JlbW92ZSIsImNoYXRSZWR1Y2VyIiwiY3VycmVudEZpbHRlciIsImZpbHRlclJlZHVjZXIiLCJhY3RpdmVQYWdlIiwicGVyUGFnZSIsInBhZ2VSYW5nZSIsInBhZ2luYXRpb25SZWR1Y2VyIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyUmVkdWNlciIsInBhZ2luYXRpb24iLCJzb3J0Iiwic29ydFJlZHVjZXIiLCJwZXJzaXN0Q29uZmlnIiwic3RvcmFnZSIsIndoaXRlbGlzdCIsInBlcnNpc3RSZWR1Y2VyIiwic29ydGVkIiwibWlkZGxld2FyZXMiLCJsb2dnZXIiLCJzdGFydFN0YXRlIiwibWFrZXN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJzZXRUb2tlbiIsImlzU2VydmVyIiwiX19ORVhUX1JFRFVYX1NUT1JFX18iLCJnZXRPckNyZWF0ZVN0b3JlIiwiQXBwV2l0aFJlZHV4IiwiYXBwQ29udGV4dCIsImFwcFByb3BzIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJnZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsTUFBTUEsU0FBUyxHQUFHO0FBQUEsTUFBQztBQUFDQyxnQkFBRDtBQUFlQztBQUFmLEdBQUQ7QUFBQSxNQUEwQkMsVUFBMUI7O0FBQUEsU0FDZDtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FB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Q3ZDLGVBQUosQ0FBb0JtTyxVQUFwQixDQUFqQjtBQUNEOztBQUVELDZDQUNLQyxRQURMO0FBRUVDLHlCQUFpQixFQUFFakQsVUFBVSxDQUFDa0QsUUFBWDtBQUZyQjtBQUlEOztBQUVEdmlCLGVBQVcsQ0FBQ3dCLEtBQUQsRUFBUTtBQUNqQixZQUFNQSxLQUFOO0FBQ0EsV0FBSzZkLFVBQUwsR0FBa0I2QyxnQkFBZ0IsQ0FBQzFnQixLQUFLLENBQUM4Z0IsaUJBQVAsQ0FBbEM7QUFDRDs7QUFFRHRmLFVBQU0sR0FBRztBQUNQLGFBQU8sTUFBQyxHQUFELGVBQVMsS0FBS3hCLEtBQWQ7QUFBcUIsa0JBQVUsRUFBRSxLQUFLNmQsVUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQO0FBQ0Q7O0FBMUJ5QyxHQUE1QztBQTRCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pERCw4RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJjb25zdCBBcmVhSW5wdXQgPSAoe2hhbmRsZUNoYW5nZSwgbGFiZWwsIC4uLm90aGVyUHJvcHN9KSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JvdXAnPlxyXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J2Zvcm0taW5wdXQnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHsuLi5vdGhlclByb3BzfS8+XHJcbiAgICAgICAge2xhYmVsID9cclxuICAgICAgICAoPGxhYmVsXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtvdGhlclByb3BzLnZhbHVlLmxlbmd0aCA/ICdzaHJpbmsnOiAnJ30gZm9ybS1pbnB1dC1sYWJlbGB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgPC9sYWJlbD4gKVxyXG4gICAgICAgIDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcmVhSW5wdXQ7IiwiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQXJlYUlucHV0IGZyb20gJy4uL0FyZWFJbnB1dC9hcmVhLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7c2VuZE1lc3NhZ2V9IGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLnV0aWxzJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7IFxyXG5pbXBvcnQge3NldE1lc3NhZ2VzLCBzZXROZXdNZXNzYWdlcywgdG9nZ2xlQ2hhdEhpZGRlbn0gZnJvbSAnLi4vLi4vc3JjL3JlZHV4L2NoYXQvY2hhdC5hY3Rpb25zJztcclxuaW1wb3J0IHtzZXRUb2tlbn0gZnJvbSAnLi4vLi4vc3JjL3JlZHV4L3VzZXIvdXNlci5hY3Rpb24nO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQge2ZhQXJyb3dVcH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IENsaWNrT3V0c2lkZSBmcm9tICcuLi9DbGlja091dHNpZGUvQ2xpY2tPdXRzaWRlLmNvbXBvbmVudCdcclxuXHJcblxyXG5cclxuXHJcbmNsYXNzICBDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0ZXh0OicnLFxyXG4gICAgICAgICAgICBkZXZpY2VXaWR0aDogMCxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXZpY2VXaWR0aD0gdGhpcy51cGRhdGVEZXZpY2VXaWR0aC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlID0gKGNoYW5uZWwpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpS2V5OiBcIkFJemFTeUFCdWdUUnlrVmpVM2NPM25rQU5ibkFydHlaX1RQaXgxUVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhEb21haW46IFwicmFzcGJlcnJ5LWRhY2MxLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcmFzcGJlcnJ5LWRhY2MxLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkOiBcInJhc3BiZXJyeS1kYWNjMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwicmFzcGJlcnJ5LWRhY2MxLmFwcHNwb3QuY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDM1MzM2MTM0ODI5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IFwiMTo0MzUzMzYxMzQ4Mjk6d2ViOjM2MjU4ZDBiOGJkYjliZjk4MTA2MjRcIixcclxuICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudElkOiBcIkctRTRYS0REWk5XVlwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdDaGF0JykuZG9jKGAke2NoYW5uZWx9YCkuY29sbGVjdGlvbihgbWVzc2FnZXNgKS53aGVyZSgnY3JlYXRlZEF0JywnPicsMTU5MDI0NjEyMzg3NCApLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsJ2Rlc2MnKVxyXG4gICAgICAgICAgICAub25TbmFwc2hvdCgoZG9jcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZXM9W10gXHJcbiAgICAgICAgICAgICAgICBkb2NzLmZvckVhY2goZnVuY3Rpb24oZG9jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRNZXNzYWdlcyhtZXNzYWdlcykgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldE5ld01lc3NhZ2VzKHRydWUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgbGlzdGVuZXIgPSBhc3luYyBldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiRW50ZXJcIiB8fCBldmVudC5jb2RlID09PSBcIk51bXBhZEVudGVyXCIpIHtcclxuICAgICAgICAgIGNvbnN0IHVzZXJSZWYgPSBhd2FpdCBzZW5kTWVzc2FnZSh0aGlzLnN0YXRlLnRleHQsIHRoaXMucHJvcHMuY2hhbm5lbCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0ZXh0OicnfSlcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICBcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB7Y2hhbm5lbH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZShjaGFubmVsKVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMubGlzdGVuZXIpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGV2aWNlV2lkdGgoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVEZXZpY2VXaWR0aClcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMubGlzdGVuZXIpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZURldmljZVdpZHRoKVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB1c2VyUmVmID0gYXdhaXQgc2VuZE1lc3NhZ2UodGhpcy5zdGF0ZS50ZXh0LCB0aGlzLnByb3BzLmNoYW5uZWwpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RleHQ6Jyd9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RleHQ6ZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEZXZpY2VXaWR0aCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkZXZpY2VXaWR0aDp3aW5kb3cuaW5uZXJXaWR0aH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCB7bWVzc2FnZXMsY2hhbm5lbCwgdG9nZ2xlQ2hhdEhpZGRlbiwgc2V0TmV3TWVzc2FnZXN9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHtkZXZpY2VXaWR0aH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD0naW5pdGlhbCcgYW5pbWF0ZT0nYW5pbWF0ZSc+XHJcbiAgICAgICAgICAgIDxDbGlja091dHNpZGUgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2hhdEhpZGRlbigpXHJcbiAgICAgICAgICAgICAgICBzZXROZXdNZXNzYWdlcyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7d2lkdGg6JzBweCcsIG9wYWNpdHk6MH19XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7d2lkdGg6YCR7ZGV2aWNlV2lkdGg+NzY4ID8gJzMzNnB4JzogYCR7ZGV2aWNlV2lkdGh9cHhgfWAsb3BhY2l0eToxLCAgdHJhbnNpdGlvbjp7ZHVyYXRpb246MC4zLCBzdGFnZ2VyQ2hpbGRyZW46IDAuMDl9fX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGF0LWNvbnRhaW5lcidcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LXRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q29tcGFueSBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGV2aWNlV2lkdGg8NzY5P1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xvc2UtY2hhdC1zbWFsbC1kZXZpY2UnIG9uQ2xpY2s9eygpPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVDaGF0SGlkZGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROZXdNZXNzYWdlcyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0+JiMxMDAwNTs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2VzLWNvbnRhaW5lcicgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgICBtZXNzYWdlcyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLm1hcChtZXNzYWdlPT4gPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OjB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OjEsIHRyYW5zaXRpb246e2RlbGF5OjAuMSwgZHVyYXRpb246MC44fX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake21lc3NhZ2UudXNlci5pZD09PWNoYW5uZWwgPyAnbWVzc2FnZS11c2VyJzogJ21lc3NhZ2Utc3VwcG9ydCd9IGNoYXQtbWVzc2FnZWB9PnttZXNzYWdlLnRleHR9PC9tb3Rpb24uZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOm51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJlYUlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21lc3NhZ2UtYm94J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSB5b3VyIG1lc3NhZ2UgaGVyZS4uLidcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbWVzc2FnZS1zZW5kLWJ1dHRvbicgIHR5cGU9J3N1Ym1pdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nbWVzc2FnZS1zZW5kLWJ1dHRvbi1pY29uJyBpY29uPXtmYUFycm93VXB9IHNpemU9J2xnJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvQ2xpY2tPdXRzaWRlPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgbWVzc2FnZXM6IHN0YXRlLmNoYXQubWVzc2FnZXMsXHJcbiAgICBjaGFubmVsOiBzdGF0ZS5jaGF0LmNoYW5uZWwsXHJcbiAgICBjaGF0SGlkZGVuOiBzdGF0ZS5jaGF0LmNoYXRIaWRkZW4sXHJcbn0pXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgc2V0TWVzc2FnZXM6IG1lc3NhZ2VzID0+IGRpc3BhdGNoKHNldE1lc3NhZ2VzKG1lc3NhZ2VzKSksXHJcbiAgICBzZXROZXdNZXNzYWdlczpib29sID0+IGRpc3BhdGNoKHNldE5ld01lc3NhZ2VzKGJvb2wpKSxcclxuICAgIHRvZ2dsZUNoYXRIaWRkZW46ICgpID0+IGRpc3BhdGNoKHRvZ2dsZUNoYXRIaWRkZW4oKSksXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDaGF0KTsiLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENoYXQgZnJvbSAnLi4vQ2hhdC9jaGF0LmNvbXBvbmVudCc7XHJcbmltcG9ydCBDaGF0QnV0dG9uIGZyb20gJy4uL0NoYXRidXR0b24vY2hhdC1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcblxyXG5cclxuY29uc3QgQ2hhdEJvZHkgPSAoe2NoYXRIaWRkZW59KSA9PiB7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICB7ICFjaGF0SGlkZGVuID88Q2hhdCAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgIDxDaGF0QnV0dG9uLz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBjaGF0SGlkZGVuOiBzdGF0ZS5jaGF0LmNoYXRIaWRkZW5cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDaGF0Qm9keSk7IiwiaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7ZmFDb21tZW50cywgZmFUaW1lc30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHtzZXROZXdNZXNzYWdlcywgdG9nZ2xlQ2hhdEhpZGRlbn0gZnJvbSAnLi4vLi4vc3JjL3JlZHV4L2NoYXQvY2hhdC5hY3Rpb25zJ1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcblxyXG5cclxuY29uc3QgQ2hhdEJ1dHRvbiA9ICh7bmV3TWVzc2FnZXMsIHNldE5ld01lc3NhZ2VzLCB0b2dnbGVDaGF0SGlkZGVuLGNoYXRIaWRkZW59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWJ1dHRvbicgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgdG9nZ2xlQ2hhdEhpZGRlbigpO1xyXG4gICAgICAgICAgICBzZXROZXdNZXNzYWdlcyhmYWxzZSlcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHsgICBuZXdNZXNzYWdlcyAmJiBjaGF0SGlkZGVuID9cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXctbWVzc2FnZXMnPjwvZGl2PlxyXG4gICAgICAgICAgICA6IG51bGwgfVxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nY2hhdC1idXR0b24taWNvbicgaWNvbj17Y2hhdEhpZGRlbj9mYUNvbW1lbnRzOmZhVGltZXN9IHNpemU9JzJ4Jy8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgbmV3TWVzc2FnZXM6IHN0YXRlLmNoYXQubmV3TWVzc2FnZXMsXHJcbiAgICBjaGF0SGlkZGVuOiBzdGF0ZS5jaGF0LmNoYXRIaWRkZW5cclxufSlcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBzZXROZXdNZXNzYWdlczogYm9vbCA9PiBkaXNwYXRjaChzZXROZXdNZXNzYWdlcyhib29sKSksXHJcbiAgICB0b2dnbGVDaGF0SGlkZGVuOigpID0+IGRpc3BhdGNoKHRvZ2dsZUNoYXRIaWRkZW4oKSlcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoQ2hhdEJ1dHRvbik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDbGlja091dHNpZGUgPSAoeyBjaGlsZHJlbiwgb25DbGljaywgcmVmIH0pID0+IHtcclxuICBjb25zdCByZWZzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoKSA9PiB1c2VSZWYoKSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcclxuICAgIGNvbnN0IGlzT3V0c2lkZSA9IHJlZnMuZXZlcnkocmVmID0+IHtcclxuICAgICAgcmV0dXJuICFyZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCk7XHJcblxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGlmIChpc091dHNpZGUpIHtcclxuICAgICAgb25DbGljaygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChlbGVtZW50LCBpZHgpID0+XHJcbiAgICBSZWFjdC5jbG9uZUVsZW1lbnQoZWxlbWVudCwgeyByZWY6IHJlZnNbaWR4XSB9KVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWNrT3V0c2lkZTsiLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQge2ZhQmFyc30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IENhcnRJY29uIGZyb20gJy4uL2NhcnQtaWNvbi9jYXJ0LWljb24uY29tcG9uZW50JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7YXV0aH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UudXRpbHMnO1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlciB9IGZyb20gJy4uLy4uL3NyYy9yZWR1eC91c2VyL3VzZXIuYWN0aW9uJztcclxuaW1wb3J0IENhcnREcm9wZG93biBmcm9tICcuLi9jYXJ0LWRyb3Bkb3duL2NhcnQtZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgQ2xpY2tPdXRzaWRlIGZyb20gJy4uL0NsaWNrT3V0c2lkZS9DbGlja091dHNpZGUuY29tcG9uZW50J1xyXG5cclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7Y3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyLCBjYXJ0SGlkZGVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtoaWRkZW4sIHNldEhpZGRlbl0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaWduT3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGF1dGguc2lnbk91dCgpXHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXIobnVsbClcclxuICAgIH1cclxuICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9J2luaXRpYWwnIGFuaW1hdGU9J2FuaW1hdGUnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItbmF2YmFyJz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+WW91ciBMb2dvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyLW5hdmlnYXRpb24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGctaGlkZGVuJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J25hdmlnYXRpb24tYnV0dG9uJz5TSE9QPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRVc2VyID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J25hdmlnYXRpb24tYnV0dG9uJyBvbkNsaWNrPXtoYW5kbGVTaWduT3V0fT5TSUdOIE9VVDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj0nL2F1dGgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbmF2aWdhdGlvbi1idXR0b24nPlNJR04gSU48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSduYXZpZ2F0aW9uLWJ1dHRvbicgPjxDYXJ0SWNvbi8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2aWdhdGlvbi10b2dnbGUtY29udGFpbmVyJyBvbkNsaWNrPXsoKSA9PnNldEhpZGRlbighaGlkZGVuKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nbmF2aWdhdGlvbi10b2dnbGUnICBpY29uPXtmYUJhcnN9IHNpemU9JzJ4Jy8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHshaGlkZGVuID9cclxuICAgICAgICAgICAgPENsaWNrT3V0c2lkZSBvbkNsaWNrPXsoKSA9PnNldEhpZGRlbighaGlkZGVuKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2aWdhdGlvbi1oaWRkZW4nPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudS1oaWRkZW4nPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J1dHRvbi1oaWRkZW4nIG9uQ2xpY2s9eygpID0+c2V0SGlkZGVuKCFoaWRkZW4pfT5TSE9QPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY3VycmVudFVzZXIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdidXR0b24taGlkZGVuJyBvbkNsaWNrPXtoYW5kbGVTaWduT3V0fT5TSUdOIE9VVDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOjxMaW5rICBocmVmPScvYXV0aCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdidXR0b24taGlkZGVuJyBvbkNsaWNrPXsoKSA9PnNldEhpZGRlbighaGlkZGVuKX0+U0lHTiBJTjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NsaWNrT3V0c2lkZT4gICBcclxuICAgICAgICAgICAgOm51bGx9XHJcbiAgICAgICAgICAgIHsgY2FydEhpZGRlbiA/IG51bGwgOiA8Q2FydERyb3Bkb3duLz4gIH1cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLFxyXG4gICAgY2FydEhpZGRlbjogc3RhdGUuY2FydC5jYXJ0SGlkZGVuXHJcbn0pXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgc2V0Q3VycmVudFVzZXI6IHVzZXIgPT4gZGlzcGF0Y2goc2V0Q3VycmVudFVzZXIodXNlcikpLFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShIZWFkZXIpOyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBmaXJlYmFzZSwge2F1dGgsIGNyZWF0ZVVzZXJQcm9maWxlRG9jdW1lbnQsIG1lc3NhZ2luZ30gZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UudXRpbHMnO1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlciB9IGZyb20gJy4uLy4uL3NyYy9yZWR1eC91c2VyL3VzZXIuYWN0aW9uJztcclxuaW1wb3J0IHtzZXRDaGFubmVsfSBmcm9tICcuLi8uLi9zcmMvcmVkdXgvY2hhdC9jaGF0LmFjdGlvbnMnXHJcbmltcG9ydCBDaGF0Qm9keSBmcm9tICcuLi9DaGF0Qm9keS9jaGF0LWJvZHkuY29tcG9uZW50J1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50ICB7XHJcblxyXG5cclxuXHJcbiAgICB1bnN1YnNjcmliZUZyb21BdXRoID0gbnVsbDtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB7c2V0Q3VycmVudFVzZXIsIGNoYW5uZWwsIHNldENoYW5uZWx9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21BdXRoID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoYXN5bmMgdXNlckF1dGggPT57XHJcbiAgICAgICAgICAgIGlmICh1c2VyQXV0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlclJlZiA9IGF3YWl0IGNyZWF0ZVVzZXJQcm9maWxlRG9jdW1lbnQodXNlckF1dGgpO1xyXG4gICAgICAgICAgICAgICAgdXNlclJlZi5vblNuYXBzaG90KHNuYXBTaG90ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50VXNlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBzbmFwU2hvdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc25hcFNob3QuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGNoYW5uZWwubGVuZ3RoPT09MCkge1xyXG4gICAgICAgICAgICBzZXRDaGFubmVsKG5ldyBEYXRlKCkuZ2V0VGltZSgpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbUF1dGgoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudCA+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPXtgaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOml0YWxAMDsxJmZhbWlseT1PcGVuK1NhbnM6d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBgfSByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9e2BodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6d2dodEA0MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwYH0gcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM0MjU1NjZcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIkRlc2NyaXB0aW9uXCIgY29udGVudD1cItC+0L/QuNGB0LDQvdC40LUg0YHQsNC50YLQsFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIgY2hhclNldD1cInV0Zi04XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4nPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPENoYXRCb2R5IC8+XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gICAgY3VycmVudFVzZXI6IHN0YXRlLnVzZXIuY3VycmVudFVzZXIsXHJcbiAgICBjaGFubmVsOiBzdGF0ZS5jaGF0LmNoYW5uZWxcclxufSlcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBzZXRDdXJyZW50VXNlcjogdXNlciA9PiBkaXNwYXRjaChzZXRDdXJyZW50VXNlcih1c2VyKSksXHJcbiAgICBzZXRDaGFubmVsOiBjaGFubmVsID0+IGRpc3BhdGNoKHNldENoYW5uZWwoY2hhbm5lbCkpXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShMYXlvdXQpOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7dG9nZ2xlQ2FydEhpZGRlbn0gIGZyb20gJy4uLy4uL3NyYy9yZWR1eC9jYXJ0L2NhcnQuYWN0aW9ucyc7XHJcbmltcG9ydCBTY3JvbGxCYXIgZnJvbSAncmVhY3Qtc2Nyb2xsYmFycy1jdXN0b20nO1xyXG5pbXBvcnQgQ2FydEl0ZW0gZnJvbSAnLi4vY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgQ2xpY2tPdXRzaWRlIGZyb20gJy4uL0NsaWNrT3V0c2lkZS9DbGlja091dHNpZGUuY29tcG9uZW50J1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5jb25zdCBDYXJ0RHJvcGRvd24gPSAoe2NhcnRJdGVtcyx0b2dnbGVDYXJ0SGlkZGVuLCB0b3RhbH0pID0+IHtcclxuICAgIGNvbnN0IFtkZXZpY2VXaWR0aCwgc2V0RGV2aWNlV2lkdGhdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtkZXZpY2VIZWlnaHQsIHNldERldmljZUhlaWdodF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHVwZGF0ZURldmljZURpbWVuc2lvbnMoKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVEZXZpY2VEaW1lbnNpb25zKVxyXG4gICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlRGV2aWNlRGltZW5zaW9ucylcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgdXBkYXRlRGV2aWNlRGltZW5zaW9ucyA9ICgpID0+IHtcclxuICAgICAgICBzZXREZXZpY2VXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgICAgc2V0RGV2aWNlSGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPSdpbml0aWFsJyBhbmltYXRlPSdhbmltYXRlJz5cclxuICAgICAgICAgICAge2NvbnNvbGUubG9nKGRldmljZVdpZHRoLCBkZXZpY2VIZWlnaHQpfVxyXG4gICAgICAgICAgICA8Q2xpY2tPdXRzaWRlIG9uQ2xpY2s9eygpPT4gdG9nZ2xlQ2FydEhpZGRlbigpfT5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT0nY2FydC1kcm9wZG93bidcclxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3toZWlnaHQ6JzBweCd9fVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17e2hlaWdodDonMzQwcHgnLCB0cmFuc2l0aW9uOntkdXJhdGlvbjogMC4zfX19ICAgIFxyXG4gICAgICAgICAgICAgICAgPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxCYXIgIHN0eWxlPXt7aGVpZ2h0OicyODBweCcsIHdpZHRoOiBgMTAwJWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaXRlbXMnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgICBjYXJ0SXRlbXMubGVuZ3RoID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0SXRlbXMubWFwKGNhcnRJdGVtID0+IDxDYXJ0SXRlbSBrZXk9e2NhcnRJdGVtLmlkfSBjYXJ0SXRlbT17Y2FydEl0ZW19Lz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2VtcHR5LW1lc3NhZ2UnPllvdXIgY2FydCBpcyBlbXB0eTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxCYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJ0LWRyb3Bkb3duLXRvdGFsJz5Ub3RhbDogJHt0b3RhbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NoZWNrb3V0LWJ1dHRvbicgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jaGVja291dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNhcnRIaWRkZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHTyBUTyBDSEVDS09VVFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiBcclxuXHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvQ2xpY2tPdXRzaWRlPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBjYXJ0SXRlbXM6IHN0YXRlLmNhcnQuY2FydEl0ZW1zLFxyXG4gICAgdG90YWw6IHN0YXRlLmNhcnQuY2FydEl0ZW1zLnJlZHVjZSgoc3VtLCBjYXJ0SXRlbSkgPT4gXHJcbiAgICBzdW0gKyBjYXJ0SXRlbS5wcmljZSpjYXJ0SXRlbS5xdWFudGl0eSwgMFxyXG4gICAgKVxyXG59KVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIHRvZ2dsZUNhcnRIaWRkZW46ICgpID0+IGRpc3BhdGNoKHRvZ2dsZUNhcnRIaWRkZW4oKSlcclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKENhcnREcm9wZG93bik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7dG9nZ2xlQ2FydEhpZGRlbn0gZnJvbSAnLi4vLi4vc3JjL3JlZHV4L2NhcnQvY2FydC5hY3Rpb25zJztcclxuXHJcblxyXG5cclxuY29uc3QgQ2FydEljb24gPSAoe2NhcnRJdGVtcyx0b2dnbGVDYXJ0SGlkZGVufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1pY29uLWNvbnRhaW5lcicgb25DbGljaz17KCkgPT4gdG9nZ2xlQ2FydEhpZGRlbigpfT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2NhcnQtaWNvbicgYWx0PSdjYXJ0LWljb24nIHNyYz0nLi9pY29uMzIucG5nJy8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FydC1pY29uLXRleHQnPntjYXJ0SXRlbXN9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgY2FydEl0ZW1zOiBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5yZWR1Y2UoKHN1bSwgY2FydEl0ZW0pID0+IHN1bStjYXJ0SXRlbS5xdWFudGl0eSwgMClcclxufSlcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICB0b2dnbGVDYXJ0SGlkZGVuOiAoKSA9PiBkaXNwYXRjaCh0b2dnbGVDYXJ0SGlkZGVuKCkpXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKENhcnRJY29uKTsiLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHthZGRJdGVtLHJlbW92ZUl0ZW0sY2xlYXJJdGVtRnJvbUNhcnR9IGZyb20gJy4uLy4uL3NyYy9yZWR1eC9jYXJ0L2NhcnQuYWN0aW9ucyc7XHJcbmltcG9ydCBBUElfVVJMLCB7VVBMT0FEX1VSTH0gZnJvbSAnLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5jb25zdCBDYXJ0SXRlbSA9ICh7Y2FydEl0ZW0sIGFkZEl0ZW0sIHJlbW92ZUl0ZW0sIGNsZWFySXRlbUZyb21DYXJ0fSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1pdGVtJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaXRlbS1pbWFnZS1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nY2FydC1pdGVtLWltYWdlJyBhbHQ9J2l0ZW0taW1hZ2UnIHNyYz17YCR7VVBMT0FEX1VSTH0ke2NhcnRJdGVtLmdhbGxlcnlbMF0uZm9ybWF0cy50aHVtYm5haWwudXJsfWB9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWl0ZW0tY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvaXRlbWdhbGxlcnkvW2l0ZW1dJyBhcz17YC9pdGVtZ2FsbGVyeS8ke2NhcnRJdGVtLmlkfWB9PjxzcGFuIGNsYXNzTmFtZT0nY2FydC1pdGVtLW5hbWUnPntjYXJ0SXRlbS5uYW1lfTwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1pdGVtLXF1YW50aXR5Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9J2NhcnQtaXRlbS1hcnJvdycgb25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbShjYXJ0SXRlbSl9PiYjMTAwOTQ7PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJ0LWl0ZW0tdmFsdWUnPntjYXJ0SXRlbS5xdWFudGl0eX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaXRlbS1hcnJvdycgb25DbGljaz17KCkgPT4gYWRkSXRlbShjYXJ0SXRlbSl9PiYjMTAwOTU7PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJ0LWl0ZW0tcHJpY2UnPiR7Y2FydEl0ZW0ucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWl0ZW0tcmVtb3ZlLWJ1dHRvbicgb25DbGljaz17KCkgPT4gc2V0VGltZW91dCgoKSA9PiBjbGVhckl0ZW1Gcm9tQ2FydChjYXJ0SXRlbSksMTAwKX0+JiMxMDAwNTs8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBhZGRJdGVtOiBpdGVtID0+IGRpc3BhdGNoKGFkZEl0ZW0oaXRlbSkpLFxyXG4gICAgcmVtb3ZlSXRlbTogaXRlbSA9PiBkaXNwYXRjaChyZW1vdmVJdGVtKGl0ZW0pKSxcclxuICAgIGNsZWFySXRlbUZyb21DYXJ0OiBpdGVtID0+IGRpc3BhdGNoKGNsZWFySXRlbUZyb21DYXJ0KGl0ZW0pKVxyXG4gICAgICAgICAgIFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENhcnRJdGVtKTtcclxuXHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvbWVzc2FnaW5nJztcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lBQnVnVFJ5a1ZqVTNjTzNua0FOYm5BcnR5Wl9UUGl4MVFcIixcclxuICAgIGF1dGhEb21haW46IFwicmFzcGJlcnJ5LWRhY2MxLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9yYXNwYmVycnktZGFjYzEuZmlyZWJhc2Vpby5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJyYXNwYmVycnktZGFjYzFcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwicmFzcGJlcnJ5LWRhY2MxLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0MzUzMzYxMzQ4MjlcIixcclxuICAgIGFwcElkOiBcIjE6NDM1MzM2MTM0ODI5OndlYjozNjI1OGQwYjhiZGI5YmY5ODEwNjI0XCIsXHJcbiAgICBtZWFzdXJlbWVudElkOiBcIkctRTRYS0REWk5XVlwiXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlclByb2ZpbGVEb2N1bWVudCA9IGFzeW5jICh1c2VyQXV0aCxkYXRhKSA9PiB7XHJcbiAgICBpZiAoIXVzZXJBdXRoKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgdXNlclJlZiA9IGZpcmVzdG9yZS5kb2MoYHVzZXJzLyR7dXNlckF1dGgudWlkfWApO1xyXG4gICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCB1c2VyUmVmLmdldCgpO1xyXG5cclxuICAgIGlmICghc25hcHNob3QuZXhpc3RzKSB7XHJcbiAgICAgICAgY29uc3Qge2Rpc3BsYXlOYW1lLGVtYWlsfSA9IHVzZXJBdXRoO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRBdCA9IG5ldyBEYXRlKClcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGF3YWl0IHVzZXJSZWYuc2V0KHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQsXHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgY3JlYXRpbmcgdXNlcicsIGVyci5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1c2VyUmVmO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEZpcmUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZylcclxuICAgICAgICB9XHJcblxyXG59IFxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRNZXNzYWdlID0gYXN5bmMgKG1lc3NhZ2UsIGNoYW5uZWwsIHRva2VuKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2hhbm5lbFJlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKCdDaGF0JykuZG9jKGAke2NoYW5uZWx9YClcclxuICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgY2hhbm5lbFJlZi5nZXQoKTtcclxuXHJcbiAgICBpZiAoIXNuYXBzaG90LmV4aXN0cykge1xyXG4gICAgICAgIGF3YWl0IGNoYW5uZWxSZWYuc2V0KHtuYW1lOmNoYW5uZWx9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhdFJlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKCdDaGF0JykuZG9jKGAke2NoYW5uZWx9YCkuY29sbGVjdGlvbihgbWVzc2FnZXNgKS5kb2MoYCR7bmV3IERhdGUoKX1gKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjaGFubmVsUmVmLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXJNZXNzYWdlczp0cnVlLFxyXG4gICAgICAgICAgICB0ZXh0Om1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHRpbWU6bmV3IERhdGUoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXdhaXQgY2hhdFJlZi5zZXQoe1xyXG4gICAgICAgICAgICBpZDpuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICB0ZXh0Om1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIHVzZXI6IHtpZDpjaGFubmVsfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBhbGVydChlcnIubWVzc2FnZSlcclxuICAgIH1cclxuICAgIGNvbnN0IHB1c2hNZXNzYWdlID0ge1xyXG4gICAgICAgIFwidG9rZW5cIiA6IFwiXCIsXHJcbiAgICAgICAgXCJub3RpZmljYXRpb25cIiA6IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBgJHtjaGFubmVsfWAsXHJcbiAgICAgICAgICAgIFwiYm9keVwiOiBgJHttZXNzYWdlfWBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvcHVzaGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbWVzc2FnZTogcHVzaE1lc3NhZ2VcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuXHJcblxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5leHBvcnQgY29uc3QgZmlyZXN0b3JlID1maXJlYmFzZS5maXJlc3RvcmUoKTtcclxuXHJcblxyXG5jb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5wcm92aWRlci5zZXRDdXN0b21QYXJhbWV0ZXJzKHtwcm9tcHQ6J3NlbGVjdF9hY2NvdW50J30pO1xyXG5leHBvcnQgY29uc3Qgc2lnbklud2l0aEdvb2dsZSA9ICgpID0+IGF1dGguc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKTtcclxuXHJcbmNvbnN0IGZhY2Vib29rUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlcigpO1xyXG5mYWNlYm9va1Byb3ZpZGVyLnNldEN1c3RvbVBhcmFtZXRlcnMoe3Byb21wdDonc2VsZWN0X2FjY291bnQnfSk7XHJcbmV4cG9ydCBjb25zdCBzaWduSW5XaXRoRmFjZWJvb2sgPSAoKSA9PiBhdXRoLnNpZ25JbldpdGhQb3B1cChmYWNlYm9va1Byb3ZpZGVyKVxyXG4uY2F0Y2goZXJyID0+IGFsZXJ0KCdZb3VyIGFjY291bnQgaXMgYXNzb2NpYXRlZCB3aXRoIGEgZGlmZmVyZW50IExvZ2luIG1ldGhvZCEnKSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlO1xyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkNvbnRhaW5lcj1Db250YWluZXI7ZXhwb3J0cy5jcmVhdGVVcmw9Y3JlYXRlVXJsO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfcmVmKXt2YXJ7Q29tcG9uZW50LGN0eH09X3JlZjt2YXIgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7Ly8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbi8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4vLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG5jb21wb25lbnREaWRDYXRjaChlcnJvcixfZXJyb3JJbmZvKXt0aHJvdyBlcnJvcjt9cmVuZGVyKCl7dmFye3JvdXRlcixDb21wb25lbnQscGFnZVByb3BzLF9fTl9TU0csX19OX1NTUH09dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7fSxwYWdlUHJvcHMsLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4vLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuIShfX05fU1NHfHxfX05fU1NQKT97dXJsOmNyZWF0ZVVybChyb3V0ZXIpfTp7fSkpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7dmFyIHdhcm5Db250YWluZXI7dmFyIHdhcm5Vcmw7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3dhcm5Db250YWluZXI9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUud2FybihcIldhcm5pbmc6IHRoZSBgQ29udGFpbmVyYCBpbiBgX2FwcGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRcIik7fSk7d2FyblVybD0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS5lcnJvcihcIldhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvdXJsLWRlcHJlY2F0ZWRcIik7fSk7fS8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5mdW5jdGlvbiBDb250YWluZXIocCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FybkNvbnRhaW5lcigpO3JldHVybiBwLmNoaWxkcmVuO31mdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyKXsvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxudmFye3BhdGhuYW1lLGFzUGF0aCxxdWVyeX09cm91dGVyO3JldHVybntnZXQgcXVlcnkoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHF1ZXJ5O30sZ2V0IHBhdGhuYW1lKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBwYXRobmFtZTt9LGdldCBhc1BhdGgoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIGFzUGF0aDt9LGJhY2s6KCk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cm91dGVyLmJhY2soKTt9LHB1c2g6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5wdXNoKHVybCxhcyk7fSxwdXNoVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciBwdXNoUm91dGU9YXM/aHJlZjonJzt2YXIgcHVzaFVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLHB1c2hVcmwpO30scmVwbGFjZToodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLGFzKTt9LHJlcGxhY2VUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHJlcGxhY2VSb3V0ZT1hcz9ocmVmOicnO3ZhciByZXBsYWNlVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUscmVwbGFjZVVybCk7fX07fSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIsIGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG4vLyBpbXBvcnQgd3JhcHBlciAgZnJvbSAnLi4vc3JjL3JlZHV4L3N0b3JlJztcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXHJcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdCdcclxuaW1wb3J0IHdpdGhSZWR1eFN0b3JlIGZyb20gJy4uL3NyYy93aXRoLXJlZHV4LXN0b3JlJztcclxuaW1wb3J0IHtoeWRyYXRlfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9TbGlkZXIvc2xpZGVyLnN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL2NhcnQtaWNvbi9jYXJ0LWljb24uc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9zaWduLWluL3NpZ24taW4uc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9Gb3JtSW5wdXQvZm9ybWlucHV0LnN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJy4vYXV0aC5jc3MnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvY2FydC1kcm9wZG93bi9jYXJ0LWRyb3Bkb3duLnN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvY2FydC1pdGVtL2NhcnQtaXRlbS5zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXIuc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi9pdGVtZ2FsbGVyeS9pdGVtLmNzcyc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9SZXZpZXcvcmV2aWV3LnN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvQ2hlY2tvdXRJdGVtL2NoZWNrb3V0LWl0ZW0uc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi9jaGVja291dC5jc3MnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvQ2hhdGJ1dHRvbi9jaGF0LWJ1dHRvbi5zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL0NoYXQvY2hhdC5zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuL3BheW1lbnQuY3NzJ1xyXG5cclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGNvbmZpZy5hdXRvQWRkQ3NzID0gZmFsc2VcclxuXHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShwcm9wcy5yZWR1eFN0b3JlKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgY29uc3Qge0NvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICByZXR1cm4gKCAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBlcnNpc3RHYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXs8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc2lzdG9yPXt0aGlzLnBlcnNpc3Rvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGVyc2lzdEdhdGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXhTdG9yZShNeUFwcClcclxuXHJcblxyXG4iLCJjb25zdCBBUElfVVJMPSdodHRwczovL3Jhc3BiZXJyeW5leHRqc3N0cmFwaTIuaGVyb2t1YXBwLmNvbSdcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9VUkw9JydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFQSV9VUkw7IiwiZXhwb3J0IGNvbnN0IHRvZ2dsZUNhcnRIaWRkZW4gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogJ1RPR0dMRV9DQVJUX0hJRERFTidcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRJdGVtID0gaXRlbSA9PiAoe1xyXG4gICAgdHlwZTogJ0FERF9JVEVNJyxcclxuICAgIHBheWxvYWQ6IGl0ZW1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRNdWx0aXBsZUl0ZW1zID0gaXRlbXMgPT4gKHtcclxuICAgIHR5cGU6ICdBRERfTVVMVElQTEVfSVRFTVMnLFxyXG4gICAgcGF5bG9hZDogaXRlbXNcclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJJdGVtRnJvbUNhcnQgPSBpdGVtICA9PiAoe1xyXG4gICAgdHlwZTogJ0NMRUFSX0lURU1fRlJPTV9DQVJUJyxcclxuICAgIHBheWxvYWQ6IGl0ZW1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtID0gaXRlbSA9PiAoe1xyXG4gICAgdHlwZTogJ1JFTU9WRV9JVEVNJyxcclxuICAgIHBheWxvYWQ6IGl0ZW1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhckNhcnQgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTonQ0xFQVJfQ0FSVCdcclxufSkiLCJpbXBvcnQge2FkZEl0ZW1Ub0NhcnQsIHJlbW92ZUl0ZW1Gcm9tQ2FydCxhZGRNdWx0aXBsZUl0ZW1zVG9DYXJ0fSBmcm9tICcuL2NhcnQudXRpbHMnXHJcbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XHJcbiAgICBjYXJ0SXRlbXM6W10sXHJcbiAgICBjYXJ0SGlkZGVuOiB0cnVlXHJcbn1cclxuXHJcbmNvbnN0IGNhcnRSZWR1Y2VyID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdUT0dHTEVfQ0FSVF9ISURERU4nOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJ0SGlkZGVuOiAhc3RhdGUuY2FydEhpZGRlblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnQUREX0lURU0nOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJ0SXRlbXM6IGFkZEl0ZW1Ub0NhcnQoc3RhdGUuY2FydEl0ZW1zLCBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ0FERF9NVUxUSVBMRV9JVEVNUyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnRJdGVtczogYWRkTXVsdGlwbGVJdGVtc1RvQ2FydChzdGF0ZS5jYXJ0SXRlbXMsIGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnQ0xFQVJfSVRFTV9GUk9NX0NBUlQnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJ0SXRlbXM6IHN0YXRlLmNhcnRJdGVtcy5maWx0ZXIoY2FydEl0ZW0gPT5cclxuICAgICAgICAgICAgICAgICAgICBjYXJ0SXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdSRU1PVkVfSVRFTSc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnRJdGVtczogcmVtb3ZlSXRlbUZyb21DYXJ0KHN0YXRlLmNhcnRJdGVtcywgYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdDTEVBUl9DQVJUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2FydEl0ZW1zOiBbXVxyXG4gICAgICAgICAgICB9ICAgIFxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FydFJlZHVjZXI7IiwiZXhwb3J0IGNvbnN0IGFkZEl0ZW1Ub0NhcnQgPSAoY2FydEl0ZW1zLCBjYXJ0SXRlbVRvQWRkKSA9PiB7XHJcbiAgICBjb25zdCBleGlzdGluZ0NhcnRJdGVtID1jYXJ0SXRlbXMuZmluZChcclxuICAgICAgICBjYXJ0SXRlbSA9PiBjYXJ0SXRlbS5pZCA9PT1jYXJ0SXRlbVRvQWRkLmlkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdDYXJ0SXRlbSkge1xyXG4gICAgICAgIHJldHVybiBjYXJ0SXRlbXMubWFwKGNhcnRJdGVtID0+XHJcbiAgICAgICAgICAgIGNhcnRJdGVtLmlkPT09Y2FydEl0ZW1Ub0FkZC5pZFxyXG4gICAgICAgICAgICA/IHsuLi5jYXJ0SXRlbSwgcXVhbnRpdHk6IChjYXJ0SXRlbS5xdWFudGl0eSArMSkgIH1cclxuICAgICAgICAgICAgOiBjYXJ0SXRlbSBcclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbLi4uY2FydEl0ZW1zLCB7Li4uY2FydEl0ZW1Ub0FkZCxxdWFudGl0eToxfV1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTXVsdGlwbGVJdGVtc1RvQ2FydCA9IChjYXJ0SXRlbXMsIGNhcnRJdGVtVG9BZGQpID0+IHtcclxuICAgIGNvbnN0IGV4aXN0aW5nQ2FydEl0ZW0gPWNhcnRJdGVtcy5maW5kKFxyXG4gICAgICAgIGNhcnRJdGVtID0+IGNhcnRJdGVtLmlkID09PWNhcnRJdGVtVG9BZGRbMF0uaWRcclxuICAgICAgICApO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0NhcnRJdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhcnRJdGVtcy5tYXAoY2FydEl0ZW0gPT5cclxuICAgICAgICAgICAgY2FydEl0ZW0uaWQ9PT1jYXJ0SXRlbVRvQWRkWzBdLmlkXHJcbiAgICAgICAgICAgID8gey4uLmNhcnRJdGVtLCBxdWFudGl0eTogKGNhcnRJdGVtLnF1YW50aXR5ICsgY2FydEl0ZW1Ub0FkZFsxXSkgIH1cclxuICAgICAgICAgICAgOiBjYXJ0SXRlbSBcclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbLi4uY2FydEl0ZW1zLCB7Li4uY2FydEl0ZW1Ub0FkZFswXSxxdWFudGl0eTpjYXJ0SXRlbVRvQWRkWzFdfV1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbUZyb21DYXJ0ID0gKGNhcnRJdGVtcywgY2FydEl0ZW1Ub1JlbW92ZSkgPT4ge1xyXG4gICAgY29uc3QgZXhpc3RpbmdDYXJ0SXRlbSA9Y2FydEl0ZW1zLmZpbmQoXHJcbiAgICAgICAgY2FydEl0ZW0gPT4gY2FydEl0ZW0uaWQgPT09Y2FydEl0ZW1Ub1JlbW92ZS5pZFxyXG4gICAgICAgICk7XHJcbiAgICBpZiAoZXhpc3RpbmdDYXJ0SXRlbS5xdWFudGl0eT09PTEpIHtcclxuICAgICAgICByZXR1cm4gY2FydEl0ZW1zXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhcnRJdGVtcy5tYXAoXHJcbiAgICAgICAgY2FydEl0ZW0gPT4gXHJcbiAgICAgICAgY2FydEl0ZW0uaWQgPT09IGNhcnRJdGVtVG9SZW1vdmUuaWQgXHJcbiAgICAgICAgPyB7Li4uY2FydEl0ZW0sIHF1YW50aXR5OiAoY2FydEl0ZW0ucXVhbnRpdHkgLSAxKX1cclxuICAgICAgICA6IGNhcnRJdGVtXHJcbiAgICApXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHNldENoYW5uZWwgPSBjaGFubmVsID0+ICh7XHJcbiAgICB0eXBlOiAnU0VUX0NIQU5ORUwnLFxyXG4gICAgcGF5bG9hZDogY2hhbm5lbFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRNZXNzYWdlcyA9IG1lc3NhZ2VzID0+ICh7XHJcbiAgICB0eXBlOiAnU0VUX01FU1NBR0VTJyxcclxuICAgIHBheWxvYWQ6IG1lc3NhZ2VzXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TmV3TWVzc2FnZXMgPSAoYm9vbCkgPT4gKHtcclxuICAgIHR5cGU6ICdTRVRfTkVXX01FU1NBR0VTJyxcclxuICAgIHBheWxvYWQ6IGJvb2xcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVDaGF0SGlkZGVuID0gKCkgPT4gKHtcclxuICAgIHR5cGU6ICdUT0dHTEVfQ0hBVF9ISURERU4nXHJcbn0pIiwiY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICAgIGNoYW5uZWw6ICcnLFxyXG4gICAgbWVzc2FnZXM6IFtdLFxyXG4gICAgbmV3TWVzc2FnZXM6IGZhbHNlLFxyXG4gICAgY2hhdEhpZGRlbjp0cnVlLFxyXG59XHJcblxyXG5jb25zdCBjaGF0UmVkdWNlciA9IChzdGF0ZT1JTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NFVF9NRVNTQUdFUyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnU0VUX0NIQU5ORUwnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnU0VUX05FV19NRVNTQUdFUyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG5ld01lc3NhZ2VzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnVE9HR0xFX0NIQVRfSElEREVOJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhdEhpZGRlbjogIXN0YXRlLmNoYXRIaWRkZW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0UmVkdWNlcjsiLCIvLyBpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICAgIGN1cnJlbnRGaWx0ZXI6ICdCb3VxdWV0J1xyXG59IFxyXG5cclxuXHJcbmNvbnN0IGZpbHRlclJlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAvLyBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB7Li4uc3RhdGUsLi4uYWN0aW9uLnBheWxvYWR9XHJcbiAgICAgICAgY2FzZSAnU0VUX0NVUlJFTlRfRklMVEVSJzpcclxuICAgICAgICAgICAgcmV0dXJuICB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXI6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbHRlclJlZHVjZXI7IiwiLy8gaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gICAgYWN0aXZlUGFnZToxLFxyXG4gICAgcGVyUGFnZToxMCxcclxuICAgIHBhZ2VSYW5nZTozXHJcbn1cclxuXHJcbmNvbnN0IHBhZ2luYXRpb25SZWR1Y2VyID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgLy8gY2FzZSBIWURSQVRFOlxyXG4gICAgICAgIC8vICAgICByZXR1cm4gey4uLnN0YXRlLC4uLmFjdGlvbi5wYXlsb2FkfVxyXG4gICAgICAgIGNhc2UgXCJTRVRfQ1VSUkVOVF9QQUdFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2U6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdpbmF0aW9uUmVkdWNlcjsiLCJpbXBvcnQgIHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgcGFnaW5hdGlvblJlZHVjZXIgZnJvbSAnLi9wYWdpbmF0aW9uL3BhZ2luYXRpb24ucmVkdWNlcic7XHJcbmltcG9ydCBzb3J0UmVkdWNlciBmcm9tICcuL3NvcnQvc29ydC5yZWR1Y2VyJztcclxuaW1wb3J0IGZpbHRlclJlZHVjZXIgZnJvbSAnLi9maWx0ZXIvZmlsdGVyLnJlZHVjZXInO1xyXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSAnLi91c2VyL3VzZXIucmVkdWNlcic7XHJcbmltcG9ydCBjYXJ0UmVkdWNlciBmcm9tICcuL2NhcnQvY2FydC5yZWR1Y2VyJztcclxuaW1wb3J0IHtwZXJzaXN0UmVkdWNlcn0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xyXG5pbXBvcnQgY2hhdFJlZHVjZXIgZnJvbSAnLi9jaGF0L2NoYXQucmVkdWNlcnMnO1xyXG5cclxuXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCAgY29tYmluZVJlZHVjZXJzKHtcclxuLy8gICAgIHVzZXI6dXNlclJlZHVjZXIsXHJcbi8vICAgICBjYXJ0OmNhcnRSZWR1Y2VyLFxyXG4vLyAgICAgZmlsdGVyOiBmaWx0ZXJSZWR1Y2VyLFxyXG4vLyAgICAgcGFnaW5hdGlvbjogcGFnaW5hdGlvblJlZHVjZXIsXHJcbi8vICAgICBzb3J0OiBzb3J0UmVkdWNlclxyXG4vLyB9KVxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgIHVzZXI6dXNlclJlZHVjZXIsXHJcbiAgICAgICAgY2FydDpjYXJ0UmVkdWNlcixcclxuICAgICAgICBmaWx0ZXI6IGZpbHRlclJlZHVjZXIsXHJcbiAgICAgICAgcGFnaW5hdGlvbjogcGFnaW5hdGlvblJlZHVjZXIsXHJcbiAgICAgICAgc29ydDogc29ydFJlZHVjZXIsXHJcbiAgICAgICAgY2hhdDogY2hhdFJlZHVjZXJcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgICAgICBrZXk6ICdwcmltYXJ5JyxcclxuICAgICAgICBzdG9yYWdlLFxyXG4gICAgICAgIHdoaXRlbGlzdDogWydmaWx0ZXInLCdjYXJ0JywnY2hhdCddXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcm9vdFJlZHVjZXIpOyIsIi8vIGltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICAgIHNvcnRlZDogJ05ld2VzdCdcclxufVxyXG5cclxuY29uc3Qgc29ydFJlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAvLyBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB7Li4uc3RhdGUsLi4uYWN0aW9uLnBheWxvYWR9XHJcbiAgICAgICAgY2FzZSAnU0VUX0NVUlJFTlRfU09SVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNvcnRlZDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc29ydFJlZHVjZXI7IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInO1xyXG5pbXBvcnQgcGVyc2lzdFJlZHVjZXIgZnJvbSAnLi9yb290LXJlZHVjZXInO1xyXG5cclxuXHJcbmNvbnN0IG1pZGRsZXdhcmVzID0gW107XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICBtaWRkbGV3YXJlcy5wdXNoKGxvZ2dlcik7XHJcbn1cclxuXHJcbmNvbnN0IHN0YXJ0U3RhdGU9e1xyXG4gICAgY2FydDp7XHJcbiAgICBjYXJ0SXRlbXM6W10sXHJcbiAgICBjYXJ0SGlkZGVuOiB0cnVlfSxcclxuICAgIGZpbHRlcjp7Y3VycmVudEZpbHRlcjogJ0JvdXF1ZXQnfSxcclxuICAgIHBhZ2luYXRpb246e2FjdGl2ZVBhZ2U6MSxcclxuICAgIHBlclBhZ2U6MTAsXHJcbiAgICBwYWdlUmFuZ2U6M30sXHJcbiAgICBzb3J0Ontzb3J0ZWQ6ICdOZXdlc3QnfSxcclxuICAgIHVzZXI6e2N1cnJlbnRVc2VyOiBudWxsLCB0b2tlbjogbnVsbH0sXHJcbiAgICBjaGF0OiB7Y2hhbm5lbDogJycsXHJcbiAgICBtZXNzYWdlczogW10sIG5ld01lc3NhZ2VzOmZhbHNlLCBjaGF0SGlkZGVuOnRydWV9LFxyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuLy8gY29uc3QgbWFrZXN0b3JlID0gKGluaXRpYWxTdGF0ZSwgb3B0aW9ucykgPT4gY3JlYXRlU3RvcmUocGVyc2lzdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IG1ha2VzdG9yZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlc3RvcmUoaW5pdGlhbFN0YXRlID0gc3RhcnRTdGF0ZSkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgICBwZXJzaXN0UmVkdWNlcixcclxuICAgICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpXHJcbiAgICApXHJcbiAgfSIsImV4cG9ydCBjb25zdCBzZXRDdXJyZW50VXNlciA9IHVzZXIgPT4gKHtcclxuICAgIHR5cGU6ICdTRVRfQ1VSUkVOVF9VU0VSJyxcclxuICAgIHBheWxvYWQ6IHVzZXJcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRUb2tlbiA9IHRva2VuID0+ICh7XHJcbiAgICB0eXBlOiAnU0VUX1RPS0VOJyxcclxuICAgIHBheWxvYWQ6IHRva2VuXHJcbn0pIiwiY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICAgIGN1cnJlbnRVc2VyOiBudWxsLFxyXG4gICAgdG9rZW46IG51bGxcclxufVxyXG5cclxuY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGU9SU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnU0VUX0NVUlJFTlRfVVNFUic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnU0VUX1RPS0VOJzogXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRva2VuOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclJlZHVjZXI7IiwiXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge21ha2VzdG9yZX0gZnJvbSAnLi9yZWR1eC9zdG9yZSdcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcclxuY29uc3QgX19ORVhUX1JFRFVYX1NUT1JFX18gPSAnX19ORVhUX1JFRFVYX1NUT1JFX18nXHJcblxyXG5mdW5jdGlvbiBnZXRPckNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gIC8vIEFsd2F5cyBtYWtlIGEgbmV3IHN0b3JlIGlmIHNlcnZlciwgb3RoZXJ3aXNlIHN0YXRlIGlzIHNoYXJlZCBiZXR3ZWVuIHJlcXVlc3RzXHJcbiAgaWYgKGlzU2VydmVyKSB7XHJcbiAgICByZXR1cm4gbWFrZXN0b3JlKGluaXRpYWxTdGF0ZSlcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBzdG9yZSBpZiB1bmF2YWlsYWJsZSBvbiB0aGUgY2xpZW50IGFuZCBzZXQgaXQgb24gdGhlIHdpbmRvdyBvYmplY3RcclxuICBpZiAoIXdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX10pIHtcclxuICAgIHdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX10gPSBtYWtlc3RvcmUoaW5pdGlhbFN0YXRlKVxyXG4gIH1cclxuICByZXR1cm4gd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUmVkdXhTdG9yZShBcHApIHtcclxuICByZXR1cm4gY2xhc3MgQXBwV2l0aFJlZHV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCkge1xyXG5cclxuICAgICAgY29uc3QgcmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUoKVxyXG5cclxuICAgICAgLy8gUHJvdmlkZSB0aGUgc3RvcmUgdG8gZ2V0SW5pdGlhbFByb3BzIG9mIHBhZ2VzXHJcbiAgICAgIGFwcENvbnRleHQuY3R4LnJlZHV4U3RvcmUgPSByZWR1eFN0b3JlXHJcblxyXG4gICAgICBsZXQgYXBwUHJvcHMgPSB7fVxyXG4gICAgICBpZiAodHlwZW9mIEFwcC5nZXRJbml0aWFsUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5hcHBQcm9wcyxcclxuICAgICAgICBpbml0aWFsUmVkdXhTdGF0ZTogcmVkdXhTdG9yZS5nZXRTdGF0ZSgpLFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgIHRoaXMucmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUocHJvcHMuaW5pdGlhbFJlZHV4U3RhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gPEFwcCB7Li4udGhpcy5wcm9wc30gcmVkdXhTdG9yZT17dGhpcy5yZWR1eFN0b3JlfSAvPlxyXG4gICAgfVxyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9tZXNzYWdpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxiYXJzLWN1c3RvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1sb2dnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=