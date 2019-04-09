(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("core/eventifier"), require("css!lib/flatpickr/flatpickr.css"), require("handlebars"), require("i18n"), require("jquery"), require("lib/flatpickr/flatpickr"), require("lib/flatpickr/l10n/index"), require("lodash"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["core/eventifier", "css!lib/flatpickr/flatpickr.css", "handlebars", "i18n", "jquery", "lib/flatpickr/flatpickr", "lib/flatpickr/l10n/index", "lodash", "moment"], factory);
	else if(typeof exports === 'object')
		exports["datetime/picker"] = factory(require("core/eventifier"), require("css!lib/flatpickr/flatpickr.css"), require("handlebars"), require("i18n"), require("jquery"), require("lib/flatpickr/flatpickr"), require("lib/flatpickr/l10n/index"), require("lodash"), require("moment"));
	else
		root["datetime/picker"] = factory(root["core/eventifier"], root["css!lib/flatpickr/flatpickr.css"], root["handlebars"], root["i18n"], root["jquery"], root["lib/flatpickr/flatpickr"], root["lib/flatpickr/l10n/index"], root["lodash"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_core_eventifier__, __WEBPACK_EXTERNAL_MODULE_css_lib_flatpickr_flatpickr_css__, __WEBPACK_EXTERNAL_MODULE_handlebars__, __WEBPACK_EXTERNAL_MODULE_i18n__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_lib_flatpickr_flatpickr__, __WEBPACK_EXTERNAL_MODULE_lib_flatpickr_l10n_index__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_moment__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/datetime/picker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/datetime/css/picker.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/datetime/css/picker.css ***!
  \***************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".datetime-picker.control-buttons{position:static;display:flex;flex-flow:row nowrap;align-items:stretch}.datetime-picker.control-buttons>input{flex:1 0 auto;border-top-right-radius:0;border-bottom-right-radius:0;border-right-width:0}.datetime-picker.control-buttons>button{flex:0 0 30px;background:#e1e2e3;border:1px solid #ddd;border-radius:2px;-webkit-border-radius:2px;border-radius:0;cursor:pointer;text-align:center;padding:4px 5px;display:block;height:inherit}.datetime-picker.control-buttons>button :last-of-type{margin-left:-1px;border-top-right-radius:2px;border-bottom-right-radius:2px}.datetime-picker.control-buttons>button :hover,.datetime-picker.control-buttons>button :focus{background:#e7e8e9;z-index:100}.datetime-picker.control-buttons>button :focus{border:1px solid #0e5d91;outline:none}.datetime-picker.control-buttons>button span{color:#222;text-shadow:none;padding:0}.datetime-picker .flatpickr-calendar .numInput{min-width:inherit;max-width:inherit;width:inherit}.datetime-picker .flatpickr-calendar .numInputWrapper{height:37px}.datetime-picker .flatpickr-calendar .flatpickr-month{height:37px}.datetime-picker .flatpickr-calendar .flatpickr-month .flatpickr-current-month{padding:0;height:37px;line-height:37px}.datetime-picker .flatpickr-calendar .flatpickr-month .flatpickr-current-month .cur-month{margin:0 .5ch}.datetime-picker .flatpickr-calendar .flatpickr-month .flatpickr-current-month .cur-month :hover{background:inherit}.datetime-picker .flatpickr-calendar .flatpickr-month .flatpickr-current-month .cur-year{height:37px}.datetime-picker .flatpickr-calendar .flatpickr-months .flatpickr-next-month :hover svg,.datetime-picker .flatpickr-calendar .flatpickr-months .flatpickr-prev-month :hover svg{fill:#0e5d91}.datetime-picker .flatpickr-calendar .flatpickr-day.inRange,.datetime-picker .flatpickr-calendar .flatpickr-day.prevMonthDay.inRange,.datetime-picker .flatpickr-calendar .flatpickr-day.nextMonthDay.inRange,.datetime-picker .flatpickr-calendar .flatpickr-day.today.inRange,.datetime-picker .flatpickr-calendar .flatpickr-day.prevMonthDay.today.inRange,.datetime-picker .flatpickr-calendar .flatpickr-day.nextMonthDay.today.inRange,.datetime-picker .flatpickr-calendar .flatpickr-day :hover,.datetime-picker .flatpickr-calendar .flatpickr-day.prevMonthDay :hover,.datetime-picker .flatpickr-calendar .flatpickr-day.nextMonthDay :hover,.datetime-picker .flatpickr-calendar .flatpickr-day :focus,.datetime-picker .flatpickr-calendar .flatpickr-day.prevMonthDay :focus,.datetime-picker .flatpickr-calendar .flatpickr-day.nextMonthDay :focus{background:#e7e8e9;border-color:#e7e8e9}.datetime-picker .flatpickr-calendar .flatpickr-day.today{border-color:#0e5d91;color:#222}.datetime-picker .flatpickr-calendar .flatpickr-day.today :hover,.datetime-picker .flatpickr-calendar .flatpickr-day.today :focus{background:#e7e8e9;border-color:#0e5d91;color:#222}.datetime-picker .flatpickr-calendar .flatpickr-day.selected,.datetime-picker .flatpickr-calendar .flatpickr-day.startRange,.datetime-picker .flatpickr-calendar .flatpickr-day.endRange,.datetime-picker .flatpickr-calendar .flatpickr-day.selected.inRange,.datetime-picker .flatpickr-calendar .flatpickr-day.startRange.inRange,.datetime-picker .flatpickr-calendar .flatpickr-day.endRange.inRange,.datetime-picker .flatpickr-calendar .flatpickr-day.selected :focus,.datetime-picker .flatpickr-calendar .flatpickr-day.startRange :focus,.datetime-picker .flatpickr-calendar .flatpickr-day.endRange :focus,.datetime-picker .flatpickr-calendar .flatpickr-day.selected :hover,.datetime-picker .flatpickr-calendar .flatpickr-day.startRange :hover,.datetime-picker .flatpickr-calendar .flatpickr-day.endRange :hover,.datetime-picker .flatpickr-calendar .flatpickr-day.selected.prevMonthDay,.datetime-picker .flatpickr-calendar .flatpickr-day.startRange.prevMonthDay,.datetime-picker .flatpickr-calendar .flatpickr-day.endRange.prevMonthDay,.datetime-picker .flatpickr-calendar .flatpickr-day.selected.nextMonthDay,.datetime-picker .flatpickr-calendar .flatpickr-day.startRange.nextMonthDay,.datetime-picker .flatpickr-calendar .flatpickr-day.endRange.nextMonthDay{background:#3e7da7;border-color:#3e7da7;color:#fff}.datetime-picker .flatpickr-calendar .flatpickr-day.selected.startRange,.datetime-picker .flatpickr-calendar .flatpickr-day.startRange.startRange,.datetime-picker .flatpickr-calendar .flatpickr-day.endRange.startRange{background:#3e7da7}.datetime-picker .flatpickr-calendar .flatpickr-day.selected.endRange,.datetime-picker .flatpickr-calendar .flatpickr-day.startRange.endRange,.datetime-picker .flatpickr-calendar .flatpickr-day.endRange.endRange{background:#3e7da7}.datetime-picker .flatpickr-calendar .flatpickr-day.selected.startRange+.endRange :not(:nth-child(7n+1)),.datetime-picker .flatpickr-calendar .flatpickr-day.startRange.startRange+.endRange :not(:nth-child(7n+1)),.datetime-picker .flatpickr-calendar .flatpickr-day.endRange.startRange+.endRange :not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #3e7da7;box-shadow:-10px 0 0 #3e7da7}.datetime-picker .flatpickr-calendar .flatpickr-day.selected.startRange.endRange,.datetime-picker .flatpickr-calendar .flatpickr-day.startRange.startRange.endRange,.datetime-picker .flatpickr-calendar .flatpickr-day.endRange.startRange.endRange{border-radius:50px}.datetime-picker .flatpickr-calendar .flatpickr-day.disabled,.datetime-picker .flatpickr-calendar .flatpickr-day.disabled :hover,.datetime-picker .flatpickr-calendar .flatpickr-day.prevMonthDay,.datetime-picker .flatpickr-calendar .flatpickr-day.nextMonthDay,.datetime-picker .flatpickr-calendar .flatpickr-day.notAllowed,.datetime-picker .flatpickr-calendar .flatpickr-day.notAllowed.prevMonthDay,.datetime-picker .flatpickr-calendar .flatpickr-day.notAllowed.nextMonthDay{background:transparent;border-color:transparent;cursor:default}.datetime-picker .flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{height:38px}.datetime-picker .flatpickr-calendar .flatpickr-time{line-height:37px;height:37px}.datetime-picker .flatpickr-calendar .flatpickr-time .numInput{width:100%;line-height:37px;height:37px}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_eventifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/eventifier */ "core/eventifier");
/* harmony import */ var core_eventifier__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_eventifier__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ui_component_tpl_component_tpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/component/tpl/component.tpl */ "./src/component/tpl/component.tpl");
/* harmony import */ var ui_component_tpl_component_tpl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ui_component_tpl_component_tpl__WEBPACK_IMPORTED_MODULE_3__);
/**
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; under version 2
 * of the License (non-upgradable).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * Copyright (c) 2015 (original work) Open Assessment Technologies SA ;
 */
/**
 * @author Jean-Sébastien Conan <jean-sebastien.conan@vesperiagroup.com>
 */





    'use strict';

    var _slice = [].slice;

    /**
     * Handles the resize of the component regarding the config set
     */
    function delegatedResize() {
        var width = this.config.width;
        var height = this.config.height;
        var $container = this.getContainer();
        var $element = this.getElement();

        if ($container) {
            if ('auto' === width) {
                width = $container.width();
            }
            if ('auto' === height) {
                height = $container.height();
            }
        }

        if ($element) {
            if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isNumber(width)) {
                $element.css({ width: width + 'px' });
            }
            if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isNumber(height)) {
                $element.css({ height: height + 'px' });
            }
        }

        this._width = width;
        this._height = height;
    }

    /**
     * Builds a component from a base skeleton
     * @param {Object} [specs] - Some extra methods to assign to the component instance
     * @param {Object} [defaults] - Some default config entries
     * @returns {component}
     */
    function component(specs, defaults) {

        // the template is a private property
        var componentTpl = ui_component_tpl_component_tpl__WEBPACK_IMPORTED_MODULE_3___default.a;

        //contains the states of the components
        var componentState = {};

        //where the component is added
        var $container;

        // base skeleton
        /**
         * @typedef {Object} Component
         */
        var componentApi = {
            /**
             * Initializes the component
             * @param {Object} config
             * @param {jQuery|HTMLElement|String} [config.renderTo] - An optional container in which renders the component
             * @param {Boolean} [config.replace] - When the component is appended to its container, clears the place before
             * @param {Number|String} [config.width] - The width in pixels, or 'auto' to use the container's width
             * @param {Number|String} [config.height] - The height in pixels, or 'auto' to use the container's height
             * @returns {component}
             * @fires component#init
             */
            init : function init(config) {
                this.config = lodash__WEBPACK_IMPORTED_MODULE_1___default()(config || {})
                    .omit(function(value){
                        return value === null || typeof value === 'undefined';
                    })
                    .defaults(defaults || {})
                    .value();

                componentState = {};

                /**
                 * Executes extra init tasks
                 * @event component#init
                 */
                this.trigger('init');

                if (this.config.renderTo) {
                    $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.config.renderTo);
                    this.render();
                }

                return this;
            },

            /**
             * Uninstalls the component
             * @returns {component}
             * @fires component#destroy
             */
            destroy : function destroy() {
                /**
                 * Executes extra destroy tasks
                 * @event component#destroy
                 */
                this.trigger('destroy');

                if (this.$component) {
                    this.$component.remove();
                }

                this.$component = null;
                componentState = {};

                return this;
            },

            /**
             * Renders the component
             * @param {jQuery|HTMLElement|String} [container] - where the component is rendered
             * @returns {component}
             * @fires component#render
             */
            render : function render(container) {
                if(container){
                    $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(container);
                }
                this.$component = jquery__WEBPACK_IMPORTED_MODULE_0___default()(componentTpl(this.config));

                if ($container) {
                    if (this.config.replace) {
                        $container.empty();
                    }
                    $container.append(this.$component);
                }

                this.setState('rendered', true);

                delegatedResize.call(this);

                /**
                 * Executes extra render tasks
                 * @event component#render
                 * @param {jQuery} $component
                 */
                this.trigger('render', this.$component);

                return this;
            },

            /**
             * Sets the component's size
             * @param {Number|String} width - The width in pixels, or 'auto' to use the container's width
             * @param {Number|String} height - The height in pixels, or 'auto' to use the container's height
             * @returns {component}
             * @fires component#setsize
             */
            setSize: function setSize(width, height) {
                this.config.width = width;
                this.config.height = height;

                if (this.is('rendered')) {
                    delegatedResize.call(this);
                }

                /**
                 * Executes extra resize tasks
                 * @event component#setsize
                 * @param {Number|String} width
                 * @param {Number|String} height
                 */
                this.trigger('setsize', width, height);

                return this;
            },

            /**
             * Get the component's size
             * @returns {Object}
             * @fires component#setsize
             */
            getSize: function getSize() {
                if (this.is('rendered')) {
                    return {
                        width: this._width || 0,
                        height: this._height || 0
                    };
                }
            },

            /**
             * Get the component rendered size
             * @param {Boolean} includeMargin - include the margins in the returned size
             * @returns {{width: number, height: number}}
             */
            getOuterSize: function getOuterSize(includeMargin) {
                var $component;
                if (this.is('rendered')) {
                    $component = this.getElement();
                    includeMargin = includeMargin || false;

                    return {
                        width: Math.round($component.outerWidth(includeMargin)),
                        height: Math.round($component.outerHeight(includeMargin))
                    };
                }
            },


            /**
             * Shows the component
             * @returns {component}
             * @fires component#show
             */
            show : function show() {
                /**
                 * Executes extra tasks on show
                 * @event component#show
                 * @param {component} component
                 */
                this.trigger('show', this);

                return this.setState('hidden', false);
            },

            /**
             * Hides the component
             * @returns {component}
             * @fires component#hide
             */
            hide : function hide() {
                /**
                 * Executes extra tasks on hide
                 * @event component#hide
                 * @param {component} component
                 */
                this.trigger('hide', this);

                return this.setState('hidden', true);
            },

            /**
             * Enables the component
             * @returns {component}
             * @fires component#enable
             */
            enable : function enable() {
                /**
                 * Executes extra tasks on enable
                 * @event component#enable
                 * @param {component} component
                 */
                this.trigger('enable', this);

                return this.setState('disabled', false);
            },

            /**
             * Disables the component
             * @returns {component}
             * @fires component#disable
             */
            disable : function disable() {
                /**
                 * Executes extra tasks on disable
                 * @event component#disable
                 * @param {component} component
                 */
                this.trigger('disable', this);

                return this.setState('disabled', true);
            },

            /**
             * Checks if the component has a particular state
             * @param {String} state
             * @returns {Boolean}
             */
            is : function is(state) {
                return !!componentState[state];
            },

            /**
             * Sets the component to a particular state
             * @param {String} state
             * @param {Boolean} flag
             * @returns {component}
             * @fires component#state
             */
            setState : function setState(state, flag) {
                flag = !!flag;
                componentState[state] = flag;

                if (this.$component) {
                    this.$component.toggleClass(state, flag);
                }

                /**
                 * Executes extra tasks on state change
                 * @event component#state
                 * @param {String} state
                 * @param {Boolean} flag
                 * @param {component} component
                 */
                this.trigger('state', state, flag, this);

                return this;
            },

            /**
             * Gets the underlying DOM element
             * @returns {jQuery}
             */
            getContainer : function getContainer() {
                return $container;
            },


            /**
             * Gets the underlying DOM element
             * @returns {jQuery}
             */
            getElement : function getElement() {
                return this.$component;
            },

            /**
             * Gets the template used to render this component
             * @returns {Function}
             */
            getTemplate : function getTemplate() {
                return componentTpl;
            },

            /**
             * Sets the template used to render this component
             * @param {Function} template
             * @returns {componentApi}
             * @fires component#template
             */
            setTemplate : function setTemplate(template) {
                var tpl = template || ui_component_tpl_component_tpl__WEBPACK_IMPORTED_MODULE_3___default.a;
                componentTpl = tpl;

                // ensure the template is defined as a function
                if (!lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isFunction(componentTpl)) {
                    componentTpl = function() {
                        return tpl;
                    };
                }

                /**
                 * Executes extra tasks on template change
                 * @event component#template
                 * @param {function} componentTpl
                 */
                this.trigger('template', componentTpl);

                return this;
            },

            /**
             * Get the component's configuration
             */
            getConfig : function getConfig(){
                return this.config || defaults || {};
            }
        };

        // let's extend the instance with extra methods
        if (specs) {
            lodash__WEBPACK_IMPORTED_MODULE_1___default()(specs).functions().forEach(function(method){
                componentApi[method] = function delegate(){
                    return specs[method].apply(componentApi, _slice.call(arguments));
                };
            });
        }

        return core_eventifier__WEBPACK_IMPORTED_MODULE_2___default()(componentApi);
    }

    /* harmony default export */ __webpack_exports__["default"] = (component);


/***/ }),

/***/ "./src/component/tpl/component.tpl":
/*!*****************************************!*\
  !*** ./src/component/tpl/component.tpl ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ "handlebars");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"component\"></div>";
  });

/***/ }),

/***/ "./src/datetime/css/picker.css":
/*!*************************************!*\
  !*** ./src/datetime/css/picker.css ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./picker.css */ "./node_modules/css-loader/dist/cjs.js!./src/datetime/css/picker.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/datetime/picker.js":
/*!********************************!*\
  !*** ./src/datetime/picker.js ***!
  \********************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dateTimePickerFactory; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18n */ "i18n");
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/component */ "./src/component.js");
/* harmony import */ var lib_flatpickr_flatpickr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/flatpickr/flatpickr */ "lib/flatpickr/flatpickr");
/* harmony import */ var lib_flatpickr_flatpickr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lib_flatpickr_flatpickr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lib_flatpickr_l10n_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/flatpickr/l10n/index */ "lib/flatpickr/l10n/index");
/* harmony import */ var lib_flatpickr_l10n_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lib_flatpickr_l10n_index__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ui_datetime_tpl_picker_tpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui/datetime/tpl/picker.tpl */ "./src/datetime/tpl/picker.tpl");
/* harmony import */ var ui_datetime_tpl_picker_tpl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ui_datetime_tpl_picker_tpl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ui_datetime_css_picker_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ui/datetime/css/picker.css */ "./src/datetime/css/picker.css");
/* harmony import */ var ui_datetime_css_picker_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ui_datetime_css_picker_css__WEBPACK_IMPORTED_MODULE_7__);
/**
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; under version 2
 * of the License (non-upgradable).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * Copyright (c) 2019 (original work) Open Assessment Technologies SA
 *
 */

/**
 * Date/Time picker component.
 * It supports different setups : date-range, datetime-range, date, time and datetime
 * It supports localized format.
 * It supports either hooking a field, replacing it and adding controls.
 *
 * It wraps the library Flatpickr  (https://flatpickr.js.org)
 *
 * @example
 *      dateTimePicker(container, {
 *          setup : 'date',
 *          format : 'YYYY-MM-DD',
 *          controlButtons : true
 *      })
 *      .on('change', function(value){
 *         if (value === '1983-04-03'){
 *              //...
 *         }
 *      });
 *
 * @author Bertrand Chevrier <bertrand@taotesting.com>
 */








__webpack_require__(/*! css!lib/flatpickr/flatpickr.css */ "css!lib/flatpickr/flatpickr.css");


    'use strict';

    /**
     * The supported formats
     */
    var formats = {
        date : {
            default : 'YYYY-MM-DD',
            localized : 'L'
        },
        time : {
            default :  'HH:mm',
            localized : 'LT'
        },
        datetime : {
            default : 'YYYY-MM-DD HH:mm',
            localized : 'L LT'
        }
    };

    /**
     * Possible setups for the picker
     */
    var setups = {
        'date-range' : {
            mode : 'range',
            label : i18n__WEBPACK_IMPORTED_MODULE_1___default()('date range'),
            format : formats.date
        },
        'datetime-range' : {
            mode : 'range',
            label : i18n__WEBPACK_IMPORTED_MODULE_1___default()('date time range'),
            enableTime : true,
            format : formats.datetime
        },
        date : {
            mode : 'single',
            format : formats.date
        },
        time : {
            mode : 'single',
            enableTime : true,
            label : i18n__WEBPACK_IMPORTED_MODULE_1___default()('time'),
            noCalendar : true,
            format : formats.time
        },
        datetime : {
            mode : 'single',
            enableTime : true,
            label : i18n__WEBPACK_IMPORTED_MODULE_1___default()('date time'),
            format : formats.datetime
        }
    };

    /**
     * List of supported constraints
     */
    var supportedConstraints = ['minDate', 'maxDate', 'enable', 'disable'];

    /**
     * The default configuration
     * @see dateTimePickerFactory
     */
    var defaultConfig = {
        setup : 'date',
        controlButtons : false,
        locale : false,
        useLocalizedFormat : false,
        constraints : {}
    };

    /**
     * Get the long date/time format from the localized format (LT to 'DD/MM/YYYY HH:mm')
     * @param {String} locale - 2 digits locale code (en, fr, de, etc.)
     * @param {String} localizedFormat - see moment's localized format (L, LT, LLLL, ...)
     * @returns {String} the long date/time format
     */
    var getLongLocalizedFormat = function getLongLocalizedFormat(locale, localizedFormat) {
        if (/[LT]+/.test(localizedFormat) && locale) {
            return localizedFormat.split(' ').map( function(format){
                return moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date())
                    .locale(locale)
                    .localeData()
                    .longDateFormat(format);
            }).join(' ');
        }
        return false;
    };

    /**
     * Does the given date/time format uses the am/pm pattern ?
     * @param {String} format - moment format
     * @returns {Boolean} true if the contains am/pm
     */
    var isFormatAmPm = function isFormatAmPm(format) {
        return format && /a$/i.test(format);
    };

    /**
     * Does the given date/time format contains seconds ?
     * @param {String} format - moment format
     * @returns {Boolean} true if the format contains seconds
     */
    var isFormatInSeconds = function isFormatInSeconds(format) {
        return format && /(:ss)+/i.test(format);
    };

    /**
     * The component factory
     *
     * @param {HTMLElement|jQuery} container - where to append the component
     * @param {Object} [config]
     * @param {String} [config.setup = date] - the picker setup in date-range, datetime-range, date, time and datetime
     * @param {String} [config.locale] - the picker local
     * @param {String} [config.useLocalzedFormat = false] - does the locale is used to define the format
     * @param {String} [config.format] - define your own date/time format for the instance
     * @param {Boolean} [config.controlButtons = false] - does the field have controls to trigger opening and reset
     * @param {Object} [config.constraints] - date time selection constraints
     * @param {Object} [config.constraints] - date time selection constraints
     * @param {Array<String|Date>} [config.constraints.disable] - list of dates to disable
     * @param {Array<String|Date>} [config.constraints.enable] - list of dates to enable (if some are disabled)
     * @param {String|Date} [config.constraints.minDate] - minimum date to start picking from
     * @param {String|Date} [config.constraints.maxDate] - maximum date to start picking from
     *
     * @param {HTMLInputElement} [config.replaceField] - an input field to replace. The field attr are taken instead of config.field
     * @param {Object} [config.field] - the input field configuration
     * @param {String} [config.field.name] - the input field name
     * @param {String} [config.field.id] - the input field id
     * @param {String} [config.field.placeholder] - the input field placeholder
     * @param {String} [config.field.pattern] - the input field pattern mask
     * @param {String} [config.field.value] - the input field value
     * @param {String} [config.field.label] - label the field for a11y
     *
     * @returns {dateTimePickerComponent} the component instance
     */
    function dateTimePickerFactory(container, options) {
        var format = '';

        /**
         * @typedef {Object} dateTimePicker
         */
        var dateTimePicker = Object(ui_component__WEBPACK_IMPORTED_MODULE_3__["default"])({

            /**
             * Get the current value
             * @returns {String} the field value, null if none
             */
            getValue : function getValue() {
                if (this.is('rendered')) {
                    return this.controls.input.value;
                }
                return null;
            },

            /**
             * Set the current value
             * @param {String} value - the new value matching the format
             */
            setValue : function setValue(value) {
                if (this.is('ready')) {
                    this.controls.input.value = value;
                    this.picker.setDate(value,  true);
                }
                return null;
            },

            /**
             * Get the date/time format description, ie. 'YYYY-MM-DD'
             * @returns {String} the format
             */
            getFormat : function getFormat() {
                return format;
            },

            /**
             * Open the picker
             * @returns {dateTimePicker} chains
             * @fires dateTimePicker#open
             */
            open : function open() {
                if (this.is('ready')) {
                    this.picker.open();
                }
                return this;
            },

            /**
             * Close the picker
             * @returns {dateTimePicker} chains
             * @fires dateTimePicker#close
             */
            close : function close() {
                if (this.is('ready')) {
                    this.picker.close();
                }
                return this;
            },

            /**
             * Clear the field content and close the picker
             * @returns {dateTimePicker} chains
             * @fires dateTimePicker#close
             * @fires dateTimePicker#clear
             */
            clear : function clear() {
                if (this.is('ready')) {
                    this.picker.close();
                    this.picker.clear();

                    /**
                      * The picker get cleared
                      * @event dateTimePicker#clear
                      */
                    this.trigger('clear');
                }
                return this;
            },

            /**
             * Clear the field content and close the picker
             * @returns {dateTimePicker} chains
             * @fires dateTimePicker#open
             * @fires dateTimePicker#close
             */
            toggle : function toogle() {
                if (this.is('ready')) {
                    this.picker.toggle();
                }
                return this;
            },

            /**
             * Update constraints on a running instance
             * @param {String} constraint - the constraint name in minDate, maxDate, enable, disable
             * @param {*} vlaue - the constraint value to update
             * @returns {dateTimePicker} chains
             * @fires dateTimePicker#open
             * @fires dateTimePicker#close
             */
            updateConstraints : function updateConstraints(constraint, value){
                if (this.is('ready')) {
                    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.contains(supportedConstraints, constraint)) {
                        this.picker.set(constraint, value);
                    }
                }
                return this;
            }

        }, defaultConfig);

        dateTimePicker
            .setTemplate(ui_datetime_tpl_picker_tpl__WEBPACK_IMPORTED_MODULE_6___default.a)
            .on('init', function(){
                var self = this;

                var locale;
                var setup = setups[this.config.setup] || setups.datetime;

                //map the locale from the options to the picker locale
                if (this.config.locale && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(lib_flatpickr_l10n_index__WEBPACK_IMPORTED_MODULE_5___default.a.default[this.config.locale])) {
                    locale = this.config.locale;
                }

                //date/time format
                if (locale && this.config.useLocalizedFormat) {

                    //get the format from the locale
                    format = getLongLocalizedFormat(locale, setup.format.localized);

                } else {

                    //get the format from the config
                    format = this.config.format || setup.format.default;
                }

                //input field configuration
                this.config.field = this.config.field || {};

                // replace a field by the date picker input field
                //TODO consider replacing data-attr and classes
                if (this.config.replaceField && this.config.replaceField instanceof HTMLInputElement) {
                    this.config.field.id          = this.config.replaceField.id;
                    this.config.field.name        = this.config.replaceField.name;
                    this.config.field.placeholder = this.config.replaceField.placeholder;
                    this.config.field.value       = this.config.replaceField.value;
                    this.config.field.pattern     = this.config.replaceField.pattern;

                    this.config.replaceField.parentNode.removeChild(this.config.replaceField);
                }

                if (!this.config.field.placeholder && format && setup.mode === 'single') {
                    this.config.field.placeholder = format.toLowerCase();
                }
                if (!this.config.field.label) {
                    this.config.field.label = setup.label;
                }

                /**
                 * Build the configuration of the picker
                 * @see https://flatpickr.js.org/options/
                 */
                this.pickerConfig = {
                    mode :          setup.mode,
                    enableTime :    !!setup.enableTime,
                    noCalendar :    !!setup.noCalendar,
                    time_24hr :     !isFormatAmPm(format),
                    enableSeconds : setup.enableTime && isFormatInSeconds(format),
                    allowInput :    true,
                    clickOpens :    !this.config.controlButtons,
                    disableMobile : true,

                    /**
                     * How flatpickr will format the given date
                     * @param {Date} date
                     * @returns {String} the formatted date
                     */
                    formatDate : function formatDate(date) {
                        return moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format(format);
                    },

                    /**
                     * How flatpickr parse the given input
                     * @param {String} dateString
                     * @returns {Date}
                     */
                    parseDate : function parseDate(dateString) {
                        return moment__WEBPACK_IMPORTED_MODULE_2___default()(dateString, format).toDate();
                    },

                    /**
                     * When the picker is opened
                     * @fires dateTimePicker#open
                     */
                    onOpen : function onOpen(){

                        /**
                         * The picker get opened
                         * @event dateTimePicker#open
                         */
                        self.trigger('open');
                    },

                    /**
                     * When the picker is opened
                     * @fires dateTimePicker#close
                     */
                    onClose : function onClose(){

                        /**
                         * The picker get closed
                         * @event dateTimePicker#close
                         */
                        self.trigger('close');
                    },

                    /**
                     * Hook flatpickr error handler
                     * @param {Error} err - the thrown error
                     */
                    errorHandler : function errorHandler(err){
                        if(err instanceof Error){
                            //if an invalid date is provided
                            //add a visual feedback indicating why the field get emptied
                            if(/^Invalid date/.test(err.message)){
                                self.controls.input.classList.add('error');
                                lodash__WEBPACK_IMPORTED_MODULE_0___default.a.delay(function(){
                                    self.controls.input.classList.remove('error');
                                }, 1000);
                            } else {

                                /**
                                 * Unexpected error
                                 * @event dateTimePicker#error
                                 * @param {Error} err
                                 */
                                self.trigger('error', err);
                            }
                        }
                    }
                };
                //locale should be defined only if set...
                if(locale){
                    this.pickerConfig.locale = locale;
                }

                lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(this.config.constraints, function(value, constraint){
                    if(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.contains(supportedConstraints, constraint) && value){
                        self.pickerConfig[constraint] = value;
                    }
                });


                //render into the container
                if(container){
                    setTimeout(function(){
                        self.render(container);
                    }, 0);
                }
            })
            .on('render', function(){
                var self    = this;

                var element = this.getElement()[0];

                this.controls = {
                    input : element.querySelector('input'),
                };

                //always scope the picker to the component container
                //in order to scope and style each instance
                this.pickerConfig.appendTo = element;

                //behavior of the right buttons if configured
                if(this.config.controlButtons){

                    this.controls.toggleButton = element.querySelector('.picker-toggle'),
                    this.controls.clearButton  = element.querySelector('.picker-clear'),

                    this.controls.toggleButton.addEventListener('click', function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        self.toggle();
                    });

                    this.controls.clearButton.addEventListener('click', function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        self.clear();
                    });
                }

                this.controls.input.addEventListener('change', function(){

                    /**
                      * A value get changed
                      * @event dateTimePicker#change
                      * @param {String} value - the date/time value
                      */
                    self.trigger('change', self.getValue());
                });


                //instantiate the picker
                lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defer(function(){
                    self.picker = lib_flatpickr_flatpickr__WEBPACK_IMPORTED_MODULE_4___default()(self.controls.input, self.pickerConfig);

                    self.enable()
                        .setState('ready', true)
                        .trigger('ready');
                });
            })
            .on('enable', function(){
                if(this.controls){
                    this.controls.input.disabled = false;
                    if(this.config.controlButtons){
                        this.controls.toggleButton.disabled = false;
                        this.controls.clearButton.disabled  = false;
                    }
                }
            })
            .on('disable', function(){
                if(this.controls){
                    this.controls.input.disabled = true;
                    if(this.config.controlButtons){
                        this.controls.toggleButton.disabled = true;
                        this.controls.clearButton.disabled  = true;
                    }
                }
            });

        //defered init to catch the event
        setTimeout(function(){
            dateTimePicker.init(options);
        }, 0);

        return dateTimePicker;
    };



/***/ }),

/***/ "./src/datetime/tpl/picker.tpl":
/*!*************************************!*\
  !*** ./src/datetime/tpl/picker.tpl ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ "handlebars");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "control-buttons";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "pattern=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.pattern)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n    <button type=\"button\" disabled class=\"picker-toggle\" title=\""
    + escapeExpression((helper = helpers.__ || (depth0 && depth0.__),options={hash:{},data:data},helper ? helper.call(depth0, "Toggle the date time picker", options) : helperMissing.call(depth0, "__", "Toggle the date time picker", options)))
    + "\" aria-label=\""
    + escapeExpression((helper = helpers.__ || (depth0 && depth0.__),options={hash:{},data:data},helper ? helper.call(depth0, "Toggle the date time picker", options) : helperMissing.call(depth0, "__", "Toggle the date time picker", options)))
    + "\" >\n        <span class=\"icon-calendar\" role=\"img\"></span>\n    </button>\n    <button type=\"button\" disabled class=\"picker-clear\" title=\""
    + escapeExpression((helper = helpers.__ || (depth0 && depth0.__),options={hash:{},data:data},helper ? helper.call(depth0, "Toggle the date time picker", options) : helperMissing.call(depth0, "__", "Toggle the date time picker", options)))
    + "\" aria-label=\""
    + escapeExpression((helper = helpers.__ || (depth0 && depth0.__),options={hash:{},data:data},helper ? helper.call(depth0, "Toggle the date time picker", options) : helperMissing.call(depth0, "__", "Toggle the date time picker", options)))
    + "\">\n        <span class=\"icon-reset\" role=\"img\"></span>\n    </button>\n    ";
  return buffer;
  }

  buffer += "<div class=\"datetime-picker ";
  if (helper = helpers.setup) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.setup); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.controlButtons), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <input type=\"text\" disabled\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.value), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.pattern), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.label), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    />\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.controlButtons), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

/***/ }),

/***/ "core/eventifier":
/*!**********************************!*\
  !*** external "core/eventifier" ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_eventifier__;

/***/ }),

/***/ "css!lib/flatpickr/flatpickr.css":
/*!**************************************************!*\
  !*** external "css!lib/flatpickr/flatpickr.css" ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_css_lib_flatpickr_flatpickr_css__;

/***/ }),

/***/ "handlebars":
/*!*****************************!*\
  !*** external "handlebars" ***!
  \*****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_handlebars__;

/***/ }),

/***/ "i18n":
/*!***********************!*\
  !*** external "i18n" ***!
  \***********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_i18n__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "lib/flatpickr/flatpickr":
/*!******************************************!*\
  !*** external "lib/flatpickr/flatpickr" ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lib_flatpickr_flatpickr__;

/***/ }),

/***/ "lib/flatpickr/l10n/index":
/*!*******************************************!*\
  !*** external "lib/flatpickr/l10n/index" ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lib_flatpickr_l10n_index__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

/***/ })

/******/ })["default"];
});