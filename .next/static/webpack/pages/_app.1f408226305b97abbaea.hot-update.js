self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/partials/header/header.jsx":
/*!***********************************************!*\
  !*** ./components/partials/header/header.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_theme_folder_demo1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_theme_folder_demo1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_theme_folder_demo1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_theme_folder_demo1_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _components_features_modals_login_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/features/modals/login-modal */ "./components/features/modals/login-modal.jsx");
/* harmony import */ var _components_partials_header_partials_header_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/partials/header/partials/header-search */ "./components/partials/header/partials/header-search.jsx");
/* harmony import */ var _components_partials_header_partials_wishlist_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/partials/header/partials/wishlist-menu */ "./components/partials/header/partials/wishlist-menu.jsx");
/* harmony import */ var _components_partials_header_partials_cart_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/partials/header/partials/cart-menu */ "./components/partials/header/partials/cart-menu.jsx");
/* harmony import */ var _components_partials_header_partials_category_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/components/partials/header/partials/category-menu */ "./components/partials/header/partials/category-menu.jsx");
/* harmony import */ var _components_partials_header_partials_main_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/components/partials/header/partials/main-menu */ "./components/partials/header/partials/main-menu.jsx");
/* harmony import */ var _components_features_sticky_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/components/features/sticky-header */ "./components/features/sticky-header.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\theme folder\\demo1\\components\\partials\\header\\header.jsx",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement);












function Header() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("container"),
      containerClass = _useState[0],
      setContainerClass = _useState[1];

  function openMobileMenu() {
    document.querySelector("body").classList.add("mmenu-active");
  }

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setContainerClass(router.asPath.includes("fullwidth") ? "container-fluid" : "container");
  }, [router.asPath]);

  var getApi = /*#__PURE__*/function () {
    var _ref = (0,D_theme_folder_demo1_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_theme_folder_demo1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return D_theme_folder_demo1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_12__.default.get("/api/zoneDetails/zone").then(function (res) {
                return console.log("res===>", res);
              })["catch"](function (e) {
                return console.log("e===>", e);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getApi() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx("header", {
    className: "header header-2 header-intro-clearance",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "header-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: containerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header-left overflow-hidden mr-3 mr-sm-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("button", {
    onClick: getApi,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Count"), __jsx("div", {
    className: "welcome-msg d-flex flex-nowrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, "Special collection already available."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "\xA0Read more ..."))), __jsx("div", {
    className: "header-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "top-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "Links"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "header-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 23
    }
  }, "USD"), __jsx("div", {
    className: "header-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 23
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 27
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, "Eur")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 27
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, "Usd")))))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "header-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 23
    }
  }, "English"), __jsx("div", {
    className: "header-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 23
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 27
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, "English")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 27
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, "French")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 27
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }, "Spanish")))))), __jsx(_components_features_modals_login_modal__WEBPACK_IMPORTED_MODULE_5__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }))))))), __jsx("div", {
    className: "header-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: containerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "mobile-menu-toggler",
    onClick: openMobileMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, "Toggle mobile menu"), __jsx("i", {
    className: "icon-bars",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/",
    className: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "images/logo.png",
    alt: "Molla Logo",
    width: 104,
    height: 27,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "header-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx(_components_partials_header_partials_header_search__WEBPACK_IMPORTED_MODULE_6__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "header-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/dashboard",
    title: "My account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon-user",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, "Account"))), __jsx(_components_partials_header_partials_wishlist_menu__WEBPACK_IMPORTED_MODULE_7__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }), __jsx(_components_partials_header_partials_cart_menu__WEBPACK_IMPORTED_MODULE_8__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  })))), __jsx(_components_features_sticky_header__WEBPACK_IMPORTED_MODULE_11__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "header-bottom sticky-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: containerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "header-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx(_components_partials_header_partials_category_menu__WEBPACK_IMPORTED_MODULE_9__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "header-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx(_components_partials_header_partials_main_menu__WEBPACK_IMPORTED_MODULE_10__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "header-right overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "la la-lightbulb-o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "text-truncate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, "Clearance", __jsx("span", {
    className: "highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 26
    }
  }, "\xA0Up to 30% Off")))))));
}

_s(Header, "r/UIIgvblr4TW9Bgek5Wh6LA1j4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvaGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImNvbnRhaW5lckNsYXNzIiwic2V0Q29udGFpbmVyQ2xhc3MiLCJvcGVuTW9iaWxlTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsInVzZUVmZmVjdCIsImFzUGF0aCIsImluY2x1ZGVzIiwiZ2V0QXBpIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDaEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEZ0Isa0JBRTRCQywrQ0FBUSxDQUFDLFdBQUQsQ0FGcEM7QUFBQSxNQUVUQyxjQUZTO0FBQUEsTUFFT0MsaUJBRlA7O0FBSWhCLFdBQVNDLGNBQVQsR0FBMEI7QUFDeEJDLFlBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixFQUErQkMsU0FBL0IsQ0FBeUNDLEdBQXpDLENBQTZDLGNBQTdDO0FBQ0Q7O0FBRURDLGtEQUFTLENBQUMsWUFBTTtBQUNkTixxQkFBaUIsQ0FDZkosTUFBTSxDQUFDVyxNQUFQLENBQWNDLFFBQWQsQ0FBdUIsV0FBdkIsSUFBc0MsaUJBQXRDLEdBQTBELFdBRDNDLENBQWpCO0FBR0QsR0FKUSxFQUlOLENBQUNaLE1BQU0sQ0FBQ1csTUFBUixDQUpNLENBQVQ7O0FBTUEsTUFBTUUsTUFBTTtBQUFBLCtSQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNQQywrQ0FBQSwwQkFFSEMsSUFGRyxDQUVFLFVBQUNDLEdBQUQ7QUFBQSx1QkFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkYsR0FBdkIsQ0FBVDtBQUFBLGVBRkYsV0FHRyxVQUFDRyxDQUFEO0FBQUEsdUJBQU9GLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJDLENBQXJCLENBQVA7QUFBQSxlQUhILENBRE87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTk4sTUFBTTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQU9BLFNBQ0U7QUFBUSxhQUFTLEVBQUMsd0NBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRVYsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDBDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRVUsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBREYsRUFFRSxNQUFDLCtEQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixDQUZGLENBREYsRUFTRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFPLFFBQUksRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBTyxRQUFJLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBTyxRQUFJLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLENBSkYsQ0FERixDQUZGLENBREYsQ0FERixFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBTyxRQUFJLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBTyxRQUFJLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBSkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFPLFFBQUksRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQVBGLENBREYsQ0FGRixDQURGLENBaEJGLEVBa0NFLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxDRixDQUZGLENBREYsQ0FERixDQVRGLENBREYsQ0FERixFQXlERTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRVYsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLHFCQUFsQjtBQUF3QyxXQUFPLEVBQUVFLGNBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQU1FLE1BQUMsK0RBQUQ7QUFBTyxRQUFJLEVBQUMsR0FBWjtBQUFnQixhQUFTLEVBQUMsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLGlCQUROO0FBRUUsT0FBRyxFQUFDLFlBRk47QUFHRSxTQUFLLEVBQUUsR0FIVDtBQUlFLFVBQU0sRUFBRSxFQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLENBREYsRUFpQkU7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1RkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FqQkYsRUFxQkU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFPLFFBQUksRUFBQyxpQkFBWjtBQUE4QixTQUFLLEVBQUMsWUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsQ0FERixDQURGLEVBVUUsTUFBQyx1RkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFXRSxNQUFDLG1GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQXJCRixDQURGLENBekRGLEVBK0ZFLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUYsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFLRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUxGLEVBU0U7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUcsYUFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDVztBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURYLENBRkYsQ0FURixDQURGLENBREYsQ0EvRkYsQ0FERjtBQXNIRDs7R0EzSVFKLE07VUFDUUUsa0Q7OztLQURSRixNO0FBNklULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMWY0MDgyMjYzMDViOTdhYmJhZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gXCJ+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmtcIjtcclxuaW1wb3J0IExvZ2luTW9kYWwgZnJvbSBcIn4vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvbG9naW4tbW9kYWxcIjtcclxuaW1wb3J0IEhlYWRlclNlYXJjaCBmcm9tIFwifi9jb21wb25lbnRzL3BhcnRpYWxzL2hlYWRlci9wYXJ0aWFscy9oZWFkZXItc2VhcmNoXCI7XHJcbmltcG9ydCBXaXNobGlzdE1lbnUgZnJvbSBcIn4vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvd2lzaGxpc3QtbWVudVwiO1xyXG5pbXBvcnQgQ2FydE1lbnUgZnJvbSBcIn4vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvY2FydC1tZW51XCI7XHJcbmltcG9ydCBDYXRlZ29yeU1lbnUgZnJvbSBcIn4vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvY2F0ZWdvcnktbWVudVwiO1xyXG5pbXBvcnQgTWFpbk1lbnUgZnJvbSBcIn4vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvbWFpbi1tZW51XCI7XHJcbmltcG9ydCBTdGlja3lIZWFkZXIgZnJvbSBcIn4vY29tcG9uZW50cy9mZWF0dXJlcy9zdGlja3ktaGVhZGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbY29udGFpbmVyQ2xhc3MsIHNldENvbnRhaW5lckNsYXNzXSA9IHVzZVN0YXRlKFwiY29udGFpbmVyXCIpO1xyXG5cclxuICBmdW5jdGlvbiBvcGVuTW9iaWxlTWVudSgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5hZGQoXCJtbWVudS1hY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q29udGFpbmVyQ2xhc3MoXHJcbiAgICAgIHJvdXRlci5hc1BhdGguaW5jbHVkZXMoXCJmdWxsd2lkdGhcIikgPyBcImNvbnRhaW5lci1mbHVpZFwiIDogXCJjb250YWluZXJcIlxyXG4gICAgKTtcclxuICB9LCBbcm91dGVyLmFzUGF0aF0pO1xyXG5cclxuICBjb25zdCBnZXRBcGkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBheGlvc1xyXG4gICAgICAuZ2V0KGAvYXBpL3pvbmVEZXRhaWxzL3pvbmVgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhcInJlcz09PT5cIiwgcmVzKSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhcImU9PT0+XCIsIGUpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXIgaGVhZGVyLTIgaGVhZGVyLWludHJvLWNsZWFyYW5jZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10b3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3N9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdCBvdmVyZmxvdy1oaWRkZW4gbXItMyBtci1zbS0wXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0QXBpfT5Db3VudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtbXNnIGQtZmxleCBmbGV4LW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgIDxwPlNwZWNpYWwgY29sbGVjdGlvbiBhbHJlYWR5IGF2YWlsYWJsZS48L3A+XHJcbiAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+Jm5ic3A7UmVhZCBtb3JlIC4uLjwvQUxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvcC1tZW51XCI+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+TGlua3M8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPlVTRDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj5FdXI8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+VXNkPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+RW5nbGlzaDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj5FbmdsaXNoPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPkZyZW5jaDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj5TcGFuaXNoPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2dpbk1vZGFsIC8+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1taWRkbGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3N9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LXRvZ2dsZXJcIiBvbkNsaWNrPXtvcGVuTW9iaWxlTWVudX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBtb2JpbGUgbWVudTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWJhcnNcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJNb2xsYSBMb2dvXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMDR9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezI3fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPEhlYWRlclNlYXJjaCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC9kYXNoYm9hcmRcIiB0aXRsZT1cIk15IGFjY291bnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXVzZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPkFjY291bnQ8L3A+XHJcbiAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8V2lzaGxpc3RNZW51IC8+XHJcbiAgICAgICAgICAgIDxDYXJ0TWVudSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPFN0aWNreUhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1ib3R0b20gc3RpY2t5LWhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxDYXRlZ29yeU1lbnUgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8TWFpbk1lbnUgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1yaWdodCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJsYSBsYS1saWdodGJ1bGItb1wiPjwvaT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlXCI+XHJcbiAgICAgICAgICAgICAgICBDbGVhcmFuY2U8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj4mbmJzcDtVcCB0byAzMCUgT2ZmPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TdGlja3lIZWFkZXI+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=