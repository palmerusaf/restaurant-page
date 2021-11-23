/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Praise-Regular.ttf */ "./src/fonts/Praise-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/ShadowsIntoLight-Regular.ttf */ "./src/fonts/ShadowsIntoLight-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/PatrickHand-Regular.ttf */ "./src/fonts/PatrickHand-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../backgrounds/white-brick.jpg */ "./src/backgrounds/white-brick.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"MainTitle\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"NavAndSmallTitle\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n@font-face {\n  font-family: \"Descriptions\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n* {\n  box-sizing: border-box;\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-family: sans-serif;\n  align-self: center;\n  font-family: \"Descriptions\";\n}\n\nbody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.nav-bar {\n  justify-content: end;\n}\n.nav-bar__item {\n  font-family: \"NavAndSmallTitle\";\n  font-size: 25px;\n  margin-right: 16px;\n  padding: 16px;\n  user-select: none;\n  cursor: pointer;\n}\n.nav-bar__item--active, .nav-bar__item:hover {\n  transition: 0.1s;\n  transform: scale(1.4);\n  text-shadow: 5px 2px 2px #969696;\n}\n\n.home__title {\n  font-family: \"MainTitle\";\n  font-size: 64px;\n}\n.home__title--tree {\n  text-shadow: 5px 2px 2px #969696;\n  color: green;\n}\n.home__welcome-container {\n  margin-top: 16px;\n  padding: 16px 20px;\n  border: goldenrod solid;\n  width: 75%;\n  border-radius: 10px;\n  box-shadow: 2px 2px 2px #969696;\n  text-shadow: 2px 2px 2px black;\n  font-size: 32px;\n  text-align: center;\n  color: orange;\n}\n.home__title-category {\n  font-family: \"NavAndSmallTitle\";\n  font-size: 40px;\n}\n\n.hour {\n  margin-bottom: 2em;\n  padding-top: 2em;\n  align-items: center;\n}\n.hour__title {\n  border: green solid;\n  border-radius: 15px;\n  padding: 0px 8px;\n  margin-bottom: 8px;\n}\n.hour__list-item {\n  width: 100%;\n  justify-content: space-between;\n  gap: 16px;\n  font-size: 25px;\n}\n\n.location {\n  border: orange solid;\n  padding: 0.5em 1em;\n  border-radius: 15px;\n  margin-left: 1em;\n  align-self: start;\n}\n.location__address {\n  font-size: 25px;\n}\n\n.menu__item-img {\n  width: 800px;\n  height: 500px;\n  object-fit: cover;\n  border-radius: 15px;\n  outline: goldenrod solid 2px;\n  box-shadow: inset;\n}\n.menu__item-description {\n  margin-top: 1em;\n  margin-bottom: 2em;\n}\n\n@media only screen and (max-width: 600px) {\n  .nav-bar__item {\n    font-size: 20px;\n    padding: 8px;\n    margin-right: 8px;\n  }\n\n  .home__title {\n    font-size: 50px;\n  }\n\n  .home__welcome-container,\n.hour__list-item,\n.location__address {\n    font-size: 16px;\n    text-shadow: none;\n    color: black;\n  }\n\n  .home__title-category {\n    font-size: 25px;\n  }\n\n  .menu__item-img {\n    width: 400px;\n    height: 250px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/css/style.scss"],"names":[],"mappings":"AAAA;EACE,wBAAA;EACA,4CAAA;AACF;AACA;EACE,+BAAA;EACA,4CAAA;AACF;AACA;EACE,2BAAA;EACA,4CAAA;AACF;AAEA;EACE,sBAAA;EACA,qBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,uBAAA;EACA,kBAAA;EACA,2BAAA;AAAF;;AAGA;EACE,mDAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;AAAF;;AAGA;EACE,oBAAA;AAAF;AACE;EACE,+BAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;EACA,iBAAA;EACA,eAAA;AACJ;AAAI;EAEE,gBAAA;EACA,qBAAA;EACA,gCAAA;AACN;;AAKE;EACE,wBAAA;EACA,eAAA;AAFJ;AAGI;EACE,gCAAA;EACA,YAAA;AADN;AAKE;EACE,gBAAA;EACA,kBAAA;EACA,uBAAA;EACA,UAAA;EACA,mBAAA;EACA,+BAAA;EACA,8BAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;AAHJ;AAQE;EACE,+BAAA;EACA,eAAA;AANJ;;AAUA;EACE,kBAAA;EACA,gBAAA;EACA,mBAAA;AAPF;AAQE;EACE,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;AANJ;AAWE;EACE,WAAA;EACA,8BAAA;EACA,SAAA;EACA,eAAA;AATJ;;AAaA;EACE,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;AAVF;AAWE;EACE,eAAA;AATJ;;AAkBE;EACF,YAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,4BAAA;EACA,iBAAA;AAfA;AAoBE;EACE,eAAA;EACJ,kBAAA;AAlBA;;AAuBA;EACE;IACE,eAAA;IACA,YAAA;IACA,iBAAA;EApBF;;EAsBA;IACE,eAAA;EAnBF;;EAqBA;;;IAGE,eAAA;IACA,iBAAA;IACA,YAAA;EAlBF;;EAoBA;IACE,eAAA;EAjBF;;EAoBA;IACE,YAAA;IACA,aAAA;EAjBF;AACF","sourcesContent":["@font-face {\n  font-family: \"MainTitle\";\n  src: url(\"../fonts/Praise-Regular.ttf\");\n}\n@font-face {\n  font-family: \"NavAndSmallTitle\";\n  src: url(\"../fonts/ShadowsIntoLight-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Descriptions\";\n  src: url(\"../fonts/PatrickHand-Regular.ttf\");\n}\n\n* {\n  box-sizing: border-box;\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-family: sans-serif;\n  align-self: center;\n  font-family: \"Descriptions\";\n}\n\nbody {\n  background: url(\"../backgrounds/white-brick.jpg\");\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.nav-bar {\n  justify-content: end;\n  &__item {\n    font-family: \"NavAndSmallTitle\";\n    font-size: 25px;\n    margin-right: 16px;\n    padding: 16px;\n    user-select: none;\n    cursor: pointer;\n    &--active,\n    &:hover {\n      transition: 0.1s;\n      transform: scale(1.4);\n      text-shadow: 5px 2px 2px rgba(150, 150, 150, 1);\n    }\n  }\n}\n\n.home__ {\n  &title {\n    font-family: \"MainTitle\";\n    font-size: 64px;\n    &--tree {\n      text-shadow: 5px 2px 2px rgba(150, 150, 150, 1);\n      color: green;\n    }\n  }\n\n  &welcome-container {\n    margin-top: 16px;\n    padding: 16px 20px;\n    border: goldenrod solid;\n    width: 75%;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px rgba(150, 150, 150, 1);\n    text-shadow: 2px 2px 2px black;\n    font-size: 32px;\n    text-align: center;\n    color: orange;\n  }\n\n  &welcome-msg {\n  }\n  &title-category {\n    font-family: \"NavAndSmallTitle\";\n    font-size: 40px;\n  }\n}\n\n.hour {\n  margin-bottom: 2em;\n  padding-top: 2em;\n  align-items: center;\n  &__title {\n    border: green solid;\n    border-radius: 15px;\n    padding: 0px 8px;\n    margin-bottom: 8px;\n  }\n  &__list {\n  }\n\n  &__list-item {\n    width: 100%;\n    justify-content: space-between;\n    gap: 16px;\n    font-size: 25px;\n  }\n}\n\n.location {\n  border: orange solid;\n  padding: 0.5em 1em;\n  border-radius: 15px;\n  margin-left: 1em;\n  align-self: start;\n  &__address {\n    font-size: 25px;\n  }\n}\n\n.menu{\n\n&__item-{\n  &field{\n  }\n  &img{\nwidth: 800px;\nheight: 500px;\nobject-fit: cover;\nborder-radius: 15px;\noutline:goldenrod solid 2px;\nbox-shadow: inset;\n  }\n  &name{\n\n  }\n  &description{\n    margin-top: 1em;\nmargin-bottom: 2em;\n  }\n}\n}\n\n@media only screen and (max-width: 600px) {\n  .nav-bar__item {\n    font-size: 20px;\n    padding: 8px;\n    margin-right: 8px;\n  }\n  .home__title {\n    font-size: 50px;\n  }\n  .home__welcome-container,\n  .hour__list-item,\n  .location__address {\n    font-size: 16px;\n    text-shadow: none;\n    color: black\n  }\n  .home__title-category {\n    font-size: 25px;\n  }\n\n  .menu__item-img{\n    width: 400px;\n    height: 250px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attachToContainer": () => (/* binding */ attachToContainer)
/* harmony export */ });
/* harmony import */ var _logos_chicken_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logos/chicken-logo.png */ "./src/logos/chicken-logo.png");
/* harmony import */ var _logos_phone_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logos/phone-logo.png */ "./src/logos/phone-logo.png");
/* harmony import */ var _logos_github_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logos/github-logo.png */ "./src/logos/github-logo.png");




const attachToContainer = function (container) {
  container.appendChild(contactInfoBuilder());
};
function contactInfoBuilder() {
  const container = document.createElement("div");
  container.classList = "flex-col contact";
  container.appendChild(titleBuilder());
  container.appendChild(contactFieldBuilder());
  return container;

  function titleBuilder() {
    const title = document.createElement("h1");
    title.classList = "contact__title";
    title.textContent = "Contact Us";
    return title;
  }

  function contactFieldBuilder() {
    const contactField = document.createElement("ul");
    contactField.classList = "flex-col contact__field";
    contactField.appendChild(
      contactBuilder(_logos_phone_logo_png__WEBPACK_IMPORTED_MODULE_1__, "Call us at 1-800-867-5309")
    );
    contactField.appendChild(
      contactBuilder(
        _logos_chicken_logo_png__WEBPACK_IMPORTED_MODULE_0__,
        "follow us on Clucker @theRealFakeRestaurant",
        "https://youtu.be/dQw4w9WgXcQ?t=10"
      )
    );
    contactField.appendChild(
      contactBuilder(
        _logos_github_logo_png__WEBPACK_IMPORTED_MODULE_2__,
        "check us out on GitHub",
        "https://github.com/palmerusaf/restaurant-page"
      )
    );
    return contactField;

    function contactBuilder(logoSource, content, link) {
      const contact = document.createElement("li");
      contact.classList = "flex-row contact__item";

      if (logoSource) contact.appendChild(logoBuilder(logoSource));
      link
        ? contact.appendChild(linkBuilder(content, link))
        : (contact.innerHTML += content);
      return contact;

      function logoBuilder(logoSource) {
        const logo = document.createElement("img");
        logo.classList = "contact__logo";
        logo.alt = "contact logo";
        logo.src = logoSource;
        return logo;
      }

      function linkBuilder(content, link) {
        const contentLink = document.createElement("a");
        contentLink.href = link;
        contentLink.textContent = content;
        return contentLink;
      }
    }
  }
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attachToContainer": () => (/* binding */ attachToContainer)
/* harmony export */ });
const attachToContainer = function (container) {
  container.appendChild(buildTitle());
  container.appendChild(buildWelcomeMsg());
  container.appendChild(buildHourInfo());
  container.appendChild(buildLocationInfo());
};

function buildTitle() {
  const title = document.createElement("h1");
  title.classList = "home__title";
  title.textContent = "Café Under the";
  const span = document.createElement("span");
  span.classList = "home__title home__title--tree";
  span.textContent = "Tree";
  title.appendChild(span);
  return title;
}

function buildWelcomeMsg() {
  const container = document.createElement("div");
  container.classList = "flex-col home__welcome-container";
  const message = document.createElement("p");
  message.classList = "home__welcome-msg";
  message.textContent =
    "Welcome our website. We specialize in Thai-fusion. Also, visit us and treat yourself to one of our specialty coffee infused drinks. We look forward to seeing you. Check out our menu above and feel free to contact us.";
  container.appendChild(message);
  return container;
}

function buildHourInfo() {
  const container = document.createElement("div");
  container.classList = "flex-col hour";
  const title = buildCategoryTitle("Hours");
  title.classList.add("hour__title");
  container.appendChild(title);
  container.appendChild(buildList());
  return container;

  function buildList() {
    const listTextContent = [
      { day: "Tuesday", hours: "8:00am-5:00pm" },
      { day: "Wednesday", hours: "8:00am-5:00pm" },
      { day: "Thursday", hours: "8:00am-5:00pm" },
      { day: "Friday", hours: "8:00am-5:00pm" },
      { day: "Saturday", hours: "8:00am-5:00pm" },
      { day: "Sunday", hours: "8:00am-5:00pm" },
      { day: "Monday", hours: "closed" },
    ];
    const list = document.createElement("ul");
    list.classList = "flex-col hour__list";
    listTextContent.forEach((textContentItem) =>
      list.appendChild(buildHourItemWithContent(textContentItem))
    );
    return list;
  }

  function buildHourItemWithContent(content) {
    const container = document.createElement("li");
    const day = document.createElement("span");
    day.textContent = content.day;
    const hours = document.createElement("span");
    hours.textContent = content.hours;
    container.appendChild(day);
    container.appendChild(hours);
    container.classList = "flex-row hour__list-item";
    return container;
  }
}

function buildLocationInfo() {
  const container = document.createElement("div");
  container.classList = "flex-col location";
  container.appendChild(buildCategoryTitle("Location"));
  container.appendChild(buildAddress());
  return container;

  function buildAddress() {
    const address = document.createElement("address");
    address.classList = "location__address";
    address.innerHTML = "1234 Fake Street<br>Fake City, NA 1234<br>USSAR";
    return address;
  }
}

function buildCategoryTitle(title) {
  const h2 = document.createElement("h2");
  h2.classList = "home__title-category";
  h2.textContent = title;
  return h2;
}




/***/ }),

/***/ "./src/img sync recursive \\.(png|svg|jpg|jpeg|gif)$/":
/*!**************************************************!*\
  !*** ./src/img/ sync \.(png|svg|jpg|jpeg|gif)$/ ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./chicken.jpg": "./src/img/chicken.jpg",
	"./jelly-fish.jpg": "./src/img/jelly-fish.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img sync recursive \\.(png|svg|jpg|jpeg|gif)$/";

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attachToContainer": () => (/* binding */ attachToContainer)
/* harmony export */ });
/* harmony import */ var _menu_items_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items.json */ "./src/menu-items.json");


// Load all imgs from img folder so json file can use imgs dynamically
let imgCache = {};
function importAll(r) {
  r.keys().forEach((key) => (imgCache[key] = r(key)));
}
importAll(__webpack_require__("./src/img sync recursive \\.(png|svg|jpg|jpeg|gif)$/"));

const attachToContainer = function (container) {
  container.appendChild(buildMenu());
};

function buildMenu() {
  const container = document.createElement("div");
  container.classList = "flex-col menu";
  container.appendChild(buildTitle());
  container.appendChild(buildMenuList());
  return container;
}

function buildTitle() {
  const title = document.createElement("h1");
  title.classList = "home__title menu__title";
  title.textContent = "Menu";
  return title;
}

function buildMenuList() {
  const itemField = document.createElement("div");
  itemField.classList = "flex-col menu__item-field";
  _menu_items_json__WEBPACK_IMPORTED_MODULE_0__.forEach((item) => {
    itemField.appendChild(buildItemName(item));
    itemField.appendChild(buildItemImage(item));
    itemField.appendChild(buildItemDescription(item));
  });
  return itemField;

  function buildItemName(item) {
    const menuItemName = document.createElement("h2");
    menuItemName.classList = "home__title-category menu__item-name";
    menuItemName.textContent = item.name;
    return menuItemName;
  }

  function buildItemImage(item) {
    const itemImage = document.createElement("img");
    itemImage.classList = "menu__item-img";
    itemImage.src = imgCache[item.img];
    itemImage.alt = item.altText;
    return itemImage;
  }

  function buildItemDescription(item) {
    const itemDescription = document.createElement("div");
    itemDescription.classList = "menu__item-description location__address";
    itemDescription.textContent = item.description;
    return itemDescription;
  }
}




/***/ }),

/***/ "./src/backgrounds/white-brick.jpg":
/*!*****************************************!*\
  !*** ./src/backgrounds/white-brick.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d63583275013ee593e18.jpg";

/***/ }),

/***/ "./src/fonts/PatrickHand-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/PatrickHand-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "17a73bceefab9cf7e9f5.ttf";

/***/ }),

/***/ "./src/fonts/Praise-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Praise-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "da7c1cd869a66eb1188a.ttf";

/***/ }),

/***/ "./src/fonts/ShadowsIntoLight-Regular.ttf":
/*!************************************************!*\
  !*** ./src/fonts/ShadowsIntoLight-Regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "82b02b2ef40711b8a1be.ttf";

/***/ }),

/***/ "./src/img/chicken.jpg":
/*!*****************************!*\
  !*** ./src/img/chicken.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "92075e0dcc41c887e314.jpg";

/***/ }),

/***/ "./src/img/jelly-fish.jpg":
/*!********************************!*\
  !*** ./src/img/jelly-fish.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d6aab3c8f1d8a3dad0cf.jpg";

/***/ }),

/***/ "./src/logos/chicken-logo.png":
/*!************************************!*\
  !*** ./src/logos/chicken-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9cb0e171ac1b0484358d.png";

/***/ }),

/***/ "./src/logos/github-logo.png":
/*!***********************************!*\
  !*** ./src/logos/github-logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "357c0dc1678ce78b2390.png";

/***/ }),

/***/ "./src/logos/phone-logo.png":
/*!**********************************!*\
  !*** ./src/logos/phone-logo.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6a5fb8ecf0f2dc866980.png";

/***/ }),

/***/ "./src/menu-items.json":
/*!*****************************!*\
  !*** ./src/menu-items.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"Chicken","img":"./chicken.jpg","altText":"pic of chicken","description":"walks on two legs etc..."},{"name":"Jelly Fish","img":"./jelly-fish.jpg","altText":"pic of jellyfish","description":"served with a side of peanuts and butter."}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





//initialize the page
  document.body.appendChild(buildNavBar());
  document.body.appendChild(buildContentContainer());

  function buildContentContainer() {
    const container = document.createElement("div");
    container.classList = "flex-col";
    container.id = "content";
    _menu__WEBPACK_IMPORTED_MODULE_2__.attachToContainer(container)
    return container;
  }

  function buildNavBar() {
    const navBar = document.createElement("nav");
    navBar.appendChild(buildListOfNavButtons());
    return navBar;
  }

  function buildListOfNavButtons() {
    const list = document.createElement("ul");
    list.classList = "flex-row nav-bar";
    list.appendChild(buildNavButton("Home"));
    list.appendChild(buildNavButton("Menu"));
    list.appendChild(buildNavButton("Contact"));
    return list;
  }

  function buildNavButton(text) {
    const item = document.createElement("li");
    item.classList = "nav-bar__item";
    if (text === "Home") item.classList.add("nav-bar__item--active");
    item.textContent = text;
    item.addEventListener("click", handleNavButtonClick);
    return item;
  }

  function handleNavButtonClick(event) {
    const navButton = event.target;
    switchActiveNavButton(navButton);
    removeAllContent();
    addContentBasedNavButtonSelected(navButton);
  }

  function switchActiveNavButton(button) {
    const oldActiveButton = document.querySelector(".nav-bar__item--active");
    oldActiveButton.classList.remove("nav-bar__item--active");
    button.classList.add("nav-bar__item--active");
  }

  function removeAllContent() {
    const contentContainer = document.getElementById("content");
    contentContainer.textContent = "";
  }

  function addContentBasedNavButtonSelected(navButton) {
    const buttonText = navButton.textContent.toLowerCase();
    const contentContainer = document.getElementById("content");
    switch (buttonText) {
      case "home":
        _home__WEBPACK_IMPORTED_MODULE_1__.attachToContainer(contentContainer);
        break;
      case "menu":
        _menu__WEBPACK_IMPORTED_MODULE_2__.attachToContainer(contentContainer);
        break;
      case "contact":
        _contact__WEBPACK_IMPORTED_MODULE_3__.attachToContainer(contentContainer);
        break;

      default:
        console.log(
          "ERROR: no content module available for " + buttonText + "button."
        );
        break;
    }
  }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjBCO0FBQ1k7QUFDQTtBQUNNOztBQUU1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUE2QjtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUE2QjtBQUNyQztBQUNBO0FBQ0EsUUFBUSxvREFBNkI7QUFDckM7QUFDQTtBQUNBLFFBQVEsdURBQWdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlLnNjc3M/M2ZmMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWd8c3luY3wvXFwuKHBuZ3xzdmd8anBnfGpwZWd8Z2lmKSQvaSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1ByYWlzZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1NoYWRvd3NJbnRvTGlnaHQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9QYXRyaWNrSGFuZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2JhY2tncm91bmRzL3doaXRlLWJyaWNrLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYWluVGl0bGVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmF2QW5kU21hbGxUaXRsZVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEZXNjcmlwdGlvbnNcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEZXNjcmlwdGlvbnNcXFwiO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuLm5hdi1iYXJfX2l0ZW0ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOYXZBbmRTbWFsbFRpdGxlXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdi1iYXJfX2l0ZW0tLWFjdGl2ZSwgLm5hdi1iYXJfX2l0ZW06aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogMC4xcztcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG4gIHRleHQtc2hhZG93OiA1cHggMnB4IDJweCAjOTY5Njk2O1xcbn1cXG5cXG4uaG9tZV9fdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYWluVGl0bGVcXFwiO1xcbiAgZm9udC1zaXplOiA2NHB4O1xcbn1cXG4uaG9tZV9fdGl0bGUtLXRyZWUge1xcbiAgdGV4dC1zaGFkb3c6IDVweCAycHggMnB4ICM5Njk2OTY7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcbi5ob21lX193ZWxjb21lLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgYm9yZGVyOiBnb2xkZW5yb2Qgc29saWQ7XFxuICB3aWR0aDogNzUlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4ICM5Njk2OTY7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XFxuICBmb250LXNpemU6IDMycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogb3JhbmdlO1xcbn1cXG4uaG9tZV9fdGl0bGUtY2F0ZWdvcnkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOYXZBbmRTbWFsbFRpdGxlXFxcIjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmhvdXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgcGFkZGluZy10b3A6IDJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ob3VyX190aXRsZSB7XFxuICBib3JkZXI6IGdyZWVuIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcbi5ob3VyX19saXN0LWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDE2cHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBib3JkZXI6IG9yYW5nZSBzb2xpZDtcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcbi5sb2NhdGlvbl9fYWRkcmVzcyB7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5tZW51X19pdGVtLWltZyB7XFxuICB3aWR0aDogODAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgb3V0bGluZTogZ29sZGVucm9kIHNvbGlkIDJweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0O1xcbn1cXG4ubWVudV9faXRlbS1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5uYXYtYmFyX19pdGVtIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgfVxcblxcbiAgLmhvbWVfX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgfVxcblxcbiAgLmhvbWVfX3dlbGNvbWUtY29udGFpbmVyLFxcbi5ob3VyX19saXN0LWl0ZW0sXFxuLmxvY2F0aW9uX19hZGRyZXNzIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbiAgLmhvbWVfX3RpdGxlLWNhdGVnb3J5IHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgfVxcblxcbiAgLm1lbnVfX2l0ZW0taW1nIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBQTtFQUNBLDRDQUFBO0FBQ0Y7QUFDQTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUFDRjtBQUNBO0VBQ0UsMkJBQUE7RUFDQSw0Q0FBQTtBQUNGO0FBRUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsbURBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtBQUFGO0FBQ0U7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBRUUsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBQ047O0FBS0U7RUFDRSx3QkFBQTtFQUNBLGVBQUE7QUFGSjtBQUdJO0VBQ0UsZ0NBQUE7RUFDQSxZQUFBO0FBRE47QUFLRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBSEo7QUFRRTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUEY7QUFRRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTko7QUFXRTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBVEo7O0FBYUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBVkY7QUFXRTtFQUNFLGVBQUE7QUFUSjs7QUFrQkU7RUFDRixZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBZkE7QUFvQkU7RUFDRSxlQUFBO0VBQ0osa0JBQUE7QUFsQkE7O0FBdUJBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VBcEJGOztFQXNCQTtJQUNFLGVBQUE7RUFuQkY7O0VBcUJBOzs7SUFHRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VBbEJGOztFQW9CQTtJQUNFLGVBQUE7RUFqQkY7O0VBb0JBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFqQkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWFpblRpdGxlXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9QcmFpc2UtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk5hdkFuZFNtYWxsVGl0bGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1NoYWRvd3NJbnRvTGlnaHQtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkRlc2NyaXB0aW9uc1xcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvUGF0cmlja0hhbmQtUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGVzY3JpcHRpb25zXFxcIjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2JhY2tncm91bmRzL3doaXRlLWJyaWNrLmpwZ1xcXCIpO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAmX19pdGVtIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJOYXZBbmRTbWFsbFRpdGxlXFxcIjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICYtLWFjdGl2ZSxcXG4gICAgJjpob3ZlciB7XFxuICAgICAgdHJhbnNpdGlvbjogMC4xcztcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuICAgICAgdGV4dC1zaGFkb3c6IDVweCAycHggMnB4IHJnYmEoMTUwLCAxNTAsIDE1MCwgMSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmhvbWVfXyB7XFxuICAmdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1haW5UaXRsZVxcXCI7XFxuICAgIGZvbnQtc2l6ZTogNjRweDtcXG4gICAgJi0tdHJlZSB7XFxuICAgICAgdGV4dC1zaGFkb3c6IDVweCAycHggMnB4IHJnYmEoMTUwLCAxNTAsIDE1MCwgMSk7XFxuICAgICAgY29sb3I6IGdyZWVuO1xcbiAgICB9XFxuICB9XFxuXFxuICAmd2VsY29tZS1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICAgIGJvcmRlcjogZ29sZGVucm9kIHNvbGlkO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDEpO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogb3JhbmdlO1xcbiAgfVxcblxcbiAgJndlbGNvbWUtbXNnIHtcXG4gIH1cXG4gICZ0aXRsZS1jYXRlZ29yeSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTmF2QW5kU21hbGxUaXRsZVxcXCI7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gIH1cXG59XFxuXFxuLmhvdXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgcGFkZGluZy10b3A6IDJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAmX190aXRsZSB7XFxuICAgIGJvcmRlcjogZ3JlZW4gc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDBweCA4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIH1cXG4gICZfX2xpc3Qge1xcbiAgfVxcblxcbiAgJl9fbGlzdC1pdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICB9XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBib3JkZXI6IG9yYW5nZSBzb2xpZDtcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAmX19hZGRyZXNzIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgfVxcbn1cXG5cXG4ubWVudXtcXG5cXG4mX19pdGVtLXtcXG4gICZmaWVsZHtcXG4gIH1cXG4gICZpbWd7XFxud2lkdGg6IDgwMHB4O1xcbmhlaWdodDogNTAwcHg7XFxub2JqZWN0LWZpdDogY292ZXI7XFxuYm9yZGVyLXJhZGl1czogMTVweDtcXG5vdXRsaW5lOmdvbGRlbnJvZCBzb2xpZCAycHg7XFxuYm94LXNoYWRvdzogaW5zZXQ7XFxuICB9XFxuICAmbmFtZXtcXG5cXG4gIH1cXG4gICZkZXNjcmlwdGlvbntcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcbm1hcmdpbi1ib3R0b206IDJlbTtcXG4gIH1cXG59XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5uYXYtYmFyX19pdGVtIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgfVxcbiAgLmhvbWVfX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgfVxcbiAgLmhvbWVfX3dlbGNvbWUtY29udGFpbmVyLFxcbiAgLmhvdXJfX2xpc3QtaXRlbSxcXG4gIC5sb2NhdGlvbl9fYWRkcmVzcyB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICAgIGNvbG9yOiBibGFja1xcbiAgfVxcbiAgLmhvbWVfX3RpdGxlLWNhdGVnb3J5IHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgfVxcblxcbiAgLm1lbnVfX2l0ZW0taW1ne1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNoaWNrZW5Mb2dvIGZyb20gXCIuL2xvZ29zL2NoaWNrZW4tbG9nby5wbmdcIjtcbmltcG9ydCBwaG9uZUxvZ28gZnJvbSBcIi4vbG9nb3MvcGhvbmUtbG9nby5wbmdcIjtcbmltcG9ydCBnaXRodWJMb2dvIGZyb20gXCIuL2xvZ29zL2dpdGh1Yi1sb2dvLnBuZ1wiO1xuXG5jb25zdCBhdHRhY2hUb0NvbnRhaW5lciA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvQnVpbGRlcigpKTtcbn07XG5mdW5jdGlvbiBjb250YWN0SW5mb0J1aWxkZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QgPSBcImZsZXgtY29sIGNvbnRhY3RcIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQnVpbGRlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RGaWVsZEJ1aWxkZXIoKSk7XG4gIHJldHVybiBjb250YWluZXI7XG5cbiAgZnVuY3Rpb24gdGl0bGVCdWlsZGVyKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdCA9IFwiY29udGFjdF9fdGl0bGVcIjtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRhY3RGaWVsZEJ1aWxkZXIoKSB7XG4gICAgY29uc3QgY29udGFjdEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnRhY3RGaWVsZC5jbGFzc0xpc3QgPSBcImZsZXgtY29sIGNvbnRhY3RfX2ZpZWxkXCI7XG4gICAgY29udGFjdEZpZWxkLmFwcGVuZENoaWxkKFxuICAgICAgY29udGFjdEJ1aWxkZXIocGhvbmVMb2dvLCBcIkNhbGwgdXMgYXQgMS04MDAtODY3LTUzMDlcIilcbiAgICApO1xuICAgIGNvbnRhY3RGaWVsZC5hcHBlbmRDaGlsZChcbiAgICAgIGNvbnRhY3RCdWlsZGVyKFxuICAgICAgICBjaGlja2VuTG9nbyxcbiAgICAgICAgXCJmb2xsb3cgdXMgb24gQ2x1Y2tlciBAdGhlUmVhbEZha2VSZXN0YXVyYW50XCIsXG4gICAgICAgIFwiaHR0cHM6Ly95b3V0dS5iZS9kUXc0dzlXZ1hjUT90PTEwXCJcbiAgICAgIClcbiAgICApO1xuICAgIGNvbnRhY3RGaWVsZC5hcHBlbmRDaGlsZChcbiAgICAgIGNvbnRhY3RCdWlsZGVyKFxuICAgICAgICBnaXRodWJMb2dvLFxuICAgICAgICBcImNoZWNrIHVzIG91dCBvbiBHaXRIdWJcIixcbiAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vcGFsbWVydXNhZi9yZXN0YXVyYW50LXBhZ2VcIlxuICAgICAgKVxuICAgICk7XG4gICAgcmV0dXJuIGNvbnRhY3RGaWVsZDtcblxuICAgIGZ1bmN0aW9uIGNvbnRhY3RCdWlsZGVyKGxvZ29Tb3VyY2UsIGNvbnRlbnQsIGxpbmspIHtcbiAgICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBjb250YWN0LmNsYXNzTGlzdCA9IFwiZmxleC1yb3cgY29udGFjdF9faXRlbVwiO1xuXG4gICAgICBpZiAobG9nb1NvdXJjZSkgY29udGFjdC5hcHBlbmRDaGlsZChsb2dvQnVpbGRlcihsb2dvU291cmNlKSk7XG4gICAgICBsaW5rXG4gICAgICAgID8gY29udGFjdC5hcHBlbmRDaGlsZChsaW5rQnVpbGRlcihjb250ZW50LCBsaW5rKSlcbiAgICAgICAgOiAoY29udGFjdC5pbm5lckhUTUwgKz0gY29udGVudCk7XG4gICAgICByZXR1cm4gY29udGFjdDtcblxuICAgICAgZnVuY3Rpb24gbG9nb0J1aWxkZXIobG9nb1NvdXJjZSkge1xuICAgICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbG9nby5jbGFzc0xpc3QgPSBcImNvbnRhY3RfX2xvZ29cIjtcbiAgICAgICAgbG9nby5hbHQgPSBcImNvbnRhY3QgbG9nb1wiO1xuICAgICAgICBsb2dvLnNyYyA9IGxvZ29Tb3VyY2U7XG4gICAgICAgIHJldHVybiBsb2dvO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBsaW5rQnVpbGRlcihjb250ZW50LCBsaW5rKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGNvbnRlbnRMaW5rLmhyZWYgPSBsaW5rO1xuICAgICAgICBjb250ZW50TGluay50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHJldHVybiBjb250ZW50TGluaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCB7IGF0dGFjaFRvQ29udGFpbmVyIH07XG4iLCJjb25zdCBhdHRhY2hUb0NvbnRhaW5lciA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkVGl0bGUoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFdlbGNvbWVNc2coKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEhvdXJJbmZvKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRMb2NhdGlvbkluZm8oKSk7XG59O1xuXG5mdW5jdGlvbiBidWlsZFRpdGxlKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0ID0gXCJob21lX190aXRsZVwiO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ2Fmw6kgVW5kZXIgdGhlXCI7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi5jbGFzc0xpc3QgPSBcImhvbWVfX3RpdGxlIGhvbWVfX3RpdGxlLS10cmVlXCI7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBcIlRyZWVcIjtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gYnVpbGRXZWxjb21lTXNnKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0ID0gXCJmbGV4LWNvbCBob21lX193ZWxjb21lLWNvbnRhaW5lclwiO1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG1lc3NhZ2UuY2xhc3NMaXN0ID0gXCJob21lX193ZWxjb21lLW1zZ1wiO1xuICBtZXNzYWdlLnRleHRDb250ZW50ID1cbiAgICBcIldlbGNvbWUgb3VyIHdlYnNpdGUuIFdlIHNwZWNpYWxpemUgaW4gVGhhaS1mdXNpb24uIEFsc28sIHZpc2l0IHVzIGFuZCB0cmVhdCB5b3Vyc2VsZiB0byBvbmUgb2Ygb3VyIHNwZWNpYWx0eSBjb2ZmZWUgaW5mdXNlZCBkcmlua3MuIFdlIGxvb2sgZm9yd2FyZCB0byBzZWVpbmcgeW91LiBDaGVjayBvdXQgb3VyIG1lbnUgYWJvdmUgYW5kIGZlZWwgZnJlZSB0byBjb250YWN0IHVzLlwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkSG91ckluZm8oKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QgPSBcImZsZXgtY29sIGhvdXJcIjtcbiAgY29uc3QgdGl0bGUgPSBidWlsZENhdGVnb3J5VGl0bGUoXCJIb3Vyc1wiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImhvdXJfX3RpdGxlXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRMaXN0KCkpO1xuICByZXR1cm4gY29udGFpbmVyO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkTGlzdCgpIHtcbiAgICBjb25zdCBsaXN0VGV4dENvbnRlbnQgPSBbXG4gICAgICB7IGRheTogXCJUdWVzZGF5XCIsIGhvdXJzOiBcIjg6MDBhbS01OjAwcG1cIiB9LFxuICAgICAgeyBkYXk6IFwiV2VkbmVzZGF5XCIsIGhvdXJzOiBcIjg6MDBhbS01OjAwcG1cIiB9LFxuICAgICAgeyBkYXk6IFwiVGh1cnNkYXlcIiwgaG91cnM6IFwiODowMGFtLTU6MDBwbVwiIH0sXG4gICAgICB7IGRheTogXCJGcmlkYXlcIiwgaG91cnM6IFwiODowMGFtLTU6MDBwbVwiIH0sXG4gICAgICB7IGRheTogXCJTYXR1cmRheVwiLCBob3VyczogXCI4OjAwYW0tNTowMHBtXCIgfSxcbiAgICAgIHsgZGF5OiBcIlN1bmRheVwiLCBob3VyczogXCI4OjAwYW0tNTowMHBtXCIgfSxcbiAgICAgIHsgZGF5OiBcIk1vbmRheVwiLCBob3VyczogXCJjbG9zZWRcIiB9LFxuICAgIF07XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBsaXN0LmNsYXNzTGlzdCA9IFwiZmxleC1jb2wgaG91cl9fbGlzdFwiO1xuICAgIGxpc3RUZXh0Q29udGVudC5mb3JFYWNoKCh0ZXh0Q29udGVudEl0ZW0pID0+XG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGJ1aWxkSG91ckl0ZW1XaXRoQ29udGVudCh0ZXh0Q29udGVudEl0ZW0pKVxuICAgICk7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEhvdXJJdGVtV2l0aENvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBkYXkudGV4dENvbnRlbnQgPSBjb250ZW50LmRheTtcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGhvdXJzLnRleHRDb250ZW50ID0gY29udGVudC5ob3VycztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QgPSBcImZsZXgtcm93IGhvdXJfX2xpc3QtaXRlbVwiO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRMb2NhdGlvbkluZm8oKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QgPSBcImZsZXgtY29sIGxvY2F0aW9uXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZENhdGVnb3J5VGl0bGUoXCJMb2NhdGlvblwiKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEFkZHJlc3MoKSk7XG4gIHJldHVybiBjb250YWluZXI7XG5cbiAgZnVuY3Rpb24gYnVpbGRBZGRyZXNzKCkge1xuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYWRkcmVzc1wiKTtcbiAgICBhZGRyZXNzLmNsYXNzTGlzdCA9IFwibG9jYXRpb25fX2FkZHJlc3NcIjtcbiAgICBhZGRyZXNzLmlubmVySFRNTCA9IFwiMTIzNCBGYWtlIFN0cmVldDxicj5GYWtlIENpdHksIE5BIDEyMzQ8YnI+VVNTQVJcIjtcbiAgICByZXR1cm4gYWRkcmVzcztcbiAgfVxufVxuXG5mdW5jdGlvbiBidWlsZENhdGVnb3J5VGl0bGUodGl0bGUpIHtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGgyLmNsYXNzTGlzdCA9IFwiaG9tZV9fdGl0bGUtY2F0ZWdvcnlcIjtcbiAgaDIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgcmV0dXJuIGgyO1xufVxuXG5leHBvcnQgeyBhdHRhY2hUb0NvbnRhaW5lciB9O1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2NoaWNrZW4uanBnXCI6IFwiLi9zcmMvaW1nL2NoaWNrZW4uanBnXCIsXG5cdFwiLi9qZWxseS1maXNoLmpwZ1wiOiBcIi4vc3JjL2ltZy9qZWxseS1maXNoLmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWcgc3luYyByZWN1cnNpdmUgXFxcXC4ocG5nfHN2Z3xqcGd8anBlZ3xnaWYpJC9cIjsiLCJpbXBvcnQgKiBhcyBtZW51SXRlbXMgZnJvbSBcIi4vbWVudS1pdGVtcy5qc29uXCI7XG5cbi8vIExvYWQgYWxsIGltZ3MgZnJvbSBpbWcgZm9sZGVyIHNvIGpzb24gZmlsZSBjYW4gdXNlIGltZ3MgZHluYW1pY2FsbHlcbmxldCBpbWdDYWNoZSA9IHt9O1xuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgci5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiAoaW1nQ2FjaGVba2V5XSA9IHIoa2V5KSkpO1xufVxuaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dChcIi4vaW1nL1wiLCB0cnVlLCAvXFwuKHBuZ3xzdmd8anBnfGpwZWd8Z2lmKSQvaSkpO1xuXG5jb25zdCBhdHRhY2hUb0NvbnRhaW5lciA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkTWVudSgpKTtcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkTWVudSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdCA9IFwiZmxleC1jb2wgbWVudVwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRUaXRsZSgpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkTWVudUxpc3QoKSk7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVGl0bGUoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QgPSBcImhvbWVfX3RpdGxlIG1lbnVfX3RpdGxlXCI7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gYnVpbGRNZW51TGlzdCgpIHtcbiAgY29uc3QgaXRlbUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbUZpZWxkLmNsYXNzTGlzdCA9IFwiZmxleC1jb2wgbWVudV9faXRlbS1maWVsZFwiO1xuICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW1GaWVsZC5hcHBlbmRDaGlsZChidWlsZEl0ZW1OYW1lKGl0ZW0pKTtcbiAgICBpdGVtRmllbGQuYXBwZW5kQ2hpbGQoYnVpbGRJdGVtSW1hZ2UoaXRlbSkpO1xuICAgIGl0ZW1GaWVsZC5hcHBlbmRDaGlsZChidWlsZEl0ZW1EZXNjcmlwdGlvbihpdGVtKSk7XG4gIH0pO1xuICByZXR1cm4gaXRlbUZpZWxkO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkSXRlbU5hbWUoaXRlbSkge1xuICAgIGNvbnN0IG1lbnVJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtZW51SXRlbU5hbWUuY2xhc3NMaXN0ID0gXCJob21lX190aXRsZS1jYXRlZ29yeSBtZW51X19pdGVtLW5hbWVcIjtcbiAgICBtZW51SXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgcmV0dXJuIG1lbnVJdGVtTmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkSXRlbUltYWdlKGl0ZW0pIHtcbiAgICBjb25zdCBpdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGl0ZW1JbWFnZS5jbGFzc0xpc3QgPSBcIm1lbnVfX2l0ZW0taW1nXCI7XG4gICAgaXRlbUltYWdlLnNyYyA9IGltZ0NhY2hlW2l0ZW0uaW1nXTtcbiAgICBpdGVtSW1hZ2UuYWx0ID0gaXRlbS5hbHRUZXh0O1xuICAgIHJldHVybiBpdGVtSW1hZ2U7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEl0ZW1EZXNjcmlwdGlvbihpdGVtKSB7XG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0ID0gXCJtZW51X19pdGVtLWRlc2NyaXB0aW9uIGxvY2F0aW9uX19hZGRyZXNzXCI7XG4gICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICByZXR1cm4gaXRlbURlc2NyaXB0aW9uO1xuICB9XG59XG5cbmV4cG9ydCB7IGF0dGFjaFRvQ29udGFpbmVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vY3NzL3N0eWxlLnNjc3NcIjtcbmltcG9ydCAqIGFzIGhvbWVDb250ZW50IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCAqIGFzIG1lbnVDb250ZW50IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCAqIGFzIGNvbnRhY3RDb250ZW50IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuLy9pbml0aWFsaXplIHRoZSBwYWdlXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnVpbGROYXZCYXIoKSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnVpbGRDb250ZW50Q29udGFpbmVyKCkpO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkQ29udGVudENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QgPSBcImZsZXgtY29sXCI7XG4gICAgY29udGFpbmVyLmlkID0gXCJjb250ZW50XCI7XG4gICAgbWVudUNvbnRlbnQuYXR0YWNoVG9Db250YWluZXIoY29udGFpbmVyKVxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZE5hdkJhcigpIHtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChidWlsZExpc3RPZk5hdkJ1dHRvbnMoKSk7XG4gICAgcmV0dXJuIG5hdkJhcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkTGlzdE9mTmF2QnV0dG9ucygpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxpc3QuY2xhc3NMaXN0ID0gXCJmbGV4LXJvdyBuYXYtYmFyXCI7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChidWlsZE5hdkJ1dHRvbihcIkhvbWVcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoYnVpbGROYXZCdXR0b24oXCJNZW51XCIpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGJ1aWxkTmF2QnV0dG9uKFwiQ29udGFjdFwiKSk7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZE5hdkJ1dHRvbih0ZXh0KSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBpdGVtLmNsYXNzTGlzdCA9IFwibmF2LWJhcl9faXRlbVwiO1xuICAgIGlmICh0ZXh0ID09PSBcIkhvbWVcIikgaXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2LWJhcl9faXRlbS0tYWN0aXZlXCIpO1xuICAgIGl0ZW0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU5hdkJ1dHRvbkNsaWNrKTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5hdkJ1dHRvbkNsaWNrKGV2ZW50KSB7XG4gICAgY29uc3QgbmF2QnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICAgIHN3aXRjaEFjdGl2ZU5hdkJ1dHRvbihuYXZCdXR0b24pO1xuICAgIHJlbW92ZUFsbENvbnRlbnQoKTtcbiAgICBhZGRDb250ZW50QmFzZWROYXZCdXR0b25TZWxlY3RlZChuYXZCdXR0b24pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoQWN0aXZlTmF2QnV0dG9uKGJ1dHRvbikge1xuICAgIGNvbnN0IG9sZEFjdGl2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJhcl9faXRlbS0tYWN0aXZlXCIpO1xuICAgIG9sZEFjdGl2ZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LWJhcl9faXRlbS0tYWN0aXZlXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWJhcl9faXRlbS0tYWN0aXZlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQWxsQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ29udGVudEJhc2VkTmF2QnV0dG9uU2VsZWN0ZWQobmF2QnV0dG9uKSB7XG4gICAgY29uc3QgYnV0dG9uVGV4dCA9IG5hdkJ1dHRvbi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgc3dpdGNoIChidXR0b25UZXh0KSB7XG4gICAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgICBob21lQ29udGVudC5hdHRhY2hUb0NvbnRhaW5lcihjb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWVudVwiOlxuICAgICAgICBtZW51Q29udGVudC5hdHRhY2hUb0NvbnRhaW5lcihjb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiY29udGFjdFwiOlxuICAgICAgICBjb250YWN0Q29udGVudC5hdHRhY2hUb0NvbnRhaW5lcihjb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIFwiRVJST1I6IG5vIGNvbnRlbnQgbW9kdWxlIGF2YWlsYWJsZSBmb3IgXCIgKyBidXR0b25UZXh0ICsgXCJidXR0b24uXCJcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=