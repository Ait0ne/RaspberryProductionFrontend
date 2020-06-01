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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CheckoutItem/checkout-item.component.jsx":
/*!*************************************************************!*\
  !*** ./components/CheckoutItem/checkout-item.component.jsx ***!
  \*************************************************************/
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
var _jsxFileName = "C:\\Users\\bonaf\\Desktop\\Projects\\Ecommerce\\Malinka\\frontend\\malinka\\components\\CheckoutItem\\checkout-item.component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CheckoutItem = ({
  cartItem,
  clearItem,
  addItem,
  removeItem
}) => {
  return __jsx("div", {
    className: "checkout-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "image-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: `${_routes__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_URL"]}${cartItem.gallery[0].formats.thumbnail.url}`,
    alt: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  })), __jsx("span", {
    className: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, cartItem.name), __jsx("span", {
    className: "quantity",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "arrow",
    onClick: () => removeItem(cartItem),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "\u276E"), __jsx("span", {
    className: "value",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, cartItem.quantity), __jsx("div", {
    className: "arrow",
    onClick: () => addItem(cartItem),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "\u276F")), __jsx("span", {
    className: "price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "$", cartItem.price), __jsx("div", {
    className: "remove-button-cross",
    onClick: () => clearItem(cartItem),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "\u2715"));
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(Object(_src_redux_cart_cart_actions__WEBPACK_IMPORTED_MODULE_2__["clearItemFromCart"])(item)),
  addItem: item => dispatch(Object(_src_redux_cart_cart_actions__WEBPACK_IMPORTED_MODULE_2__["addItem"])(item)),
  removeItem: item => dispatch(Object(_src_redux_cart_cart_actions__WEBPACK_IMPORTED_MODULE_2__["removeItem"])(item))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(CheckoutItem));

/***/ }),

/***/ "./components/Footer/footer.component.jsx":
/*!************************************************!*\
  !*** ./components/Footer/footer.component.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\bonaf\\Desktop\\Projects\\Ecommerce\\Malinka\\frontend\\malinka\\components\\Footer\\footer.component.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Footer = () => {
  return __jsx("div", {
    className: "footer-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, "Confidentiality aggreement"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, "Other info")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/stripe-button/stripe-button.component.jsx":
/*!**************************************************************!*\
  !*** ./components/stripe-button/stripe-button.component.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-stripe-checkout */ "react-stripe-checkout");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_redux_cart_cart_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/redux/cart/cart.actions */ "./src/redux/cart/cart.actions.js");
var _jsxFileName = "C:\\Users\\bonaf\\Desktop\\Projects\\Ecommerce\\Malinka\\frontend\\malinka\\components\\stripe-button\\stripe-button.component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const StripeCheckoutButton = ({
  price,
  currentUser,
  cartItems,
  clearCart
}) => {
  const order = `${cartItems.map(cartItem => `${cartItem.name}: ${cartItem.quantity}\n`)} \nTotal:${price}`;

  const onToken = token => {
    fetch(`${_routes__WEBPACK_IMPORTED_MODULE_3__["default"]}/orders`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        amount: priceForStripe,
        Status: "Pending",
        name: currentUser.email,
        createdAt: new Date(),
        OrderDetails: order,
        token
      })
    }).then(response => {
      console.log(response);

      if (response.ok) {
        clearCart();
        alert('Payment successful');
      } else {
        alert('There was an issue with your payment.');
      }
    }).catch(error => {
      console.log('Payment error: ', error);
      alert('There was an issue with your payment.');
    });
  };

  const priceForStripe = price * 100;
  const publishablekey = 'pk_test_cjTqGCwCgH7H6f2eJRaVcr5R00XHFNsn39';
  return __jsx("div", {
    style: {
      display: 'flex',
      alignSelf: 'flex-end',
      marginTop: '20px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    label: "Pay Now",
    name: "TestShop",
    billingAddress: true,
    shippingAddress: true,
    description: `Your total is ${price}`,
    amount: priceForStripe,
    panelLabel: "Pay Now",
    token: onToken,
    stripeKey: publishablekey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }));
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(Object(_src_redux_cart_cart_actions__WEBPACK_IMPORTED_MODULE_5__["clearCart"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, mapDispatchToProps)(StripeCheckoutButton));

/***/ }),

/***/ "./pages/payment.js":
/*!**************************!*\
  !*** ./pages/payment.js ***!
  \**************************/
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
/* harmony import */ var _components_CheckoutItem_checkout_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CheckoutItem/checkout-item.component */ "./components/CheckoutItem/checkout-item.component.jsx");
/* harmony import */ var _components_stripe_button_stripe_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/stripe-button/stripe-button.component */ "./components/stripe-button/stripe-button.component.jsx");
/* harmony import */ var _components_Footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer/footer.component */ "./components/Footer/footer.component.jsx");
var _jsxFileName = "C:\\Users\\bonaf\\Desktop\\Projects\\Ecommerce\\Malinka\\frontend\\malinka\\pages\\payment.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const PaymentPage = ({
  currentUser,
  cartItems,
  total
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!currentUser) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.back();
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "checkout-page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "checkout-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "header-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "header-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "Quantity")), __jsx("div", {
    className: "header-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, "  Price")), __jsx("div", {
    className: "header-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  })), cartItems.map(cartItem => __jsx(_components_CheckoutItem_checkout_item_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: cartItem.id,
    cartItem: cartItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "Total: $", total)), __jsx(_components_stripe_button_stripe_button_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentUser: currentUser,
    price: total,
    cartItems: cartItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  })), __jsx(_components_Footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }));
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  currentUser: state.user.currentUser,
  total: state.cart.cartItems.reduce((sum, cartItem) => sum + cartItem.price * cartItem.quantity, 0)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(PaymentPage)));

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

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/payment.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bonaf\Desktop\Projects\Ecommerce\Malinka\frontend\malinka\pages\payment.js */"./pages/payment.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-stripe-checkout":
/*!****************************************!*\
  !*** external "react-stripe-checkout" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stripe-checkout");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGVja291dEl0ZW0vY2hlY2tvdXQtaXRlbS5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3RyaXBlLWJ1dHRvbi9zdHJpcGUtYnV0dG9uLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGF5bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2NhcnQvY2FydC5hY3Rpb25zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RyaXBlLWNoZWNrb3V0XCIiXSwibmFtZXMiOlsiQ2hlY2tvdXRJdGVtIiwiY2FydEl0ZW0iLCJjbGVhckl0ZW0iLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsIlVQTE9BRF9VUkwiLCJnYWxsZXJ5IiwiZm9ybWF0cyIsInRodW1ibmFpbCIsInVybCIsIm5hbWUiLCJxdWFudGl0eSIsInByaWNlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJpdGVtIiwiY2xlYXJJdGVtRnJvbUNhcnQiLCJjb25uZWN0IiwiRm9vdGVyIiwiU3RyaXBlQ2hlY2tvdXRCdXR0b24iLCJjdXJyZW50VXNlciIsImNhcnRJdGVtcyIsImNsZWFyQ2FydCIsIm9yZGVyIiwibWFwIiwib25Ub2tlbiIsInRva2VuIiwiZmV0Y2giLCJBUElfVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYW1vdW50IiwicHJpY2VGb3JTdHJpcGUiLCJTdGF0dXMiLCJlbWFpbCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJPcmRlckRldGFpbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwib2siLCJhbGVydCIsImNhdGNoIiwiZXJyb3IiLCJwdWJsaXNoYWJsZWtleSIsImRpc3BsYXkiLCJhbGlnblNlbGYiLCJtYXJnaW5Ub3AiLCJQYXltZW50UGFnZSIsInRvdGFsIiwidXNlRWZmZWN0IiwiUm91dGVyIiwiYmFjayIsImlkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjYXJ0IiwidXNlciIsInJlZHVjZSIsInN1bSIsIndpdGhSb3V0ZXIiLCJ0b2dnbGVDYXJ0SGlkZGVuIiwidHlwZSIsInBheWxvYWQiLCJhZGRNdWx0aXBsZUl0ZW1zIiwiaXRlbXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FB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QUFNdEQsaUJBQWlCLEdBQUdELElBQUksS0FBTTtBQUN2Q29ELE1BQUksRUFBRSxzQkFEaUM7QUFFdkNDLFNBQU8sRUFBRXJEO0FBRjhCLENBQU4sQ0FBOUI7QUFLQSxNQUFNWCxVQUFVLEdBQUdXLElBQUksS0FBSztBQUMvQm9ELE1BQUksRUFBRSxhQUR5QjtBQUUvQkMsU0FBTyxFQUFFckQ7QUFGc0IsQ0FBTCxDQUF2QjtBQUtBLE1BQU1PLFNBQVMsR0FBRyxPQUFPO0FBQzVCNkMsTUFBSSxFQUFDO0FBRHVCLENBQVAsQ0FBbEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QlAsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBheW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtjbGVhckl0ZW1Gcm9tQ2FydCwgYWRkSXRlbSwgcmVtb3ZlSXRlbX0gZnJvbSAnLi4vLi4vc3JjL3JlZHV4L2NhcnQvY2FydC5hY3Rpb25zJztcclxuaW1wb3J0IEFQSV9VUkwsIHtVUExPQURfVVJMfSBmcm9tICcuLi8uLi9yb3V0ZXMnXHJcblxyXG5cclxuY29uc3QgQ2hlY2tvdXRJdGVtID0gKHtjYXJ0SXRlbSwgY2xlYXJJdGVtLCBhZGRJdGVtLCByZW1vdmVJdGVtfSkgPT4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGVja291dC1pdGVtJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7VVBMT0FEX1VSTH0ke2NhcnRJdGVtLmdhbGxlcnlbMF0uZm9ybWF0cy50aHVtYm5haWwudXJsfWB9IGFsdD0naXRlbScvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSduYW1lJz57Y2FydEl0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncXVhbnRpdHknPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fycm93JyBvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtKGNhcnRJdGVtKX0+JiMxMDA5NDs8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndmFsdWUnPntjYXJ0SXRlbS5xdWFudGl0eX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJyb3cnIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW0oY2FydEl0ZW0pfT4mIzEwMDk1OzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3ByaWNlJz4ke2NhcnRJdGVtLnByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbW92ZS1idXR0b24tY3Jvc3MnIG9uQ2xpY2s9eygpID0+IGNsZWFySXRlbShjYXJ0SXRlbSl9PiYjMTAwMDU7PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBjbGVhckl0ZW06IGl0ZW0gPT4gZGlzcGF0Y2goY2xlYXJJdGVtRnJvbUNhcnQoaXRlbSkpLFxyXG4gICAgYWRkSXRlbTogaXRlbSA9PiBkaXNwYXRjaChhZGRJdGVtKGl0ZW0pKSxcclxuICAgIHJlbW92ZUl0ZW06IGl0ZW0gPT4gZGlzcGF0Y2gocmVtb3ZlSXRlbShpdGVtKSksXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoZWNrb3V0SXRlbSk7IiwiXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXItY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Db25maWRlbnRpYWxpdHkgYWdncmVlbWVudDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPk90aGVyIGluZm88L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0cmlwZUNoZWNrb3V0IGZyb20gJ3JlYWN0LXN0cmlwZS1jaGVja291dCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBBUElfVVJMIGZyb20gJy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge2NsZWFyQ2FydH0gZnJvbSAnLi4vLi4vc3JjL3JlZHV4L2NhcnQvY2FydC5hY3Rpb25zJ1xyXG5cclxuY29uc3QgU3RyaXBlQ2hlY2tvdXRCdXR0b24gPSAoIHsgcHJpY2UsIGN1cnJlbnRVc2VyLCBjYXJ0SXRlbXMsIGNsZWFyQ2FydCB9ICkgPT4ge1xyXG4gICAgY29uc3Qgb3JkZXIgPSBgJHtjYXJ0SXRlbXMubWFwKGNhcnRJdGVtPT5gJHtjYXJ0SXRlbS5uYW1lfTogJHtjYXJ0SXRlbS5xdWFudGl0eX1cXG5gKX0gXFxuVG90YWw6JHtwcmljZX1gXHJcbiAgICBjb25zdCBvblRva2VuID0gdG9rZW4gPT4ge1xyXG4gICAgICAgIGZldGNoKGAke0FQSV9VUkx9L29yZGVyc2Ase1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBwcmljZUZvclN0cmlwZSxcclxuICAgICAgICAgICAgICAgICAgICBTdGF0dXM6IFwiUGVuZGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGN1cnJlbnRVc2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICBPcmRlckRldGFpbHM6IG9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICBjbGVhckNhcnQoKVxyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1BheW1lbnQgc3VjY2Vzc2Z1bCcpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RoZXJlIHdhcyBhbiBpc3N1ZSB3aXRoIHlvdXIgcGF5bWVudC4nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXltZW50IGVycm9yOiAnLCBlcnJvcilcclxuICAgICAgICAgICAgYWxlcnQoJ1RoZXJlIHdhcyBhbiBpc3N1ZSB3aXRoIHlvdXIgcGF5bWVudC4nKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJpY2VGb3JTdHJpcGUgPSBwcmljZSAqIDEwMFxyXG4gICAgXHRcclxuICAgIGNvbnN0IHB1Ymxpc2hhYmxla2V5ID0gJ3BrX3Rlc3RfY2pUcUdDd0NnSDdINmYyZUpSYVZjcjVSMDBYSEZOc24zOSdcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JyxhbGlnblNlbGY6J2ZsZXgtZW5kJywgbWFyZ2luVG9wOicyMHB4J319PlxyXG4gICAgICAgICAgICA8U3RyaXBlQ2hlY2tvdXQgXHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9ICdQYXkgTm93J1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9ICdUZXN0U2hvcCdcclxuICAgICAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0ge2BZb3VyIHRvdGFsIGlzICR7cHJpY2V9YH1cclxuICAgICAgICAgICAgICAgIGFtb3VudCA9IHtwcmljZUZvclN0cmlwZX1cclxuICAgICAgICAgICAgICAgIHBhbmVsTGFiZWw9J1BheSBOb3cnXHJcbiAgICAgICAgICAgICAgICB0b2tlbj17b25Ub2tlbn1cclxuICAgICAgICAgICAgICAgIHN0cmlwZUtleT17cHVibGlzaGFibGVrZXl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaD0+ICh7XHJcbiAgICBjbGVhckNhcnQ6ICgpID0+IGRpc3BhdGNoKGNsZWFyQ2FydCgpKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFN0cmlwZUNoZWNrb3V0QnV0dG9uKSIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgRnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyLCB7d2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IENoZWNrb3V0SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL0NoZWNrb3V0SXRlbS9jaGVja291dC1pdGVtLmNvbXBvbmVudCdcclxuaW1wb3J0IFN0cmlwZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3N0cmlwZS1idXR0b24vc3RyaXBlLWJ1dHRvbi5jb21wb25lbnQnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvZm9vdGVyLmNvbXBvbmVudCdcclxuY29uc3QgUGF5bWVudFBhZ2UgPSh7Y3VycmVudFVzZXIsIGNhcnRJdGVtcywgdG90YWx9KSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoIWN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5iYWNrKClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoZWNrb3V0LXBhZ2UnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hlY2tvdXQtaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItYmxvY2snPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyLWJsb2NrJz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlci1ibG9jayc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+UXVhbnRpdHk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItYmxvY2snPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiAgUHJpY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItYmxvY2snPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXJ0SXRlbXMubWFwKGNhcnRJdGVtID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja291dEl0ZW0ga2V5PXtjYXJ0SXRlbS5pZH0gY2FydEl0ZW09e2NhcnRJdGVtfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3RhbCc+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Ub3RhbDogJHt0b3RhbH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8U3RyaXBlQnV0dG9uIGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0gcHJpY2U9e3RvdGFsfSBjYXJ0SXRlbXM9e2NhcnRJdGVtc30vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGNhcnRJdGVtczogc3RhdGUuY2FydC5jYXJ0SXRlbXMsXHJcbiAgICBjdXJyZW50VXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcclxuICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5yZWR1Y2UoKHN1bSwgY2FydEl0ZW0pID0+IFxyXG4gICAgc3VtICsgY2FydEl0ZW0ucHJpY2UqY2FydEl0ZW0ucXVhbnRpdHksIDBcclxuICAgIClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFBheW1lbnRQYWdlKSk7IiwiY29uc3QgQVBJX1VSTD0naHR0cHM6Ly9yYXNwYmVycnluZXh0anNzdHJhcGkyLmhlcm9rdWFwcC5jb20nXHJcbmV4cG9ydCBjb25zdCBVUExPQURfVVJMPScnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBUElfVVJMOyIsImV4cG9ydCBjb25zdCB0b2dnbGVDYXJ0SGlkZGVuID0gKCkgPT4gKHtcclxuICAgIHR5cGU6ICdUT0dHTEVfQ0FSVF9ISURERU4nXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkSXRlbSA9IGl0ZW0gPT4gKHtcclxuICAgIHR5cGU6ICdBRERfSVRFTScsXHJcbiAgICBwYXlsb2FkOiBpdGVtXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTXVsdGlwbGVJdGVtcyA9IGl0ZW1zID0+ICh7XHJcbiAgICB0eXBlOiAnQUREX01VTFRJUExFX0lURU1TJyxcclxuICAgIHBheWxvYWQ6IGl0ZW1zXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFySXRlbUZyb21DYXJ0ID0gaXRlbSAgPT4gKHtcclxuICAgIHR5cGU6ICdDTEVBUl9JVEVNX0ZST01fQ0FSVCcsXHJcbiAgICBwYXlsb2FkOiBpdGVtXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9IGl0ZW0gPT4gKHtcclxuICAgIHR5cGU6ICdSRU1PVkVfSVRFTScsXHJcbiAgICBwYXlsb2FkOiBpdGVtXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJDYXJ0ID0gKCkgPT4gKHtcclxuICAgIHR5cGU6J0NMRUFSX0NBUlQnXHJcbn0pIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RyaXBlLWNoZWNrb3V0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=