(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("core/eventifier"), require("handlebars"), require("jquery"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["core/eventifier", "handlebars", "jquery", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["component"] = factory(require("core/eventifier"), require("handlebars"), require("jquery"), require("lodash"));
	else
		root["component"] = factory(root["core/eventifier"], root["handlebars"], root["jquery"], root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_core_eventifier__, __WEBPACK_EXTERNAL_MODULE_handlebars__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_lodash__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/component.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "core/eventifier":
/*!**********************************!*\
  !*** external "core/eventifier" ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_eventifier__;

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

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ })

/******/ })["default"];
});