(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define([], factory);
  else if(typeof exports === 'object')
    exports["VueDragResizeRotate"] = factory();
  else
    root["VueDragResizeRotate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;
/******/
/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      exports: {},
/******/      id: moduleId,
/******/      loaded: false
/******/    };
/******/
/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/    // Flag the module as loaded
/******/    module.loaded = true;
/******/
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _vueDragResizeRotateUpdater = __webpack_require__(1);

  var _vueDragResizeRotateUpdater2 = _interopRequireDefault(_vueDragResizeRotateUpdater);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  module.exports = _vueDragResizeRotateUpdater2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {


  /* styles */
  __webpack_require__(2)

  var Component = __webpack_require__(6)(
    /* script */
    __webpack_require__(7),
    /* template */
    __webpack_require__(66),
    /* scopeId */
    "data-v-66bb76c8",
    /* cssModules */
    null
  )
  Component.options.__file = "/home/spademan/project/vue-drag-resize-rotate-updater/src/vue-drag-resize-rotate-updater.vue"
  if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
  if (Component.options.functional) {console.error("[vue-loader] vue-drag-resize-rotate-updater.vue: functional components are not supported with templates, they should use render functions.")}

  /* hot reload */
  if (false) {(function () {
    var hotAPI = require("vue-hot-reload-api")
    hotAPI.install(require("vue"), false)
    if (!hotAPI.compatible) return
    module.hot.accept()
    if (!module.hot.data) {
      hotAPI.createRecord("data-v-66bb76c8", Component.options)
    } else {
      hotAPI.reload("data-v-66bb76c8", Component.options)
    }
  })()}

  module.exports = Component.exports


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag

  // load the styles
  var content = __webpack_require__(3);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(5)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
    // When the styles change, update the <style> tags
    if(!content.locals) {
      module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-66bb76c8&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vue-drag-resize-rotate-updater.vue", function() {
        var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-66bb76c8&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vue-drag-resize-rotate-updater.vue");
        if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
        update(newContent);
      });
    }
    // When the module is disposed, remove the <style> tags
    module.hot.dispose(function() { update(); });
  }

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "\n.dragable[data-v-66bb76c8] {\n  position: relative;\n  /*border: 1px solid black;*/\n  text-align: center;\n  /*padding: 10px;*/\n  background: #fff;\n  box-sizing: border-box;\n float: left;\n  /*margin: 10px;*/\n}\n.scale[data-v-66bb76c8] {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: -10px;\n  right: -10px;\n  background: url('data:image/png;base64,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');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  cursor: se-resize; background-size: contain;\n}\n.rotate[data-v-66bb76c8] {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: -10px;\n  right: -10px;\n  background: url('data:image/png;base64,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');\n  background-position: top right;\n  padding: 3px 3px 0px 0;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  cursor: se-resize;background-size: contain;\n}\n", ""]);

  // exports


/***/ },
/* 4 */
/***/ function(module, exports) {

  /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
    var list = [];

    // return the list of modules as css string
    list.toString = function toString() {
      var result = [];
      for(var i = 0; i < this.length; i++) {
        var item = this[i];
        if(item[2]) {
          result.push("@media " + item[2] + "{" + item[1] + "}");
        } else {
          result.push(item[1]);
        }
      }
      return result.join("");
    };

    // import a list of modules into the list
    list.i = function(modules, mediaQuery) {
      if(typeof modules === "string")
        modules = [[null, modules, ""]];
      var alreadyImportedModules = {};
      for(var i = 0; i < this.length; i++) {
        var id = this[i][0];
        if(typeof id === "number")
          alreadyImportedModules[id] = true;
      }
      for(i = 0; i < modules.length; i++) {
        var item = modules[i];
        // skip already imported module
        // this implementation is not 100% perfect for weird media query combinations
        //  when a module is imported multiple times with different media queries.
        //  I hope this will never occur (Hey this way we have smaller bundles)
        if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
          if(mediaQuery && !item[2]) {
            item[2] = mediaQuery;
          } else if(mediaQuery) {
            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
          }
          list.push(item);
        }
      }
    };
    return list;
  };


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */
  var stylesInDom = {},
    memoize = function(fn) {
      var memo;
      return function () {
        if (typeof memo === "undefined") memo = fn.apply(this, arguments);
        return memo;
      };
    },
    isOldIE = memoize(function() {
      return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
    }),
    getHeadElement = memoize(function () {
      return document.head || document.getElementsByTagName("head")[0];
    }),
    singletonElement = null,
    singletonCounter = 0,
    styleElementsInsertedAtTop = [];

  module.exports = function(list, options) {
    if(false) {
      if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
    }

    options = options || {};
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (typeof options.singleton === "undefined") options.singleton = isOldIE();

    // By default, add <style> tags to the bottom of <head>.
    if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

    var styles = listToStyles(list);
    addStylesToDom(styles, options);

    return function update(newList) {
      var mayRemove = [];
      for(var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
      if(newList) {
        var newStyles = listToStyles(newList);
        addStylesToDom(newStyles, options);
      }
      for(var i = 0; i < mayRemove.length; i++) {
        var domStyle = mayRemove[i];
        if(domStyle.refs === 0) {
          for(var j = 0; j < domStyle.parts.length; j++)
            domStyle.parts[j]();
          delete stylesInDom[domStyle.id];
        }
      }
    };
  }

  function addStylesToDom(styles, options) {
    for(var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];
      if(domStyle) {
        domStyle.refs++;
        for(var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j](item.parts[j]);
        }
        for(; j < item.parts.length; j++) {
          domStyle.parts.push(addStyle(item.parts[j], options));
        }
      } else {
        var parts = [];
        for(var j = 0; j < item.parts.length; j++) {
          parts.push(addStyle(item.parts[j], options));
        }
        stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
      }
    }
  }

  function listToStyles(list) {
    var styles = [];
    var newStyles = {};
    for(var i = 0; i < list.length; i++) {
      var item = list[i];
      var id = item[0];
      var css = item[1];
      var media = item[2];
      var sourceMap = item[3];
      var part = {css: css, media: media, sourceMap: sourceMap};
      if(!newStyles[id])
        styles.push(newStyles[id] = {id: id, parts: [part]});
      else
        newStyles[id].parts.push(part);
    }
    return styles;
  }

  function insertStyleElement(options, styleElement) {
    var head = getHeadElement();
    var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
    if (options.insertAt === "top") {
      if(!lastStyleElementInsertedAtTop) {
        head.insertBefore(styleElement, head.firstChild);
      } else if(lastStyleElementInsertedAtTop.nextSibling) {
        head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
      } else {
        head.appendChild(styleElement);
      }
      styleElementsInsertedAtTop.push(styleElement);
    } else if (options.insertAt === "bottom") {
      head.appendChild(styleElement);
    } else {
      throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
    }
  }

  function removeStyleElement(styleElement) {
    styleElement.parentNode.removeChild(styleElement);
    var idx = styleElementsInsertedAtTop.indexOf(styleElement);
    if(idx >= 0) {
      styleElementsInsertedAtTop.splice(idx, 1);
    }
  }

  function createStyleElement(options) {
    var styleElement = document.createElement("style");
    styleElement.type = "text/css";
    insertStyleElement(options, styleElement);
    return styleElement;
  }

  function addStyle(obj, options) {
    var styleElement, update, remove;

    if (options.singleton) {
      var styleIndex = singletonCounter++;
      styleElement = singletonElement || (singletonElement = createStyleElement(options));
      update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
      remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
    } else {
      styleElement = createStyleElement(options);
      update = applyToTag.bind(null, styleElement);
      remove = function() {
        removeStyleElement(styleElement);
      };
    }

    update(obj);

    return function updateStyle(newObj) {
      if(newObj) {
        if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
          return;
        update(obj = newObj);
      } else {
        remove();
      }
    };
  }

  var replaceText = (function () {
    var textStore = [];

    return function (index, replacement) {
      textStore[index] = replacement;
      return textStore.filter(Boolean).join('\n');
    };
  })();

  function applyToSingletonTag(styleElement, index, remove, obj) {
    var css = remove ? "" : obj.css;

    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = replaceText(index, css);
    } else {
      var cssNode = document.createTextNode(css);
      var childNodes = styleElement.childNodes;
      if (childNodes[index]) styleElement.removeChild(childNodes[index]);
      if (childNodes.length) {
        styleElement.insertBefore(cssNode, childNodes[index]);
      } else {
        styleElement.appendChild(cssNode);
      }
    }
  }

  function applyToTag(styleElement, obj) {
    var css = obj.css;
    var media = obj.media;
    var sourceMap = obj.sourceMap;

    if (media) {
      styleElement.setAttribute("media", media);
    }

    if (sourceMap) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
      // http://stackoverflow.com/a/26603875
      css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
    }

    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = css;
    } else {
      while(styleElement.firstChild) {
        styleElement.removeChild(styleElement.firstChild);
      }
      styleElement.appendChild(document.createTextNode(css));
    }
  }


/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = function normalizeComponent (
    rawScriptExports,
    compiledTemplate,
    scopeId,
    cssModules
  ) {
    var esModule
    var scriptExports = rawScriptExports = rawScriptExports || {}

    // ES6 modules interop
    var type = typeof rawScriptExports.default
    if (type === 'object' || type === 'function') {
      esModule = rawScriptExports
      scriptExports = rawScriptExports.default
    }

    // Vue.extend constructor export interop
    var options = typeof scriptExports === 'function'
      ? scriptExports.options
      : scriptExports

    // render functions
    if (compiledTemplate) {
      options.render = compiledTemplate.render
      options.staticRenderFns = compiledTemplate.staticRenderFns
    }

    // scopedId
    if (scopeId) {
      options._scopeId = scopeId
    }

    // inject cssModules
    if (cssModules) {
      var computed = options.computed || (options.computed = {})
      Object.keys(cssModules).forEach(function (key) {
        var module = cssModules[key]
        computed[key] = function () { return module }
      })
    }

    return {
      esModule: esModule,
      exports: scriptExports,
      options: options
    }
  }


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _slicedToArray2 = __webpack_require__(8);

  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

  var _victor = __webpack_require__(65);

  var _victor2 = _interopRequireDefault(_victor);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var findInArray = function findInArray(array, callback) {
    for (var i = 0, length = array.length; i < length; i++) {
      if (callback.apply(callback, [array[i], i, array])) return array[i];
    }
  };

  var isFunction = function isFunction(func) {
    return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
  };

  var isNum = function isNum(num) {
    return typeof num === 'number' && !isNaN(num);
  };

  var int = function int(a) {
    return parseInt(a, 10);
  };

  var outerHeight = function outerHeight(node) {
    var height = node.clientHeight;
    var computedStyle = window.getComputedStyle(node);
    height += int(computedStyle.borderTopWidth);
    height += int(computedStyle.borderBottomWidth);

    return height;
  };

  var outerWidth = function outerWidth(node) {
    var width = node.clientWidth;
    var computedStyle = window.getComputedStyle(node);
    width += int(computedStyle.borderLeftWidth);
    width += int(computedStyle.borderRightWidth);

    return width;
  };
  var innerHeight = function innerHeight(node) {
    var height = node.clientHeight;
    var computedStyle = window.getComputedStyle(node);
    height -= int(computedStyle.paddingTop);
    height -= int(computedStyle.paddingBottom);
    return height;
  };

  var innerWidth = function innerWidth(node) {
    var width = node.clientWidth;
    var computedStyle = window.getComputedStyle(node);
    width -= int(computedStyle.paddingLeft);
    width -= int(computedStyle.paddingRight);
    return width;
  };

  var matchesSelectorFunc = '';
  var matchesSelector = function matchesSelector(el, selector) {
    if (!matchesSelectorFunc) {
      matchesSelectorFunc = findInArray(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
        return isFunction(el[method]);
      });
    }

    return el[matchesSelectorFunc].call(el, selector);
  };

  var getBoundPosition = function getBoundPosition(bounds, node, clientX, clientY) {
    if (!bounds) return [clientX, clientY];

    var parent = node.parentNode;

    if (bounds.parent) {
      var nodeStyle = window.getComputedStyle(node);
      var parentStyle = window.getComputedStyle(parent);

      bounds = {
        left: -node.offsetLeft + int(parentStyle.paddingLeft) + int(nodeStyle.borderLeftWidth) + int(nodeStyle.marginLeft),
        top: -node.offsetTop + int(parentStyle.paddingTop) + int(nodeStyle.borderTopWidth) + int(nodeStyle.marginTop),
        right: innerWidth(parent) - node.offsetLeft - outerWidth(node),
        bottom: innerHeight(parent) - outerHeight(node) - node.offsetTop
      };
    }

    if (isNum(bounds.right)) clientX = Math.min(clientX, bounds.right);
    if (isNum(bounds.bottom)) clientY = Math.min(clientY, bounds.bottom);

    if (isNum(bounds.left)) clientX = Math.max(clientX, bounds.left);
    if (isNum(bounds.top)) clientY = Math.max(clientY, bounds.top);

    return [clientX, clientY];
  };

  exports.default = {
    replace: true,
    name: 'dragable',
    props: {
      id: {
        type: String,
        default: '',
      },
      equalScale: {
        type: Boolean,
        default: false,
      },
      w: {
        type: Number,
        default: 40
      },
      h: {
        type: Number,
        default: 40
      },
      x: {
        type: Number,
        default: 0
      },
      y: {
        type: Number,
        default: 0
      },
      r: {
        type: Number,
        default: 0
      },
      rotatable: {
        type: Boolean,
        default: true
      },
      axis: {
        type: String,
        default: 'both'
      },
      handle: {
        type: String,
        default: ''
      },
      cancel: {
        type: String,
        default: ''
      },
      grid: {
        type: Array,
        default: function _default() {
          return [0, 0];
        }
      },
      bounds: {
        type: Object,
        default: null
      }
    },
    mounted: function mounted() {
      var el = document.documentElement;
      var event = 'mousemove';
      var handler = this.handleMove;

      if (el.attachEvent) {
        el.attachEvent('on' + event, handler);
      } else if (el.addEventListener) {
        el.addEventListener(event, handler, true);
      } else {
        el['on' + event] = handler;
      }

      if (!this.rotatable) {
        this.$el.getElementsByClassName('rotate')[0].className = '';
      } else {
        this.rotate = this.r;
      }

      document.addEventListener('mouseup', this.handleUp);
    },
    beforeDestroy: function beforeDestroy() {
      var el = document.documentElement;
      var event = 'mousemove';
      var handler = this.handleMove;

      if (el.detachEvent) {
        el.detachEvent('on' + event, handler);
      } else if (el.removeEventListener) {
        el.removeEventListener(event, handler, true);
      } else {
        el['on' + event] = null;
      }
    },
    methods: {
      getRotateAngle: function getRotateAngle(x, y) {
        var rCenter = this._getCenter();
        var vStart = new _victor2.default(this.rotateStartX - rCenter.x, this.rotateStartY - rCenter.y);
        var vEnd = new _victor2.default(x - rCenter.x, y - rCenter.y);
        return vEnd.angleDeg() - vStart.angleDeg();
      },
      _getCenter: function _getCenter() {
        var rect = this.$el.getBoundingClientRect();
        return {
          x: (rect.left + rect.right) / 2,
          y: (rect.bottom + rect.top) / 2
        };
      },
      rotateStart: function rotateStart(e) {
        if (this.rotatable) {
          this.rotateStartX = e.clientX;
          this.rotateStartY = e.clientY;
          this.rotating = true;
        }
      },
      resizeStart: function resizeStart(e) {
        this.resizeStartX = e.clientX;
        this.resizeStartY = e.clientY;
        this.resizing = true;
        this.lastW = this.localw;
        this.lastH = this.localh;
      },
      handleDown: function handleDown(e) {

        if (this.handle && !matchesSelector(e.target, this.handle)) {
          return;
        }
        if (this.cancel && matchesSelector(e.target, this.cancel)) {
          return;
        }
        if (!this.lastX) {
          this.lastX = e.clientX;
          this.lastY = e.clientY;
        }
        this.dragging = true;
      },
      handleUp: function handleUp(e) {
        // console.log('e.target.tagName', e.target.tagName);

        if (!this.dragging && !this.resizing && !this.rotating) {
          return;
        }
        this.dragging = false;
        this.resizing = false;
        this.rotating = false;
        this.$emit('handleUp', {
          id: this.id,
          x: this.localx,
          y: this.localy,
          w: this.localw,
          h: this.localh,
          r: this.localr,
        });
      },
      handleMove: function handleMove(e) {
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();

        if (this.dragging) {
          var deltax = e.clientX - this.lastX;
          var deltay = e.clientY - this.lastY;

          var deltaxround = Math.round(deltax / this.grid[0]) * this.grid[0];
          var deltayround = Math.round(deltay / this.grid[1]) * this.grid[1];

          var thisx = this.localx;
          var thisy = this.localy;

          if (this.grid[0] > 0 && this.grid[1] > 0) {
            if (this.axis === 'both') {
              thisx = deltaxround;
              thisy = deltayround;
            } else if (this.axis === 'x') {
              thisx = deltaxround;
            } else if (this.axis === 'y') {
              thisy = deltayround;
            }
          } else {
            if (this.axis === 'both') {
              thisx = e.clientX - this.lastX;
              thisy = e.clientY - this.lastY;
            } else if (this.axis === 'x') {
              thisx = e.clientX - this.lastX;
            } else if (this.axis === 'y') {
              thisy = e.clientY - this.lastY;
            }
          }

          if (this.bounds) {
            var _getBoundPosition = getBoundPosition(this.bounds, this.$el, thisx, thisy);

            var _getBoundPosition2 = (0, _slicedToArray3.default)(_getBoundPosition, 2);

            thisx = _getBoundPosition2[0];
            thisy = _getBoundPosition2[1];
          }

          this.localx = thisx;
          this.localy = thisy;
        }
        if (this.resizing) {
          this.localw = parseInt(this.lastW) + parseInt(e.clientX) - parseInt(this.resizeStartX);
          // 是否等比例缩放
          if (!this.equalScale) {
            this.localh = parseInt(this.lastH) + parseInt(e.clientY) - parseInt(this.resizeStartY);
          } else {
            this.localh = parseInt(this.lastH) + parseInt(this.lastH) / parseInt(this.lastW) * (parseInt(e.clientX) - parseInt(this.resizeStartX));
          }
        }
        if (this.rotating) {
          this.localr = parseInt(this.r) + this.getRotateAngle(e.clientX, e.clientY);
        }
      }
    },

    data: function data() {
      return {
        localx: this.x,
        localy: this.y,
        localw: this.w,
        localh: this.h,
        localr: this.r,
        lastX: 0,
        lastY: 0,
        dragging: false,
        rotate: 0,
        resizeStartX: 0,
        resizeStartY: 0,
        rotateStartX: 0,
        rotateStartY: 0,
        resizing: false
      };
    },
    computed: {
      boxStyle: function boxStyle() {
        return {
          width: this.localw + 'px',
          height: this.localh + 'px',
          transform: 'translate(' + this.localx + 'px,' + this.localy + 'px) rotate(' + this.localr + 'deg)'
        };
      }
    }
  };

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";

  exports.__esModule = true;

  var _isIterable2 = __webpack_require__(9);

  var _isIterable3 = _interopRequireDefault(_isIterable2);

  var _getIterator2 = __webpack_require__(61);

  var _getIterator3 = _interopRequireDefault(_getIterator2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if ((0, _isIterable3.default)(Object(arr))) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(10), __esModule: true };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(11);
  __webpack_require__(57);
  module.exports = __webpack_require__(59);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(12);
  var global        = __webpack_require__(23)
    , hide          = __webpack_require__(27)
    , Iterators     = __webpack_require__(15)
    , TO_STRING_TAG = __webpack_require__(54)('toStringTag');

  for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
    var NAME       = collections[i]
      , Collection = global[NAME]
      , proto      = Collection && Collection.prototype;
    if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = Iterators.Array;
  }

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var addToUnscopables = __webpack_require__(13)
    , step             = __webpack_require__(14)
    , Iterators        = __webpack_require__(15)
    , toIObject        = __webpack_require__(16);

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  module.exports = __webpack_require__(20)(Array, 'Array', function(iterated, kind){
    this._t = toIObject(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function(){
    var O     = this._t
      , kind  = this._k
      , index = this._i++;
    if(!O || index >= O.length){
      this._t = undefined;
      return step(1);
    }
    if(kind == 'keys'  )return step(0, index);
    if(kind == 'values')return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  Iterators.Arguments = Iterators.Array;

  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = function(){ /* empty */ };

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = function(done, value){
    return {value: value, done: !!done};
  };

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = {};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  // to indexed object, toObject with fallback for non-array-like ES3 strings
  var IObject = __webpack_require__(17)
    , defined = __webpack_require__(19);
  module.exports = function(it){
    return IObject(defined(it));
  };

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var cof = __webpack_require__(18);
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
    return cof(it) == 'String' ? it.split('') : Object(it);
  };

/***/ },
/* 18 */
/***/ function(module, exports) {

  var toString = {}.toString;

  module.exports = function(it){
    return toString.call(it).slice(8, -1);
  };

/***/ },
/* 19 */
/***/ function(module, exports) {

  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function(it){
    if(it == undefined)throw TypeError("Can't call method on  " + it);
    return it;
  };

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var LIBRARY        = __webpack_require__(21)
    , $export        = __webpack_require__(22)
    , redefine       = __webpack_require__(37)
    , hide           = __webpack_require__(27)
    , has            = __webpack_require__(38)
    , Iterators      = __webpack_require__(15)
    , $iterCreate    = __webpack_require__(39)
    , setToStringTag = __webpack_require__(53)
    , getPrototypeOf = __webpack_require__(55)
    , ITERATOR       = __webpack_require__(54)('iterator')
    , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
    , FF_ITERATOR    = '@@iterator'
    , KEYS           = 'keys'
    , VALUES         = 'values';

  var returnThis = function(){ return this; };

  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind){
      if(!BUGGY && kind in proto)return proto[kind];
      switch(kind){
        case KEYS: return function keys(){ return new Constructor(this, kind); };
        case VALUES: return function values(){ return new Constructor(this, kind); };
      } return function entries(){ return new Constructor(this, kind); };
    };
    var TAG        = NAME + ' Iterator'
      , DEF_VALUES = DEFAULT == VALUES
      , VALUES_BUG = false
      , proto      = Base.prototype
      , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
      , $default   = $native || getMethod(DEFAULT)
      , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
      , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
      , methods, key, IteratorPrototype;
    // Fix native
    if($anyNative){
      IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
      if(IteratorPrototype !== Object.prototype){
        // Set @@toStringTag to native iterators
        setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
    // Define iterator
    if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
      hide(proto, ITERATOR, $default);
    }
    // Plug for library
    Iterators[NAME] = $default;
    Iterators[TAG]  = returnThis;
    if(DEFAULT){
      methods = {
        values:  DEF_VALUES ? $default : getMethod(VALUES),
        keys:    IS_SET     ? $default : getMethod(KEYS),
        entries: $entries
      };
      if(FORCED)for(key in methods){
        if(!(key in proto))redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = true;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  var global    = __webpack_require__(23)
    , core      = __webpack_require__(24)
    , ctx       = __webpack_require__(25)
    , hide      = __webpack_require__(27)
    , PROTOTYPE = 'prototype';

  var $export = function(type, name, source){
    var IS_FORCED = type & $export.F
      , IS_GLOBAL = type & $export.G
      , IS_STATIC = type & $export.S
      , IS_PROTO  = type & $export.P
      , IS_BIND   = type & $export.B
      , IS_WRAP   = type & $export.W
      , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
      , expProto  = exports[PROTOTYPE]
      , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
      , key, own, out;
    if(IS_GLOBAL)source = name;
    for(key in source){
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      if(own && key in exports)continue;
      // export native or passed
      out = own ? target[key] : source[key];
      // prevent global pollution for namespaces
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
      // bind timers to global for call from export context
      : IS_BIND && own ? ctx(out, global)
      // wrap global constructors for prevent change them in library
      : IS_WRAP && target[key] == out ? (function(C){
        var F = function(a, b, c){
          if(this instanceof C){
            switch(arguments.length){
              case 0: return new C;
              case 1: return new C(a);
              case 2: return new C(a, b);
            } return new C(a, b, c);
          } return C.apply(this, arguments);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      // make static versions for prototype methods
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
      if(IS_PROTO){
        (exports.virtual || (exports.virtual = {}))[key] = out;
        // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
        if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
      }
    }
  };
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  module.exports = $export;

/***/ },
/* 23 */
/***/ function(module, exports) {

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 24 */
/***/ function(module, exports) {

  var core = module.exports = {version: '2.4.0'};
  if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  // optional / simple context binding
  var aFunction = __webpack_require__(26);
  module.exports = function(fn, that, length){
    aFunction(fn);
    if(that === undefined)return fn;
    switch(length){
      case 1: return function(a){
        return fn.call(that, a);
      };
      case 2: return function(a, b){
        return fn.call(that, a, b);
      };
      case 3: return function(a, b, c){
        return fn.call(that, a, b, c);
      };
    }
    return function(/* ...args */){
      return fn.apply(that, arguments);
    };
  };

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = function(it){
    if(typeof it != 'function')throw TypeError(it + ' is not a function!');
    return it;
  };

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  var dP         = __webpack_require__(28)
    , createDesc = __webpack_require__(36);
  module.exports = __webpack_require__(32) ? function(object, key, value){
    return dP.f(object, key, createDesc(1, value));
  } : function(object, key, value){
    object[key] = value;
    return object;
  };

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  var anObject       = __webpack_require__(29)
    , IE8_DOM_DEFINE = __webpack_require__(31)
    , toPrimitive    = __webpack_require__(35)
    , dP             = Object.defineProperty;

  exports.f = __webpack_require__(32) ? Object.defineProperty : function defineProperty(O, P, Attributes){
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if(IE8_DOM_DEFINE)try {
      return dP(O, P, Attributes);
    } catch(e){ /* empty */ }
    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
    if('value' in Attributes)O[P] = Attributes.value;
    return O;
  };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  var isObject = __webpack_require__(30);
  module.exports = function(it){
    if(!isObject(it))throw TypeError(it + ' is not an object!');
    return it;
  };

/***/ },
/* 30 */
/***/ function(module, exports) {

  module.exports = function(it){
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = !__webpack_require__(32) && !__webpack_require__(33)(function(){
    return Object.defineProperty(__webpack_require__(34)('div'), 'a', {get: function(){ return 7; }}).a != 7;
  });

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  // Thank's IE8 for his funny defineProperty
  module.exports = !__webpack_require__(33)(function(){
    return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
  });

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = function(exec){
    try {
      return !!exec();
    } catch(e){
      return true;
    }
  };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  var isObject = __webpack_require__(30)
    , document = __webpack_require__(23).document
    // in old IE typeof document.createElement is 'object'
    , is = isObject(document) && isObject(document.createElement);
  module.exports = function(it){
    return is ? document.createElement(it) : {};
  };

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  // 7.1.1 ToPrimitive(input [, PreferredType])
  var isObject = __webpack_require__(30);
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  module.exports = function(it, S){
    if(!isObject(it))return it;
    var fn, val;
    if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
    if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
    if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
    throw TypeError("Can't convert object to primitive value");
  };

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = function(bitmap, value){
    return {
      enumerable  : !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable    : !(bitmap & 4),
      value       : value
    };
  };

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(27);

/***/ },
/* 38 */
/***/ function(module, exports) {

  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key){
    return hasOwnProperty.call(it, key);
  };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var create         = __webpack_require__(40)
    , descriptor     = __webpack_require__(36)
    , setToStringTag = __webpack_require__(53)
    , IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  __webpack_require__(27)(IteratorPrototype, __webpack_require__(54)('iterator'), function(){ return this; });

  module.exports = function(Constructor, NAME, next){
    Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  var anObject    = __webpack_require__(29)
    , dPs         = __webpack_require__(41)
    , enumBugKeys = __webpack_require__(51)
    , IE_PROTO    = __webpack_require__(48)('IE_PROTO')
    , Empty       = function(){ /* empty */ }
    , PROTOTYPE   = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function(){
    // Thrash, waste and sodomy: IE GC bug
    var iframe = __webpack_require__(34)('iframe')
      , i      = enumBugKeys.length
      , lt     = '<'
      , gt     = '>'
      , iframeDocument;
    iframe.style.display = 'none';
    __webpack_require__(52).appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
    return createDict();
  };

  module.exports = Object.create || function create(O, Properties){
    var result;
    if(O !== null){
      Empty[PROTOTYPE] = anObject(O);
      result = new Empty;
      Empty[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : dPs(result, Properties);
  };


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  var dP       = __webpack_require__(28)
    , anObject = __webpack_require__(29)
    , getKeys  = __webpack_require__(42);

  module.exports = __webpack_require__(32) ? Object.defineProperties : function defineProperties(O, Properties){
    anObject(O);
    var keys   = getKeys(Properties)
      , length = keys.length
      , i = 0
      , P;
    while(length > i)dP.f(O, P = keys[i++], Properties[P]);
    return O;
  };

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
  var $keys       = __webpack_require__(43)
    , enumBugKeys = __webpack_require__(51);

  module.exports = Object.keys || function keys(O){
    return $keys(O, enumBugKeys);
  };

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  var has          = __webpack_require__(38)
    , toIObject    = __webpack_require__(16)
    , arrayIndexOf = __webpack_require__(44)(false)
    , IE_PROTO     = __webpack_require__(48)('IE_PROTO');

  module.exports = function(object, names){
    var O      = toIObject(object)
      , i      = 0
      , result = []
      , key;
    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while(names.length > i)if(has(O, key = names[i++])){
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  // false -> Array#indexOf
  // true  -> Array#includes
  var toIObject = __webpack_require__(16)
    , toLength  = __webpack_require__(45)
    , toIndex   = __webpack_require__(47);
  module.exports = function(IS_INCLUDES){
    return function($this, el, fromIndex){
      var O      = toIObject($this)
        , length = toLength(O.length)
        , index  = toIndex(fromIndex, length)
        , value;
      // Array#includes uses SameValueZero equality algorithm
      if(IS_INCLUDES && el != el)while(length > index){
        value = O[index++];
        if(value != value)return true;
      // Array#toIndex ignores holes, Array#includes - not
      } else for(;length > index; index++)if(IS_INCLUDES || index in O){
        if(O[index] === el)return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  // 7.1.15 ToLength
  var toInteger = __webpack_require__(46)
    , min       = Math.min;
  module.exports = function(it){
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

/***/ },
/* 46 */
/***/ function(module, exports) {

  // 7.1.4 ToInteger
  var ceil  = Math.ceil
    , floor = Math.floor;
  module.exports = function(it){
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  var toInteger = __webpack_require__(46)
    , max       = Math.max
    , min       = Math.min;
  module.exports = function(index, length){
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  var shared = __webpack_require__(49)('keys')
    , uid    = __webpack_require__(50);
  module.exports = function(key){
    return shared[key] || (shared[key] = uid(key));
  };

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  var global = __webpack_require__(23)
    , SHARED = '__core-js_shared__'
    , store  = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key){
    return store[key] || (store[key] = {});
  };

/***/ },
/* 50 */
/***/ function(module, exports) {

  var id = 0
    , px = Math.random();
  module.exports = function(key){
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

/***/ },
/* 51 */
/***/ function(module, exports) {

  // IE 8- don't enum bug keys
  module.exports = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(23).document && document.documentElement;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  var def = __webpack_require__(28).f
    , has = __webpack_require__(38)
    , TAG = __webpack_require__(54)('toStringTag');

  module.exports = function(it, tag, stat){
    if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
  };

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  var store      = __webpack_require__(49)('wks')
    , uid        = __webpack_require__(50)
    , Symbol     = __webpack_require__(23).Symbol
    , USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function(name){
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
  };

  $exports.store = store;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
  var has         = __webpack_require__(38)
    , toObject    = __webpack_require__(56)
    , IE_PROTO    = __webpack_require__(48)('IE_PROTO')
    , ObjectProto = Object.prototype;

  module.exports = Object.getPrototypeOf || function(O){
    O = toObject(O);
    if(has(O, IE_PROTO))return O[IE_PROTO];
    if(typeof O.constructor == 'function' && O instanceof O.constructor){
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  // 7.1.13 ToObject(argument)
  var defined = __webpack_require__(19);
  module.exports = function(it){
    return Object(defined(it));
  };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $at  = __webpack_require__(58)(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  __webpack_require__(20)(String, 'String', function(iterated){
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function(){
    var O     = this._t
      , index = this._i
      , point;
    if(index >= O.length)return {value: undefined, done: true};
    point = $at(O, index);
    this._i += point.length;
    return {value: point, done: false};
  });

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  var toInteger = __webpack_require__(46)
    , defined   = __webpack_require__(19);
  // true  -> String#at
  // false -> String#codePointAt
  module.exports = function(TO_STRING){
    return function(that, pos){
      var s = String(defined(that))
        , i = toInteger(pos)
        , l = s.length
        , a, b;
      if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  var classof   = __webpack_require__(60)
    , ITERATOR  = __webpack_require__(54)('iterator')
    , Iterators = __webpack_require__(15);
  module.exports = __webpack_require__(24).isIterable = function(it){
    var O = Object(it);
    return O[ITERATOR] !== undefined
      || '@@iterator' in O
      || Iterators.hasOwnProperty(classof(O));
  };

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  // getting tag from 19.1.3.6 Object.prototype.toString()
  var cof = __webpack_require__(18)
    , TAG = __webpack_require__(54)('toStringTag')
    // ES3 wrong here
    , ARG = cof(function(){ return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function(it, key){
    try {
      return it[key];
    } catch(e){ /* empty */ }
  };

  module.exports = function(it){
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
      // builtinTag case
      : ARG ? cof(O)
      // ES3 arguments fallback
      : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(11);
  __webpack_require__(57);
  module.exports = __webpack_require__(63);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  var anObject = __webpack_require__(29)
    , get      = __webpack_require__(64);
  module.exports = __webpack_require__(24).getIterator = function(it){
    var iterFn = get(it);
    if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
    return anObject(iterFn.call(it));
  };

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  var classof   = __webpack_require__(60)
    , ITERATOR  = __webpack_require__(54)('iterator')
    , Iterators = __webpack_require__(15);
  module.exports = __webpack_require__(24).getIteratorMethod = function(it){
    if(it != undefined)return it[ITERATOR]
      || it['@@iterator']
      || Iterators[classof(it)];
  };

/***/ },
/* 65 */
/***/ function(module, exports) {

  exports = module.exports = Victor;

  /**
   * # Victor - A JavaScript 2D vector class with methods for common vector operations
   */

  /**
   * Constructor. Will also work without the `new` keyword
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = Victor(42, 1337);
   *
   * @param {Number} x Value of the x axis
   * @param {Number} y Value of the y axis
   * @return {Victor}
   * @api public
   */
  function Victor (x, y) {
    if (!(this instanceof Victor)) {
      return new Victor(x, y);
    }

    /**
     * The X axis
     *
     * ### Examples:
     *     var vec = new Victor.fromArray(42, 21);
     *
     *     vec.x;
     *     // => 42
     *
     * @api public
     */
    this.x = x || 0;

    /**
     * The Y axis
     *
     * ### Examples:
     *     var vec = new Victor.fromArray(42, 21);
     *
     *     vec.y;
     *     // => 21
     *
     * @api public
     */
    this.y = y || 0;
  };

  /**
   * # Static
   */

  /**
   * Creates a new instance from an array
   *
   * ### Examples:
   *     var vec = Victor.fromArray([42, 21]);
   *
   *     vec.toString();
   *     // => x:42, y:21
   *
   * @name Victor.fromArray
   * @param {Array} array Array with the x and y values at index 0 and 1 respectively
   * @return {Victor} The new instance
   * @api public
   */
  Victor.fromArray = function (arr) {
    return new Victor(arr[0] || 0, arr[1] || 0);
  };

  /**
   * Creates a new instance from an object
   *
   * ### Examples:
   *     var vec = Victor.fromObject({ x: 42, y: 21 });
   *
   *     vec.toString();
   *     // => x:42, y:21
   *
   * @name Victor.fromObject
   * @param {Object} obj Object with the values for x and y
   * @return {Victor} The new instance
   * @api public
   */
  Victor.fromObject = function (obj) {
    return new Victor(obj.x || 0, obj.y || 0);
  };

  /**
   * # Manipulation
   *
   * These functions are chainable.
   */

  /**
   * Adds another vector's X axis to this one
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.addX(vec2);
   *     vec1.toString();
   *     // => x:30, y:10
   *
   * @param {Victor} vector The other vector you want to add to this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.addX = function (vec) {
    this.x += vec.x;
    return this;
  };

  /**
   * Adds another vector's Y axis to this one
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.addY(vec2);
   *     vec1.toString();
   *     // => x:10, y:40
   *
   * @param {Victor} vector The other vector you want to add to this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.addY = function (vec) {
    this.y += vec.y;
    return this;
  };

  /**
   * Adds another vector to this one
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.add(vec2);
   *     vec1.toString();
   *     // => x:30, y:40
   *
   * @param {Victor} vector The other vector you want to add to this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.add = function (vec) {
    this.x += vec.x;
    this.y += vec.y;
    return this;
  };

  /**
   * Adds the given scalar to both vector axis
   *
   * ### Examples:
   *     var vec = new Victor(1, 2);
   *
   *     vec.addScalar(2);
   *     vec.toString();
   *     // => x: 3, y: 4
   *
   * @param {Number} scalar The scalar to add
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.addScalar = function (scalar) {
    this.x += scalar;
    this.y += scalar;
    return this;
  };

  /**
   * Adds the given scalar to the X axis
   *
   * ### Examples:
   *     var vec = new Victor(1, 2);
   *
   *     vec.addScalarX(2);
   *     vec.toString();
   *     // => x: 3, y: 2
   *
   * @param {Number} scalar The scalar to add
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.addScalarX = function (scalar) {
    this.x += scalar;
    return this;
  };

  /**
   * Adds the given scalar to the Y axis
   *
   * ### Examples:
   *     var vec = new Victor(1, 2);
   *
   *     vec.addScalarY(2);
   *     vec.toString();
   *     // => x: 1, y: 4
   *
   * @param {Number} scalar The scalar to add
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.addScalarY = function (scalar) {
    this.y += scalar;
    return this;
  };

  /**
   * Subtracts the X axis of another vector from this one
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.subtractX(vec2);
   *     vec1.toString();
   *     // => x:80, y:50
   *
   * @param {Victor} vector The other vector you want subtract from this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtractX = function (vec) {
    this.x -= vec.x;
    return this;
  };

  /**
   * Subtracts the Y axis of another vector from this one
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.subtractY(vec2);
   *     vec1.toString();
   *     // => x:100, y:20
   *
   * @param {Victor} vector The other vector you want subtract from this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtractY = function (vec) {
    this.y -= vec.y;
    return this;
  };

  /**
   * Subtracts another vector from this one
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.subtract(vec2);
   *     vec1.toString();
   *     // => x:80, y:20
   *
   * @param {Victor} vector The other vector you want subtract from this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtract = function (vec) {
    this.x -= vec.x;
    this.y -= vec.y;
    return this;
  };

  /**
   * Subtracts the given scalar from both axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 200);
   *
   *     vec.subtractScalar(20);
   *     vec.toString();
   *     // => x: 80, y: 180
   *
   * @param {Number} scalar The scalar to subtract
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtractScalar = function (scalar) {
    this.x -= scalar;
    this.y -= scalar;
    return this;
  };

  /**
   * Subtracts the given scalar from the X axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 200);
   *
   *     vec.subtractScalarX(20);
   *     vec.toString();
   *     // => x: 80, y: 200
   *
   * @param {Number} scalar The scalar to subtract
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtractScalarX = function (scalar) {
    this.x -= scalar;
    return this;
  };

  /**
   * Subtracts the given scalar from the Y axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 200);
   *
   *     vec.subtractScalarY(20);
   *     vec.toString();
   *     // => x: 100, y: 180
   *
   * @param {Number} scalar The scalar to subtract
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtractScalarY = function (scalar) {
    this.y -= scalar;
    return this;
  };

  /**
   * Divides the X axis by the x component of given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(2, 0);
   *
   *     vec.divideX(vec2);
   *     vec.toString();
   *     // => x:50, y:50
   *
   * @param {Victor} vector The other vector you want divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divideX = function (vector) {
    this.x /= vector.x;
    return this;
  };

  /**
   * Divides the Y axis by the y component of given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(0, 2);
   *
   *     vec.divideY(vec2);
   *     vec.toString();
   *     // => x:100, y:25
   *
   * @param {Victor} vector The other vector you want divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divideY = function (vector) {
    this.y /= vector.y;
    return this;
  };

  /**
   * Divides both vector axis by a axis values of given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(2, 2);
   *
   *     vec.divide(vec2);
   *     vec.toString();
   *     // => x:50, y:25
   *
   * @param {Victor} vector The vector to divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divide = function (vector) {
    this.x /= vector.x;
    this.y /= vector.y;
    return this;
  };

  /**
   * Divides both vector axis by the given scalar value
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.divideScalar(2);
   *     vec.toString();
   *     // => x:50, y:25
   *
   * @param {Number} The scalar to divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divideScalar = function (scalar) {
    if (scalar !== 0) {
      this.x /= scalar;
      this.y /= scalar;
    } else {
      this.x = 0;
      this.y = 0;
    }

    return this;
  };

  /**
   * Divides the X axis by the given scalar value
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.divideScalarX(2);
   *     vec.toString();
   *     // => x:50, y:50
   *
   * @param {Number} The scalar to divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divideScalarX = function (scalar) {
    if (scalar !== 0) {
      this.x /= scalar;
    } else {
      this.x = 0;
    }
    return this;
  };

  /**
   * Divides the Y axis by the given scalar value
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.divideScalarY(2);
   *     vec.toString();
   *     // => x:100, y:25
   *
   * @param {Number} The scalar to divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divideScalarY = function (scalar) {
    if (scalar !== 0) {
      this.y /= scalar;
    } else {
      this.y = 0;
    }
    return this;
  };

  /**
   * Inverts the X axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.invertX();
   *     vec.toString();
   *     // => x:-100, y:50
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.invertX = function () {
    this.x *= -1;
    return this;
  };

  /**
   * Inverts the Y axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.invertY();
   *     vec.toString();
   *     // => x:100, y:-50
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.invertY = function () {
    this.y *= -1;
    return this;
  };

  /**
   * Inverts both axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.invert();
   *     vec.toString();
   *     // => x:-100, y:-50
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.invert = function () {
    this.invertX();
    this.invertY();
    return this;
  };

  /**
   * Multiplies the X axis by X component of given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(2, 0);
   *
   *     vec.multiplyX(vec2);
   *     vec.toString();
   *     // => x:200, y:50
   *
   * @param {Victor} vector The vector to multiply the axis with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiplyX = function (vector) {
    this.x *= vector.x;
    return this;
  };

  /**
   * Multiplies the Y axis by Y component of given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(0, 2);
   *
   *     vec.multiplyX(vec2);
   *     vec.toString();
   *     // => x:100, y:100
   *
   * @param {Victor} vector The vector to multiply the axis with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiplyY = function (vector) {
    this.y *= vector.y;
    return this;
  };

  /**
   * Multiplies both vector axis by values from a given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(2, 2);
   *
   *     vec.multiply(vec2);
   *     vec.toString();
   *     // => x:200, y:100
   *
   * @param {Victor} vector The vector to multiply by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiply = function (vector) {
    this.x *= vector.x;
    this.y *= vector.y;
    return this;
  };

  /**
   * Multiplies both vector axis by the given scalar value
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.multiplyScalar(2);
   *     vec.toString();
   *     // => x:200, y:100
   *
   * @param {Number} The scalar to multiply by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiplyScalar = function (scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  };

  /**
   * Multiplies the X axis by the given scalar
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.multiplyScalarX(2);
   *     vec.toString();
   *     // => x:200, y:50
   *
   * @param {Number} The scalar to multiply the axis with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiplyScalarX = function (scalar) {
    this.x *= scalar;
    return this;
  };

  /**
   * Multiplies the Y axis by the given scalar
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.multiplyScalarY(2);
   *     vec.toString();
   *     // => x:100, y:100
   *
   * @param {Number} The scalar to multiply the axis with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiplyScalarY = function (scalar) {
    this.y *= scalar;
    return this;
  };

  /**
   * Normalize
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.normalize = function () {
    var length = this.length();

    if (length === 0) {
      this.x = 1;
      this.y = 0;
    } else {
      this.divide(Victor(length, length));
    }
    return this;
  };

  Victor.prototype.norm = Victor.prototype.normalize;

  /**
   * If the absolute vector axis is greater than `max`, multiplies the axis by `factor`
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.limit(80, 0.9);
   *     vec.toString();
   *     // => x:90, y:50
   *
   * @param {Number} max The maximum value for both x and y axis
   * @param {Number} factor Factor by which the axis are to be multiplied with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.limit = function (max, factor) {
    if (Math.abs(this.x) > max){ this.x *= factor; }
    if (Math.abs(this.y) > max){ this.y *= factor; }
    return this;
  };

  /**
   * Randomizes both vector axis with a value between 2 vectors
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.randomize(new Victor(50, 60), new Victor(70, 80`));
   *     vec.toString();
   *     // => x:67, y:73
   *
   * @param {Victor} topLeft first vector
   * @param {Victor} bottomRight second vector
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.randomize = function (topLeft, bottomRight) {
    this.randomizeX(topLeft, bottomRight);
    this.randomizeY(topLeft, bottomRight);

    return this;
  };

  /**
   * Randomizes the y axis with a value between 2 vectors
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.randomizeX(new Victor(50, 60), new Victor(70, 80`));
   *     vec.toString();
   *     // => x:55, y:50
   *
   * @param {Victor} topLeft first vector
   * @param {Victor} bottomRight second vector
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.randomizeX = function (topLeft, bottomRight) {
    var min = Math.min(topLeft.x, bottomRight.x);
    var max = Math.max(topLeft.x, bottomRight.x);
    this.x = random(min, max);
    return this;
  };

  /**
   * Randomizes the y axis with a value between 2 vectors
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.randomizeY(new Victor(50, 60), new Victor(70, 80`));
   *     vec.toString();
   *     // => x:100, y:66
   *
   * @param {Victor} topLeft first vector
   * @param {Victor} bottomRight second vector
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.randomizeY = function (topLeft, bottomRight) {
    var min = Math.min(topLeft.y, bottomRight.y);
    var max = Math.max(topLeft.y, bottomRight.y);
    this.y = random(min, max);
    return this;
  };

  /**
   * Randomly randomizes either axis between 2 vectors
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.randomizeAny(new Victor(50, 60), new Victor(70, 80));
   *     vec.toString();
   *     // => x:100, y:77
   *
   * @param {Victor} topLeft first vector
   * @param {Victor} bottomRight second vector
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.randomizeAny = function (topLeft, bottomRight) {
    if (!! Math.round(Math.random())) {
      this.randomizeX(topLeft, bottomRight);
    } else {
      this.randomizeY(topLeft, bottomRight);
    }
    return this;
  };

  /**
   * Rounds both axis to an integer value
   *
   * ### Examples:
   *     var vec = new Victor(100.2, 50.9);
   *
   *     vec.unfloat();
   *     vec.toString();
   *     // => x:100, y:51
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.unfloat = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };

  /**
   * Rounds both axis to a certain precision
   *
   * ### Examples:
   *     var vec = new Victor(100.2, 50.9);
   *
   *     vec.unfloat();
   *     vec.toString();
   *     // => x:100, y:51
   *
   * @param {Number} Precision (default: 8)
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.toFixed = function (precision) {
    if (typeof precision === 'undefined') { precision = 8; }
    this.x = this.x.toFixed(precision);
    this.y = this.y.toFixed(precision);
    return this;
  };

  /**
   * Performs a linear blend / interpolation of the X axis towards another vector
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 100);
   *     var vec2 = new Victor(200, 200);
   *
   *     vec1.mixX(vec2, 0.5);
   *     vec.toString();
   *     // => x:150, y:100
   *
   * @param {Victor} vector The other vector
   * @param {Number} amount The blend amount (optional, default: 0.5)
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.mixX = function (vec, amount) {
    if (typeof amount === 'undefined') {
      amount = 0.5;
    }

    this.x = (1 - amount) * this.x + amount * vec.x;
    return this;
  };

  /**
   * Performs a linear blend / interpolation of the Y axis towards another vector
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 100);
   *     var vec2 = new Victor(200, 200);
   *
   *     vec1.mixY(vec2, 0.5);
   *     vec.toString();
   *     // => x:100, y:150
   *
   * @param {Victor} vector The other vector
   * @param {Number} amount The blend amount (optional, default: 0.5)
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.mixY = function (vec, amount) {
    if (typeof amount === 'undefined') {
      amount = 0.5;
    }

    this.y = (1 - amount) * this.y + amount * vec.y;
    return this;
  };

  /**
   * Performs a linear blend / interpolation towards another vector
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 100);
   *     var vec2 = new Victor(200, 200);
   *
   *     vec1.mix(vec2, 0.5);
   *     vec.toString();
   *     // => x:150, y:150
   *
   * @param {Victor} vector The other vector
   * @param {Number} amount The blend amount (optional, default: 0.5)
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.mix = function (vec, amount) {
    this.mixX(vec, amount);
    this.mixY(vec, amount);
    return this;
  };

  /**
   * # Products
   */

  /**
   * Creates a clone of this vector
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = vec1.clone();
   *
   *     vec2.toString();
   *     // => x:10, y:10
   *
   * @return {Victor} A clone of the vector
   * @api public
   */
  Victor.prototype.clone = function () {
    return new Victor(this.x, this.y);
  };

  /**
   * Copies another vector's X component in to its own
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 20);
   *     var vec2 = vec1.copyX(vec1);
   *
   *     vec2.toString();
   *     // => x:20, y:10
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.copyX = function (vec) {
    this.x = vec.x;
    return this;
  };

  /**
   * Copies another vector's Y component in to its own
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 20);
   *     var vec2 = vec1.copyY(vec1);
   *
   *     vec2.toString();
   *     // => x:10, y:20
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.copyY = function (vec) {
    this.y = vec.y;
    return this;
  };

  /**
   * Copies another vector's X and Y components in to its own
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 20);
   *     var vec2 = vec1.copy(vec1);
   *
   *     vec2.toString();
   *     // => x:20, y:20
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.copy = function (vec) {
    this.copyX(vec);
    this.copyY(vec);
    return this;
  };

  /**
   * Sets the vector to zero (0,0)
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var1.zero();
   *     vec1.toString();
   *     // => x:0, y:0
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.zero = function () {
    this.x = this.y = 0;
    return this;
  };

  /**
   * Calculates the dot product of this vector and another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.dot(vec2);
   *     // => 23000
   *
   * @param {Victor} vector The second vector
   * @return {Number} Dot product
   * @api public
   */
  Victor.prototype.dot = function (vec2) {
    return this.x * vec2.x + this.y * vec2.y;
  };

  Victor.prototype.cross = function (vec2) {
    return (this.x * vec2.y ) - (this.y * vec2.x );
  };

  /**
   * Projects a vector onto another vector, setting itself to the result.
   *
   * ### Examples:
   *     var vec = new Victor(100, 0);
   *     var vec2 = new Victor(100, 100);
   *
   *     vec.projectOnto(vec2);
   *     vec.toString();
   *     // => x:50, y:50
   *
   * @param {Victor} vector The other vector you want to project this vector onto
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.projectOnto = function (vec2) {
      var coeff = ( (this.x * vec2.x)+(this.y * vec2.y) ) / ((vec2.x*vec2.x)+(vec2.y*vec2.y));
      this.x = coeff * vec2.x;
      this.y = coeff * vec2.y;
      return this;
  };


  Victor.prototype.horizontalAngle = function () {
    return Math.atan2(this.y, this.x);
  };

  Victor.prototype.horizontalAngleDeg = function () {
    return radian2degrees(this.horizontalAngle());
  };

  Victor.prototype.verticalAngle = function () {
    return Math.atan2(this.x, this.y);
  };

  Victor.prototype.verticalAngleDeg = function () {
    return radian2degrees(this.verticalAngle());
  };

  Victor.prototype.angle = Victor.prototype.horizontalAngle;
  Victor.prototype.angleDeg = Victor.prototype.horizontalAngleDeg;
  Victor.prototype.direction = Victor.prototype.horizontalAngle;

  Victor.prototype.rotate = function (angle) {
    var nx = (this.x * Math.cos(angle)) - (this.y * Math.sin(angle));
    var ny = (this.x * Math.sin(angle)) + (this.y * Math.cos(angle));

    this.x = nx;
    this.y = ny;

    return this;
  };

  Victor.prototype.rotateDeg = function (angle) {
    angle = degrees2radian(angle);
    return this.rotate(angle);
  };

  Victor.prototype.rotateTo = function(rotation) {
    return this.rotate(rotation-this.angle());
  };

  Victor.prototype.rotateToDeg = function(rotation) {
    rotation = degrees2radian(rotation);
    return this.rotateTo(rotation);
  };

  Victor.prototype.rotateBy = function (rotation) {
    var angle = this.angle() + rotation;

    return this.rotate(angle);
  };

  Victor.prototype.rotateByDeg = function (rotation) {
    rotation = degrees2radian(rotation);
    return this.rotateBy(rotation);
  };

  /**
   * Calculates the distance of the X axis between this vector and another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.distanceX(vec2);
   *     // => -100
   *
   * @param {Victor} vector The second vector
   * @return {Number} Distance
   * @api public
   */
  Victor.prototype.distanceX = function (vec) {
    return this.x - vec.x;
  };

  /**
   * Same as `distanceX()` but always returns an absolute number
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.absDistanceX(vec2);
   *     // => 100
   *
   * @param {Victor} vector The second vector
   * @return {Number} Absolute distance
   * @api public
   */
  Victor.prototype.absDistanceX = function (vec) {
    return Math.abs(this.distanceX(vec));
  };

  /**
   * Calculates the distance of the Y axis between this vector and another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.distanceY(vec2);
   *     // => -10
   *
   * @param {Victor} vector The second vector
   * @return {Number} Distance
   * @api public
   */
  Victor.prototype.distanceY = function (vec) {
    return this.y - vec.y;
  };

  /**
   * Same as `distanceY()` but always returns an absolute number
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.distanceY(vec2);
   *     // => 10
   *
   * @param {Victor} vector The second vector
   * @return {Number} Absolute distance
   * @api public
   */
  Victor.prototype.absDistanceY = function (vec) {
    return Math.abs(this.distanceY(vec));
  };

  /**
   * Calculates the euclidean distance between this vector and another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.distance(vec2);
   *     // => 100.4987562112089
   *
   * @param {Victor} vector The second vector
   * @return {Number} Distance
   * @api public
   */
  Victor.prototype.distance = function (vec) {
    return Math.sqrt(this.distanceSq(vec));
  };

  /**
   * Calculates the squared euclidean distance between this vector and another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.distanceSq(vec2);
   *     // => 10100
   *
   * @param {Victor} vector The second vector
   * @return {Number} Distance
   * @api public
   */
  Victor.prototype.distanceSq = function (vec) {
    var dx = this.distanceX(vec),
      dy = this.distanceY(vec);

    return dx * dx + dy * dy;
  };

  /**
   * Calculates the length or magnitude of the vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.length();
   *     // => 111.80339887498948
   *
   * @return {Number} Length / Magnitude
   * @api public
   */
  Victor.prototype.length = function () {
    return Math.sqrt(this.lengthSq());
  };

  /**
   * Squared length / magnitude
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.lengthSq();
   *     // => 12500
   *
   * @return {Number} Length / Magnitude
   * @api public
   */
  Victor.prototype.lengthSq = function () {
    return this.x * this.x + this.y * this.y;
  };

  Victor.prototype.magnitude = Victor.prototype.length;

  /**
   * Returns a true if vector is (0, 0)
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     vec.zero();
   *
   *     // => true
   *
   * @return {Boolean}
   * @api public
   */
  Victor.prototype.isZero = function() {
    return this.x === 0 && this.y === 0;
  };

  /**
   * Returns a true if this vector is the same as another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(100, 50);
   *     vec1.isEqualTo(vec2);
   *
   *     // => true
   *
   * @return {Boolean}
   * @api public
   */
  Victor.prototype.isEqualTo = function(vec2) {
    return this.x === vec2.x && this.y === vec2.y;
  };

  /**
   * # Utility Methods
   */

  /**
   * Returns an string representation of the vector
   *
   * ### Examples:
   *     var vec = new Victor(10, 20);
   *
   *     vec.toString();
   *     // => x:10, y:20
   *
   * @return {String}
   * @api public
   */
  Victor.prototype.toString = function () {
    return 'x:' + this.x + ', y:' + this.y;
  };

  /**
   * Returns an array representation of the vector
   *
   * ### Examples:
   *     var vec = new Victor(10, 20);
   *
   *     vec.toArray();
   *     // => [10, 20]
   *
   * @return {Array}
   * @api public
   */
  Victor.prototype.toArray = function () {
    return [ this.x, this.y ];
  };

  /**
   * Returns an object representation of the vector
   *
   * ### Examples:
   *     var vec = new Victor(10, 20);
   *
   *     vec.toObject();
   *     // => { x: 10, y: 20 }
   *
   * @return {Object}
   * @api public
   */
  Victor.prototype.toObject = function () {
    return { x: this.x, y: this.y };
  };


  var degrees = 180 / Math.PI;

  function random (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function radian2degrees (rad) {
    return rad * degrees;
  }

  function degrees2radian (deg) {
    return deg / degrees;
  }


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

  module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
    return _c('div', {
      staticClass: "dragable",
      style: (_vm.boxStyle),
      on: {
        "mousedown": _vm.handleDown,
        "mouseup": function($event) {
          $event.stopPropagation();
          _vm.handleUp($event)
        }
      }
    }, [_vm._t("default"), _vm._v(" "), _c('div', {
      staticClass: "rotate",
      on: {
        "mousedown": function($event) {
          $event.stopPropagation();
          _vm.rotateStart($event)
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "scale",
      on: {
        "mousedown": function($event) {
          $event.stopPropagation();
          _vm.resizeStart($event)
        }
      }
    })], 2)
  },staticRenderFns: []}
  module.exports.render._withStripped = true
  if (false) {
    module.hot.accept()
    if (module.hot.data) {
       require("vue-hot-reload-api").rerender("data-v-66bb76c8", module.exports)
    }
  }

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-drag-resize-rotate-updater.js.map