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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"MainTitle\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"NavAndSmallTitle\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n@font-face {\n  font-family: \"Descriptions\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n* {\n  box-sizing: border-box;\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-family: sans-serif;\n  align-self: center;\n  font-family: \"Descriptions\";\n}\n\nbody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.nav-bar {\n  justify-content: end;\n}\n.nav-bar__item {\n  font-family: \"NavAndSmallTitle\";\n  font-size: 25px;\n  margin-right: 16px;\n  padding: 16px;\n  user-select: none;\n  cursor: pointer;\n}\n.nav-bar__item--active, .nav-bar__item:hover {\n  transition: 0.1s;\n  transform: scale(1.4);\n  text-shadow: 5px 2px 2px #969696;\n}\n\n.home__title {\n  font-family: \"MainTitle\";\n  font-size: 64px;\n}\n.home__title--tree {\n  text-shadow: 5px 2px 2px #969696;\n  color: green;\n}\n.home__welcome-container {\n  margin-top: 16px;\n  padding: 16px 20px;\n  border: goldenrod solid;\n  width: 75%;\n  border-radius: 10px;\n  box-shadow: 2px 2px 2px #969696;\n  text-shadow: 2px 2px 2px black;\n  font-size: 32px;\n  text-align: center;\n  color: orange;\n}\n.home__title-category {\n  font-family: \"NavAndSmallTitle\";\n  font-size: 40px;\n}\n\n.hour {\n  margin-bottom: 2em;\n  padding-top: 2em;\n  align-items: center;\n}\n.hour__title {\n  border: green solid;\n  border-radius: 15px;\n  padding: 0px 8px;\n  margin-bottom: 8px;\n}\n.hour__list-item {\n  width: 100%;\n  justify-content: space-between;\n  gap: 16px;\n  font-size: 25px;\n}\n\n.location {\n  border: orange solid;\n  padding: 0.5em 1em;\n  border-radius: 15px;\n  margin-left: 1em;\n  align-self: start;\n}\n.location__address {\n  font-size: 25px;\n}\n\n.menu__title {\n  margin-bottom: 0.7em;\n}\n.menu__item-field {\n  margin-bottom: 3em;\n  gap: 2em;\n}\n.menu__item-img {\n  width: 500px;\n  height: 281.25px;\n  object-fit: cover;\n  border-radius: 15px;\n  outline: goldenrod solid 2px;\n  box-shadow: inset;\n}\n.menu__item-name {\n  margin: -10px 0px;\n}\n@media only screen and (max-width: 600px) {\n  .nav-bar__item {\n    font-size: 20px;\n    padding: 8px;\n    margin-right: 8px;\n  }\n\n  .home__title {\n    font-size: 50px;\n  }\n\n  .home__welcome-container,\n.hour__list-item,\n.location__address {\n    font-size: 16px;\n    text-shadow: none;\n    color: black;\n  }\n\n  .home__title-category {\n    font-size: 25px;\n  }\n\n  .menu__item-img {\n    width: 200px;\n    height: 112.5px;\n  }\n  .menu__item-field {\n    margin-bottom: 1.5em;\n    gap: 1em;\n  }\n}", "",{"version":3,"sources":["webpack://./src/css/style.scss"],"names":[],"mappings":"AAAA;EACE,wBAAA;EACA,4CAAA;AACF;AACA;EACE,+BAAA;EACA,4CAAA;AACF;AACA;EACE,2BAAA;EACA,4CAAA;AACF;AAEA;EACE,sBAAA;EACA,qBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,uBAAA;EACA,kBAAA;EACA,2BAAA;AAAF;;AAGA;EACE,mDAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;AAAF;;AAGA;EACE,oBAAA;AAAF;AACE;EACE,+BAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;EACA,iBAAA;EACA,eAAA;AACJ;AAAI;EAEE,gBAAA;EACA,qBAAA;EACA,gCAAA;AACN;;AAKE;EACE,wBAAA;EACA,eAAA;AAFJ;AAGI;EACE,gCAAA;EACA,YAAA;AADN;AAKE;EACE,gBAAA;EACA,kBAAA;EACA,uBAAA;EACA,UAAA;EACA,mBAAA;EACA,+BAAA;EACA,8BAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;AAHJ;AAQE;EACE,+BAAA;EACA,eAAA;AANJ;;AAUA;EACE,kBAAA;EACA,gBAAA;EACA,mBAAA;AAPF;AAQE;EACE,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;AANJ;AAWE;EACE,WAAA;EACA,8BAAA;EACA,SAAA;EACA,eAAA;AATJ;;AAaA;EACE,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;AAVF;AAWE;EACE,eAAA;AATJ;;AAcE;EACE,oBAAA;AAXJ;AAcI;EACE,kBAAA;EACA,QAAA;AAZN;AAcI;EACE,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,4BAAA;EACA,iBAAA;AAZN;AAcI;EACE,iBAAA;AAZN;AAmBA;EACE;IACE,eAAA;IACA,YAAA;IACA,iBAAA;EAjBF;;EAmBA;IACE,eAAA;EAhBF;;EAkBA;;;IAGE,eAAA;IACA,iBAAA;IACA,YAAA;EAfF;;EAiBA;IACE,eAAA;EAdF;;EAiBE;IACE,YAAA;IACA,eAAA;EAdJ;EAgBE;IACE,oBAAA;IACA,QAAA;EAdJ;AACF","sourcesContent":["@font-face {\n  font-family: \"MainTitle\";\n  src: url(\"../fonts/Praise-Regular.ttf\");\n}\n@font-face {\n  font-family: \"NavAndSmallTitle\";\n  src: url(\"../fonts/ShadowsIntoLight-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Descriptions\";\n  src: url(\"../fonts/PatrickHand-Regular.ttf\");\n}\n\n* {\n  box-sizing: border-box;\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-family: sans-serif;\n  align-self: center;\n  font-family: \"Descriptions\";\n}\n\nbody {\n  background: url(\"../backgrounds/white-brick.jpg\");\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.nav-bar {\n  justify-content: end;\n  &__item {\n    font-family: \"NavAndSmallTitle\";\n    font-size: 25px;\n    margin-right: 16px;\n    padding: 16px;\n    user-select: none;\n    cursor: pointer;\n    &--active,\n    &:hover {\n      transition: 0.1s;\n      transform: scale(1.4);\n      text-shadow: 5px 2px 2px rgba(150, 150, 150, 1);\n    }\n  }\n}\n\n.home__ {\n  &title {\n    font-family: \"MainTitle\";\n    font-size: 64px;\n    &--tree {\n      text-shadow: 5px 2px 2px rgba(150, 150, 150, 1);\n      color: green;\n    }\n  }\n\n  &welcome-container {\n    margin-top: 16px;\n    padding: 16px 20px;\n    border: goldenrod solid;\n    width: 75%;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px rgba(150, 150, 150, 1);\n    text-shadow: 2px 2px 2px black;\n    font-size: 32px;\n    text-align: center;\n    color: orange;\n  }\n\n  &welcome-msg {\n  }\n  &title-category {\n    font-family: \"NavAndSmallTitle\";\n    font-size: 40px;\n  }\n}\n\n.hour {\n  margin-bottom: 2em;\n  padding-top: 2em;\n  align-items: center;\n  &__title {\n    border: green solid;\n    border-radius: 15px;\n    padding: 0px 8px;\n    margin-bottom: 8px;\n  }\n  &__list {\n  }\n\n  &__list-item {\n    width: 100%;\n    justify-content: space-between;\n    gap: 16px;\n    font-size: 25px;\n  }\n}\n\n.location {\n  border: orange solid;\n  padding: 0.5em 1em;\n  border-radius: 15px;\n  margin-left: 1em;\n  align-self: start;\n  &__address {\n    font-size: 25px;\n  }\n}\n\n.menu {\n  &__title {\n    margin-bottom: 0.7em;\n  }\n  &__item- {\n    &field {\n      margin-bottom: 3em;\n      gap: 2em;\n    }\n    &img {\n      width: 500px;\n      height: 281.25px;\n      object-fit: cover;\n      border-radius: 15px;\n      outline: goldenrod solid 2px;\n      box-shadow: inset;\n    }\n    &name {\n      margin: -10px 0px;\n    }\n    &description {\n    }\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .nav-bar__item {\n    font-size: 20px;\n    padding: 8px;\n    margin-right: 8px;\n  }\n  .home__title {\n    font-size: 50px;\n  }\n  .home__welcome-container,\n  .hour__list-item,\n  .location__address {\n    font-size: 16px;\n    text-shadow: none;\n    color: black;\n  }\n  .home__title-category {\n    font-size: 25px;\n  }\n  .menu__item- {\n    &img {\n      width: 200px;\n      height: 112.5px;\n    }\n    &field{\n      margin-bottom: 1.5em;\n      gap: 1em;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
  itemField.classList = "flex-col";
  _menu_items_json__WEBPACK_IMPORTED_MODULE_0__.forEach((item) => {
    itemField.appendChild(buildItem(item));
  });
  return itemField;

  function buildItem(item) {
    const mainContainer = document.createElement("div");
    mainContainer.classList = "flex-row menu__item-field";
    if (_menu_items_json__WEBPACK_IMPORTED_MODULE_0__.indexOf(item) % 2 == 0) {
      mainContainer.appendChild(buildItemImage(item));
      mainContainer.appendChild(buildNameAndDescription(item));
    } else {
      mainContainer.appendChild(buildNameAndDescription(item));
      mainContainer.appendChild(buildItemImage(item));
    }
    return mainContainer;
  }

  function buildNameAndDescription(item) {
    const container = document.createElement("div");
    container.classList = "flex-col";
    container.appendChild(buildItemName(item));
    container.appendChild(buildItemDescription(item));
    return container;
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckIwQjtBQUNZO0FBQ0E7QUFDTTs7QUFFNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBNkI7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBNkI7QUFDckM7QUFDQTtBQUNBLFFBQVEsb0RBQTZCO0FBQ3JDO0FBQ0E7QUFDQSxRQUFRLHVEQUFnQztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5zY3NzPzNmZjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1nfHN5bmN8L1xcLihwbmd8c3ZnfGpwZ3xqcGVnfGdpZikkL2kiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9QcmFpc2UtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9TaGFkb3dzSW50b0xpZ2h0LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUGF0cmlja0hhbmQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9iYWNrZ3JvdW5kcy93aGl0ZS1icmljay5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWFpblRpdGxlXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk5hdkFuZFNtYWxsVGl0bGVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGVzY3JpcHRpb25zXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGVzY3JpcHRpb25zXFxcIjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcbi5uYXYtYmFyX19pdGVtIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmF2QW5kU21hbGxUaXRsZVxcXCI7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXYtYmFyX19pdGVtLS1hY3RpdmUsIC5uYXYtYmFyX19pdGVtOmhvdmVyIHtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuICB0ZXh0LXNoYWRvdzogNXB4IDJweCAycHggIzk2OTY5NjtcXG59XFxuXFxuLmhvbWVfX3RpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWFpblRpdGxlXFxcIjtcXG4gIGZvbnQtc2l6ZTogNjRweDtcXG59XFxuLmhvbWVfX3RpdGxlLS10cmVlIHtcXG4gIHRleHQtc2hhZG93OiA1cHggMnB4IDJweCAjOTY5Njk2O1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG4uaG9tZV9fd2VsY29tZS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gIGJvcmRlcjogZ29sZGVucm9kIHNvbGlkO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAjOTY5Njk2O1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IG9yYW5nZTtcXG59XFxuLmhvbWVfX3RpdGxlLWNhdGVnb3J5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmF2QW5kU21hbGxUaXRsZVxcXCI7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5ob3VyIHtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG4gIHBhZGRpbmctdG9wOiAyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaG91cl9fdGl0bGUge1xcbiAgYm9yZGVyOiBncmVlbiBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAwcHggOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG4uaG91cl9fbGlzdC1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxNnB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgYm9yZGVyOiBvcmFuZ2Ugc29saWQ7XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG4ubG9jYXRpb25fX2FkZHJlc3Mge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ubWVudV9fdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43ZW07XFxufVxcbi5tZW51X19pdGVtLWZpZWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDNlbTtcXG4gIGdhcDogMmVtO1xcbn1cXG4ubWVudV9faXRlbS1pbWcge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiAyODEuMjVweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG91dGxpbmU6IGdvbGRlbnJvZCBzb2xpZCAycHg7XFxuICBib3gtc2hhZG93OiBpbnNldDtcXG59XFxuLm1lbnVfX2l0ZW0tbmFtZSB7XFxuICBtYXJnaW46IC0xMHB4IDBweDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLm5hdi1iYXJfX2l0ZW0ge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICB9XFxuXFxuICAuaG9tZV9fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICB9XFxuXFxuICAuaG9tZV9fd2VsY29tZS1jb250YWluZXIsXFxuLmhvdXJfX2xpc3QtaXRlbSxcXG4ubG9jYXRpb25fX2FkZHJlc3Mge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICB9XFxuXFxuICAuaG9tZV9fdGl0bGUtY2F0ZWdvcnkge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICB9XFxuXFxuICAubWVudV9faXRlbS1pbWcge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTEyLjVweDtcXG4gIH1cXG4gIC5tZW51X19pdGVtLWZpZWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XFxuICAgIGdhcDogMWVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBQTtFQUNBLDRDQUFBO0FBQ0Y7QUFDQTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUFDRjtBQUNBO0VBQ0UsMkJBQUE7RUFDQSw0Q0FBQTtBQUNGO0FBRUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsbURBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtBQUFGO0FBQ0U7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBRUUsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBQ047O0FBS0U7RUFDRSx3QkFBQTtFQUNBLGVBQUE7QUFGSjtBQUdJO0VBQ0UsZ0NBQUE7RUFDQSxZQUFBO0FBRE47QUFLRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBSEo7QUFRRTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUEY7QUFRRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTko7QUFXRTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBVEo7O0FBYUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBVkY7QUFXRTtFQUNFLGVBQUE7QUFUSjs7QUFjRTtFQUNFLG9CQUFBO0FBWEo7QUFjSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQVpOO0FBY0k7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQVpOO0FBY0k7RUFDRSxpQkFBQTtBQVpOO0FBbUJBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VBakJGOztFQW1CQTtJQUNFLGVBQUE7RUFoQkY7O0VBa0JBOzs7SUFHRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VBZkY7O0VBaUJBO0lBQ0UsZUFBQTtFQWRGOztFQWlCRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0VBZEo7RUFnQkU7SUFDRSxvQkFBQTtJQUNBLFFBQUE7RUFkSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYWluVGl0bGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1ByYWlzZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmF2QW5kU21hbGxUaXRsZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvU2hhZG93c0ludG9MaWdodC1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGVzY3JpcHRpb25zXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9QYXRyaWNrSGFuZC1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEZXNjcmlwdGlvbnNcXFwiO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vYmFja2dyb3VuZHMvd2hpdGUtYnJpY2suanBnXFxcIik7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICZfX2l0ZW0ge1xcbiAgICBmb250LWZhbWlseTogXFxcIk5hdkFuZFNtYWxsVGl0bGVcXFwiO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgJi0tYWN0aXZlLFxcbiAgICAmOmhvdmVyIHtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG4gICAgICB0ZXh0LXNoYWRvdzogNXB4IDJweCAycHggcmdiYSgxNTAsIDE1MCwgMTUwLCAxKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uaG9tZV9fIHtcXG4gICZ0aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTWFpblRpdGxlXFxcIjtcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbiAgICAmLS10cmVlIHtcXG4gICAgICB0ZXh0LXNoYWRvdzogNXB4IDJweCAycHggcmdiYSgxNTAsIDE1MCwgMTUwLCAxKTtcXG4gICAgICBjb2xvcjogZ3JlZW47XFxuICAgIH1cXG4gIH1cXG5cXG4gICZ3ZWxjb21lLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgYm9yZGVyOiBnb2xkZW5yb2Qgc29saWQ7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMTUwLCAxNTAsIDE1MCwgMSk7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxuICB9XFxuXFxuICAmd2VsY29tZS1tc2cge1xcbiAgfVxcbiAgJnRpdGxlLWNhdGVnb3J5IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJOYXZBbmRTbWFsbFRpdGxlXFxcIjtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgfVxcbn1cXG5cXG4uaG91ciB7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICBwYWRkaW5nLXRvcDogMmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICZfX3RpdGxlIHtcXG4gICAgYm9yZGVyOiBncmVlbiBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogMHB4IDhweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgfVxcbiAgJl9fbGlzdCB7XFxuICB9XFxuXFxuICAmX19saXN0LWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gIH1cXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGJvcmRlcjogb3JhbmdlIHNvbGlkO1xcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICZfX2FkZHJlc3Mge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICB9XFxufVxcblxcbi5tZW51IHtcXG4gICZfX3RpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43ZW07XFxuICB9XFxuICAmX19pdGVtLSB7XFxuICAgICZmaWVsZCB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogM2VtO1xcbiAgICAgIGdhcDogMmVtO1xcbiAgICB9XFxuICAgICZpbWcge1xcbiAgICAgIHdpZHRoOiA1MDBweDtcXG4gICAgICBoZWlnaHQ6IDI4MS4yNXB4O1xcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgb3V0bGluZTogZ29sZGVucm9kIHNvbGlkIDJweDtcXG4gICAgICBib3gtc2hhZG93OiBpbnNldDtcXG4gICAgfVxcbiAgICAmbmFtZSB7XFxuICAgICAgbWFyZ2luOiAtMTBweCAwcHg7XFxuICAgIH1cXG4gICAgJmRlc2NyaXB0aW9uIHtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAubmF2LWJhcl9faXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIH1cXG4gIC5ob21lX190aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gIH1cXG4gIC5ob21lX193ZWxjb21lLWNvbnRhaW5lcixcXG4gIC5ob3VyX19saXN0LWl0ZW0sXFxuICAubG9jYXRpb25fX2FkZHJlc3Mge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICB9XFxuICAuaG9tZV9fdGl0bGUtY2F0ZWdvcnkge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICB9XFxuICAubWVudV9faXRlbS0ge1xcbiAgICAmaW1nIHtcXG4gICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgaGVpZ2h0OiAxMTIuNXB4O1xcbiAgICB9XFxuICAgICZmaWVsZHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcXG4gICAgICBnYXA6IDFlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjaGlja2VuTG9nbyBmcm9tIFwiLi9sb2dvcy9jaGlja2VuLWxvZ28ucG5nXCI7XG5pbXBvcnQgcGhvbmVMb2dvIGZyb20gXCIuL2xvZ29zL3Bob25lLWxvZ28ucG5nXCI7XG5pbXBvcnQgZ2l0aHViTG9nbyBmcm9tIFwiLi9sb2dvcy9naXRodWItbG9nby5wbmdcIjtcblxuY29uc3QgYXR0YWNoVG9Db250YWluZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SW5mb0J1aWxkZXIoKSk7XG59O1xuZnVuY3Rpb24gY29udGFjdEluZm9CdWlsZGVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0ID0gXCJmbGV4LWNvbCBjb250YWN0XCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUJ1aWxkZXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0RmllbGRCdWlsZGVyKCkpO1xuICByZXR1cm4gY29udGFpbmVyO1xuXG4gIGZ1bmN0aW9uIHRpdGxlQnVpbGRlcigpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QgPSBcImNvbnRhY3RfX3RpdGxlXCI7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBmdW5jdGlvbiBjb250YWN0RmllbGRCdWlsZGVyKCkge1xuICAgIGNvbnN0IGNvbnRhY3RGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb250YWN0RmllbGQuY2xhc3NMaXN0ID0gXCJmbGV4LWNvbCBjb250YWN0X19maWVsZFwiO1xuICAgIGNvbnRhY3RGaWVsZC5hcHBlbmRDaGlsZChcbiAgICAgIGNvbnRhY3RCdWlsZGVyKHBob25lTG9nbywgXCJDYWxsIHVzIGF0IDEtODAwLTg2Ny01MzA5XCIpXG4gICAgKTtcbiAgICBjb250YWN0RmllbGQuYXBwZW5kQ2hpbGQoXG4gICAgICBjb250YWN0QnVpbGRlcihcbiAgICAgICAgY2hpY2tlbkxvZ28sXG4gICAgICAgIFwiZm9sbG93IHVzIG9uIENsdWNrZXIgQHRoZVJlYWxGYWtlUmVzdGF1cmFudFwiLFxuICAgICAgICBcImh0dHBzOi8veW91dHUuYmUvZFF3NHc5V2dYY1E/dD0xMFwiXG4gICAgICApXG4gICAgKTtcbiAgICBjb250YWN0RmllbGQuYXBwZW5kQ2hpbGQoXG4gICAgICBjb250YWN0QnVpbGRlcihcbiAgICAgICAgZ2l0aHViTG9nbyxcbiAgICAgICAgXCJjaGVjayB1cyBvdXQgb24gR2l0SHViXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL3BhbG1lcnVzYWYvcmVzdGF1cmFudC1wYWdlXCJcbiAgICAgIClcbiAgICApO1xuICAgIHJldHVybiBjb250YWN0RmllbGQ7XG5cbiAgICBmdW5jdGlvbiBjb250YWN0QnVpbGRlcihsb2dvU291cmNlLCBjb250ZW50LCBsaW5rKSB7XG4gICAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgY29udGFjdC5jbGFzc0xpc3QgPSBcImZsZXgtcm93IGNvbnRhY3RfX2l0ZW1cIjtcblxuICAgICAgaWYgKGxvZ29Tb3VyY2UpIGNvbnRhY3QuYXBwZW5kQ2hpbGQobG9nb0J1aWxkZXIobG9nb1NvdXJjZSkpO1xuICAgICAgbGlua1xuICAgICAgICA/IGNvbnRhY3QuYXBwZW5kQ2hpbGQobGlua0J1aWxkZXIoY29udGVudCwgbGluaykpXG4gICAgICAgIDogKGNvbnRhY3QuaW5uZXJIVE1MICs9IGNvbnRlbnQpO1xuICAgICAgcmV0dXJuIGNvbnRhY3Q7XG5cbiAgICAgIGZ1bmN0aW9uIGxvZ29CdWlsZGVyKGxvZ29Tb3VyY2UpIHtcbiAgICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGxvZ28uY2xhc3NMaXN0ID0gXCJjb250YWN0X19sb2dvXCI7XG4gICAgICAgIGxvZ28uYWx0ID0gXCJjb250YWN0IGxvZ29cIjtcbiAgICAgICAgbG9nby5zcmMgPSBsb2dvU291cmNlO1xuICAgICAgICByZXR1cm4gbG9nbztcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbGlua0J1aWxkZXIoY29udGVudCwgbGluaykge1xuICAgICAgICBjb25zdCBjb250ZW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBjb250ZW50TGluay5ocmVmID0gbGluaztcbiAgICAgICAgY29udGVudExpbmsudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICByZXR1cm4gY29udGVudExpbms7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQgeyBhdHRhY2hUb0NvbnRhaW5lciB9O1xuIiwiY29uc3QgYXR0YWNoVG9Db250YWluZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFRpdGxlKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRXZWxjb21lTXNnKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRIb3VySW5mbygpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkTG9jYXRpb25JbmZvKCkpO1xufTtcblxuZnVuY3Rpb24gYnVpbGRUaXRsZSgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLmNsYXNzTGlzdCA9IFwiaG9tZV9fdGl0bGVcIjtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNhZsOpIFVuZGVyIHRoZVwiO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uY2xhc3NMaXN0ID0gXCJob21lX190aXRsZSBob21lX190aXRsZS0tdHJlZVwiO1xuICBzcGFuLnRleHRDb250ZW50ID0gXCJUcmVlXCI7XG4gIHRpdGxlLmFwcGVuZENoaWxkKHNwYW4pO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkV2VsY29tZU1zZygpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdCA9IFwiZmxleC1jb2wgaG9tZV9fd2VsY29tZS1jb250YWluZXJcIjtcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtZXNzYWdlLmNsYXNzTGlzdCA9IFwiaG9tZV9fd2VsY29tZS1tc2dcIjtcbiAgbWVzc2FnZS50ZXh0Q29udGVudCA9XG4gICAgXCJXZWxjb21lIG91ciB3ZWJzaXRlLiBXZSBzcGVjaWFsaXplIGluIFRoYWktZnVzaW9uLiBBbHNvLCB2aXNpdCB1cyBhbmQgdHJlYXQgeW91cnNlbGYgdG8gb25lIG9mIG91ciBzcGVjaWFsdHkgY29mZmVlIGluZnVzZWQgZHJpbmtzLiBXZSBsb29rIGZvcndhcmQgdG8gc2VlaW5nIHlvdS4gQ2hlY2sgb3V0IG91ciBtZW51IGFib3ZlIGFuZCBmZWVsIGZyZWUgdG8gY29udGFjdCB1cy5cIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBidWlsZEhvdXJJbmZvKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0ID0gXCJmbGV4LWNvbCBob3VyXCI7XG4gIGNvbnN0IHRpdGxlID0gYnVpbGRDYXRlZ29yeVRpdGxlKFwiSG91cnNcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJob3VyX190aXRsZVwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkTGlzdCgpKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcblxuICBmdW5jdGlvbiBidWlsZExpc3QoKSB7XG4gICAgY29uc3QgbGlzdFRleHRDb250ZW50ID0gW1xuICAgICAgeyBkYXk6IFwiVHVlc2RheVwiLCBob3VyczogXCI4OjAwYW0tNTowMHBtXCIgfSxcbiAgICAgIHsgZGF5OiBcIldlZG5lc2RheVwiLCBob3VyczogXCI4OjAwYW0tNTowMHBtXCIgfSxcbiAgICAgIHsgZGF5OiBcIlRodXJzZGF5XCIsIGhvdXJzOiBcIjg6MDBhbS01OjAwcG1cIiB9LFxuICAgICAgeyBkYXk6IFwiRnJpZGF5XCIsIGhvdXJzOiBcIjg6MDBhbS01OjAwcG1cIiB9LFxuICAgICAgeyBkYXk6IFwiU2F0dXJkYXlcIiwgaG91cnM6IFwiODowMGFtLTU6MDBwbVwiIH0sXG4gICAgICB7IGRheTogXCJTdW5kYXlcIiwgaG91cnM6IFwiODowMGFtLTU6MDBwbVwiIH0sXG4gICAgICB7IGRheTogXCJNb25kYXlcIiwgaG91cnM6IFwiY2xvc2VkXCIgfSxcbiAgICBdO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGlzdC5jbGFzc0xpc3QgPSBcImZsZXgtY29sIGhvdXJfX2xpc3RcIjtcbiAgICBsaXN0VGV4dENvbnRlbnQuZm9yRWFjaCgodGV4dENvbnRlbnRJdGVtKSA9PlxuICAgICAgbGlzdC5hcHBlbmRDaGlsZChidWlsZEhvdXJJdGVtV2l0aENvbnRlbnQodGV4dENvbnRlbnRJdGVtKSlcbiAgICApO1xuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRIb3VySXRlbVdpdGhDb250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZGF5LnRleHRDb250ZW50ID0gY29udGVudC5kYXk7XG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBob3Vycy50ZXh0Q29udGVudCA9IGNvbnRlbnQuaG91cnM7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRheSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0ID0gXCJmbGV4LXJvdyBob3VyX19saXN0LWl0ZW1cIjtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTG9jYXRpb25JbmZvKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0ID0gXCJmbGV4LWNvbCBsb2NhdGlvblwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRDYXRlZ29yeVRpdGxlKFwiTG9jYXRpb25cIikpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRBZGRyZXNzKCkpO1xuICByZXR1cm4gY29udGFpbmVyO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkQWRkcmVzcygpIHtcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFkZHJlc3NcIik7XG4gICAgYWRkcmVzcy5jbGFzc0xpc3QgPSBcImxvY2F0aW9uX19hZGRyZXNzXCI7XG4gICAgYWRkcmVzcy5pbm5lckhUTUwgPSBcIjEyMzQgRmFrZSBTdHJlZXQ8YnI+RmFrZSBDaXR5LCBOQSAxMjM0PGJyPlVTU0FSXCI7XG4gICAgcmV0dXJuIGFkZHJlc3M7XG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRDYXRlZ29yeVRpdGxlKHRpdGxlKSB7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoMi5jbGFzc0xpc3QgPSBcImhvbWVfX3RpdGxlLWNhdGVnb3J5XCI7XG4gIGgyLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIHJldHVybiBoMjtcbn1cblxuZXhwb3J0IHsgYXR0YWNoVG9Db250YWluZXIgfTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9jaGlja2VuLmpwZ1wiOiBcIi4vc3JjL2ltZy9jaGlja2VuLmpwZ1wiLFxuXHRcIi4vamVsbHktZmlzaC5qcGdcIjogXCIuL3NyYy9pbWcvamVsbHktZmlzaC5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1nIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHBuZ3xzdmd8anBnfGpwZWd8Z2lmKSQvXCI7IiwiaW1wb3J0ICogYXMgbWVudUl0ZW1zIGZyb20gXCIuL21lbnUtaXRlbXMuanNvblwiO1xuXG4vLyBMb2FkIGFsbCBpbWdzIGZyb20gaW1nIGZvbGRlciBzbyBqc29uIGZpbGUgY2FuIHVzZSBpbWdzIGR5bmFtaWNhbGx5XG5sZXQgaW1nQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4gKGltZ0NhY2hlW2tleV0gPSByKGtleSkpKTtcbn1cbmltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoXCIuL2ltZy9cIiwgdHJ1ZSwgL1xcLihwbmd8c3ZnfGpwZ3xqcGVnfGdpZikkL2kpKTtcblxuY29uc3QgYXR0YWNoVG9Db250YWluZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZE1lbnUoKSk7XG59O1xuXG5mdW5jdGlvbiBidWlsZE1lbnUoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QgPSBcImZsZXgtY29sIG1lbnVcIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkVGl0bGUoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZE1lbnVMaXN0KCkpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBidWlsZFRpdGxlKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0ID0gXCJob21lX190aXRsZSBtZW51X190aXRsZVwiO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWVudUxpc3QoKSB7XG4gIGNvbnN0IGl0ZW1GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1GaWVsZC5jbGFzc0xpc3QgPSBcImZsZXgtY29sXCI7XG4gIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbUZpZWxkLmFwcGVuZENoaWxkKGJ1aWxkSXRlbShpdGVtKSk7XG4gIH0pO1xuICByZXR1cm4gaXRlbUZpZWxkO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkSXRlbShpdGVtKSB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QgPSBcImZsZXgtcm93IG1lbnVfX2l0ZW0tZmllbGRcIjtcbiAgICBpZiAobWVudUl0ZW1zLmluZGV4T2YoaXRlbSkgJSAyID09IDApIHtcbiAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRJdGVtSW1hZ2UoaXRlbSkpO1xuICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZE5hbWVBbmREZXNjcmlwdGlvbihpdGVtKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGROYW1lQW5kRGVzY3JpcHRpb24oaXRlbSkpO1xuICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEl0ZW1JbWFnZShpdGVtKSk7XG4gICAgfVxuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGROYW1lQW5kRGVzY3JpcHRpb24oaXRlbSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdCA9IFwiZmxleC1jb2xcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRJdGVtTmFtZShpdGVtKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkSXRlbURlc2NyaXB0aW9uKGl0ZW0pKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRJdGVtTmFtZShpdGVtKSB7XG4gICAgY29uc3QgbWVudUl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG1lbnVJdGVtTmFtZS5jbGFzc0xpc3QgPSBcImhvbWVfX3RpdGxlLWNhdGVnb3J5IG1lbnVfX2l0ZW0tbmFtZVwiO1xuICAgIG1lbnVJdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICByZXR1cm4gbWVudUl0ZW1OYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRJdGVtSW1hZ2UoaXRlbSkge1xuICAgIGNvbnN0IGl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaXRlbUltYWdlLmNsYXNzTGlzdCA9IFwibWVudV9faXRlbS1pbWdcIjtcbiAgICBpdGVtSW1hZ2Uuc3JjID0gaW1nQ2FjaGVbaXRlbS5pbWddO1xuICAgIGl0ZW1JbWFnZS5hbHQgPSBpdGVtLmFsdFRleHQ7XG4gICAgcmV0dXJuIGl0ZW1JbWFnZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkSXRlbURlc2NyaXB0aW9uKGl0ZW0pIHtcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QgPSBcIm1lbnVfX2l0ZW0tZGVzY3JpcHRpb24gbG9jYXRpb25fX2FkZHJlc3NcIjtcbiAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgIHJldHVybiBpdGVtRGVzY3JpcHRpb247XG4gIH1cbn1cblxuZXhwb3J0IHsgYXR0YWNoVG9Db250YWluZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IFwiLi9jc3Mvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0ICogYXMgaG9tZUNvbnRlbnQgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0ICogYXMgbWVudUNvbnRlbnQgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0ICogYXMgY29udGFjdENvbnRlbnQgZnJvbSBcIi4vY29udGFjdFwiO1xuXG4vL2luaXRpYWxpemUgdGhlIHBhZ2VcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidWlsZE5hdkJhcigpKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidWlsZENvbnRlbnRDb250YWluZXIoKSk7XG5cbiAgZnVuY3Rpb24gYnVpbGRDb250ZW50Q29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdCA9IFwiZmxleC1jb2xcIjtcbiAgICBjb250YWluZXIuaWQgPSBcImNvbnRlbnRcIjtcbiAgICBtZW51Q29udGVudC5hdHRhY2hUb0NvbnRhaW5lcihjb250YWluZXIpXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkTmF2QmFyKCkge1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGJ1aWxkTGlzdE9mTmF2QnV0dG9ucygpKTtcbiAgICByZXR1cm4gbmF2QmFyO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRMaXN0T2ZOYXZCdXR0b25zKCkge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGlzdC5jbGFzc0xpc3QgPSBcImZsZXgtcm93IG5hdi1iYXJcIjtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGJ1aWxkTmF2QnV0dG9uKFwiSG9tZVwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChidWlsZE5hdkJ1dHRvbihcIk1lbnVcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoYnVpbGROYXZCdXR0b24oXCJDb250YWN0XCIpKTtcbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkTmF2QnV0dG9uKHRleHQpIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGl0ZW0uY2xhc3NMaXN0ID0gXCJuYXYtYmFyX19pdGVtXCI7XG4gICAgaWYgKHRleHQgPT09IFwiSG9tZVwiKSBpdGVtLmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyX19pdGVtLS1hY3RpdmVcIik7XG4gICAgaXRlbS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTmF2QnV0dG9uQ2xpY2spO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmF2QnV0dG9uQ2xpY2soZXZlbnQpIHtcbiAgICBjb25zdCBuYXZCdXR0b24gPSBldmVudC50YXJnZXQ7XG4gICAgc3dpdGNoQWN0aXZlTmF2QnV0dG9uKG5hdkJ1dHRvbik7XG4gICAgcmVtb3ZlQWxsQ29udGVudCgpO1xuICAgIGFkZENvbnRlbnRCYXNlZE5hdkJ1dHRvblNlbGVjdGVkKG5hdkJ1dHRvbik7XG4gIH1cblxuICBmdW5jdGlvbiBzd2l0Y2hBY3RpdmVOYXZCdXR0b24oYnV0dG9uKSB7XG4gICAgY29uc3Qgb2xkQWN0aXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYmFyX19pdGVtLS1hY3RpdmVcIik7XG4gICAgb2xkQWN0aXZlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtYmFyX19pdGVtLS1hY3RpdmVcIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyX19pdGVtLS1hY3RpdmVcIik7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVBbGxDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDb250ZW50QmFzZWROYXZCdXR0b25TZWxlY3RlZChuYXZCdXR0b24pIHtcbiAgICBjb25zdCBidXR0b25UZXh0ID0gbmF2QnV0dG9uLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBzd2l0Y2ggKGJ1dHRvblRleHQpIHtcbiAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgIGhvbWVDb250ZW50LmF0dGFjaFRvQ29udGFpbmVyKGNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtZW51XCI6XG4gICAgICAgIG1lbnVDb250ZW50LmF0dGFjaFRvQ29udGFpbmVyKGNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJjb250YWN0XCI6XG4gICAgICAgIGNvbnRhY3RDb250ZW50LmF0dGFjaFRvQ29udGFpbmVyKGNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgXCJFUlJPUjogbm8gY29udGVudCBtb2R1bGUgYXZhaWxhYmxlIGZvciBcIiArIGJ1dHRvblRleHQgKyBcImJ1dHRvbi5cIlxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==