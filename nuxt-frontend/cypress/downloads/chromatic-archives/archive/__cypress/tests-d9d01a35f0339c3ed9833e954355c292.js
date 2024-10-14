/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./cypress/support/commands.ts":
/*!*************************************!*\
  !*** ./cypress/support/commands.ts ***!
  \*************************************/
/***/ (() => {

"use strict";

/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tYW5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUNBQWlDO0FBQ2pDLGtEQUFrRDtBQUNsRCw0Q0FBNEM7QUFDNUMsK0NBQStDO0FBQy9DLHFCQUFxQjtBQUNyQixFQUFFO0FBQ0YsNENBQTRDO0FBQzVDLGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFDeEMsa0RBQWtEO0FBQ2xELEVBQUU7QUFDRixFQUFFO0FBQ0YsaUNBQWlDO0FBQ2pDLDhEQUE4RDtBQUM5RCxFQUFFO0FBQ0YsRUFBRTtBQUNGLGdDQUFnQztBQUNoQyx5RkFBeUY7QUFDekYsRUFBRTtBQUNGLEVBQUU7QUFDRiwrQkFBK0I7QUFDL0IsNkZBQTZGO0FBQzdGLEVBQUU7QUFDRixFQUFFO0FBQ0YsZ0RBQWdEO0FBQ2hELDZFQUE2RTtBQUM3RSxFQUFFO0FBQ0YsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUIsZ0VBQWdFO0FBQ2hFLGtGQUFrRjtBQUNsRixxRkFBcUY7QUFDckYsOEdBQThHO0FBQzlHLFFBQVE7QUFDUixNQUFNO0FBQ04sSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY3lwcmVzc1wiIC8+XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gVGhpcyBleGFtcGxlIGNvbW1hbmRzLnRzIHNob3dzIHlvdSBob3cgdG9cbi8vIGNyZWF0ZSB2YXJpb3VzIGN1c3RvbSBjb21tYW5kcyBhbmQgb3ZlcndyaXRlXG4vLyBleGlzdGluZyBjb21tYW5kcy5cbi8vXG4vLyBGb3IgbW9yZSBjb21wcmVoZW5zaXZlIGV4YW1wbGVzIG9mIGN1c3RvbVxuLy8gY29tbWFuZHMgcGxlYXNlIHJlYWQgbW9yZSBoZXJlOlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2N1c3RvbS1jb21tYW5kc1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vXG4vL1xuLy8gLS0gVGhpcyBpcyBhIHBhcmVudCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZCgnbG9naW4nLCAoZW1haWwsIHBhc3N3b3JkKSA9PiB7IC4uLiB9KVxuLy9cbi8vXG4vLyAtLSBUaGlzIGlzIGEgY2hpbGQgY29tbWFuZCAtLVxuLy8gQ3lwcmVzcy5Db21tYW5kcy5hZGQoJ2RyYWcnLCB7IHByZXZTdWJqZWN0OiAnZWxlbWVudCd9LCAoc3ViamVjdCwgb3B0aW9ucykgPT4geyAuLi4gfSlcbi8vXG4vL1xuLy8gLS0gVGhpcyBpcyBhIGR1YWwgY29tbWFuZCAtLVxuLy8gQ3lwcmVzcy5Db21tYW5kcy5hZGQoJ2Rpc21pc3MnLCB7IHByZXZTdWJqZWN0OiAnb3B0aW9uYWwnfSwgKHN1YmplY3QsIG9wdGlvbnMpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgd2lsbCBvdmVyd3JpdGUgYW4gZXhpc3RpbmcgY29tbWFuZCAtLVxuLy8gQ3lwcmVzcy5Db21tYW5kcy5vdmVyd3JpdGUoJ3Zpc2l0JywgKG9yaWdpbmFsRm4sIHVybCwgb3B0aW9ucykgPT4geyAuLi4gfSlcbi8vXG4vLyBkZWNsYXJlIGdsb2JhbCB7XG4vLyAgIG5hbWVzcGFjZSBDeXByZXNzIHtcbi8vICAgICBpbnRlcmZhY2UgQ2hhaW5hYmxlIHtcbi8vICAgICAgIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBDaGFpbmFibGU8dm9pZD5cbi8vICAgICAgIGRyYWcoc3ViamVjdDogc3RyaW5nLCBvcHRpb25zPzogUGFydGlhbDxUeXBlT3B0aW9ucz4pOiBDaGFpbmFibGU8RWxlbWVudD5cbi8vICAgICAgIGRpc21pc3Moc3ViamVjdDogc3RyaW5nLCBvcHRpb25zPzogUGFydGlhbDxUeXBlT3B0aW9ucz4pOiBDaGFpbmFibGU8RWxlbWVudD5cbi8vICAgICAgIHZpc2l0KG9yaWdpbmFsRm46IENvbW1hbmRPcmlnaW5hbEZuLCB1cmw6IHN0cmluZywgb3B0aW9uczogUGFydGlhbDxWaXNpdE9wdGlvbnM+KTogQ2hhaW5hYmxlPEVsZW1lbnQ+XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9Il19

/***/ }),

/***/ "../../../../.cache/Cypress/13.15.0/Cypress/resources/app/node_modules/process/browser.js":
/*!************************************************************************************************!*\
  !*** ../../../../.cache/Cypress/13.15.0/Cypress/resources/app/node_modules/process/browser.js ***!
  \************************************************************************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/@chromatic-com/cypress/dist/support.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/@chromatic-com/cypress/dist/support.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chromaui_rrweb_snapshot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chromaui/rrweb-snapshot */ "./node_modules/@chromaui/rrweb-snapshot/dist/rrweb-snapshot.js");


Cypress.Commands.add("takeSnapshot",e=>{Cypress.config("isTextTerminal")&&cy.document().then(s=>{let r=(0,_chromaui_rrweb_snapshot__WEBPACK_IMPORTED_MODULE_0__.snapshot)(s);cy.get("@manualSnapshots").then(o=>[...o,{name:e,snapshot:r}]).as("manualSnapshots");});});beforeEach(()=>{Cypress.config("isTextTerminal")&&(cy.wrap([]).as("manualSnapshots"),cy.task("prepareArchives",{action:"setup-network-listener",payload:{allowedDomains:Cypress.env("assetDomains")}}));});afterEach(()=>{Cypress.config("isTextTerminal")&&cy.document().then(e=>{let s=Cypress.env("disableAutoSnapshot")?[]:[{snapshot:(0,_chromaui_rrweb_snapshot__WEBPACK_IMPORTED_MODULE_0__.snapshot)(e)}];cy.get("@manualSnapshots").then((r=[])=>{cy.url().then(o=>{cy.task("prepareArchives",{action:"save-archives",payload:{testTitlePath:[Cypress.spec.relativeToCommonRoot,...Cypress.currentTest.titlePath],domSnapshots:[...r,...s],chromaticStorybookParams:{...Cypress.env("diffThreshold")&&{diffThreshold:Cypress.env("diffThreshold")},...Cypress.env("delay")&&{delay:Cypress.env("delay")},...Cypress.env("diffIncludeAntiAliasing")&&{diffIncludeAntiAliasing:Cypress.env("diffIncludeAntiAliasing")},...Cypress.env("diffThreshold")&&{diffThreshold:Cypress.env("diffThreshold")},...Cypress.env("forcedColors")&&{forcedColors:Cypress.env("forcedColors")},...Cypress.env("pauseAnimationAtEnd")&&{pauseAnimationAtEnd:Cypress.env("pauseAnimationAtEnd")},...Cypress.env("prefersReducedMotion")&&{prefersReducedMotion:Cypress.env("prefersReducedMotion")},...Cypress.env("cropToViewport")&&{cropToViewport:Cypress.env("cropToViewport")},...Cypress.env("ignoreSelectors")&&{ignoreSelectors:Cypress.env("ignoreSelectors")}},pageUrl:o,viewport:{height:Cypress.config("viewportHeight"),width:Cypress.config("viewportWidth")},outputDir:Cypress.config("downloadsFolder")}});});});});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=support.mjs.map

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



const base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
const ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
const customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

const K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1)
    const proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  const valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  const b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  const length = byteLength(string, encoding) | 0
  let buf = createBuffer(length)

  const actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0
  const buf = createBuffer(length)
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  let buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0
    const buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  let x = a.length
  let y = b.length

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  let i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  const buffer = Buffer.allocUnsafe(length)
  let pos = 0
  for (i = 0; i < list.length; ++i) {
    let buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf)
        buf.copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  const len = string.length
  const mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  let loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  const i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  const len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  const len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  const len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  const length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  let str = ''
  const max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  let x = thisEnd - thisStart
  let y = end - start
  const len = Math.min(x, y)

  const thisCopy = this.slice(thisStart, thisEnd)
  const targetCopy = target.slice(start, end)

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  let indexSize = 1
  let arrLength = arr.length
  let valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  let i
  if (dir) {
    let foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      let found = true
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  const remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  const strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  let i
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  const remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  const res = []

  let i = start
  while (i < end) {
    const firstByte = buf[i]
    let codePoint = null
    let bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  const len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = ''
  let i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  const len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  let out = ''
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  const bytes = buf.slice(start, end)
  let res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  const len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  const newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  let val = this[offset + --byteLength]
  let mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const lo = first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24

  const hi = this[++offset] +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    last * 2 ** 24

  return BigInt(lo) + (BigInt(hi) << BigInt(32))
})

Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const hi = first * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  const lo = this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last

  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
})

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let i = byteLength
  let mul = 1
  let val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = this[offset + 4] +
    this[offset + 5] * 2 ** 8 +
    this[offset + 6] * 2 ** 16 +
    (last << 24) // Overflow

  return (BigInt(val) << BigInt(32)) +
    BigInt(first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24)
})

Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  return (BigInt(val) << BigInt(32)) +
    BigInt(this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last)
})

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let mul = 1
  let i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let i = byteLength - 1
  let mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function wrtBigUInt64LE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  return offset
}

function wrtBigUInt64BE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset + 7] = lo
  lo = lo >> 8
  buf[offset + 6] = lo
  lo = lo >> 8
  buf[offset + 5] = lo
  lo = lo >> 8
  buf[offset + 4] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset + 3] = hi
  hi = hi >> 8
  buf[offset + 2] = hi
  hi = hi >> 8
  buf[offset + 1] = hi
  hi = hi >> 8
  buf[offset] = hi
  return offset + 8
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = 0
  let mul = 1
  let sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = byteLength - 1
  let mul = 1
  let sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  const len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  let i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    const bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    const len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {}
function E (sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor () {
      super()

      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      })

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name
    }

    get code () {
      return sym
    }

    set code (value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      })
    }

    toString () {
      return `${this.name} [${sym}]: ${this.message}`
    }
  }
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
  function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`
    }

    return 'Attempt to access memory outside buffer bounds'
  }, RangeError)
E('ERR_INVALID_ARG_TYPE',
  function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
  }, TypeError)
E('ERR_OUT_OF_RANGE',
  function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`
    let received = input
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input))
    } else if (typeof input === 'bigint') {
      received = String(input)
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received)
      }
      received += 'n'
    }
    msg += ` It must be ${range}. Received ${received}`
    return msg
  }, RangeError)

function addNumericalSeparator (val) {
  let res = ''
  let i = val.length
  const start = val[0] === '-' ? 1 : 0
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`
  }
  return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds (buf, offset, byteLength) {
  validateNumber(offset, 'offset')
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1))
  }
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : ''
    let range
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                `${(byteLength + 1) * 8 - 1}${n}`
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength)
}

function validateNumber (value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
  }
}

function boundsError (value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type)
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                    `>= ${type ? 1 : 0} and <= ${length}`,
                                    value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  let codePoint
  const length = string.length
  let leadSurrogate = null
  const bytes = []

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  let c, hi, lo
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  let i
  for (i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
  const alphabet = '0123456789abcdef'
  const table = new Array(256)
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

// Return not function with Error if BigInt not supported
function defineBigIntMethod (fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined () {
  throw new Error('BigInt not supported')
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/@chromaui/rrweb-snapshot/dist/rrweb-snapshot.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@chromaui/rrweb-snapshot/dist/rrweb-snapshot.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IGNORED_NODE: () => (/* binding */ IGNORED_NODE),
/* harmony export */   Mirror: () => (/* binding */ Mirror),
/* harmony export */   NodeType: () => (/* binding */ NodeType),
/* harmony export */   absolutifyURLs: () => (/* binding */ absolutifyURLs),
/* harmony export */   adaptCssForReplay: () => (/* binding */ adaptCssForReplay),
/* harmony export */   buildNodeWithSN: () => (/* binding */ buildNodeWithSN),
/* harmony export */   classMatchesRegex: () => (/* binding */ classMatchesRegex),
/* harmony export */   cleanupSnapshot: () => (/* binding */ cleanupSnapshot),
/* harmony export */   createCache: () => (/* binding */ createCache),
/* harmony export */   createMirror: () => (/* binding */ createMirror),
/* harmony export */   escapeImportStatement: () => (/* binding */ escapeImportStatement),
/* harmony export */   extractFileExtension: () => (/* binding */ extractFileExtension),
/* harmony export */   fixSafariColons: () => (/* binding */ fixSafariColons),
/* harmony export */   genId: () => (/* binding */ genId),
/* harmony export */   getInputType: () => (/* binding */ getInputType),
/* harmony export */   ignoreAttribute: () => (/* binding */ ignoreAttribute),
/* harmony export */   is2DCanvasBlank: () => (/* binding */ is2DCanvasBlank),
/* harmony export */   isCSSImportRule: () => (/* binding */ isCSSImportRule),
/* harmony export */   isCSSStyleRule: () => (/* binding */ isCSSStyleRule),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isNativeShadowDom: () => (/* binding */ isNativeShadowDom),
/* harmony export */   isNodeMetaEqual: () => (/* binding */ isNodeMetaEqual),
/* harmony export */   isShadowRoot: () => (/* binding */ isShadowRoot),
/* harmony export */   markCssSplits: () => (/* binding */ markCssSplits),
/* harmony export */   maskInputValue: () => (/* binding */ maskInputValue),
/* harmony export */   needMaskingText: () => (/* binding */ needMaskingText),
/* harmony export */   normalizeCssString: () => (/* binding */ normalizeCssString),
/* harmony export */   rebuild: () => (/* binding */ rebuild),
/* harmony export */   serializeNodeWithId: () => (/* binding */ serializeNodeWithId),
/* harmony export */   snapshot: () => (/* binding */ snapshot),
/* harmony export */   splitCssText: () => (/* binding */ splitCssText),
/* harmony export */   stringifyRule: () => (/* binding */ stringifyRule),
/* harmony export */   stringifyStylesheet: () => (/* binding */ stringifyStylesheet),
/* harmony export */   toLowerCase: () => (/* binding */ toLowerCase),
/* harmony export */   transformAttribute: () => (/* binding */ transformAttribute),
/* harmony export */   visitSnapshot: () => (/* binding */ visitSnapshot)
/* harmony export */ });
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];
/* provided dependency */ var process = __webpack_require__(/*! ../../../../.cache/Cypress/13.15.0/Cypress/resources/app/node_modules/process/browser.js */ "../../../../.cache/Cypress/13.15.0/Cypress/resources/app/node_modules/process/browser.js");
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var NodeType = /* @__PURE__ */ ((NodeType2) => {
  NodeType2[NodeType2["Document"] = 0] = "Document";
  NodeType2[NodeType2["DocumentType"] = 1] = "DocumentType";
  NodeType2[NodeType2["Element"] = 2] = "Element";
  NodeType2[NodeType2["Text"] = 3] = "Text";
  NodeType2[NodeType2["CDATA"] = 4] = "CDATA";
  NodeType2[NodeType2["Comment"] = 5] = "Comment";
  return NodeType2;
})(NodeType || {});
const testableAccessors = {
  Node: ["childNodes", "parentNode", "parentElement", "textContent"],
  ShadowRoot: ["host", "styleSheets"],
  Element: ["shadowRoot", "querySelector", "querySelectorAll"],
  MutationObserver: []
};
const testableMethods = {
  Node: ["contains", "getRootNode"],
  ShadowRoot: ["getSelection"],
  Element: [],
  MutationObserver: ["constructor"]
};
const untaintedBasePrototype = {};
function getUntaintedPrototype(key) {
  if (untaintedBasePrototype[key])
    return untaintedBasePrototype[key];
  const defaultObj = globalThis[key];
  const defaultPrototype = defaultObj.prototype;
  const accessorNames = key in testableAccessors ? testableAccessors[key] : void 0;
  const isUntaintedAccessors = Boolean(
    accessorNames && // @ts-expect-error 2345
    accessorNames.every(
      (accessor) => {
        var _a, _b;
        return Boolean(
          (_b = (_a = Object.getOwnPropertyDescriptor(defaultPrototype, accessor)) == null ? void 0 : _a.get) == null ? void 0 : _b.toString().includes("[native code]")
        );
      }
    )
  );
  const methodNames = key in testableMethods ? testableMethods[key] : void 0;
  const isUntaintedMethods = Boolean(
    methodNames && methodNames.every(
      // @ts-expect-error 2345
      (method) => {
        var _a;
        return typeof defaultPrototype[method] === "function" && ((_a = defaultPrototype[method]) == null ? void 0 : _a.toString().includes("[native code]"));
      }
    )
  );
  if (isUntaintedAccessors && isUntaintedMethods) {
    untaintedBasePrototype[key] = defaultObj.prototype;
    return defaultObj.prototype;
  }
  try {
    const iframeEl = document.createElement("iframe");
    document.body.appendChild(iframeEl);
    const win = iframeEl.contentWindow;
    if (!win) return defaultObj.prototype;
    const untaintedObject = win[key].prototype;
    document.body.removeChild(iframeEl);
    if (!untaintedObject) return defaultPrototype;
    return untaintedBasePrototype[key] = untaintedObject;
  } catch {
    return defaultPrototype;
  }
}
const untaintedAccessorCache = {};
function getUntaintedAccessor(key, instance, accessor) {
  var _a;
  const cacheKey = `${key}.${String(accessor)}`;
  if (untaintedAccessorCache[cacheKey])
    return untaintedAccessorCache[cacheKey].call(
      instance
    );
  const untaintedPrototype = getUntaintedPrototype(key);
  const untaintedAccessor = (_a = Object.getOwnPropertyDescriptor(
    untaintedPrototype,
    accessor
  )) == null ? void 0 : _a.get;
  if (!untaintedAccessor) return instance[accessor];
  untaintedAccessorCache[cacheKey] = untaintedAccessor;
  return untaintedAccessor.call(instance);
}
const untaintedMethodCache = {};
function getUntaintedMethod(key, instance, method) {
  const cacheKey = `${key}.${String(method)}`;
  if (untaintedMethodCache[cacheKey])
    return untaintedMethodCache[cacheKey].bind(
      instance
    );
  const untaintedPrototype = getUntaintedPrototype(key);
  const untaintedMethod = untaintedPrototype[method];
  if (typeof untaintedMethod !== "function") return instance[method];
  untaintedMethodCache[cacheKey] = untaintedMethod;
  return untaintedMethod.bind(instance);
}
function childNodes(n) {
  return getUntaintedAccessor("Node", n, "childNodes");
}
function parentNode(n) {
  return getUntaintedAccessor("Node", n, "parentNode");
}
function parentElement(n) {
  return getUntaintedAccessor("Node", n, "parentElement");
}
function textContent(n) {
  return getUntaintedAccessor("Node", n, "textContent");
}
function contains(n, other) {
  return getUntaintedMethod("Node", n, "contains")(other);
}
function getRootNode(n) {
  return getUntaintedMethod("Node", n, "getRootNode")();
}
function host(n) {
  if (!n || !("host" in n)) return null;
  return getUntaintedAccessor("ShadowRoot", n, "host");
}
function styleSheets(n) {
  return n.styleSheets;
}
function shadowRoot(n) {
  if (!n || !("shadowRoot" in n)) return null;
  return getUntaintedAccessor("Element", n, "shadowRoot");
}
function querySelector(n, selectors) {
  return getUntaintedAccessor("Element", n, "querySelector")(selectors);
}
function querySelectorAll(n, selectors) {
  return getUntaintedAccessor("Element", n, "querySelectorAll")(selectors);
}
function mutationObserverCtor() {
  return getUntaintedPrototype("MutationObserver").constructor;
}
const index = {
  childNodes,
  parentNode,
  parentElement,
  textContent,
  contains,
  getRootNode,
  host,
  styleSheets,
  shadowRoot,
  querySelector,
  querySelectorAll,
  mutationObserver: mutationObserverCtor
};
function isElement(n) {
  return n.nodeType === n.ELEMENT_NODE;
}
function isShadowRoot(n) {
  const hostEl = (
    // anchor and textarea elements also have a `host` property
    // but only shadow roots have a `mode` property
    n && "host" in n && "mode" in n && index.host(n) || null
  );
  return Boolean(
    hostEl && "shadowRoot" in hostEl && index.shadowRoot(hostEl) === n
  );
}
function isNativeShadowDom(shadowRoot2) {
  return Object.prototype.toString.call(shadowRoot2) === "[object ShadowRoot]";
}
function fixBrowserCompatibilityIssuesInCSS(cssText) {
  if (cssText.includes(" background-clip: text;") && !cssText.includes(" -webkit-background-clip: text;")) {
    cssText = cssText.replace(
      /\sbackground-clip:\s*text;/g,
      " -webkit-background-clip: text; background-clip: text;"
    );
  }
  return cssText;
}
function escapeImportStatement(rule2) {
  const { cssText } = rule2;
  if (cssText.split('"').length < 3) return cssText;
  const statement = ["@import", `url(${JSON.stringify(rule2.href)})`];
  if (rule2.layerName === "") {
    statement.push(`layer`);
  } else if (rule2.layerName) {
    statement.push(`layer(${rule2.layerName})`);
  }
  if (rule2.supportsText) {
    statement.push(`supports(${rule2.supportsText})`);
  }
  if (rule2.media.length) {
    statement.push(rule2.media.mediaText);
  }
  return statement.join(" ") + ";";
}
function stringifyStylesheet(s) {
  try {
    const rules = s.rules || s.cssRules;
    if (!rules) {
      return null;
    }
    let sheetHref = s.href;
    if (!sheetHref && s.ownerNode && s.ownerNode.ownerDocument) {
      sheetHref = s.ownerNode.ownerDocument.location.href;
    }
    const stringifiedRules = Array.from(
      rules,
      (rule2) => stringifyRule(rule2, sheetHref)
    ).join("");
    return fixBrowserCompatibilityIssuesInCSS(stringifiedRules);
  } catch (error) {
    return null;
  }
}
function stringifyRule(rule2, sheetHref) {
  if (isCSSImportRule(rule2)) {
    let importStringified;
    try {
      importStringified = // for same-origin stylesheets,
      // we can access the imported stylesheet rules directly
      stringifyStylesheet(rule2.styleSheet) || // work around browser issues with the raw string `@import url(...)` statement
      escapeImportStatement(rule2);
    } catch (error) {
      importStringified = rule2.cssText;
    }
    if (rule2.styleSheet.href) {
      return absolutifyURLs(importStringified, rule2.styleSheet.href);
    }
    return importStringified;
  } else {
    let ruleStringified = rule2.cssText;
    if (isCSSStyleRule(rule2) && rule2.selectorText.includes(":")) {
      ruleStringified = fixSafariColons(ruleStringified);
    }
    if (sheetHref) {
      return absolutifyURLs(ruleStringified, sheetHref);
    }
    return ruleStringified;
  }
}
function fixSafariColons(cssStringified) {
  const regex = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return cssStringified.replace(regex, "$1\\$2");
}
function isCSSImportRule(rule2) {
  return "styleSheet" in rule2;
}
function isCSSStyleRule(rule2) {
  return "selectorText" in rule2;
}
class Mirror {
  constructor() {
    __publicField(this, "idNodeMap", /* @__PURE__ */ new Map());
    __publicField(this, "nodeMetaMap", /* @__PURE__ */ new WeakMap());
  }
  getId(n) {
    var _a;
    if (!n) return -1;
    const id = (_a = this.getMeta(n)) == null ? void 0 : _a.id;
    return id ?? -1;
  }
  getNode(id) {
    return this.idNodeMap.get(id) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(n) {
    return this.nodeMetaMap.get(n) || null;
  }
  // removes the node from idNodeMap
  // doesn't remove the node from nodeMetaMap
  removeNodeFromMap(n) {
    const id = this.getId(n);
    this.idNodeMap.delete(id);
    if (n.childNodes) {
      n.childNodes.forEach(
        (childNode) => this.removeNodeFromMap(childNode)
      );
    }
  }
  has(id) {
    return this.idNodeMap.has(id);
  }
  hasNode(node2) {
    return this.nodeMetaMap.has(node2);
  }
  add(n, meta) {
    const id = meta.id;
    this.idNodeMap.set(id, n);
    this.nodeMetaMap.set(n, meta);
  }
  replace(id, n) {
    const oldNode = this.getNode(id);
    if (oldNode) {
      const meta = this.nodeMetaMap.get(oldNode);
      if (meta) this.nodeMetaMap.set(n, meta);
    }
    this.idNodeMap.set(id, n);
  }
  reset() {
    this.idNodeMap = /* @__PURE__ */ new Map();
    this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
  }
}
function createMirror() {
  return new Mirror();
}
function maskInputValue({
  element,
  maskInputOptions,
  tagName,
  type,
  value,
  maskInputFn
}) {
  let text = value || "";
  const actualType = type && toLowerCase(type);
  if (maskInputOptions[tagName.toLowerCase()] || actualType && maskInputOptions[actualType]) {
    if (maskInputFn) {
      text = maskInputFn(text, element);
    } else {
      text = "*".repeat(text.length);
    }
  }
  return text;
}
function toLowerCase(str) {
  return str.toLowerCase();
}
const ORIGINAL_ATTRIBUTE_NAME = "__rrweb_original__";
function is2DCanvasBlank(canvas) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return true;
  const chunkSize = 50;
  for (let x2 = 0; x2 < canvas.width; x2 += chunkSize) {
    for (let y = 0; y < canvas.height; y += chunkSize) {
      const getImageData = ctx.getImageData;
      const originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData ? getImageData[ORIGINAL_ATTRIBUTE_NAME] : getImageData;
      const pixelBuffer = new Uint32Array(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        originalGetImageData.call(
          ctx,
          x2,
          y,
          Math.min(chunkSize, canvas.width - x2),
          Math.min(chunkSize, canvas.height - y)
        ).data.buffer
      );
      if (pixelBuffer.some((pixel) => pixel !== 0)) return false;
    }
  }
  return true;
}
function isNodeMetaEqual(a, b) {
  if (!a || !b || a.type !== b.type) return false;
  if (a.type === NodeType.Document)
    return a.compatMode === b.compatMode;
  else if (a.type === NodeType.DocumentType)
    return a.name === b.name && a.publicId === b.publicId && a.systemId === b.systemId;
  else if (a.type === NodeType.Comment || a.type === NodeType.Text || a.type === NodeType.CDATA)
    return a.textContent === b.textContent;
  else if (a.type === NodeType.Element)
    return a.tagName === b.tagName && JSON.stringify(a.attributes) === JSON.stringify(b.attributes) && a.isSVG === b.isSVG && a.needBlock === b.needBlock;
  return false;
}
function getInputType(element) {
  const type = element.type;
  return element.hasAttribute("data-rr-is-password") ? "password" : type ? (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    toLowerCase(type)
  ) : null;
}
function extractFileExtension(path, baseURL) {
  let url;
  try {
    url = new URL(path, baseURL ?? window.location.href);
  } catch (err) {
    return null;
  }
  const regex = /\.([0-9a-z]+)(?:$)/i;
  const match = url.pathname.match(regex);
  return (match == null ? void 0 : match[1]) ?? null;
}
function extractOrigin(url) {
  let origin = "";
  if (url.indexOf("//") > -1) {
    origin = url.split("/").slice(0, 3).join("/");
  } else {
    origin = url.split("/")[0];
  }
  origin = origin.split("?")[0];
  return origin;
}
const URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
const URL_PROTOCOL_MATCH = /^(?:[a-z+]+:)?\/\//i;
const URL_WWW_MATCH = /^www\..*/i;
const DATA_URI = /^(data:)([^,]*),(.*)/i;
function absolutifyURLs(cssText, href) {
  return (cssText || "").replace(
    URL_IN_CSS_REF,
    (origin, quote1, path1, quote2, path2, path3) => {
      const filePath = path1 || path2 || path3;
      const maybeQuote = quote1 || quote2 || "";
      if (!filePath) {
        return origin;
      }
      if (URL_PROTOCOL_MATCH.test(filePath) || URL_WWW_MATCH.test(filePath)) {
        return `url(${maybeQuote}${filePath}${maybeQuote})`;
      }
      if (DATA_URI.test(filePath)) {
        return `url(${maybeQuote}${filePath}${maybeQuote})`;
      }
      if (filePath[0] === "/") {
        return `url(${maybeQuote}${extractOrigin(href) + filePath}${maybeQuote})`;
      }
      const stack = href.split("/");
      const parts = filePath.split("/");
      stack.pop();
      for (const part of parts) {
        if (part === ".") {
          continue;
        } else if (part === "..") {
          stack.pop();
        } else {
          stack.push(part);
        }
      }
      return `url(${maybeQuote}${stack.join("/")}${maybeQuote})`;
    }
  );
}
function normalizeCssString(cssText) {
  return cssText.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "");
}
function splitCssText(cssText, style) {
  const childNodes2 = Array.from(style.childNodes);
  const splits = [];
  if (childNodes2.length > 1 && cssText && typeof cssText === "string") {
    const cssTextNorm = normalizeCssString(cssText);
    for (let i = 1; i < childNodes2.length; i++) {
      if (childNodes2[i].textContent && typeof childNodes2[i].textContent === "string") {
        const textContentNorm = normalizeCssString(childNodes2[i].textContent);
        for (let j = 3; j < textContentNorm.length; j++) {
          const bit = textContentNorm.substring(0, j);
          if (cssTextNorm.split(bit).length === 2) {
            const splitNorm = cssTextNorm.indexOf(bit);
            for (let k = splitNorm; k < cssText.length; k++) {
              if (normalizeCssString(cssText.substring(0, k)).length === splitNorm) {
                splits.push(cssText.substring(0, k));
                cssText = cssText.substring(k);
                break;
              }
            }
            break;
          }
        }
      }
    }
  }
  splits.push(cssText);
  return splits;
}
function markCssSplits(cssText, style) {
  return splitCssText(cssText, style).join("/* rr_split */");
}
let _id = 1;
const tagNameRegex = new RegExp("[^a-z0-9-_:]");
const IGNORED_NODE = -2;
function genId() {
  return _id++;
}
function getValidTagName(element) {
  if (element instanceof HTMLFormElement) {
    return "form";
  }
  const processedTagName = toLowerCase(element.tagName);
  if (tagNameRegex.test(processedTagName)) {
    return "div";
  }
  return processedTagName;
}
let canvasService;
let canvasCtx;
const SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
const SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
  if (attributeValue.trim() === "") {
    return attributeValue;
  }
  let pos = 0;
  function collectCharacters(regEx) {
    let chars;
    const match = regEx.exec(attributeValue.substring(pos));
    if (match) {
      chars = match[0];
      pos += chars.length;
      return chars;
    }
    return "";
  }
  const output = [];
  while (true) {
    collectCharacters(SRCSET_COMMAS_OR_SPACES);
    if (pos >= attributeValue.length) {
      break;
    }
    let url = collectCharacters(SRCSET_NOT_SPACES);
    if (url.slice(-1) === ",") {
      url = absoluteToDoc(doc, url.substring(0, url.length - 1));
      output.push(url);
    } else {
      let descriptorsStr = "";
      url = absoluteToDoc(doc, url);
      let inParens = false;
      while (true) {
        const c = attributeValue.charAt(pos);
        if (c === "") {
          output.push((url + descriptorsStr).trim());
          break;
        } else if (!inParens) {
          if (c === ",") {
            pos += 1;
            output.push((url + descriptorsStr).trim());
            break;
          } else if (c === "(") {
            inParens = true;
          }
        } else {
          if (c === ")") {
            inParens = false;
          }
        }
        descriptorsStr += c;
        pos += 1;
      }
    }
  }
  return output.join(", ");
}
const cachedDocument = /* @__PURE__ */ new WeakMap();
function absoluteToDoc(doc, attributeValue) {
  if (!attributeValue || attributeValue.trim() === "") {
    return attributeValue;
  }
  return getHref(doc, attributeValue);
}
function isSVGElement(el) {
  return Boolean(el.tagName === "svg" || el.ownerSVGElement);
}
function getHref(doc, customHref) {
  let a = cachedDocument.get(doc);
  if (!a) {
    a = doc.createElement("a");
    cachedDocument.set(doc, a);
  }
  if (!customHref) {
    customHref = "";
  } else if (customHref.startsWith("blob:") || customHref.startsWith("data:")) {
    return customHref;
  }
  a.setAttribute("href", customHref);
  return a.href;
}
function transformAttribute(doc, tagName, name, value) {
  if (!value) {
    return value;
  }
  if (name === "src" || name === "href" && !(tagName === "use" && value[0] === "#")) {
    return absoluteToDoc(doc, value);
  } else if (name === "xlink:href" && value[0] !== "#") {
    return absoluteToDoc(doc, value);
  } else if (name === "background" && (tagName === "table" || tagName === "td" || tagName === "th")) {
    return absoluteToDoc(doc, value);
  } else if (name === "srcset") {
    return getAbsoluteSrcsetString(doc, value);
  } else if (name === "style") {
    return absolutifyURLs(value, getHref(doc));
  } else if (tagName === "object" && name === "data") {
    return absoluteToDoc(doc, value);
  }
  return value;
}
function ignoreAttribute(tagName, name, _value) {
  return (tagName === "video" || tagName === "audio") && name === "autoplay";
}
function _isBlockedElement(element, blockClass, blockSelector) {
  try {
    if (typeof blockClass === "string") {
      if (element.classList.contains(blockClass)) {
        return true;
      }
    } else {
      for (let eIndex = element.classList.length; eIndex--; ) {
        const className = element.classList[eIndex];
        if (blockClass.test(className)) {
          return true;
        }
      }
    }
    if (blockSelector) {
      return element.matches(blockSelector);
    }
  } catch (e) {
  }
  return false;
}
function classMatchesRegex(node2, regex, checkAncestors) {
  if (!node2) return false;
  if (node2.nodeType !== node2.ELEMENT_NODE) {
    if (!checkAncestors) return false;
    return classMatchesRegex(index.parentNode(node2), regex, checkAncestors);
  }
  for (let eIndex = node2.classList.length; eIndex--; ) {
    const className = node2.classList[eIndex];
    if (regex.test(className)) {
      return true;
    }
  }
  if (!checkAncestors) return false;
  return classMatchesRegex(index.parentNode(node2), regex, checkAncestors);
}
function needMaskingText(node2, maskTextClass, maskTextSelector, checkAncestors) {
  let el;
  if (isElement(node2)) {
    el = node2;
    if (!index.childNodes(el).length) {
      return false;
    }
  } else if (index.parentElement(node2) === null) {
    return false;
  } else {
    el = index.parentElement(node2);
  }
  try {
    if (typeof maskTextClass === "string") {
      if (checkAncestors) {
        if (el.closest(`.${maskTextClass}`)) return true;
      } else {
        if (el.classList.contains(maskTextClass)) return true;
      }
    } else {
      if (classMatchesRegex(el, maskTextClass, checkAncestors)) return true;
    }
    if (maskTextSelector) {
      if (checkAncestors) {
        if (el.closest(maskTextSelector)) return true;
      } else {
        if (el.matches(maskTextSelector)) return true;
      }
    }
  } catch (e) {
  }
  return false;
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
  const win = iframeEl.contentWindow;
  if (!win) {
    return;
  }
  let fired = false;
  let readyState;
  try {
    readyState = win.document.readyState;
  } catch (error) {
    return;
  }
  if (readyState !== "complete") {
    const timer = setTimeout(() => {
      if (!fired) {
        listener();
        fired = true;
      }
    }, iframeLoadTimeout);
    iframeEl.addEventListener("load", () => {
      clearTimeout(timer);
      fired = true;
      listener();
    });
    return;
  }
  const blankUrl = "about:blank";
  if (win.location.href !== blankUrl || iframeEl.src === blankUrl || iframeEl.src === "") {
    setTimeout(listener, 0);
    return iframeEl.addEventListener("load", listener);
  }
  iframeEl.addEventListener("load", listener);
}
function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
  let fired = false;
  let styleSheetLoaded;
  try {
    styleSheetLoaded = link.sheet;
  } catch (error) {
    return;
  }
  if (styleSheetLoaded) return;
  const timer = setTimeout(() => {
    if (!fired) {
      listener();
      fired = true;
    }
  }, styleSheetLoadTimeout);
  link.addEventListener("load", () => {
    clearTimeout(timer);
    fired = true;
    listener();
  });
}
function serializeNode(n, options) {
  const {
    doc,
    mirror,
    blockClass,
    blockSelector,
    needsMask,
    inlineStylesheet,
    maskInputOptions = {},
    maskTextFn,
    maskInputFn,
    dataURLOptions = {},
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement = false,
    cssCaptured = false
  } = options;
  const rootId = getRootId(doc, mirror);
  switch (n.nodeType) {
    case n.DOCUMENT_NODE:
      if (n.compatMode !== "CSS1Compat") {
        return {
          type: NodeType.Document,
          childNodes: [],
          compatMode: n.compatMode
          // probably "BackCompat"
        };
      } else {
        return {
          type: NodeType.Document,
          childNodes: []
        };
      }
    case n.DOCUMENT_TYPE_NODE:
      return {
        type: NodeType.DocumentType,
        name: n.name,
        publicId: n.publicId,
        systemId: n.systemId,
        rootId
      };
    case n.ELEMENT_NODE:
      return serializeElementNode(n, {
        doc,
        blockClass,
        blockSelector,
        inlineStylesheet,
        maskInputOptions,
        maskInputFn,
        dataURLOptions,
        inlineImages,
        recordCanvas,
        keepIframeSrcFn,
        newlyAddedElement,
        rootId
      });
    case n.TEXT_NODE:
      return serializeTextNode(n, {
        doc,
        needsMask,
        maskTextFn,
        rootId,
        cssCaptured
      });
    case n.CDATA_SECTION_NODE:
      return {
        type: NodeType.CDATA,
        textContent: "",
        rootId
      };
    case n.COMMENT_NODE:
      return {
        type: NodeType.Comment,
        textContent: index.textContent(n) || "",
        rootId
      };
    default:
      return false;
  }
}
function getRootId(doc, mirror) {
  if (!mirror.hasNode(doc)) return void 0;
  const docId = mirror.getId(doc);
  return docId === 1 ? void 0 : docId;
}
function serializeTextNode(n, options) {
  const { needsMask, maskTextFn, rootId, cssCaptured } = options;
  const parent = index.parentNode(n);
  const parentTagName = parent && parent.tagName;
  let textContent2 = "";
  const isStyle = parentTagName === "STYLE" ? true : void 0;
  const isScript = parentTagName === "SCRIPT" ? true : void 0;
  if (isScript) {
    textContent2 = "SCRIPT_PLACEHOLDER";
  } else if (!cssCaptured) {
    textContent2 = index.textContent(n);
    if (isStyle && textContent2) {
      textContent2 = absolutifyURLs(textContent2, getHref(options.doc));
    }
  }
  if (!isStyle && !isScript && textContent2 && needsMask) {
    textContent2 = maskTextFn ? maskTextFn(textContent2, index.parentElement(n)) : textContent2.replace(/[\S]/g, "*");
  }
  return {
    type: NodeType.Text,
    textContent: textContent2 || "",
    rootId
  };
}
function serializeElementNode(n, options) {
  const {
    doc,
    blockClass,
    blockSelector,
    inlineStylesheet,
    maskInputOptions = {},
    maskInputFn,
    dataURLOptions = {},
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement = false,
    rootId
  } = options;
  const needBlock = _isBlockedElement(n, blockClass, blockSelector);
  const tagName = getValidTagName(n);
  let attributes = {};
  const len = n.attributes.length;
  for (let i = 0; i < len; i++) {
    const attr = n.attributes[i];
    if (!ignoreAttribute(tagName, attr.name, attr.value)) {
      attributes[attr.name] = transformAttribute(
        doc,
        tagName,
        toLowerCase(attr.name),
        attr.value
      );
    }
  }
  if (tagName === "link" && inlineStylesheet) {
    const stylesheet = Array.from(doc.styleSheets).find((s) => {
      return s.href === n.href;
    });
    let cssText = null;
    if (stylesheet) {
      cssText = stringifyStylesheet(stylesheet);
    }
    if (cssText) {
      delete attributes.rel;
      delete attributes.href;
      attributes._cssText = cssText;
    }
  }
  if (tagName === "style" && n.sheet) {
    let cssText = stringifyStylesheet(
      n.sheet
    );
    if (cssText) {
      if (n.childNodes.length > 1) {
        cssText = markCssSplits(cssText, n);
      }
      attributes._cssText = cssText;
    }
  }
  if (tagName === "input" || tagName === "textarea" || tagName === "select") {
    const value = n.value;
    const checked = n.checked;
    if (attributes.type !== "radio" && attributes.type !== "checkbox" && attributes.type !== "submit" && attributes.type !== "button" && value) {
      attributes.value = maskInputValue({
        element: n,
        type: getInputType(n),
        tagName,
        value,
        maskInputOptions,
        maskInputFn
      });
    } else if (checked) {
      attributes.checked = checked;
    }
  }
  if (tagName === "option") {
    if (n.selected && !maskInputOptions["select"]) {
      attributes.selected = true;
    } else {
      delete attributes.selected;
    }
  }
  if (tagName === "dialog" && n.open) {
    attributes.rr_open_mode = n.matches("dialog:modal") ? "modal" : "non-modal";
  }
  if (tagName === "canvas" && recordCanvas) {
    if (n.__context === "2d") {
      if (!is2DCanvasBlank(n)) {
        attributes.rr_dataURL = n.toDataURL(
          dataURLOptions.type,
          dataURLOptions.quality
        );
      }
    } else if (!("__context" in n)) {
      const canvasDataURL = n.toDataURL(
        dataURLOptions.type,
        dataURLOptions.quality
      );
      const blankCanvas = doc.createElement("canvas");
      blankCanvas.width = n.width;
      blankCanvas.height = n.height;
      const blankCanvasDataURL = blankCanvas.toDataURL(
        dataURLOptions.type,
        dataURLOptions.quality
      );
      if (canvasDataURL !== blankCanvasDataURL) {
        attributes.rr_dataURL = canvasDataURL;
      }
    }
  }
  if (tagName === "img" && inlineImages) {
    if (!canvasService) {
      canvasService = doc.createElement("canvas");
      canvasCtx = canvasService.getContext("2d");
    }
    const image = n;
    const imageSrc = image.currentSrc || image.getAttribute("src") || "<unknown-src>";
    const priorCrossOrigin = image.crossOrigin;
    const recordInlineImage = () => {
      image.removeEventListener("load", recordInlineImage);
      try {
        canvasService.width = image.naturalWidth;
        canvasService.height = image.naturalHeight;
        canvasCtx.drawImage(image, 0, 0);
        attributes.rr_dataURL = canvasService.toDataURL(
          dataURLOptions.type,
          dataURLOptions.quality
        );
      } catch (err) {
        if (image.crossOrigin !== "anonymous") {
          image.crossOrigin = "anonymous";
          if (image.complete && image.naturalWidth !== 0)
            recordInlineImage();
          else image.addEventListener("load", recordInlineImage);
          return;
        } else {
          console.warn(
            `Cannot inline img src=${imageSrc}! Error: ${err}`
          );
        }
      }
      if (image.crossOrigin === "anonymous") {
        priorCrossOrigin ? attributes.crossOrigin = priorCrossOrigin : image.removeAttribute("crossorigin");
      }
    };
    if (image.complete && image.naturalWidth !== 0) recordInlineImage();
    else image.addEventListener("load", recordInlineImage);
  }
  if (tagName === "audio" || tagName === "video") {
    const mediaAttributes = attributes;
    mediaAttributes.rr_mediaState = n.paused ? "paused" : "played";
    mediaAttributes.rr_mediaCurrentTime = n.currentTime;
    mediaAttributes.rr_mediaPlaybackRate = n.playbackRate;
    mediaAttributes.rr_mediaMuted = n.muted;
    mediaAttributes.rr_mediaLoop = n.loop;
    mediaAttributes.rr_mediaVolume = n.volume;
  }
  if (!newlyAddedElement) {
    if (n.scrollLeft) {
      attributes.rr_scrollLeft = n.scrollLeft;
    }
    if (n.scrollTop) {
      attributes.rr_scrollTop = n.scrollTop;
    }
  }
  if (needBlock) {
    const { width, height } = n.getBoundingClientRect();
    attributes = {
      class: attributes.class,
      rr_width: `${width}px`,
      rr_height: `${height}px`
    };
  }
  if (tagName === "iframe" && !keepIframeSrcFn(attributes.src)) {
    if (!n.contentDocument) {
      attributes.rr_src = attributes.src;
    }
    delete attributes.src;
  }
  let isCustomElement;
  try {
    if (customElements.get(tagName)) isCustomElement = true;
  } catch (e) {
  }
  return {
    type: NodeType.Element,
    tagName,
    attributes,
    childNodes: [],
    isSVG: isSVGElement(n) || void 0,
    needBlock,
    rootId,
    isCustom: isCustomElement
  };
}
function lowerIfExists(maybeAttr) {
  if (maybeAttr === void 0 || maybeAttr === null) {
    return "";
  } else {
    return maybeAttr.toLowerCase();
  }
}
function slimDOMExcluded(sn, slimDOMOptions) {
  if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
    return true;
  } else if (sn.type === NodeType.Element) {
    if (slimDOMOptions.script && // script tag
    (sn.tagName === "script" || // (module)preload link
    sn.tagName === "link" && (sn.attributes.rel === "preload" || sn.attributes.rel === "modulepreload") && sn.attributes.as === "script" || // prefetch link
    sn.tagName === "link" && sn.attributes.rel === "prefetch" && typeof sn.attributes.href === "string" && extractFileExtension(sn.attributes.href) === "js")) {
      return true;
    } else if (slimDOMOptions.headFavicon && (sn.tagName === "link" && sn.attributes.rel === "shortcut icon" || sn.tagName === "meta" && (lowerIfExists(sn.attributes.name).match(
      /^msapplication-tile(image|color)$/
    ) || lowerIfExists(sn.attributes.name) === "application-name" || lowerIfExists(sn.attributes.rel) === "icon" || lowerIfExists(sn.attributes.rel) === "apple-touch-icon" || lowerIfExists(sn.attributes.rel) === "shortcut icon"))) {
      return true;
    } else if (sn.tagName === "meta") {
      if (slimDOMOptions.headMetaDescKeywords && lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
        return true;
      } else if (slimDOMOptions.headMetaSocial && (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) || // og = opengraph (facebook)
      lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) || lowerIfExists(sn.attributes.name) === "pinterest")) {
        return true;
      } else if (slimDOMOptions.headMetaRobots && (lowerIfExists(sn.attributes.name) === "robots" || lowerIfExists(sn.attributes.name) === "googlebot" || lowerIfExists(sn.attributes.name) === "bingbot")) {
        return true;
      } else if (slimDOMOptions.headMetaHttpEquiv && sn.attributes["http-equiv"] !== void 0) {
        return true;
      } else if (slimDOMOptions.headMetaAuthorship && (lowerIfExists(sn.attributes.name) === "author" || lowerIfExists(sn.attributes.name) === "generator" || lowerIfExists(sn.attributes.name) === "framework" || lowerIfExists(sn.attributes.name) === "publisher" || lowerIfExists(sn.attributes.name) === "progid" || lowerIfExists(sn.attributes.property).match(/^article:/) || lowerIfExists(sn.attributes.property).match(/^product:/))) {
        return true;
      } else if (slimDOMOptions.headMetaVerification && (lowerIfExists(sn.attributes.name) === "google-site-verification" || lowerIfExists(sn.attributes.name) === "yandex-verification" || lowerIfExists(sn.attributes.name) === "csrf-token" || lowerIfExists(sn.attributes.name) === "p:domain_verify" || lowerIfExists(sn.attributes.name) === "verify-v1" || lowerIfExists(sn.attributes.name) === "verification" || lowerIfExists(sn.attributes.name) === "shopify-checkout-api-token")) {
        return true;
      }
    }
  }
  return false;
}
function serializeNodeWithId(n, options) {
  const {
    doc,
    mirror,
    blockClass,
    blockSelector,
    maskTextClass,
    maskTextSelector,
    skipChild = false,
    inlineStylesheet = true,
    maskInputOptions = {},
    maskTextFn,
    maskInputFn,
    slimDOMOptions,
    dataURLOptions = {},
    inlineImages = false,
    recordCanvas = false,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout = 5e3,
    onStylesheetLoad,
    stylesheetLoadTimeout = 5e3,
    keepIframeSrcFn = () => false,
    newlyAddedElement = false,
    cssCaptured = false
  } = options;
  let { needsMask } = options;
  let { preserveWhiteSpace = true } = options;
  if (!needsMask) {
    const checkAncestors = needsMask === void 0;
    needsMask = needMaskingText(
      n,
      maskTextClass,
      maskTextSelector,
      checkAncestors
    );
  }
  const _serializedNode = serializeNode(n, {
    doc,
    mirror,
    blockClass,
    blockSelector,
    needsMask,
    inlineStylesheet,
    maskInputOptions,
    maskTextFn,
    maskInputFn,
    dataURLOptions,
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement,
    cssCaptured
  });
  if (!_serializedNode) {
    console.warn(n, "not serialized");
    return null;
  }
  let id;
  if (mirror.hasNode(n)) {
    id = mirror.getId(n);
  } else if (slimDOMExcluded(_serializedNode, slimDOMOptions) || !preserveWhiteSpace && _serializedNode.type === NodeType.Text && !_serializedNode.textContent.replace(/^\s+|\s+$/gm, "").length) {
    id = IGNORED_NODE;
  } else {
    id = genId();
  }
  const serializedNode = Object.assign(_serializedNode, { id });
  mirror.add(n, serializedNode);
  if (id === IGNORED_NODE) {
    return null;
  }
  if (onSerialize) {
    onSerialize(n);
  }
  let recordChild = !skipChild;
  if (serializedNode.type === NodeType.Element) {
    recordChild = recordChild && !serializedNode.needBlock;
    delete serializedNode.needBlock;
    const shadowRootEl = index.shadowRoot(n);
    if (shadowRootEl && isNativeShadowDom(shadowRootEl)) {
      serializedNode.isShadowHost = true;
      if (shadowRootEl.adoptedStyleSheets.length > 0) {
        serializedNode.chromaticAdoptedStylesheets = shadowRootEl.adoptedStyleSheets.map(
          (stylesheet) => stringifyStylesheet(stylesheet)
        );
      }
    }
  }
  if ((serializedNode.type === NodeType.Document || serializedNode.type === NodeType.Element) && recordChild) {
    if (slimDOMOptions.headWhitespace && serializedNode.type === NodeType.Element && serializedNode.tagName === "head") {
      preserveWhiteSpace = false;
    }
    const bypassOptions = {
      doc,
      mirror,
      blockClass,
      blockSelector,
      needsMask,
      maskTextClass,
      maskTextSelector,
      skipChild,
      inlineStylesheet,
      maskInputOptions,
      maskTextFn,
      maskInputFn,
      slimDOMOptions,
      dataURLOptions,
      inlineImages,
      recordCanvas,
      preserveWhiteSpace,
      onSerialize,
      onIframeLoad,
      iframeLoadTimeout,
      onStylesheetLoad,
      stylesheetLoadTimeout,
      keepIframeSrcFn,
      cssCaptured: false
    };
    if (serializedNode.type === NodeType.Element && serializedNode.tagName === "textarea" && serializedNode.attributes.value !== void 0) ;
    else {
      if (serializedNode.type === NodeType.Element && serializedNode.attributes._cssText !== void 0 && typeof serializedNode.attributes._cssText === "string") {
        bypassOptions.cssCaptured = true;
      }
      for (const childN of Array.from(index.childNodes(n))) {
        const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
        if (serializedChildNode) {
          serializedNode.childNodes.push(serializedChildNode);
        }
      }
    }
    let shadowRootEl = null;
    if (isElement(n) && (shadowRootEl = index.shadowRoot(n))) {
      for (const childN of Array.from(index.childNodes(shadowRootEl))) {
        const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
        if (serializedChildNode) {
          isNativeShadowDom(shadowRootEl) && (serializedChildNode.isShadow = true);
          serializedNode.childNodes.push(serializedChildNode);
        }
      }
    }
  }
  const parent = index.parentNode(n);
  if (parent && isShadowRoot(parent) && isNativeShadowDom(parent)) {
    serializedNode.isShadow = true;
  }
  if (serializedNode.type === NodeType.Element && serializedNode.tagName === "iframe") {
    onceIframeLoaded(
      n,
      () => {
        const iframeDoc = n.contentDocument;
        if (iframeDoc && onIframeLoad) {
          const serializedIframeNode = serializeNodeWithId(iframeDoc, {
            doc: iframeDoc,
            mirror,
            blockClass,
            blockSelector,
            needsMask,
            maskTextClass,
            maskTextSelector,
            skipChild: false,
            inlineStylesheet,
            maskInputOptions,
            maskTextFn,
            maskInputFn,
            slimDOMOptions,
            dataURLOptions,
            inlineImages,
            recordCanvas,
            preserveWhiteSpace,
            onSerialize,
            onIframeLoad,
            iframeLoadTimeout,
            onStylesheetLoad,
            stylesheetLoadTimeout,
            keepIframeSrcFn
          });
          if (serializedIframeNode) {
            onIframeLoad(
              n,
              serializedIframeNode
            );
          }
        }
      },
      iframeLoadTimeout
    );
  }
  if (serializedNode.type === NodeType.Element && serializedNode.tagName === "link" && typeof serializedNode.attributes.rel === "string" && (serializedNode.attributes.rel === "stylesheet" || serializedNode.attributes.rel === "preload" && typeof serializedNode.attributes.href === "string" && extractFileExtension(serializedNode.attributes.href) === "css")) {
    onceStylesheetLoaded(
      n,
      () => {
        if (onStylesheetLoad) {
          const serializedLinkNode = serializeNodeWithId(n, {
            doc,
            mirror,
            blockClass,
            blockSelector,
            needsMask,
            maskTextClass,
            maskTextSelector,
            skipChild: false,
            inlineStylesheet,
            maskInputOptions,
            maskTextFn,
            maskInputFn,
            slimDOMOptions,
            dataURLOptions,
            inlineImages,
            recordCanvas,
            preserveWhiteSpace,
            onSerialize,
            onIframeLoad,
            iframeLoadTimeout,
            onStylesheetLoad,
            stylesheetLoadTimeout,
            keepIframeSrcFn
          });
          if (serializedLinkNode) {
            onStylesheetLoad(
              n,
              serializedLinkNode
            );
          }
        }
      },
      stylesheetLoadTimeout
    );
  }
  return serializedNode;
}
function snapshot(n, options) {
  const {
    mirror = new Mirror(),
    blockClass = "rr-block",
    blockSelector = null,
    maskTextClass = "rr-mask",
    maskTextSelector = null,
    inlineStylesheet = true,
    inlineImages = false,
    recordCanvas = false,
    maskAllInputs = false,
    maskTextFn,
    maskInputFn,
    slimDOM = false,
    dataURLOptions,
    preserveWhiteSpace,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout,
    onStylesheetLoad,
    stylesheetLoadTimeout,
    keepIframeSrcFn = () => false
  } = options || {};
  const maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true,
    password: true
  } : maskAllInputs === false ? {
    password: true
  } : maskAllInputs;
  const slimDOMOptions = slimDOM === true || slimDOM === "all" ? (
    // if true: set of sensible options that should not throw away any information
    {
      script: true,
      comment: true,
      headFavicon: true,
      headWhitespace: true,
      headMetaDescKeywords: slimDOM === "all",
      // destructive
      headMetaSocial: true,
      headMetaRobots: true,
      headMetaHttpEquiv: true,
      headMetaAuthorship: true,
      headMetaVerification: true
    }
  ) : slimDOM === false ? {} : slimDOM;
  return serializeNodeWithId(n, {
    doc: n,
    mirror,
    blockClass,
    blockSelector,
    maskTextClass,
    maskTextSelector,
    skipChild: false,
    inlineStylesheet,
    maskInputOptions,
    maskTextFn,
    maskInputFn,
    slimDOMOptions,
    dataURLOptions,
    inlineImages,
    recordCanvas,
    preserveWhiteSpace,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout,
    onStylesheetLoad,
    stylesheetLoadTimeout,
    keepIframeSrcFn,
    newlyAddedElement: false
  });
}
function visitSnapshot(node2, onVisit) {
  function walk(current) {
    onVisit(current);
    if (current.type === NodeType.Document || current.type === NodeType.Element) {
      current.childNodes.forEach(walk);
    }
  }
  walk(node2);
}
function cleanupSnapshot() {
  _id = 1;
}
const MEDIA_SELECTOR = /(max|min)-device-(width|height)/;
const MEDIA_SELECTOR_GLOBAL = new RegExp(MEDIA_SELECTOR.source, "g");
const mediaSelectorPlugin = {
  postcssPlugin: "postcss-custom-selectors",
  prepare() {
    return {
      postcssPlugin: "postcss-custom-selectors",
      AtRule: function(atrule) {
        if (atrule.params.match(MEDIA_SELECTOR_GLOBAL)) {
          atrule.params = atrule.params.replace(MEDIA_SELECTOR_GLOBAL, "$1-$2");
        }
      }
    };
  }
};
const pseudoClassPlugin = {
  postcssPlugin: "postcss-hover-classes",
  prepare: function() {
    const fixed = [];
    return {
      Rule: function(rule2) {
        if (fixed.indexOf(rule2) !== -1) {
          return;
        }
        fixed.push(rule2);
        rule2.selectors.forEach(function(selector) {
          if (!selector.includes(":")) {
            return;
          }
          const selectorParts = selector.replace(/\n/g, " ").split(" ");
          const pseudoedSelectorParts = [];
          selectorParts.forEach(function(selectorPart) {
            const pseudos = selectorPart.match(/::?([^:]+)/g);
            if (!pseudos) {
              pseudoedSelectorParts.push(selectorPart);
              return;
            }
            const baseSelector = selectorPart.substr(
              0,
              selectorPart.length - pseudos.join("").length
            );
            const classPseudos = pseudos.map(function(pseudo) {
              const pseudoToCheck = pseudo.replace(/\(.*/g, "");
              if (pseudoToCheck !== ":hover") {
                return pseudo;
              }
              if (pseudo.match(/^::/)) {
                return pseudo;
              }
              pseudo = pseudo.substr(1);
              pseudo = pseudo.replace(/\(/g, "\\(");
              pseudo = pseudo.replace(/\)/g, "\\)");
              return ".\\:" + pseudo;
            });
            pseudoedSelectorParts.push(baseSelector + classPseudos.join(""));
          });
          addSelector(pseudoedSelectorParts.join(" "));
          function addSelector(newSelector) {
            if (newSelector && newSelector !== selector) {
              rule2.selector += ",\n" + newSelector;
            }
          }
        });
      }
    };
  }
};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var picocolors_browser = { exports: {} };
var x = String;
var create = function() {
  return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x };
};
picocolors_browser.exports = create();
picocolors_browser.exports.createColors = create;
var picocolors_browserExports = picocolors_browser.exports;
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
let pico = picocolors_browserExports;
let terminalHighlight$1 = require$$2;
let CssSyntaxError$3 = class CssSyntaxError extends Error {
  constructor(message, line, column, source, file, plugin2) {
    super(message);
    this.name = "CssSyntaxError";
    this.reason = message;
    if (file) {
      this.file = file;
    }
    if (source) {
      this.source = source;
    }
    if (plugin2) {
      this.plugin = plugin2;
    }
    if (typeof line !== "undefined" && typeof column !== "undefined") {
      if (typeof line === "number") {
        this.line = line;
        this.column = column;
      } else {
        this.line = line.line;
        this.column = line.column;
        this.endLine = column.line;
        this.endColumn = column.column;
      }
    }
    this.setMessage();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CssSyntaxError);
    }
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "";
    this.message += this.file ? this.file : "<css input>";
    if (typeof this.line !== "undefined") {
      this.message += ":" + this.line + ":" + this.column;
    }
    this.message += ": " + this.reason;
  }
  showSourceCode(color) {
    if (!this.source) return "";
    let css = this.source;
    if (color == null) color = pico.isColorSupported;
    if (terminalHighlight$1) {
      if (color) css = terminalHighlight$1(css);
    }
    let lines = css.split(/\r?\n/);
    let start = Math.max(this.line - 3, 0);
    let end = Math.min(this.line + 2, lines.length);
    let maxWidth = String(end).length;
    let mark, aside;
    if (color) {
      let { bold, gray, red } = pico.createColors(true);
      mark = (text) => bold(red(text));
      aside = (text) => gray(text);
    } else {
      mark = aside = (str) => str;
    }
    return lines.slice(start, end).map((line, index2) => {
      let number = start + 1 + index2;
      let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
      if (number === this.line) {
        let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
      }
      return " " + aside(gutter) + line;
    }).join("\n");
  }
  toString() {
    let code = this.showSourceCode();
    if (code) {
      code = "\n\n" + code + "\n";
    }
    return this.name + ": " + this.message + code;
  }
};
var cssSyntaxError = CssSyntaxError$3;
CssSyntaxError$3.default = CssSyntaxError$3;
var symbols = {};
symbols.isClean = Symbol("isClean");
symbols.my = Symbol("my");
const DEFAULT_RAW = {
  after: "\n",
  beforeClose: "\n",
  beforeComment: "\n",
  beforeDecl: "\n",
  beforeOpen: " ",
  beforeRule: "\n",
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: false
};
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
let Stringifier$2 = class Stringifier {
  constructor(builder) {
    this.builder = builder;
  }
  atrule(node2, semicolon) {
    let name = "@" + node2.name;
    let params = node2.params ? this.rawValue(node2, "params") : "";
    if (typeof node2.raws.afterName !== "undefined") {
      name += node2.raws.afterName;
    } else if (params) {
      name += " ";
    }
    if (node2.nodes) {
      this.block(node2, name + params);
    } else {
      let end = (node2.raws.between || "") + (semicolon ? ";" : "");
      this.builder(name + params + end, node2);
    }
  }
  beforeAfter(node2, detect) {
    let value;
    if (node2.type === "decl") {
      value = this.raw(node2, null, "beforeDecl");
    } else if (node2.type === "comment") {
      value = this.raw(node2, null, "beforeComment");
    } else if (detect === "before") {
      value = this.raw(node2, null, "beforeRule");
    } else {
      value = this.raw(node2, null, "beforeClose");
    }
    let buf = node2.parent;
    let depth = 0;
    while (buf && buf.type !== "root") {
      depth += 1;
      buf = buf.parent;
    }
    if (value.includes("\n")) {
      let indent = this.raw(node2, null, "indent");
      if (indent.length) {
        for (let step = 0; step < depth; step++) value += indent;
      }
    }
    return value;
  }
  block(node2, start) {
    let between = this.raw(node2, "between", "beforeOpen");
    this.builder(start + between + "{", node2, "start");
    let after;
    if (node2.nodes && node2.nodes.length) {
      this.body(node2);
      after = this.raw(node2, "after");
    } else {
      after = this.raw(node2, "after", "emptyBody");
    }
    if (after) this.builder(after);
    this.builder("}", node2, "end");
  }
  body(node2) {
    let last = node2.nodes.length - 1;
    while (last > 0) {
      if (node2.nodes[last].type !== "comment") break;
      last -= 1;
    }
    let semicolon = this.raw(node2, "semicolon");
    for (let i = 0; i < node2.nodes.length; i++) {
      let child = node2.nodes[i];
      let before = this.raw(child, "before");
      if (before) this.builder(before);
      this.stringify(child, last !== i || semicolon);
    }
  }
  comment(node2) {
    let left = this.raw(node2, "left", "commentLeft");
    let right = this.raw(node2, "right", "commentRight");
    this.builder("/*" + left + node2.text + right + "*/", node2);
  }
  decl(node2, semicolon) {
    let between = this.raw(node2, "between", "colon");
    let string = node2.prop + between + this.rawValue(node2, "value");
    if (node2.important) {
      string += node2.raws.important || " !important";
    }
    if (semicolon) string += ";";
    this.builder(string, node2);
  }
  document(node2) {
    this.body(node2);
  }
  raw(node2, own, detect) {
    let value;
    if (!detect) detect = own;
    if (own) {
      value = node2.raws[own];
      if (typeof value !== "undefined") return value;
    }
    let parent = node2.parent;
    if (detect === "before") {
      if (!parent || parent.type === "root" && parent.first === node2) {
        return "";
      }
      if (parent && parent.type === "document") {
        return "";
      }
    }
    if (!parent) return DEFAULT_RAW[detect];
    let root2 = node2.root();
    if (!root2.rawCache) root2.rawCache = {};
    if (typeof root2.rawCache[detect] !== "undefined") {
      return root2.rawCache[detect];
    }
    if (detect === "before" || detect === "after") {
      return this.beforeAfter(node2, detect);
    } else {
      let method = "raw" + capitalize(detect);
      if (this[method]) {
        value = this[method](root2, node2);
      } else {
        root2.walk((i) => {
          value = i.raws[own];
          if (typeof value !== "undefined") return false;
        });
      }
    }
    if (typeof value === "undefined") value = DEFAULT_RAW[detect];
    root2.rawCache[detect] = value;
    return value;
  }
  rawBeforeClose(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length > 0) {
        if (typeof i.raws.after !== "undefined") {
          value = i.raws.after;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      }
    });
    if (value) value = value.replace(/\S/g, "");
    return value;
  }
  rawBeforeComment(root2, node2) {
    let value;
    root2.walkComments((i) => {
      if (typeof i.raws.before !== "undefined") {
        value = i.raws.before;
        if (value.includes("\n")) {
          value = value.replace(/[^\n]+$/, "");
        }
        return false;
      }
    });
    if (typeof value === "undefined") {
      value = this.raw(node2, null, "beforeDecl");
    } else if (value) {
      value = value.replace(/\S/g, "");
    }
    return value;
  }
  rawBeforeDecl(root2, node2) {
    let value;
    root2.walkDecls((i) => {
      if (typeof i.raws.before !== "undefined") {
        value = i.raws.before;
        if (value.includes("\n")) {
          value = value.replace(/[^\n]+$/, "");
        }
        return false;
      }
    });
    if (typeof value === "undefined") {
      value = this.raw(node2, null, "beforeRule");
    } else if (value) {
      value = value.replace(/\S/g, "");
    }
    return value;
  }
  rawBeforeOpen(root2) {
    let value;
    root2.walk((i) => {
      if (i.type !== "decl") {
        value = i.raws.between;
        if (typeof value !== "undefined") return false;
      }
    });
    return value;
  }
  rawBeforeRule(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && (i.parent !== root2 || root2.first !== i)) {
        if (typeof i.raws.before !== "undefined") {
          value = i.raws.before;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      }
    });
    if (value) value = value.replace(/\S/g, "");
    return value;
  }
  rawColon(root2) {
    let value;
    root2.walkDecls((i) => {
      if (typeof i.raws.between !== "undefined") {
        value = i.raws.between.replace(/[^\s:]/g, "");
        return false;
      }
    });
    return value;
  }
  rawEmptyBody(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length === 0) {
        value = i.raws.after;
        if (typeof value !== "undefined") return false;
      }
    });
    return value;
  }
  rawIndent(root2) {
    if (root2.raws.indent) return root2.raws.indent;
    let value;
    root2.walk((i) => {
      let p = i.parent;
      if (p && p !== root2 && p.parent && p.parent === root2) {
        if (typeof i.raws.before !== "undefined") {
          let parts = i.raws.before.split("\n");
          value = parts[parts.length - 1];
          value = value.replace(/\S/g, "");
          return false;
        }
      }
    });
    return value;
  }
  rawSemicolon(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length && i.last.type === "decl") {
        value = i.raws.semicolon;
        if (typeof value !== "undefined") return false;
      }
    });
    return value;
  }
  rawValue(node2, prop) {
    let value = node2[prop];
    let raw = node2.raws[prop];
    if (raw && raw.value === value) {
      return raw.raw;
    }
    return value;
  }
  root(node2) {
    this.body(node2);
    if (node2.raws.after) this.builder(node2.raws.after);
  }
  rule(node2) {
    this.block(node2, this.rawValue(node2, "selector"));
    if (node2.raws.ownSemicolon) {
      this.builder(node2.raws.ownSemicolon, node2, "end");
    }
  }
  stringify(node2, semicolon) {
    if (!this[node2.type]) {
      throw new Error(
        "Unknown AST node type " + node2.type + ". Maybe you need to change PostCSS stringifier."
      );
    }
    this[node2.type](node2, semicolon);
  }
};
var stringifier = Stringifier$2;
Stringifier$2.default = Stringifier$2;
let Stringifier$1 = stringifier;
function stringify$4(node2, builder) {
  let str = new Stringifier$1(builder);
  str.stringify(node2);
}
var stringify_1 = stringify$4;
stringify$4.default = stringify$4;
let { isClean: isClean$2, my: my$2 } = symbols;
let CssSyntaxError$2 = cssSyntaxError;
let Stringifier2 = stringifier;
let stringify$3 = stringify_1;
function cloneNode(obj, parent) {
  let cloned = new obj.constructor();
  for (let i in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
      continue;
    }
    if (i === "proxyCache") continue;
    let value = obj[i];
    let type = typeof value;
    if (i === "parent" && type === "object") {
      if (parent) cloned[i] = parent;
    } else if (i === "source") {
      cloned[i] = value;
    } else if (Array.isArray(value)) {
      cloned[i] = value.map((j) => cloneNode(j, cloned));
    } else {
      if (type === "object" && value !== null) value = cloneNode(value);
      cloned[i] = value;
    }
  }
  return cloned;
}
let Node$4 = class Node {
  constructor(defaults = {}) {
    this.raws = {};
    this[isClean$2] = false;
    this[my$2] = true;
    for (let name in defaults) {
      if (name === "nodes") {
        this.nodes = [];
        for (let node2 of defaults[name]) {
          if (typeof node2.clone === "function") {
            this.append(node2.clone());
          } else {
            this.append(node2);
          }
        }
      } else {
        this[name] = defaults[name];
      }
    }
  }
  addToError(error) {
    error.postcssNode = this;
    if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
      let s = this.source;
      error.stack = error.stack.replace(
        /\n\s{4}at /,
        `$&${s.input.from}:${s.start.line}:${s.start.column}$&`
      );
    }
    return error;
  }
  after(add) {
    this.parent.insertAfter(this, add);
    return this;
  }
  assign(overrides = {}) {
    for (let name in overrides) {
      this[name] = overrides[name];
    }
    return this;
  }
  before(add) {
    this.parent.insertBefore(this, add);
    return this;
  }
  cleanRaws(keepBetween) {
    delete this.raws.before;
    delete this.raws.after;
    if (!keepBetween) delete this.raws.between;
  }
  clone(overrides = {}) {
    let cloned = cloneNode(this);
    for (let name in overrides) {
      cloned[name] = overrides[name];
    }
    return cloned;
  }
  cloneAfter(overrides = {}) {
    let cloned = this.clone(overrides);
    this.parent.insertAfter(this, cloned);
    return cloned;
  }
  cloneBefore(overrides = {}) {
    let cloned = this.clone(overrides);
    this.parent.insertBefore(this, cloned);
    return cloned;
  }
  error(message, opts = {}) {
    if (this.source) {
      let { end, start } = this.rangeBy(opts);
      return this.source.input.error(
        message,
        { column: start.column, line: start.line },
        { column: end.column, line: end.line },
        opts
      );
    }
    return new CssSyntaxError$2(message);
  }
  getProxyProcessor() {
    return {
      get(node2, prop) {
        if (prop === "proxyOf") {
          return node2;
        } else if (prop === "root") {
          return () => node2.root().toProxy();
        } else {
          return node2[prop];
        }
      },
      set(node2, prop, value) {
        if (node2[prop] === value) return true;
        node2[prop] = value;
        if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || /* c8 ignore next */
        prop === "text") {
          node2.markDirty();
        }
        return true;
      }
    };
  }
  markDirty() {
    if (this[isClean$2]) {
      this[isClean$2] = false;
      let next = this;
      while (next = next.parent) {
        next[isClean$2] = false;
      }
    }
  }
  next() {
    if (!this.parent) return void 0;
    let index2 = this.parent.index(this);
    return this.parent.nodes[index2 + 1];
  }
  positionBy(opts, stringRepresentation) {
    let pos = this.source.start;
    if (opts.index) {
      pos = this.positionInside(opts.index, stringRepresentation);
    } else if (opts.word) {
      stringRepresentation = this.toString();
      let index2 = stringRepresentation.indexOf(opts.word);
      if (index2 !== -1) pos = this.positionInside(index2, stringRepresentation);
    }
    return pos;
  }
  positionInside(index2, stringRepresentation) {
    let string = stringRepresentation || this.toString();
    let column = this.source.start.column;
    let line = this.source.start.line;
    for (let i = 0; i < index2; i++) {
      if (string[i] === "\n") {
        column = 1;
        line += 1;
      } else {
        column += 1;
      }
    }
    return { column, line };
  }
  prev() {
    if (!this.parent) return void 0;
    let index2 = this.parent.index(this);
    return this.parent.nodes[index2 - 1];
  }
  rangeBy(opts) {
    let start = {
      column: this.source.start.column,
      line: this.source.start.line
    };
    let end = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: start.column + 1,
      line: start.line
    };
    if (opts.word) {
      let stringRepresentation = this.toString();
      let index2 = stringRepresentation.indexOf(opts.word);
      if (index2 !== -1) {
        start = this.positionInside(index2, stringRepresentation);
        end = this.positionInside(index2 + opts.word.length, stringRepresentation);
      }
    } else {
      if (opts.start) {
        start = {
          column: opts.start.column,
          line: opts.start.line
        };
      } else if (opts.index) {
        start = this.positionInside(opts.index);
      }
      if (opts.end) {
        end = {
          column: opts.end.column,
          line: opts.end.line
        };
      } else if (typeof opts.endIndex === "number") {
        end = this.positionInside(opts.endIndex);
      } else if (opts.index) {
        end = this.positionInside(opts.index + 1);
      }
    }
    if (end.line < start.line || end.line === start.line && end.column <= start.column) {
      end = { column: start.column + 1, line: start.line };
    }
    return { end, start };
  }
  raw(prop, defaultType) {
    let str = new Stringifier2();
    return str.raw(this, prop, defaultType);
  }
  remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
    this.parent = void 0;
    return this;
  }
  replaceWith(...nodes) {
    if (this.parent) {
      let bookmark = this;
      let foundSelf = false;
      for (let node2 of nodes) {
        if (node2 === this) {
          foundSelf = true;
        } else if (foundSelf) {
          this.parent.insertAfter(bookmark, node2);
          bookmark = node2;
        } else {
          this.parent.insertBefore(bookmark, node2);
        }
      }
      if (!foundSelf) {
        this.remove();
      }
    }
    return this;
  }
  root() {
    let result2 = this;
    while (result2.parent && result2.parent.type !== "document") {
      result2 = result2.parent;
    }
    return result2;
  }
  toJSON(_, inputs) {
    let fixed = {};
    let emitInputs = inputs == null;
    inputs = inputs || /* @__PURE__ */ new Map();
    let inputsNextIndex = 0;
    for (let name in this) {
      if (!Object.prototype.hasOwnProperty.call(this, name)) {
        continue;
      }
      if (name === "parent" || name === "proxyCache") continue;
      let value = this[name];
      if (Array.isArray(value)) {
        fixed[name] = value.map((i) => {
          if (typeof i === "object" && i.toJSON) {
            return i.toJSON(null, inputs);
          } else {
            return i;
          }
        });
      } else if (typeof value === "object" && value.toJSON) {
        fixed[name] = value.toJSON(null, inputs);
      } else if (name === "source") {
        let inputId = inputs.get(value.input);
        if (inputId == null) {
          inputId = inputsNextIndex;
          inputs.set(value.input, inputsNextIndex);
          inputsNextIndex++;
        }
        fixed[name] = {
          end: value.end,
          inputId,
          start: value.start
        };
      } else {
        fixed[name] = value;
      }
    }
    if (emitInputs) {
      fixed.inputs = [...inputs.keys()].map((input2) => input2.toJSON());
    }
    return fixed;
  }
  toProxy() {
    if (!this.proxyCache) {
      this.proxyCache = new Proxy(this, this.getProxyProcessor());
    }
    return this.proxyCache;
  }
  toString(stringifier2 = stringify$3) {
    if (stringifier2.stringify) stringifier2 = stringifier2.stringify;
    let result2 = "";
    stringifier2(this, (i) => {
      result2 += i;
    });
    return result2;
  }
  warn(result2, text, opts) {
    let data = { node: this };
    for (let i in opts) data[i] = opts[i];
    return result2.warn(text, data);
  }
  get proxyOf() {
    return this;
  }
};
var node = Node$4;
Node$4.default = Node$4;
let Node$3 = node;
let Declaration$4 = class Declaration extends Node$3 {
  constructor(defaults) {
    if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") {
      defaults = { ...defaults, value: String(defaults.value) };
    }
    super(defaults);
    this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var declaration = Declaration$4;
Declaration$4.default = Declaration$4;
let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let customAlphabet = (alphabet, defaultSize = 21) => {
  return (size = defaultSize) => {
    let id = "";
    let i = size;
    while (i--) {
      id += alphabet[Math.random() * alphabet.length | 0];
    }
    return id;
  };
};
let nanoid$1 = (size = 21) => {
  let id = "";
  let i = size;
  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};
var nonSecure = { nanoid: nanoid$1, customAlphabet };
let { SourceMapConsumer: SourceMapConsumer$2, SourceMapGenerator: SourceMapGenerator$2 } = require$$2;
let { existsSync, readFileSync } = require$$2;
let { dirname: dirname$1, join } = require$$2;
function fromBase64(str) {
  if (Buffer) {
    return Buffer.from(str, "base64").toString();
  } else {
    return window.atob(str);
  }
}
let PreviousMap$2 = class PreviousMap {
  constructor(css, opts) {
    if (opts.map === false) return;
    this.loadAnnotation(css);
    this.inline = this.startWith(this.annotation, "data:");
    let prev = opts.map ? opts.map.prev : void 0;
    let text = this.loadMap(opts.from, prev);
    if (!this.mapFile && opts.from) {
      this.mapFile = opts.from;
    }
    if (this.mapFile) this.root = dirname$1(this.mapFile);
    if (text) this.text = text;
  }
  consumer() {
    if (!this.consumerCache) {
      this.consumerCache = new SourceMapConsumer$2(this.text);
    }
    return this.consumerCache;
  }
  decodeInline(text) {
    let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
    let baseUri = /^data:application\/json;base64,/;
    let charsetUri = /^data:application\/json;charset=utf-?8,/;
    let uri = /^data:application\/json,/;
    if (charsetUri.test(text) || uri.test(text)) {
      return decodeURIComponent(text.substr(RegExp.lastMatch.length));
    }
    if (baseCharsetUri.test(text) || baseUri.test(text)) {
      return fromBase64(text.substr(RegExp.lastMatch.length));
    }
    let encoding = text.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + encoding);
  }
  getAnnotationURL(sourceMapString) {
    return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(map) {
    if (typeof map !== "object") return false;
    return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
  }
  loadAnnotation(css) {
    let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
    if (!comments) return;
    let start = css.lastIndexOf(comments.pop());
    let end = css.indexOf("*/", start);
    if (start > -1 && end > -1) {
      this.annotation = this.getAnnotationURL(css.substring(start, end));
    }
  }
  loadFile(path) {
    this.root = dirname$1(path);
    if (existsSync(path)) {
      this.mapFile = path;
      return readFileSync(path, "utf-8").toString().trim();
    }
  }
  loadMap(file, prev) {
    if (prev === false) return false;
    if (prev) {
      if (typeof prev === "string") {
        return prev;
      } else if (typeof prev === "function") {
        let prevPath = prev(file);
        if (prevPath) {
          let map = this.loadFile(prevPath);
          if (!map) {
            throw new Error(
              "Unable to load previous source map: " + prevPath.toString()
            );
          }
          return map;
        }
      } else if (prev instanceof SourceMapConsumer$2) {
        return SourceMapGenerator$2.fromSourceMap(prev).toString();
      } else if (prev instanceof SourceMapGenerator$2) {
        return prev.toString();
      } else if (this.isMap(prev)) {
        return JSON.stringify(prev);
      } else {
        throw new Error(
          "Unsupported previous source map format: " + prev.toString()
        );
      }
    } else if (this.inline) {
      return this.decodeInline(this.annotation);
    } else if (this.annotation) {
      let map = this.annotation;
      if (file) map = join(dirname$1(file), map);
      return this.loadFile(map);
    }
  }
  startWith(string, start) {
    if (!string) return false;
    return string.substr(0, start.length) === start;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
};
var previousMap = PreviousMap$2;
PreviousMap$2.default = PreviousMap$2;
let { SourceMapConsumer: SourceMapConsumer$1, SourceMapGenerator: SourceMapGenerator$1 } = require$$2;
let { fileURLToPath, pathToFileURL: pathToFileURL$1 } = require$$2;
let { isAbsolute, resolve: resolve$1 } = require$$2;
let { nanoid } = nonSecure;
let terminalHighlight = require$$2;
let CssSyntaxError$1 = cssSyntaxError;
let PreviousMap$1 = previousMap;
let fromOffsetCache = Symbol("fromOffsetCache");
let sourceMapAvailable$1 = Boolean(SourceMapConsumer$1 && SourceMapGenerator$1);
let pathAvailable$1 = Boolean(resolve$1 && isAbsolute);
let Input$4 = class Input {
  constructor(css, opts = {}) {
    if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) {
      throw new Error(`PostCSS received ${css} instead of CSS string`);
    }
    this.css = css.toString();
    if (this.css[0] === "\uFEFF" || this.css[0] === "￾") {
      this.hasBOM = true;
      this.css = this.css.slice(1);
    } else {
      this.hasBOM = false;
    }
    if (opts.from) {
      if (!pathAvailable$1 || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) {
        this.file = opts.from;
      } else {
        this.file = resolve$1(opts.from);
      }
    }
    if (pathAvailable$1 && sourceMapAvailable$1) {
      let map = new PreviousMap$1(this.css, opts);
      if (map.text) {
        this.map = map;
        let file = map.consumer().file;
        if (!this.file && file) this.file = this.mapResolve(file);
      }
    }
    if (!this.file) {
      this.id = "<input css " + nanoid(6) + ">";
    }
    if (this.map) this.map.file = this.from;
  }
  error(message, line, column, opts = {}) {
    let result2, endLine, endColumn;
    if (line && typeof line === "object") {
      let start = line;
      let end = column;
      if (typeof start.offset === "number") {
        let pos = this.fromOffset(start.offset);
        line = pos.line;
        column = pos.col;
      } else {
        line = start.line;
        column = start.column;
      }
      if (typeof end.offset === "number") {
        let pos = this.fromOffset(end.offset);
        endLine = pos.line;
        endColumn = pos.col;
      } else {
        endLine = end.line;
        endColumn = end.column;
      }
    } else if (!column) {
      let pos = this.fromOffset(line);
      line = pos.line;
      column = pos.col;
    }
    let origin = this.origin(line, column, endLine, endColumn);
    if (origin) {
      result2 = new CssSyntaxError$1(
        message,
        origin.endLine === void 0 ? origin.line : { column: origin.column, line: origin.line },
        origin.endLine === void 0 ? origin.column : { column: origin.endColumn, line: origin.endLine },
        origin.source,
        origin.file,
        opts.plugin
      );
    } else {
      result2 = new CssSyntaxError$1(
        message,
        endLine === void 0 ? line : { column, line },
        endLine === void 0 ? column : { column: endColumn, line: endLine },
        this.css,
        this.file,
        opts.plugin
      );
    }
    result2.input = { column, endColumn, endLine, line, source: this.css };
    if (this.file) {
      if (pathToFileURL$1) {
        result2.input.url = pathToFileURL$1(this.file).toString();
      }
      result2.input.file = this.file;
    }
    return result2;
  }
  fromOffset(offset) {
    let lastLine, lineToIndex;
    if (!this[fromOffsetCache]) {
      let lines = this.css.split("\n");
      lineToIndex = new Array(lines.length);
      let prevIndex = 0;
      for (let i = 0, l = lines.length; i < l; i++) {
        lineToIndex[i] = prevIndex;
        prevIndex += lines[i].length + 1;
      }
      this[fromOffsetCache] = lineToIndex;
    } else {
      lineToIndex = this[fromOffsetCache];
    }
    lastLine = lineToIndex[lineToIndex.length - 1];
    let min = 0;
    if (offset >= lastLine) {
      min = lineToIndex.length - 1;
    } else {
      let max = lineToIndex.length - 2;
      let mid;
      while (min < max) {
        mid = min + (max - min >> 1);
        if (offset < lineToIndex[mid]) {
          max = mid - 1;
        } else if (offset >= lineToIndex[mid + 1]) {
          min = mid + 1;
        } else {
          min = mid;
          break;
        }
      }
    }
    return {
      col: offset - lineToIndex[min] + 1,
      line: min + 1
    };
  }
  mapResolve(file) {
    if (/^\w+:\/\//.test(file)) {
      return file;
    }
    return resolve$1(this.map.consumer().sourceRoot || this.map.root || ".", file);
  }
  origin(line, column, endLine, endColumn) {
    if (!this.map) return false;
    let consumer = this.map.consumer();
    let from = consumer.originalPositionFor({ column, line });
    if (!from.source) return false;
    let to;
    if (typeof endLine === "number") {
      to = consumer.originalPositionFor({ column: endColumn, line: endLine });
    }
    let fromUrl;
    if (isAbsolute(from.source)) {
      fromUrl = pathToFileURL$1(from.source);
    } else {
      fromUrl = new URL(
        from.source,
        this.map.consumer().sourceRoot || pathToFileURL$1(this.map.mapFile)
      );
    }
    let result2 = {
      column: from.column,
      endColumn: to && to.column,
      endLine: to && to.line,
      line: from.line,
      url: fromUrl.toString()
    };
    if (fromUrl.protocol === "file:") {
      if (fileURLToPath) {
        result2.file = fileURLToPath(fromUrl);
      } else {
        throw new Error(`file: protocol is not available in this PostCSS build`);
      }
    }
    let source = consumer.sourceContentFor(from.source);
    if (source) result2.source = source;
    return result2;
  }
  toJSON() {
    let json = {};
    for (let name of ["hasBOM", "css", "file", "id"]) {
      if (this[name] != null) {
        json[name] = this[name];
      }
    }
    if (this.map) {
      json.map = { ...this.map };
      if (json.map.consumerCache) {
        json.map.consumerCache = void 0;
      }
    }
    return json;
  }
  get from() {
    return this.file || this.id;
  }
};
var input = Input$4;
Input$4.default = Input$4;
if (terminalHighlight && terminalHighlight.registerInput) {
  terminalHighlight.registerInput(Input$4);
}
let { SourceMapConsumer, SourceMapGenerator } = require$$2;
let { dirname, relative, resolve, sep } = require$$2;
let { pathToFileURL } = require$$2;
let Input$3 = input;
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(dirname && resolve && relative && sep);
let MapGenerator$2 = class MapGenerator {
  constructor(stringify2, root2, opts, cssString) {
    this.stringify = stringify2;
    this.mapOpts = opts.map || {};
    this.root = root2;
    this.opts = opts;
    this.css = cssString;
    this.originalCSS = cssString;
    this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
    this.memoizedFileURLs = /* @__PURE__ */ new Map();
    this.memoizedPaths = /* @__PURE__ */ new Map();
    this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  addAnnotation() {
    let content;
    if (this.isInline()) {
      content = "data:application/json;base64," + this.toBase64(this.map.toString());
    } else if (typeof this.mapOpts.annotation === "string") {
      content = this.mapOpts.annotation;
    } else if (typeof this.mapOpts.annotation === "function") {
      content = this.mapOpts.annotation(this.opts.to, this.root);
    } else {
      content = this.outputFile() + ".map";
    }
    let eol = "\n";
    if (this.css.includes("\r\n")) eol = "\r\n";
    this.css += eol + "/*# sourceMappingURL=" + content + " */";
  }
  applyPrevMaps() {
    for (let prev of this.previous()) {
      let from = this.toUrl(this.path(prev.file));
      let root2 = prev.root || dirname(prev.file);
      let map;
      if (this.mapOpts.sourcesContent === false) {
        map = new SourceMapConsumer(prev.text);
        if (map.sourcesContent) {
          map.sourcesContent = null;
        }
      } else {
        map = prev.consumer();
      }
      this.map.applySourceMap(map, from, this.toUrl(this.path(root2)));
    }
  }
  clearAnnotation() {
    if (this.mapOpts.annotation === false) return;
    if (this.root) {
      let node2;
      for (let i = this.root.nodes.length - 1; i >= 0; i--) {
        node2 = this.root.nodes[i];
        if (node2.type !== "comment") continue;
        if (node2.text.indexOf("# sourceMappingURL=") === 0) {
          this.root.removeChild(i);
        }
      }
    } else if (this.css) {
      this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, "");
    }
  }
  generate() {
    this.clearAnnotation();
    if (pathAvailable && sourceMapAvailable && this.isMap()) {
      return this.generateMap();
    } else {
      let result2 = "";
      this.stringify(this.root, (i) => {
        result2 += i;
      });
      return [result2];
    }
  }
  generateMap() {
    if (this.root) {
      this.generateString();
    } else if (this.previous().length === 1) {
      let prev = this.previous()[0].consumer();
      prev.file = this.outputFile();
      this.map = SourceMapGenerator.fromSourceMap(prev, {
        ignoreInvalidMapping: true
      });
    } else {
      this.map = new SourceMapGenerator({
        file: this.outputFile(),
        ignoreInvalidMapping: true
      });
      this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    }
    if (this.isSourcesContent()) this.setSourcesContent();
    if (this.root && this.previous().length > 0) this.applyPrevMaps();
    if (this.isAnnotation()) this.addAnnotation();
    if (this.isInline()) {
      return [this.css];
    } else {
      return [this.css, this.map];
    }
  }
  generateString() {
    this.css = "";
    this.map = new SourceMapGenerator({
      file: this.outputFile(),
      ignoreInvalidMapping: true
    });
    let line = 1;
    let column = 1;
    let noSource = "<no source>";
    let mapping = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    };
    let lines, last;
    this.stringify(this.root, (str, node2, type) => {
      this.css += str;
      if (node2 && type !== "end") {
        mapping.generated.line = line;
        mapping.generated.column = column - 1;
        if (node2.source && node2.source.start) {
          mapping.source = this.sourcePath(node2);
          mapping.original.line = node2.source.start.line;
          mapping.original.column = node2.source.start.column - 1;
          this.map.addMapping(mapping);
        } else {
          mapping.source = noSource;
          mapping.original.line = 1;
          mapping.original.column = 0;
          this.map.addMapping(mapping);
        }
      }
      lines = str.match(/\n/g);
      if (lines) {
        line += lines.length;
        last = str.lastIndexOf("\n");
        column = str.length - last;
      } else {
        column += str.length;
      }
      if (node2 && type !== "start") {
        let p = node2.parent || { raws: {} };
        let childless = node2.type === "decl" || node2.type === "atrule" && !node2.nodes;
        if (!childless || node2 !== p.last || p.raws.semicolon) {
          if (node2.source && node2.source.end) {
            mapping.source = this.sourcePath(node2);
            mapping.original.line = node2.source.end.line;
            mapping.original.column = node2.source.end.column - 1;
            mapping.generated.line = line;
            mapping.generated.column = column - 2;
            this.map.addMapping(mapping);
          } else {
            mapping.source = noSource;
            mapping.original.line = 1;
            mapping.original.column = 0;
            mapping.generated.line = line;
            mapping.generated.column = column - 1;
            this.map.addMapping(mapping);
          }
        }
      }
    });
  }
  isAnnotation() {
    if (this.isInline()) {
      return true;
    }
    if (typeof this.mapOpts.annotation !== "undefined") {
      return this.mapOpts.annotation;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.annotation);
    }
    return true;
  }
  isInline() {
    if (typeof this.mapOpts.inline !== "undefined") {
      return this.mapOpts.inline;
    }
    let annotation = this.mapOpts.annotation;
    if (typeof annotation !== "undefined" && annotation !== true) {
      return false;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.inline);
    }
    return true;
  }
  isMap() {
    if (typeof this.opts.map !== "undefined") {
      return !!this.opts.map;
    }
    return this.previous().length > 0;
  }
  isSourcesContent() {
    if (typeof this.mapOpts.sourcesContent !== "undefined") {
      return this.mapOpts.sourcesContent;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.withContent());
    }
    return true;
  }
  outputFile() {
    if (this.opts.to) {
      return this.path(this.opts.to);
    } else if (this.opts.from) {
      return this.path(this.opts.from);
    } else {
      return "to.css";
    }
  }
  path(file) {
    if (this.mapOpts.absolute) return file;
    if (file.charCodeAt(0) === 60) return file;
    if (/^\w+:\/\//.test(file)) return file;
    let cached = this.memoizedPaths.get(file);
    if (cached) return cached;
    let from = this.opts.to ? dirname(this.opts.to) : ".";
    if (typeof this.mapOpts.annotation === "string") {
      from = dirname(resolve(from, this.mapOpts.annotation));
    }
    let path = relative(from, file);
    this.memoizedPaths.set(file, path);
    return path;
  }
  previous() {
    if (!this.previousMaps) {
      this.previousMaps = [];
      if (this.root) {
        this.root.walk((node2) => {
          if (node2.source && node2.source.input.map) {
            let map = node2.source.input.map;
            if (!this.previousMaps.includes(map)) {
              this.previousMaps.push(map);
            }
          }
        });
      } else {
        let input2 = new Input$3(this.originalCSS, this.opts);
        if (input2.map) this.previousMaps.push(input2.map);
      }
    }
    return this.previousMaps;
  }
  setSourcesContent() {
    let already = {};
    if (this.root) {
      this.root.walk((node2) => {
        if (node2.source) {
          let from = node2.source.input.from;
          if (from && !already[from]) {
            already[from] = true;
            let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
            this.map.setSourceContent(fromUrl, node2.source.input.css);
          }
        }
      });
    } else if (this.css) {
      let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(from, this.css);
    }
  }
  sourcePath(node2) {
    if (this.mapOpts.from) {
      return this.toUrl(this.mapOpts.from);
    } else if (this.usesFileUrls) {
      return this.toFileUrl(node2.source.input.from);
    } else {
      return this.toUrl(this.path(node2.source.input.from));
    }
  }
  toBase64(str) {
    if (Buffer) {
      return Buffer.from(str).toString("base64");
    } else {
      return window.btoa(unescape(encodeURIComponent(str)));
    }
  }
  toFileUrl(path) {
    let cached = this.memoizedFileURLs.get(path);
    if (cached) return cached;
    if (pathToFileURL) {
      let fileURL = pathToFileURL(path).toString();
      this.memoizedFileURLs.set(path, fileURL);
      return fileURL;
    } else {
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
    }
  }
  toUrl(path) {
    let cached = this.memoizedURLs.get(path);
    if (cached) return cached;
    if (sep === "\\") {
      path = path.replace(/\\/g, "/");
    }
    let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
    this.memoizedURLs.set(path, url);
    return url;
  }
};
var mapGenerator = MapGenerator$2;
let Node$2 = node;
let Comment$4 = class Comment extends Node$2 {
  constructor(defaults) {
    super(defaults);
    this.type = "comment";
  }
};
var comment = Comment$4;
Comment$4.default = Comment$4;
let { isClean: isClean$1, my: my$1 } = symbols;
let Declaration$3 = declaration;
let Comment$3 = comment;
let Node$1 = node;
let parse$4, Rule$4, AtRule$4, Root$6;
function cleanSource(nodes) {
  return nodes.map((i) => {
    if (i.nodes) i.nodes = cleanSource(i.nodes);
    delete i.source;
    return i;
  });
}
function markDirtyUp(node2) {
  node2[isClean$1] = false;
  if (node2.proxyOf.nodes) {
    for (let i of node2.proxyOf.nodes) {
      markDirtyUp(i);
    }
  }
}
let Container$7 = class Container extends Node$1 {
  append(...children) {
    for (let child of children) {
      let nodes = this.normalize(child, this.last);
      for (let node2 of nodes) this.proxyOf.nodes.push(node2);
    }
    this.markDirty();
    return this;
  }
  cleanRaws(keepBetween) {
    super.cleanRaws(keepBetween);
    if (this.nodes) {
      for (let node2 of this.nodes) node2.cleanRaws(keepBetween);
    }
  }
  each(callback) {
    if (!this.proxyOf.nodes) return void 0;
    let iterator = this.getIterator();
    let index2, result2;
    while (this.indexes[iterator] < this.proxyOf.nodes.length) {
      index2 = this.indexes[iterator];
      result2 = callback(this.proxyOf.nodes[index2], index2);
      if (result2 === false) break;
      this.indexes[iterator] += 1;
    }
    delete this.indexes[iterator];
    return result2;
  }
  every(condition) {
    return this.nodes.every(condition);
  }
  getIterator() {
    if (!this.lastEach) this.lastEach = 0;
    if (!this.indexes) this.indexes = {};
    this.lastEach += 1;
    let iterator = this.lastEach;
    this.indexes[iterator] = 0;
    return iterator;
  }
  getProxyProcessor() {
    return {
      get(node2, prop) {
        if (prop === "proxyOf") {
          return node2;
        } else if (!node2[prop]) {
          return node2[prop];
        } else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) {
          return (...args) => {
            return node2[prop](
              ...args.map((i) => {
                if (typeof i === "function") {
                  return (child, index2) => i(child.toProxy(), index2);
                } else {
                  return i;
                }
              })
            );
          };
        } else if (prop === "every" || prop === "some") {
          return (cb) => {
            return node2[prop](
              (child, ...other) => cb(child.toProxy(), ...other)
            );
          };
        } else if (prop === "root") {
          return () => node2.root().toProxy();
        } else if (prop === "nodes") {
          return node2.nodes.map((i) => i.toProxy());
        } else if (prop === "first" || prop === "last") {
          return node2[prop].toProxy();
        } else {
          return node2[prop];
        }
      },
      set(node2, prop, value) {
        if (node2[prop] === value) return true;
        node2[prop] = value;
        if (prop === "name" || prop === "params" || prop === "selector") {
          node2.markDirty();
        }
        return true;
      }
    };
  }
  index(child) {
    if (typeof child === "number") return child;
    if (child.proxyOf) child = child.proxyOf;
    return this.proxyOf.nodes.indexOf(child);
  }
  insertAfter(exist, add) {
    let existIndex = this.index(exist);
    let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
    existIndex = this.index(exist);
    for (let node2 of nodes) this.proxyOf.nodes.splice(existIndex + 1, 0, node2);
    let index2;
    for (let id in this.indexes) {
      index2 = this.indexes[id];
      if (existIndex < index2) {
        this.indexes[id] = index2 + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  insertBefore(exist, add) {
    let existIndex = this.index(exist);
    let type = existIndex === 0 ? "prepend" : false;
    let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
    existIndex = this.index(exist);
    for (let node2 of nodes) this.proxyOf.nodes.splice(existIndex, 0, node2);
    let index2;
    for (let id in this.indexes) {
      index2 = this.indexes[id];
      if (existIndex <= index2) {
        this.indexes[id] = index2 + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  normalize(nodes, sample) {
    if (typeof nodes === "string") {
      nodes = cleanSource(parse$4(nodes).nodes);
    } else if (typeof nodes === "undefined") {
      nodes = [];
    } else if (Array.isArray(nodes)) {
      nodes = nodes.slice(0);
      for (let i of nodes) {
        if (i.parent) i.parent.removeChild(i, "ignore");
      }
    } else if (nodes.type === "root" && this.type !== "document") {
      nodes = nodes.nodes.slice(0);
      for (let i of nodes) {
        if (i.parent) i.parent.removeChild(i, "ignore");
      }
    } else if (nodes.type) {
      nodes = [nodes];
    } else if (nodes.prop) {
      if (typeof nodes.value === "undefined") {
        throw new Error("Value field is missed in node creation");
      } else if (typeof nodes.value !== "string") {
        nodes.value = String(nodes.value);
      }
      nodes = [new Declaration$3(nodes)];
    } else if (nodes.selector) {
      nodes = [new Rule$4(nodes)];
    } else if (nodes.name) {
      nodes = [new AtRule$4(nodes)];
    } else if (nodes.text) {
      nodes = [new Comment$3(nodes)];
    } else {
      throw new Error("Unknown node type in node creation");
    }
    let processed = nodes.map((i) => {
      if (!i[my$1]) Container.rebuild(i);
      i = i.proxyOf;
      if (i.parent) i.parent.removeChild(i);
      if (i[isClean$1]) markDirtyUp(i);
      if (typeof i.raws.before === "undefined") {
        if (sample && typeof sample.raws.before !== "undefined") {
          i.raws.before = sample.raws.before.replace(/\S/g, "");
        }
      }
      i.parent = this.proxyOf;
      return i;
    });
    return processed;
  }
  prepend(...children) {
    children = children.reverse();
    for (let child of children) {
      let nodes = this.normalize(child, this.first, "prepend").reverse();
      for (let node2 of nodes) this.proxyOf.nodes.unshift(node2);
      for (let id in this.indexes) {
        this.indexes[id] = this.indexes[id] + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  push(child) {
    child.parent = this;
    this.proxyOf.nodes.push(child);
    return this;
  }
  removeAll() {
    for (let node2 of this.proxyOf.nodes) node2.parent = void 0;
    this.proxyOf.nodes = [];
    this.markDirty();
    return this;
  }
  removeChild(child) {
    child = this.index(child);
    this.proxyOf.nodes[child].parent = void 0;
    this.proxyOf.nodes.splice(child, 1);
    let index2;
    for (let id in this.indexes) {
      index2 = this.indexes[id];
      if (index2 >= child) {
        this.indexes[id] = index2 - 1;
      }
    }
    this.markDirty();
    return this;
  }
  replaceValues(pattern, opts, callback) {
    if (!callback) {
      callback = opts;
      opts = {};
    }
    this.walkDecls((decl) => {
      if (opts.props && !opts.props.includes(decl.prop)) return;
      if (opts.fast && !decl.value.includes(opts.fast)) return;
      decl.value = decl.value.replace(pattern, callback);
    });
    this.markDirty();
    return this;
  }
  some(condition) {
    return this.nodes.some(condition);
  }
  walk(callback) {
    return this.each((child, i) => {
      let result2;
      try {
        result2 = callback(child, i);
      } catch (e) {
        throw child.addToError(e);
      }
      if (result2 !== false && child.walk) {
        result2 = child.walk(callback);
      }
      return result2;
    });
  }
  walkAtRules(name, callback) {
    if (!callback) {
      callback = name;
      return this.walk((child, i) => {
        if (child.type === "atrule") {
          return callback(child, i);
        }
      });
    }
    if (name instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "atrule" && name.test(child.name)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "atrule" && child.name === name) {
        return callback(child, i);
      }
    });
  }
  walkComments(callback) {
    return this.walk((child, i) => {
      if (child.type === "comment") {
        return callback(child, i);
      }
    });
  }
  walkDecls(prop, callback) {
    if (!callback) {
      callback = prop;
      return this.walk((child, i) => {
        if (child.type === "decl") {
          return callback(child, i);
        }
      });
    }
    if (prop instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "decl" && prop.test(child.prop)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "decl" && child.prop === prop) {
        return callback(child, i);
      }
    });
  }
  walkRules(selector, callback) {
    if (!callback) {
      callback = selector;
      return this.walk((child, i) => {
        if (child.type === "rule") {
          return callback(child, i);
        }
      });
    }
    if (selector instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "rule" && selector.test(child.selector)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "rule" && child.selector === selector) {
        return callback(child, i);
      }
    });
  }
  get first() {
    if (!this.proxyOf.nodes) return void 0;
    return this.proxyOf.nodes[0];
  }
  get last() {
    if (!this.proxyOf.nodes) return void 0;
    return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
};
Container$7.registerParse = (dependant) => {
  parse$4 = dependant;
};
Container$7.registerRule = (dependant) => {
  Rule$4 = dependant;
};
Container$7.registerAtRule = (dependant) => {
  AtRule$4 = dependant;
};
Container$7.registerRoot = (dependant) => {
  Root$6 = dependant;
};
var container = Container$7;
Container$7.default = Container$7;
Container$7.rebuild = (node2) => {
  if (node2.type === "atrule") {
    Object.setPrototypeOf(node2, AtRule$4.prototype);
  } else if (node2.type === "rule") {
    Object.setPrototypeOf(node2, Rule$4.prototype);
  } else if (node2.type === "decl") {
    Object.setPrototypeOf(node2, Declaration$3.prototype);
  } else if (node2.type === "comment") {
    Object.setPrototypeOf(node2, Comment$3.prototype);
  } else if (node2.type === "root") {
    Object.setPrototypeOf(node2, Root$6.prototype);
  }
  node2[my$1] = true;
  if (node2.nodes) {
    node2.nodes.forEach((child) => {
      Container$7.rebuild(child);
    });
  }
};
let Container$6 = container;
let LazyResult$4, Processor$3;
let Document$3 = class Document extends Container$6 {
  constructor(defaults) {
    super({ type: "document", ...defaults });
    if (!this.nodes) {
      this.nodes = [];
    }
  }
  toResult(opts = {}) {
    let lazy = new LazyResult$4(new Processor$3(), this, opts);
    return lazy.stringify();
  }
};
Document$3.registerLazyResult = (dependant) => {
  LazyResult$4 = dependant;
};
Document$3.registerProcessor = (dependant) => {
  Processor$3 = dependant;
};
var document$1 = Document$3;
Document$3.default = Document$3;
let printed = {};
var warnOnce$2 = function warnOnce(message) {
  if (printed[message]) return;
  printed[message] = true;
  if (typeof console !== "undefined" && console.warn) {
    console.warn(message);
  }
};
let Warning$2 = class Warning {
  constructor(text, opts = {}) {
    this.type = "warning";
    this.text = text;
    if (opts.node && opts.node.source) {
      let range = opts.node.rangeBy(opts);
      this.line = range.start.line;
      this.column = range.start.column;
      this.endLine = range.end.line;
      this.endColumn = range.end.column;
    }
    for (let opt in opts) this[opt] = opts[opt];
  }
  toString() {
    if (this.node) {
      return this.node.error(this.text, {
        index: this.index,
        plugin: this.plugin,
        word: this.word
      }).message;
    }
    if (this.plugin) {
      return this.plugin + ": " + this.text;
    }
    return this.text;
  }
};
var warning = Warning$2;
Warning$2.default = Warning$2;
let Warning$1 = warning;
let Result$3 = class Result {
  constructor(processor2, root2, opts) {
    this.processor = processor2;
    this.messages = [];
    this.root = root2;
    this.opts = opts;
    this.css = void 0;
    this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(text, opts = {}) {
    if (!opts.plugin) {
      if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
        opts.plugin = this.lastPlugin.postcssPlugin;
      }
    }
    let warning2 = new Warning$1(text, opts);
    this.messages.push(warning2);
    return warning2;
  }
  warnings() {
    return this.messages.filter((i) => i.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var result = Result$3;
Result$3.default = Result$3;
const SINGLE_QUOTE = "'".charCodeAt(0);
const DOUBLE_QUOTE = '"'.charCodeAt(0);
const BACKSLASH = "\\".charCodeAt(0);
const SLASH = "/".charCodeAt(0);
const NEWLINE = "\n".charCodeAt(0);
const SPACE = " ".charCodeAt(0);
const FEED = "\f".charCodeAt(0);
const TAB = "	".charCodeAt(0);
const CR = "\r".charCodeAt(0);
const OPEN_SQUARE = "[".charCodeAt(0);
const CLOSE_SQUARE = "]".charCodeAt(0);
const OPEN_PARENTHESES = "(".charCodeAt(0);
const CLOSE_PARENTHESES = ")".charCodeAt(0);
const OPEN_CURLY = "{".charCodeAt(0);
const CLOSE_CURLY = "}".charCodeAt(0);
const SEMICOLON = ";".charCodeAt(0);
const ASTERISK = "*".charCodeAt(0);
const COLON = ":".charCodeAt(0);
const AT = "@".charCodeAt(0);
const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
const RE_BAD_BRACKET = /.[\r\n"'(/\\]/;
const RE_HEX_ESCAPE = /[\da-f]/i;
var tokenize = function tokenizer(input2, options = {}) {
  let css = input2.css.valueOf();
  let ignore = options.ignoreErrors;
  let code, next, quote, content, escape;
  let escaped, escapePos, prev, n, currentToken;
  let length = css.length;
  let pos = 0;
  let buffer = [];
  let returned = [];
  function position() {
    return pos;
  }
  function unclosed(what) {
    throw input2.error("Unclosed " + what, pos);
  }
  function endOfFile() {
    return returned.length === 0 && pos >= length;
  }
  function nextToken(opts) {
    if (returned.length) return returned.pop();
    if (pos >= length) return;
    let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
    code = css.charCodeAt(pos);
    switch (code) {
      case NEWLINE:
      case SPACE:
      case TAB:
      case CR:
      case FEED: {
        next = pos;
        do {
          next += 1;
          code = css.charCodeAt(next);
        } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
        currentToken = ["space", css.slice(pos, next)];
        pos = next - 1;
        break;
      }
      case OPEN_SQUARE:
      case CLOSE_SQUARE:
      case OPEN_CURLY:
      case CLOSE_CURLY:
      case COLON:
      case SEMICOLON:
      case CLOSE_PARENTHESES: {
        let controlChar = String.fromCharCode(code);
        currentToken = [controlChar, controlChar, pos];
        break;
      }
      case OPEN_PARENTHESES: {
        prev = buffer.length ? buffer.pop()[1] : "";
        n = css.charCodeAt(pos + 1);
        if (prev === "url" && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
          next = pos;
          do {
            escaped = false;
            next = css.indexOf(")", next + 1);
            if (next === -1) {
              if (ignore || ignoreUnclosed) {
                next = pos;
                break;
              } else {
                unclosed("bracket");
              }
            }
            escapePos = next;
            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
              escapePos -= 1;
              escaped = !escaped;
            }
          } while (escaped);
          currentToken = ["brackets", css.slice(pos, next + 1), pos, next];
          pos = next;
        } else {
          next = css.indexOf(")", pos + 1);
          content = css.slice(pos, next + 1);
          if (next === -1 || RE_BAD_BRACKET.test(content)) {
            currentToken = ["(", "(", pos];
          } else {
            currentToken = ["brackets", content, pos, next];
            pos = next;
          }
        }
        break;
      }
      case SINGLE_QUOTE:
      case DOUBLE_QUOTE: {
        quote = code === SINGLE_QUOTE ? "'" : '"';
        next = pos;
        do {
          escaped = false;
          next = css.indexOf(quote, next + 1);
          if (next === -1) {
            if (ignore || ignoreUnclosed) {
              next = pos + 1;
              break;
            } else {
              unclosed("string");
            }
          }
          escapePos = next;
          while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
            escapePos -= 1;
            escaped = !escaped;
          }
        } while (escaped);
        currentToken = ["string", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      case AT: {
        RE_AT_END.lastIndex = pos + 1;
        RE_AT_END.test(css);
        if (RE_AT_END.lastIndex === 0) {
          next = css.length - 1;
        } else {
          next = RE_AT_END.lastIndex - 2;
        }
        currentToken = ["at-word", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      case BACKSLASH: {
        next = pos;
        escape = true;
        while (css.charCodeAt(next + 1) === BACKSLASH) {
          next += 1;
          escape = !escape;
        }
        code = css.charCodeAt(next + 1);
        if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
          next += 1;
          if (RE_HEX_ESCAPE.test(css.charAt(next))) {
            while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
              next += 1;
            }
            if (css.charCodeAt(next + 1) === SPACE) {
              next += 1;
            }
          }
        }
        currentToken = ["word", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      default: {
        if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
          next = css.indexOf("*/", pos + 2) + 1;
          if (next === 0) {
            if (ignore || ignoreUnclosed) {
              next = css.length;
            } else {
              unclosed("comment");
            }
          }
          currentToken = ["comment", css.slice(pos, next + 1), pos, next];
          pos = next;
        } else {
          RE_WORD_END.lastIndex = pos + 1;
          RE_WORD_END.test(css);
          if (RE_WORD_END.lastIndex === 0) {
            next = css.length - 1;
          } else {
            next = RE_WORD_END.lastIndex - 2;
          }
          currentToken = ["word", css.slice(pos, next + 1), pos, next];
          buffer.push(currentToken);
          pos = next;
        }
        break;
      }
    }
    pos++;
    return currentToken;
  }
  function back(token) {
    returned.push(token);
  }
  return {
    back,
    endOfFile,
    nextToken,
    position
  };
};
let Container$5 = container;
let AtRule$3 = class AtRule extends Container$5 {
  constructor(defaults) {
    super(defaults);
    this.type = "atrule";
  }
  append(...children) {
    if (!this.proxyOf.nodes) this.nodes = [];
    return super.append(...children);
  }
  prepend(...children) {
    if (!this.proxyOf.nodes) this.nodes = [];
    return super.prepend(...children);
  }
};
var atRule = AtRule$3;
AtRule$3.default = AtRule$3;
Container$5.registerAtRule(AtRule$3);
let Container$4 = container;
let LazyResult$3, Processor$2;
let Root$5 = class Root extends Container$4 {
  constructor(defaults) {
    super(defaults);
    this.type = "root";
    if (!this.nodes) this.nodes = [];
  }
  normalize(child, sample, type) {
    let nodes = super.normalize(child);
    if (sample) {
      if (type === "prepend") {
        if (this.nodes.length > 1) {
          sample.raws.before = this.nodes[1].raws.before;
        } else {
          delete sample.raws.before;
        }
      } else if (this.first !== sample) {
        for (let node2 of nodes) {
          node2.raws.before = sample.raws.before;
        }
      }
    }
    return nodes;
  }
  removeChild(child, ignore) {
    let index2 = this.index(child);
    if (!ignore && index2 === 0 && this.nodes.length > 1) {
      this.nodes[1].raws.before = this.nodes[index2].raws.before;
    }
    return super.removeChild(child);
  }
  toResult(opts = {}) {
    let lazy = new LazyResult$3(new Processor$2(), this, opts);
    return lazy.stringify();
  }
};
Root$5.registerLazyResult = (dependant) => {
  LazyResult$3 = dependant;
};
Root$5.registerProcessor = (dependant) => {
  Processor$2 = dependant;
};
var root = Root$5;
Root$5.default = Root$5;
Container$4.registerRoot(Root$5);
let list$2 = {
  comma(string) {
    return list$2.split(string, [","], true);
  },
  space(string) {
    let spaces = [" ", "\n", "	"];
    return list$2.split(string, spaces);
  },
  split(string, separators, last) {
    let array = [];
    let current = "";
    let split = false;
    let func = 0;
    let inQuote = false;
    let prevQuote = "";
    let escape = false;
    for (let letter of string) {
      if (escape) {
        escape = false;
      } else if (letter === "\\") {
        escape = true;
      } else if (inQuote) {
        if (letter === prevQuote) {
          inQuote = false;
        }
      } else if (letter === '"' || letter === "'") {
        inQuote = true;
        prevQuote = letter;
      } else if (letter === "(") {
        func += 1;
      } else if (letter === ")") {
        if (func > 0) func -= 1;
      } else if (func === 0) {
        if (separators.includes(letter)) split = true;
      }
      if (split) {
        if (current !== "") array.push(current.trim());
        current = "";
        split = false;
      } else {
        current += letter;
      }
    }
    if (last || current !== "") array.push(current.trim());
    return array;
  }
};
var list_1 = list$2;
list$2.default = list$2;
let Container$3 = container;
let list$1 = list_1;
let Rule$3 = class Rule extends Container$3 {
  constructor(defaults) {
    super(defaults);
    this.type = "rule";
    if (!this.nodes) this.nodes = [];
  }
  get selectors() {
    return list$1.comma(this.selector);
  }
  set selectors(values) {
    let match = this.selector ? this.selector.match(/,\s*/) : null;
    let sep2 = match ? match[0] : "," + this.raw("between", "beforeOpen");
    this.selector = values.join(sep2);
  }
};
var rule = Rule$3;
Rule$3.default = Rule$3;
Container$3.registerRule(Rule$3);
let Declaration$2 = declaration;
let tokenizer2 = tokenize;
let Comment$2 = comment;
let AtRule$2 = atRule;
let Root$4 = root;
let Rule$2 = rule;
const SAFE_COMMENT_NEIGHBOR = {
  empty: true,
  space: true
};
function findLastWithPosition(tokens) {
  for (let i = tokens.length - 1; i >= 0; i--) {
    let token = tokens[i];
    let pos = token[3] || token[2];
    if (pos) return pos;
  }
}
let Parser$1 = class Parser {
  constructor(input2) {
    this.input = input2;
    this.root = new Root$4();
    this.current = this.root;
    this.spaces = "";
    this.semicolon = false;
    this.createTokenizer();
    this.root.source = { input: input2, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(token) {
    let node2 = new AtRule$2();
    node2.name = token[1].slice(1);
    if (node2.name === "") {
      this.unnamedAtrule(node2, token);
    }
    this.init(node2, token[2]);
    let type;
    let prev;
    let shift;
    let last = false;
    let open = false;
    let params = [];
    let brackets = [];
    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken();
      type = token[0];
      if (type === "(" || type === "[") {
        brackets.push(type === "(" ? ")" : "]");
      } else if (type === "{" && brackets.length > 0) {
        brackets.push("}");
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop();
      }
      if (brackets.length === 0) {
        if (type === ";") {
          node2.source.end = this.getPosition(token[2]);
          node2.source.end.offset++;
          this.semicolon = true;
          break;
        } else if (type === "{") {
          open = true;
          break;
        } else if (type === "}") {
          if (params.length > 0) {
            shift = params.length - 1;
            prev = params[shift];
            while (prev && prev[0] === "space") {
              prev = params[--shift];
            }
            if (prev) {
              node2.source.end = this.getPosition(prev[3] || prev[2]);
              node2.source.end.offset++;
            }
          }
          this.end(token);
          break;
        } else {
          params.push(token);
        }
      } else {
        params.push(token);
      }
      if (this.tokenizer.endOfFile()) {
        last = true;
        break;
      }
    }
    node2.raws.between = this.spacesAndCommentsFromEnd(params);
    if (params.length) {
      node2.raws.afterName = this.spacesAndCommentsFromStart(params);
      this.raw(node2, "params", params);
      if (last) {
        token = params[params.length - 1];
        node2.source.end = this.getPosition(token[3] || token[2]);
        node2.source.end.offset++;
        this.spaces = node2.raws.between;
        node2.raws.between = "";
      }
    } else {
      node2.raws.afterName = "";
      node2.params = "";
    }
    if (open) {
      node2.nodes = [];
      this.current = node2;
    }
  }
  checkMissedSemicolon(tokens) {
    let colon = this.colon(tokens);
    if (colon === false) return;
    let founded = 0;
    let token;
    for (let j = colon - 1; j >= 0; j--) {
      token = tokens[j];
      if (token[0] !== "space") {
        founded += 1;
        if (founded === 2) break;
      }
    }
    throw this.input.error(
      "Missed semicolon",
      token[0] === "word" ? token[3] + 1 : token[2]
    );
  }
  colon(tokens) {
    let brackets = 0;
    let token, type, prev;
    for (let [i, element] of tokens.entries()) {
      token = element;
      type = token[0];
      if (type === "(") {
        brackets += 1;
      }
      if (type === ")") {
        brackets -= 1;
      }
      if (brackets === 0 && type === ":") {
        if (!prev) {
          this.doubleColon(token);
        } else if (prev[0] === "word" && prev[1] === "progid") {
          continue;
        } else {
          return i;
        }
      }
      prev = token;
    }
    return false;
  }
  comment(token) {
    let node2 = new Comment$2();
    this.init(node2, token[2]);
    node2.source.end = this.getPosition(token[3] || token[2]);
    node2.source.end.offset++;
    let text = token[1].slice(2, -2);
    if (/^\s*$/.test(text)) {
      node2.text = "";
      node2.raws.left = text;
      node2.raws.right = "";
    } else {
      let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
      node2.text = match[2];
      node2.raws.left = match[1];
      node2.raws.right = match[3];
    }
  }
  createTokenizer() {
    this.tokenizer = tokenizer2(this.input);
  }
  decl(tokens, customProperty) {
    let node2 = new Declaration$2();
    this.init(node2, tokens[0][2]);
    let last = tokens[tokens.length - 1];
    if (last[0] === ";") {
      this.semicolon = true;
      tokens.pop();
    }
    node2.source.end = this.getPosition(
      last[3] || last[2] || findLastWithPosition(tokens)
    );
    node2.source.end.offset++;
    while (tokens[0][0] !== "word") {
      if (tokens.length === 1) this.unknownWord(tokens);
      node2.raws.before += tokens.shift()[1];
    }
    node2.source.start = this.getPosition(tokens[0][2]);
    node2.prop = "";
    while (tokens.length) {
      let type = tokens[0][0];
      if (type === ":" || type === "space" || type === "comment") {
        break;
      }
      node2.prop += tokens.shift()[1];
    }
    node2.raws.between = "";
    let token;
    while (tokens.length) {
      token = tokens.shift();
      if (token[0] === ":") {
        node2.raws.between += token[1];
        break;
      } else {
        if (token[0] === "word" && /\w/.test(token[1])) {
          this.unknownWord([token]);
        }
        node2.raws.between += token[1];
      }
    }
    if (node2.prop[0] === "_" || node2.prop[0] === "*") {
      node2.raws.before += node2.prop[0];
      node2.prop = node2.prop.slice(1);
    }
    let firstSpaces = [];
    let next;
    while (tokens.length) {
      next = tokens[0][0];
      if (next !== "space" && next !== "comment") break;
      firstSpaces.push(tokens.shift());
    }
    this.precheckMissedSemicolon(tokens);
    for (let i = tokens.length - 1; i >= 0; i--) {
      token = tokens[i];
      if (token[1].toLowerCase() === "!important") {
        node2.important = true;
        let string = this.stringFrom(tokens, i);
        string = this.spacesFromEnd(tokens) + string;
        if (string !== " !important") node2.raws.important = string;
        break;
      } else if (token[1].toLowerCase() === "important") {
        let cache = tokens.slice(0);
        let str = "";
        for (let j = i; j > 0; j--) {
          let type = cache[j][0];
          if (str.trim().indexOf("!") === 0 && type !== "space") {
            break;
          }
          str = cache.pop()[1] + str;
        }
        if (str.trim().indexOf("!") === 0) {
          node2.important = true;
          node2.raws.important = str;
          tokens = cache;
        }
      }
      if (token[0] !== "space" && token[0] !== "comment") {
        break;
      }
    }
    let hasWord = tokens.some((i) => i[0] !== "space" && i[0] !== "comment");
    if (hasWord) {
      node2.raws.between += firstSpaces.map((i) => i[1]).join("");
      firstSpaces = [];
    }
    this.raw(node2, "value", firstSpaces.concat(tokens), customProperty);
    if (node2.value.includes(":") && !customProperty) {
      this.checkMissedSemicolon(tokens);
    }
  }
  doubleColon(token) {
    throw this.input.error(
      "Double colon",
      { offset: token[2] },
      { offset: token[2] + token[1].length }
    );
  }
  emptyRule(token) {
    let node2 = new Rule$2();
    this.init(node2, token[2]);
    node2.selector = "";
    node2.raws.between = "";
    this.current = node2;
  }
  end(token) {
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }
    this.semicolon = false;
    this.current.raws.after = (this.current.raws.after || "") + this.spaces;
    this.spaces = "";
    if (this.current.parent) {
      this.current.source.end = this.getPosition(token[2]);
      this.current.source.end.offset++;
      this.current = this.current.parent;
    } else {
      this.unexpectedClose(token);
    }
  }
  endFile() {
    if (this.current.parent) this.unclosedBlock();
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }
    this.current.raws.after = (this.current.raws.after || "") + this.spaces;
    this.root.source.end = this.getPosition(this.tokenizer.position());
  }
  freeSemicolon(token) {
    this.spaces += token[1];
    if (this.current.nodes) {
      let prev = this.current.nodes[this.current.nodes.length - 1];
      if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
        prev.raws.ownSemicolon = this.spaces;
        this.spaces = "";
      }
    }
  }
  // Helpers
  getPosition(offset) {
    let pos = this.input.fromOffset(offset);
    return {
      column: pos.col,
      line: pos.line,
      offset
    };
  }
  init(node2, offset) {
    this.current.push(node2);
    node2.source = {
      input: this.input,
      start: this.getPosition(offset)
    };
    node2.raws.before = this.spaces;
    this.spaces = "";
    if (node2.type !== "comment") this.semicolon = false;
  }
  other(start) {
    let end = false;
    let type = null;
    let colon = false;
    let bracket = null;
    let brackets = [];
    let customProperty = start[1].startsWith("--");
    let tokens = [];
    let token = start;
    while (token) {
      type = token[0];
      tokens.push(token);
      if (type === "(" || type === "[") {
        if (!bracket) bracket = token;
        brackets.push(type === "(" ? ")" : "]");
      } else if (customProperty && colon && type === "{") {
        if (!bracket) bracket = token;
        brackets.push("}");
      } else if (brackets.length === 0) {
        if (type === ";") {
          if (colon) {
            this.decl(tokens, customProperty);
            return;
          } else {
            break;
          }
        } else if (type === "{") {
          this.rule(tokens);
          return;
        } else if (type === "}") {
          this.tokenizer.back(tokens.pop());
          end = true;
          break;
        } else if (type === ":") {
          colon = true;
        }
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop();
        if (brackets.length === 0) bracket = null;
      }
      token = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile()) end = true;
    if (brackets.length > 0) this.unclosedBracket(bracket);
    if (end && colon) {
      if (!customProperty) {
        while (tokens.length) {
          token = tokens[tokens.length - 1][0];
          if (token !== "space" && token !== "comment") break;
          this.tokenizer.back(tokens.pop());
        }
      }
      this.decl(tokens, customProperty);
    } else {
      this.unknownWord(tokens);
    }
  }
  parse() {
    let token;
    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken();
      switch (token[0]) {
        case "space":
          this.spaces += token[1];
          break;
        case ";":
          this.freeSemicolon(token);
          break;
        case "}":
          this.end(token);
          break;
        case "comment":
          this.comment(token);
          break;
        case "at-word":
          this.atrule(token);
          break;
        case "{":
          this.emptyRule(token);
          break;
        default:
          this.other(token);
          break;
      }
    }
    this.endFile();
  }
  precheckMissedSemicolon() {
  }
  raw(node2, prop, tokens, customProperty) {
    let token, type;
    let length = tokens.length;
    let value = "";
    let clean = true;
    let next, prev;
    for (let i = 0; i < length; i += 1) {
      token = tokens[i];
      type = token[0];
      if (type === "space" && i === length - 1 && !customProperty) {
        clean = false;
      } else if (type === "comment") {
        prev = tokens[i - 1] ? tokens[i - 1][0] : "empty";
        next = tokens[i + 1] ? tokens[i + 1][0] : "empty";
        if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
          if (value.slice(-1) === ",") {
            clean = false;
          } else {
            value += token[1];
          }
        } else {
          clean = false;
        }
      } else {
        value += token[1];
      }
    }
    if (!clean) {
      let raw = tokens.reduce((all, i) => all + i[1], "");
      node2.raws[prop] = { raw, value };
    }
    node2[prop] = value;
  }
  rule(tokens) {
    tokens.pop();
    let node2 = new Rule$2();
    this.init(node2, tokens[0][2]);
    node2.raws.between = this.spacesAndCommentsFromEnd(tokens);
    this.raw(node2, "selector", tokens);
    this.current = node2;
  }
  spacesAndCommentsFromEnd(tokens) {
    let lastTokenType;
    let spaces = "";
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== "space" && lastTokenType !== "comment") break;
      spaces = tokens.pop()[1] + spaces;
    }
    return spaces;
  }
  // Errors
  spacesAndCommentsFromStart(tokens) {
    let next;
    let spaces = "";
    while (tokens.length) {
      next = tokens[0][0];
      if (next !== "space" && next !== "comment") break;
      spaces += tokens.shift()[1];
    }
    return spaces;
  }
  spacesFromEnd(tokens) {
    let lastTokenType;
    let spaces = "";
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== "space") break;
      spaces = tokens.pop()[1] + spaces;
    }
    return spaces;
  }
  stringFrom(tokens, from) {
    let result2 = "";
    for (let i = from; i < tokens.length; i++) {
      result2 += tokens[i][1];
    }
    tokens.splice(from, tokens.length - from);
    return result2;
  }
  unclosedBlock() {
    let pos = this.current.source.start;
    throw this.input.error("Unclosed block", pos.line, pos.column);
  }
  unclosedBracket(bracket) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: bracket[2] },
      { offset: bracket[2] + 1 }
    );
  }
  unexpectedClose(token) {
    throw this.input.error(
      "Unexpected }",
      { offset: token[2] },
      { offset: token[2] + 1 }
    );
  }
  unknownWord(tokens) {
    throw this.input.error(
      "Unknown word",
      { offset: tokens[0][2] },
      { offset: tokens[0][2] + tokens[0][1].length }
    );
  }
  unnamedAtrule(node2, token) {
    throw this.input.error(
      "At-rule without name",
      { offset: token[2] },
      { offset: token[2] + token[1].length }
    );
  }
};
var parser = Parser$1;
let Container$2 = container;
let Parser2 = parser;
let Input$2 = input;
function parse$3(css, opts) {
  let input2 = new Input$2(css, opts);
  let parser2 = new Parser2(input2);
  try {
    parser2.parse();
  } catch (e) {
    if (true) {
      if (e.name === "CssSyntaxError" && opts && opts.from) {
        if (/\.scss$/i.test(opts.from)) {
          e.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
        } else if (/\.sass/i.test(opts.from)) {
          e.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
        } else if (/\.less$/i.test(opts.from)) {
          e.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
        }
      }
    }
    throw e;
  }
  return parser2.root;
}
var parse_1 = parse$3;
parse$3.default = parse$3;
Container$2.registerParse(parse$3);
let { isClean, my } = symbols;
let MapGenerator$1 = mapGenerator;
let stringify$2 = stringify_1;
let Container$1 = container;
let Document$2 = document$1;
let warnOnce$1 = warnOnce$2;
let Result$2 = result;
let parse$2 = parse_1;
let Root$3 = root;
const TYPE_TO_CLASS_NAME = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
};
const PLUGIN_PROPS = {
  AtRule: true,
  AtRuleExit: true,
  Comment: true,
  CommentExit: true,
  Declaration: true,
  DeclarationExit: true,
  Document: true,
  DocumentExit: true,
  Once: true,
  OnceExit: true,
  postcssPlugin: true,
  prepare: true,
  Root: true,
  RootExit: true,
  Rule: true,
  RuleExit: true
};
const NOT_VISITORS = {
  Once: true,
  postcssPlugin: true,
  prepare: true
};
const CHILDREN = 0;
function isPromise(obj) {
  return typeof obj === "object" && typeof obj.then === "function";
}
function getEvents(node2) {
  let key = false;
  let type = TYPE_TO_CLASS_NAME[node2.type];
  if (node2.type === "decl") {
    key = node2.prop.toLowerCase();
  } else if (node2.type === "atrule") {
    key = node2.name.toLowerCase();
  }
  if (key && node2.append) {
    return [
      type,
      type + "-" + key,
      CHILDREN,
      type + "Exit",
      type + "Exit-" + key
    ];
  } else if (key) {
    return [type, type + "-" + key, type + "Exit", type + "Exit-" + key];
  } else if (node2.append) {
    return [type, CHILDREN, type + "Exit"];
  } else {
    return [type, type + "Exit"];
  }
}
function toStack(node2) {
  let events;
  if (node2.type === "document") {
    events = ["Document", CHILDREN, "DocumentExit"];
  } else if (node2.type === "root") {
    events = ["Root", CHILDREN, "RootExit"];
  } else {
    events = getEvents(node2);
  }
  return {
    eventIndex: 0,
    events,
    iterator: 0,
    node: node2,
    visitorIndex: 0,
    visitors: []
  };
}
function cleanMarks(node2) {
  node2[isClean] = false;
  if (node2.nodes) node2.nodes.forEach((i) => cleanMarks(i));
  return node2;
}
let postcss$2 = {};
let LazyResult$2 = class LazyResult {
  constructor(processor2, css, opts) {
    this.stringified = false;
    this.processed = false;
    let root2;
    if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) {
      root2 = cleanMarks(css);
    } else if (css instanceof LazyResult || css instanceof Result$2) {
      root2 = cleanMarks(css.root);
      if (css.map) {
        if (typeof opts.map === "undefined") opts.map = {};
        if (!opts.map.inline) opts.map.inline = false;
        opts.map.prev = css.map;
      }
    } else {
      let parser2 = parse$2;
      if (opts.syntax) parser2 = opts.syntax.parse;
      if (opts.parser) parser2 = opts.parser;
      if (parser2.parse) parser2 = parser2.parse;
      try {
        root2 = parser2(css, opts);
      } catch (error) {
        this.processed = true;
        this.error = error;
      }
      if (root2 && !root2[my]) {
        Container$1.rebuild(root2);
      }
    }
    this.result = new Result$2(processor2, root2, opts);
    this.helpers = { ...postcss$2, postcss: postcss$2, result: this.result };
    this.plugins = this.processor.plugins.map((plugin2) => {
      if (typeof plugin2 === "object" && plugin2.prepare) {
        return { ...plugin2, ...plugin2.prepare(this.result) };
      } else {
        return plugin2;
      }
    });
  }
  async() {
    if (this.error) return Promise.reject(this.error);
    if (this.processed) return Promise.resolve(this.result);
    if (!this.processing) {
      this.processing = this.runAsync();
    }
    return this.processing;
  }
  catch(onRejected) {
    return this.async().catch(onRejected);
  }
  finally(onFinally) {
    return this.async().then(onFinally, onFinally);
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(error, node2) {
    let plugin2 = this.result.lastPlugin;
    try {
      if (node2) node2.addToError(error);
      this.error = error;
      if (error.name === "CssSyntaxError" && !error.plugin) {
        error.plugin = plugin2.postcssPlugin;
        error.setMessage();
      } else if (plugin2.postcssVersion) {
        if (true) {
          let pluginName = plugin2.postcssPlugin;
          let pluginVer = plugin2.postcssVersion;
          let runtimeVer = this.result.processor.version;
          let a = pluginVer.split(".");
          let b = runtimeVer.split(".");
          if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
            console.error(
              "Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below."
            );
          }
        }
      }
    } catch (err) {
      if (console && console.error) console.error(err);
    }
    return error;
  }
  prepareVisitors() {
    this.listeners = {};
    let add = (plugin2, type, cb) => {
      if (!this.listeners[type]) this.listeners[type] = [];
      this.listeners[type].push([plugin2, cb]);
    };
    for (let plugin2 of this.plugins) {
      if (typeof plugin2 === "object") {
        for (let event in plugin2) {
          if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
            throw new Error(
              `Unknown event ${event} in ${plugin2.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          }
          if (!NOT_VISITORS[event]) {
            if (typeof plugin2[event] === "object") {
              for (let filter in plugin2[event]) {
                if (filter === "*") {
                  add(plugin2, event, plugin2[event][filter]);
                } else {
                  add(
                    plugin2,
                    event + "-" + filter.toLowerCase(),
                    plugin2[event][filter]
                  );
                }
              }
            } else if (typeof plugin2[event] === "function") {
              add(plugin2, event, plugin2[event]);
            }
          }
        }
      }
    }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let i = 0; i < this.plugins.length; i++) {
      let plugin2 = this.plugins[i];
      let promise = this.runOnRoot(plugin2);
      if (isPromise(promise)) {
        try {
          await promise;
        } catch (error) {
          throw this.handleError(error);
        }
      }
    }
    this.prepareVisitors();
    if (this.hasListener) {
      let root2 = this.result.root;
      while (!root2[isClean]) {
        root2[isClean] = true;
        let stack = [toStack(root2)];
        while (stack.length > 0) {
          let promise = this.visitTick(stack);
          if (isPromise(promise)) {
            try {
              await promise;
            } catch (e) {
              let node2 = stack[stack.length - 1].node;
              throw this.handleError(e, node2);
            }
          }
        }
      }
      if (this.listeners.OnceExit) {
        for (let [plugin2, visitor] of this.listeners.OnceExit) {
          this.result.lastPlugin = plugin2;
          try {
            if (root2.type === "document") {
              let roots = root2.nodes.map(
                (subRoot) => visitor(subRoot, this.helpers)
              );
              await Promise.all(roots);
            } else {
              await visitor(root2, this.helpers);
            }
          } catch (e) {
            throw this.handleError(e);
          }
        }
      }
    }
    this.processed = true;
    return this.stringify();
  }
  runOnRoot(plugin2) {
    this.result.lastPlugin = plugin2;
    try {
      if (typeof plugin2 === "object" && plugin2.Once) {
        if (this.result.root.type === "document") {
          let roots = this.result.root.nodes.map(
            (root2) => plugin2.Once(root2, this.helpers)
          );
          if (isPromise(roots[0])) {
            return Promise.all(roots);
          }
          return roots;
        }
        return plugin2.Once(this.result.root, this.helpers);
      } else if (typeof plugin2 === "function") {
        return plugin2(this.result.root, this.result);
      }
    } catch (error) {
      throw this.handleError(error);
    }
  }
  stringify() {
    if (this.error) throw this.error;
    if (this.stringified) return this.result;
    this.stringified = true;
    this.sync();
    let opts = this.result.opts;
    let str = stringify$2;
    if (opts.syntax) str = opts.syntax.stringify;
    if (opts.stringifier) str = opts.stringifier;
    if (str.stringify) str = str.stringify;
    let map = new MapGenerator$1(str, this.result.root, this.result.opts);
    let data = map.generate();
    this.result.css = data[0];
    this.result.map = data[1];
    return this.result;
  }
  sync() {
    if (this.error) throw this.error;
    if (this.processed) return this.result;
    this.processed = true;
    if (this.processing) {
      throw this.getAsyncError();
    }
    for (let plugin2 of this.plugins) {
      let promise = this.runOnRoot(plugin2);
      if (isPromise(promise)) {
        throw this.getAsyncError();
      }
    }
    this.prepareVisitors();
    if (this.hasListener) {
      let root2 = this.result.root;
      while (!root2[isClean]) {
        root2[isClean] = true;
        this.walkSync(root2);
      }
      if (this.listeners.OnceExit) {
        if (root2.type === "document") {
          for (let subRoot of root2.nodes) {
            this.visitSync(this.listeners.OnceExit, subRoot);
          }
        } else {
          this.visitSync(this.listeners.OnceExit, root2);
        }
      }
    }
    return this.result;
  }
  then(onFulfilled, onRejected) {
    if (true) {
      if (!("from" in this.opts)) {
        warnOnce$1(
          "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
        );
      }
    }
    return this.async().then(onFulfilled, onRejected);
  }
  toString() {
    return this.css;
  }
  visitSync(visitors, node2) {
    for (let [plugin2, visitor] of visitors) {
      this.result.lastPlugin = plugin2;
      let promise;
      try {
        promise = visitor(node2, this.helpers);
      } catch (e) {
        throw this.handleError(e, node2.proxyOf);
      }
      if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
        return true;
      }
      if (isPromise(promise)) {
        throw this.getAsyncError();
      }
    }
  }
  visitTick(stack) {
    let visit2 = stack[stack.length - 1];
    let { node: node2, visitors } = visit2;
    if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
      stack.pop();
      return;
    }
    if (visitors.length > 0 && visit2.visitorIndex < visitors.length) {
      let [plugin2, visitor] = visitors[visit2.visitorIndex];
      visit2.visitorIndex += 1;
      if (visit2.visitorIndex === visitors.length) {
        visit2.visitors = [];
        visit2.visitorIndex = 0;
      }
      this.result.lastPlugin = plugin2;
      try {
        return visitor(node2.toProxy(), this.helpers);
      } catch (e) {
        throw this.handleError(e, node2);
      }
    }
    if (visit2.iterator !== 0) {
      let iterator = visit2.iterator;
      let child;
      while (child = node2.nodes[node2.indexes[iterator]]) {
        node2.indexes[iterator] += 1;
        if (!child[isClean]) {
          child[isClean] = true;
          stack.push(toStack(child));
          return;
        }
      }
      visit2.iterator = 0;
      delete node2.indexes[iterator];
    }
    let events = visit2.events;
    while (visit2.eventIndex < events.length) {
      let event = events[visit2.eventIndex];
      visit2.eventIndex += 1;
      if (event === CHILDREN) {
        if (node2.nodes && node2.nodes.length) {
          node2[isClean] = true;
          visit2.iterator = node2.getIterator();
        }
        return;
      } else if (this.listeners[event]) {
        visit2.visitors = this.listeners[event];
        return;
      }
    }
    stack.pop();
  }
  walkSync(node2) {
    node2[isClean] = true;
    let events = getEvents(node2);
    for (let event of events) {
      if (event === CHILDREN) {
        if (node2.nodes) {
          node2.each((child) => {
            if (!child[isClean]) this.walkSync(child);
          });
        }
      } else {
        let visitors = this.listeners[event];
        if (visitors) {
          if (this.visitSync(visitors, node2.toProxy())) return;
        }
      }
    }
  }
  warnings() {
    return this.sync().warnings();
  }
  get content() {
    return this.stringify().content;
  }
  get css() {
    return this.stringify().css;
  }
  get map() {
    return this.stringify().map;
  }
  get messages() {
    return this.sync().messages;
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    return this.sync().root;
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
};
LazyResult$2.registerPostcss = (dependant) => {
  postcss$2 = dependant;
};
var lazyResult = LazyResult$2;
LazyResult$2.default = LazyResult$2;
Root$3.registerLazyResult(LazyResult$2);
Document$2.registerLazyResult(LazyResult$2);
let MapGenerator2 = mapGenerator;
let stringify$1 = stringify_1;
let warnOnce2 = warnOnce$2;
let parse$1 = parse_1;
const Result$1 = result;
let NoWorkResult$1 = class NoWorkResult {
  constructor(processor2, css, opts) {
    css = css.toString();
    this.stringified = false;
    this._processor = processor2;
    this._css = css;
    this._opts = opts;
    this._map = void 0;
    let root2;
    let str = stringify$1;
    this.result = new Result$1(this._processor, root2, this._opts);
    this.result.css = css;
    let self = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return self.root;
      }
    });
    let map = new MapGenerator2(str, root2, this._opts, css);
    if (map.isMap()) {
      let [generatedCSS, generatedMap] = map.generate();
      if (generatedCSS) {
        this.result.css = generatedCSS;
      }
      if (generatedMap) {
        this.result.map = generatedMap;
      }
    } else {
      map.clearAnnotation();
      this.result.css = map.css;
    }
  }
  async() {
    if (this.error) return Promise.reject(this.error);
    return Promise.resolve(this.result);
  }
  catch(onRejected) {
    return this.async().catch(onRejected);
  }
  finally(onFinally) {
    return this.async().then(onFinally, onFinally);
  }
  sync() {
    if (this.error) throw this.error;
    return this.result;
  }
  then(onFulfilled, onRejected) {
    if (true) {
      if (!("from" in this._opts)) {
        warnOnce2(
          "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
        );
      }
    }
    return this.async().then(onFulfilled, onRejected);
  }
  toString() {
    return this._css;
  }
  warnings() {
    return [];
  }
  get content() {
    return this.result.css;
  }
  get css() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get messages() {
    return [];
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    if (this._root) {
      return this._root;
    }
    let root2;
    let parser2 = parse$1;
    try {
      root2 = parser2(this._css, this._opts);
    } catch (error) {
      this.error = error;
    }
    if (this.error) {
      throw this.error;
    } else {
      this._root = root2;
      return root2;
    }
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
};
var noWorkResult = NoWorkResult$1;
NoWorkResult$1.default = NoWorkResult$1;
let NoWorkResult2 = noWorkResult;
let LazyResult$1 = lazyResult;
let Document$1 = document$1;
let Root$2 = root;
let Processor$1 = class Processor {
  constructor(plugins = []) {
    this.version = "8.4.38";
    this.plugins = this.normalize(plugins);
  }
  normalize(plugins) {
    let normalized = [];
    for (let i of plugins) {
      if (i.postcss === true) {
        i = i();
      } else if (i.postcss) {
        i = i.postcss;
      }
      if (typeof i === "object" && Array.isArray(i.plugins)) {
        normalized = normalized.concat(i.plugins);
      } else if (typeof i === "object" && i.postcssPlugin) {
        normalized.push(i);
      } else if (typeof i === "function") {
        normalized.push(i);
      } else if (typeof i === "object" && (i.parse || i.stringify)) {
        if (true) {
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
        }
      } else {
        throw new Error(i + " is not a PostCSS plugin");
      }
    }
    return normalized;
  }
  process(css, opts = {}) {
    if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) {
      return new NoWorkResult2(this, css, opts);
    } else {
      return new LazyResult$1(this, css, opts);
    }
  }
  use(plugin2) {
    this.plugins = this.plugins.concat(this.normalize([plugin2]));
    return this;
  }
};
var processor = Processor$1;
Processor$1.default = Processor$1;
Root$2.registerProcessor(Processor$1);
Document$1.registerProcessor(Processor$1);
let Declaration$1 = declaration;
let PreviousMap2 = previousMap;
let Comment$1 = comment;
let AtRule$1 = atRule;
let Input$1 = input;
let Root$1 = root;
let Rule$1 = rule;
function fromJSON$1(json, inputs) {
  if (Array.isArray(json)) return json.map((n) => fromJSON$1(n));
  let { inputs: ownInputs, ...defaults } = json;
  if (ownInputs) {
    inputs = [];
    for (let input2 of ownInputs) {
      let inputHydrated = { ...input2, __proto__: Input$1.prototype };
      if (inputHydrated.map) {
        inputHydrated.map = {
          ...inputHydrated.map,
          __proto__: PreviousMap2.prototype
        };
      }
      inputs.push(inputHydrated);
    }
  }
  if (defaults.nodes) {
    defaults.nodes = json.nodes.map((n) => fromJSON$1(n, inputs));
  }
  if (defaults.source) {
    let { inputId, ...source } = defaults.source;
    defaults.source = source;
    if (inputId != null) {
      defaults.source.input = inputs[inputId];
    }
  }
  if (defaults.type === "root") {
    return new Root$1(defaults);
  } else if (defaults.type === "decl") {
    return new Declaration$1(defaults);
  } else if (defaults.type === "rule") {
    return new Rule$1(defaults);
  } else if (defaults.type === "comment") {
    return new Comment$1(defaults);
  } else if (defaults.type === "atrule") {
    return new AtRule$1(defaults);
  } else {
    throw new Error("Unknown node type: " + json.type);
  }
}
var fromJSON_1 = fromJSON$1;
fromJSON$1.default = fromJSON$1;
let CssSyntaxError2 = cssSyntaxError;
let Declaration2 = declaration;
let LazyResult2 = lazyResult;
let Container2 = container;
let Processor2 = processor;
let stringify = stringify_1;
let fromJSON = fromJSON_1;
let Document2 = document$1;
let Warning2 = warning;
let Comment2 = comment;
let AtRule2 = atRule;
let Result2 = result;
let Input2 = input;
let parse = parse_1;
let list = list_1;
let Rule2 = rule;
let Root2 = root;
let Node2 = node;
function postcss(...plugins) {
  if (plugins.length === 1 && Array.isArray(plugins[0])) {
    plugins = plugins[0];
  }
  return new Processor2(plugins);
}
postcss.plugin = function plugin(name, initializer) {
  let warningPrinted = false;
  function creator(...args) {
    if (console && console.warn && !warningPrinted) {
      warningPrinted = true;
      console.warn(
        name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"
      );
      if (process.env.LANG && process.env.LANG.startsWith("cn")) {
        console.warn(
          name + ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226"
        );
      }
    }
    let transformer = initializer(...args);
    transformer.postcssPlugin = name;
    transformer.postcssVersion = new Processor2().version;
    return transformer;
  }
  let cache;
  Object.defineProperty(creator, "postcss", {
    get() {
      if (!cache) cache = creator();
      return cache;
    }
  });
  creator.process = function(css, processOpts, pluginOpts) {
    return postcss([creator(pluginOpts)]).process(css, processOpts);
  };
  return creator;
};
postcss.stringify = stringify;
postcss.parse = parse;
postcss.fromJSON = fromJSON;
postcss.list = list;
postcss.comment = (defaults) => new Comment2(defaults);
postcss.atRule = (defaults) => new AtRule2(defaults);
postcss.decl = (defaults) => new Declaration2(defaults);
postcss.rule = (defaults) => new Rule2(defaults);
postcss.root = (defaults) => new Root2(defaults);
postcss.document = (defaults) => new Document2(defaults);
postcss.CssSyntaxError = CssSyntaxError2;
postcss.Declaration = Declaration2;
postcss.Container = Container2;
postcss.Processor = Processor2;
postcss.Document = Document2;
postcss.Comment = Comment2;
postcss.Warning = Warning2;
postcss.AtRule = AtRule2;
postcss.Result = Result2;
postcss.Input = Input2;
postcss.Rule = Rule2;
postcss.Root = Root2;
postcss.Node = Node2;
LazyResult2.registerPostcss(postcss);
var postcss_1 = postcss;
postcss.default = postcss;
const postcss$1 = /* @__PURE__ */ getDefaultExportFromCjs(postcss_1);
postcss$1.stringify;
postcss$1.fromJSON;
postcss$1.plugin;
postcss$1.parse;
postcss$1.list;
postcss$1.document;
postcss$1.comment;
postcss$1.atRule;
postcss$1.rule;
postcss$1.decl;
postcss$1.root;
postcss$1.CssSyntaxError;
postcss$1.Declaration;
postcss$1.Container;
postcss$1.Processor;
postcss$1.Document;
postcss$1.Comment;
postcss$1.Warning;
postcss$1.AtRule;
postcss$1.Result;
postcss$1.Input;
postcss$1.Rule;
postcss$1.Root;
postcss$1.Node;
const tagMap = {
  script: "noscript",
  // camel case svg element tag names
  altglyph: "altGlyph",
  altglyphdef: "altGlyphDef",
  altglyphitem: "altGlyphItem",
  animatecolor: "animateColor",
  animatemotion: "animateMotion",
  animatetransform: "animateTransform",
  clippath: "clipPath",
  feblend: "feBlend",
  fecolormatrix: "feColorMatrix",
  fecomponenttransfer: "feComponentTransfer",
  fecomposite: "feComposite",
  feconvolvematrix: "feConvolveMatrix",
  fediffuselighting: "feDiffuseLighting",
  fedisplacementmap: "feDisplacementMap",
  fedistantlight: "feDistantLight",
  fedropshadow: "feDropShadow",
  feflood: "feFlood",
  fefunca: "feFuncA",
  fefuncb: "feFuncB",
  fefuncg: "feFuncG",
  fefuncr: "feFuncR",
  fegaussianblur: "feGaussianBlur",
  feimage: "feImage",
  femerge: "feMerge",
  femergenode: "feMergeNode",
  femorphology: "feMorphology",
  feoffset: "feOffset",
  fepointlight: "fePointLight",
  fespecularlighting: "feSpecularLighting",
  fespotlight: "feSpotLight",
  fetile: "feTile",
  feturbulence: "feTurbulence",
  foreignobject: "foreignObject",
  glyphref: "glyphRef",
  lineargradient: "linearGradient",
  radialgradient: "radialGradient"
};
function getTagName(n) {
  let tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;
  if (tagName === "link" && n.attributes._cssText) {
    tagName = "style";
  }
  return tagName;
}
function adaptCssForReplay(cssText, cache) {
  const cachedStyle = cache == null ? void 0 : cache.stylesWithHoverClass.get(cssText);
  if (cachedStyle) return cachedStyle;
  const ast = postcss$1([
    mediaSelectorPlugin,
    pseudoClassPlugin
  ]).process(cssText);
  const result2 = ast.css;
  cache == null ? void 0 : cache.stylesWithHoverClass.set(cssText, result2);
  return result2;
}
function createCache() {
  const stylesWithHoverClass = /* @__PURE__ */ new Map();
  return {
    stylesWithHoverClass
  };
}
function applyCssSplits(n, cssText, hackCss, cache) {
  const childTextNodes = [];
  for (const scn of n.childNodes) {
    if (scn.type === NodeType.Text) {
      childTextNodes.push(scn);
    }
  }
  const cssTextSplits = cssText.split("/* rr_split */");
  while (cssTextSplits.length > 1 && cssTextSplits.length > childTextNodes.length) {
    cssTextSplits.splice(-2, 2, cssTextSplits.slice(-2).join(""));
  }
  for (let i = 0; i < childTextNodes.length; i++) {
    const childTextNode = childTextNodes[i];
    const cssTextSection = cssTextSplits[i];
    if (childTextNode && cssTextSection) {
      childTextNode.textContent = hackCss ? adaptCssForReplay(cssTextSection, cache) : cssTextSection;
    }
  }
}
function buildStyleNode(n, styleEl, cssText, options) {
  const { doc, hackCss, cache } = options;
  if (n.childNodes.length) {
    applyCssSplits(n, cssText, hackCss, cache);
  } else {
    if (hackCss) {
      cssText = adaptCssForReplay(cssText, cache);
    }
    styleEl.appendChild(doc.createTextNode(cssText));
  }
}
function buildNode(n, options) {
  var _a, _b;
  const { doc, hackCss, cache } = options;
  switch (n.type) {
    case NodeType.Document:
      return doc.implementation.createDocument(null, "", null);
    case NodeType.DocumentType:
      return doc.implementation.createDocumentType(
        n.name || "html",
        n.publicId,
        n.systemId
      );
    case NodeType.Element: {
      const tagName = getTagName(n);
      let node2;
      if (n.isSVG) {
        node2 = doc.createElementNS("http://www.w3.org/2000/svg", tagName);
      } else {
        if (
          // If the tag name is a custom element name
          n.isCustom && // If the browser supports custom elements
          ((_a = doc.defaultView) == null ? void 0 : _a.customElements) && // If the custom element hasn't been defined yet
          !doc.defaultView.customElements.get(n.tagName)
        )
          doc.defaultView.customElements.define(
            n.tagName,
            class extends doc.defaultView.HTMLElement {
            }
          );
        node2 = doc.createElement(tagName);
      }
      const specialAttributes = {};
      for (const name in n.attributes) {
        if (!Object.prototype.hasOwnProperty.call(n.attributes, name)) {
          continue;
        }
        let value = n.attributes[name];
        if (tagName === "option" && name === "selected" && value === false) {
          continue;
        }
        if (value === null) {
          continue;
        }
        if (value === true) value = "";
        if (name.startsWith("rr_")) {
          specialAttributes[name] = value;
          continue;
        }
        if (typeof value !== "string") ;
        else if (tagName === "style" && name === "_cssText") {
          buildStyleNode(n, node2, value, options);
          continue;
        } else if (tagName === "textarea" && name === "value") {
          node2.appendChild(doc.createTextNode(value));
          n.childNodes = [];
          continue;
        }
        try {
          if (n.isSVG && name === "xlink:href") {
            node2.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              name,
              value.toString()
            );
          } else if (name === "onload" || name === "onclick" || name.substring(0, 7) === "onmouse") {
            node2.setAttribute("_" + name, value.toString());
          } else if (tagName === "meta" && n.attributes["http-equiv"] === "Content-Security-Policy" && name === "content") {
            node2.setAttribute("csp-content", value.toString());
            continue;
          } else if (tagName === "link" && (n.attributes.rel === "preload" || n.attributes.rel === "modulepreload") && n.attributes.as === "script") {
          } else if (tagName === "link" && n.attributes.rel === "prefetch" && typeof n.attributes.href === "string" && n.attributes.href.endsWith(".js")) {
          } else if (tagName === "img" && n.attributes.srcset && n.attributes.rr_dataURL) {
            node2.setAttribute(
              "rrweb-original-srcset",
              n.attributes.srcset
            );
          } else {
            node2.setAttribute(name, value.toString());
          }
        } catch (error) {
        }
      }
      for (const name in specialAttributes) {
        const value = specialAttributes[name];
        if (tagName === "canvas" && name === "rr_dataURL") {
          const image = doc.createElement("img");
          image.onload = () => {
            const ctx = node2.getContext("2d");
            if (ctx) {
              ctx.drawImage(image, 0, 0, image.width, image.height);
            }
          };
          image.src = value.toString();
          if (node2.RRNodeType)
            node2.rr_dataURL = value.toString();
        } else if (tagName === "img" && name === "rr_dataURL") {
          const image = node2;
          if (!image.currentSrc.startsWith("data:")) {
            image.setAttribute(
              "rrweb-original-src",
              n.attributes.src
            );
            image.src = value.toString();
          }
        }
        if (name === "rr_width") {
          node2.style.width = value.toString();
        } else if (name === "rr_height") {
          node2.style.height = value.toString();
        } else if (name === "rr_mediaCurrentTime" && typeof value === "number") {
          node2.currentTime = value;
        } else if (name === "rr_mediaState") {
          switch (value) {
            case "played":
              node2.play().catch((e) => console.warn("media playback error", e));
              break;
            case "paused":
              node2.pause();
              break;
          }
        } else if (name === "rr_mediaPlaybackRate" && typeof value === "number") {
          node2.playbackRate = value;
        } else if (name === "rr_mediaMuted" && typeof value === "boolean") {
          node2.muted = value;
        } else if (name === "rr_mediaLoop" && typeof value === "boolean") {
          node2.loop = value;
        } else if (name === "rr_mediaVolume" && typeof value === "number") {
          node2.volume = value;
        } else if (name === "rr_open_mode") {
          node2.setAttribute(
            "rr_open_mode",
            value
          );
        }
      }
      if (n.isShadowHost) {
        if (!node2.shadowRoot) {
          node2.attachShadow({ mode: "open" });
          (_b = n.chromaticAdoptedStylesheets) == null ? void 0 : _b.forEach(
            (chromaticAdoptedStylesheet) => {
              var _a2;
              const styleSheet = new CSSStyleSheet();
              styleSheet.replaceSync(chromaticAdoptedStylesheet);
              (_a2 = node2.shadowRoot) == null ? void 0 : _a2.adoptedStyleSheets.push(styleSheet);
            }
          );
        } else {
          while (node2.shadowRoot.firstChild) {
            node2.shadowRoot.removeChild(node2.shadowRoot.firstChild);
          }
        }
      }
      return node2;
    }
    case NodeType.Text:
      if (n.isStyle && hackCss) {
        return doc.createTextNode(adaptCssForReplay(n.textContent, cache));
      }
      return doc.createTextNode(n.textContent);
    case NodeType.CDATA:
      return doc.createCDATASection(n.textContent);
    case NodeType.Comment:
      return doc.createComment(n.textContent);
    default:
      return null;
  }
}
function buildNodeWithSN(n, options) {
  const {
    doc,
    mirror,
    skipChild = false,
    hackCss = true,
    afterAppend,
    cache
  } = options;
  if (mirror.has(n.id)) {
    const nodeInMirror = mirror.getNode(n.id);
    const meta = mirror.getMeta(nodeInMirror);
    if (isNodeMetaEqual(meta, n)) return mirror.getNode(n.id);
  }
  let node2 = buildNode(n, { doc, hackCss, cache });
  if (!node2) {
    return null;
  }
  if (n.rootId && mirror.getNode(n.rootId) !== doc) {
    mirror.replace(n.rootId, doc);
  }
  if (n.type === NodeType.Document) {
    doc.close();
    doc.open();
    if (n.compatMode === "BackCompat" && n.childNodes && n.childNodes[0].type !== NodeType.DocumentType) {
      if (n.childNodes[0].type === NodeType.Element && "xmlns" in n.childNodes[0].attributes && n.childNodes[0].attributes.xmlns === "http://www.w3.org/1999/xhtml") {
        doc.write(
          '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">'
        );
      } else {
        doc.write(
          '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">'
        );
      }
    }
    node2 = doc;
  }
  mirror.add(node2, n);
  if ((n.type === NodeType.Document || n.type === NodeType.Element) && !skipChild) {
    for (const childN of n.childNodes) {
      const childNode = buildNodeWithSN(childN, {
        doc,
        mirror,
        skipChild: false,
        hackCss,
        afterAppend,
        cache
      });
      if (!childNode) {
        console.warn("Failed to rebuild", childN);
        continue;
      }
      if (childN.isShadow && isElement(node2) && node2.shadowRoot) {
        node2.shadowRoot.appendChild(childNode);
      } else if (n.type === NodeType.Document && childN.type == NodeType.Element) {
        const htmlElement = childNode;
        let body = null;
        htmlElement.childNodes.forEach((child) => {
          if (child.nodeName === "BODY") body = child;
        });
        if (body) {
          htmlElement.removeChild(body);
          node2.appendChild(childNode);
          htmlElement.appendChild(body);
        } else {
          node2.appendChild(childNode);
        }
      } else {
        node2.appendChild(childNode);
      }
      if (afterAppend) {
        afterAppend(childNode, childN.id);
      }
    }
  }
  return node2;
}
function visit(mirror, onVisit) {
  function walk(node2) {
    onVisit(node2);
  }
  for (const id of mirror.getIds()) {
    if (mirror.has(id)) {
      walk(mirror.getNode(id));
    }
  }
}
function handleScroll(node2, mirror) {
  const n = mirror.getMeta(node2);
  if ((n == null ? void 0 : n.type) !== NodeType.Element) {
    return;
  }
  const el = node2;
  for (const name in n.attributes) {
    if (!(Object.prototype.hasOwnProperty.call(n.attributes, name) && name.startsWith("rr_"))) {
      continue;
    }
    const value = n.attributes[name];
    if (name === "rr_scrollLeft") {
      el.scrollLeft = value;
    }
    if (name === "rr_scrollTop") {
      el.scrollTop = value;
    }
  }
}
function rebuild(n, options) {
  const {
    doc,
    onVisit,
    hackCss = true,
    afterAppend,
    cache,
    mirror = new Mirror()
  } = options;
  const node2 = buildNodeWithSN(n, {
    doc,
    mirror,
    skipChild: false,
    hackCss,
    afterAppend,
    cache
  });
  visit(mirror, (visitedNode) => {
    if (onVisit) {
      onVisit(visitedNode);
    }
    handleScroll(visitedNode, mirror);
  });
  return node2;
}

//# sourceMappingURL=rrweb-snapshot.js.map


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./cypress/support/e2e.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands */ "./cypress/support/commands.ts");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_commands__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chromatic_com_cypress_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chromatic-com/cypress/support */ "./node_modules/@chromatic-com/cypress/dist/support.mjs");
// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// Import commands.js using ES2015 syntax:

// Alternatively you can use CommonJS syntax:
// require('./commands')
// cypress/support/e2e.js

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZTJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhEQUE4RDtBQUM5RCwrQ0FBK0M7QUFDL0MsK0NBQStDO0FBQy9DLEVBQUU7QUFDRix3REFBd0Q7QUFDeEQsa0NBQWtDO0FBQ2xDLEVBQUU7QUFDRix1REFBdUQ7QUFDdkQsK0NBQStDO0FBQy9DLHNDQUFzQztBQUN0QyxFQUFFO0FBQ0YsMEJBQTBCO0FBQzFCLHNDQUFzQztBQUN0Qyw4REFBOEQ7QUFFOUQsMENBQTBDO0FBQzFDLE9BQU8sWUFBWSxDQUFDO0FBRXBCLDZDQUE2QztBQUM3Qyx3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLE9BQU8sZ0NBQWdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gVGhpcyBleGFtcGxlIHN1cHBvcnQvZTJlLnRzIGlzIHByb2Nlc3NlZCBhbmRcbi8vIGxvYWRlZCBhdXRvbWF0aWNhbGx5IGJlZm9yZSB5b3VyIHRlc3QgZmlsZXMuXG4vL1xuLy8gVGhpcyBpcyBhIGdyZWF0IHBsYWNlIHRvIHB1dCBnbG9iYWwgY29uZmlndXJhdGlvbiBhbmRcbi8vIGJlaGF2aW9yIHRoYXQgbW9kaWZpZXMgQ3lwcmVzcy5cbi8vXG4vLyBZb3UgY2FuIGNoYW5nZSB0aGUgbG9jYXRpb24gb2YgdGhpcyBmaWxlIG9yIHR1cm4gb2ZmXG4vLyBhdXRvbWF0aWNhbGx5IHNlcnZpbmcgc3VwcG9ydCBmaWxlcyB3aXRoIHRoZVxuLy8gJ3N1cHBvcnRGaWxlJyBjb25maWd1cmF0aW9uIG9wdGlvbi5cbi8vXG4vLyBZb3UgY2FuIHJlYWQgbW9yZSBoZXJlOlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2NvbmZpZ3VyYXRpb25cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vIEltcG9ydCBjb21tYW5kcy5qcyB1c2luZyBFUzIwMTUgc3ludGF4OlxuaW1wb3J0IFwiLi9jb21tYW5kc1wiO1xuXG4vLyBBbHRlcm5hdGl2ZWx5IHlvdSBjYW4gdXNlIENvbW1vbkpTIHN5bnRheDpcbi8vIHJlcXVpcmUoJy4vY29tbWFuZHMnKVxuLy8gY3lwcmVzcy9zdXBwb3J0L2UyZS5qc1xuaW1wb3J0IFwiQGNocm9tYXRpYy1jb20vY3lwcmVzcy9zdXBwb3J0XCI7XG4iXX0=
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTJlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELEtBQUs7QUFDN0Q7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHVCQUF1QiwwQkFBMEIsS0FBSztBQUN4RjtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsd0JBQXdCLDBCQUEwQixLQUFLO0FBQzVGO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxLQUFLO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7Ozs7Ozs7Ozs7QUN0QzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCOzs7Ozs7Ozs7Ozs7OztBQ3ZMdUI7O0FBRXBELHdDQUF3Qyx5REFBeUQsTUFBTSxrRUFBUSxJQUFJLDBDQUEwQyxrQkFBa0IsMEJBQTBCLEdBQUcsRUFBRSxnQkFBZ0IsZ0dBQWdHLHlDQUF5Qyw0Q0FBNEMsSUFBSSxFQUFFLGVBQWUseURBQXlELDhDQUE4QyxTQUFTLGtFQUFRLElBQUksRUFBRSx5Q0FBeUMsa0JBQWtCLDJCQUEyQixnQ0FBZ0Msc0lBQXNJLGtDQUFrQywyQ0FBMkMsMkJBQTJCLDJCQUEyQiw2Q0FBNkMsK0RBQStELG1DQUFtQywyQ0FBMkMsa0NBQWtDLHlDQUF5Qyx5Q0FBeUMsdURBQXVELDBDQUEwQyx5REFBeUQsb0NBQW9DLDZDQUE2QyxxQ0FBcUMsZ0RBQWdELHFCQUFxQiw4RUFBOEUsOENBQThDLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDaHJEO0FBQ0E7Ozs7Ozs7Ozs7O0FDSlk7O0FBRVosa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMsVUFBVTtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVk7O0FBRVosZUFBZSxtQkFBTyxDQUFDLG9EQUFXO0FBQ2xDLGdCQUFnQixtQkFBTyxDQUFDLGdEQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIseUJBQXlCOztBQUV6QjtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLGlCQUFpQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxFQUFFO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGVBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxxQkFBcUIsV0FBVyxHQUFHLElBQUk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxnQkFBZ0IsV0FBVyxHQUFHLElBQUksS0FBSyxhQUFhO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0Qjs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLEtBQUssbURBQW1ELGNBQWM7QUFDekYsR0FBRztBQUNIO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE1BQU0sYUFBYSxTQUFTO0FBQ3REO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZ0JBQWdCO0FBQ3pCLGNBQWMsb0JBQW9CLEVBQUUsSUFBSTtBQUN4QztBQUNBLFlBQVksZ0JBQWdCLEVBQUUsSUFBSTtBQUNsQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsR0FBRyxTQUFTLEdBQUcsS0FBSyxxQkFBcUIsRUFBRSxFQUFFO0FBQ3BFLFFBQVE7QUFDUix5QkFBeUIsR0FBRyxLQUFLLHlCQUF5QixFQUFFLEVBQUU7QUFDOUQsbUJBQW1CLHlCQUF5QixFQUFFLEVBQUU7QUFDaEQ7QUFDQSxNQUFNO0FBQ04sb0JBQW9CLElBQUksRUFBRSxHQUFHLFNBQVMsSUFBSSxFQUFFLEVBQUU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLGNBQWMsU0FBUyxPQUFPO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFlBQVk7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDempFQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBVzs7QUFFcEI7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXOztBQUVwQjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLFdBQVc7O0FBRXBCO0FBQ0E7QUFDQSxTQUFTLFVBQVU7O0FBRW5CO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0EsOEVBQThFLDZEQUE2RDtBQUMzSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdCQUFnQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixJQUFJLEdBQUcsaUJBQWlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixJQUFJLEdBQUcsZUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx3REFBd0Q7QUFDdkc7QUFDQSxpQ0FBaUM7QUFDakMsdUNBQXVDLHNCQUFzQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsdUNBQXVDLDJCQUEyQjtBQUNsRTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEMsb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixXQUFXLEVBQUUsU0FBUyxFQUFFLFdBQVc7QUFDekQ7QUFDQTtBQUNBLHNCQUFzQixXQUFXLEVBQUUsU0FBUyxFQUFFLFdBQVc7QUFDekQ7QUFDQTtBQUNBLHNCQUFzQixXQUFXLEVBQUUsK0JBQStCLEVBQUUsV0FBVztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFdBQVc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0JBQW9CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLGtEQUFrRCxVQUFVO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNkNBQTZDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLHFDQUFxQyxTQUFTLFdBQVcsSUFBSTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QixvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixRQUFRLFlBQVk7QUFDcEIsUUFBUSw0QkFBNEI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDBEQUEwRCxJQUFJO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osMkNBQTJDLGFBQWE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3QkFBd0IsaUJBQWlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrQkFBK0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxFQUFFO0FBQzlDO0FBQ0E7QUFDQSxjQUFjLEVBQUU7QUFDaEIsYUFBYSxhQUFhLEdBQUcsYUFBYSxHQUFHLGVBQWU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0EsVUFBVSx3Q0FBd0M7QUFDbEQsVUFBVSxvQ0FBb0M7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLE1BQU0sbUZBQW1GO0FBQ3pGLE1BQU0sMkJBQTJCO0FBQ2pDLE1BQU0sMkJBQTJCO0FBQ2pDO0FBQ0EsTUFBTSxNQUFNO0FBQ1osV0FBVyxNQUFNO0FBQ2pCLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGVBQWU7QUFDakUsMkNBQTJDO0FBQzNDLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtRkFBbUY7QUFDekYsTUFBTSxnREFBZ0Q7QUFDdEQsTUFBTSxpQ0FBaUM7QUFDdkMsTUFBTSxTQUFTO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSwwQ0FBMEMsS0FBSztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCwwQ0FBMEM7QUFDOUYsc0RBQXNELGdEQUFnRDtBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0Esc0NBQXNDLGNBQWM7QUFDcEQsd0NBQXdDLGtDQUFrQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtDQUFrQztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0NBQXdDO0FBQzlDLE1BQU0sa0NBQWtDO0FBQ3hDLE1BQU0sZ0JBQWdCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6QyxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QyxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsTUFBTTtBQUNkLGFBQWEsTUFBTTtBQUNuQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0JBQStCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtCQUErQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxPQUFPO0FBQzNDLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0JBQXdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9CQUFvQjtBQUM1Qix3QkFBd0I7QUFDeEIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0JBQW9CO0FBQzlCO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFFBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtCQUFrQjtBQUMxQixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQStDO0FBQ3ZEO0FBQ0Esd0JBQXdCO0FBQ3hCLFFBQVE7QUFDUix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBO0FBQ0EsVUFBVSxvQkFBb0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvQkFBb0I7QUFDNUIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLFFBQVEsa0JBQWtCO0FBQzFCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQkFBc0I7QUFDOUIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtCQUFrQjtBQUMxQixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBLGdGQUFnRjtBQUNoRixVQUFVO0FBQ1YsZ0ZBQWdGO0FBQ2hGLFVBQVU7QUFDVixnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGNBQWM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLFlBQVksSUFBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixPQUFPLEtBQUssc0JBQXNCLDJCQUEyQix3QkFBd0I7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdCQUF3QjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSLFlBQVksSUFBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUNBQWlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUscUJBQXFCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPLGFBQWEsT0FBTztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzQkFBc0I7QUFDaEM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzQkFBc0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixxQkFBcUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQXNDRTtBQUNGOzs7Ozs7O1VDNXlLQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29CO0FBQ3BCO0FBQ0E7QUFDQTtBQUN3QztBQUN4QywyQ0FBMkMsMi9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnV4dC1hcHAvLi9jeXByZXNzL3N1cHBvcnQvY29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vbnV4dC1hcHAvLi4vLi4vLi4vLi4vLmNhY2hlL0N5cHJlc3MvMTMuMTUuMC9DeXByZXNzL3Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9udXh0LWFwcC8uL25vZGVfbW9kdWxlcy9AY2hyb21hdGljLWNvbS9jeXByZXNzL2Rpc3Qvc3VwcG9ydC5tanMiLCJ3ZWJwYWNrOi8vbnV4dC1hcHAvLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL251eHQtYXBwLy4vbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9udXh0LWFwcC8uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwid2VicGFjazovL251eHQtYXBwLy4vbm9kZV9tb2R1bGVzL0BjaHJvbWF1aS9ycndlYi1zbmFwc2hvdC9kaXN0L3Jyd2ViLXNuYXBzaG90LmpzIiwid2VicGFjazovL251eHQtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL251eHQtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL251eHQtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9udXh0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL251eHQtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbnV4dC1hcHAvLi9jeXByZXNzL3N1cHBvcnQvZTJlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBUaGlzIGV4YW1wbGUgY29tbWFuZHMudHMgc2hvd3MgeW91IGhvdyB0b1xuLy8gY3JlYXRlIHZhcmlvdXMgY3VzdG9tIGNvbW1hbmRzIGFuZCBvdmVyd3JpdGVcbi8vIGV4aXN0aW5nIGNvbW1hbmRzLlxuLy9cbi8vIEZvciBtb3JlIGNvbXByZWhlbnNpdmUgZXhhbXBsZXMgb2YgY3VzdG9tXG4vLyBjb21tYW5kcyBwbGVhc2UgcmVhZCBtb3JlIGhlcmU6XG4vLyBodHRwczovL29uLmN5cHJlc3MuaW8vY3VzdG9tLWNvbW1hbmRzXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy9cbi8vXG4vLyAtLSBUaGlzIGlzIGEgcGFyZW50IGNvbW1hbmQgLS1cbi8vIEN5cHJlc3MuQ29tbWFuZHMuYWRkKCdsb2dpbicsIChlbWFpbCwgcGFzc3dvcmQpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBjaGlsZCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZCgnZHJhZycsIHsgcHJldlN1YmplY3Q6ICdlbGVtZW50J30sIChzdWJqZWN0LCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuLy9cbi8vXG4vLyAtLSBUaGlzIGlzIGEgZHVhbCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZCgnZGlzbWlzcycsIHsgcHJldlN1YmplY3Q6ICdvcHRpb25hbCd9LCAoc3ViamVjdCwgb3B0aW9ucykgPT4geyAuLi4gfSlcbi8vXG4vL1xuLy8gLS0gVGhpcyB3aWxsIG92ZXJ3cml0ZSBhbiBleGlzdGluZyBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLm92ZXJ3cml0ZSgndmlzaXQnLCAob3JpZ2luYWxGbiwgdXJsLCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuLy9cbi8vIGRlY2xhcmUgZ2xvYmFsIHtcbi8vICAgbmFtZXNwYWNlIEN5cHJlc3Mge1xuLy8gICAgIGludGVyZmFjZSBDaGFpbmFibGUge1xuLy8gICAgICAgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IENoYWluYWJsZTx2b2lkPlxuLy8gICAgICAgZHJhZyhzdWJqZWN0OiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJ0aWFsPFR5cGVPcHRpb25zPik6IENoYWluYWJsZTxFbGVtZW50PlxuLy8gICAgICAgZGlzbWlzcyhzdWJqZWN0OiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJ0aWFsPFR5cGVPcHRpb25zPik6IENoYWluYWJsZTxFbGVtZW50PlxuLy8gICAgICAgdmlzaXQob3JpZ2luYWxGbjogQ29tbWFuZE9yaWdpbmFsRm4sIHVybDogc3RyaW5nLCBvcHRpb25zOiBQYXJ0aWFsPFZpc2l0T3B0aW9ucz4pOiBDaGFpbmFibGU8RWxlbWVudD5cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXRiV0Z1WkhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpqYjIxdFlXNWtjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNhVU5CUVdsRE8wRkJRMnBETEd0RVFVRnJSRHRCUVVOc1JDdzBRMEZCTkVNN1FVRkROVU1zSzBOQlFTdERPMEZCUXk5RExIRkNRVUZ4UWp0QlFVTnlRaXhGUVVGRk8wRkJRMFlzTkVOQlFUUkRPMEZCUXpWRExHdERRVUZyUXp0QlFVTnNReXgzUTBGQmQwTTdRVUZEZUVNc2EwUkJRV3RFTzBGQlEyeEVMRVZCUVVVN1FVRkRSaXhGUVVGRk8wRkJRMFlzYVVOQlFXbERPMEZCUTJwRExEaEVRVUU0UkR0QlFVTTVSQ3hGUVVGRk8wRkJRMFlzUlVGQlJUdEJRVU5HTEdkRFFVRm5RenRCUVVOb1F5eDVSa0ZCZVVZN1FVRkRla1lzUlVGQlJUdEJRVU5HTEVWQlFVVTdRVUZEUml3clFrRkJLMEk3UVVGREwwSXNOa1pCUVRaR08wRkJRemRHTEVWQlFVVTdRVUZEUml4RlFVRkZPMEZCUTBZc1owUkJRV2RFTzBGQlEyaEVMRFpGUVVFMlJUdEJRVU0zUlN4RlFVRkZPMEZCUTBZc2JVSkJRVzFDTzBGQlEyNUNMSGRDUVVGM1FqdEJRVU40UWl3MFFrRkJORUk3UVVGRE5VSXNaMFZCUVdkRk8wRkJRMmhGTEd0R1FVRnJSanRCUVVOc1JpeHhSa0ZCY1VZN1FVRkRja1lzT0VkQlFUaEhPMEZCUXpsSExGRkJRVkU3UVVGRFVpeE5RVUZOTzBGQlEwNHNTVUZCU1NJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHZMeUE4Y21WbVpYSmxibU5sSUhSNWNHVnpQVndpWTNsd2NtVnpjMXdpSUM4K1hHNHZMeUFxS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUx5OGdWR2hwY3lCbGVHRnRjR3hsSUdOdmJXMWhibVJ6TG5SeklITm9iM2R6SUhsdmRTQm9iM2NnZEc5Y2JpOHZJR055WldGMFpTQjJZWEpwYjNWeklHTjFjM1J2YlNCamIyMXRZVzVrY3lCaGJtUWdiM1psY25keWFYUmxYRzR2THlCbGVHbHpkR2x1WnlCamIyMXRZVzVrY3k1Y2JpOHZYRzR2THlCR2IzSWdiVzl5WlNCamIyMXdjbVZvWlc1emFYWmxJR1Y0WVcxd2JHVnpJRzltSUdOMWMzUnZiVnh1THk4Z1kyOXRiV0Z1WkhNZ2NHeGxZWE5sSUhKbFlXUWdiVzl5WlNCb1pYSmxPbHh1THk4Z2FIUjBjSE02THk5dmJpNWplWEJ5WlhOekxtbHZMMk4xYzNSdmJTMWpiMjF0WVc1a2MxeHVMeThnS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpOHZYRzR2TDF4dUx5OGdMUzBnVkdocGN5QnBjeUJoSUhCaGNtVnVkQ0JqYjIxdFlXNWtJQzB0WEc0dkx5QkRlWEJ5WlhOekxrTnZiVzFoYm1SekxtRmtaQ2duYkc5bmFXNG5MQ0FvWlcxaGFXd3NJSEJoYzNOM2IzSmtLU0E5UGlCN0lDNHVMaUI5S1Z4dUx5OWNiaTh2WEc0dkx5QXRMU0JVYUdseklHbHpJR0VnWTJocGJHUWdZMjl0YldGdVpDQXRMVnh1THk4Z1EzbHdjbVZ6Y3k1RGIyMXRZVzVrY3k1aFpHUW9KMlJ5WVdjbkxDQjdJSEJ5WlhaVGRXSnFaV04wT2lBblpXeGxiV1Z1ZENkOUxDQW9jM1ZpYW1WamRDd2diM0IwYVc5dWN5a2dQVDRnZXlBdUxpNGdmU2xjYmk4dlhHNHZMMXh1THk4Z0xTMGdWR2hwY3lCcGN5QmhJR1IxWVd3Z1kyOXRiV0Z1WkNBdExWeHVMeThnUTNsd2NtVnpjeTVEYjIxdFlXNWtjeTVoWkdRb0oyUnBjMjFwYzNNbkxDQjdJSEJ5WlhaVGRXSnFaV04wT2lBbmIzQjBhVzl1WVd3bmZTd2dLSE4xWW1wbFkzUXNJRzl3ZEdsdmJuTXBJRDArSUhzZ0xpNHVJSDBwWEc0dkwxeHVMeTljYmk4dklDMHRJRlJvYVhNZ2QybHNiQ0J2ZG1WeWQzSnBkR1VnWVc0Z1pYaHBjM1JwYm1jZ1kyOXRiV0Z1WkNBdExWeHVMeThnUTNsd2NtVnpjeTVEYjIxdFlXNWtjeTV2ZG1WeWQzSnBkR1VvSjNacGMybDBKeXdnS0c5eWFXZHBibUZzUm00c0lIVnliQ3dnYjNCMGFXOXVjeWtnUFQ0Z2V5QXVMaTRnZlNsY2JpOHZYRzR2THlCa1pXTnNZWEpsSUdkc2IySmhiQ0I3WEc0dkx5QWdJRzVoYldWemNHRmpaU0JEZVhCeVpYTnpJSHRjYmk4dklDQWdJQ0JwYm5SbGNtWmhZMlVnUTJoaGFXNWhZbXhsSUh0Y2JpOHZJQ0FnSUNBZ0lHeHZaMmx1S0dWdFlXbHNPaUJ6ZEhKcGJtY3NJSEJoYzNOM2IzSmtPaUJ6ZEhKcGJtY3BPaUJEYUdGcGJtRmliR1U4ZG05cFpENWNiaTh2SUNBZ0lDQWdJR1J5WVdjb2MzVmlhbVZqZERvZ2MzUnlhVzVuTENCdmNIUnBiMjV6UHpvZ1VHRnlkR2xoYkR4VWVYQmxUM0IwYVc5dWN6NHBPaUJEYUdGcGJtRmliR1U4Uld4bGJXVnVkRDVjYmk4dklDQWdJQ0FnSUdScGMyMXBjM01vYzNWaWFtVmpkRG9nYzNSeWFXNW5MQ0J2Y0hScGIyNXpQem9nVUdGeWRHbGhiRHhVZVhCbFQzQjBhVzl1Y3o0cE9pQkRhR0ZwYm1GaWJHVThSV3hsYldWdWRENWNiaTh2SUNBZ0lDQWdJSFpwYzJsMEtHOXlhV2RwYm1Gc1JtNDZJRU52YlcxaGJtUlBjbWxuYVc1aGJFWnVMQ0IxY213NklITjBjbWx1Wnl3Z2IzQjBhVzl1Y3pvZ1VHRnlkR2xoYkR4V2FYTnBkRTl3ZEdsdmJuTStLVG9nUTJoaGFXNWhZbXhsUEVWc1pXMWxiblErWEc0dkx5QWdJQ0FnZlZ4dUx5OGdJQ0I5WEc0dkx5QjlJbDE5IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCB7IHNuYXBzaG90IH0gZnJvbSAnQGNocm9tYXVpL3Jyd2ViLXNuYXBzaG90JztcblxuQ3lwcmVzcy5Db21tYW5kcy5hZGQoXCJ0YWtlU25hcHNob3RcIixlPT57Q3lwcmVzcy5jb25maWcoXCJpc1RleHRUZXJtaW5hbFwiKSYmY3kuZG9jdW1lbnQoKS50aGVuKHM9PntsZXQgcj1zbmFwc2hvdChzKTtjeS5nZXQoXCJAbWFudWFsU25hcHNob3RzXCIpLnRoZW4obz0+Wy4uLm8se25hbWU6ZSxzbmFwc2hvdDpyfV0pLmFzKFwibWFudWFsU25hcHNob3RzXCIpO30pO30pO2JlZm9yZUVhY2goKCk9PntDeXByZXNzLmNvbmZpZyhcImlzVGV4dFRlcm1pbmFsXCIpJiYoY3kud3JhcChbXSkuYXMoXCJtYW51YWxTbmFwc2hvdHNcIiksY3kudGFzayhcInByZXBhcmVBcmNoaXZlc1wiLHthY3Rpb246XCJzZXR1cC1uZXR3b3JrLWxpc3RlbmVyXCIscGF5bG9hZDp7YWxsb3dlZERvbWFpbnM6Q3lwcmVzcy5lbnYoXCJhc3NldERvbWFpbnNcIil9fSkpO30pO2FmdGVyRWFjaCgoKT0+e0N5cHJlc3MuY29uZmlnKFwiaXNUZXh0VGVybWluYWxcIikmJmN5LmRvY3VtZW50KCkudGhlbihlPT57bGV0IHM9Q3lwcmVzcy5lbnYoXCJkaXNhYmxlQXV0b1NuYXBzaG90XCIpP1tdOlt7c25hcHNob3Q6c25hcHNob3QoZSl9XTtjeS5nZXQoXCJAbWFudWFsU25hcHNob3RzXCIpLnRoZW4oKHI9W10pPT57Y3kudXJsKCkudGhlbihvPT57Y3kudGFzayhcInByZXBhcmVBcmNoaXZlc1wiLHthY3Rpb246XCJzYXZlLWFyY2hpdmVzXCIscGF5bG9hZDp7dGVzdFRpdGxlUGF0aDpbQ3lwcmVzcy5zcGVjLnJlbGF0aXZlVG9Db21tb25Sb290LC4uLkN5cHJlc3MuY3VycmVudFRlc3QudGl0bGVQYXRoXSxkb21TbmFwc2hvdHM6Wy4uLnIsLi4uc10sY2hyb21hdGljU3Rvcnlib29rUGFyYW1zOnsuLi5DeXByZXNzLmVudihcImRpZmZUaHJlc2hvbGRcIikmJntkaWZmVGhyZXNob2xkOkN5cHJlc3MuZW52KFwiZGlmZlRocmVzaG9sZFwiKX0sLi4uQ3lwcmVzcy5lbnYoXCJkZWxheVwiKSYme2RlbGF5OkN5cHJlc3MuZW52KFwiZGVsYXlcIil9LC4uLkN5cHJlc3MuZW52KFwiZGlmZkluY2x1ZGVBbnRpQWxpYXNpbmdcIikmJntkaWZmSW5jbHVkZUFudGlBbGlhc2luZzpDeXByZXNzLmVudihcImRpZmZJbmNsdWRlQW50aUFsaWFzaW5nXCIpfSwuLi5DeXByZXNzLmVudihcImRpZmZUaHJlc2hvbGRcIikmJntkaWZmVGhyZXNob2xkOkN5cHJlc3MuZW52KFwiZGlmZlRocmVzaG9sZFwiKX0sLi4uQ3lwcmVzcy5lbnYoXCJmb3JjZWRDb2xvcnNcIikmJntmb3JjZWRDb2xvcnM6Q3lwcmVzcy5lbnYoXCJmb3JjZWRDb2xvcnNcIil9LC4uLkN5cHJlc3MuZW52KFwicGF1c2VBbmltYXRpb25BdEVuZFwiKSYme3BhdXNlQW5pbWF0aW9uQXRFbmQ6Q3lwcmVzcy5lbnYoXCJwYXVzZUFuaW1hdGlvbkF0RW5kXCIpfSwuLi5DeXByZXNzLmVudihcInByZWZlcnNSZWR1Y2VkTW90aW9uXCIpJiZ7cHJlZmVyc1JlZHVjZWRNb3Rpb246Q3lwcmVzcy5lbnYoXCJwcmVmZXJzUmVkdWNlZE1vdGlvblwiKX0sLi4uQ3lwcmVzcy5lbnYoXCJjcm9wVG9WaWV3cG9ydFwiKSYme2Nyb3BUb1ZpZXdwb3J0OkN5cHJlc3MuZW52KFwiY3JvcFRvVmlld3BvcnRcIil9LC4uLkN5cHJlc3MuZW52KFwiaWdub3JlU2VsZWN0b3JzXCIpJiZ7aWdub3JlU2VsZWN0b3JzOkN5cHJlc3MuZW52KFwiaWdub3JlU2VsZWN0b3JzXCIpfX0scGFnZVVybDpvLHZpZXdwb3J0OntoZWlnaHQ6Q3lwcmVzcy5jb25maWcoXCJ2aWV3cG9ydEhlaWdodFwiKSx3aWR0aDpDeXByZXNzLmNvbmZpZyhcInZpZXdwb3J0V2lkdGhcIil9LG91dHB1dERpcjpDeXByZXNzLmNvbmZpZyhcImRvd25sb2Fkc0ZvbGRlclwiKX19KTt9KTt9KTt9KTt9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW91dC5qcy5tYXBcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1cHBvcnQubWpzLm1hcCIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIHZhciBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayh1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxuY29uc3QgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbmNvbnN0IGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbmNvbnN0IGN1c3RvbUluc3BlY3RTeW1ib2wgPVxuICAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sWydmb3InXSA9PT0gJ2Z1bmN0aW9uJykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICA/IFN5bWJvbFsnZm9yJ10oJ25vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tJykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICA6IG51bGxcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG5jb25zdCBLX01BWF9MRU5HVEggPSAweDdmZmZmZmZmXG5leHBvcnRzLmtNYXhMZW5ndGggPSBLX01BWF9MRU5HVEhcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgUHJpbnQgd2FybmluZyBhbmQgcmVjb21tZW5kIHVzaW5nIGBidWZmZXJgIHY0Lnggd2hpY2ggaGFzIGFuIE9iamVjdFxuICogICAgICAgICAgICAgICBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogV2UgcmVwb3J0IHRoYXQgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0eXBlZCBhcnJheXMgaWYgdGhlIGFyZSBub3Qgc3ViY2xhc3NhYmxlXG4gKiB1c2luZyBfX3Byb3RvX18uIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgXG4gKiAoU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzgpLiBJRSAxMCBsYWNrcyBzdXBwb3J0XG4gKiBmb3IgX19wcm90b19fIGFuZCBoYXMgYSBidWdneSB0eXBlZCBhcnJheSBpbXBsZW1lbnRhdGlvbi5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbmlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgY29uc29sZS5lcnJvcihcbiAgICAnVGhpcyBicm93c2VyIGxhY2tzIHR5cGVkIGFycmF5IChVaW50OEFycmF5KSBzdXBwb3J0IHdoaWNoIGlzIHJlcXVpcmVkIGJ5ICcgK1xuICAgICdgYnVmZmVyYCB2NS54LiBVc2UgYGJ1ZmZlcmAgdjQueCBpZiB5b3UgcmVxdWlyZSBvbGQgYnJvd3NlciBzdXBwb3J0LidcbiAgKVxufVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIC8vIENhbiB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZD9cbiAgdHJ5IHtcbiAgICBjb25zdCBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGNvbnN0IHByb3RvID0geyBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH0gfVxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihwcm90bywgVWludDhBcnJheS5wcm90b3R5cGUpXG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGFyciwgcHJvdG8pXG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDJcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIucHJvdG90eXBlLCAncGFyZW50Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0aGlzKSkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiB0aGlzLmJ1ZmZlclxuICB9XG59KVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLnByb3RvdHlwZSwgJ29mZnNldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGhpcykpIHJldHVybiB1bmRlZmluZWRcbiAgICByZXR1cm4gdGhpcy5ieXRlT2Zmc2V0XG4gIH1cbn0pXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAobGVuZ3RoKSB7XG4gIGlmIChsZW5ndGggPiBLX01BWF9MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIFwiJyArIGxlbmd0aCArICdcIiBpcyBpbnZhbGlkIGZvciBvcHRpb24gXCJzaXplXCInKVxuICB9XG4gIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gIGNvbnN0IGJ1ZiA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGJ1ZiwgQnVmZmVyLnByb3RvdHlwZSlcbiAgcmV0dXJuIGJ1ZlxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdUaGUgXCJzdHJpbmdcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgc3RyaW5nLiBSZWNlaXZlZCB0eXBlIG51bWJlcidcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKGFyZylcbiAgfVxuICByZXR1cm4gZnJvbShhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbmZ1bmN0aW9uIGZyb20gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheVZpZXcodmFsdWUpXG4gIH1cblxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgJyArXG4gICAgICAnb3IgQXJyYXktbGlrZSBPYmplY3QuIFJlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdmFsdWUpXG4gICAgKVxuICB9XG5cbiAgaWYgKGlzSW5zdGFuY2UodmFsdWUsIEFycmF5QnVmZmVyKSB8fFxuICAgICAgKHZhbHVlICYmIGlzSW5zdGFuY2UodmFsdWUuYnVmZmVyLCBBcnJheUJ1ZmZlcikpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIChpc0luc3RhbmNlKHZhbHVlLCBTaGFyZWRBcnJheUJ1ZmZlcikgfHxcbiAgICAgICh2YWx1ZSAmJiBpc0luc3RhbmNlKHZhbHVlLmJ1ZmZlciwgU2hhcmVkQXJyYXlCdWZmZXIpKSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwidmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBvZiB0eXBlIG51bWJlci4gUmVjZWl2ZWQgdHlwZSBudW1iZXInXG4gICAgKVxuICB9XG5cbiAgY29uc3QgdmFsdWVPZiA9IHZhbHVlLnZhbHVlT2YgJiYgdmFsdWUudmFsdWVPZigpXG4gIGlmICh2YWx1ZU9mICE9IG51bGwgJiYgdmFsdWVPZiAhPT0gdmFsdWUpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20odmFsdWVPZiwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgY29uc3QgYiA9IGZyb21PYmplY3QodmFsdWUpXG4gIGlmIChiKSByZXR1cm4gYlxuXG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9QcmltaXRpdmUgIT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIHZhbHVlW1N5bWJvbC50b1ByaW1pdGl2ZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20odmFsdWVbU3ltYm9sLnRvUHJpbWl0aXZlXSgnc3RyaW5nJyksIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksICcgK1xuICAgICdvciBBcnJheS1saWtlIE9iamVjdC4gUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB2YWx1ZSlcbiAgKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbi8vIE5vdGU6IENoYW5nZSBwcm90b3R5cGUgKmFmdGVyKiBCdWZmZXIuZnJvbSBpcyBkZWZpbmVkIHRvIHdvcmthcm91bmQgQ2hyb21lIGJ1Zzpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvMTQ4XG5PYmplY3Quc2V0UHJvdG90eXBlT2YoQnVmZmVyLnByb3RvdHlwZSwgVWludDhBcnJheS5wcm90b3R5cGUpXG5PYmplY3Quc2V0UHJvdG90eXBlT2YoQnVmZmVyLCBVaW50OEFycmF5KVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgXCInICsgc2l6ZSArICdcIiBpcyBpbnZhbGlkIGZvciBvcHRpb24gXCJzaXplXCInKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcihzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIoc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAoc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUoc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUoc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gIH1cblxuICBjb25zdCBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICBsZXQgYnVmID0gY3JlYXRlQnVmZmVyKGxlbmd0aClcblxuICBjb25zdCBhY3R1YWwgPSBidWYud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIGJ1ZiA9IGJ1Zi5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKGFycmF5KSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICBjb25zdCBidWYgPSBjcmVhdGVCdWZmZXIobGVuZ3RoKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgYnVmW2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheVZpZXcgKGFycmF5Vmlldykge1xuICBpZiAoaXNJbnN0YW5jZShhcnJheVZpZXcsIFVpbnQ4QXJyYXkpKSB7XG4gICAgY29uc3QgY29weSA9IG5ldyBVaW50OEFycmF5KGFycmF5VmlldylcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKGNvcHkuYnVmZmVyLCBjb3B5LmJ5dGVPZmZzZXQsIGNvcHkuYnl0ZUxlbmd0aClcbiAgfVxuICByZXR1cm4gZnJvbUFycmF5TGlrZShhcnJheVZpZXcpXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJvZmZzZXRcIiBpcyBvdXRzaWRlIG9mIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcImxlbmd0aFwiIGlzIG91dHNpZGUgb2YgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBsZXQgYnVmXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYnVmLCBCdWZmZXIucHJvdG90eXBlKVxuXG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAob2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIGNvbnN0IGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgY29uc3QgYnVmID0gY3JlYXRlQnVmZmVyKGxlbilcblxuICAgIGlmIChidWYubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYnVmXG4gICAgfVxuXG4gICAgb2JqLmNvcHkoYnVmLCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIGJ1ZlxuICB9XG5cbiAgaWYgKG9iai5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgbnVtYmVySXNOYU4ob2JqLmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIoMClcbiAgICB9XG4gICAgcmV0dXJuIGZyb21BcnJheUxpa2Uob2JqKVxuICB9XG5cbiAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBBcnJheS5pc0FycmF5KG9iai5kYXRhKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKG9iai5kYXRhKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBLX01BWF9MRU5HVEhgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0gS19NQVhfTEVOR1RIKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIEtfTUFYX0xFTkdUSC50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuIGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlciA9PT0gdHJ1ZSAmJlxuICAgIGIgIT09IEJ1ZmZlci5wcm90b3R5cGUgLy8gc28gQnVmZmVyLmlzQnVmZmVyKEJ1ZmZlci5wcm90b3R5cGUpIHdpbGwgYmUgZmFsc2Vcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmIChpc0luc3RhbmNlKGEsIFVpbnQ4QXJyYXkpKSBhID0gQnVmZmVyLmZyb20oYSwgYS5vZmZzZXQsIGEuYnl0ZUxlbmd0aClcbiAgaWYgKGlzSW5zdGFuY2UoYiwgVWludDhBcnJheSkpIGIgPSBCdWZmZXIuZnJvbShiLCBiLm9mZnNldCwgYi5ieXRlTGVuZ3RoKVxuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJidWYxXCIsIFwiYnVmMlwiIGFyZ3VtZW50cyBtdXN0IGJlIG9uZSBvZiB0eXBlIEJ1ZmZlciBvciBVaW50OEFycmF5J1xuICAgIClcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIGxldCB4ID0gYS5sZW5ndGhcbiAgbGV0IHkgPSBiLmxlbmd0aFxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgbGV0IGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICBjb25zdCBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICBsZXQgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIGxldCBidWYgPSBsaXN0W2ldXG4gICAgaWYgKGlzSW5zdGFuY2UoYnVmLCBVaW50OEFycmF5KSkge1xuICAgICAgaWYgKHBvcyArIGJ1Zi5sZW5ndGggPiBidWZmZXIubGVuZ3RoKSB7XG4gICAgICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIGJ1ZiA9IEJ1ZmZlci5mcm9tKGJ1ZilcbiAgICAgICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgICAgICBidWZmZXIsXG4gICAgICAgICAgYnVmLFxuICAgICAgICAgIHBvc1xuICAgICAgICApXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIH1cbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBpc0luc3RhbmNlKHN0cmluZywgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJzdHJpbmdcIiBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBvciBBcnJheUJ1ZmZlci4gJyArXG4gICAgICAnUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIHN0cmluZ1xuICAgIClcbiAgfVxuXG4gIGNvbnN0IGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgY29uc3QgbXVzdE1hdGNoID0gKGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSA9PT0gdHJ1ZSlcbiAgaWYgKCFtdXN0TWF0Y2ggJiYgbGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICBsZXQgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB7XG4gICAgICAgICAgcmV0dXJuIG11c3RNYXRjaCA/IC0xIDogdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgfVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgbGV0IGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJjaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoaXMgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCAoYW5kIHRoZSBgaXMtYnVmZmVyYCBucG0gcGFja2FnZSlcbi8vIHRvIGRldGVjdCBhIEJ1ZmZlciBpbnN0YW5jZS4gSXQncyBub3QgcG9zc2libGUgdG8gdXNlIGBpbnN0YW5jZW9mIEJ1ZmZlcmBcbi8vIHJlbGlhYmx5IGluIGEgYnJvd3NlcmlmeSBjb250ZXh0IGJlY2F1c2UgdGhlcmUgY291bGQgYmUgbXVsdGlwbGUgZGlmZmVyZW50XG4vLyBjb3BpZXMgb2YgdGhlICdidWZmZXInIHBhY2thZ2UgaW4gdXNlLiBUaGlzIG1ldGhvZCB3b3JrcyBldmVuIGZvciBCdWZmZXJcbi8vIGluc3RhbmNlcyB0aGF0IHdlcmUgY3JlYXRlZCBmcm9tIGFub3RoZXIgY29weSBvZiB0aGUgYGJ1ZmZlcmAgcGFja2FnZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzE1NFxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgY29uc3QgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9Mb2NhbGVTdHJpbmcgPSBCdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nXG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgbGV0IHN0ciA9ICcnXG4gIGNvbnN0IG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5yZXBsYWNlKC8oLnsyfSkvZywgJyQxICcpLnRyaW0oKVxuICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5pZiAoY3VzdG9tSW5zcGVjdFN5bWJvbCkge1xuICBCdWZmZXIucHJvdG90eXBlW2N1c3RvbUluc3BlY3RTeW1ib2xdID0gQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmIChpc0luc3RhbmNlKHRhcmdldCwgVWludDhBcnJheSkpIHtcbiAgICB0YXJnZXQgPSBCdWZmZXIuZnJvbSh0YXJnZXQsIHRhcmdldC5vZmZzZXQsIHRhcmdldC5ieXRlTGVuZ3RoKVxuICB9XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcInRhcmdldFwiIGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgQnVmZmVyIG9yIFVpbnQ4QXJyYXkuICcgK1xuICAgICAgJ1JlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdGFyZ2V0KVxuICAgIClcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIGxldCB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICBsZXQgeSA9IGVuZCAtIHN0YXJ0XG4gIGNvbnN0IGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgY29uc3QgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgY29uc3QgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKG51bWJlcklzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgW3ZhbF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIGxldCBpbmRleFNpemUgPSAxXG4gIGxldCBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIGxldCB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpXG4gIGlmIChkaXIpIHtcbiAgICBsZXQgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIGNvbnN0IHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBsZXQgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKG51bWJlcklzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggPj4+IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIGxldCBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgY29uc3QgcmVzID0gW11cblxuICBsZXQgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgY29uc3QgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgbGV0IGNvZGVQb2ludCA9IG51bGxcbiAgICBsZXQgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKVxuICAgICAgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKVxuICAgICAgICAgID8gM1xuICAgICAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpXG4gICAgICAgICAgICAgID8gMlxuICAgICAgICAgICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIGxldCBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbmNvbnN0IE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICBjb25zdCBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIGxldCByZXMgPSAnJ1xuICBsZXQgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgbGV0IHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGxldCByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICBsZXQgb3V0ID0gJydcbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gaGV4U2xpY2VMb29rdXBUYWJsZVtidWZbaV1dXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBjb25zdCBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICBsZXQgcmVzID0gJydcbiAgLy8gSWYgYnl0ZXMubGVuZ3RoIGlzIG9kZCwgdGhlIGxhc3QgOCBiaXRzIG11c3QgYmUgaWdub3JlZCAoc2FtZSBhcyBub2RlLmpzKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aCAtIDE7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgKGJ5dGVzW2kgKyAxXSAqIDI1NikpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICBjb25zdCBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihuZXdCdWYsIEJ1ZmZlci5wcm90b3R5cGUpXG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludExFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgbGV0IHZhbCA9IHRoaXNbb2Zmc2V0XVxuICBsZXQgbXVsID0gMVxuICBsZXQgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50QkUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICBsZXQgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIGxldCBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDggPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDE2TEUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MTZCRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQzMkxFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDMyQkUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkQmlnVUludDY0TEUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gcmVhZEJpZ1VJbnQ2NExFIChvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIHZhbGlkYXRlTnVtYmVyKG9mZnNldCwgJ29mZnNldCcpXG4gIGNvbnN0IGZpcnN0ID0gdGhpc1tvZmZzZXRdXG4gIGNvbnN0IGxhc3QgPSB0aGlzW29mZnNldCArIDddXG4gIGlmIChmaXJzdCA9PT0gdW5kZWZpbmVkIHx8IGxhc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIGJvdW5kc0Vycm9yKG9mZnNldCwgdGhpcy5sZW5ndGggLSA4KVxuICB9XG5cbiAgY29uc3QgbG8gPSBmaXJzdCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDI0XG5cbiAgY29uc3QgaGkgPSB0aGlzWysrb2Zmc2V0XSArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgbGFzdCAqIDIgKiogMjRcblxuICByZXR1cm4gQmlnSW50KGxvKSArIChCaWdJbnQoaGkpIDw8IEJpZ0ludCgzMikpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRCaWdVSW50NjRCRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiByZWFkQmlnVUludDY0QkUgKG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgY29uc3QgZmlyc3QgPSB0aGlzW29mZnNldF1cbiAgY29uc3QgbGFzdCA9IHRoaXNbb2Zmc2V0ICsgN11cbiAgaWYgKGZpcnN0ID09PSB1bmRlZmluZWQgfHwgbGFzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm91bmRzRXJyb3Iob2Zmc2V0LCB0aGlzLmxlbmd0aCAtIDgpXG4gIH1cblxuICBjb25zdCBoaSA9IGZpcnN0ICogMiAqKiAyNCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF1cblxuICBjb25zdCBsbyA9IHRoaXNbKytvZmZzZXRdICogMiAqKiAyNCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgbGFzdFxuXG4gIHJldHVybiAoQmlnSW50KGhpKSA8PCBCaWdJbnQoMzIpKSArIEJpZ0ludChsbylcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIGxldCB2YWwgPSB0aGlzW29mZnNldF1cbiAgbGV0IG11bCA9IDFcbiAgbGV0IGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICBsZXQgaSA9IGJ5dGVMZW5ndGhcbiAgbGV0IG11bCA9IDFcbiAgbGV0IHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIGNvbnN0IHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICBjb25zdCB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkQmlnSW50NjRMRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiByZWFkQmlnSW50NjRMRSAob2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBjb25zdCBmaXJzdCA9IHRoaXNbb2Zmc2V0XVxuICBjb25zdCBsYXN0ID0gdGhpc1tvZmZzZXQgKyA3XVxuICBpZiAoZmlyc3QgPT09IHVuZGVmaW5lZCB8fCBsYXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIHRoaXMubGVuZ3RoIC0gOClcbiAgfVxuXG4gIGNvbnN0IHZhbCA9IHRoaXNbb2Zmc2V0ICsgNF0gK1xuICAgIHRoaXNbb2Zmc2V0ICsgNV0gKiAyICoqIDggK1xuICAgIHRoaXNbb2Zmc2V0ICsgNl0gKiAyICoqIDE2ICtcbiAgICAobGFzdCA8PCAyNCkgLy8gT3ZlcmZsb3dcblxuICByZXR1cm4gKEJpZ0ludCh2YWwpIDw8IEJpZ0ludCgzMikpICtcbiAgICBCaWdJbnQoZmlyc3QgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAyNClcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEJpZ0ludDY0QkUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gcmVhZEJpZ0ludDY0QkUgKG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgY29uc3QgZmlyc3QgPSB0aGlzW29mZnNldF1cbiAgY29uc3QgbGFzdCA9IHRoaXNbb2Zmc2V0ICsgN11cbiAgaWYgKGZpcnN0ID09PSB1bmRlZmluZWQgfHwgbGFzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm91bmRzRXJyb3Iob2Zmc2V0LCB0aGlzLmxlbmd0aCAtIDgpXG4gIH1cblxuICBjb25zdCB2YWwgPSAoZmlyc3QgPDwgMjQpICsgLy8gT3ZlcmZsb3dcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICB0aGlzWysrb2Zmc2V0XVxuXG4gIHJldHVybiAoQmlnSW50KHZhbCkgPDwgQmlnSW50KDMyKSkgK1xuICAgIEJpZ0ludCh0aGlzWysrb2Zmc2V0XSAqIDIgKiogMjQgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIGxhc3QpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnRMRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY29uc3QgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICBsZXQgbXVsID0gMVxuICBsZXQgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludEJFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjb25zdCBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIGxldCBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgbGV0IG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50OCA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQxNkxFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MTZCRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDMyTEUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQzMkJFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIHdydEJpZ1VJbnQ2NExFIChidWYsIHZhbHVlLCBvZmZzZXQsIG1pbiwgbWF4KSB7XG4gIGNoZWNrSW50QkkodmFsdWUsIG1pbiwgbWF4LCBidWYsIG9mZnNldCwgNylcblxuICBsZXQgbG8gPSBOdW1iZXIodmFsdWUgJiBCaWdJbnQoMHhmZmZmZmZmZikpXG4gIGJ1ZltvZmZzZXQrK10gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0KytdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBsb1xuICBsZXQgaGkgPSBOdW1iZXIodmFsdWUgPj4gQmlnSW50KDMyKSAmIEJpZ0ludCgweGZmZmZmZmZmKSlcbiAgYnVmW29mZnNldCsrXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0KytdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGhpXG4gIHJldHVybiBvZmZzZXRcbn1cblxuZnVuY3Rpb24gd3J0QmlnVUludDY0QkUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbWluLCBtYXgpIHtcbiAgY2hlY2tJbnRCSSh2YWx1ZSwgbWluLCBtYXgsIGJ1Ziwgb2Zmc2V0LCA3KVxuXG4gIGxldCBsbyA9IE51bWJlcih2YWx1ZSAmIEJpZ0ludCgweGZmZmZmZmZmKSlcbiAgYnVmW29mZnNldCArIDddID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQgKyA2XSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0ICsgNV0gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCArIDRdID0gbG9cbiAgbGV0IGhpID0gTnVtYmVyKHZhbHVlID4+IEJpZ0ludCgzMikgJiBCaWdJbnQoMHhmZmZmZmZmZikpXG4gIGJ1ZltvZmZzZXQgKyAzXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0ICsgMl0gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldCArIDFdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXRdID0gaGlcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUJpZ1VJbnQ2NExFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHdyaXRlQmlnVUludDY0TEUgKHZhbHVlLCBvZmZzZXQgPSAwKSB7XG4gIHJldHVybiB3cnRCaWdVSW50NjRMRSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBCaWdJbnQoMCksIEJpZ0ludCgnMHhmZmZmZmZmZmZmZmZmZmZmJykpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlQmlnVUludDY0QkUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gd3JpdGVCaWdVSW50NjRCRSAodmFsdWUsIG9mZnNldCA9IDApIHtcbiAgcmV0dXJuIHdydEJpZ1VJbnQ2NEJFKHRoaXMsIHZhbHVlLCBvZmZzZXQsIEJpZ0ludCgwKSwgQmlnSW50KCcweGZmZmZmZmZmZmZmZmZmZmYnKSlcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY29uc3QgbGltaXQgPSBNYXRoLnBvdygyLCAoOCAqIGJ5dGVMZW5ndGgpIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgbGV0IGkgPSAwXG4gIGxldCBtdWwgPSAxXG4gIGxldCBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY29uc3QgbGltaXQgPSBNYXRoLnBvdygyLCAoOCAqIGJ5dGVMZW5ndGgpIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgbGV0IGkgPSBieXRlTGVuZ3RoIC0gMVxuICBsZXQgbXVsID0gMVxuICBsZXQgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUJpZ0ludDY0TEUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gd3JpdGVCaWdJbnQ2NExFICh2YWx1ZSwgb2Zmc2V0ID0gMCkge1xuICByZXR1cm4gd3J0QmlnVUludDY0TEUodGhpcywgdmFsdWUsIG9mZnNldCwgLUJpZ0ludCgnMHg4MDAwMDAwMDAwMDAwMDAwJyksIEJpZ0ludCgnMHg3ZmZmZmZmZmZmZmZmZmZmJykpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlQmlnSW50NjRCRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiB3cml0ZUJpZ0ludDY0QkUgKHZhbHVlLCBvZmZzZXQgPSAwKSB7XG4gIHJldHVybiB3cnRCaWdVSW50NjRCRSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAtQmlnSW50KCcweDgwMDAwMDAwMDAwMDAwMDAnKSwgQmlnSW50KCcweDdmZmZmZmZmZmZmZmZmZmYnKSlcbn0pXG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHNob3VsZCBiZSBhIEJ1ZmZlcicpXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICBjb25zdCBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBVc2UgYnVpbHQtaW4gd2hlbiBhdmFpbGFibGUsIG1pc3NpbmcgZnJvbSBJRTExXG4gICAgdGhpcy5jb3B5V2l0aGluKHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKChlbmNvZGluZyA9PT0gJ3V0ZjgnICYmIGNvZGUgPCAxMjgpIHx8XG4gICAgICAgICAgZW5jb2RpbmcgPT09ICdsYXRpbjEnKSB7XG4gICAgICAgIC8vIEZhc3QgcGF0aDogSWYgYHZhbGAgZml0cyBpbnRvIGEgc2luZ2xlIGJ5dGUsIHVzZSB0aGF0IG51bWVyaWMgdmFsdWUuXG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICB2YWwgPSBOdW1iZXIodmFsKVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIGxldCBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgICBjb25zdCBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgdmFsdWUgXCInICsgdmFsICtcbiAgICAgICAgJ1wiIGlzIGludmFsaWQgZm9yIGFyZ3VtZW50IFwidmFsdWVcIicpXG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIENVU1RPTSBFUlJPUlNcbi8vID09PT09PT09PT09PT1cblxuLy8gU2ltcGxpZmllZCB2ZXJzaW9ucyBmcm9tIE5vZGUsIGNoYW5nZWQgZm9yIEJ1ZmZlci1vbmx5IHVzYWdlXG5jb25zdCBlcnJvcnMgPSB7fVxuZnVuY3Rpb24gRSAoc3ltLCBnZXRNZXNzYWdlLCBCYXNlKSB7XG4gIGVycm9yc1tzeW1dID0gY2xhc3MgTm9kZUVycm9yIGV4dGVuZHMgQmFzZSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgc3VwZXIoKVxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ21lc3NhZ2UnLCB7XG4gICAgICAgIHZhbHVlOiBnZXRNZXNzYWdlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pXG5cbiAgICAgIC8vIEFkZCB0aGUgZXJyb3IgY29kZSB0byB0aGUgbmFtZSB0byBpbmNsdWRlIGl0IGluIHRoZSBzdGFjayB0cmFjZS5cbiAgICAgIHRoaXMubmFtZSA9IGAke3RoaXMubmFtZX0gWyR7c3ltfV1gXG4gICAgICAvLyBBY2Nlc3MgdGhlIHN0YWNrIHRvIGdlbmVyYXRlIHRoZSBlcnJvciBtZXNzYWdlIGluY2x1ZGluZyB0aGUgZXJyb3IgY29kZVxuICAgICAgLy8gZnJvbSB0aGUgbmFtZS5cbiAgICAgIHRoaXMuc3RhY2sgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgIC8vIFJlc2V0IHRoZSBuYW1lIHRvIHRoZSBhY3R1YWwgbmFtZS5cbiAgICAgIGRlbGV0ZSB0aGlzLm5hbWVcbiAgICB9XG5cbiAgICBnZXQgY29kZSAoKSB7XG4gICAgICByZXR1cm4gc3ltXG4gICAgfVxuXG4gICAgc2V0IGNvZGUgKHZhbHVlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvZGUnLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRvU3RyaW5nICgpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm5hbWV9IFske3N5bX1dOiAke3RoaXMubWVzc2FnZX1gXG4gICAgfVxuICB9XG59XG5cbkUoJ0VSUl9CVUZGRVJfT1VUX09GX0JPVU5EUycsXG4gIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiBgJHtuYW1lfSBpcyBvdXRzaWRlIG9mIGJ1ZmZlciBib3VuZHNgXG4gICAgfVxuXG4gICAgcmV0dXJuICdBdHRlbXB0IHRvIGFjY2VzcyBtZW1vcnkgb3V0c2lkZSBidWZmZXIgYm91bmRzJ1xuICB9LCBSYW5nZUVycm9yKVxuRSgnRVJSX0lOVkFMSURfQVJHX1RZUEUnLFxuICBmdW5jdGlvbiAobmFtZSwgYWN0dWFsKSB7XG4gICAgcmV0dXJuIGBUaGUgXCIke25hbWV9XCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIG51bWJlci4gUmVjZWl2ZWQgdHlwZSAke3R5cGVvZiBhY3R1YWx9YFxuICB9LCBUeXBlRXJyb3IpXG5FKCdFUlJfT1VUX09GX1JBTkdFJyxcbiAgZnVuY3Rpb24gKHN0ciwgcmFuZ2UsIGlucHV0KSB7XG4gICAgbGV0IG1zZyA9IGBUaGUgdmFsdWUgb2YgXCIke3N0cn1cIiBpcyBvdXQgb2YgcmFuZ2UuYFxuICAgIGxldCByZWNlaXZlZCA9IGlucHV0XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIoaW5wdXQpICYmIE1hdGguYWJzKGlucHV0KSA+IDIgKiogMzIpIHtcbiAgICAgIHJlY2VpdmVkID0gYWRkTnVtZXJpY2FsU2VwYXJhdG9yKFN0cmluZyhpbnB1dCkpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdiaWdpbnQnKSB7XG4gICAgICByZWNlaXZlZCA9IFN0cmluZyhpbnB1dClcbiAgICAgIGlmIChpbnB1dCA+IEJpZ0ludCgyKSAqKiBCaWdJbnQoMzIpIHx8IGlucHV0IDwgLShCaWdJbnQoMikgKiogQmlnSW50KDMyKSkpIHtcbiAgICAgICAgcmVjZWl2ZWQgPSBhZGROdW1lcmljYWxTZXBhcmF0b3IocmVjZWl2ZWQpXG4gICAgICB9XG4gICAgICByZWNlaXZlZCArPSAnbidcbiAgICB9XG4gICAgbXNnICs9IGAgSXQgbXVzdCBiZSAke3JhbmdlfS4gUmVjZWl2ZWQgJHtyZWNlaXZlZH1gXG4gICAgcmV0dXJuIG1zZ1xuICB9LCBSYW5nZUVycm9yKVxuXG5mdW5jdGlvbiBhZGROdW1lcmljYWxTZXBhcmF0b3IgKHZhbCkge1xuICBsZXQgcmVzID0gJydcbiAgbGV0IGkgPSB2YWwubGVuZ3RoXG4gIGNvbnN0IHN0YXJ0ID0gdmFsWzBdID09PSAnLScgPyAxIDogMFxuICBmb3IgKDsgaSA+PSBzdGFydCArIDQ7IGkgLT0gMykge1xuICAgIHJlcyA9IGBfJHt2YWwuc2xpY2UoaSAtIDMsIGkpfSR7cmVzfWBcbiAgfVxuICByZXR1cm4gYCR7dmFsLnNsaWNlKDAsIGkpfSR7cmVzfWBcbn1cblxuLy8gQ0hFQ0sgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gY2hlY2tCb3VuZHMgKGJ1Ziwgb2Zmc2V0LCBieXRlTGVuZ3RoKSB7XG4gIHZhbGlkYXRlTnVtYmVyKG9mZnNldCwgJ29mZnNldCcpXG4gIGlmIChidWZbb2Zmc2V0XSA9PT0gdW5kZWZpbmVkIHx8IGJ1ZltvZmZzZXQgKyBieXRlTGVuZ3RoXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm91bmRzRXJyb3Iob2Zmc2V0LCBidWYubGVuZ3RoIC0gKGJ5dGVMZW5ndGggKyAxKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0ludEJJICh2YWx1ZSwgbWluLCBtYXgsIGJ1Ziwgb2Zmc2V0LCBieXRlTGVuZ3RoKSB7XG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikge1xuICAgIGNvbnN0IG4gPSB0eXBlb2YgbWluID09PSAnYmlnaW50JyA/ICduJyA6ICcnXG4gICAgbGV0IHJhbmdlXG4gICAgaWYgKGJ5dGVMZW5ndGggPiAzKSB7XG4gICAgICBpZiAobWluID09PSAwIHx8IG1pbiA9PT0gQmlnSW50KDApKSB7XG4gICAgICAgIHJhbmdlID0gYD49IDAke259IGFuZCA8IDIke259ICoqICR7KGJ5dGVMZW5ndGggKyAxKSAqIDh9JHtufWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhbmdlID0gYD49IC0oMiR7bn0gKiogJHsoYnl0ZUxlbmd0aCArIDEpICogOCAtIDF9JHtufSkgYW5kIDwgMiAqKiBgICtcbiAgICAgICAgICAgICAgICBgJHsoYnl0ZUxlbmd0aCArIDEpICogOCAtIDF9JHtufWBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmFuZ2UgPSBgPj0gJHttaW59JHtufSBhbmQgPD0gJHttYXh9JHtufWBcbiAgICB9XG4gICAgdGhyb3cgbmV3IGVycm9ycy5FUlJfT1VUX09GX1JBTkdFKCd2YWx1ZScsIHJhbmdlLCB2YWx1ZSlcbiAgfVxuICBjaGVja0JvdW5kcyhidWYsIG9mZnNldCwgYnl0ZUxlbmd0aClcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVOdW1iZXIgKHZhbHVlLCBuYW1lKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IGVycm9ycy5FUlJfSU5WQUxJRF9BUkdfVFlQRShuYW1lLCAnbnVtYmVyJywgdmFsdWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gYm91bmRzRXJyb3IgKHZhbHVlLCBsZW5ndGgsIHR5cGUpIHtcbiAgaWYgKE1hdGguZmxvb3IodmFsdWUpICE9PSB2YWx1ZSkge1xuICAgIHZhbGlkYXRlTnVtYmVyKHZhbHVlLCB0eXBlKVxuICAgIHRocm93IG5ldyBlcnJvcnMuRVJSX09VVF9PRl9SQU5HRSh0eXBlIHx8ICdvZmZzZXQnLCAnYW4gaW50ZWdlcicsIHZhbHVlKVxuICB9XG5cbiAgaWYgKGxlbmd0aCA8IDApIHtcbiAgICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9CVUZGRVJfT1VUX09GX0JPVU5EUygpXG4gIH1cblxuICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9PVVRfT0ZfUkFOR0UodHlwZSB8fCAnb2Zmc2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA+PSAke3R5cGUgPyAxIDogMH0gYW5kIDw9ICR7bGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSlcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG5jb25zdCBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXisvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHRha2VzIGVxdWFsIHNpZ25zIGFzIGVuZCBvZiB0aGUgQmFzZTY0IGVuY29kaW5nXG4gIHN0ciA9IHN0ci5zcGxpdCgnPScpWzBdXG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHIudHJpbSgpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgbGV0IGNvZGVQb2ludFxuICBjb25zdCBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIGxldCBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICBjb25zdCBieXRlcyA9IFtdXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIGNvbnN0IGJ5dGVBcnJheSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgbGV0IGMsIGhpLCBsb1xuICBjb25zdCBieXRlQXJyYXkgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGxldCBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG4vLyBBcnJheUJ1ZmZlciBvciBVaW50OEFycmF5IG9iamVjdHMgZnJvbSBvdGhlciBjb250ZXh0cyAoaS5lLiBpZnJhbWVzKSBkbyBub3QgcGFzc1xuLy8gdGhlIGBpbnN0YW5jZW9mYCBjaGVjayBidXQgdGhleSBzaG91bGQgYmUgdHJlYXRlZCBhcyBvZiB0aGF0IHR5cGUuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2lzc3Vlcy8xNjZcbmZ1bmN0aW9uIGlzSW5zdGFuY2UgKG9iaiwgdHlwZSkge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgdHlwZSB8fFxuICAgIChvYmogIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IubmFtZSAhPSBudWxsICYmXG4gICAgICBvYmouY29uc3RydWN0b3IubmFtZSA9PT0gdHlwZS5uYW1lKVxufVxuZnVuY3Rpb24gbnVtYmVySXNOYU4gKG9iaikge1xuICAvLyBGb3IgSUUxMSBzdXBwb3J0XG4gIHJldHVybiBvYmogIT09IG9iaiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuXG4vLyBDcmVhdGUgbG9va3VwIHRhYmxlIGZvciBgdG9TdHJpbmcoJ2hleCcpYFxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMjE5XG5jb25zdCBoZXhTbGljZUxvb2t1cFRhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWxwaGFiZXQgPSAnMDEyMzQ1Njc4OWFiY2RlZidcbiAgY29uc3QgdGFibGUgPSBuZXcgQXJyYXkoMjU2KVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICBjb25zdCBpMTYgPSBpICogMTZcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIHRhYmxlW2kxNiArIGpdID0gYWxwaGFiZXRbaV0gKyBhbHBoYWJldFtqXVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFibGVcbn0pKClcblxuLy8gUmV0dXJuIG5vdCBmdW5jdGlvbiB3aXRoIEVycm9yIGlmIEJpZ0ludCBub3Qgc3VwcG9ydGVkXG5mdW5jdGlvbiBkZWZpbmVCaWdJbnRNZXRob2QgKGZuKSB7XG4gIHJldHVybiB0eXBlb2YgQmlnSW50ID09PSAndW5kZWZpbmVkJyA/IEJ1ZmZlckJpZ0ludE5vdERlZmluZWQgOiBmblxufVxuXG5mdW5jdGlvbiBCdWZmZXJCaWdJbnROb3REZWZpbmVkICgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdCaWdJbnQgbm90IHN1cHBvcnRlZCcpXG59XG4iLCIvKiEgaWVlZTc1NC4gQlNELTMtQ2xhdXNlIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xuZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX3B1YmxpY0ZpZWxkID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4gX19kZWZOb3JtYWxQcm9wKG9iaiwgdHlwZW9mIGtleSAhPT0gXCJzeW1ib2xcIiA/IGtleSArIFwiXCIgOiBrZXksIHZhbHVlKTtcbnZhciBOb2RlVHlwZSA9IC8qIEBfX1BVUkVfXyAqLyAoKE5vZGVUeXBlMikgPT4ge1xuICBOb2RlVHlwZTJbTm9kZVR5cGUyW1wiRG9jdW1lbnRcIl0gPSAwXSA9IFwiRG9jdW1lbnRcIjtcbiAgTm9kZVR5cGUyW05vZGVUeXBlMltcIkRvY3VtZW50VHlwZVwiXSA9IDFdID0gXCJEb2N1bWVudFR5cGVcIjtcbiAgTm9kZVR5cGUyW05vZGVUeXBlMltcIkVsZW1lbnRcIl0gPSAyXSA9IFwiRWxlbWVudFwiO1xuICBOb2RlVHlwZTJbTm9kZVR5cGUyW1wiVGV4dFwiXSA9IDNdID0gXCJUZXh0XCI7XG4gIE5vZGVUeXBlMltOb2RlVHlwZTJbXCJDREFUQVwiXSA9IDRdID0gXCJDREFUQVwiO1xuICBOb2RlVHlwZTJbTm9kZVR5cGUyW1wiQ29tbWVudFwiXSA9IDVdID0gXCJDb21tZW50XCI7XG4gIHJldHVybiBOb2RlVHlwZTI7XG59KShOb2RlVHlwZSB8fCB7fSk7XG5jb25zdCB0ZXN0YWJsZUFjY2Vzc29ycyA9IHtcbiAgTm9kZTogW1wiY2hpbGROb2Rlc1wiLCBcInBhcmVudE5vZGVcIiwgXCJwYXJlbnRFbGVtZW50XCIsIFwidGV4dENvbnRlbnRcIl0sXG4gIFNoYWRvd1Jvb3Q6IFtcImhvc3RcIiwgXCJzdHlsZVNoZWV0c1wiXSxcbiAgRWxlbWVudDogW1wic2hhZG93Um9vdFwiLCBcInF1ZXJ5U2VsZWN0b3JcIiwgXCJxdWVyeVNlbGVjdG9yQWxsXCJdLFxuICBNdXRhdGlvbk9ic2VydmVyOiBbXVxufTtcbmNvbnN0IHRlc3RhYmxlTWV0aG9kcyA9IHtcbiAgTm9kZTogW1wiY29udGFpbnNcIiwgXCJnZXRSb290Tm9kZVwiXSxcbiAgU2hhZG93Um9vdDogW1wiZ2V0U2VsZWN0aW9uXCJdLFxuICBFbGVtZW50OiBbXSxcbiAgTXV0YXRpb25PYnNlcnZlcjogW1wiY29uc3RydWN0b3JcIl1cbn07XG5jb25zdCB1bnRhaW50ZWRCYXNlUHJvdG90eXBlID0ge307XG5mdW5jdGlvbiBnZXRVbnRhaW50ZWRQcm90b3R5cGUoa2V5KSB7XG4gIGlmICh1bnRhaW50ZWRCYXNlUHJvdG90eXBlW2tleV0pXG4gICAgcmV0dXJuIHVudGFpbnRlZEJhc2VQcm90b3R5cGVba2V5XTtcbiAgY29uc3QgZGVmYXVsdE9iaiA9IGdsb2JhbFRoaXNba2V5XTtcbiAgY29uc3QgZGVmYXVsdFByb3RvdHlwZSA9IGRlZmF1bHRPYmoucHJvdG90eXBlO1xuICBjb25zdCBhY2Nlc3Nvck5hbWVzID0ga2V5IGluIHRlc3RhYmxlQWNjZXNzb3JzID8gdGVzdGFibGVBY2Nlc3NvcnNba2V5XSA6IHZvaWQgMDtcbiAgY29uc3QgaXNVbnRhaW50ZWRBY2Nlc3NvcnMgPSBCb29sZWFuKFxuICAgIGFjY2Vzc29yTmFtZXMgJiYgLy8gQHRzLWV4cGVjdC1lcnJvciAyMzQ1XG4gICAgYWNjZXNzb3JOYW1lcy5ldmVyeShcbiAgICAgIChhY2Nlc3NvcikgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICByZXR1cm4gQm9vbGVhbihcbiAgICAgICAgICAoX2IgPSAoX2EgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRQcm90b3R5cGUsIGFjY2Vzc29yKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmdldCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLnRvU3RyaW5nKCkuaW5jbHVkZXMoXCJbbmF0aXZlIGNvZGVdXCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKVxuICApO1xuICBjb25zdCBtZXRob2ROYW1lcyA9IGtleSBpbiB0ZXN0YWJsZU1ldGhvZHMgPyB0ZXN0YWJsZU1ldGhvZHNba2V5XSA6IHZvaWQgMDtcbiAgY29uc3QgaXNVbnRhaW50ZWRNZXRob2RzID0gQm9vbGVhbihcbiAgICBtZXRob2ROYW1lcyAmJiBtZXRob2ROYW1lcy5ldmVyeShcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgMjM0NVxuICAgICAgKG1ldGhvZCkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZGVmYXVsdFByb3RvdHlwZVttZXRob2RdID09PSBcImZ1bmN0aW9uXCIgJiYgKChfYSA9IGRlZmF1bHRQcm90b3R5cGVbbWV0aG9kXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkuaW5jbHVkZXMoXCJbbmF0aXZlIGNvZGVdXCIpKTtcbiAgICAgIH1cbiAgICApXG4gICk7XG4gIGlmIChpc1VudGFpbnRlZEFjY2Vzc29ycyAmJiBpc1VudGFpbnRlZE1ldGhvZHMpIHtcbiAgICB1bnRhaW50ZWRCYXNlUHJvdG90eXBlW2tleV0gPSBkZWZhdWx0T2JqLnByb3RvdHlwZTtcbiAgICByZXR1cm4gZGVmYXVsdE9iai5wcm90b3R5cGU7XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBpZnJhbWVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWVFbCk7XG4gICAgY29uc3Qgd2luID0gaWZyYW1lRWwuY29udGVudFdpbmRvdztcbiAgICBpZiAoIXdpbikgcmV0dXJuIGRlZmF1bHRPYmoucHJvdG90eXBlO1xuICAgIGNvbnN0IHVudGFpbnRlZE9iamVjdCA9IHdpbltrZXldLnByb3RvdHlwZTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZUVsKTtcbiAgICBpZiAoIXVudGFpbnRlZE9iamVjdCkgcmV0dXJuIGRlZmF1bHRQcm90b3R5cGU7XG4gICAgcmV0dXJuIHVudGFpbnRlZEJhc2VQcm90b3R5cGVba2V5XSA9IHVudGFpbnRlZE9iamVjdDtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGRlZmF1bHRQcm90b3R5cGU7XG4gIH1cbn1cbmNvbnN0IHVudGFpbnRlZEFjY2Vzc29yQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldFVudGFpbnRlZEFjY2Vzc29yKGtleSwgaW5zdGFuY2UsIGFjY2Vzc29yKSB7XG4gIHZhciBfYTtcbiAgY29uc3QgY2FjaGVLZXkgPSBgJHtrZXl9LiR7U3RyaW5nKGFjY2Vzc29yKX1gO1xuICBpZiAodW50YWludGVkQWNjZXNzb3JDYWNoZVtjYWNoZUtleV0pXG4gICAgcmV0dXJuIHVudGFpbnRlZEFjY2Vzc29yQ2FjaGVbY2FjaGVLZXldLmNhbGwoXG4gICAgICBpbnN0YW5jZVxuICAgICk7XG4gIGNvbnN0IHVudGFpbnRlZFByb3RvdHlwZSA9IGdldFVudGFpbnRlZFByb3RvdHlwZShrZXkpO1xuICBjb25zdCB1bnRhaW50ZWRBY2Nlc3NvciA9IChfYSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgdW50YWludGVkUHJvdG90eXBlLFxuICAgIGFjY2Vzc29yXG4gICkpID09IG51bGwgPyB2b2lkIDAgOiBfYS5nZXQ7XG4gIGlmICghdW50YWludGVkQWNjZXNzb3IpIHJldHVybiBpbnN0YW5jZVthY2Nlc3Nvcl07XG4gIHVudGFpbnRlZEFjY2Vzc29yQ2FjaGVbY2FjaGVLZXldID0gdW50YWludGVkQWNjZXNzb3I7XG4gIHJldHVybiB1bnRhaW50ZWRBY2Nlc3Nvci5jYWxsKGluc3RhbmNlKTtcbn1cbmNvbnN0IHVudGFpbnRlZE1ldGhvZENhY2hlID0ge307XG5mdW5jdGlvbiBnZXRVbnRhaW50ZWRNZXRob2Qoa2V5LCBpbnN0YW5jZSwgbWV0aG9kKSB7XG4gIGNvbnN0IGNhY2hlS2V5ID0gYCR7a2V5fS4ke1N0cmluZyhtZXRob2QpfWA7XG4gIGlmICh1bnRhaW50ZWRNZXRob2RDYWNoZVtjYWNoZUtleV0pXG4gICAgcmV0dXJuIHVudGFpbnRlZE1ldGhvZENhY2hlW2NhY2hlS2V5XS5iaW5kKFxuICAgICAgaW5zdGFuY2VcbiAgICApO1xuICBjb25zdCB1bnRhaW50ZWRQcm90b3R5cGUgPSBnZXRVbnRhaW50ZWRQcm90b3R5cGUoa2V5KTtcbiAgY29uc3QgdW50YWludGVkTWV0aG9kID0gdW50YWludGVkUHJvdG90eXBlW21ldGhvZF07XG4gIGlmICh0eXBlb2YgdW50YWludGVkTWV0aG9kICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBpbnN0YW5jZVttZXRob2RdO1xuICB1bnRhaW50ZWRNZXRob2RDYWNoZVtjYWNoZUtleV0gPSB1bnRhaW50ZWRNZXRob2Q7XG4gIHJldHVybiB1bnRhaW50ZWRNZXRob2QuYmluZChpbnN0YW5jZSk7XG59XG5mdW5jdGlvbiBjaGlsZE5vZGVzKG4pIHtcbiAgcmV0dXJuIGdldFVudGFpbnRlZEFjY2Vzc29yKFwiTm9kZVwiLCBuLCBcImNoaWxkTm9kZXNcIik7XG59XG5mdW5jdGlvbiBwYXJlbnROb2RlKG4pIHtcbiAgcmV0dXJuIGdldFVudGFpbnRlZEFjY2Vzc29yKFwiTm9kZVwiLCBuLCBcInBhcmVudE5vZGVcIik7XG59XG5mdW5jdGlvbiBwYXJlbnRFbGVtZW50KG4pIHtcbiAgcmV0dXJuIGdldFVudGFpbnRlZEFjY2Vzc29yKFwiTm9kZVwiLCBuLCBcInBhcmVudEVsZW1lbnRcIik7XG59XG5mdW5jdGlvbiB0ZXh0Q29udGVudChuKSB7XG4gIHJldHVybiBnZXRVbnRhaW50ZWRBY2Nlc3NvcihcIk5vZGVcIiwgbiwgXCJ0ZXh0Q29udGVudFwiKTtcbn1cbmZ1bmN0aW9uIGNvbnRhaW5zKG4sIG90aGVyKSB7XG4gIHJldHVybiBnZXRVbnRhaW50ZWRNZXRob2QoXCJOb2RlXCIsIG4sIFwiY29udGFpbnNcIikob3RoZXIpO1xufVxuZnVuY3Rpb24gZ2V0Um9vdE5vZGUobikge1xuICByZXR1cm4gZ2V0VW50YWludGVkTWV0aG9kKFwiTm9kZVwiLCBuLCBcImdldFJvb3ROb2RlXCIpKCk7XG59XG5mdW5jdGlvbiBob3N0KG4pIHtcbiAgaWYgKCFuIHx8ICEoXCJob3N0XCIgaW4gbikpIHJldHVybiBudWxsO1xuICByZXR1cm4gZ2V0VW50YWludGVkQWNjZXNzb3IoXCJTaGFkb3dSb290XCIsIG4sIFwiaG9zdFwiKTtcbn1cbmZ1bmN0aW9uIHN0eWxlU2hlZXRzKG4pIHtcbiAgcmV0dXJuIG4uc3R5bGVTaGVldHM7XG59XG5mdW5jdGlvbiBzaGFkb3dSb290KG4pIHtcbiAgaWYgKCFuIHx8ICEoXCJzaGFkb3dSb290XCIgaW4gbikpIHJldHVybiBudWxsO1xuICByZXR1cm4gZ2V0VW50YWludGVkQWNjZXNzb3IoXCJFbGVtZW50XCIsIG4sIFwic2hhZG93Um9vdFwiKTtcbn1cbmZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3Iobiwgc2VsZWN0b3JzKSB7XG4gIHJldHVybiBnZXRVbnRhaW50ZWRBY2Nlc3NvcihcIkVsZW1lbnRcIiwgbiwgXCJxdWVyeVNlbGVjdG9yXCIpKHNlbGVjdG9ycyk7XG59XG5mdW5jdGlvbiBxdWVyeVNlbGVjdG9yQWxsKG4sIHNlbGVjdG9ycykge1xuICByZXR1cm4gZ2V0VW50YWludGVkQWNjZXNzb3IoXCJFbGVtZW50XCIsIG4sIFwicXVlcnlTZWxlY3RvckFsbFwiKShzZWxlY3RvcnMpO1xufVxuZnVuY3Rpb24gbXV0YXRpb25PYnNlcnZlckN0b3IoKSB7XG4gIHJldHVybiBnZXRVbnRhaW50ZWRQcm90b3R5cGUoXCJNdXRhdGlvbk9ic2VydmVyXCIpLmNvbnN0cnVjdG9yO1xufVxuY29uc3QgaW5kZXggPSB7XG4gIGNoaWxkTm9kZXMsXG4gIHBhcmVudE5vZGUsXG4gIHBhcmVudEVsZW1lbnQsXG4gIHRleHRDb250ZW50LFxuICBjb250YWlucyxcbiAgZ2V0Um9vdE5vZGUsXG4gIGhvc3QsXG4gIHN0eWxlU2hlZXRzLFxuICBzaGFkb3dSb290LFxuICBxdWVyeVNlbGVjdG9yLFxuICBxdWVyeVNlbGVjdG9yQWxsLFxuICBtdXRhdGlvbk9ic2VydmVyOiBtdXRhdGlvbk9ic2VydmVyQ3RvclxufTtcbmZ1bmN0aW9uIGlzRWxlbWVudChuKSB7XG4gIHJldHVybiBuLm5vZGVUeXBlID09PSBuLkVMRU1FTlRfTk9ERTtcbn1cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChuKSB7XG4gIGNvbnN0IGhvc3RFbCA9IChcbiAgICAvLyBhbmNob3IgYW5kIHRleHRhcmVhIGVsZW1lbnRzIGFsc28gaGF2ZSBhIGBob3N0YCBwcm9wZXJ0eVxuICAgIC8vIGJ1dCBvbmx5IHNoYWRvdyByb290cyBoYXZlIGEgYG1vZGVgIHByb3BlcnR5XG4gICAgbiAmJiBcImhvc3RcIiBpbiBuICYmIFwibW9kZVwiIGluIG4gJiYgaW5kZXguaG9zdChuKSB8fCBudWxsXG4gICk7XG4gIHJldHVybiBCb29sZWFuKFxuICAgIGhvc3RFbCAmJiBcInNoYWRvd1Jvb3RcIiBpbiBob3N0RWwgJiYgaW5kZXguc2hhZG93Um9vdChob3N0RWwpID09PSBuXG4gICk7XG59XG5mdW5jdGlvbiBpc05hdGl2ZVNoYWRvd0RvbShzaGFkb3dSb290Mikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNoYWRvd1Jvb3QyKSA9PT0gXCJbb2JqZWN0IFNoYWRvd1Jvb3RdXCI7XG59XG5mdW5jdGlvbiBmaXhCcm93c2VyQ29tcGF0aWJpbGl0eUlzc3Vlc0luQ1NTKGNzc1RleHQpIHtcbiAgaWYgKGNzc1RleHQuaW5jbHVkZXMoXCIgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1wiKSAmJiAhY3NzVGV4dC5pbmNsdWRlcyhcIiAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcIikpIHtcbiAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKFxuICAgICAgL1xcc2JhY2tncm91bmQtY2xpcDpcXHMqdGV4dDsvZyxcbiAgICAgIFwiIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XCJcbiAgICApO1xuICB9XG4gIHJldHVybiBjc3NUZXh0O1xufVxuZnVuY3Rpb24gZXNjYXBlSW1wb3J0U3RhdGVtZW50KHJ1bGUyKSB7XG4gIGNvbnN0IHsgY3NzVGV4dCB9ID0gcnVsZTI7XG4gIGlmIChjc3NUZXh0LnNwbGl0KCdcIicpLmxlbmd0aCA8IDMpIHJldHVybiBjc3NUZXh0O1xuICBjb25zdCBzdGF0ZW1lbnQgPSBbXCJAaW1wb3J0XCIsIGB1cmwoJHtKU09OLnN0cmluZ2lmeShydWxlMi5ocmVmKX0pYF07XG4gIGlmIChydWxlMi5sYXllck5hbWUgPT09IFwiXCIpIHtcbiAgICBzdGF0ZW1lbnQucHVzaChgbGF5ZXJgKTtcbiAgfSBlbHNlIGlmIChydWxlMi5sYXllck5hbWUpIHtcbiAgICBzdGF0ZW1lbnQucHVzaChgbGF5ZXIoJHtydWxlMi5sYXllck5hbWV9KWApO1xuICB9XG4gIGlmIChydWxlMi5zdXBwb3J0c1RleHQpIHtcbiAgICBzdGF0ZW1lbnQucHVzaChgc3VwcG9ydHMoJHtydWxlMi5zdXBwb3J0c1RleHR9KWApO1xuICB9XG4gIGlmIChydWxlMi5tZWRpYS5sZW5ndGgpIHtcbiAgICBzdGF0ZW1lbnQucHVzaChydWxlMi5tZWRpYS5tZWRpYVRleHQpO1xuICB9XG4gIHJldHVybiBzdGF0ZW1lbnQuam9pbihcIiBcIikgKyBcIjtcIjtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeVN0eWxlc2hlZXQocykge1xuICB0cnkge1xuICAgIGNvbnN0IHJ1bGVzID0gcy5ydWxlcyB8fCBzLmNzc1J1bGVzO1xuICAgIGlmICghcnVsZXMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgc2hlZXRIcmVmID0gcy5ocmVmO1xuICAgIGlmICghc2hlZXRIcmVmICYmIHMub3duZXJOb2RlICYmIHMub3duZXJOb2RlLm93bmVyRG9jdW1lbnQpIHtcbiAgICAgIHNoZWV0SHJlZiA9IHMub3duZXJOb2RlLm93bmVyRG9jdW1lbnQubG9jYXRpb24uaHJlZjtcbiAgICB9XG4gICAgY29uc3Qgc3RyaW5naWZpZWRSdWxlcyA9IEFycmF5LmZyb20oXG4gICAgICBydWxlcyxcbiAgICAgIChydWxlMikgPT4gc3RyaW5naWZ5UnVsZShydWxlMiwgc2hlZXRIcmVmKVxuICAgICkuam9pbihcIlwiKTtcbiAgICByZXR1cm4gZml4QnJvd3NlckNvbXBhdGliaWxpdHlJc3N1ZXNJbkNTUyhzdHJpbmdpZmllZFJ1bGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuZnVuY3Rpb24gc3RyaW5naWZ5UnVsZShydWxlMiwgc2hlZXRIcmVmKSB7XG4gIGlmIChpc0NTU0ltcG9ydFJ1bGUocnVsZTIpKSB7XG4gICAgbGV0IGltcG9ydFN0cmluZ2lmaWVkO1xuICAgIHRyeSB7XG4gICAgICBpbXBvcnRTdHJpbmdpZmllZCA9IC8vIGZvciBzYW1lLW9yaWdpbiBzdHlsZXNoZWV0cyxcbiAgICAgIC8vIHdlIGNhbiBhY2Nlc3MgdGhlIGltcG9ydGVkIHN0eWxlc2hlZXQgcnVsZXMgZGlyZWN0bHlcbiAgICAgIHN0cmluZ2lmeVN0eWxlc2hlZXQocnVsZTIuc3R5bGVTaGVldCkgfHwgLy8gd29yayBhcm91bmQgYnJvd3NlciBpc3N1ZXMgd2l0aCB0aGUgcmF3IHN0cmluZyBgQGltcG9ydCB1cmwoLi4uKWAgc3RhdGVtZW50XG4gICAgICBlc2NhcGVJbXBvcnRTdGF0ZW1lbnQocnVsZTIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpbXBvcnRTdHJpbmdpZmllZCA9IHJ1bGUyLmNzc1RleHQ7XG4gICAgfVxuICAgIGlmIChydWxlMi5zdHlsZVNoZWV0LmhyZWYpIHtcbiAgICAgIHJldHVybiBhYnNvbHV0aWZ5VVJMcyhpbXBvcnRTdHJpbmdpZmllZCwgcnVsZTIuc3R5bGVTaGVldC5ocmVmKTtcbiAgICB9XG4gICAgcmV0dXJuIGltcG9ydFN0cmluZ2lmaWVkO1xuICB9IGVsc2Uge1xuICAgIGxldCBydWxlU3RyaW5naWZpZWQgPSBydWxlMi5jc3NUZXh0O1xuICAgIGlmIChpc0NTU1N0eWxlUnVsZShydWxlMikgJiYgcnVsZTIuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKFwiOlwiKSkge1xuICAgICAgcnVsZVN0cmluZ2lmaWVkID0gZml4U2FmYXJpQ29sb25zKHJ1bGVTdHJpbmdpZmllZCk7XG4gICAgfVxuICAgIGlmIChzaGVldEhyZWYpIHtcbiAgICAgIHJldHVybiBhYnNvbHV0aWZ5VVJMcyhydWxlU3RyaW5naWZpZWQsIHNoZWV0SHJlZik7XG4gICAgfVxuICAgIHJldHVybiBydWxlU3RyaW5naWZpZWQ7XG4gIH1cbn1cbmZ1bmN0aW9uIGZpeFNhZmFyaUNvbG9ucyhjc3NTdHJpbmdpZmllZCkge1xuICBjb25zdCByZWdleCA9IC8oXFxbKD86W1xcdy1dKylbXlxcXFxdKSg6KD86W1xcdy1dKylcXF0pL2dtO1xuICByZXR1cm4gY3NzU3RyaW5naWZpZWQucmVwbGFjZShyZWdleCwgXCIkMVxcXFwkMlwiKTtcbn1cbmZ1bmN0aW9uIGlzQ1NTSW1wb3J0UnVsZShydWxlMikge1xuICByZXR1cm4gXCJzdHlsZVNoZWV0XCIgaW4gcnVsZTI7XG59XG5mdW5jdGlvbiBpc0NTU1N0eWxlUnVsZShydWxlMikge1xuICByZXR1cm4gXCJzZWxlY3RvclRleHRcIiBpbiBydWxlMjtcbn1cbmNsYXNzIE1pcnJvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJpZE5vZGVNYXBcIiwgLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm5vZGVNZXRhTWFwXCIsIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpKTtcbiAgfVxuICBnZXRJZChuKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICghbikgcmV0dXJuIC0xO1xuICAgIGNvbnN0IGlkID0gKF9hID0gdGhpcy5nZXRNZXRhKG4pKSA9PSBudWxsID8gdm9pZCAwIDogX2EuaWQ7XG4gICAgcmV0dXJuIGlkID8/IC0xO1xuICB9XG4gIGdldE5vZGUoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5pZE5vZGVNYXAuZ2V0KGlkKSB8fCBudWxsO1xuICB9XG4gIGdldElkcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmlkTm9kZU1hcC5rZXlzKCkpO1xuICB9XG4gIGdldE1ldGEobikge1xuICAgIHJldHVybiB0aGlzLm5vZGVNZXRhTWFwLmdldChuKSB8fCBudWxsO1xuICB9XG4gIC8vIHJlbW92ZXMgdGhlIG5vZGUgZnJvbSBpZE5vZGVNYXBcbiAgLy8gZG9lc24ndCByZW1vdmUgdGhlIG5vZGUgZnJvbSBub2RlTWV0YU1hcFxuICByZW1vdmVOb2RlRnJvbU1hcChuKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmdldElkKG4pO1xuICAgIHRoaXMuaWROb2RlTWFwLmRlbGV0ZShpZCk7XG4gICAgaWYgKG4uY2hpbGROb2Rlcykge1xuICAgICAgbi5jaGlsZE5vZGVzLmZvckVhY2goXG4gICAgICAgIChjaGlsZE5vZGUpID0+IHRoaXMucmVtb3ZlTm9kZUZyb21NYXAoY2hpbGROb2RlKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgaGFzKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuaWROb2RlTWFwLmhhcyhpZCk7XG4gIH1cbiAgaGFzTm9kZShub2RlMikge1xuICAgIHJldHVybiB0aGlzLm5vZGVNZXRhTWFwLmhhcyhub2RlMik7XG4gIH1cbiAgYWRkKG4sIG1ldGEpIHtcbiAgICBjb25zdCBpZCA9IG1ldGEuaWQ7XG4gICAgdGhpcy5pZE5vZGVNYXAuc2V0KGlkLCBuKTtcbiAgICB0aGlzLm5vZGVNZXRhTWFwLnNldChuLCBtZXRhKTtcbiAgfVxuICByZXBsYWNlKGlkLCBuKSB7XG4gICAgY29uc3Qgb2xkTm9kZSA9IHRoaXMuZ2V0Tm9kZShpZCk7XG4gICAgaWYgKG9sZE5vZGUpIHtcbiAgICAgIGNvbnN0IG1ldGEgPSB0aGlzLm5vZGVNZXRhTWFwLmdldChvbGROb2RlKTtcbiAgICAgIGlmIChtZXRhKSB0aGlzLm5vZGVNZXRhTWFwLnNldChuLCBtZXRhKTtcbiAgICB9XG4gICAgdGhpcy5pZE5vZGVNYXAuc2V0KGlkLCBuKTtcbiAgfVxuICByZXNldCgpIHtcbiAgICB0aGlzLmlkTm9kZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgdGhpcy5ub2RlTWV0YU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVNaXJyb3IoKSB7XG4gIHJldHVybiBuZXcgTWlycm9yKCk7XG59XG5mdW5jdGlvbiBtYXNrSW5wdXRWYWx1ZSh7XG4gIGVsZW1lbnQsXG4gIG1hc2tJbnB1dE9wdGlvbnMsXG4gIHRhZ05hbWUsXG4gIHR5cGUsXG4gIHZhbHVlLFxuICBtYXNrSW5wdXRGblxufSkge1xuICBsZXQgdGV4dCA9IHZhbHVlIHx8IFwiXCI7XG4gIGNvbnN0IGFjdHVhbFR5cGUgPSB0eXBlICYmIHRvTG93ZXJDYXNlKHR5cGUpO1xuICBpZiAobWFza0lucHV0T3B0aW9uc1t0YWdOYW1lLnRvTG93ZXJDYXNlKCldIHx8IGFjdHVhbFR5cGUgJiYgbWFza0lucHV0T3B0aW9uc1thY3R1YWxUeXBlXSkge1xuICAgIGlmIChtYXNrSW5wdXRGbikge1xuICAgICAgdGV4dCA9IG1hc2tJbnB1dEZuKHRleHQsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0ID0gXCIqXCIucmVwZWF0KHRleHQubGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRleHQ7XG59XG5mdW5jdGlvbiB0b0xvd2VyQ2FzZShzdHIpIHtcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xufVxuY29uc3QgT1JJR0lOQUxfQVRUUklCVVRFX05BTUUgPSBcIl9fcnJ3ZWJfb3JpZ2luYWxfX1wiO1xuZnVuY3Rpb24gaXMyRENhbnZhc0JsYW5rKGNhbnZhcykge1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIWN0eCkgcmV0dXJuIHRydWU7XG4gIGNvbnN0IGNodW5rU2l6ZSA9IDUwO1xuICBmb3IgKGxldCB4MiA9IDA7IHgyIDwgY2FudmFzLndpZHRoOyB4MiArPSBjaHVua1NpemUpIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNhbnZhcy5oZWlnaHQ7IHkgKz0gY2h1bmtTaXplKSB7XG4gICAgICBjb25zdCBnZXRJbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhO1xuICAgICAgY29uc3Qgb3JpZ2luYWxHZXRJbWFnZURhdGEgPSBPUklHSU5BTF9BVFRSSUJVVEVfTkFNRSBpbiBnZXRJbWFnZURhdGEgPyBnZXRJbWFnZURhdGFbT1JJR0lOQUxfQVRUUklCVVRFX05BTUVdIDogZ2V0SW1hZ2VEYXRhO1xuICAgICAgY29uc3QgcGl4ZWxCdWZmZXIgPSBuZXcgVWludDMyQXJyYXkoXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3NcbiAgICAgICAgb3JpZ2luYWxHZXRJbWFnZURhdGEuY2FsbChcbiAgICAgICAgICBjdHgsXG4gICAgICAgICAgeDIsXG4gICAgICAgICAgeSxcbiAgICAgICAgICBNYXRoLm1pbihjaHVua1NpemUsIGNhbnZhcy53aWR0aCAtIHgyKSxcbiAgICAgICAgICBNYXRoLm1pbihjaHVua1NpemUsIGNhbnZhcy5oZWlnaHQgLSB5KVxuICAgICAgICApLmRhdGEuYnVmZmVyXG4gICAgICApO1xuICAgICAgaWYgKHBpeGVsQnVmZmVyLnNvbWUoKHBpeGVsKSA9PiBwaXhlbCAhPT0gMCkpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBpc05vZGVNZXRhRXF1YWwoYSwgYikge1xuICBpZiAoIWEgfHwgIWIgfHwgYS50eXBlICE9PSBiLnR5cGUpIHJldHVybiBmYWxzZTtcbiAgaWYgKGEudHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQpXG4gICAgcmV0dXJuIGEuY29tcGF0TW9kZSA9PT0gYi5jb21wYXRNb2RlO1xuICBlbHNlIGlmIChhLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50VHlwZSlcbiAgICByZXR1cm4gYS5uYW1lID09PSBiLm5hbWUgJiYgYS5wdWJsaWNJZCA9PT0gYi5wdWJsaWNJZCAmJiBhLnN5c3RlbUlkID09PSBiLnN5c3RlbUlkO1xuICBlbHNlIGlmIChhLnR5cGUgPT09IE5vZGVUeXBlLkNvbW1lbnQgfHwgYS50eXBlID09PSBOb2RlVHlwZS5UZXh0IHx8IGEudHlwZSA9PT0gTm9kZVR5cGUuQ0RBVEEpXG4gICAgcmV0dXJuIGEudGV4dENvbnRlbnQgPT09IGIudGV4dENvbnRlbnQ7XG4gIGVsc2UgaWYgKGEudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudClcbiAgICByZXR1cm4gYS50YWdOYW1lID09PSBiLnRhZ05hbWUgJiYgSlNPTi5zdHJpbmdpZnkoYS5hdHRyaWJ1dGVzKSA9PT0gSlNPTi5zdHJpbmdpZnkoYi5hdHRyaWJ1dGVzKSAmJiBhLmlzU1ZHID09PSBiLmlzU1ZHICYmIGEubmVlZEJsb2NrID09PSBiLm5lZWRCbG9jaztcbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZ2V0SW5wdXRUeXBlKGVsZW1lbnQpIHtcbiAgY29uc3QgdHlwZSA9IGVsZW1lbnQudHlwZTtcbiAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS1yci1pcy1wYXNzd29yZFwiKSA/IFwicGFzc3dvcmRcIiA6IHR5cGUgPyAoXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bm5lY2Vzc2FyeS10eXBlLWFzc2VydGlvblxuICAgIHRvTG93ZXJDYXNlKHR5cGUpXG4gICkgOiBudWxsO1xufVxuZnVuY3Rpb24gZXh0cmFjdEZpbGVFeHRlbnNpb24ocGF0aCwgYmFzZVVSTCkge1xuICBsZXQgdXJsO1xuICB0cnkge1xuICAgIHVybCA9IG5ldyBVUkwocGF0aCwgYmFzZVVSTCA/PyB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHJlZ2V4ID0gL1xcLihbMC05YS16XSspKD86JCkvaTtcbiAgY29uc3QgbWF0Y2ggPSB1cmwucGF0aG5hbWUubWF0Y2gocmVnZXgpO1xuICByZXR1cm4gKG1hdGNoID09IG51bGwgPyB2b2lkIDAgOiBtYXRjaFsxXSkgPz8gbnVsbDtcbn1cbmZ1bmN0aW9uIGV4dHJhY3RPcmlnaW4odXJsKSB7XG4gIGxldCBvcmlnaW4gPSBcIlwiO1xuICBpZiAodXJsLmluZGV4T2YoXCIvL1wiKSA+IC0xKSB7XG4gICAgb3JpZ2luID0gdXJsLnNwbGl0KFwiL1wiKS5zbGljZSgwLCAzKS5qb2luKFwiL1wiKTtcbiAgfSBlbHNlIHtcbiAgICBvcmlnaW4gPSB1cmwuc3BsaXQoXCIvXCIpWzBdO1xuICB9XG4gIG9yaWdpbiA9IG9yaWdpbi5zcGxpdChcIj9cIilbMF07XG4gIHJldHVybiBvcmlnaW47XG59XG5jb25zdCBVUkxfSU5fQ1NTX1JFRiA9IC91cmxcXCgoPzooJykoW14nXSopJ3woXCIpKC4qPylcInwoW14pXSopKVxcKS9nbTtcbmNvbnN0IFVSTF9QUk9UT0NPTF9NQVRDSCA9IC9eKD86W2EteitdKzopP1xcL1xcLy9pO1xuY29uc3QgVVJMX1dXV19NQVRDSCA9IC9ed3d3XFwuLiovaTtcbmNvbnN0IERBVEFfVVJJID0gL14oZGF0YTopKFteLF0qKSwoLiopL2k7XG5mdW5jdGlvbiBhYnNvbHV0aWZ5VVJMcyhjc3NUZXh0LCBocmVmKSB7XG4gIHJldHVybiAoY3NzVGV4dCB8fCBcIlwiKS5yZXBsYWNlKFxuICAgIFVSTF9JTl9DU1NfUkVGLFxuICAgIChvcmlnaW4sIHF1b3RlMSwgcGF0aDEsIHF1b3RlMiwgcGF0aDIsIHBhdGgzKSA9PiB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGgxIHx8IHBhdGgyIHx8IHBhdGgzO1xuICAgICAgY29uc3QgbWF5YmVRdW90ZSA9IHF1b3RlMSB8fCBxdW90ZTIgfHwgXCJcIjtcbiAgICAgIGlmICghZmlsZVBhdGgpIHtcbiAgICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICAgIH1cbiAgICAgIGlmIChVUkxfUFJPVE9DT0xfTUFUQ0gudGVzdChmaWxlUGF0aCkgfHwgVVJMX1dXV19NQVRDSC50ZXN0KGZpbGVQYXRoKSkge1xuICAgICAgICByZXR1cm4gYHVybCgke21heWJlUXVvdGV9JHtmaWxlUGF0aH0ke21heWJlUXVvdGV9KWA7XG4gICAgICB9XG4gICAgICBpZiAoREFUQV9VUkkudGVzdChmaWxlUGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIGB1cmwoJHttYXliZVF1b3RlfSR7ZmlsZVBhdGh9JHttYXliZVF1b3RlfSlgO1xuICAgICAgfVxuICAgICAgaWYgKGZpbGVQYXRoWzBdID09PSBcIi9cIikge1xuICAgICAgICByZXR1cm4gYHVybCgke21heWJlUXVvdGV9JHtleHRyYWN0T3JpZ2luKGhyZWYpICsgZmlsZVBhdGh9JHttYXliZVF1b3RlfSlgO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhY2sgPSBocmVmLnNwbGl0KFwiL1wiKTtcbiAgICAgIGNvbnN0IHBhcnRzID0gZmlsZVBhdGguc3BsaXQoXCIvXCIpO1xuICAgICAgc3RhY2sucG9wKCk7XG4gICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgICAgaWYgKHBhcnQgPT09IFwiLlwiKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSBpZiAocGFydCA9PT0gXCIuLlwiKSB7XG4gICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhY2sucHVzaChwYXJ0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGB1cmwoJHttYXliZVF1b3RlfSR7c3RhY2suam9pbihcIi9cIil9JHttYXliZVF1b3RlfSlgO1xuICAgIH1cbiAgKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNzc1N0cmluZyhjc3NUZXh0KSB7XG4gIHJldHVybiBjc3NUZXh0LnJlcGxhY2UoLyhcXC9cXCpbXipdKlxcKlxcLyl8W1xccztdL2csIFwiXCIpO1xufVxuZnVuY3Rpb24gc3BsaXRDc3NUZXh0KGNzc1RleHQsIHN0eWxlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMyID0gQXJyYXkuZnJvbShzdHlsZS5jaGlsZE5vZGVzKTtcbiAgY29uc3Qgc3BsaXRzID0gW107XG4gIGlmIChjaGlsZE5vZGVzMi5sZW5ndGggPiAxICYmIGNzc1RleHQgJiYgdHlwZW9mIGNzc1RleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICBjb25zdCBjc3NUZXh0Tm9ybSA9IG5vcm1hbGl6ZUNzc1N0cmluZyhjc3NUZXh0KTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGNoaWxkTm9kZXMyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY2hpbGROb2RlczJbaV0udGV4dENvbnRlbnQgJiYgdHlwZW9mIGNoaWxkTm9kZXMyW2ldLnRleHRDb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IHRleHRDb250ZW50Tm9ybSA9IG5vcm1hbGl6ZUNzc1N0cmluZyhjaGlsZE5vZGVzMltpXS50ZXh0Q29udGVudCk7XG4gICAgICAgIGZvciAobGV0IGogPSAzOyBqIDwgdGV4dENvbnRlbnROb3JtLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY29uc3QgYml0ID0gdGV4dENvbnRlbnROb3JtLnN1YnN0cmluZygwLCBqKTtcbiAgICAgICAgICBpZiAoY3NzVGV4dE5vcm0uc3BsaXQoYml0KS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0Tm9ybSA9IGNzc1RleHROb3JtLmluZGV4T2YoYml0KTtcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSBzcGxpdE5vcm07IGsgPCBjc3NUZXh0Lmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgIGlmIChub3JtYWxpemVDc3NTdHJpbmcoY3NzVGV4dC5zdWJzdHJpbmcoMCwgaykpLmxlbmd0aCA9PT0gc3BsaXROb3JtKSB7XG4gICAgICAgICAgICAgICAgc3BsaXRzLnB1c2goY3NzVGV4dC5zdWJzdHJpbmcoMCwgaykpO1xuICAgICAgICAgICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnN1YnN0cmluZyhrKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNwbGl0cy5wdXNoKGNzc1RleHQpO1xuICByZXR1cm4gc3BsaXRzO1xufVxuZnVuY3Rpb24gbWFya0Nzc1NwbGl0cyhjc3NUZXh0LCBzdHlsZSkge1xuICByZXR1cm4gc3BsaXRDc3NUZXh0KGNzc1RleHQsIHN0eWxlKS5qb2luKFwiLyogcnJfc3BsaXQgKi9cIik7XG59XG5sZXQgX2lkID0gMTtcbmNvbnN0IHRhZ05hbWVSZWdleCA9IG5ldyBSZWdFeHAoXCJbXmEtejAtOS1fOl1cIik7XG5jb25zdCBJR05PUkVEX05PREUgPSAtMjtcbmZ1bmN0aW9uIGdlbklkKCkge1xuICByZXR1cm4gX2lkKys7XG59XG5mdW5jdGlvbiBnZXRWYWxpZFRhZ05hbWUoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgIHJldHVybiBcImZvcm1cIjtcbiAgfVxuICBjb25zdCBwcm9jZXNzZWRUYWdOYW1lID0gdG9Mb3dlckNhc2UoZWxlbWVudC50YWdOYW1lKTtcbiAgaWYgKHRhZ05hbWVSZWdleC50ZXN0KHByb2Nlc3NlZFRhZ05hbWUpKSB7XG4gICAgcmV0dXJuIFwiZGl2XCI7XG4gIH1cbiAgcmV0dXJuIHByb2Nlc3NlZFRhZ05hbWU7XG59XG5sZXQgY2FudmFzU2VydmljZTtcbmxldCBjYW52YXNDdHg7XG5jb25zdCBTUkNTRVRfTk9UX1NQQUNFUyA9IC9eW14gXFx0XFxuXFxyXFx1MDAwY10rLztcbmNvbnN0IFNSQ1NFVF9DT01NQVNfT1JfU1BBQ0VTID0gL15bLCBcXHRcXG5cXHJcXHUwMDBjXSsvO1xuZnVuY3Rpb24gZ2V0QWJzb2x1dGVTcmNzZXRTdHJpbmcoZG9jLCBhdHRyaWJ1dGVWYWx1ZSkge1xuICBpZiAoYXR0cmlidXRlVmFsdWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG4gIGxldCBwb3MgPSAwO1xuICBmdW5jdGlvbiBjb2xsZWN0Q2hhcmFjdGVycyhyZWdFeCkge1xuICAgIGxldCBjaGFycztcbiAgICBjb25zdCBtYXRjaCA9IHJlZ0V4LmV4ZWMoYXR0cmlidXRlVmFsdWUuc3Vic3RyaW5nKHBvcykpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgY2hhcnMgPSBtYXRjaFswXTtcbiAgICAgIHBvcyArPSBjaGFycy5sZW5ndGg7XG4gICAgICByZXR1cm4gY2hhcnM7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGNvbnN0IG91dHB1dCA9IFtdO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbGxlY3RDaGFyYWN0ZXJzKFNSQ1NFVF9DT01NQVNfT1JfU1BBQ0VTKTtcbiAgICBpZiAocG9zID49IGF0dHJpYnV0ZVZhbHVlLmxlbmd0aCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGxldCB1cmwgPSBjb2xsZWN0Q2hhcmFjdGVycyhTUkNTRVRfTk9UX1NQQUNFUyk7XG4gICAgaWYgKHVybC5zbGljZSgtMSkgPT09IFwiLFwiKSB7XG4gICAgICB1cmwgPSBhYnNvbHV0ZVRvRG9jKGRvYywgdXJsLnN1YnN0cmluZygwLCB1cmwubGVuZ3RoIC0gMSkpO1xuICAgICAgb3V0cHV0LnB1c2godXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGRlc2NyaXB0b3JzU3RyID0gXCJcIjtcbiAgICAgIHVybCA9IGFic29sdXRlVG9Eb2MoZG9jLCB1cmwpO1xuICAgICAgbGV0IGluUGFyZW5zID0gZmFsc2U7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCBjID0gYXR0cmlidXRlVmFsdWUuY2hhckF0KHBvcyk7XG4gICAgICAgIGlmIChjID09PSBcIlwiKSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goKHVybCArIGRlc2NyaXB0b3JzU3RyKS50cmltKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKCFpblBhcmVucykge1xuICAgICAgICAgIGlmIChjID09PSBcIixcIikge1xuICAgICAgICAgICAgcG9zICs9IDE7XG4gICAgICAgICAgICBvdXRwdXQucHVzaCgodXJsICsgZGVzY3JpcHRvcnNTdHIpLnRyaW0oKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICBpblBhcmVucyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjID09PSBcIilcIikge1xuICAgICAgICAgICAgaW5QYXJlbnMgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVzY3JpcHRvcnNTdHIgKz0gYztcbiAgICAgICAgcG9zICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbihcIiwgXCIpO1xufVxuY29uc3QgY2FjaGVkRG9jdW1lbnQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIGFic29sdXRlVG9Eb2MoZG9jLCBhdHRyaWJ1dGVWYWx1ZSkge1xuICBpZiAoIWF0dHJpYnV0ZVZhbHVlIHx8IGF0dHJpYnV0ZVZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuICByZXR1cm4gZ2V0SHJlZihkb2MsIGF0dHJpYnV0ZVZhbHVlKTtcbn1cbmZ1bmN0aW9uIGlzU1ZHRWxlbWVudChlbCkge1xuICByZXR1cm4gQm9vbGVhbihlbC50YWdOYW1lID09PSBcInN2Z1wiIHx8IGVsLm93bmVyU1ZHRWxlbWVudCk7XG59XG5mdW5jdGlvbiBnZXRIcmVmKGRvYywgY3VzdG9tSHJlZikge1xuICBsZXQgYSA9IGNhY2hlZERvY3VtZW50LmdldChkb2MpO1xuICBpZiAoIWEpIHtcbiAgICBhID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNhY2hlZERvY3VtZW50LnNldChkb2MsIGEpO1xuICB9XG4gIGlmICghY3VzdG9tSHJlZikge1xuICAgIGN1c3RvbUhyZWYgPSBcIlwiO1xuICB9IGVsc2UgaWYgKGN1c3RvbUhyZWYuc3RhcnRzV2l0aChcImJsb2I6XCIpIHx8IGN1c3RvbUhyZWYuc3RhcnRzV2l0aChcImRhdGE6XCIpKSB7XG4gICAgcmV0dXJuIGN1c3RvbUhyZWY7XG4gIH1cbiAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGN1c3RvbUhyZWYpO1xuICByZXR1cm4gYS5ocmVmO1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtQXR0cmlidXRlKGRvYywgdGFnTmFtZSwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAobmFtZSA9PT0gXCJzcmNcIiB8fCBuYW1lID09PSBcImhyZWZcIiAmJiAhKHRhZ05hbWUgPT09IFwidXNlXCIgJiYgdmFsdWVbMF0gPT09IFwiI1wiKSkge1xuICAgIHJldHVybiBhYnNvbHV0ZVRvRG9jKGRvYywgdmFsdWUpO1xuICB9IGVsc2UgaWYgKG5hbWUgPT09IFwieGxpbms6aHJlZlwiICYmIHZhbHVlWzBdICE9PSBcIiNcIikge1xuICAgIHJldHVybiBhYnNvbHV0ZVRvRG9jKGRvYywgdmFsdWUpO1xuICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiYmFja2dyb3VuZFwiICYmICh0YWdOYW1lID09PSBcInRhYmxlXCIgfHwgdGFnTmFtZSA9PT0gXCJ0ZFwiIHx8IHRhZ05hbWUgPT09IFwidGhcIikpIHtcbiAgICByZXR1cm4gYWJzb2x1dGVUb0RvYyhkb2MsIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChuYW1lID09PSBcInNyY3NldFwiKSB7XG4gICAgcmV0dXJuIGdldEFic29sdXRlU3Jjc2V0U3RyaW5nKGRvYywgdmFsdWUpO1xuICB9IGVsc2UgaWYgKG5hbWUgPT09IFwic3R5bGVcIikge1xuICAgIHJldHVybiBhYnNvbHV0aWZ5VVJMcyh2YWx1ZSwgZ2V0SHJlZihkb2MpKTtcbiAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcIm9iamVjdFwiICYmIG5hbWUgPT09IFwiZGF0YVwiKSB7XG4gICAgcmV0dXJuIGFic29sdXRlVG9Eb2MoZG9jLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gaWdub3JlQXR0cmlidXRlKHRhZ05hbWUsIG5hbWUsIF92YWx1ZSkge1xuICByZXR1cm4gKHRhZ05hbWUgPT09IFwidmlkZW9cIiB8fCB0YWdOYW1lID09PSBcImF1ZGlvXCIpICYmIG5hbWUgPT09IFwiYXV0b3BsYXlcIjtcbn1cbmZ1bmN0aW9uIF9pc0Jsb2NrZWRFbGVtZW50KGVsZW1lbnQsIGJsb2NrQ2xhc3MsIGJsb2NrU2VsZWN0b3IpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGJsb2NrQ2xhc3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhibG9ja0NsYXNzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgZUluZGV4ID0gZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoOyBlSW5kZXgtLTsgKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NMaXN0W2VJbmRleF07XG4gICAgICAgIGlmIChibG9ja0NsYXNzLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChibG9ja1NlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5tYXRjaGVzKGJsb2NrU2VsZWN0b3IpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGNsYXNzTWF0Y2hlc1JlZ2V4KG5vZGUyLCByZWdleCwgY2hlY2tBbmNlc3RvcnMpIHtcbiAgaWYgKCFub2RlMikgcmV0dXJuIGZhbHNlO1xuICBpZiAobm9kZTIubm9kZVR5cGUgIT09IG5vZGUyLkVMRU1FTlRfTk9ERSkge1xuICAgIGlmICghY2hlY2tBbmNlc3RvcnMpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gY2xhc3NNYXRjaGVzUmVnZXgoaW5kZXgucGFyZW50Tm9kZShub2RlMiksIHJlZ2V4LCBjaGVja0FuY2VzdG9ycyk7XG4gIH1cbiAgZm9yIChsZXQgZUluZGV4ID0gbm9kZTIuY2xhc3NMaXN0Lmxlbmd0aDsgZUluZGV4LS07ICkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IG5vZGUyLmNsYXNzTGlzdFtlSW5kZXhdO1xuICAgIGlmIChyZWdleC50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICBpZiAoIWNoZWNrQW5jZXN0b3JzKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBjbGFzc01hdGNoZXNSZWdleChpbmRleC5wYXJlbnROb2RlKG5vZGUyKSwgcmVnZXgsIGNoZWNrQW5jZXN0b3JzKTtcbn1cbmZ1bmN0aW9uIG5lZWRNYXNraW5nVGV4dChub2RlMiwgbWFza1RleHRDbGFzcywgbWFza1RleHRTZWxlY3RvciwgY2hlY2tBbmNlc3RvcnMpIHtcbiAgbGV0IGVsO1xuICBpZiAoaXNFbGVtZW50KG5vZGUyKSkge1xuICAgIGVsID0gbm9kZTI7XG4gICAgaWYgKCFpbmRleC5jaGlsZE5vZGVzKGVsKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaW5kZXgucGFyZW50RWxlbWVudChub2RlMikgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgZWwgPSBpbmRleC5wYXJlbnRFbGVtZW50KG5vZGUyKTtcbiAgfVxuICB0cnkge1xuICAgIGlmICh0eXBlb2YgbWFza1RleHRDbGFzcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKGNoZWNrQW5jZXN0b3JzKSB7XG4gICAgICAgIGlmIChlbC5jbG9zZXN0KGAuJHttYXNrVGV4dENsYXNzfWApKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMobWFza1RleHRDbGFzcykpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2xhc3NNYXRjaGVzUmVnZXgoZWwsIG1hc2tUZXh0Q2xhc3MsIGNoZWNrQW5jZXN0b3JzKSkgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChtYXNrVGV4dFNlbGVjdG9yKSB7XG4gICAgICBpZiAoY2hlY2tBbmNlc3RvcnMpIHtcbiAgICAgICAgaWYgKGVsLmNsb3Nlc3QobWFza1RleHRTZWxlY3RvcikpIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGVsLm1hdGNoZXMobWFza1RleHRTZWxlY3RvcikpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIG9uY2VJZnJhbWVMb2FkZWQoaWZyYW1lRWwsIGxpc3RlbmVyLCBpZnJhbWVMb2FkVGltZW91dCkge1xuICBjb25zdCB3aW4gPSBpZnJhbWVFbC5jb250ZW50V2luZG93O1xuICBpZiAoIXdpbikge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZmlyZWQgPSBmYWxzZTtcbiAgbGV0IHJlYWR5U3RhdGU7XG4gIHRyeSB7XG4gICAgcmVhZHlTdGF0ZSA9IHdpbi5kb2N1bWVudC5yZWFkeVN0YXRlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocmVhZHlTdGF0ZSAhPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghZmlyZWQpIHtcbiAgICAgICAgbGlzdGVuZXIoKTtcbiAgICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGlmcmFtZUxvYWRUaW1lb3V0KTtcbiAgICBpZnJhbWVFbC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgYmxhbmtVcmwgPSBcImFib3V0OmJsYW5rXCI7XG4gIGlmICh3aW4ubG9jYXRpb24uaHJlZiAhPT0gYmxhbmtVcmwgfHwgaWZyYW1lRWwuc3JjID09PSBibGFua1VybCB8fCBpZnJhbWVFbC5zcmMgPT09IFwiXCIpIHtcbiAgICBzZXRUaW1lb3V0KGxpc3RlbmVyLCAwKTtcbiAgICByZXR1cm4gaWZyYW1lRWwuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbGlzdGVuZXIpO1xuICB9XG4gIGlmcmFtZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGxpc3RlbmVyKTtcbn1cbmZ1bmN0aW9uIG9uY2VTdHlsZXNoZWV0TG9hZGVkKGxpbmssIGxpc3RlbmVyLCBzdHlsZVNoZWV0TG9hZFRpbWVvdXQpIHtcbiAgbGV0IGZpcmVkID0gZmFsc2U7XG4gIGxldCBzdHlsZVNoZWV0TG9hZGVkO1xuICB0cnkge1xuICAgIHN0eWxlU2hlZXRMb2FkZWQgPSBsaW5rLnNoZWV0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoc3R5bGVTaGVldExvYWRlZCkgcmV0dXJuO1xuICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgfVxuICB9LCBzdHlsZVNoZWV0TG9hZFRpbWVvdXQpO1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIGZpcmVkID0gdHJ1ZTtcbiAgICBsaXN0ZW5lcigpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNlcmlhbGl6ZU5vZGUobiwgb3B0aW9ucykge1xuICBjb25zdCB7XG4gICAgZG9jLFxuICAgIG1pcnJvcixcbiAgICBibG9ja0NsYXNzLFxuICAgIGJsb2NrU2VsZWN0b3IsXG4gICAgbmVlZHNNYXNrLFxuICAgIGlubGluZVN0eWxlc2hlZXQsXG4gICAgbWFza0lucHV0T3B0aW9ucyA9IHt9LFxuICAgIG1hc2tUZXh0Rm4sXG4gICAgbWFza0lucHV0Rm4sXG4gICAgZGF0YVVSTE9wdGlvbnMgPSB7fSxcbiAgICBpbmxpbmVJbWFnZXMsXG4gICAgcmVjb3JkQ2FudmFzLFxuICAgIGtlZXBJZnJhbWVTcmNGbixcbiAgICBuZXdseUFkZGVkRWxlbWVudCA9IGZhbHNlLFxuICAgIGNzc0NhcHR1cmVkID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHJvb3RJZCA9IGdldFJvb3RJZChkb2MsIG1pcnJvcik7XG4gIHN3aXRjaCAobi5ub2RlVHlwZSkge1xuICAgIGNhc2Ugbi5ET0NVTUVOVF9OT0RFOlxuICAgICAgaWYgKG4uY29tcGF0TW9kZSAhPT0gXCJDU1MxQ29tcGF0XCIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBOb2RlVHlwZS5Eb2N1bWVudCxcbiAgICAgICAgICBjaGlsZE5vZGVzOiBbXSxcbiAgICAgICAgICBjb21wYXRNb2RlOiBuLmNvbXBhdE1vZGVcbiAgICAgICAgICAvLyBwcm9iYWJseSBcIkJhY2tDb21wYXRcIlxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBOb2RlVHlwZS5Eb2N1bWVudCxcbiAgICAgICAgICBjaGlsZE5vZGVzOiBbXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIGNhc2Ugbi5ET0NVTUVOVF9UWVBFX05PREU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBOb2RlVHlwZS5Eb2N1bWVudFR5cGUsXG4gICAgICAgIG5hbWU6IG4ubmFtZSxcbiAgICAgICAgcHVibGljSWQ6IG4ucHVibGljSWQsXG4gICAgICAgIHN5c3RlbUlkOiBuLnN5c3RlbUlkLFxuICAgICAgICByb290SWRcbiAgICAgIH07XG4gICAgY2FzZSBuLkVMRU1FTlRfTk9ERTpcbiAgICAgIHJldHVybiBzZXJpYWxpemVFbGVtZW50Tm9kZShuLCB7XG4gICAgICAgIGRvYyxcbiAgICAgICAgYmxvY2tDbGFzcyxcbiAgICAgICAgYmxvY2tTZWxlY3RvcixcbiAgICAgICAgaW5saW5lU3R5bGVzaGVldCxcbiAgICAgICAgbWFza0lucHV0T3B0aW9ucyxcbiAgICAgICAgbWFza0lucHV0Rm4sXG4gICAgICAgIGRhdGFVUkxPcHRpb25zLFxuICAgICAgICBpbmxpbmVJbWFnZXMsXG4gICAgICAgIHJlY29yZENhbnZhcyxcbiAgICAgICAga2VlcElmcmFtZVNyY0ZuLFxuICAgICAgICBuZXdseUFkZGVkRWxlbWVudCxcbiAgICAgICAgcm9vdElkXG4gICAgICB9KTtcbiAgICBjYXNlIG4uVEVYVF9OT0RFOlxuICAgICAgcmV0dXJuIHNlcmlhbGl6ZVRleHROb2RlKG4sIHtcbiAgICAgICAgZG9jLFxuICAgICAgICBuZWVkc01hc2ssXG4gICAgICAgIG1hc2tUZXh0Rm4sXG4gICAgICAgIHJvb3RJZCxcbiAgICAgICAgY3NzQ2FwdHVyZWRcbiAgICAgIH0pO1xuICAgIGNhc2Ugbi5DREFUQV9TRUNUSU9OX05PREU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBOb2RlVHlwZS5DREFUQSxcbiAgICAgICAgdGV4dENvbnRlbnQ6IFwiXCIsXG4gICAgICAgIHJvb3RJZFxuICAgICAgfTtcbiAgICBjYXNlIG4uQ09NTUVOVF9OT0RFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogTm9kZVR5cGUuQ29tbWVudCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IGluZGV4LnRleHRDb250ZW50KG4pIHx8IFwiXCIsXG4gICAgICAgIHJvb3RJZFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiBnZXRSb290SWQoZG9jLCBtaXJyb3IpIHtcbiAgaWYgKCFtaXJyb3IuaGFzTm9kZShkb2MpKSByZXR1cm4gdm9pZCAwO1xuICBjb25zdCBkb2NJZCA9IG1pcnJvci5nZXRJZChkb2MpO1xuICByZXR1cm4gZG9jSWQgPT09IDEgPyB2b2lkIDAgOiBkb2NJZDtcbn1cbmZ1bmN0aW9uIHNlcmlhbGl6ZVRleHROb2RlKG4sIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBuZWVkc01hc2ssIG1hc2tUZXh0Rm4sIHJvb3RJZCwgY3NzQ2FwdHVyZWQgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHBhcmVudCA9IGluZGV4LnBhcmVudE5vZGUobik7XG4gIGNvbnN0IHBhcmVudFRhZ05hbWUgPSBwYXJlbnQgJiYgcGFyZW50LnRhZ05hbWU7XG4gIGxldCB0ZXh0Q29udGVudDIgPSBcIlwiO1xuICBjb25zdCBpc1N0eWxlID0gcGFyZW50VGFnTmFtZSA9PT0gXCJTVFlMRVwiID8gdHJ1ZSA6IHZvaWQgMDtcbiAgY29uc3QgaXNTY3JpcHQgPSBwYXJlbnRUYWdOYW1lID09PSBcIlNDUklQVFwiID8gdHJ1ZSA6IHZvaWQgMDtcbiAgaWYgKGlzU2NyaXB0KSB7XG4gICAgdGV4dENvbnRlbnQyID0gXCJTQ1JJUFRfUExBQ0VIT0xERVJcIjtcbiAgfSBlbHNlIGlmICghY3NzQ2FwdHVyZWQpIHtcbiAgICB0ZXh0Q29udGVudDIgPSBpbmRleC50ZXh0Q29udGVudChuKTtcbiAgICBpZiAoaXNTdHlsZSAmJiB0ZXh0Q29udGVudDIpIHtcbiAgICAgIHRleHRDb250ZW50MiA9IGFic29sdXRpZnlVUkxzKHRleHRDb250ZW50MiwgZ2V0SHJlZihvcHRpb25zLmRvYykpO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU3R5bGUgJiYgIWlzU2NyaXB0ICYmIHRleHRDb250ZW50MiAmJiBuZWVkc01hc2spIHtcbiAgICB0ZXh0Q29udGVudDIgPSBtYXNrVGV4dEZuID8gbWFza1RleHRGbih0ZXh0Q29udGVudDIsIGluZGV4LnBhcmVudEVsZW1lbnQobikpIDogdGV4dENvbnRlbnQyLnJlcGxhY2UoL1tcXFNdL2csIFwiKlwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IE5vZGVUeXBlLlRleHQsXG4gICAgdGV4dENvbnRlbnQ6IHRleHRDb250ZW50MiB8fCBcIlwiLFxuICAgIHJvb3RJZFxuICB9O1xufVxuZnVuY3Rpb24gc2VyaWFsaXplRWxlbWVudE5vZGUobiwgb3B0aW9ucykge1xuICBjb25zdCB7XG4gICAgZG9jLFxuICAgIGJsb2NrQ2xhc3MsXG4gICAgYmxvY2tTZWxlY3RvcixcbiAgICBpbmxpbmVTdHlsZXNoZWV0LFxuICAgIG1hc2tJbnB1dE9wdGlvbnMgPSB7fSxcbiAgICBtYXNrSW5wdXRGbixcbiAgICBkYXRhVVJMT3B0aW9ucyA9IHt9LFxuICAgIGlubGluZUltYWdlcyxcbiAgICByZWNvcmRDYW52YXMsXG4gICAga2VlcElmcmFtZVNyY0ZuLFxuICAgIG5ld2x5QWRkZWRFbGVtZW50ID0gZmFsc2UsXG4gICAgcm9vdElkXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBuZWVkQmxvY2sgPSBfaXNCbG9ja2VkRWxlbWVudChuLCBibG9ja0NsYXNzLCBibG9ja1NlbGVjdG9yKTtcbiAgY29uc3QgdGFnTmFtZSA9IGdldFZhbGlkVGFnTmFtZShuKTtcbiAgbGV0IGF0dHJpYnV0ZXMgPSB7fTtcbiAgY29uc3QgbGVuID0gbi5hdHRyaWJ1dGVzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGF0dHIgPSBuLmF0dHJpYnV0ZXNbaV07XG4gICAgaWYgKCFpZ25vcmVBdHRyaWJ1dGUodGFnTmFtZSwgYXR0ci5uYW1lLCBhdHRyLnZhbHVlKSkge1xuICAgICAgYXR0cmlidXRlc1thdHRyLm5hbWVdID0gdHJhbnNmb3JtQXR0cmlidXRlKFxuICAgICAgICBkb2MsXG4gICAgICAgIHRhZ05hbWUsXG4gICAgICAgIHRvTG93ZXJDYXNlKGF0dHIubmFtZSksXG4gICAgICAgIGF0dHIudmFsdWVcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGlmICh0YWdOYW1lID09PSBcImxpbmtcIiAmJiBpbmxpbmVTdHlsZXNoZWV0KSB7XG4gICAgY29uc3Qgc3R5bGVzaGVldCA9IEFycmF5LmZyb20oZG9jLnN0eWxlU2hlZXRzKS5maW5kKChzKSA9PiB7XG4gICAgICByZXR1cm4gcy5ocmVmID09PSBuLmhyZWY7XG4gICAgfSk7XG4gICAgbGV0IGNzc1RleHQgPSBudWxsO1xuICAgIGlmIChzdHlsZXNoZWV0KSB7XG4gICAgICBjc3NUZXh0ID0gc3RyaW5naWZ5U3R5bGVzaGVldChzdHlsZXNoZWV0KTtcbiAgICB9XG4gICAgaWYgKGNzc1RleHQpIHtcbiAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLnJlbDtcbiAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLmhyZWY7XG4gICAgICBhdHRyaWJ1dGVzLl9jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICB9XG4gIH1cbiAgaWYgKHRhZ05hbWUgPT09IFwic3R5bGVcIiAmJiBuLnNoZWV0KSB7XG4gICAgbGV0IGNzc1RleHQgPSBzdHJpbmdpZnlTdHlsZXNoZWV0KFxuICAgICAgbi5zaGVldFxuICAgICk7XG4gICAgaWYgKGNzc1RleHQpIHtcbiAgICAgIGlmIChuLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBjc3NUZXh0ID0gbWFya0Nzc1NwbGl0cyhjc3NUZXh0LCBuKTtcbiAgICAgIH1cbiAgICAgIGF0dHJpYnV0ZXMuX2Nzc1RleHQgPSBjc3NUZXh0O1xuICAgIH1cbiAgfVxuICBpZiAodGFnTmFtZSA9PT0gXCJpbnB1dFwiIHx8IHRhZ05hbWUgPT09IFwidGV4dGFyZWFcIiB8fCB0YWdOYW1lID09PSBcInNlbGVjdFwiKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuLnZhbHVlO1xuICAgIGNvbnN0IGNoZWNrZWQgPSBuLmNoZWNrZWQ7XG4gICAgaWYgKGF0dHJpYnV0ZXMudHlwZSAhPT0gXCJyYWRpb1wiICYmIGF0dHJpYnV0ZXMudHlwZSAhPT0gXCJjaGVja2JveFwiICYmIGF0dHJpYnV0ZXMudHlwZSAhPT0gXCJzdWJtaXRcIiAmJiBhdHRyaWJ1dGVzLnR5cGUgIT09IFwiYnV0dG9uXCIgJiYgdmFsdWUpIHtcbiAgICAgIGF0dHJpYnV0ZXMudmFsdWUgPSBtYXNrSW5wdXRWYWx1ZSh7XG4gICAgICAgIGVsZW1lbnQ6IG4sXG4gICAgICAgIHR5cGU6IGdldElucHV0VHlwZShuKSxcbiAgICAgICAgdGFnTmFtZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXG4gICAgICAgIG1hc2tJbnB1dEZuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNoZWNrZWQpIHtcbiAgICAgIGF0dHJpYnV0ZXMuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgfVxuICB9XG4gIGlmICh0YWdOYW1lID09PSBcIm9wdGlvblwiKSB7XG4gICAgaWYgKG4uc2VsZWN0ZWQgJiYgIW1hc2tJbnB1dE9wdGlvbnNbXCJzZWxlY3RcIl0pIHtcbiAgICAgIGF0dHJpYnV0ZXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgYXR0cmlidXRlcy5zZWxlY3RlZDtcbiAgICB9XG4gIH1cbiAgaWYgKHRhZ05hbWUgPT09IFwiZGlhbG9nXCIgJiYgbi5vcGVuKSB7XG4gICAgYXR0cmlidXRlcy5ycl9vcGVuX21vZGUgPSBuLm1hdGNoZXMoXCJkaWFsb2c6bW9kYWxcIikgPyBcIm1vZGFsXCIgOiBcIm5vbi1tb2RhbFwiO1xuICB9XG4gIGlmICh0YWdOYW1lID09PSBcImNhbnZhc1wiICYmIHJlY29yZENhbnZhcykge1xuICAgIGlmIChuLl9fY29udGV4dCA9PT0gXCIyZFwiKSB7XG4gICAgICBpZiAoIWlzMkRDYW52YXNCbGFuayhuKSkge1xuICAgICAgICBhdHRyaWJ1dGVzLnJyX2RhdGFVUkwgPSBuLnRvRGF0YVVSTChcbiAgICAgICAgICBkYXRhVVJMT3B0aW9ucy50eXBlLFxuICAgICAgICAgIGRhdGFVUkxPcHRpb25zLnF1YWxpdHlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoXCJfX2NvbnRleHRcIiBpbiBuKSkge1xuICAgICAgY29uc3QgY2FudmFzRGF0YVVSTCA9IG4udG9EYXRhVVJMKFxuICAgICAgICBkYXRhVVJMT3B0aW9ucy50eXBlLFxuICAgICAgICBkYXRhVVJMT3B0aW9ucy5xdWFsaXR5XG4gICAgICApO1xuICAgICAgY29uc3QgYmxhbmtDYW52YXMgPSBkb2MuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgIGJsYW5rQ2FudmFzLndpZHRoID0gbi53aWR0aDtcbiAgICAgIGJsYW5rQ2FudmFzLmhlaWdodCA9IG4uaGVpZ2h0O1xuICAgICAgY29uc3QgYmxhbmtDYW52YXNEYXRhVVJMID0gYmxhbmtDYW52YXMudG9EYXRhVVJMKFxuICAgICAgICBkYXRhVVJMT3B0aW9ucy50eXBlLFxuICAgICAgICBkYXRhVVJMT3B0aW9ucy5xdWFsaXR5XG4gICAgICApO1xuICAgICAgaWYgKGNhbnZhc0RhdGFVUkwgIT09IGJsYW5rQ2FudmFzRGF0YVVSTCkge1xuICAgICAgICBhdHRyaWJ1dGVzLnJyX2RhdGFVUkwgPSBjYW52YXNEYXRhVVJMO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAodGFnTmFtZSA9PT0gXCJpbWdcIiAmJiBpbmxpbmVJbWFnZXMpIHtcbiAgICBpZiAoIWNhbnZhc1NlcnZpY2UpIHtcbiAgICAgIGNhbnZhc1NlcnZpY2UgPSBkb2MuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgIGNhbnZhc0N0eCA9IGNhbnZhc1NlcnZpY2UuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIH1cbiAgICBjb25zdCBpbWFnZSA9IG47XG4gICAgY29uc3QgaW1hZ2VTcmMgPSBpbWFnZS5jdXJyZW50U3JjIHx8IGltYWdlLmdldEF0dHJpYnV0ZShcInNyY1wiKSB8fCBcIjx1bmtub3duLXNyYz5cIjtcbiAgICBjb25zdCBwcmlvckNyb3NzT3JpZ2luID0gaW1hZ2UuY3Jvc3NPcmlnaW47XG4gICAgY29uc3QgcmVjb3JkSW5saW5lSW1hZ2UgPSAoKSA9PiB7XG4gICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCByZWNvcmRJbmxpbmVJbWFnZSk7XG4gICAgICB0cnkge1xuICAgICAgICBjYW52YXNTZXJ2aWNlLndpZHRoID0gaW1hZ2UubmF0dXJhbFdpZHRoO1xuICAgICAgICBjYW52YXNTZXJ2aWNlLmhlaWdodCA9IGltYWdlLm5hdHVyYWxIZWlnaHQ7XG4gICAgICAgIGNhbnZhc0N0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgICBhdHRyaWJ1dGVzLnJyX2RhdGFVUkwgPSBjYW52YXNTZXJ2aWNlLnRvRGF0YVVSTChcbiAgICAgICAgICBkYXRhVVJMT3B0aW9ucy50eXBlLFxuICAgICAgICAgIGRhdGFVUkxPcHRpb25zLnF1YWxpdHlcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoaW1hZ2UuY3Jvc3NPcmlnaW4gIT09IFwiYW5vbnltb3VzXCIpIHtcbiAgICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCI7XG4gICAgICAgICAgaWYgKGltYWdlLmNvbXBsZXRlICYmIGltYWdlLm5hdHVyYWxXaWR0aCAhPT0gMClcbiAgICAgICAgICAgIHJlY29yZElubGluZUltYWdlKCk7XG4gICAgICAgICAgZWxzZSBpbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCByZWNvcmRJbmxpbmVJbWFnZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBDYW5ub3QgaW5saW5lIGltZyBzcmM9JHtpbWFnZVNyY30hIEVycm9yOiAke2Vycn1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGltYWdlLmNyb3NzT3JpZ2luID09PSBcImFub255bW91c1wiKSB7XG4gICAgICAgIHByaW9yQ3Jvc3NPcmlnaW4gPyBhdHRyaWJ1dGVzLmNyb3NzT3JpZ2luID0gcHJpb3JDcm9zc09yaWdpbiA6IGltYWdlLnJlbW92ZUF0dHJpYnV0ZShcImNyb3Nzb3JpZ2luXCIpO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltYWdlLmNvbXBsZXRlICYmIGltYWdlLm5hdHVyYWxXaWR0aCAhPT0gMCkgcmVjb3JkSW5saW5lSW1hZ2UoKTtcbiAgICBlbHNlIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHJlY29yZElubGluZUltYWdlKTtcbiAgfVxuICBpZiAodGFnTmFtZSA9PT0gXCJhdWRpb1wiIHx8IHRhZ05hbWUgPT09IFwidmlkZW9cIikge1xuICAgIGNvbnN0IG1lZGlhQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gICAgbWVkaWFBdHRyaWJ1dGVzLnJyX21lZGlhU3RhdGUgPSBuLnBhdXNlZCA/IFwicGF1c2VkXCIgOiBcInBsYXllZFwiO1xuICAgIG1lZGlhQXR0cmlidXRlcy5ycl9tZWRpYUN1cnJlbnRUaW1lID0gbi5jdXJyZW50VGltZTtcbiAgICBtZWRpYUF0dHJpYnV0ZXMucnJfbWVkaWFQbGF5YmFja1JhdGUgPSBuLnBsYXliYWNrUmF0ZTtcbiAgICBtZWRpYUF0dHJpYnV0ZXMucnJfbWVkaWFNdXRlZCA9IG4ubXV0ZWQ7XG4gICAgbWVkaWFBdHRyaWJ1dGVzLnJyX21lZGlhTG9vcCA9IG4ubG9vcDtcbiAgICBtZWRpYUF0dHJpYnV0ZXMucnJfbWVkaWFWb2x1bWUgPSBuLnZvbHVtZTtcbiAgfVxuICBpZiAoIW5ld2x5QWRkZWRFbGVtZW50KSB7XG4gICAgaWYgKG4uc2Nyb2xsTGVmdCkge1xuICAgICAgYXR0cmlidXRlcy5ycl9zY3JvbGxMZWZ0ID0gbi5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgICBpZiAobi5zY3JvbGxUb3ApIHtcbiAgICAgIGF0dHJpYnV0ZXMucnJfc2Nyb2xsVG9wID0gbi5zY3JvbGxUb3A7XG4gICAgfVxuICB9XG4gIGlmIChuZWVkQmxvY2spIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IG4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgYXR0cmlidXRlcyA9IHtcbiAgICAgIGNsYXNzOiBhdHRyaWJ1dGVzLmNsYXNzLFxuICAgICAgcnJfd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgIHJyX2hlaWdodDogYCR7aGVpZ2h0fXB4YFxuICAgIH07XG4gIH1cbiAgaWYgKHRhZ05hbWUgPT09IFwiaWZyYW1lXCIgJiYgIWtlZXBJZnJhbWVTcmNGbihhdHRyaWJ1dGVzLnNyYykpIHtcbiAgICBpZiAoIW4uY29udGVudERvY3VtZW50KSB7XG4gICAgICBhdHRyaWJ1dGVzLnJyX3NyYyA9IGF0dHJpYnV0ZXMuc3JjO1xuICAgIH1cbiAgICBkZWxldGUgYXR0cmlidXRlcy5zcmM7XG4gIH1cbiAgbGV0IGlzQ3VzdG9tRWxlbWVudDtcbiAgdHJ5IHtcbiAgICBpZiAoY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSBpc0N1c3RvbUVsZW1lbnQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBOb2RlVHlwZS5FbGVtZW50LFxuICAgIHRhZ05hbWUsXG4gICAgYXR0cmlidXRlcyxcbiAgICBjaGlsZE5vZGVzOiBbXSxcbiAgICBpc1NWRzogaXNTVkdFbGVtZW50KG4pIHx8IHZvaWQgMCxcbiAgICBuZWVkQmxvY2ssXG4gICAgcm9vdElkLFxuICAgIGlzQ3VzdG9tOiBpc0N1c3RvbUVsZW1lbnRcbiAgfTtcbn1cbmZ1bmN0aW9uIGxvd2VySWZFeGlzdHMobWF5YmVBdHRyKSB7XG4gIGlmIChtYXliZUF0dHIgPT09IHZvaWQgMCB8fCBtYXliZUF0dHIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbWF5YmVBdHRyLnRvTG93ZXJDYXNlKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNsaW1ET01FeGNsdWRlZChzbiwgc2xpbURPTU9wdGlvbnMpIHtcbiAgaWYgKHNsaW1ET01PcHRpb25zLmNvbW1lbnQgJiYgc24udHlwZSA9PT0gTm9kZVR5cGUuQ29tbWVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHNuLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpIHtcbiAgICBpZiAoc2xpbURPTU9wdGlvbnMuc2NyaXB0ICYmIC8vIHNjcmlwdCB0YWdcbiAgICAoc24udGFnTmFtZSA9PT0gXCJzY3JpcHRcIiB8fCAvLyAobW9kdWxlKXByZWxvYWQgbGlua1xuICAgIHNuLnRhZ05hbWUgPT09IFwibGlua1wiICYmIChzbi5hdHRyaWJ1dGVzLnJlbCA9PT0gXCJwcmVsb2FkXCIgfHwgc24uYXR0cmlidXRlcy5yZWwgPT09IFwibW9kdWxlcHJlbG9hZFwiKSAmJiBzbi5hdHRyaWJ1dGVzLmFzID09PSBcInNjcmlwdFwiIHx8IC8vIHByZWZldGNoIGxpbmtcbiAgICBzbi50YWdOYW1lID09PSBcImxpbmtcIiAmJiBzbi5hdHRyaWJ1dGVzLnJlbCA9PT0gXCJwcmVmZXRjaFwiICYmIHR5cGVvZiBzbi5hdHRyaWJ1dGVzLmhyZWYgPT09IFwic3RyaW5nXCIgJiYgZXh0cmFjdEZpbGVFeHRlbnNpb24oc24uYXR0cmlidXRlcy5ocmVmKSA9PT0gXCJqc1wiKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkRmF2aWNvbiAmJiAoc24udGFnTmFtZSA9PT0gXCJsaW5rXCIgJiYgc24uYXR0cmlidXRlcy5yZWwgPT09IFwic2hvcnRjdXQgaWNvblwiIHx8IHNuLnRhZ05hbWUgPT09IFwibWV0YVwiICYmIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkubWF0Y2goXG4gICAgICAvXm1zYXBwbGljYXRpb24tdGlsZShpbWFnZXxjb2xvcikkL1xuICAgICkgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcImFwcGxpY2F0aW9uLW5hbWVcIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMucmVsKSA9PT0gXCJpY29uXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLnJlbCkgPT09IFwiYXBwbGUtdG91Y2gtaWNvblwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5yZWwpID09PSBcInNob3J0Y3V0IGljb25cIikpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHNuLnRhZ05hbWUgPT09IFwibWV0YVwiKSB7XG4gICAgICBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFEZXNjS2V5d29yZHMgJiYgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpLm1hdGNoKC9eZGVzY3JpcHRpb258a2V5d29yZHMkLykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRNZXRhU29jaWFsICYmIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMucHJvcGVydHkpLm1hdGNoKC9eKG9nfHR3aXR0ZXJ8ZmIpOi8pIHx8IC8vIG9nID0gb3BlbmdyYXBoIChmYWNlYm9vaylcbiAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKS5tYXRjaCgvXihvZ3x0d2l0dGVyKTovKSB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwicGludGVyZXN0XCIpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YVJvYm90cyAmJiAobG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcInJvYm90c1wiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJnb29nbGVib3RcIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwiYmluZ2JvdFwiKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFIdHRwRXF1aXYgJiYgc24uYXR0cmlidXRlc1tcImh0dHAtZXF1aXZcIl0gIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFBdXRob3JzaGlwICYmIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwiYXV0aG9yXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcImdlbmVyYXRvclwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJmcmFtZXdvcmtcIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwicHVibGlzaGVyXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcInByb2dpZFwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5wcm9wZXJ0eSkubWF0Y2goL15hcnRpY2xlOi8pIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5wcm9wZXJ0eSkubWF0Y2goL15wcm9kdWN0Oi8pKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFWZXJpZmljYXRpb24gJiYgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwieWFuZGV4LXZlcmlmaWNhdGlvblwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJjc3JmLXRva2VuXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcInA6ZG9tYWluX3ZlcmlmeVwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJ2ZXJpZnktdjFcIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwidmVyaWZpY2F0aW9uXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcInNob3BpZnktY2hlY2tvdXQtYXBpLXRva2VuXCIpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBzZXJpYWxpemVOb2RlV2l0aElkKG4sIG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGRvYyxcbiAgICBtaXJyb3IsXG4gICAgYmxvY2tDbGFzcyxcbiAgICBibG9ja1NlbGVjdG9yLFxuICAgIG1hc2tUZXh0Q2xhc3MsXG4gICAgbWFza1RleHRTZWxlY3RvcixcbiAgICBza2lwQ2hpbGQgPSBmYWxzZSxcbiAgICBpbmxpbmVTdHlsZXNoZWV0ID0gdHJ1ZSxcbiAgICBtYXNrSW5wdXRPcHRpb25zID0ge30sXG4gICAgbWFza1RleHRGbixcbiAgICBtYXNrSW5wdXRGbixcbiAgICBzbGltRE9NT3B0aW9ucyxcbiAgICBkYXRhVVJMT3B0aW9ucyA9IHt9LFxuICAgIGlubGluZUltYWdlcyA9IGZhbHNlLFxuICAgIHJlY29yZENhbnZhcyA9IGZhbHNlLFxuICAgIG9uU2VyaWFsaXplLFxuICAgIG9uSWZyYW1lTG9hZCxcbiAgICBpZnJhbWVMb2FkVGltZW91dCA9IDVlMyxcbiAgICBvblN0eWxlc2hlZXRMb2FkLFxuICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dCA9IDVlMyxcbiAgICBrZWVwSWZyYW1lU3JjRm4gPSAoKSA9PiBmYWxzZSxcbiAgICBuZXdseUFkZGVkRWxlbWVudCA9IGZhbHNlLFxuICAgIGNzc0NhcHR1cmVkID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG4gIGxldCB7IG5lZWRzTWFzayB9ID0gb3B0aW9ucztcbiAgbGV0IHsgcHJlc2VydmVXaGl0ZVNwYWNlID0gdHJ1ZSB9ID0gb3B0aW9ucztcbiAgaWYgKCFuZWVkc01hc2spIHtcbiAgICBjb25zdCBjaGVja0FuY2VzdG9ycyA9IG5lZWRzTWFzayA9PT0gdm9pZCAwO1xuICAgIG5lZWRzTWFzayA9IG5lZWRNYXNraW5nVGV4dChcbiAgICAgIG4sXG4gICAgICBtYXNrVGV4dENsYXNzLFxuICAgICAgbWFza1RleHRTZWxlY3RvcixcbiAgICAgIGNoZWNrQW5jZXN0b3JzXG4gICAgKTtcbiAgfVxuICBjb25zdCBfc2VyaWFsaXplZE5vZGUgPSBzZXJpYWxpemVOb2RlKG4sIHtcbiAgICBkb2MsXG4gICAgbWlycm9yLFxuICAgIGJsb2NrQ2xhc3MsXG4gICAgYmxvY2tTZWxlY3RvcixcbiAgICBuZWVkc01hc2ssXG4gICAgaW5saW5lU3R5bGVzaGVldCxcbiAgICBtYXNrSW5wdXRPcHRpb25zLFxuICAgIG1hc2tUZXh0Rm4sXG4gICAgbWFza0lucHV0Rm4sXG4gICAgZGF0YVVSTE9wdGlvbnMsXG4gICAgaW5saW5lSW1hZ2VzLFxuICAgIHJlY29yZENhbnZhcyxcbiAgICBrZWVwSWZyYW1lU3JjRm4sXG4gICAgbmV3bHlBZGRlZEVsZW1lbnQsXG4gICAgY3NzQ2FwdHVyZWRcbiAgfSk7XG4gIGlmICghX3NlcmlhbGl6ZWROb2RlKSB7XG4gICAgY29uc29sZS53YXJuKG4sIFwibm90IHNlcmlhbGl6ZWRcIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgbGV0IGlkO1xuICBpZiAobWlycm9yLmhhc05vZGUobikpIHtcbiAgICBpZCA9IG1pcnJvci5nZXRJZChuKTtcbiAgfSBlbHNlIGlmIChzbGltRE9NRXhjbHVkZWQoX3NlcmlhbGl6ZWROb2RlLCBzbGltRE9NT3B0aW9ucykgfHwgIXByZXNlcnZlV2hpdGVTcGFjZSAmJiBfc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuVGV4dCAmJiAhX3NlcmlhbGl6ZWROb2RlLnRleHRDb250ZW50LnJlcGxhY2UoL15cXHMrfFxccyskL2dtLCBcIlwiKS5sZW5ndGgpIHtcbiAgICBpZCA9IElHTk9SRURfTk9ERTtcbiAgfSBlbHNlIHtcbiAgICBpZCA9IGdlbklkKCk7XG4gIH1cbiAgY29uc3Qgc2VyaWFsaXplZE5vZGUgPSBPYmplY3QuYXNzaWduKF9zZXJpYWxpemVkTm9kZSwgeyBpZCB9KTtcbiAgbWlycm9yLmFkZChuLCBzZXJpYWxpemVkTm9kZSk7XG4gIGlmIChpZCA9PT0gSUdOT1JFRF9OT0RFKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKG9uU2VyaWFsaXplKSB7XG4gICAgb25TZXJpYWxpemUobik7XG4gIH1cbiAgbGV0IHJlY29yZENoaWxkID0gIXNraXBDaGlsZDtcbiAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpIHtcbiAgICByZWNvcmRDaGlsZCA9IHJlY29yZENoaWxkICYmICFzZXJpYWxpemVkTm9kZS5uZWVkQmxvY2s7XG4gICAgZGVsZXRlIHNlcmlhbGl6ZWROb2RlLm5lZWRCbG9jaztcbiAgICBjb25zdCBzaGFkb3dSb290RWwgPSBpbmRleC5zaGFkb3dSb290KG4pO1xuICAgIGlmIChzaGFkb3dSb290RWwgJiYgaXNOYXRpdmVTaGFkb3dEb20oc2hhZG93Um9vdEVsKSkge1xuICAgICAgc2VyaWFsaXplZE5vZGUuaXNTaGFkb3dIb3N0ID0gdHJ1ZTtcbiAgICAgIGlmIChzaGFkb3dSb290RWwuYWRvcHRlZFN0eWxlU2hlZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2VyaWFsaXplZE5vZGUuY2hyb21hdGljQWRvcHRlZFN0eWxlc2hlZXRzID0gc2hhZG93Um9vdEVsLmFkb3B0ZWRTdHlsZVNoZWV0cy5tYXAoXG4gICAgICAgICAgKHN0eWxlc2hlZXQpID0+IHN0cmluZ2lmeVN0eWxlc2hlZXQoc3R5bGVzaGVldClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCB8fCBzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSAmJiByZWNvcmRDaGlsZCkge1xuICAgIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkV2hpdGVzcGFjZSAmJiBzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50ICYmIHNlcmlhbGl6ZWROb2RlLnRhZ05hbWUgPT09IFwiaGVhZFwiKSB7XG4gICAgICBwcmVzZXJ2ZVdoaXRlU3BhY2UgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgYnlwYXNzT3B0aW9ucyA9IHtcbiAgICAgIGRvYyxcbiAgICAgIG1pcnJvcixcbiAgICAgIGJsb2NrQ2xhc3MsXG4gICAgICBibG9ja1NlbGVjdG9yLFxuICAgICAgbmVlZHNNYXNrLFxuICAgICAgbWFza1RleHRDbGFzcyxcbiAgICAgIG1hc2tUZXh0U2VsZWN0b3IsXG4gICAgICBza2lwQ2hpbGQsXG4gICAgICBpbmxpbmVTdHlsZXNoZWV0LFxuICAgICAgbWFza0lucHV0T3B0aW9ucyxcbiAgICAgIG1hc2tUZXh0Rm4sXG4gICAgICBtYXNrSW5wdXRGbixcbiAgICAgIHNsaW1ET01PcHRpb25zLFxuICAgICAgZGF0YVVSTE9wdGlvbnMsXG4gICAgICBpbmxpbmVJbWFnZXMsXG4gICAgICByZWNvcmRDYW52YXMsXG4gICAgICBwcmVzZXJ2ZVdoaXRlU3BhY2UsXG4gICAgICBvblNlcmlhbGl6ZSxcbiAgICAgIG9uSWZyYW1lTG9hZCxcbiAgICAgIGlmcmFtZUxvYWRUaW1lb3V0LFxuICAgICAgb25TdHlsZXNoZWV0TG9hZCxcbiAgICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dCxcbiAgICAgIGtlZXBJZnJhbWVTcmNGbixcbiAgICAgIGNzc0NhcHR1cmVkOiBmYWxzZVxuICAgIH07XG4gICAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiYgc2VyaWFsaXplZE5vZGUudGFnTmFtZSA9PT0gXCJ0ZXh0YXJlYVwiICYmIHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMudmFsdWUgIT09IHZvaWQgMCkgO1xuICAgIGVsc2Uge1xuICAgICAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiYgc2VyaWFsaXplZE5vZGUuYXR0cmlidXRlcy5fY3NzVGV4dCAhPT0gdm9pZCAwICYmIHR5cGVvZiBzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLl9jc3NUZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGJ5cGFzc09wdGlvbnMuY3NzQ2FwdHVyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBjaGlsZE4gb2YgQXJyYXkuZnJvbShpbmRleC5jaGlsZE5vZGVzKG4pKSkge1xuICAgICAgICBjb25zdCBzZXJpYWxpemVkQ2hpbGROb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChjaGlsZE4sIGJ5cGFzc09wdGlvbnMpO1xuICAgICAgICBpZiAoc2VyaWFsaXplZENoaWxkTm9kZSkge1xuICAgICAgICAgIHNlcmlhbGl6ZWROb2RlLmNoaWxkTm9kZXMucHVzaChzZXJpYWxpemVkQ2hpbGROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc2hhZG93Um9vdEVsID0gbnVsbDtcbiAgICBpZiAoaXNFbGVtZW50KG4pICYmIChzaGFkb3dSb290RWwgPSBpbmRleC5zaGFkb3dSb290KG4pKSkge1xuICAgICAgZm9yIChjb25zdCBjaGlsZE4gb2YgQXJyYXkuZnJvbShpbmRleC5jaGlsZE5vZGVzKHNoYWRvd1Jvb3RFbCkpKSB7XG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRDaGlsZE5vZGUgPSBzZXJpYWxpemVOb2RlV2l0aElkKGNoaWxkTiwgYnlwYXNzT3B0aW9ucyk7XG4gICAgICAgIGlmIChzZXJpYWxpemVkQ2hpbGROb2RlKSB7XG4gICAgICAgICAgaXNOYXRpdmVTaGFkb3dEb20oc2hhZG93Um9vdEVsKSAmJiAoc2VyaWFsaXplZENoaWxkTm9kZS5pc1NoYWRvdyA9IHRydWUpO1xuICAgICAgICAgIHNlcmlhbGl6ZWROb2RlLmNoaWxkTm9kZXMucHVzaChzZXJpYWxpemVkQ2hpbGROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBwYXJlbnQgPSBpbmRleC5wYXJlbnROb2RlKG4pO1xuICBpZiAocGFyZW50ICYmIGlzU2hhZG93Um9vdChwYXJlbnQpICYmIGlzTmF0aXZlU2hhZG93RG9tKHBhcmVudCkpIHtcbiAgICBzZXJpYWxpemVkTm9kZS5pc1NoYWRvdyA9IHRydWU7XG4gIH1cbiAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiYgc2VyaWFsaXplZE5vZGUudGFnTmFtZSA9PT0gXCJpZnJhbWVcIikge1xuICAgIG9uY2VJZnJhbWVMb2FkZWQoXG4gICAgICBuLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBpZnJhbWVEb2MgPSBuLmNvbnRlbnREb2N1bWVudDtcbiAgICAgICAgaWYgKGlmcmFtZURvYyAmJiBvbklmcmFtZUxvYWQpIHtcbiAgICAgICAgICBjb25zdCBzZXJpYWxpemVkSWZyYW1lTm9kZSA9IHNlcmlhbGl6ZU5vZGVXaXRoSWQoaWZyYW1lRG9jLCB7XG4gICAgICAgICAgICBkb2M6IGlmcmFtZURvYyxcbiAgICAgICAgICAgIG1pcnJvcixcbiAgICAgICAgICAgIGJsb2NrQ2xhc3MsXG4gICAgICAgICAgICBibG9ja1NlbGVjdG9yLFxuICAgICAgICAgICAgbmVlZHNNYXNrLFxuICAgICAgICAgICAgbWFza1RleHRDbGFzcyxcbiAgICAgICAgICAgIG1hc2tUZXh0U2VsZWN0b3IsXG4gICAgICAgICAgICBza2lwQ2hpbGQ6IGZhbHNlLFxuICAgICAgICAgICAgaW5saW5lU3R5bGVzaGVldCxcbiAgICAgICAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXG4gICAgICAgICAgICBtYXNrVGV4dEZuLFxuICAgICAgICAgICAgbWFza0lucHV0Rm4sXG4gICAgICAgICAgICBzbGltRE9NT3B0aW9ucyxcbiAgICAgICAgICAgIGRhdGFVUkxPcHRpb25zLFxuICAgICAgICAgICAgaW5saW5lSW1hZ2VzLFxuICAgICAgICAgICAgcmVjb3JkQ2FudmFzLFxuICAgICAgICAgICAgcHJlc2VydmVXaGl0ZVNwYWNlLFxuICAgICAgICAgICAgb25TZXJpYWxpemUsXG4gICAgICAgICAgICBvbklmcmFtZUxvYWQsXG4gICAgICAgICAgICBpZnJhbWVMb2FkVGltZW91dCxcbiAgICAgICAgICAgIG9uU3R5bGVzaGVldExvYWQsXG4gICAgICAgICAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXQsXG4gICAgICAgICAgICBrZWVwSWZyYW1lU3JjRm5cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoc2VyaWFsaXplZElmcmFtZU5vZGUpIHtcbiAgICAgICAgICAgIG9uSWZyYW1lTG9hZChcbiAgICAgICAgICAgICAgbixcbiAgICAgICAgICAgICAgc2VyaWFsaXplZElmcmFtZU5vZGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaWZyYW1lTG9hZFRpbWVvdXRcbiAgICApO1xuICB9XG4gIGlmIChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50ICYmIHNlcmlhbGl6ZWROb2RlLnRhZ05hbWUgPT09IFwibGlua1wiICYmIHR5cGVvZiBzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLnJlbCA9PT0gXCJzdHJpbmdcIiAmJiAoc2VyaWFsaXplZE5vZGUuYXR0cmlidXRlcy5yZWwgPT09IFwic3R5bGVzaGVldFwiIHx8IHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMucmVsID09PSBcInByZWxvYWRcIiAmJiB0eXBlb2Ygc2VyaWFsaXplZE5vZGUuYXR0cmlidXRlcy5ocmVmID09PSBcInN0cmluZ1wiICYmIGV4dHJhY3RGaWxlRXh0ZW5zaW9uKHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMuaHJlZikgPT09IFwiY3NzXCIpKSB7XG4gICAgb25jZVN0eWxlc2hlZXRMb2FkZWQoXG4gICAgICBuLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAob25TdHlsZXNoZWV0TG9hZCkge1xuICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRMaW5rTm9kZSA9IHNlcmlhbGl6ZU5vZGVXaXRoSWQobiwge1xuICAgICAgICAgICAgZG9jLFxuICAgICAgICAgICAgbWlycm9yLFxuICAgICAgICAgICAgYmxvY2tDbGFzcyxcbiAgICAgICAgICAgIGJsb2NrU2VsZWN0b3IsXG4gICAgICAgICAgICBuZWVkc01hc2ssXG4gICAgICAgICAgICBtYXNrVGV4dENsYXNzLFxuICAgICAgICAgICAgbWFza1RleHRTZWxlY3RvcixcbiAgICAgICAgICAgIHNraXBDaGlsZDogZmFsc2UsXG4gICAgICAgICAgICBpbmxpbmVTdHlsZXNoZWV0LFxuICAgICAgICAgICAgbWFza0lucHV0T3B0aW9ucyxcbiAgICAgICAgICAgIG1hc2tUZXh0Rm4sXG4gICAgICAgICAgICBtYXNrSW5wdXRGbixcbiAgICAgICAgICAgIHNsaW1ET01PcHRpb25zLFxuICAgICAgICAgICAgZGF0YVVSTE9wdGlvbnMsXG4gICAgICAgICAgICBpbmxpbmVJbWFnZXMsXG4gICAgICAgICAgICByZWNvcmRDYW52YXMsXG4gICAgICAgICAgICBwcmVzZXJ2ZVdoaXRlU3BhY2UsXG4gICAgICAgICAgICBvblNlcmlhbGl6ZSxcbiAgICAgICAgICAgIG9uSWZyYW1lTG9hZCxcbiAgICAgICAgICAgIGlmcmFtZUxvYWRUaW1lb3V0LFxuICAgICAgICAgICAgb25TdHlsZXNoZWV0TG9hZCxcbiAgICAgICAgICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dCxcbiAgICAgICAgICAgIGtlZXBJZnJhbWVTcmNGblxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChzZXJpYWxpemVkTGlua05vZGUpIHtcbiAgICAgICAgICAgIG9uU3R5bGVzaGVldExvYWQoXG4gICAgICAgICAgICAgIG4sXG4gICAgICAgICAgICAgIHNlcmlhbGl6ZWRMaW5rTm9kZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXRcbiAgICApO1xuICB9XG4gIHJldHVybiBzZXJpYWxpemVkTm9kZTtcbn1cbmZ1bmN0aW9uIHNuYXBzaG90KG4sIG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIG1pcnJvciA9IG5ldyBNaXJyb3IoKSxcbiAgICBibG9ja0NsYXNzID0gXCJyci1ibG9ja1wiLFxuICAgIGJsb2NrU2VsZWN0b3IgPSBudWxsLFxuICAgIG1hc2tUZXh0Q2xhc3MgPSBcInJyLW1hc2tcIixcbiAgICBtYXNrVGV4dFNlbGVjdG9yID0gbnVsbCxcbiAgICBpbmxpbmVTdHlsZXNoZWV0ID0gdHJ1ZSxcbiAgICBpbmxpbmVJbWFnZXMgPSBmYWxzZSxcbiAgICByZWNvcmRDYW52YXMgPSBmYWxzZSxcbiAgICBtYXNrQWxsSW5wdXRzID0gZmFsc2UsXG4gICAgbWFza1RleHRGbixcbiAgICBtYXNrSW5wdXRGbixcbiAgICBzbGltRE9NID0gZmFsc2UsXG4gICAgZGF0YVVSTE9wdGlvbnMsXG4gICAgcHJlc2VydmVXaGl0ZVNwYWNlLFxuICAgIG9uU2VyaWFsaXplLFxuICAgIG9uSWZyYW1lTG9hZCxcbiAgICBpZnJhbWVMb2FkVGltZW91dCxcbiAgICBvblN0eWxlc2hlZXRMb2FkLFxuICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dCxcbiAgICBrZWVwSWZyYW1lU3JjRm4gPSAoKSA9PiBmYWxzZVxuICB9ID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3QgbWFza0lucHV0T3B0aW9ucyA9IG1hc2tBbGxJbnB1dHMgPT09IHRydWUgPyB7XG4gICAgY29sb3I6IHRydWUsXG4gICAgZGF0ZTogdHJ1ZSxcbiAgICBcImRhdGV0aW1lLWxvY2FsXCI6IHRydWUsXG4gICAgZW1haWw6IHRydWUsXG4gICAgbW9udGg6IHRydWUsXG4gICAgbnVtYmVyOiB0cnVlLFxuICAgIHJhbmdlOiB0cnVlLFxuICAgIHNlYXJjaDogdHJ1ZSxcbiAgICB0ZWw6IHRydWUsXG4gICAgdGV4dDogdHJ1ZSxcbiAgICB0aW1lOiB0cnVlLFxuICAgIHVybDogdHJ1ZSxcbiAgICB3ZWVrOiB0cnVlLFxuICAgIHRleHRhcmVhOiB0cnVlLFxuICAgIHNlbGVjdDogdHJ1ZSxcbiAgICBwYXNzd29yZDogdHJ1ZVxuICB9IDogbWFza0FsbElucHV0cyA9PT0gZmFsc2UgPyB7XG4gICAgcGFzc3dvcmQ6IHRydWVcbiAgfSA6IG1hc2tBbGxJbnB1dHM7XG4gIGNvbnN0IHNsaW1ET01PcHRpb25zID0gc2xpbURPTSA9PT0gdHJ1ZSB8fCBzbGltRE9NID09PSBcImFsbFwiID8gKFxuICAgIC8vIGlmIHRydWU6IHNldCBvZiBzZW5zaWJsZSBvcHRpb25zIHRoYXQgc2hvdWxkIG5vdCB0aHJvdyBhd2F5IGFueSBpbmZvcm1hdGlvblxuICAgIHtcbiAgICAgIHNjcmlwdDogdHJ1ZSxcbiAgICAgIGNvbW1lbnQ6IHRydWUsXG4gICAgICBoZWFkRmF2aWNvbjogdHJ1ZSxcbiAgICAgIGhlYWRXaGl0ZXNwYWNlOiB0cnVlLFxuICAgICAgaGVhZE1ldGFEZXNjS2V5d29yZHM6IHNsaW1ET00gPT09IFwiYWxsXCIsXG4gICAgICAvLyBkZXN0cnVjdGl2ZVxuICAgICAgaGVhZE1ldGFTb2NpYWw6IHRydWUsXG4gICAgICBoZWFkTWV0YVJvYm90czogdHJ1ZSxcbiAgICAgIGhlYWRNZXRhSHR0cEVxdWl2OiB0cnVlLFxuICAgICAgaGVhZE1ldGFBdXRob3JzaGlwOiB0cnVlLFxuICAgICAgaGVhZE1ldGFWZXJpZmljYXRpb246IHRydWVcbiAgICB9XG4gICkgOiBzbGltRE9NID09PSBmYWxzZSA/IHt9IDogc2xpbURPTTtcbiAgcmV0dXJuIHNlcmlhbGl6ZU5vZGVXaXRoSWQobiwge1xuICAgIGRvYzogbixcbiAgICBtaXJyb3IsXG4gICAgYmxvY2tDbGFzcyxcbiAgICBibG9ja1NlbGVjdG9yLFxuICAgIG1hc2tUZXh0Q2xhc3MsXG4gICAgbWFza1RleHRTZWxlY3RvcixcbiAgICBza2lwQ2hpbGQ6IGZhbHNlLFxuICAgIGlubGluZVN0eWxlc2hlZXQsXG4gICAgbWFza0lucHV0T3B0aW9ucyxcbiAgICBtYXNrVGV4dEZuLFxuICAgIG1hc2tJbnB1dEZuLFxuICAgIHNsaW1ET01PcHRpb25zLFxuICAgIGRhdGFVUkxPcHRpb25zLFxuICAgIGlubGluZUltYWdlcyxcbiAgICByZWNvcmRDYW52YXMsXG4gICAgcHJlc2VydmVXaGl0ZVNwYWNlLFxuICAgIG9uU2VyaWFsaXplLFxuICAgIG9uSWZyYW1lTG9hZCxcbiAgICBpZnJhbWVMb2FkVGltZW91dCxcbiAgICBvblN0eWxlc2hlZXRMb2FkLFxuICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dCxcbiAgICBrZWVwSWZyYW1lU3JjRm4sXG4gICAgbmV3bHlBZGRlZEVsZW1lbnQ6IGZhbHNlXG4gIH0pO1xufVxuZnVuY3Rpb24gdmlzaXRTbmFwc2hvdChub2RlMiwgb25WaXNpdCkge1xuICBmdW5jdGlvbiB3YWxrKGN1cnJlbnQpIHtcbiAgICBvblZpc2l0KGN1cnJlbnQpO1xuICAgIGlmIChjdXJyZW50LnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50IHx8IGN1cnJlbnQudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCkge1xuICAgICAgY3VycmVudC5jaGlsZE5vZGVzLmZvckVhY2god2Fsayk7XG4gICAgfVxuICB9XG4gIHdhbGsobm9kZTIpO1xufVxuZnVuY3Rpb24gY2xlYW51cFNuYXBzaG90KCkge1xuICBfaWQgPSAxO1xufVxuY29uc3QgTUVESUFfU0VMRUNUT1IgPSAvKG1heHxtaW4pLWRldmljZS0od2lkdGh8aGVpZ2h0KS87XG5jb25zdCBNRURJQV9TRUxFQ1RPUl9HTE9CQUwgPSBuZXcgUmVnRXhwKE1FRElBX1NFTEVDVE9SLnNvdXJjZSwgXCJnXCIpO1xuY29uc3QgbWVkaWFTZWxlY3RvclBsdWdpbiA9IHtcbiAgcG9zdGNzc1BsdWdpbjogXCJwb3N0Y3NzLWN1c3RvbS1zZWxlY3RvcnNcIixcbiAgcHJlcGFyZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zdGNzc1BsdWdpbjogXCJwb3N0Y3NzLWN1c3RvbS1zZWxlY3RvcnNcIixcbiAgICAgIEF0UnVsZTogZnVuY3Rpb24oYXRydWxlKSB7XG4gICAgICAgIGlmIChhdHJ1bGUucGFyYW1zLm1hdGNoKE1FRElBX1NFTEVDVE9SX0dMT0JBTCkpIHtcbiAgICAgICAgICBhdHJ1bGUucGFyYW1zID0gYXRydWxlLnBhcmFtcy5yZXBsYWNlKE1FRElBX1NFTEVDVE9SX0dMT0JBTCwgXCIkMS0kMlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5jb25zdCBwc2V1ZG9DbGFzc1BsdWdpbiA9IHtcbiAgcG9zdGNzc1BsdWdpbjogXCJwb3N0Y3NzLWhvdmVyLWNsYXNzZXNcIixcbiAgcHJlcGFyZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZml4ZWQgPSBbXTtcbiAgICByZXR1cm4ge1xuICAgICAgUnVsZTogZnVuY3Rpb24ocnVsZTIpIHtcbiAgICAgICAgaWYgKGZpeGVkLmluZGV4T2YocnVsZTIpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmaXhlZC5wdXNoKHJ1bGUyKTtcbiAgICAgICAgcnVsZTIuc2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICAgICAgICBpZiAoIXNlbGVjdG9yLmluY2x1ZGVzKFwiOlwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBzZWxlY3RvclBhcnRzID0gc2VsZWN0b3IucmVwbGFjZSgvXFxuL2csIFwiIFwiKS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgY29uc3QgcHNldWRvZWRTZWxlY3RvclBhcnRzID0gW107XG4gICAgICAgICAgc2VsZWN0b3JQYXJ0cy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdG9yUGFydCkge1xuICAgICAgICAgICAgY29uc3QgcHNldWRvcyA9IHNlbGVjdG9yUGFydC5tYXRjaCgvOjo/KFteOl0rKS9nKTtcbiAgICAgICAgICAgIGlmICghcHNldWRvcykge1xuICAgICAgICAgICAgICBwc2V1ZG9lZFNlbGVjdG9yUGFydHMucHVzaChzZWxlY3RvclBhcnQpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBiYXNlU2VsZWN0b3IgPSBzZWxlY3RvclBhcnQuc3Vic3RyKFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICBzZWxlY3RvclBhcnQubGVuZ3RoIC0gcHNldWRvcy5qb2luKFwiXCIpLmxlbmd0aFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzUHNldWRvcyA9IHBzZXVkb3MubWFwKGZ1bmN0aW9uKHBzZXVkbykge1xuICAgICAgICAgICAgICBjb25zdCBwc2V1ZG9Ub0NoZWNrID0gcHNldWRvLnJlcGxhY2UoL1xcKC4qL2csIFwiXCIpO1xuICAgICAgICAgICAgICBpZiAocHNldWRvVG9DaGVjayAhPT0gXCI6aG92ZXJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwc2V1ZG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHBzZXVkby5tYXRjaCgvXjo6LykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHNldWRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHBzZXVkbyA9IHBzZXVkby5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgIHBzZXVkbyA9IHBzZXVkby5yZXBsYWNlKC9cXCgvZywgXCJcXFxcKFwiKTtcbiAgICAgICAgICAgICAgcHNldWRvID0gcHNldWRvLnJlcGxhY2UoL1xcKS9nLCBcIlxcXFwpXCIpO1xuICAgICAgICAgICAgICByZXR1cm4gXCIuXFxcXDpcIiArIHBzZXVkbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHNldWRvZWRTZWxlY3RvclBhcnRzLnB1c2goYmFzZVNlbGVjdG9yICsgY2xhc3NQc2V1ZG9zLmpvaW4oXCJcIikpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFkZFNlbGVjdG9yKHBzZXVkb2VkU2VsZWN0b3JQYXJ0cy5qb2luKFwiIFwiKSk7XG4gICAgICAgICAgZnVuY3Rpb24gYWRkU2VsZWN0b3IobmV3U2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGlmIChuZXdTZWxlY3RvciAmJiBuZXdTZWxlY3RvciAhPT0gc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgcnVsZTIuc2VsZWN0b3IgKz0gXCIsXFxuXCIgKyBuZXdTZWxlY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5mdW5jdGlvbiBnZXREZWZhdWx0RXhwb3J0RnJvbUNqcyh4Mikge1xuICByZXR1cm4geDIgJiYgeDIuX19lc01vZHVsZSAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeDIsIFwiZGVmYXVsdFwiKSA/IHgyW1wiZGVmYXVsdFwiXSA6IHgyO1xufVxuZnVuY3Rpb24gZ2V0QXVnbWVudGVkTmFtZXNwYWNlKG4pIHtcbiAgaWYgKG4uX19lc01vZHVsZSkgcmV0dXJuIG47XG4gIHZhciBmID0gbi5kZWZhdWx0O1xuICBpZiAodHlwZW9mIGYgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGEgPSBmdW5jdGlvbiBhMigpIHtcbiAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYTIpIHtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuY29uc3RydWN0KGYsIGFyZ3VtZW50cywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgYS5wcm90b3R5cGUgPSBmLnByb3RvdHlwZTtcbiAgfSBlbHNlIGEgPSB7fTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICBPYmplY3Qua2V5cyhuKS5mb3JFYWNoKGZ1bmN0aW9uKGspIHtcbiAgICB2YXIgZCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iobiwgayk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsIGssIGQuZ2V0ID8gZCA6IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbltrXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBhO1xufVxudmFyIHBpY29jb2xvcnNfYnJvd3NlciA9IHsgZXhwb3J0czoge30gfTtcbnZhciB4ID0gU3RyaW5nO1xudmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4geyBpc0NvbG9yU3VwcG9ydGVkOiBmYWxzZSwgcmVzZXQ6IHgsIGJvbGQ6IHgsIGRpbTogeCwgaXRhbGljOiB4LCB1bmRlcmxpbmU6IHgsIGludmVyc2U6IHgsIGhpZGRlbjogeCwgc3RyaWtldGhyb3VnaDogeCwgYmxhY2s6IHgsIHJlZDogeCwgZ3JlZW46IHgsIHllbGxvdzogeCwgYmx1ZTogeCwgbWFnZW50YTogeCwgY3lhbjogeCwgd2hpdGU6IHgsIGdyYXk6IHgsIGJnQmxhY2s6IHgsIGJnUmVkOiB4LCBiZ0dyZWVuOiB4LCBiZ1llbGxvdzogeCwgYmdCbHVlOiB4LCBiZ01hZ2VudGE6IHgsIGJnQ3lhbjogeCwgYmdXaGl0ZTogeCB9O1xufTtcbnBpY29jb2xvcnNfYnJvd3Nlci5leHBvcnRzID0gY3JlYXRlKCk7XG5waWNvY29sb3JzX2Jyb3dzZXIuZXhwb3J0cy5jcmVhdGVDb2xvcnMgPSBjcmVhdGU7XG52YXIgcGljb2NvbG9yc19icm93c2VyRXhwb3J0cyA9IHBpY29jb2xvcnNfYnJvd3Nlci5leHBvcnRzO1xuY29uc3QgX192aXRlQnJvd3NlckV4dGVybmFsID0ge307XG5jb25zdCBfX3ZpdGVCcm93c2VyRXh0ZXJuYWwkMSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IF9fdml0ZUJyb3dzZXJFeHRlcm5hbFxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKTtcbmNvbnN0IHJlcXVpcmUkJDIgPSAvKiBAX19QVVJFX18gKi8gZ2V0QXVnbWVudGVkTmFtZXNwYWNlKF9fdml0ZUJyb3dzZXJFeHRlcm5hbCQxKTtcbmxldCBwaWNvID0gcGljb2NvbG9yc19icm93c2VyRXhwb3J0cztcbmxldCB0ZXJtaW5hbEhpZ2hsaWdodCQxID0gcmVxdWlyZSQkMjtcbmxldCBDc3NTeW50YXhFcnJvciQzID0gY2xhc3MgQ3NzU3ludGF4RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGxpbmUsIGNvbHVtbiwgc291cmNlLCBmaWxlLCBwbHVnaW4yKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gXCJDc3NTeW50YXhFcnJvclwiO1xuICAgIHRoaXMucmVhc29uID0gbWVzc2FnZTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgfVxuICAgIGlmIChwbHVnaW4yKSB7XG4gICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjI7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGluZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgY29sdW1uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAodHlwZW9mIGxpbmUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lLmxpbmU7XG4gICAgICAgIHRoaXMuY29sdW1uID0gbGluZS5jb2x1bW47XG4gICAgICAgIHRoaXMuZW5kTGluZSA9IGNvbHVtbi5saW5lO1xuICAgICAgICB0aGlzLmVuZENvbHVtbiA9IGNvbHVtbi5jb2x1bW47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0TWVzc2FnZSgpO1xuICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgQ3NzU3ludGF4RXJyb3IpO1xuICAgIH1cbiAgfVxuICBzZXRNZXNzYWdlKCkge1xuICAgIHRoaXMubWVzc2FnZSA9IHRoaXMucGx1Z2luID8gdGhpcy5wbHVnaW4gKyBcIjogXCIgOiBcIlwiO1xuICAgIHRoaXMubWVzc2FnZSArPSB0aGlzLmZpbGUgPyB0aGlzLmZpbGUgOiBcIjxjc3MgaW5wdXQ+XCI7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmxpbmUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRoaXMubWVzc2FnZSArPSBcIjpcIiArIHRoaXMubGluZSArIFwiOlwiICsgdGhpcy5jb2x1bW47XG4gICAgfVxuICAgIHRoaXMubWVzc2FnZSArPSBcIjogXCIgKyB0aGlzLnJlYXNvbjtcbiAgfVxuICBzaG93U291cmNlQ29kZShjb2xvcikge1xuICAgIGlmICghdGhpcy5zb3VyY2UpIHJldHVybiBcIlwiO1xuICAgIGxldCBjc3MgPSB0aGlzLnNvdXJjZTtcbiAgICBpZiAoY29sb3IgPT0gbnVsbCkgY29sb3IgPSBwaWNvLmlzQ29sb3JTdXBwb3J0ZWQ7XG4gICAgaWYgKHRlcm1pbmFsSGlnaGxpZ2h0JDEpIHtcbiAgICAgIGlmIChjb2xvcikgY3NzID0gdGVybWluYWxIaWdobGlnaHQkMShjc3MpO1xuICAgIH1cbiAgICBsZXQgbGluZXMgPSBjc3Muc3BsaXQoL1xccj9cXG4vKTtcbiAgICBsZXQgc3RhcnQgPSBNYXRoLm1heCh0aGlzLmxpbmUgLSAzLCAwKTtcbiAgICBsZXQgZW5kID0gTWF0aC5taW4odGhpcy5saW5lICsgMiwgbGluZXMubGVuZ3RoKTtcbiAgICBsZXQgbWF4V2lkdGggPSBTdHJpbmcoZW5kKS5sZW5ndGg7XG4gICAgbGV0IG1hcmssIGFzaWRlO1xuICAgIGlmIChjb2xvcikge1xuICAgICAgbGV0IHsgYm9sZCwgZ3JheSwgcmVkIH0gPSBwaWNvLmNyZWF0ZUNvbG9ycyh0cnVlKTtcbiAgICAgIG1hcmsgPSAodGV4dCkgPT4gYm9sZChyZWQodGV4dCkpO1xuICAgICAgYXNpZGUgPSAodGV4dCkgPT4gZ3JheSh0ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFyayA9IGFzaWRlID0gKHN0cikgPT4gc3RyO1xuICAgIH1cbiAgICByZXR1cm4gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKChsaW5lLCBpbmRleDIpID0+IHtcbiAgICAgIGxldCBudW1iZXIgPSBzdGFydCArIDEgKyBpbmRleDI7XG4gICAgICBsZXQgZ3V0dGVyID0gXCIgXCIgKyAoXCIgXCIgKyBudW1iZXIpLnNsaWNlKC1tYXhXaWR0aCkgKyBcIiB8IFwiO1xuICAgICAgaWYgKG51bWJlciA9PT0gdGhpcy5saW5lKSB7XG4gICAgICAgIGxldCBzcGFjaW5nID0gYXNpZGUoZ3V0dGVyLnJlcGxhY2UoL1xcZC9nLCBcIiBcIikpICsgbGluZS5zbGljZSgwLCB0aGlzLmNvbHVtbiAtIDEpLnJlcGxhY2UoL1teXFx0XS9nLCBcIiBcIik7XG4gICAgICAgIHJldHVybiBtYXJrKFwiPlwiKSArIGFzaWRlKGd1dHRlcikgKyBsaW5lICsgXCJcXG4gXCIgKyBzcGFjaW5nICsgbWFyayhcIl5cIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCIgXCIgKyBhc2lkZShndXR0ZXIpICsgbGluZTtcbiAgICB9KS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIGxldCBjb2RlID0gdGhpcy5zaG93U291cmNlQ29kZSgpO1xuICAgIGlmIChjb2RlKSB7XG4gICAgICBjb2RlID0gXCJcXG5cXG5cIiArIGNvZGUgKyBcIlxcblwiO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5uYW1lICsgXCI6IFwiICsgdGhpcy5tZXNzYWdlICsgY29kZTtcbiAgfVxufTtcbnZhciBjc3NTeW50YXhFcnJvciA9IENzc1N5bnRheEVycm9yJDM7XG5Dc3NTeW50YXhFcnJvciQzLmRlZmF1bHQgPSBDc3NTeW50YXhFcnJvciQzO1xudmFyIHN5bWJvbHMgPSB7fTtcbnN5bWJvbHMuaXNDbGVhbiA9IFN5bWJvbChcImlzQ2xlYW5cIik7XG5zeW1ib2xzLm15ID0gU3ltYm9sKFwibXlcIik7XG5jb25zdCBERUZBVUxUX1JBVyA9IHtcbiAgYWZ0ZXI6IFwiXFxuXCIsXG4gIGJlZm9yZUNsb3NlOiBcIlxcblwiLFxuICBiZWZvcmVDb21tZW50OiBcIlxcblwiLFxuICBiZWZvcmVEZWNsOiBcIlxcblwiLFxuICBiZWZvcmVPcGVuOiBcIiBcIixcbiAgYmVmb3JlUnVsZTogXCJcXG5cIixcbiAgY29sb246IFwiOiBcIixcbiAgY29tbWVudExlZnQ6IFwiIFwiLFxuICBjb21tZW50UmlnaHQ6IFwiIFwiLFxuICBlbXB0eUJvZHk6IFwiXCIsXG4gIGluZGVudDogXCIgICAgXCIsXG4gIHNlbWljb2xvbjogZmFsc2Vcbn07XG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5sZXQgU3RyaW5naWZpZXIkMiA9IGNsYXNzIFN0cmluZ2lmaWVyIHtcbiAgY29uc3RydWN0b3IoYnVpbGRlcikge1xuICAgIHRoaXMuYnVpbGRlciA9IGJ1aWxkZXI7XG4gIH1cbiAgYXRydWxlKG5vZGUyLCBzZW1pY29sb24pIHtcbiAgICBsZXQgbmFtZSA9IFwiQFwiICsgbm9kZTIubmFtZTtcbiAgICBsZXQgcGFyYW1zID0gbm9kZTIucGFyYW1zID8gdGhpcy5yYXdWYWx1ZShub2RlMiwgXCJwYXJhbXNcIikgOiBcIlwiO1xuICAgIGlmICh0eXBlb2Ygbm9kZTIucmF3cy5hZnRlck5hbWUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIG5hbWUgKz0gbm9kZTIucmF3cy5hZnRlck5hbWU7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMpIHtcbiAgICAgIG5hbWUgKz0gXCIgXCI7XG4gICAgfVxuICAgIGlmIChub2RlMi5ub2Rlcykge1xuICAgICAgdGhpcy5ibG9jayhub2RlMiwgbmFtZSArIHBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlbmQgPSAobm9kZTIucmF3cy5iZXR3ZWVuIHx8IFwiXCIpICsgKHNlbWljb2xvbiA/IFwiO1wiIDogXCJcIik7XG4gICAgICB0aGlzLmJ1aWxkZXIobmFtZSArIHBhcmFtcyArIGVuZCwgbm9kZTIpO1xuICAgIH1cbiAgfVxuICBiZWZvcmVBZnRlcihub2RlMiwgZGV0ZWN0KSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChub2RlMi50eXBlID09PSBcImRlY2xcIikge1xuICAgICAgdmFsdWUgPSB0aGlzLnJhdyhub2RlMiwgbnVsbCwgXCJiZWZvcmVEZWNsXCIpO1xuICAgIH0gZWxzZSBpZiAobm9kZTIudHlwZSA9PT0gXCJjb21tZW50XCIpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yYXcobm9kZTIsIG51bGwsIFwiYmVmb3JlQ29tbWVudFwiKTtcbiAgICB9IGVsc2UgaWYgKGRldGVjdCA9PT0gXCJiZWZvcmVcIikge1xuICAgICAgdmFsdWUgPSB0aGlzLnJhdyhub2RlMiwgbnVsbCwgXCJiZWZvcmVSdWxlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucmF3KG5vZGUyLCBudWxsLCBcImJlZm9yZUNsb3NlXCIpO1xuICAgIH1cbiAgICBsZXQgYnVmID0gbm9kZTIucGFyZW50O1xuICAgIGxldCBkZXB0aCA9IDA7XG4gICAgd2hpbGUgKGJ1ZiAmJiBidWYudHlwZSAhPT0gXCJyb290XCIpIHtcbiAgICAgIGRlcHRoICs9IDE7XG4gICAgICBidWYgPSBidWYucGFyZW50O1xuICAgIH1cbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoXCJcXG5cIikpIHtcbiAgICAgIGxldCBpbmRlbnQgPSB0aGlzLnJhdyhub2RlMiwgbnVsbCwgXCJpbmRlbnRcIik7XG4gICAgICBpZiAoaW5kZW50Lmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBzdGVwID0gMDsgc3RlcCA8IGRlcHRoOyBzdGVwKyspIHZhbHVlICs9IGluZGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGJsb2NrKG5vZGUyLCBzdGFydCkge1xuICAgIGxldCBiZXR3ZWVuID0gdGhpcy5yYXcobm9kZTIsIFwiYmV0d2VlblwiLCBcImJlZm9yZU9wZW5cIik7XG4gICAgdGhpcy5idWlsZGVyKHN0YXJ0ICsgYmV0d2VlbiArIFwie1wiLCBub2RlMiwgXCJzdGFydFwiKTtcbiAgICBsZXQgYWZ0ZXI7XG4gICAgaWYgKG5vZGUyLm5vZGVzICYmIG5vZGUyLm5vZGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5ib2R5KG5vZGUyKTtcbiAgICAgIGFmdGVyID0gdGhpcy5yYXcobm9kZTIsIFwiYWZ0ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFmdGVyID0gdGhpcy5yYXcobm9kZTIsIFwiYWZ0ZXJcIiwgXCJlbXB0eUJvZHlcIik7XG4gICAgfVxuICAgIGlmIChhZnRlcikgdGhpcy5idWlsZGVyKGFmdGVyKTtcbiAgICB0aGlzLmJ1aWxkZXIoXCJ9XCIsIG5vZGUyLCBcImVuZFwiKTtcbiAgfVxuICBib2R5KG5vZGUyKSB7XG4gICAgbGV0IGxhc3QgPSBub2RlMi5ub2Rlcy5sZW5ndGggLSAxO1xuICAgIHdoaWxlIChsYXN0ID4gMCkge1xuICAgICAgaWYgKG5vZGUyLm5vZGVzW2xhc3RdLnR5cGUgIT09IFwiY29tbWVudFwiKSBicmVhaztcbiAgICAgIGxhc3QgLT0gMTtcbiAgICB9XG4gICAgbGV0IHNlbWljb2xvbiA9IHRoaXMucmF3KG5vZGUyLCBcInNlbWljb2xvblwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUyLm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSBub2RlMi5ub2Rlc1tpXTtcbiAgICAgIGxldCBiZWZvcmUgPSB0aGlzLnJhdyhjaGlsZCwgXCJiZWZvcmVcIik7XG4gICAgICBpZiAoYmVmb3JlKSB0aGlzLmJ1aWxkZXIoYmVmb3JlKTtcbiAgICAgIHRoaXMuc3RyaW5naWZ5KGNoaWxkLCBsYXN0ICE9PSBpIHx8IHNlbWljb2xvbik7XG4gICAgfVxuICB9XG4gIGNvbW1lbnQobm9kZTIpIHtcbiAgICBsZXQgbGVmdCA9IHRoaXMucmF3KG5vZGUyLCBcImxlZnRcIiwgXCJjb21tZW50TGVmdFwiKTtcbiAgICBsZXQgcmlnaHQgPSB0aGlzLnJhdyhub2RlMiwgXCJyaWdodFwiLCBcImNvbW1lbnRSaWdodFwiKTtcbiAgICB0aGlzLmJ1aWxkZXIoXCIvKlwiICsgbGVmdCArIG5vZGUyLnRleHQgKyByaWdodCArIFwiKi9cIiwgbm9kZTIpO1xuICB9XG4gIGRlY2wobm9kZTIsIHNlbWljb2xvbikge1xuICAgIGxldCBiZXR3ZWVuID0gdGhpcy5yYXcobm9kZTIsIFwiYmV0d2VlblwiLCBcImNvbG9uXCIpO1xuICAgIGxldCBzdHJpbmcgPSBub2RlMi5wcm9wICsgYmV0d2VlbiArIHRoaXMucmF3VmFsdWUobm9kZTIsIFwidmFsdWVcIik7XG4gICAgaWYgKG5vZGUyLmltcG9ydGFudCkge1xuICAgICAgc3RyaW5nICs9IG5vZGUyLnJhd3MuaW1wb3J0YW50IHx8IFwiICFpbXBvcnRhbnRcIjtcbiAgICB9XG4gICAgaWYgKHNlbWljb2xvbikgc3RyaW5nICs9IFwiO1wiO1xuICAgIHRoaXMuYnVpbGRlcihzdHJpbmcsIG5vZGUyKTtcbiAgfVxuICBkb2N1bWVudChub2RlMikge1xuICAgIHRoaXMuYm9keShub2RlMik7XG4gIH1cbiAgcmF3KG5vZGUyLCBvd24sIGRldGVjdCkge1xuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoIWRldGVjdCkgZGV0ZWN0ID0gb3duO1xuICAgIGlmIChvd24pIHtcbiAgICAgIHZhbHVlID0gbm9kZTIucmF3c1tvd25dO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBsZXQgcGFyZW50ID0gbm9kZTIucGFyZW50O1xuICAgIGlmIChkZXRlY3QgPT09IFwiYmVmb3JlXCIpIHtcbiAgICAgIGlmICghcGFyZW50IHx8IHBhcmVudC50eXBlID09PSBcInJvb3RcIiAmJiBwYXJlbnQuZmlyc3QgPT09IG5vZGUyKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQudHlwZSA9PT0gXCJkb2N1bWVudFwiKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXBhcmVudCkgcmV0dXJuIERFRkFVTFRfUkFXW2RldGVjdF07XG4gICAgbGV0IHJvb3QyID0gbm9kZTIucm9vdCgpO1xuICAgIGlmICghcm9vdDIucmF3Q2FjaGUpIHJvb3QyLnJhd0NhY2hlID0ge307XG4gICAgaWYgKHR5cGVvZiByb290Mi5yYXdDYWNoZVtkZXRlY3RdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gcm9vdDIucmF3Q2FjaGVbZGV0ZWN0XTtcbiAgICB9XG4gICAgaWYgKGRldGVjdCA9PT0gXCJiZWZvcmVcIiB8fCBkZXRlY3QgPT09IFwiYWZ0ZXJcIikge1xuICAgICAgcmV0dXJuIHRoaXMuYmVmb3JlQWZ0ZXIobm9kZTIsIGRldGVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBtZXRob2QgPSBcInJhd1wiICsgY2FwaXRhbGl6ZShkZXRlY3QpO1xuICAgICAgaWYgKHRoaXNbbWV0aG9kXSkge1xuICAgICAgICB2YWx1ZSA9IHRoaXNbbWV0aG9kXShyb290Miwgbm9kZTIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdDIud2FsaygoaSkgPT4ge1xuICAgICAgICAgIHZhbHVlID0gaS5yYXdzW293bl07XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgdmFsdWUgPSBERUZBVUxUX1JBV1tkZXRlY3RdO1xuICAgIHJvb3QyLnJhd0NhY2hlW2RldGVjdF0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmF3QmVmb3JlQ2xvc2Uocm9vdDIpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgcm9vdDIud2FsaygoaSkgPT4ge1xuICAgICAgaWYgKGkubm9kZXMgJiYgaS5ub2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmFmdGVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgdmFsdWUgPSBpLnJhd3MuYWZ0ZXI7XG4gICAgICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKFwiXFxuXCIpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teXFxuXSskLywgXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh2YWx1ZSkgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXFMvZywgXCJcIik7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJhd0JlZm9yZUNvbW1lbnQocm9vdDIsIG5vZGUyKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHJvb3QyLndhbGtDb21tZW50cygoaSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpLnJhd3MuYmVmb3JlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHZhbHVlID0gaS5yYXdzLmJlZm9yZTtcbiAgICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKFwiXFxuXCIpKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXlxcbl0rJC8sIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucmF3KG5vZGUyLCBudWxsLCBcImJlZm9yZURlY2xcIik7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXFMvZywgXCJcIik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByYXdCZWZvcmVEZWNsKHJvb3QyLCBub2RlMikge1xuICAgIGxldCB2YWx1ZTtcbiAgICByb290Mi53YWxrRGVjbHMoKGkpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmJlZm9yZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB2YWx1ZSA9IGkucmF3cy5iZWZvcmU7XG4gICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhcIlxcblwiKSkge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXG5dKyQvLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdmFsdWUgPSB0aGlzLnJhdyhub2RlMiwgbnVsbCwgXCJiZWZvcmVSdWxlXCIpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxTL2csIFwiXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmF3QmVmb3JlT3Blbihyb290Mikge1xuICAgIGxldCB2YWx1ZTtcbiAgICByb290Mi53YWxrKChpKSA9PiB7XG4gICAgICBpZiAoaS50eXBlICE9PSBcImRlY2xcIikge1xuICAgICAgICB2YWx1ZSA9IGkucmF3cy5iZXR3ZWVuO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJhd0JlZm9yZVJ1bGUocm9vdDIpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgcm9vdDIud2FsaygoaSkgPT4ge1xuICAgICAgaWYgKGkubm9kZXMgJiYgKGkucGFyZW50ICE9PSByb290MiB8fCByb290Mi5maXJzdCAhPT0gaSkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpLnJhd3MuYmVmb3JlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgdmFsdWUgPSBpLnJhd3MuYmVmb3JlO1xuICAgICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhcIlxcblwiKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXlxcbl0rJC8sIFwiXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodmFsdWUpIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxTL2csIFwiXCIpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByYXdDb2xvbihyb290Mikge1xuICAgIGxldCB2YWx1ZTtcbiAgICByb290Mi53YWxrRGVjbHMoKGkpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmJldHdlZW4gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdmFsdWUgPSBpLnJhd3MuYmV0d2Vlbi5yZXBsYWNlKC9bXlxcczpdL2csIFwiXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJhd0VtcHR5Qm9keShyb290Mikge1xuICAgIGxldCB2YWx1ZTtcbiAgICByb290Mi53YWxrKChpKSA9PiB7XG4gICAgICBpZiAoaS5ub2RlcyAmJiBpLm5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YWx1ZSA9IGkucmF3cy5hZnRlcjtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByYXdJbmRlbnQocm9vdDIpIHtcbiAgICBpZiAocm9vdDIucmF3cy5pbmRlbnQpIHJldHVybiByb290Mi5yYXdzLmluZGVudDtcbiAgICBsZXQgdmFsdWU7XG4gICAgcm9vdDIud2FsaygoaSkgPT4ge1xuICAgICAgbGV0IHAgPSBpLnBhcmVudDtcbiAgICAgIGlmIChwICYmIHAgIT09IHJvb3QyICYmIHAucGFyZW50ICYmIHAucGFyZW50ID09PSByb290Mikge1xuICAgICAgICBpZiAodHlwZW9mIGkucmF3cy5iZWZvcmUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBsZXQgcGFydHMgPSBpLnJhd3MuYmVmb3JlLnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICAgIHZhbHVlID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXFMvZywgXCJcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJhd1NlbWljb2xvbihyb290Mikge1xuICAgIGxldCB2YWx1ZTtcbiAgICByb290Mi53YWxrKChpKSA9PiB7XG4gICAgICBpZiAoaS5ub2RlcyAmJiBpLm5vZGVzLmxlbmd0aCAmJiBpLmxhc3QudHlwZSA9PT0gXCJkZWNsXCIpIHtcbiAgICAgICAgdmFsdWUgPSBpLnJhd3Muc2VtaWNvbG9uO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJhd1ZhbHVlKG5vZGUyLCBwcm9wKSB7XG4gICAgbGV0IHZhbHVlID0gbm9kZTJbcHJvcF07XG4gICAgbGV0IHJhdyA9IG5vZGUyLnJhd3NbcHJvcF07XG4gICAgaWYgKHJhdyAmJiByYXcudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gcmF3LnJhdztcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJvb3Qobm9kZTIpIHtcbiAgICB0aGlzLmJvZHkobm9kZTIpO1xuICAgIGlmIChub2RlMi5yYXdzLmFmdGVyKSB0aGlzLmJ1aWxkZXIobm9kZTIucmF3cy5hZnRlcik7XG4gIH1cbiAgcnVsZShub2RlMikge1xuICAgIHRoaXMuYmxvY2sobm9kZTIsIHRoaXMucmF3VmFsdWUobm9kZTIsIFwic2VsZWN0b3JcIikpO1xuICAgIGlmIChub2RlMi5yYXdzLm93blNlbWljb2xvbikge1xuICAgICAgdGhpcy5idWlsZGVyKG5vZGUyLnJhd3Mub3duU2VtaWNvbG9uLCBub2RlMiwgXCJlbmRcIik7XG4gICAgfVxuICB9XG4gIHN0cmluZ2lmeShub2RlMiwgc2VtaWNvbG9uKSB7XG4gICAgaWYgKCF0aGlzW25vZGUyLnR5cGVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiVW5rbm93biBBU1Qgbm9kZSB0eXBlIFwiICsgbm9kZTIudHlwZSArIFwiLiBNYXliZSB5b3UgbmVlZCB0byBjaGFuZ2UgUG9zdENTUyBzdHJpbmdpZmllci5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpc1tub2RlMi50eXBlXShub2RlMiwgc2VtaWNvbG9uKTtcbiAgfVxufTtcbnZhciBzdHJpbmdpZmllciA9IFN0cmluZ2lmaWVyJDI7XG5TdHJpbmdpZmllciQyLmRlZmF1bHQgPSBTdHJpbmdpZmllciQyO1xubGV0IFN0cmluZ2lmaWVyJDEgPSBzdHJpbmdpZmllcjtcbmZ1bmN0aW9uIHN0cmluZ2lmeSQ0KG5vZGUyLCBidWlsZGVyKSB7XG4gIGxldCBzdHIgPSBuZXcgU3RyaW5naWZpZXIkMShidWlsZGVyKTtcbiAgc3RyLnN0cmluZ2lmeShub2RlMik7XG59XG52YXIgc3RyaW5naWZ5XzEgPSBzdHJpbmdpZnkkNDtcbnN0cmluZ2lmeSQ0LmRlZmF1bHQgPSBzdHJpbmdpZnkkNDtcbmxldCB7IGlzQ2xlYW46IGlzQ2xlYW4kMiwgbXk6IG15JDIgfSA9IHN5bWJvbHM7XG5sZXQgQ3NzU3ludGF4RXJyb3IkMiA9IGNzc1N5bnRheEVycm9yO1xubGV0IFN0cmluZ2lmaWVyMiA9IHN0cmluZ2lmaWVyO1xubGV0IHN0cmluZ2lmeSQzID0gc3RyaW5naWZ5XzE7XG5mdW5jdGlvbiBjbG9uZU5vZGUob2JqLCBwYXJlbnQpIHtcbiAgbGV0IGNsb25lZCA9IG5ldyBvYmouY29uc3RydWN0b3IoKTtcbiAgZm9yIChsZXQgaSBpbiBvYmopIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGkgPT09IFwicHJveHlDYWNoZVwiKSBjb250aW51ZTtcbiAgICBsZXQgdmFsdWUgPSBvYmpbaV07XG4gICAgbGV0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgaWYgKGkgPT09IFwicGFyZW50XCIgJiYgdHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgaWYgKHBhcmVudCkgY2xvbmVkW2ldID0gcGFyZW50O1xuICAgIH0gZWxzZSBpZiAoaSA9PT0gXCJzb3VyY2VcIikge1xuICAgICAgY2xvbmVkW2ldID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgY2xvbmVkW2ldID0gdmFsdWUubWFwKChqKSA9PiBjbG9uZU5vZGUoaiwgY2xvbmVkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB2YWx1ZSA9IGNsb25lTm9kZSh2YWx1ZSk7XG4gICAgICBjbG9uZWRbaV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNsb25lZDtcbn1cbmxldCBOb2RlJDQgPSBjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoZGVmYXVsdHMgPSB7fSkge1xuICAgIHRoaXMucmF3cyA9IHt9O1xuICAgIHRoaXNbaXNDbGVhbiQyXSA9IGZhbHNlO1xuICAgIHRoaXNbbXkkMl0gPSB0cnVlO1xuICAgIGZvciAobGV0IG5hbWUgaW4gZGVmYXVsdHMpIHtcbiAgICAgIGlmIChuYW1lID09PSBcIm5vZGVzXCIpIHtcbiAgICAgICAgdGhpcy5ub2RlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBub2RlMiBvZiBkZWZhdWx0c1tuYW1lXSkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZTIuY2xvbmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5hcHBlbmQobm9kZTIuY2xvbmUoKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kKG5vZGUyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXNbbmFtZV0gPSBkZWZhdWx0c1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYWRkVG9FcnJvcihlcnJvcikge1xuICAgIGVycm9yLnBvc3Rjc3NOb2RlID0gdGhpcztcbiAgICBpZiAoZXJyb3Iuc3RhY2sgJiYgdGhpcy5zb3VyY2UgJiYgL1xcblxcc3s0fWF0IC8udGVzdChlcnJvci5zdGFjaykpIHtcbiAgICAgIGxldCBzID0gdGhpcy5zb3VyY2U7XG4gICAgICBlcnJvci5zdGFjayA9IGVycm9yLnN0YWNrLnJlcGxhY2UoXG4gICAgICAgIC9cXG5cXHN7NH1hdCAvLFxuICAgICAgICBgJCYke3MuaW5wdXQuZnJvbX06JHtzLnN0YXJ0LmxpbmV9OiR7cy5zdGFydC5jb2x1bW59JCZgXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbiAgYWZ0ZXIoYWRkKSB7XG4gICAgdGhpcy5wYXJlbnQuaW5zZXJ0QWZ0ZXIodGhpcywgYWRkKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBhc3NpZ24ob3ZlcnJpZGVzID0ge30pIHtcbiAgICBmb3IgKGxldCBuYW1lIGluIG92ZXJyaWRlcykge1xuICAgICAgdGhpc1tuYW1lXSA9IG92ZXJyaWRlc1tuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgYmVmb3JlKGFkZCkge1xuICAgIHRoaXMucGFyZW50Lmluc2VydEJlZm9yZSh0aGlzLCBhZGQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNsZWFuUmF3cyhrZWVwQmV0d2Vlbikge1xuICAgIGRlbGV0ZSB0aGlzLnJhd3MuYmVmb3JlO1xuICAgIGRlbGV0ZSB0aGlzLnJhd3MuYWZ0ZXI7XG4gICAgaWYgKCFrZWVwQmV0d2VlbikgZGVsZXRlIHRoaXMucmF3cy5iZXR3ZWVuO1xuICB9XG4gIGNsb25lKG92ZXJyaWRlcyA9IHt9KSB7XG4gICAgbGV0IGNsb25lZCA9IGNsb25lTm9kZSh0aGlzKTtcbiAgICBmb3IgKGxldCBuYW1lIGluIG92ZXJyaWRlcykge1xuICAgICAgY2xvbmVkW25hbWVdID0gb3ZlcnJpZGVzW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmVkO1xuICB9XG4gIGNsb25lQWZ0ZXIob3ZlcnJpZGVzID0ge30pIHtcbiAgICBsZXQgY2xvbmVkID0gdGhpcy5jbG9uZShvdmVycmlkZXMpO1xuICAgIHRoaXMucGFyZW50Lmluc2VydEFmdGVyKHRoaXMsIGNsb25lZCk7XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxuICBjbG9uZUJlZm9yZShvdmVycmlkZXMgPSB7fSkge1xuICAgIGxldCBjbG9uZWQgPSB0aGlzLmNsb25lKG92ZXJyaWRlcyk7XG4gICAgdGhpcy5wYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMsIGNsb25lZCk7XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxuICBlcnJvcihtZXNzYWdlLCBvcHRzID0ge30pIHtcbiAgICBpZiAodGhpcy5zb3VyY2UpIHtcbiAgICAgIGxldCB7IGVuZCwgc3RhcnQgfSA9IHRoaXMucmFuZ2VCeShvcHRzKTtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5pbnB1dC5lcnJvcihcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgeyBjb2x1bW46IHN0YXJ0LmNvbHVtbiwgbGluZTogc3RhcnQubGluZSB9LFxuICAgICAgICB7IGNvbHVtbjogZW5kLmNvbHVtbiwgbGluZTogZW5kLmxpbmUgfSxcbiAgICAgICAgb3B0c1xuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDc3NTeW50YXhFcnJvciQyKG1lc3NhZ2UpO1xuICB9XG4gIGdldFByb3h5UHJvY2Vzc29yKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXQobm9kZTIsIHByb3ApIHtcbiAgICAgICAgaWYgKHByb3AgPT09IFwicHJveHlPZlwiKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgcmV0dXJuICgpID0+IG5vZGUyLnJvb3QoKS50b1Byb3h5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUyW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2V0KG5vZGUyLCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICBpZiAobm9kZTJbcHJvcF0gPT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgbm9kZTJbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHByb3AgPT09IFwicHJvcFwiIHx8IHByb3AgPT09IFwidmFsdWVcIiB8fCBwcm9wID09PSBcIm5hbWVcIiB8fCBwcm9wID09PSBcInBhcmFtc1wiIHx8IHByb3AgPT09IFwiaW1wb3J0YW50XCIgfHwgLyogYzggaWdub3JlIG5leHQgKi9cbiAgICAgICAgcHJvcCA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgICBub2RlMi5tYXJrRGlydHkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIG1hcmtEaXJ0eSgpIHtcbiAgICBpZiAodGhpc1tpc0NsZWFuJDJdKSB7XG4gICAgICB0aGlzW2lzQ2xlYW4kMl0gPSBmYWxzZTtcbiAgICAgIGxldCBuZXh0ID0gdGhpcztcbiAgICAgIHdoaWxlIChuZXh0ID0gbmV4dC5wYXJlbnQpIHtcbiAgICAgICAgbmV4dFtpc0NsZWFuJDJdID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG5leHQoKSB7XG4gICAgaWYgKCF0aGlzLnBhcmVudCkgcmV0dXJuIHZvaWQgMDtcbiAgICBsZXQgaW5kZXgyID0gdGhpcy5wYXJlbnQuaW5kZXgodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lm5vZGVzW2luZGV4MiArIDFdO1xuICB9XG4gIHBvc2l0aW9uQnkob3B0cywgc3RyaW5nUmVwcmVzZW50YXRpb24pIHtcbiAgICBsZXQgcG9zID0gdGhpcy5zb3VyY2Uuc3RhcnQ7XG4gICAgaWYgKG9wdHMuaW5kZXgpIHtcbiAgICAgIHBvcyA9IHRoaXMucG9zaXRpb25JbnNpZGUob3B0cy5pbmRleCwgc3RyaW5nUmVwcmVzZW50YXRpb24pO1xuICAgIH0gZWxzZSBpZiAob3B0cy53b3JkKSB7XG4gICAgICBzdHJpbmdSZXByZXNlbnRhdGlvbiA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICAgIGxldCBpbmRleDIgPSBzdHJpbmdSZXByZXNlbnRhdGlvbi5pbmRleE9mKG9wdHMud29yZCk7XG4gICAgICBpZiAoaW5kZXgyICE9PSAtMSkgcG9zID0gdGhpcy5wb3NpdGlvbkluc2lkZShpbmRleDIsIHN0cmluZ1JlcHJlc2VudGF0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHBvcztcbiAgfVxuICBwb3NpdGlvbkluc2lkZShpbmRleDIsIHN0cmluZ1JlcHJlc2VudGF0aW9uKSB7XG4gICAgbGV0IHN0cmluZyA9IHN0cmluZ1JlcHJlc2VudGF0aW9uIHx8IHRoaXMudG9TdHJpbmcoKTtcbiAgICBsZXQgY29sdW1uID0gdGhpcy5zb3VyY2Uuc3RhcnQuY29sdW1uO1xuICAgIGxldCBsaW5lID0gdGhpcy5zb3VyY2Uuc3RhcnQubGluZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4MjsgaSsrKSB7XG4gICAgICBpZiAoc3RyaW5nW2ldID09PSBcIlxcblwiKSB7XG4gICAgICAgIGNvbHVtbiA9IDE7XG4gICAgICAgIGxpbmUgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbiArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBjb2x1bW4sIGxpbmUgfTtcbiAgfVxuICBwcmV2KCkge1xuICAgIGlmICghdGhpcy5wYXJlbnQpIHJldHVybiB2b2lkIDA7XG4gICAgbGV0IGluZGV4MiA9IHRoaXMucGFyZW50LmluZGV4KHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5ub2Rlc1tpbmRleDIgLSAxXTtcbiAgfVxuICByYW5nZUJ5KG9wdHMpIHtcbiAgICBsZXQgc3RhcnQgPSB7XG4gICAgICBjb2x1bW46IHRoaXMuc291cmNlLnN0YXJ0LmNvbHVtbixcbiAgICAgIGxpbmU6IHRoaXMuc291cmNlLnN0YXJ0LmxpbmVcbiAgICB9O1xuICAgIGxldCBlbmQgPSB0aGlzLnNvdXJjZS5lbmQgPyB7XG4gICAgICBjb2x1bW46IHRoaXMuc291cmNlLmVuZC5jb2x1bW4gKyAxLFxuICAgICAgbGluZTogdGhpcy5zb3VyY2UuZW5kLmxpbmVcbiAgICB9IDoge1xuICAgICAgY29sdW1uOiBzdGFydC5jb2x1bW4gKyAxLFxuICAgICAgbGluZTogc3RhcnQubGluZVxuICAgIH07XG4gICAgaWYgKG9wdHMud29yZCkge1xuICAgICAgbGV0IHN0cmluZ1JlcHJlc2VudGF0aW9uID0gdGhpcy50b1N0cmluZygpO1xuICAgICAgbGV0IGluZGV4MiA9IHN0cmluZ1JlcHJlc2VudGF0aW9uLmluZGV4T2Yob3B0cy53b3JkKTtcbiAgICAgIGlmIChpbmRleDIgIT09IC0xKSB7XG4gICAgICAgIHN0YXJ0ID0gdGhpcy5wb3NpdGlvbkluc2lkZShpbmRleDIsIHN0cmluZ1JlcHJlc2VudGF0aW9uKTtcbiAgICAgICAgZW5kID0gdGhpcy5wb3NpdGlvbkluc2lkZShpbmRleDIgKyBvcHRzLndvcmQubGVuZ3RoLCBzdHJpbmdSZXByZXNlbnRhdGlvbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvcHRzLnN0YXJ0KSB7XG4gICAgICAgIHN0YXJ0ID0ge1xuICAgICAgICAgIGNvbHVtbjogb3B0cy5zdGFydC5jb2x1bW4sXG4gICAgICAgICAgbGluZTogb3B0cy5zdGFydC5saW5lXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKG9wdHMuaW5kZXgpIHtcbiAgICAgICAgc3RhcnQgPSB0aGlzLnBvc2l0aW9uSW5zaWRlKG9wdHMuaW5kZXgpO1xuICAgICAgfVxuICAgICAgaWYgKG9wdHMuZW5kKSB7XG4gICAgICAgIGVuZCA9IHtcbiAgICAgICAgICBjb2x1bW46IG9wdHMuZW5kLmNvbHVtbixcbiAgICAgICAgICBsaW5lOiBvcHRzLmVuZC5saW5lXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzLmVuZEluZGV4ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGVuZCA9IHRoaXMucG9zaXRpb25JbnNpZGUob3B0cy5lbmRJbmRleCk7XG4gICAgICB9IGVsc2UgaWYgKG9wdHMuaW5kZXgpIHtcbiAgICAgICAgZW5kID0gdGhpcy5wb3NpdGlvbkluc2lkZShvcHRzLmluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQubGluZSA8IHN0YXJ0LmxpbmUgfHwgZW5kLmxpbmUgPT09IHN0YXJ0LmxpbmUgJiYgZW5kLmNvbHVtbiA8PSBzdGFydC5jb2x1bW4pIHtcbiAgICAgIGVuZCA9IHsgY29sdW1uOiBzdGFydC5jb2x1bW4gKyAxLCBsaW5lOiBzdGFydC5saW5lIH07XG4gICAgfVxuICAgIHJldHVybiB7IGVuZCwgc3RhcnQgfTtcbiAgfVxuICByYXcocHJvcCwgZGVmYXVsdFR5cGUpIHtcbiAgICBsZXQgc3RyID0gbmV3IFN0cmluZ2lmaWVyMigpO1xuICAgIHJldHVybiBzdHIucmF3KHRoaXMsIHByb3AsIGRlZmF1bHRUeXBlKTtcbiAgfVxuICByZW1vdmUoKSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5wYXJlbnQgPSB2b2lkIDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgcmVwbGFjZVdpdGgoLi4ubm9kZXMpIHtcbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIGxldCBib29rbWFyayA9IHRoaXM7XG4gICAgICBsZXQgZm91bmRTZWxmID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBub2RlMiBvZiBub2Rlcykge1xuICAgICAgICBpZiAobm9kZTIgPT09IHRoaXMpIHtcbiAgICAgICAgICBmb3VuZFNlbGYgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGZvdW5kU2VsZikge1xuICAgICAgICAgIHRoaXMucGFyZW50Lmluc2VydEFmdGVyKGJvb2ttYXJrLCBub2RlMik7XG4gICAgICAgICAgYm9va21hcmsgPSBub2RlMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUoYm9va21hcmssIG5vZGUyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFmb3VuZFNlbGYpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgcm9vdCgpIHtcbiAgICBsZXQgcmVzdWx0MiA9IHRoaXM7XG4gICAgd2hpbGUgKHJlc3VsdDIucGFyZW50ICYmIHJlc3VsdDIucGFyZW50LnR5cGUgIT09IFwiZG9jdW1lbnRcIikge1xuICAgICAgcmVzdWx0MiA9IHJlc3VsdDIucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0MjtcbiAgfVxuICB0b0pTT04oXywgaW5wdXRzKSB7XG4gICAgbGV0IGZpeGVkID0ge307XG4gICAgbGV0IGVtaXRJbnB1dHMgPSBpbnB1dHMgPT0gbnVsbDtcbiAgICBpbnB1dHMgPSBpbnB1dHMgfHwgLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICBsZXQgaW5wdXRzTmV4dEluZGV4ID0gMDtcbiAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMpIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsIG5hbWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWUgPT09IFwicGFyZW50XCIgfHwgbmFtZSA9PT0gXCJwcm94eUNhY2hlXCIpIGNvbnRpbnVlO1xuICAgICAgbGV0IHZhbHVlID0gdGhpc1tuYW1lXTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBmaXhlZFtuYW1lXSA9IHZhbHVlLm1hcCgoaSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgaSA9PT0gXCJvYmplY3RcIiAmJiBpLnRvSlNPTikge1xuICAgICAgICAgICAgcmV0dXJuIGkudG9KU09OKG51bGwsIGlucHV0cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZS50b0pTT04pIHtcbiAgICAgICAgZml4ZWRbbmFtZV0gPSB2YWx1ZS50b0pTT04obnVsbCwgaW5wdXRzKTtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJzb3VyY2VcIikge1xuICAgICAgICBsZXQgaW5wdXRJZCA9IGlucHV0cy5nZXQodmFsdWUuaW5wdXQpO1xuICAgICAgICBpZiAoaW5wdXRJZCA9PSBudWxsKSB7XG4gICAgICAgICAgaW5wdXRJZCA9IGlucHV0c05leHRJbmRleDtcbiAgICAgICAgICBpbnB1dHMuc2V0KHZhbHVlLmlucHV0LCBpbnB1dHNOZXh0SW5kZXgpO1xuICAgICAgICAgIGlucHV0c05leHRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGZpeGVkW25hbWVdID0ge1xuICAgICAgICAgIGVuZDogdmFsdWUuZW5kLFxuICAgICAgICAgIGlucHV0SWQsXG4gICAgICAgICAgc3RhcnQ6IHZhbHVlLnN0YXJ0XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXhlZFtuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW1pdElucHV0cykge1xuICAgICAgZml4ZWQuaW5wdXRzID0gWy4uLmlucHV0cy5rZXlzKCldLm1hcCgoaW5wdXQyKSA9PiBpbnB1dDIudG9KU09OKCkpO1xuICAgIH1cbiAgICByZXR1cm4gZml4ZWQ7XG4gIH1cbiAgdG9Qcm94eSgpIHtcbiAgICBpZiAoIXRoaXMucHJveHlDYWNoZSkge1xuICAgICAgdGhpcy5wcm94eUNhY2hlID0gbmV3IFByb3h5KHRoaXMsIHRoaXMuZ2V0UHJveHlQcm9jZXNzb3IoKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb3h5Q2FjaGU7XG4gIH1cbiAgdG9TdHJpbmcoc3RyaW5naWZpZXIyID0gc3RyaW5naWZ5JDMpIHtcbiAgICBpZiAoc3RyaW5naWZpZXIyLnN0cmluZ2lmeSkgc3RyaW5naWZpZXIyID0gc3RyaW5naWZpZXIyLnN0cmluZ2lmeTtcbiAgICBsZXQgcmVzdWx0MiA9IFwiXCI7XG4gICAgc3RyaW5naWZpZXIyKHRoaXMsIChpKSA9PiB7XG4gICAgICByZXN1bHQyICs9IGk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDI7XG4gIH1cbiAgd2FybihyZXN1bHQyLCB0ZXh0LCBvcHRzKSB7XG4gICAgbGV0IGRhdGEgPSB7IG5vZGU6IHRoaXMgfTtcbiAgICBmb3IgKGxldCBpIGluIG9wdHMpIGRhdGFbaV0gPSBvcHRzW2ldO1xuICAgIHJldHVybiByZXN1bHQyLndhcm4odGV4dCwgZGF0YSk7XG4gIH1cbiAgZ2V0IHByb3h5T2YoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG52YXIgbm9kZSA9IE5vZGUkNDtcbk5vZGUkNC5kZWZhdWx0ID0gTm9kZSQ0O1xubGV0IE5vZGUkMyA9IG5vZGU7XG5sZXQgRGVjbGFyYXRpb24kNCA9IGNsYXNzIERlY2xhcmF0aW9uIGV4dGVuZHMgTm9kZSQzIHtcbiAgY29uc3RydWN0b3IoZGVmYXVsdHMpIHtcbiAgICBpZiAoZGVmYXVsdHMgJiYgdHlwZW9mIGRlZmF1bHRzLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBkZWZhdWx0cy52YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgZGVmYXVsdHMgPSB7IC4uLmRlZmF1bHRzLCB2YWx1ZTogU3RyaW5nKGRlZmF1bHRzLnZhbHVlKSB9O1xuICAgIH1cbiAgICBzdXBlcihkZWZhdWx0cyk7XG4gICAgdGhpcy50eXBlID0gXCJkZWNsXCI7XG4gIH1cbiAgZ2V0IHZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Auc3RhcnRzV2l0aChcIi0tXCIpIHx8IHRoaXMucHJvcFswXSA9PT0gXCIkXCI7XG4gIH1cbn07XG52YXIgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbiQ0O1xuRGVjbGFyYXRpb24kNC5kZWZhdWx0ID0gRGVjbGFyYXRpb24kNDtcbmxldCB1cmxBbHBoYWJldCA9IFwidXNlYW5kb20tMjZUMTk4MzQwUFg3NXB4SkFDS1ZFUllNSU5EQlVTSFdPTEZfR1FaYmZnaGprbHF2d3l6cmljdFwiO1xubGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSA9IDIxKSA9PiB7XG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gXCJcIjtcbiAgICBsZXQgaSA9IHNpemU7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWQgKz0gYWxwaGFiZXRbTWF0aC5yYW5kb20oKSAqIGFscGhhYmV0Lmxlbmd0aCB8IDBdO1xuICAgIH1cbiAgICByZXR1cm4gaWQ7XG4gIH07XG59O1xubGV0IG5hbm9pZCQxID0gKHNpemUgPSAyMSkgPT4ge1xuICBsZXQgaWQgPSBcIlwiO1xuICBsZXQgaSA9IHNpemU7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZCArPSB1cmxBbHBoYWJldFtNYXRoLnJhbmRvbSgpICogNjQgfCAwXTtcbiAgfVxuICByZXR1cm4gaWQ7XG59O1xudmFyIG5vblNlY3VyZSA9IHsgbmFub2lkOiBuYW5vaWQkMSwgY3VzdG9tQWxwaGFiZXQgfTtcbmxldCB7IFNvdXJjZU1hcENvbnN1bWVyOiBTb3VyY2VNYXBDb25zdW1lciQyLCBTb3VyY2VNYXBHZW5lcmF0b3I6IFNvdXJjZU1hcEdlbmVyYXRvciQyIH0gPSByZXF1aXJlJCQyO1xubGV0IHsgZXhpc3RzU3luYywgcmVhZEZpbGVTeW5jIH0gPSByZXF1aXJlJCQyO1xubGV0IHsgZGlybmFtZTogZGlybmFtZSQxLCBqb2luIH0gPSByZXF1aXJlJCQyO1xuZnVuY3Rpb24gZnJvbUJhc2U2NChzdHIpIHtcbiAgaWYgKEJ1ZmZlcikge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShzdHIsIFwiYmFzZTY0XCIpLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHdpbmRvdy5hdG9iKHN0cik7XG4gIH1cbn1cbmxldCBQcmV2aW91c01hcCQyID0gY2xhc3MgUHJldmlvdXNNYXAge1xuICBjb25zdHJ1Y3Rvcihjc3MsIG9wdHMpIHtcbiAgICBpZiAob3B0cy5tYXAgPT09IGZhbHNlKSByZXR1cm47XG4gICAgdGhpcy5sb2FkQW5ub3RhdGlvbihjc3MpO1xuICAgIHRoaXMuaW5saW5lID0gdGhpcy5zdGFydFdpdGgodGhpcy5hbm5vdGF0aW9uLCBcImRhdGE6XCIpO1xuICAgIGxldCBwcmV2ID0gb3B0cy5tYXAgPyBvcHRzLm1hcC5wcmV2IDogdm9pZCAwO1xuICAgIGxldCB0ZXh0ID0gdGhpcy5sb2FkTWFwKG9wdHMuZnJvbSwgcHJldik7XG4gICAgaWYgKCF0aGlzLm1hcEZpbGUgJiYgb3B0cy5mcm9tKSB7XG4gICAgICB0aGlzLm1hcEZpbGUgPSBvcHRzLmZyb207XG4gICAgfVxuICAgIGlmICh0aGlzLm1hcEZpbGUpIHRoaXMucm9vdCA9IGRpcm5hbWUkMSh0aGlzLm1hcEZpbGUpO1xuICAgIGlmICh0ZXh0KSB0aGlzLnRleHQgPSB0ZXh0O1xuICB9XG4gIGNvbnN1bWVyKCkge1xuICAgIGlmICghdGhpcy5jb25zdW1lckNhY2hlKSB7XG4gICAgICB0aGlzLmNvbnN1bWVyQ2FjaGUgPSBuZXcgU291cmNlTWFwQ29uc3VtZXIkMih0aGlzLnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25zdW1lckNhY2hlO1xuICB9XG4gIGRlY29kZUlubGluZSh0ZXh0KSB7XG4gICAgbGV0IGJhc2VDaGFyc2V0VXJpID0gL15kYXRhOmFwcGxpY2F0aW9uXFwvanNvbjtjaGFyc2V0PXV0Zi0/ODtiYXNlNjQsLztcbiAgICBsZXQgYmFzZVVyaSA9IC9eZGF0YTphcHBsaWNhdGlvblxcL2pzb247YmFzZTY0LC87XG4gICAgbGV0IGNoYXJzZXRVcmkgPSAvXmRhdGE6YXBwbGljYXRpb25cXC9qc29uO2NoYXJzZXQ9dXRmLT84LC87XG4gICAgbGV0IHVyaSA9IC9eZGF0YTphcHBsaWNhdGlvblxcL2pzb24sLztcbiAgICBpZiAoY2hhcnNldFVyaS50ZXN0KHRleHQpIHx8IHVyaS50ZXN0KHRleHQpKSB7XG4gICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHRleHQuc3Vic3RyKFJlZ0V4cC5sYXN0TWF0Y2gubGVuZ3RoKSk7XG4gICAgfVxuICAgIGlmIChiYXNlQ2hhcnNldFVyaS50ZXN0KHRleHQpIHx8IGJhc2VVcmkudGVzdCh0ZXh0KSkge1xuICAgICAgcmV0dXJuIGZyb21CYXNlNjQodGV4dC5zdWJzdHIoUmVnRXhwLmxhc3RNYXRjaC5sZW5ndGgpKTtcbiAgICB9XG4gICAgbGV0IGVuY29kaW5nID0gdGV4dC5tYXRjaCgvZGF0YTphcHBsaWNhdGlvblxcL2pzb247KFteLF0rKSwvKVsxXTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBzb3VyY2UgbWFwIGVuY29kaW5nIFwiICsgZW5jb2RpbmcpO1xuICB9XG4gIGdldEFubm90YXRpb25VUkwoc291cmNlTWFwU3RyaW5nKSB7XG4gICAgcmV0dXJuIHNvdXJjZU1hcFN0cmluZy5yZXBsYWNlKC9eXFwvXFwqXFxzKiMgc291cmNlTWFwcGluZ1VSTD0vLCBcIlwiKS50cmltKCk7XG4gIH1cbiAgaXNNYXAobWFwKSB7XG4gICAgaWYgKHR5cGVvZiBtYXAgIT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHlwZW9mIG1hcC5tYXBwaW5ncyA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgbWFwLl9tYXBwaW5ncyA9PT0gXCJzdHJpbmdcIiB8fCBBcnJheS5pc0FycmF5KG1hcC5zZWN0aW9ucyk7XG4gIH1cbiAgbG9hZEFubm90YXRpb24oY3NzKSB7XG4gICAgbGV0IGNvbW1lbnRzID0gY3NzLm1hdGNoKC9cXC9cXCpcXHMqIyBzb3VyY2VNYXBwaW5nVVJMPS9nbSk7XG4gICAgaWYgKCFjb21tZW50cykgcmV0dXJuO1xuICAgIGxldCBzdGFydCA9IGNzcy5sYXN0SW5kZXhPZihjb21tZW50cy5wb3AoKSk7XG4gICAgbGV0IGVuZCA9IGNzcy5pbmRleE9mKFwiKi9cIiwgc3RhcnQpO1xuICAgIGlmIChzdGFydCA+IC0xICYmIGVuZCA+IC0xKSB7XG4gICAgICB0aGlzLmFubm90YXRpb24gPSB0aGlzLmdldEFubm90YXRpb25VUkwoY3NzLnN1YnN0cmluZyhzdGFydCwgZW5kKSk7XG4gICAgfVxuICB9XG4gIGxvYWRGaWxlKHBhdGgpIHtcbiAgICB0aGlzLnJvb3QgPSBkaXJuYW1lJDEocGF0aCk7XG4gICAgaWYgKGV4aXN0c1N5bmMocGF0aCkpIHtcbiAgICAgIHRoaXMubWFwRmlsZSA9IHBhdGg7XG4gICAgICByZXR1cm4gcmVhZEZpbGVTeW5jKHBhdGgsIFwidXRmLThcIikudG9TdHJpbmcoKS50cmltKCk7XG4gICAgfVxuICB9XG4gIGxvYWRNYXAoZmlsZSwgcHJldikge1xuICAgIGlmIChwcmV2ID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcmV2KSB7XG4gICAgICBpZiAodHlwZW9mIHByZXYgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcmV2ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgbGV0IHByZXZQYXRoID0gcHJldihmaWxlKTtcbiAgICAgICAgaWYgKHByZXZQYXRoKSB7XG4gICAgICAgICAgbGV0IG1hcCA9IHRoaXMubG9hZEZpbGUocHJldlBhdGgpO1xuICAgICAgICAgIGlmICghbWFwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIFwiVW5hYmxlIHRvIGxvYWQgcHJldmlvdXMgc291cmNlIG1hcDogXCIgKyBwcmV2UGF0aC50b1N0cmluZygpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHByZXYgaW5zdGFuY2VvZiBTb3VyY2VNYXBDb25zdW1lciQyKSB7XG4gICAgICAgIHJldHVybiBTb3VyY2VNYXBHZW5lcmF0b3IkMi5mcm9tU291cmNlTWFwKHByZXYpLnRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2UgaWYgKHByZXYgaW5zdGFuY2VvZiBTb3VyY2VNYXBHZW5lcmF0b3IkMikge1xuICAgICAgICByZXR1cm4gcHJldi50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTWFwKHByZXYpKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShwcmV2KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBcIlVuc3VwcG9ydGVkIHByZXZpb3VzIHNvdXJjZSBtYXAgZm9ybWF0OiBcIiArIHByZXYudG9TdHJpbmcoKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pbmxpbmUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlY29kZUlubGluZSh0aGlzLmFubm90YXRpb24pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbm5vdGF0aW9uKSB7XG4gICAgICBsZXQgbWFwID0gdGhpcy5hbm5vdGF0aW9uO1xuICAgICAgaWYgKGZpbGUpIG1hcCA9IGpvaW4oZGlybmFtZSQxKGZpbGUpLCBtYXApO1xuICAgICAgcmV0dXJuIHRoaXMubG9hZEZpbGUobWFwKTtcbiAgICB9XG4gIH1cbiAgc3RhcnRXaXRoKHN0cmluZywgc3RhcnQpIHtcbiAgICBpZiAoIXN0cmluZykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBzdHJpbmcuc3Vic3RyKDAsIHN0YXJ0Lmxlbmd0aCkgPT09IHN0YXJ0O1xuICB9XG4gIHdpdGhDb250ZW50KCkge1xuICAgIHJldHVybiAhISh0aGlzLmNvbnN1bWVyKCkuc291cmNlc0NvbnRlbnQgJiYgdGhpcy5jb25zdW1lcigpLnNvdXJjZXNDb250ZW50Lmxlbmd0aCA+IDApO1xuICB9XG59O1xudmFyIHByZXZpb3VzTWFwID0gUHJldmlvdXNNYXAkMjtcblByZXZpb3VzTWFwJDIuZGVmYXVsdCA9IFByZXZpb3VzTWFwJDI7XG5sZXQgeyBTb3VyY2VNYXBDb25zdW1lcjogU291cmNlTWFwQ29uc3VtZXIkMSwgU291cmNlTWFwR2VuZXJhdG9yOiBTb3VyY2VNYXBHZW5lcmF0b3IkMSB9ID0gcmVxdWlyZSQkMjtcbmxldCB7IGZpbGVVUkxUb1BhdGgsIHBhdGhUb0ZpbGVVUkw6IHBhdGhUb0ZpbGVVUkwkMSB9ID0gcmVxdWlyZSQkMjtcbmxldCB7IGlzQWJzb2x1dGUsIHJlc29sdmU6IHJlc29sdmUkMSB9ID0gcmVxdWlyZSQkMjtcbmxldCB7IG5hbm9pZCB9ID0gbm9uU2VjdXJlO1xubGV0IHRlcm1pbmFsSGlnaGxpZ2h0ID0gcmVxdWlyZSQkMjtcbmxldCBDc3NTeW50YXhFcnJvciQxID0gY3NzU3ludGF4RXJyb3I7XG5sZXQgUHJldmlvdXNNYXAkMSA9IHByZXZpb3VzTWFwO1xubGV0IGZyb21PZmZzZXRDYWNoZSA9IFN5bWJvbChcImZyb21PZmZzZXRDYWNoZVwiKTtcbmxldCBzb3VyY2VNYXBBdmFpbGFibGUkMSA9IEJvb2xlYW4oU291cmNlTWFwQ29uc3VtZXIkMSAmJiBTb3VyY2VNYXBHZW5lcmF0b3IkMSk7XG5sZXQgcGF0aEF2YWlsYWJsZSQxID0gQm9vbGVhbihyZXNvbHZlJDEgJiYgaXNBYnNvbHV0ZSk7XG5sZXQgSW5wdXQkNCA9IGNsYXNzIElucHV0IHtcbiAgY29uc3RydWN0b3IoY3NzLCBvcHRzID0ge30pIHtcbiAgICBpZiAoY3NzID09PSBudWxsIHx8IHR5cGVvZiBjc3MgPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIGNzcyA9PT0gXCJvYmplY3RcIiAmJiAhY3NzLnRvU3RyaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBvc3RDU1MgcmVjZWl2ZWQgJHtjc3N9IGluc3RlYWQgb2YgQ1NTIHN0cmluZ2ApO1xuICAgIH1cbiAgICB0aGlzLmNzcyA9IGNzcy50b1N0cmluZygpO1xuICAgIGlmICh0aGlzLmNzc1swXSA9PT0gXCJcXHVGRUZGXCIgfHwgdGhpcy5jc3NbMF0gPT09IFwi77++XCIpIHtcbiAgICAgIHRoaXMuaGFzQk9NID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3NzID0gdGhpcy5jc3Muc2xpY2UoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFzQk9NID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChvcHRzLmZyb20pIHtcbiAgICAgIGlmICghcGF0aEF2YWlsYWJsZSQxIHx8IC9eXFx3KzpcXC9cXC8vLnRlc3Qob3B0cy5mcm9tKSB8fCBpc0Fic29sdXRlKG9wdHMuZnJvbSkpIHtcbiAgICAgICAgdGhpcy5maWxlID0gb3B0cy5mcm9tO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5maWxlID0gcmVzb2x2ZSQxKG9wdHMuZnJvbSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwYXRoQXZhaWxhYmxlJDEgJiYgc291cmNlTWFwQXZhaWxhYmxlJDEpIHtcbiAgICAgIGxldCBtYXAgPSBuZXcgUHJldmlvdXNNYXAkMSh0aGlzLmNzcywgb3B0cyk7XG4gICAgICBpZiAobWFwLnRleHQpIHtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIGxldCBmaWxlID0gbWFwLmNvbnN1bWVyKCkuZmlsZTtcbiAgICAgICAgaWYgKCF0aGlzLmZpbGUgJiYgZmlsZSkgdGhpcy5maWxlID0gdGhpcy5tYXBSZXNvbHZlKGZpbGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuZmlsZSkge1xuICAgICAgdGhpcy5pZCA9IFwiPGlucHV0IGNzcyBcIiArIG5hbm9pZCg2KSArIFwiPlwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXApIHRoaXMubWFwLmZpbGUgPSB0aGlzLmZyb207XG4gIH1cbiAgZXJyb3IobWVzc2FnZSwgbGluZSwgY29sdW1uLCBvcHRzID0ge30pIHtcbiAgICBsZXQgcmVzdWx0MiwgZW5kTGluZSwgZW5kQ29sdW1uO1xuICAgIGlmIChsaW5lICYmIHR5cGVvZiBsaW5lID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBsZXQgc3RhcnQgPSBsaW5lO1xuICAgICAgbGV0IGVuZCA9IGNvbHVtbjtcbiAgICAgIGlmICh0eXBlb2Ygc3RhcnQub2Zmc2V0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmZyb21PZmZzZXQoc3RhcnQub2Zmc2V0KTtcbiAgICAgICAgbGluZSA9IHBvcy5saW5lO1xuICAgICAgICBjb2x1bW4gPSBwb3MuY29sO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGluZSA9IHN0YXJ0LmxpbmU7XG4gICAgICAgIGNvbHVtbiA9IHN0YXJ0LmNvbHVtbjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgZW5kLm9mZnNldCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5mcm9tT2Zmc2V0KGVuZC5vZmZzZXQpO1xuICAgICAgICBlbmRMaW5lID0gcG9zLmxpbmU7XG4gICAgICAgIGVuZENvbHVtbiA9IHBvcy5jb2w7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmRMaW5lID0gZW5kLmxpbmU7XG4gICAgICAgIGVuZENvbHVtbiA9IGVuZC5jb2x1bW47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghY29sdW1uKSB7XG4gICAgICBsZXQgcG9zID0gdGhpcy5mcm9tT2Zmc2V0KGxpbmUpO1xuICAgICAgbGluZSA9IHBvcy5saW5lO1xuICAgICAgY29sdW1uID0gcG9zLmNvbDtcbiAgICB9XG4gICAgbGV0IG9yaWdpbiA9IHRoaXMub3JpZ2luKGxpbmUsIGNvbHVtbiwgZW5kTGluZSwgZW5kQ29sdW1uKTtcbiAgICBpZiAob3JpZ2luKSB7XG4gICAgICByZXN1bHQyID0gbmV3IENzc1N5bnRheEVycm9yJDEoXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIG9yaWdpbi5lbmRMaW5lID09PSB2b2lkIDAgPyBvcmlnaW4ubGluZSA6IHsgY29sdW1uOiBvcmlnaW4uY29sdW1uLCBsaW5lOiBvcmlnaW4ubGluZSB9LFxuICAgICAgICBvcmlnaW4uZW5kTGluZSA9PT0gdm9pZCAwID8gb3JpZ2luLmNvbHVtbiA6IHsgY29sdW1uOiBvcmlnaW4uZW5kQ29sdW1uLCBsaW5lOiBvcmlnaW4uZW5kTGluZSB9LFxuICAgICAgICBvcmlnaW4uc291cmNlLFxuICAgICAgICBvcmlnaW4uZmlsZSxcbiAgICAgICAgb3B0cy5wbHVnaW5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdDIgPSBuZXcgQ3NzU3ludGF4RXJyb3IkMShcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgZW5kTGluZSA9PT0gdm9pZCAwID8gbGluZSA6IHsgY29sdW1uLCBsaW5lIH0sXG4gICAgICAgIGVuZExpbmUgPT09IHZvaWQgMCA/IGNvbHVtbiA6IHsgY29sdW1uOiBlbmRDb2x1bW4sIGxpbmU6IGVuZExpbmUgfSxcbiAgICAgICAgdGhpcy5jc3MsXG4gICAgICAgIHRoaXMuZmlsZSxcbiAgICAgICAgb3B0cy5wbHVnaW5cbiAgICAgICk7XG4gICAgfVxuICAgIHJlc3VsdDIuaW5wdXQgPSB7IGNvbHVtbiwgZW5kQ29sdW1uLCBlbmRMaW5lLCBsaW5lLCBzb3VyY2U6IHRoaXMuY3NzIH07XG4gICAgaWYgKHRoaXMuZmlsZSkge1xuICAgICAgaWYgKHBhdGhUb0ZpbGVVUkwkMSkge1xuICAgICAgICByZXN1bHQyLmlucHV0LnVybCA9IHBhdGhUb0ZpbGVVUkwkMSh0aGlzLmZpbGUpLnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgICByZXN1bHQyLmlucHV0LmZpbGUgPSB0aGlzLmZpbGU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQyO1xuICB9XG4gIGZyb21PZmZzZXQob2Zmc2V0KSB7XG4gICAgbGV0IGxhc3RMaW5lLCBsaW5lVG9JbmRleDtcbiAgICBpZiAoIXRoaXNbZnJvbU9mZnNldENhY2hlXSkge1xuICAgICAgbGV0IGxpbmVzID0gdGhpcy5jc3Muc3BsaXQoXCJcXG5cIik7XG4gICAgICBsaW5lVG9JbmRleCA9IG5ldyBBcnJheShsaW5lcy5sZW5ndGgpO1xuICAgICAgbGV0IHByZXZJbmRleCA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsaW5lVG9JbmRleFtpXSA9IHByZXZJbmRleDtcbiAgICAgICAgcHJldkluZGV4ICs9IGxpbmVzW2ldLmxlbmd0aCArIDE7XG4gICAgICB9XG4gICAgICB0aGlzW2Zyb21PZmZzZXRDYWNoZV0gPSBsaW5lVG9JbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZVRvSW5kZXggPSB0aGlzW2Zyb21PZmZzZXRDYWNoZV07XG4gICAgfVxuICAgIGxhc3RMaW5lID0gbGluZVRvSW5kZXhbbGluZVRvSW5kZXgubGVuZ3RoIC0gMV07XG4gICAgbGV0IG1pbiA9IDA7XG4gICAgaWYgKG9mZnNldCA+PSBsYXN0TGluZSkge1xuICAgICAgbWluID0gbGluZVRvSW5kZXgubGVuZ3RoIC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG1heCA9IGxpbmVUb0luZGV4Lmxlbmd0aCAtIDI7XG4gICAgICBsZXQgbWlkO1xuICAgICAgd2hpbGUgKG1pbiA8IG1heCkge1xuICAgICAgICBtaWQgPSBtaW4gKyAobWF4IC0gbWluID4+IDEpO1xuICAgICAgICBpZiAob2Zmc2V0IDwgbGluZVRvSW5kZXhbbWlkXSkge1xuICAgICAgICAgIG1heCA9IG1pZCAtIDE7XG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0ID49IGxpbmVUb0luZGV4W21pZCArIDFdKSB7XG4gICAgICAgICAgbWluID0gbWlkICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtaW4gPSBtaWQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbDogb2Zmc2V0IC0gbGluZVRvSW5kZXhbbWluXSArIDEsXG4gICAgICBsaW5lOiBtaW4gKyAxXG4gICAgfTtcbiAgfVxuICBtYXBSZXNvbHZlKGZpbGUpIHtcbiAgICBpZiAoL15cXHcrOlxcL1xcLy8udGVzdChmaWxlKSkge1xuICAgICAgcmV0dXJuIGZpbGU7XG4gICAgfVxuICAgIHJldHVybiByZXNvbHZlJDEodGhpcy5tYXAuY29uc3VtZXIoKS5zb3VyY2VSb290IHx8IHRoaXMubWFwLnJvb3QgfHwgXCIuXCIsIGZpbGUpO1xuICB9XG4gIG9yaWdpbihsaW5lLCBjb2x1bW4sIGVuZExpbmUsIGVuZENvbHVtbikge1xuICAgIGlmICghdGhpcy5tYXApIHJldHVybiBmYWxzZTtcbiAgICBsZXQgY29uc3VtZXIgPSB0aGlzLm1hcC5jb25zdW1lcigpO1xuICAgIGxldCBmcm9tID0gY29uc3VtZXIub3JpZ2luYWxQb3NpdGlvbkZvcih7IGNvbHVtbiwgbGluZSB9KTtcbiAgICBpZiAoIWZyb20uc291cmNlKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IHRvO1xuICAgIGlmICh0eXBlb2YgZW5kTGluZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdG8gPSBjb25zdW1lci5vcmlnaW5hbFBvc2l0aW9uRm9yKHsgY29sdW1uOiBlbmRDb2x1bW4sIGxpbmU6IGVuZExpbmUgfSk7XG4gICAgfVxuICAgIGxldCBmcm9tVXJsO1xuICAgIGlmIChpc0Fic29sdXRlKGZyb20uc291cmNlKSkge1xuICAgICAgZnJvbVVybCA9IHBhdGhUb0ZpbGVVUkwkMShmcm9tLnNvdXJjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZyb21VcmwgPSBuZXcgVVJMKFxuICAgICAgICBmcm9tLnNvdXJjZSxcbiAgICAgICAgdGhpcy5tYXAuY29uc3VtZXIoKS5zb3VyY2VSb290IHx8IHBhdGhUb0ZpbGVVUkwkMSh0aGlzLm1hcC5tYXBGaWxlKVxuICAgICAgKTtcbiAgICB9XG4gICAgbGV0IHJlc3VsdDIgPSB7XG4gICAgICBjb2x1bW46IGZyb20uY29sdW1uLFxuICAgICAgZW5kQ29sdW1uOiB0byAmJiB0by5jb2x1bW4sXG4gICAgICBlbmRMaW5lOiB0byAmJiB0by5saW5lLFxuICAgICAgbGluZTogZnJvbS5saW5lLFxuICAgICAgdXJsOiBmcm9tVXJsLnRvU3RyaW5nKClcbiAgICB9O1xuICAgIGlmIChmcm9tVXJsLnByb3RvY29sID09PSBcImZpbGU6XCIpIHtcbiAgICAgIGlmIChmaWxlVVJMVG9QYXRoKSB7XG4gICAgICAgIHJlc3VsdDIuZmlsZSA9IGZpbGVVUkxUb1BhdGgoZnJvbVVybCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGZpbGU6IHByb3RvY29sIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBQb3N0Q1NTIGJ1aWxkYCk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzb3VyY2UgPSBjb25zdW1lci5zb3VyY2VDb250ZW50Rm9yKGZyb20uc291cmNlKTtcbiAgICBpZiAoc291cmNlKSByZXN1bHQyLnNvdXJjZSA9IHNvdXJjZTtcbiAgICByZXR1cm4gcmVzdWx0MjtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgbGV0IGpzb24gPSB7fTtcbiAgICBmb3IgKGxldCBuYW1lIG9mIFtcImhhc0JPTVwiLCBcImNzc1wiLCBcImZpbGVcIiwgXCJpZFwiXSkge1xuICAgICAgaWYgKHRoaXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICBqc29uW25hbWVdID0gdGhpc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubWFwKSB7XG4gICAgICBqc29uLm1hcCA9IHsgLi4udGhpcy5tYXAgfTtcbiAgICAgIGlmIChqc29uLm1hcC5jb25zdW1lckNhY2hlKSB7XG4gICAgICAgIGpzb24ubWFwLmNvbnN1bWVyQ2FjaGUgPSB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBqc29uO1xuICB9XG4gIGdldCBmcm9tKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUgfHwgdGhpcy5pZDtcbiAgfVxufTtcbnZhciBpbnB1dCA9IElucHV0JDQ7XG5JbnB1dCQ0LmRlZmF1bHQgPSBJbnB1dCQ0O1xuaWYgKHRlcm1pbmFsSGlnaGxpZ2h0ICYmIHRlcm1pbmFsSGlnaGxpZ2h0LnJlZ2lzdGVySW5wdXQpIHtcbiAgdGVybWluYWxIaWdobGlnaHQucmVnaXN0ZXJJbnB1dChJbnB1dCQ0KTtcbn1cbmxldCB7IFNvdXJjZU1hcENvbnN1bWVyLCBTb3VyY2VNYXBHZW5lcmF0b3IgfSA9IHJlcXVpcmUkJDI7XG5sZXQgeyBkaXJuYW1lLCByZWxhdGl2ZSwgcmVzb2x2ZSwgc2VwIH0gPSByZXF1aXJlJCQyO1xubGV0IHsgcGF0aFRvRmlsZVVSTCB9ID0gcmVxdWlyZSQkMjtcbmxldCBJbnB1dCQzID0gaW5wdXQ7XG5sZXQgc291cmNlTWFwQXZhaWxhYmxlID0gQm9vbGVhbihTb3VyY2VNYXBDb25zdW1lciAmJiBTb3VyY2VNYXBHZW5lcmF0b3IpO1xubGV0IHBhdGhBdmFpbGFibGUgPSBCb29sZWFuKGRpcm5hbWUgJiYgcmVzb2x2ZSAmJiByZWxhdGl2ZSAmJiBzZXApO1xubGV0IE1hcEdlbmVyYXRvciQyID0gY2xhc3MgTWFwR2VuZXJhdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5naWZ5Miwgcm9vdDIsIG9wdHMsIGNzc1N0cmluZykge1xuICAgIHRoaXMuc3RyaW5naWZ5ID0gc3RyaW5naWZ5MjtcbiAgICB0aGlzLm1hcE9wdHMgPSBvcHRzLm1hcCB8fCB7fTtcbiAgICB0aGlzLnJvb3QgPSByb290MjtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgIHRoaXMuY3NzID0gY3NzU3RyaW5nO1xuICAgIHRoaXMub3JpZ2luYWxDU1MgPSBjc3NTdHJpbmc7XG4gICAgdGhpcy51c2VzRmlsZVVybHMgPSAhdGhpcy5tYXBPcHRzLmZyb20gJiYgdGhpcy5tYXBPcHRzLmFic29sdXRlO1xuICAgIHRoaXMubWVtb2l6ZWRGaWxlVVJMcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgdGhpcy5tZW1vaXplZFBhdGhzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICB0aGlzLm1lbW9pemVkVVJMcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIH1cbiAgYWRkQW5ub3RhdGlvbigpIHtcbiAgICBsZXQgY29udGVudDtcbiAgICBpZiAodGhpcy5pc0lubGluZSgpKSB7XG4gICAgICBjb250ZW50ID0gXCJkYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgdGhpcy50b0Jhc2U2NCh0aGlzLm1hcC50b1N0cmluZygpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29udGVudCA9IHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbih0aGlzLm9wdHMudG8sIHRoaXMucm9vdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLm91dHB1dEZpbGUoKSArIFwiLm1hcFwiO1xuICAgIH1cbiAgICBsZXQgZW9sID0gXCJcXG5cIjtcbiAgICBpZiAodGhpcy5jc3MuaW5jbHVkZXMoXCJcXHJcXG5cIikpIGVvbCA9IFwiXFxyXFxuXCI7XG4gICAgdGhpcy5jc3MgKz0gZW9sICsgXCIvKiMgc291cmNlTWFwcGluZ1VSTD1cIiArIGNvbnRlbnQgKyBcIiAqL1wiO1xuICB9XG4gIGFwcGx5UHJldk1hcHMoKSB7XG4gICAgZm9yIChsZXQgcHJldiBvZiB0aGlzLnByZXZpb3VzKCkpIHtcbiAgICAgIGxldCBmcm9tID0gdGhpcy50b1VybCh0aGlzLnBhdGgocHJldi5maWxlKSk7XG4gICAgICBsZXQgcm9vdDIgPSBwcmV2LnJvb3QgfHwgZGlybmFtZShwcmV2LmZpbGUpO1xuICAgICAgbGV0IG1hcDtcbiAgICAgIGlmICh0aGlzLm1hcE9wdHMuc291cmNlc0NvbnRlbnQgPT09IGZhbHNlKSB7XG4gICAgICAgIG1hcCA9IG5ldyBTb3VyY2VNYXBDb25zdW1lcihwcmV2LnRleHQpO1xuICAgICAgICBpZiAobWFwLnNvdXJjZXNDb250ZW50KSB7XG4gICAgICAgICAgbWFwLnNvdXJjZXNDb250ZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFwID0gcHJldi5jb25zdW1lcigpO1xuICAgICAgfVxuICAgICAgdGhpcy5tYXAuYXBwbHlTb3VyY2VNYXAobWFwLCBmcm9tLCB0aGlzLnRvVXJsKHRoaXMucGF0aChyb290MikpKTtcbiAgICB9XG4gIH1cbiAgY2xlYXJBbm5vdGF0aW9uKCkge1xuICAgIGlmICh0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbiA9PT0gZmFsc2UpIHJldHVybjtcbiAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICBsZXQgbm9kZTI7XG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5yb290Lm5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIG5vZGUyID0gdGhpcy5yb290Lm5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZTIudHlwZSAhPT0gXCJjb21tZW50XCIpIGNvbnRpbnVlO1xuICAgICAgICBpZiAobm9kZTIudGV4dC5pbmRleE9mKFwiIyBzb3VyY2VNYXBwaW5nVVJMPVwiKSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMucm9vdC5yZW1vdmVDaGlsZChpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5jc3MpIHtcbiAgICAgIHRoaXMuY3NzID0gdGhpcy5jc3MucmVwbGFjZSgvXFxuKj9cXC9cXCojW1xcU1xcc10qP1xcKlxcLyQvZ20sIFwiXCIpO1xuICAgIH1cbiAgfVxuICBnZW5lcmF0ZSgpIHtcbiAgICB0aGlzLmNsZWFyQW5ub3RhdGlvbigpO1xuICAgIGlmIChwYXRoQXZhaWxhYmxlICYmIHNvdXJjZU1hcEF2YWlsYWJsZSAmJiB0aGlzLmlzTWFwKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlTWFwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZXN1bHQyID0gXCJcIjtcbiAgICAgIHRoaXMuc3RyaW5naWZ5KHRoaXMucm9vdCwgKGkpID0+IHtcbiAgICAgICAgcmVzdWx0MiArPSBpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gW3Jlc3VsdDJdO1xuICAgIH1cbiAgfVxuICBnZW5lcmF0ZU1hcCgpIHtcbiAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICB0aGlzLmdlbmVyYXRlU3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByZXZpb3VzKCkubGVuZ3RoID09PSAxKSB7XG4gICAgICBsZXQgcHJldiA9IHRoaXMucHJldmlvdXMoKVswXS5jb25zdW1lcigpO1xuICAgICAgcHJldi5maWxlID0gdGhpcy5vdXRwdXRGaWxlKCk7XG4gICAgICB0aGlzLm1hcCA9IFNvdXJjZU1hcEdlbmVyYXRvci5mcm9tU291cmNlTWFwKHByZXYsIHtcbiAgICAgICAgaWdub3JlSW52YWxpZE1hcHBpbmc6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcCA9IG5ldyBTb3VyY2VNYXBHZW5lcmF0b3Ioe1xuICAgICAgICBmaWxlOiB0aGlzLm91dHB1dEZpbGUoKSxcbiAgICAgICAgaWdub3JlSW52YWxpZE1hcHBpbmc6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tYXAuYWRkTWFwcGluZyh7XG4gICAgICAgIGdlbmVyYXRlZDogeyBjb2x1bW46IDAsIGxpbmU6IDEgfSxcbiAgICAgICAgb3JpZ2luYWw6IHsgY29sdW1uOiAwLCBsaW5lOiAxIH0sXG4gICAgICAgIHNvdXJjZTogdGhpcy5vcHRzLmZyb20gPyB0aGlzLnRvVXJsKHRoaXMucGF0aCh0aGlzLm9wdHMuZnJvbSkpIDogXCI8bm8gc291cmNlPlwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNTb3VyY2VzQ29udGVudCgpKSB0aGlzLnNldFNvdXJjZXNDb250ZW50KCk7XG4gICAgaWYgKHRoaXMucm9vdCAmJiB0aGlzLnByZXZpb3VzKCkubGVuZ3RoID4gMCkgdGhpcy5hcHBseVByZXZNYXBzKCk7XG4gICAgaWYgKHRoaXMuaXNBbm5vdGF0aW9uKCkpIHRoaXMuYWRkQW5ub3RhdGlvbigpO1xuICAgIGlmICh0aGlzLmlzSW5saW5lKCkpIHtcbiAgICAgIHJldHVybiBbdGhpcy5jc3NdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW3RoaXMuY3NzLCB0aGlzLm1hcF07XG4gICAgfVxuICB9XG4gIGdlbmVyYXRlU3RyaW5nKCkge1xuICAgIHRoaXMuY3NzID0gXCJcIjtcbiAgICB0aGlzLm1hcCA9IG5ldyBTb3VyY2VNYXBHZW5lcmF0b3Ioe1xuICAgICAgZmlsZTogdGhpcy5vdXRwdXRGaWxlKCksXG4gICAgICBpZ25vcmVJbnZhbGlkTWFwcGluZzogdHJ1ZVxuICAgIH0pO1xuICAgIGxldCBsaW5lID0gMTtcbiAgICBsZXQgY29sdW1uID0gMTtcbiAgICBsZXQgbm9Tb3VyY2UgPSBcIjxubyBzb3VyY2U+XCI7XG4gICAgbGV0IG1hcHBpbmcgPSB7XG4gICAgICBnZW5lcmF0ZWQ6IHsgY29sdW1uOiAwLCBsaW5lOiAwIH0sXG4gICAgICBvcmlnaW5hbDogeyBjb2x1bW46IDAsIGxpbmU6IDAgfSxcbiAgICAgIHNvdXJjZTogXCJcIlxuICAgIH07XG4gICAgbGV0IGxpbmVzLCBsYXN0O1xuICAgIHRoaXMuc3RyaW5naWZ5KHRoaXMucm9vdCwgKHN0ciwgbm9kZTIsIHR5cGUpID0+IHtcbiAgICAgIHRoaXMuY3NzICs9IHN0cjtcbiAgICAgIGlmIChub2RlMiAmJiB0eXBlICE9PSBcImVuZFwiKSB7XG4gICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkLmxpbmUgPSBsaW5lO1xuICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZC5jb2x1bW4gPSBjb2x1bW4gLSAxO1xuICAgICAgICBpZiAobm9kZTIuc291cmNlICYmIG5vZGUyLnNvdXJjZS5zdGFydCkge1xuICAgICAgICAgIG1hcHBpbmcuc291cmNlID0gdGhpcy5zb3VyY2VQYXRoKG5vZGUyKTtcbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmxpbmUgPSBub2RlMi5zb3VyY2Uuc3RhcnQubGluZTtcbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmNvbHVtbiA9IG5vZGUyLnNvdXJjZS5zdGFydC5jb2x1bW4gLSAxO1xuICAgICAgICAgIHRoaXMubWFwLmFkZE1hcHBpbmcobWFwcGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSBub1NvdXJjZTtcbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmxpbmUgPSAxO1xuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWwuY29sdW1uID0gMDtcbiAgICAgICAgICB0aGlzLm1hcC5hZGRNYXBwaW5nKG1hcHBpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaW5lcyA9IHN0ci5tYXRjaCgvXFxuL2cpO1xuICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgIGxpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgICBsYXN0ID0gc3RyLmxhc3RJbmRleE9mKFwiXFxuXCIpO1xuICAgICAgICBjb2x1bW4gPSBzdHIubGVuZ3RoIC0gbGFzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbiArPSBzdHIubGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUyICYmIHR5cGUgIT09IFwic3RhcnRcIikge1xuICAgICAgICBsZXQgcCA9IG5vZGUyLnBhcmVudCB8fCB7IHJhd3M6IHt9IH07XG4gICAgICAgIGxldCBjaGlsZGxlc3MgPSBub2RlMi50eXBlID09PSBcImRlY2xcIiB8fCBub2RlMi50eXBlID09PSBcImF0cnVsZVwiICYmICFub2RlMi5ub2RlcztcbiAgICAgICAgaWYgKCFjaGlsZGxlc3MgfHwgbm9kZTIgIT09IHAubGFzdCB8fCBwLnJhd3Muc2VtaWNvbG9uKSB7XG4gICAgICAgICAgaWYgKG5vZGUyLnNvdXJjZSAmJiBub2RlMi5zb3VyY2UuZW5kKSB7XG4gICAgICAgICAgICBtYXBwaW5nLnNvdXJjZSA9IHRoaXMuc291cmNlUGF0aChub2RlMik7XG4gICAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmxpbmUgPSBub2RlMi5zb3VyY2UuZW5kLmxpbmU7XG4gICAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmNvbHVtbiA9IG5vZGUyLnNvdXJjZS5lbmQuY29sdW1uIC0gMTtcbiAgICAgICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkLmxpbmUgPSBsaW5lO1xuICAgICAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWQuY29sdW1uID0gY29sdW1uIC0gMjtcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZE1hcHBpbmcobWFwcGluZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hcHBpbmcuc291cmNlID0gbm9Tb3VyY2U7XG4gICAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmxpbmUgPSAxO1xuICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbC5jb2x1bW4gPSAwO1xuICAgICAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWQubGluZSA9IGxpbmU7XG4gICAgICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZC5jb2x1bW4gPSBjb2x1bW4gLSAxO1xuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTWFwcGluZyhtYXBwaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpc0Fubm90YXRpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNJbmxpbmUoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5tYXBPcHRzLmFubm90YXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJldmlvdXMoKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCkuc29tZSgoaSkgPT4gaS5hbm5vdGF0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaXNJbmxpbmUoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm1hcE9wdHMuaW5saW5lICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXBPcHRzLmlubGluZTtcbiAgICB9XG4gICAgbGV0IGFubm90YXRpb24gPSB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbjtcbiAgICBpZiAodHlwZW9mIGFubm90YXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgYW5ub3RhdGlvbiAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcmV2aW91cygpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXMoKS5zb21lKChpKSA9PiBpLmlubGluZSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlzTWFwKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRzLm1hcCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuICEhdGhpcy5vcHRzLm1hcDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXMoKS5sZW5ndGggPiAwO1xuICB9XG4gIGlzU291cmNlc0NvbnRlbnQoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm1hcE9wdHMuc291cmNlc0NvbnRlbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcE9wdHMuc291cmNlc0NvbnRlbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnByZXZpb3VzKCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcmV2aW91cygpLnNvbWUoKGkpID0+IGkud2l0aENvbnRlbnQoKSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIG91dHB1dEZpbGUoKSB7XG4gICAgaWYgKHRoaXMub3B0cy50bykge1xuICAgICAgcmV0dXJuIHRoaXMucGF0aCh0aGlzLm9wdHMudG8pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLmZyb20pIHtcbiAgICAgIHJldHVybiB0aGlzLnBhdGgodGhpcy5vcHRzLmZyb20pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJ0by5jc3NcIjtcbiAgICB9XG4gIH1cbiAgcGF0aChmaWxlKSB7XG4gICAgaWYgKHRoaXMubWFwT3B0cy5hYnNvbHV0ZSkgcmV0dXJuIGZpbGU7XG4gICAgaWYgKGZpbGUuY2hhckNvZGVBdCgwKSA9PT0gNjApIHJldHVybiBmaWxlO1xuICAgIGlmICgvXlxcdys6XFwvXFwvLy50ZXN0KGZpbGUpKSByZXR1cm4gZmlsZTtcbiAgICBsZXQgY2FjaGVkID0gdGhpcy5tZW1vaXplZFBhdGhzLmdldChmaWxlKTtcbiAgICBpZiAoY2FjaGVkKSByZXR1cm4gY2FjaGVkO1xuICAgIGxldCBmcm9tID0gdGhpcy5vcHRzLnRvID8gZGlybmFtZSh0aGlzLm9wdHMudG8pIDogXCIuXCI7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgZnJvbSA9IGRpcm5hbWUocmVzb2x2ZShmcm9tLCB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbikpO1xuICAgIH1cbiAgICBsZXQgcGF0aCA9IHJlbGF0aXZlKGZyb20sIGZpbGUpO1xuICAgIHRoaXMubWVtb2l6ZWRQYXRocy5zZXQoZmlsZSwgcGF0aCk7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cbiAgcHJldmlvdXMoKSB7XG4gICAgaWYgKCF0aGlzLnByZXZpb3VzTWFwcykge1xuICAgICAgdGhpcy5wcmV2aW91c01hcHMgPSBbXTtcbiAgICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgICAgdGhpcy5yb290LndhbGsoKG5vZGUyKSA9PiB7XG4gICAgICAgICAgaWYgKG5vZGUyLnNvdXJjZSAmJiBub2RlMi5zb3VyY2UuaW5wdXQubWFwKSB7XG4gICAgICAgICAgICBsZXQgbWFwID0gbm9kZTIuc291cmNlLmlucHV0Lm1hcDtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcmV2aW91c01hcHMuaW5jbHVkZXMobWFwKSkge1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzTWFwcy5wdXNoKG1hcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpbnB1dDIgPSBuZXcgSW5wdXQkMyh0aGlzLm9yaWdpbmFsQ1NTLCB0aGlzLm9wdHMpO1xuICAgICAgICBpZiAoaW5wdXQyLm1hcCkgdGhpcy5wcmV2aW91c01hcHMucHVzaChpbnB1dDIubWFwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXNNYXBzO1xuICB9XG4gIHNldFNvdXJjZXNDb250ZW50KCkge1xuICAgIGxldCBhbHJlYWR5ID0ge307XG4gICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgdGhpcy5yb290LndhbGsoKG5vZGUyKSA9PiB7XG4gICAgICAgIGlmIChub2RlMi5zb3VyY2UpIHtcbiAgICAgICAgICBsZXQgZnJvbSA9IG5vZGUyLnNvdXJjZS5pbnB1dC5mcm9tO1xuICAgICAgICAgIGlmIChmcm9tICYmICFhbHJlYWR5W2Zyb21dKSB7XG4gICAgICAgICAgICBhbHJlYWR5W2Zyb21dID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBmcm9tVXJsID0gdGhpcy51c2VzRmlsZVVybHMgPyB0aGlzLnRvRmlsZVVybChmcm9tKSA6IHRoaXMudG9VcmwodGhpcy5wYXRoKGZyb20pKTtcbiAgICAgICAgICAgIHRoaXMubWFwLnNldFNvdXJjZUNvbnRlbnQoZnJvbVVybCwgbm9kZTIuc291cmNlLmlucHV0LmNzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3NzKSB7XG4gICAgICBsZXQgZnJvbSA9IHRoaXMub3B0cy5mcm9tID8gdGhpcy50b1VybCh0aGlzLnBhdGgodGhpcy5vcHRzLmZyb20pKSA6IFwiPG5vIHNvdXJjZT5cIjtcbiAgICAgIHRoaXMubWFwLnNldFNvdXJjZUNvbnRlbnQoZnJvbSwgdGhpcy5jc3MpO1xuICAgIH1cbiAgfVxuICBzb3VyY2VQYXRoKG5vZGUyKSB7XG4gICAgaWYgKHRoaXMubWFwT3B0cy5mcm9tKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1VybCh0aGlzLm1hcE9wdHMuZnJvbSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnVzZXNGaWxlVXJscykge1xuICAgICAgcmV0dXJuIHRoaXMudG9GaWxlVXJsKG5vZGUyLnNvdXJjZS5pbnB1dC5mcm9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudG9VcmwodGhpcy5wYXRoKG5vZGUyLnNvdXJjZS5pbnB1dC5mcm9tKSk7XG4gICAgfVxuICB9XG4gIHRvQmFzZTY0KHN0cikge1xuICAgIGlmIChCdWZmZXIpIHtcbiAgICAgIHJldHVybiBCdWZmZXIuZnJvbShzdHIpLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gd2luZG93LmJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpKTtcbiAgICB9XG4gIH1cbiAgdG9GaWxlVXJsKHBhdGgpIHtcbiAgICBsZXQgY2FjaGVkID0gdGhpcy5tZW1vaXplZEZpbGVVUkxzLmdldChwYXRoKTtcbiAgICBpZiAoY2FjaGVkKSByZXR1cm4gY2FjaGVkO1xuICAgIGlmIChwYXRoVG9GaWxlVVJMKSB7XG4gICAgICBsZXQgZmlsZVVSTCA9IHBhdGhUb0ZpbGVVUkwocGF0aCkudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMubWVtb2l6ZWRGaWxlVVJMcy5zZXQocGF0aCwgZmlsZVVSTCk7XG4gICAgICByZXR1cm4gZmlsZVVSTDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcImBtYXAuYWJzb2x1dGVgIG9wdGlvbiBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgUG9zdENTUyBidWlsZFwiXG4gICAgICApO1xuICAgIH1cbiAgfVxuICB0b1VybChwYXRoKSB7XG4gICAgbGV0IGNhY2hlZCA9IHRoaXMubWVtb2l6ZWRVUkxzLmdldChwYXRoKTtcbiAgICBpZiAoY2FjaGVkKSByZXR1cm4gY2FjaGVkO1xuICAgIGlmIChzZXAgPT09IFwiXFxcXFwiKSB7XG4gICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKTtcbiAgICB9XG4gICAgbGV0IHVybCA9IGVuY29kZVVSSShwYXRoKS5yZXBsYWNlKC9bIz9dL2csIGVuY29kZVVSSUNvbXBvbmVudCk7XG4gICAgdGhpcy5tZW1vaXplZFVSTHMuc2V0KHBhdGgsIHVybCk7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxufTtcbnZhciBtYXBHZW5lcmF0b3IgPSBNYXBHZW5lcmF0b3IkMjtcbmxldCBOb2RlJDIgPSBub2RlO1xubGV0IENvbW1lbnQkNCA9IGNsYXNzIENvbW1lbnQgZXh0ZW5kcyBOb2RlJDIge1xuICBjb25zdHJ1Y3RvcihkZWZhdWx0cykge1xuICAgIHN1cGVyKGRlZmF1bHRzKTtcbiAgICB0aGlzLnR5cGUgPSBcImNvbW1lbnRcIjtcbiAgfVxufTtcbnZhciBjb21tZW50ID0gQ29tbWVudCQ0O1xuQ29tbWVudCQ0LmRlZmF1bHQgPSBDb21tZW50JDQ7XG5sZXQgeyBpc0NsZWFuOiBpc0NsZWFuJDEsIG15OiBteSQxIH0gPSBzeW1ib2xzO1xubGV0IERlY2xhcmF0aW9uJDMgPSBkZWNsYXJhdGlvbjtcbmxldCBDb21tZW50JDMgPSBjb21tZW50O1xubGV0IE5vZGUkMSA9IG5vZGU7XG5sZXQgcGFyc2UkNCwgUnVsZSQ0LCBBdFJ1bGUkNCwgUm9vdCQ2O1xuZnVuY3Rpb24gY2xlYW5Tb3VyY2Uobm9kZXMpIHtcbiAgcmV0dXJuIG5vZGVzLm1hcCgoaSkgPT4ge1xuICAgIGlmIChpLm5vZGVzKSBpLm5vZGVzID0gY2xlYW5Tb3VyY2UoaS5ub2Rlcyk7XG4gICAgZGVsZXRlIGkuc291cmNlO1xuICAgIHJldHVybiBpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG1hcmtEaXJ0eVVwKG5vZGUyKSB7XG4gIG5vZGUyW2lzQ2xlYW4kMV0gPSBmYWxzZTtcbiAgaWYgKG5vZGUyLnByb3h5T2Yubm9kZXMpIHtcbiAgICBmb3IgKGxldCBpIG9mIG5vZGUyLnByb3h5T2Yubm9kZXMpIHtcbiAgICAgIG1hcmtEaXJ0eVVwKGkpO1xuICAgIH1cbiAgfVxufVxubGV0IENvbnRhaW5lciQ3ID0gY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgTm9kZSQxIHtcbiAgYXBwZW5kKC4uLmNoaWxkcmVuKSB7XG4gICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGxldCBub2RlcyA9IHRoaXMubm9ybWFsaXplKGNoaWxkLCB0aGlzLmxhc3QpO1xuICAgICAgZm9yIChsZXQgbm9kZTIgb2Ygbm9kZXMpIHRoaXMucHJveHlPZi5ub2Rlcy5wdXNoKG5vZGUyKTtcbiAgICB9XG4gICAgdGhpcy5tYXJrRGlydHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjbGVhblJhd3Moa2VlcEJldHdlZW4pIHtcbiAgICBzdXBlci5jbGVhblJhd3Moa2VlcEJldHdlZW4pO1xuICAgIGlmICh0aGlzLm5vZGVzKSB7XG4gICAgICBmb3IgKGxldCBub2RlMiBvZiB0aGlzLm5vZGVzKSBub2RlMi5jbGVhblJhd3Moa2VlcEJldHdlZW4pO1xuICAgIH1cbiAgfVxuICBlYWNoKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLnByb3h5T2Yubm9kZXMpIHJldHVybiB2b2lkIDA7XG4gICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5nZXRJdGVyYXRvcigpO1xuICAgIGxldCBpbmRleDIsIHJlc3VsdDI7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXhlc1tpdGVyYXRvcl0gPCB0aGlzLnByb3h5T2Yubm9kZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleDIgPSB0aGlzLmluZGV4ZXNbaXRlcmF0b3JdO1xuICAgICAgcmVzdWx0MiA9IGNhbGxiYWNrKHRoaXMucHJveHlPZi5ub2Rlc1tpbmRleDJdLCBpbmRleDIpO1xuICAgICAgaWYgKHJlc3VsdDIgPT09IGZhbHNlKSBicmVhaztcbiAgICAgIHRoaXMuaW5kZXhlc1tpdGVyYXRvcl0gKz0gMTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuaW5kZXhlc1tpdGVyYXRvcl07XG4gICAgcmV0dXJuIHJlc3VsdDI7XG4gIH1cbiAgZXZlcnkoY29uZGl0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXMuZXZlcnkoY29uZGl0aW9uKTtcbiAgfVxuICBnZXRJdGVyYXRvcigpIHtcbiAgICBpZiAoIXRoaXMubGFzdEVhY2gpIHRoaXMubGFzdEVhY2ggPSAwO1xuICAgIGlmICghdGhpcy5pbmRleGVzKSB0aGlzLmluZGV4ZXMgPSB7fTtcbiAgICB0aGlzLmxhc3RFYWNoICs9IDE7XG4gICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5sYXN0RWFjaDtcbiAgICB0aGlzLmluZGV4ZXNbaXRlcmF0b3JdID0gMDtcbiAgICByZXR1cm4gaXRlcmF0b3I7XG4gIH1cbiAgZ2V0UHJveHlQcm9jZXNzb3IoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldChub2RlMiwgcHJvcCkge1xuICAgICAgICBpZiAocHJvcCA9PT0gXCJwcm94eU9mXCIpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTI7XG4gICAgICAgIH0gZWxzZSBpZiAoIW5vZGUyW3Byb3BdKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUyW3Byb3BdO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09IFwiZWFjaFwiIHx8IHR5cGVvZiBwcm9wID09PSBcInN0cmluZ1wiICYmIHByb3Auc3RhcnRzV2l0aChcIndhbGtcIikpIHtcbiAgICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBub2RlMltwcm9wXShcbiAgICAgICAgICAgICAgLi4uYXJncy5tYXAoKGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChjaGlsZCwgaW5kZXgyKSA9PiBpKGNoaWxkLnRvUHJveHkoKSwgaW5kZXgyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09IFwiZXZlcnlcIiB8fCBwcm9wID09PSBcInNvbWVcIikge1xuICAgICAgICAgIHJldHVybiAoY2IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBub2RlMltwcm9wXShcbiAgICAgICAgICAgICAgKGNoaWxkLCAuLi5vdGhlcikgPT4gY2IoY2hpbGQudG9Qcm94eSgpLCAuLi5vdGhlcilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSBcInJvb3RcIikge1xuICAgICAgICAgIHJldHVybiAoKSA9PiBub2RlMi5yb290KCkudG9Qcm94eSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09IFwibm9kZXNcIikge1xuICAgICAgICAgIHJldHVybiBub2RlMi5ub2Rlcy5tYXAoKGkpID0+IGkudG9Qcm94eSgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSBcImZpcnN0XCIgfHwgcHJvcCA9PT0gXCJsYXN0XCIpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTJbcHJvcF0udG9Qcm94eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBub2RlMltwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldChub2RlMiwgcHJvcCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG5vZGUyW3Byb3BdID09PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgICAgIG5vZGUyW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIGlmIChwcm9wID09PSBcIm5hbWVcIiB8fCBwcm9wID09PSBcInBhcmFtc1wiIHx8IHByb3AgPT09IFwic2VsZWN0b3JcIikge1xuICAgICAgICAgIG5vZGUyLm1hcmtEaXJ0eSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgaW5kZXgoY2hpbGQpIHtcbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSBcIm51bWJlclwiKSByZXR1cm4gY2hpbGQ7XG4gICAgaWYgKGNoaWxkLnByb3h5T2YpIGNoaWxkID0gY2hpbGQucHJveHlPZjtcbiAgICByZXR1cm4gdGhpcy5wcm94eU9mLm5vZGVzLmluZGV4T2YoY2hpbGQpO1xuICB9XG4gIGluc2VydEFmdGVyKGV4aXN0LCBhZGQpIHtcbiAgICBsZXQgZXhpc3RJbmRleCA9IHRoaXMuaW5kZXgoZXhpc3QpO1xuICAgIGxldCBub2RlcyA9IHRoaXMubm9ybWFsaXplKGFkZCwgdGhpcy5wcm94eU9mLm5vZGVzW2V4aXN0SW5kZXhdKS5yZXZlcnNlKCk7XG4gICAgZXhpc3RJbmRleCA9IHRoaXMuaW5kZXgoZXhpc3QpO1xuICAgIGZvciAobGV0IG5vZGUyIG9mIG5vZGVzKSB0aGlzLnByb3h5T2Yubm9kZXMuc3BsaWNlKGV4aXN0SW5kZXggKyAxLCAwLCBub2RlMik7XG4gICAgbGV0IGluZGV4MjtcbiAgICBmb3IgKGxldCBpZCBpbiB0aGlzLmluZGV4ZXMpIHtcbiAgICAgIGluZGV4MiA9IHRoaXMuaW5kZXhlc1tpZF07XG4gICAgICBpZiAoZXhpc3RJbmRleCA8IGluZGV4Mikge1xuICAgICAgICB0aGlzLmluZGV4ZXNbaWRdID0gaW5kZXgyICsgbm9kZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1hcmtEaXJ0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGluc2VydEJlZm9yZShleGlzdCwgYWRkKSB7XG4gICAgbGV0IGV4aXN0SW5kZXggPSB0aGlzLmluZGV4KGV4aXN0KTtcbiAgICBsZXQgdHlwZSA9IGV4aXN0SW5kZXggPT09IDAgPyBcInByZXBlbmRcIiA6IGZhbHNlO1xuICAgIGxldCBub2RlcyA9IHRoaXMubm9ybWFsaXplKGFkZCwgdGhpcy5wcm94eU9mLm5vZGVzW2V4aXN0SW5kZXhdLCB0eXBlKS5yZXZlcnNlKCk7XG4gICAgZXhpc3RJbmRleCA9IHRoaXMuaW5kZXgoZXhpc3QpO1xuICAgIGZvciAobGV0IG5vZGUyIG9mIG5vZGVzKSB0aGlzLnByb3h5T2Yubm9kZXMuc3BsaWNlKGV4aXN0SW5kZXgsIDAsIG5vZGUyKTtcbiAgICBsZXQgaW5kZXgyO1xuICAgIGZvciAobGV0IGlkIGluIHRoaXMuaW5kZXhlcykge1xuICAgICAgaW5kZXgyID0gdGhpcy5pbmRleGVzW2lkXTtcbiAgICAgIGlmIChleGlzdEluZGV4IDw9IGluZGV4Mikge1xuICAgICAgICB0aGlzLmluZGV4ZXNbaWRdID0gaW5kZXgyICsgbm9kZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1hcmtEaXJ0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIG5vcm1hbGl6ZShub2Rlcywgc2FtcGxlKSB7XG4gICAgaWYgKHR5cGVvZiBub2RlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbm9kZXMgPSBjbGVhblNvdXJjZShwYXJzZSQ0KG5vZGVzKS5ub2Rlcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZXMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIG5vZGVzID0gW107XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG5vZGVzKSkge1xuICAgICAgbm9kZXMgPSBub2Rlcy5zbGljZSgwKTtcbiAgICAgIGZvciAobGV0IGkgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKGkucGFyZW50KSBpLnBhcmVudC5yZW1vdmVDaGlsZChpLCBcImlnbm9yZVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGVzLnR5cGUgPT09IFwicm9vdFwiICYmIHRoaXMudHlwZSAhPT0gXCJkb2N1bWVudFwiKSB7XG4gICAgICBub2RlcyA9IG5vZGVzLm5vZGVzLnNsaWNlKDApO1xuICAgICAgZm9yIChsZXQgaSBvZiBub2Rlcykge1xuICAgICAgICBpZiAoaS5wYXJlbnQpIGkucGFyZW50LnJlbW92ZUNoaWxkKGksIFwiaWdub3JlXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZXMudHlwZSkge1xuICAgICAgbm9kZXMgPSBbbm9kZXNdO1xuICAgIH0gZWxzZSBpZiAobm9kZXMucHJvcCkge1xuICAgICAgaWYgKHR5cGVvZiBub2Rlcy52YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWx1ZSBmaWVsZCBpcyBtaXNzZWQgaW4gbm9kZSBjcmVhdGlvblwiKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG5vZGVzLnZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG5vZGVzLnZhbHVlID0gU3RyaW5nKG5vZGVzLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIG5vZGVzID0gW25ldyBEZWNsYXJhdGlvbiQzKG5vZGVzKV07XG4gICAgfSBlbHNlIGlmIChub2Rlcy5zZWxlY3Rvcikge1xuICAgICAgbm9kZXMgPSBbbmV3IFJ1bGUkNChub2RlcyldO1xuICAgIH0gZWxzZSBpZiAobm9kZXMubmFtZSkge1xuICAgICAgbm9kZXMgPSBbbmV3IEF0UnVsZSQ0KG5vZGVzKV07XG4gICAgfSBlbHNlIGlmIChub2Rlcy50ZXh0KSB7XG4gICAgICBub2RlcyA9IFtuZXcgQ29tbWVudCQzKG5vZGVzKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gbm9kZSB0eXBlIGluIG5vZGUgY3JlYXRpb25cIik7XG4gICAgfVxuICAgIGxldCBwcm9jZXNzZWQgPSBub2Rlcy5tYXAoKGkpID0+IHtcbiAgICAgIGlmICghaVtteSQxXSkgQ29udGFpbmVyLnJlYnVpbGQoaSk7XG4gICAgICBpID0gaS5wcm94eU9mO1xuICAgICAgaWYgKGkucGFyZW50KSBpLnBhcmVudC5yZW1vdmVDaGlsZChpKTtcbiAgICAgIGlmIChpW2lzQ2xlYW4kMV0pIG1hcmtEaXJ0eVVwKGkpO1xuICAgICAgaWYgKHR5cGVvZiBpLnJhd3MuYmVmb3JlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmIChzYW1wbGUgJiYgdHlwZW9mIHNhbXBsZS5yYXdzLmJlZm9yZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGkucmF3cy5iZWZvcmUgPSBzYW1wbGUucmF3cy5iZWZvcmUucmVwbGFjZSgvXFxTL2csIFwiXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpLnBhcmVudCA9IHRoaXMucHJveHlPZjtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gIH1cbiAgcHJlcGVuZCguLi5jaGlsZHJlbikge1xuICAgIGNoaWxkcmVuID0gY2hpbGRyZW4ucmV2ZXJzZSgpO1xuICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBsZXQgbm9kZXMgPSB0aGlzLm5vcm1hbGl6ZShjaGlsZCwgdGhpcy5maXJzdCwgXCJwcmVwZW5kXCIpLnJldmVyc2UoKTtcbiAgICAgIGZvciAobGV0IG5vZGUyIG9mIG5vZGVzKSB0aGlzLnByb3h5T2Yubm9kZXMudW5zaGlmdChub2RlMik7XG4gICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLmluZGV4ZXMpIHtcbiAgICAgICAgdGhpcy5pbmRleGVzW2lkXSA9IHRoaXMuaW5kZXhlc1tpZF0gKyBub2Rlcy5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubWFya0RpcnR5KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgcHVzaChjaGlsZCkge1xuICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG4gICAgdGhpcy5wcm94eU9mLm5vZGVzLnB1c2goY2hpbGQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHJlbW92ZUFsbCgpIHtcbiAgICBmb3IgKGxldCBub2RlMiBvZiB0aGlzLnByb3h5T2Yubm9kZXMpIG5vZGUyLnBhcmVudCA9IHZvaWQgMDtcbiAgICB0aGlzLnByb3h5T2Yubm9kZXMgPSBbXTtcbiAgICB0aGlzLm1hcmtEaXJ0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgY2hpbGQgPSB0aGlzLmluZGV4KGNoaWxkKTtcbiAgICB0aGlzLnByb3h5T2Yubm9kZXNbY2hpbGRdLnBhcmVudCA9IHZvaWQgMDtcbiAgICB0aGlzLnByb3h5T2Yubm9kZXMuc3BsaWNlKGNoaWxkLCAxKTtcbiAgICBsZXQgaW5kZXgyO1xuICAgIGZvciAobGV0IGlkIGluIHRoaXMuaW5kZXhlcykge1xuICAgICAgaW5kZXgyID0gdGhpcy5pbmRleGVzW2lkXTtcbiAgICAgIGlmIChpbmRleDIgPj0gY2hpbGQpIHtcbiAgICAgICAgdGhpcy5pbmRleGVzW2lkXSA9IGluZGV4MiAtIDE7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubWFya0RpcnR5KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgcmVwbGFjZVZhbHVlcyhwYXR0ZXJuLCBvcHRzLCBjYWxsYmFjaykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy53YWxrRGVjbHMoKGRlY2wpID0+IHtcbiAgICAgIGlmIChvcHRzLnByb3BzICYmICFvcHRzLnByb3BzLmluY2x1ZGVzKGRlY2wucHJvcCkpIHJldHVybjtcbiAgICAgIGlmIChvcHRzLmZhc3QgJiYgIWRlY2wudmFsdWUuaW5jbHVkZXMob3B0cy5mYXN0KSkgcmV0dXJuO1xuICAgICAgZGVjbC52YWx1ZSA9IGRlY2wudmFsdWUucmVwbGFjZShwYXR0ZXJuLCBjYWxsYmFjayk7XG4gICAgfSk7XG4gICAgdGhpcy5tYXJrRGlydHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzb21lKGNvbmRpdGlvbikge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLnNvbWUoY29uZGl0aW9uKTtcbiAgfVxuICB3YWxrKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaCgoY2hpbGQsIGkpID0+IHtcbiAgICAgIGxldCByZXN1bHQyO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0MiA9IGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgY2hpbGQuYWRkVG9FcnJvcihlKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQyICE9PSBmYWxzZSAmJiBjaGlsZC53YWxrKSB7XG4gICAgICAgIHJlc3VsdDIgPSBjaGlsZC53YWxrKGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQyO1xuICAgIH0pO1xuICB9XG4gIHdhbGtBdFJ1bGVzKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sgPSBuYW1lO1xuICAgICAgcmV0dXJuIHRoaXMud2FsaygoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiYXRydWxlXCIpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5hbWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHJldHVybiB0aGlzLndhbGsoKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcImF0cnVsZVwiICYmIG5hbWUudGVzdChjaGlsZC5uYW1lKSkge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiYXRydWxlXCIgJiYgY2hpbGQubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHdhbGtDb21tZW50cyhjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLndhbGsoKGNoaWxkLCBpKSA9PiB7XG4gICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJjb21tZW50XCIpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICB3YWxrRGVjbHMocHJvcCwgY2FsbGJhY2spIHtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayA9IHByb3A7XG4gICAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJkZWNsXCIpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHByb3AgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHJldHVybiB0aGlzLndhbGsoKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcImRlY2xcIiAmJiBwcm9wLnRlc3QoY2hpbGQucHJvcCkpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMud2FsaygoY2hpbGQsIGkpID0+IHtcbiAgICAgIGlmIChjaGlsZC50eXBlID09PSBcImRlY2xcIiAmJiBjaGlsZC5wcm9wID09PSBwcm9wKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgd2Fsa1J1bGVzKHNlbGVjdG9yLCBjYWxsYmFjaykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrID0gc2VsZWN0b3I7XG4gICAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJydWxlXCIpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJydWxlXCIgJiYgc2VsZWN0b3IudGVzdChjaGlsZC5zZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMud2FsaygoY2hpbGQsIGkpID0+IHtcbiAgICAgIGlmIChjaGlsZC50eXBlID09PSBcInJ1bGVcIiAmJiBjaGlsZC5zZWxlY3RvciA9PT0gc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZXQgZmlyc3QoKSB7XG4gICAgaWYgKCF0aGlzLnByb3h5T2Yubm9kZXMpIHJldHVybiB2b2lkIDA7XG4gICAgcmV0dXJuIHRoaXMucHJveHlPZi5ub2Rlc1swXTtcbiAgfVxuICBnZXQgbGFzdCgpIHtcbiAgICBpZiAoIXRoaXMucHJveHlPZi5ub2RlcykgcmV0dXJuIHZvaWQgMDtcbiAgICByZXR1cm4gdGhpcy5wcm94eU9mLm5vZGVzW3RoaXMucHJveHlPZi5ub2Rlcy5sZW5ndGggLSAxXTtcbiAgfVxufTtcbkNvbnRhaW5lciQ3LnJlZ2lzdGVyUGFyc2UgPSAoZGVwZW5kYW50KSA9PiB7XG4gIHBhcnNlJDQgPSBkZXBlbmRhbnQ7XG59O1xuQ29udGFpbmVyJDcucmVnaXN0ZXJSdWxlID0gKGRlcGVuZGFudCkgPT4ge1xuICBSdWxlJDQgPSBkZXBlbmRhbnQ7XG59O1xuQ29udGFpbmVyJDcucmVnaXN0ZXJBdFJ1bGUgPSAoZGVwZW5kYW50KSA9PiB7XG4gIEF0UnVsZSQ0ID0gZGVwZW5kYW50O1xufTtcbkNvbnRhaW5lciQ3LnJlZ2lzdGVyUm9vdCA9IChkZXBlbmRhbnQpID0+IHtcbiAgUm9vdCQ2ID0gZGVwZW5kYW50O1xufTtcbnZhciBjb250YWluZXIgPSBDb250YWluZXIkNztcbkNvbnRhaW5lciQ3LmRlZmF1bHQgPSBDb250YWluZXIkNztcbkNvbnRhaW5lciQ3LnJlYnVpbGQgPSAobm9kZTIpID0+IHtcbiAgaWYgKG5vZGUyLnR5cGUgPT09IFwiYXRydWxlXCIpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yobm9kZTIsIEF0UnVsZSQ0LnByb3RvdHlwZSk7XG4gIH0gZWxzZSBpZiAobm9kZTIudHlwZSA9PT0gXCJydWxlXCIpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yobm9kZTIsIFJ1bGUkNC5wcm90b3R5cGUpO1xuICB9IGVsc2UgaWYgKG5vZGUyLnR5cGUgPT09IFwiZGVjbFwiKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG5vZGUyLCBEZWNsYXJhdGlvbiQzLnByb3RvdHlwZSk7XG4gIH0gZWxzZSBpZiAobm9kZTIudHlwZSA9PT0gXCJjb21tZW50XCIpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yobm9kZTIsIENvbW1lbnQkMy5wcm90b3R5cGUpO1xuICB9IGVsc2UgaWYgKG5vZGUyLnR5cGUgPT09IFwicm9vdFwiKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG5vZGUyLCBSb290JDYucHJvdG90eXBlKTtcbiAgfVxuICBub2RlMltteSQxXSA9IHRydWU7XG4gIGlmIChub2RlMi5ub2Rlcykge1xuICAgIG5vZGUyLm5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBDb250YWluZXIkNy5yZWJ1aWxkKGNoaWxkKTtcbiAgICB9KTtcbiAgfVxufTtcbmxldCBDb250YWluZXIkNiA9IGNvbnRhaW5lcjtcbmxldCBMYXp5UmVzdWx0JDQsIFByb2Nlc3NvciQzO1xubGV0IERvY3VtZW50JDMgPSBjbGFzcyBEb2N1bWVudCBleHRlbmRzIENvbnRhaW5lciQ2IHtcbiAgY29uc3RydWN0b3IoZGVmYXVsdHMpIHtcbiAgICBzdXBlcih7IHR5cGU6IFwiZG9jdW1lbnRcIiwgLi4uZGVmYXVsdHMgfSk7XG4gICAgaWYgKCF0aGlzLm5vZGVzKSB7XG4gICAgICB0aGlzLm5vZGVzID0gW107XG4gICAgfVxuICB9XG4gIHRvUmVzdWx0KG9wdHMgPSB7fSkge1xuICAgIGxldCBsYXp5ID0gbmV3IExhenlSZXN1bHQkNChuZXcgUHJvY2Vzc29yJDMoKSwgdGhpcywgb3B0cyk7XG4gICAgcmV0dXJuIGxhenkuc3RyaW5naWZ5KCk7XG4gIH1cbn07XG5Eb2N1bWVudCQzLnJlZ2lzdGVyTGF6eVJlc3VsdCA9IChkZXBlbmRhbnQpID0+IHtcbiAgTGF6eVJlc3VsdCQ0ID0gZGVwZW5kYW50O1xufTtcbkRvY3VtZW50JDMucmVnaXN0ZXJQcm9jZXNzb3IgPSAoZGVwZW5kYW50KSA9PiB7XG4gIFByb2Nlc3NvciQzID0gZGVwZW5kYW50O1xufTtcbnZhciBkb2N1bWVudCQxID0gRG9jdW1lbnQkMztcbkRvY3VtZW50JDMuZGVmYXVsdCA9IERvY3VtZW50JDM7XG5sZXQgcHJpbnRlZCA9IHt9O1xudmFyIHdhcm5PbmNlJDIgPSBmdW5jdGlvbiB3YXJuT25jZShtZXNzYWdlKSB7XG4gIGlmIChwcmludGVkW21lc3NhZ2VdKSByZXR1cm47XG4gIHByaW50ZWRbbWVzc2FnZV0gPSB0cnVlO1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZS53YXJuKSB7XG4gICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICB9XG59O1xubGV0IFdhcm5pbmckMiA9IGNsYXNzIFdhcm5pbmcge1xuICBjb25zdHJ1Y3Rvcih0ZXh0LCBvcHRzID0ge30pIHtcbiAgICB0aGlzLnR5cGUgPSBcIndhcm5pbmdcIjtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIGlmIChvcHRzLm5vZGUgJiYgb3B0cy5ub2RlLnNvdXJjZSkge1xuICAgICAgbGV0IHJhbmdlID0gb3B0cy5ub2RlLnJhbmdlQnkob3B0cyk7XG4gICAgICB0aGlzLmxpbmUgPSByYW5nZS5zdGFydC5saW5lO1xuICAgICAgdGhpcy5jb2x1bW4gPSByYW5nZS5zdGFydC5jb2x1bW47XG4gICAgICB0aGlzLmVuZExpbmUgPSByYW5nZS5lbmQubGluZTtcbiAgICAgIHRoaXMuZW5kQ29sdW1uID0gcmFuZ2UuZW5kLmNvbHVtbjtcbiAgICB9XG4gICAgZm9yIChsZXQgb3B0IGluIG9wdHMpIHRoaXNbb3B0XSA9IG9wdHNbb3B0XTtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICBpZiAodGhpcy5ub2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlLmVycm9yKHRoaXMudGV4dCwge1xuICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgcGx1Z2luOiB0aGlzLnBsdWdpbixcbiAgICAgICAgd29yZDogdGhpcy53b3JkXG4gICAgICB9KS5tZXNzYWdlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wbHVnaW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnBsdWdpbiArIFwiOiBcIiArIHRoaXMudGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGV4dDtcbiAgfVxufTtcbnZhciB3YXJuaW5nID0gV2FybmluZyQyO1xuV2FybmluZyQyLmRlZmF1bHQgPSBXYXJuaW5nJDI7XG5sZXQgV2FybmluZyQxID0gd2FybmluZztcbmxldCBSZXN1bHQkMyA9IGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHByb2Nlc3NvcjIsIHJvb3QyLCBvcHRzKSB7XG4gICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3IyO1xuICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICB0aGlzLnJvb3QgPSByb290MjtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgIHRoaXMuY3NzID0gdm9pZCAwO1xuICAgIHRoaXMubWFwID0gdm9pZCAwO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmNzcztcbiAgfVxuICB3YXJuKHRleHQsIG9wdHMgPSB7fSkge1xuICAgIGlmICghb3B0cy5wbHVnaW4pIHtcbiAgICAgIGlmICh0aGlzLmxhc3RQbHVnaW4gJiYgdGhpcy5sYXN0UGx1Z2luLnBvc3Rjc3NQbHVnaW4pIHtcbiAgICAgICAgb3B0cy5wbHVnaW4gPSB0aGlzLmxhc3RQbHVnaW4ucG9zdGNzc1BsdWdpbjtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHdhcm5pbmcyID0gbmV3IFdhcm5pbmckMSh0ZXh0LCBvcHRzKTtcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2god2FybmluZzIpO1xuICAgIHJldHVybiB3YXJuaW5nMjtcbiAgfVxuICB3YXJuaW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlcy5maWx0ZXIoKGkpID0+IGkudHlwZSA9PT0gXCJ3YXJuaW5nXCIpO1xuICB9XG4gIGdldCBjb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNzcztcbiAgfVxufTtcbnZhciByZXN1bHQgPSBSZXN1bHQkMztcblJlc3VsdCQzLmRlZmF1bHQgPSBSZXN1bHQkMztcbmNvbnN0IFNJTkdMRV9RVU9URSA9IFwiJ1wiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBET1VCTEVfUVVPVEUgPSAnXCInLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBCQUNLU0xBU0ggPSBcIlxcXFxcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgU0xBU0ggPSBcIi9cIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgTkVXTElORSA9IFwiXFxuXCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IFNQQUNFID0gXCIgXCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IEZFRUQgPSBcIlxcZlwiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBUQUIgPSBcIlx0XCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IENSID0gXCJcXHJcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgT1BFTl9TUVVBUkUgPSBcIltcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgQ0xPU0VfU1FVQVJFID0gXCJdXCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IE9QRU5fUEFSRU5USEVTRVMgPSBcIihcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgQ0xPU0VfUEFSRU5USEVTRVMgPSBcIilcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgT1BFTl9DVVJMWSA9IFwie1wiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBDTE9TRV9DVVJMWSA9IFwifVwiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBTRU1JQ09MT04gPSBcIjtcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgQVNURVJJU0sgPSBcIipcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgQ09MT04gPSBcIjpcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgQVQgPSBcIkBcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgUkVfQVRfRU5EID0gL1tcXHRcXG5cXGZcXHIgXCIjJygpLztbXFxcXFxcXXt9XS9nO1xuY29uc3QgUkVfV09SRF9FTkQgPSAvW1xcdFxcblxcZlxcciAhXCIjJygpOjtAW1xcXFxcXF17fV18XFwvKD89XFwqKS9nO1xuY29uc3QgUkVfQkFEX0JSQUNLRVQgPSAvLltcXHJcXG5cIicoL1xcXFxdLztcbmNvbnN0IFJFX0hFWF9FU0NBUEUgPSAvW1xcZGEtZl0vaTtcbnZhciB0b2tlbml6ZSA9IGZ1bmN0aW9uIHRva2VuaXplcihpbnB1dDIsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgY3NzID0gaW5wdXQyLmNzcy52YWx1ZU9mKCk7XG4gIGxldCBpZ25vcmUgPSBvcHRpb25zLmlnbm9yZUVycm9ycztcbiAgbGV0IGNvZGUsIG5leHQsIHF1b3RlLCBjb250ZW50LCBlc2NhcGU7XG4gIGxldCBlc2NhcGVkLCBlc2NhcGVQb3MsIHByZXYsIG4sIGN1cnJlbnRUb2tlbjtcbiAgbGV0IGxlbmd0aCA9IGNzcy5sZW5ndGg7XG4gIGxldCBwb3MgPSAwO1xuICBsZXQgYnVmZmVyID0gW107XG4gIGxldCByZXR1cm5lZCA9IFtdO1xuICBmdW5jdGlvbiBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gcG9zO1xuICB9XG4gIGZ1bmN0aW9uIHVuY2xvc2VkKHdoYXQpIHtcbiAgICB0aHJvdyBpbnB1dDIuZXJyb3IoXCJVbmNsb3NlZCBcIiArIHdoYXQsIHBvcyk7XG4gIH1cbiAgZnVuY3Rpb24gZW5kT2ZGaWxlKCkge1xuICAgIHJldHVybiByZXR1cm5lZC5sZW5ndGggPT09IDAgJiYgcG9zID49IGxlbmd0aDtcbiAgfVxuICBmdW5jdGlvbiBuZXh0VG9rZW4ob3B0cykge1xuICAgIGlmIChyZXR1cm5lZC5sZW5ndGgpIHJldHVybiByZXR1cm5lZC5wb3AoKTtcbiAgICBpZiAocG9zID49IGxlbmd0aCkgcmV0dXJuO1xuICAgIGxldCBpZ25vcmVVbmNsb3NlZCA9IG9wdHMgPyBvcHRzLmlnbm9yZVVuY2xvc2VkIDogZmFsc2U7XG4gICAgY29kZSA9IGNzcy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICBjYXNlIE5FV0xJTkU6XG4gICAgICBjYXNlIFNQQUNFOlxuICAgICAgY2FzZSBUQUI6XG4gICAgICBjYXNlIENSOlxuICAgICAgY2FzZSBGRUVEOiB7XG4gICAgICAgIG5leHQgPSBwb3M7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBuZXh0ICs9IDE7XG4gICAgICAgICAgY29kZSA9IGNzcy5jaGFyQ29kZUF0KG5leHQpO1xuICAgICAgICB9IHdoaWxlIChjb2RlID09PSBTUEFDRSB8fCBjb2RlID09PSBORVdMSU5FIHx8IGNvZGUgPT09IFRBQiB8fCBjb2RlID09PSBDUiB8fCBjb2RlID09PSBGRUVEKTtcbiAgICAgICAgY3VycmVudFRva2VuID0gW1wic3BhY2VcIiwgY3NzLnNsaWNlKHBvcywgbmV4dCldO1xuICAgICAgICBwb3MgPSBuZXh0IC0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE9QRU5fU1FVQVJFOlxuICAgICAgY2FzZSBDTE9TRV9TUVVBUkU6XG4gICAgICBjYXNlIE9QRU5fQ1VSTFk6XG4gICAgICBjYXNlIENMT1NFX0NVUkxZOlxuICAgICAgY2FzZSBDT0xPTjpcbiAgICAgIGNhc2UgU0VNSUNPTE9OOlxuICAgICAgY2FzZSBDTE9TRV9QQVJFTlRIRVNFUzoge1xuICAgICAgICBsZXQgY29udHJvbENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgICAgICBjdXJyZW50VG9rZW4gPSBbY29udHJvbENoYXIsIGNvbnRyb2xDaGFyLCBwb3NdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgT1BFTl9QQVJFTlRIRVNFUzoge1xuICAgICAgICBwcmV2ID0gYnVmZmVyLmxlbmd0aCA/IGJ1ZmZlci5wb3AoKVsxXSA6IFwiXCI7XG4gICAgICAgIG4gPSBjc3MuY2hhckNvZGVBdChwb3MgKyAxKTtcbiAgICAgICAgaWYgKHByZXYgPT09IFwidXJsXCIgJiYgbiAhPT0gU0lOR0xFX1FVT1RFICYmIG4gIT09IERPVUJMRV9RVU9URSAmJiBuICE9PSBTUEFDRSAmJiBuICE9PSBORVdMSU5FICYmIG4gIT09IFRBQiAmJiBuICE9PSBGRUVEICYmIG4gIT09IENSKSB7XG4gICAgICAgICAgbmV4dCA9IHBvcztcbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBlc2NhcGVkID0gZmFsc2U7XG4gICAgICAgICAgICBuZXh0ID0gY3NzLmluZGV4T2YoXCIpXCIsIG5leHQgKyAxKTtcbiAgICAgICAgICAgIGlmIChuZXh0ID09PSAtMSkge1xuICAgICAgICAgICAgICBpZiAoaWdub3JlIHx8IGlnbm9yZVVuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgbmV4dCA9IHBvcztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bmNsb3NlZChcImJyYWNrZXRcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVzY2FwZVBvcyA9IG5leHQ7XG4gICAgICAgICAgICB3aGlsZSAoY3NzLmNoYXJDb2RlQXQoZXNjYXBlUG9zIC0gMSkgPT09IEJBQ0tTTEFTSCkge1xuICAgICAgICAgICAgICBlc2NhcGVQb3MgLT0gMTtcbiAgICAgICAgICAgICAgZXNjYXBlZCA9ICFlc2NhcGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gd2hpbGUgKGVzY2FwZWQpO1xuICAgICAgICAgIGN1cnJlbnRUb2tlbiA9IFtcImJyYWNrZXRzXCIsIGNzcy5zbGljZShwb3MsIG5leHQgKyAxKSwgcG9zLCBuZXh0XTtcbiAgICAgICAgICBwb3MgPSBuZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHQgPSBjc3MuaW5kZXhPZihcIilcIiwgcG9zICsgMSk7XG4gICAgICAgICAgY29udGVudCA9IGNzcy5zbGljZShwb3MsIG5leHQgKyAxKTtcbiAgICAgICAgICBpZiAobmV4dCA9PT0gLTEgfHwgUkVfQkFEX0JSQUNLRVQudGVzdChjb250ZW50KSkge1xuICAgICAgICAgICAgY3VycmVudFRva2VuID0gW1wiKFwiLCBcIihcIiwgcG9zXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFRva2VuID0gW1wiYnJhY2tldHNcIiwgY29udGVudCwgcG9zLCBuZXh0XTtcbiAgICAgICAgICAgIHBvcyA9IG5leHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTSU5HTEVfUVVPVEU6XG4gICAgICBjYXNlIERPVUJMRV9RVU9URToge1xuICAgICAgICBxdW90ZSA9IGNvZGUgPT09IFNJTkdMRV9RVU9URSA/IFwiJ1wiIDogJ1wiJztcbiAgICAgICAgbmV4dCA9IHBvcztcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgICBuZXh0ID0gY3NzLmluZGV4T2YocXVvdGUsIG5leHQgKyAxKTtcbiAgICAgICAgICBpZiAobmV4dCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGlmIChpZ25vcmUgfHwgaWdub3JlVW5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgbmV4dCA9IHBvcyArIDE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdW5jbG9zZWQoXCJzdHJpbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVzY2FwZVBvcyA9IG5leHQ7XG4gICAgICAgICAgd2hpbGUgKGNzcy5jaGFyQ29kZUF0KGVzY2FwZVBvcyAtIDEpID09PSBCQUNLU0xBU0gpIHtcbiAgICAgICAgICAgIGVzY2FwZVBvcyAtPSAxO1xuICAgICAgICAgICAgZXNjYXBlZCA9ICFlc2NhcGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoZXNjYXBlZCk7XG4gICAgICAgIGN1cnJlbnRUb2tlbiA9IFtcInN0cmluZ1wiLCBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSksIHBvcywgbmV4dF07XG4gICAgICAgIHBvcyA9IG5leHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBBVDoge1xuICAgICAgICBSRV9BVF9FTkQubGFzdEluZGV4ID0gcG9zICsgMTtcbiAgICAgICAgUkVfQVRfRU5ELnRlc3QoY3NzKTtcbiAgICAgICAgaWYgKFJFX0FUX0VORC5sYXN0SW5kZXggPT09IDApIHtcbiAgICAgICAgICBuZXh0ID0gY3NzLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCA9IFJFX0FUX0VORC5sYXN0SW5kZXggLSAyO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRUb2tlbiA9IFtcImF0LXdvcmRcIiwgY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpLCBwb3MsIG5leHRdO1xuICAgICAgICBwb3MgPSBuZXh0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgQkFDS1NMQVNIOiB7XG4gICAgICAgIG5leHQgPSBwb3M7XG4gICAgICAgIGVzY2FwZSA9IHRydWU7XG4gICAgICAgIHdoaWxlIChjc3MuY2hhckNvZGVBdChuZXh0ICsgMSkgPT09IEJBQ0tTTEFTSCkge1xuICAgICAgICAgIG5leHQgKz0gMTtcbiAgICAgICAgICBlc2NhcGUgPSAhZXNjYXBlO1xuICAgICAgICB9XG4gICAgICAgIGNvZGUgPSBjc3MuY2hhckNvZGVBdChuZXh0ICsgMSk7XG4gICAgICAgIGlmIChlc2NhcGUgJiYgY29kZSAhPT0gU0xBU0ggJiYgY29kZSAhPT0gU1BBQ0UgJiYgY29kZSAhPT0gTkVXTElORSAmJiBjb2RlICE9PSBUQUIgJiYgY29kZSAhPT0gQ1IgJiYgY29kZSAhPT0gRkVFRCkge1xuICAgICAgICAgIG5leHQgKz0gMTtcbiAgICAgICAgICBpZiAoUkVfSEVYX0VTQ0FQRS50ZXN0KGNzcy5jaGFyQXQobmV4dCkpKSB7XG4gICAgICAgICAgICB3aGlsZSAoUkVfSEVYX0VTQ0FQRS50ZXN0KGNzcy5jaGFyQXQobmV4dCArIDEpKSkge1xuICAgICAgICAgICAgICBuZXh0ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3NzLmNoYXJDb2RlQXQobmV4dCArIDEpID09PSBTUEFDRSkge1xuICAgICAgICAgICAgICBuZXh0ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRUb2tlbiA9IFtcIndvcmRcIiwgY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpLCBwb3MsIG5leHRdO1xuICAgICAgICBwb3MgPSBuZXh0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgaWYgKGNvZGUgPT09IFNMQVNIICYmIGNzcy5jaGFyQ29kZUF0KHBvcyArIDEpID09PSBBU1RFUklTSykge1xuICAgICAgICAgIG5leHQgPSBjc3MuaW5kZXhPZihcIiovXCIsIHBvcyArIDIpICsgMTtcbiAgICAgICAgICBpZiAobmV4dCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGlnbm9yZSB8fCBpZ25vcmVVbmNsb3NlZCkge1xuICAgICAgICAgICAgICBuZXh0ID0gY3NzLmxlbmd0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHVuY2xvc2VkKFwiY29tbWVudFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudFRva2VuID0gW1wiY29tbWVudFwiLCBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSksIHBvcywgbmV4dF07XG4gICAgICAgICAgcG9zID0gbmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBSRV9XT1JEX0VORC5sYXN0SW5kZXggPSBwb3MgKyAxO1xuICAgICAgICAgIFJFX1dPUkRfRU5ELnRlc3QoY3NzKTtcbiAgICAgICAgICBpZiAoUkVfV09SRF9FTkQubGFzdEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBuZXh0ID0gY3NzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHQgPSBSRV9XT1JEX0VORC5sYXN0SW5kZXggLSAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJyZW50VG9rZW4gPSBbXCJ3b3JkXCIsIGNzcy5zbGljZShwb3MsIG5leHQgKyAxKSwgcG9zLCBuZXh0XTtcbiAgICAgICAgICBidWZmZXIucHVzaChjdXJyZW50VG9rZW4pO1xuICAgICAgICAgIHBvcyA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHBvcysrO1xuICAgIHJldHVybiBjdXJyZW50VG9rZW47XG4gIH1cbiAgZnVuY3Rpb24gYmFjayh0b2tlbikge1xuICAgIHJldHVybmVkLnB1c2godG9rZW4pO1xuICB9XG4gIHJldHVybiB7XG4gICAgYmFjayxcbiAgICBlbmRPZkZpbGUsXG4gICAgbmV4dFRva2VuLFxuICAgIHBvc2l0aW9uXG4gIH07XG59O1xubGV0IENvbnRhaW5lciQ1ID0gY29udGFpbmVyO1xubGV0IEF0UnVsZSQzID0gY2xhc3MgQXRSdWxlIGV4dGVuZHMgQ29udGFpbmVyJDUge1xuICBjb25zdHJ1Y3RvcihkZWZhdWx0cykge1xuICAgIHN1cGVyKGRlZmF1bHRzKTtcbiAgICB0aGlzLnR5cGUgPSBcImF0cnVsZVwiO1xuICB9XG4gIGFwcGVuZCguLi5jaGlsZHJlbikge1xuICAgIGlmICghdGhpcy5wcm94eU9mLm5vZGVzKSB0aGlzLm5vZGVzID0gW107XG4gICAgcmV0dXJuIHN1cGVyLmFwcGVuZCguLi5jaGlsZHJlbik7XG4gIH1cbiAgcHJlcGVuZCguLi5jaGlsZHJlbikge1xuICAgIGlmICghdGhpcy5wcm94eU9mLm5vZGVzKSB0aGlzLm5vZGVzID0gW107XG4gICAgcmV0dXJuIHN1cGVyLnByZXBlbmQoLi4uY2hpbGRyZW4pO1xuICB9XG59O1xudmFyIGF0UnVsZSA9IEF0UnVsZSQzO1xuQXRSdWxlJDMuZGVmYXVsdCA9IEF0UnVsZSQzO1xuQ29udGFpbmVyJDUucmVnaXN0ZXJBdFJ1bGUoQXRSdWxlJDMpO1xubGV0IENvbnRhaW5lciQ0ID0gY29udGFpbmVyO1xubGV0IExhenlSZXN1bHQkMywgUHJvY2Vzc29yJDI7XG5sZXQgUm9vdCQ1ID0gY2xhc3MgUm9vdCBleHRlbmRzIENvbnRhaW5lciQ0IHtcbiAgY29uc3RydWN0b3IoZGVmYXVsdHMpIHtcbiAgICBzdXBlcihkZWZhdWx0cyk7XG4gICAgdGhpcy50eXBlID0gXCJyb290XCI7XG4gICAgaWYgKCF0aGlzLm5vZGVzKSB0aGlzLm5vZGVzID0gW107XG4gIH1cbiAgbm9ybWFsaXplKGNoaWxkLCBzYW1wbGUsIHR5cGUpIHtcbiAgICBsZXQgbm9kZXMgPSBzdXBlci5ub3JtYWxpemUoY2hpbGQpO1xuICAgIGlmIChzYW1wbGUpIHtcbiAgICAgIGlmICh0eXBlID09PSBcInByZXBlbmRcIikge1xuICAgICAgICBpZiAodGhpcy5ub2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgc2FtcGxlLnJhd3MuYmVmb3JlID0gdGhpcy5ub2Rlc1sxXS5yYXdzLmJlZm9yZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgc2FtcGxlLnJhd3MuYmVmb3JlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZmlyc3QgIT09IHNhbXBsZSkge1xuICAgICAgICBmb3IgKGxldCBub2RlMiBvZiBub2Rlcykge1xuICAgICAgICAgIG5vZGUyLnJhd3MuYmVmb3JlID0gc2FtcGxlLnJhd3MuYmVmb3JlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICByZW1vdmVDaGlsZChjaGlsZCwgaWdub3JlKSB7XG4gICAgbGV0IGluZGV4MiA9IHRoaXMuaW5kZXgoY2hpbGQpO1xuICAgIGlmICghaWdub3JlICYmIGluZGV4MiA9PT0gMCAmJiB0aGlzLm5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMubm9kZXNbMV0ucmF3cy5iZWZvcmUgPSB0aGlzLm5vZGVzW2luZGV4Ml0ucmF3cy5iZWZvcmU7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5yZW1vdmVDaGlsZChjaGlsZCk7XG4gIH1cbiAgdG9SZXN1bHQob3B0cyA9IHt9KSB7XG4gICAgbGV0IGxhenkgPSBuZXcgTGF6eVJlc3VsdCQzKG5ldyBQcm9jZXNzb3IkMigpLCB0aGlzLCBvcHRzKTtcbiAgICByZXR1cm4gbGF6eS5zdHJpbmdpZnkoKTtcbiAgfVxufTtcblJvb3QkNS5yZWdpc3RlckxhenlSZXN1bHQgPSAoZGVwZW5kYW50KSA9PiB7XG4gIExhenlSZXN1bHQkMyA9IGRlcGVuZGFudDtcbn07XG5Sb290JDUucmVnaXN0ZXJQcm9jZXNzb3IgPSAoZGVwZW5kYW50KSA9PiB7XG4gIFByb2Nlc3NvciQyID0gZGVwZW5kYW50O1xufTtcbnZhciByb290ID0gUm9vdCQ1O1xuUm9vdCQ1LmRlZmF1bHQgPSBSb290JDU7XG5Db250YWluZXIkNC5yZWdpc3RlclJvb3QoUm9vdCQ1KTtcbmxldCBsaXN0JDIgPSB7XG4gIGNvbW1hKHN0cmluZykge1xuICAgIHJldHVybiBsaXN0JDIuc3BsaXQoc3RyaW5nLCBbXCIsXCJdLCB0cnVlKTtcbiAgfSxcbiAgc3BhY2Uoc3RyaW5nKSB7XG4gICAgbGV0IHNwYWNlcyA9IFtcIiBcIiwgXCJcXG5cIiwgXCJcdFwiXTtcbiAgICByZXR1cm4gbGlzdCQyLnNwbGl0KHN0cmluZywgc3BhY2VzKTtcbiAgfSxcbiAgc3BsaXQoc3RyaW5nLCBzZXBhcmF0b3JzLCBsYXN0KSB7XG4gICAgbGV0IGFycmF5ID0gW107XG4gICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgIGxldCBzcGxpdCA9IGZhbHNlO1xuICAgIGxldCBmdW5jID0gMDtcbiAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgIGxldCBwcmV2UXVvdGUgPSBcIlwiO1xuICAgIGxldCBlc2NhcGUgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBsZXR0ZXIgb2Ygc3RyaW5nKSB7XG4gICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgIGVzY2FwZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgIGVzY2FwZSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGluUXVvdGUpIHtcbiAgICAgICAgaWYgKGxldHRlciA9PT0gcHJldlF1b3RlKSB7XG4gICAgICAgICAgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJ1wiJyB8fCBsZXR0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIGluUXVvdGUgPSB0cnVlO1xuICAgICAgICBwcmV2UXVvdGUgPSBsZXR0ZXI7XG4gICAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gXCIoXCIpIHtcbiAgICAgICAgZnVuYyArPSAxO1xuICAgICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09IFwiKVwiKSB7XG4gICAgICAgIGlmIChmdW5jID4gMCkgZnVuYyAtPSAxO1xuICAgICAgfSBlbHNlIGlmIChmdW5jID09PSAwKSB7XG4gICAgICAgIGlmIChzZXBhcmF0b3JzLmluY2x1ZGVzKGxldHRlcikpIHNwbGl0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzcGxpdCkge1xuICAgICAgICBpZiAoY3VycmVudCAhPT0gXCJcIikgYXJyYXkucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgIGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICBzcGxpdCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudCArPSBsZXR0ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsYXN0IHx8IGN1cnJlbnQgIT09IFwiXCIpIGFycmF5LnB1c2goY3VycmVudC50cmltKCkpO1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxufTtcbnZhciBsaXN0XzEgPSBsaXN0JDI7XG5saXN0JDIuZGVmYXVsdCA9IGxpc3QkMjtcbmxldCBDb250YWluZXIkMyA9IGNvbnRhaW5lcjtcbmxldCBsaXN0JDEgPSBsaXN0XzE7XG5sZXQgUnVsZSQzID0gY2xhc3MgUnVsZSBleHRlbmRzIENvbnRhaW5lciQzIHtcbiAgY29uc3RydWN0b3IoZGVmYXVsdHMpIHtcbiAgICBzdXBlcihkZWZhdWx0cyk7XG4gICAgdGhpcy50eXBlID0gXCJydWxlXCI7XG4gICAgaWYgKCF0aGlzLm5vZGVzKSB0aGlzLm5vZGVzID0gW107XG4gIH1cbiAgZ2V0IHNlbGVjdG9ycygpIHtcbiAgICByZXR1cm4gbGlzdCQxLmNvbW1hKHRoaXMuc2VsZWN0b3IpO1xuICB9XG4gIHNldCBzZWxlY3RvcnModmFsdWVzKSB7XG4gICAgbGV0IG1hdGNoID0gdGhpcy5zZWxlY3RvciA/IHRoaXMuc2VsZWN0b3IubWF0Y2goLyxcXHMqLykgOiBudWxsO1xuICAgIGxldCBzZXAyID0gbWF0Y2ggPyBtYXRjaFswXSA6IFwiLFwiICsgdGhpcy5yYXcoXCJiZXR3ZWVuXCIsIFwiYmVmb3JlT3BlblwiKTtcbiAgICB0aGlzLnNlbGVjdG9yID0gdmFsdWVzLmpvaW4oc2VwMik7XG4gIH1cbn07XG52YXIgcnVsZSA9IFJ1bGUkMztcblJ1bGUkMy5kZWZhdWx0ID0gUnVsZSQzO1xuQ29udGFpbmVyJDMucmVnaXN0ZXJSdWxlKFJ1bGUkMyk7XG5sZXQgRGVjbGFyYXRpb24kMiA9IGRlY2xhcmF0aW9uO1xubGV0IHRva2VuaXplcjIgPSB0b2tlbml6ZTtcbmxldCBDb21tZW50JDIgPSBjb21tZW50O1xubGV0IEF0UnVsZSQyID0gYXRSdWxlO1xubGV0IFJvb3QkNCA9IHJvb3Q7XG5sZXQgUnVsZSQyID0gcnVsZTtcbmNvbnN0IFNBRkVfQ09NTUVOVF9ORUlHSEJPUiA9IHtcbiAgZW1wdHk6IHRydWUsXG4gIHNwYWNlOiB0cnVlXG59O1xuZnVuY3Rpb24gZmluZExhc3RXaXRoUG9zaXRpb24odG9rZW5zKSB7XG4gIGZvciAobGV0IGkgPSB0b2tlbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBsZXQgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgbGV0IHBvcyA9IHRva2VuWzNdIHx8IHRva2VuWzJdO1xuICAgIGlmIChwb3MpIHJldHVybiBwb3M7XG4gIH1cbn1cbmxldCBQYXJzZXIkMSA9IGNsYXNzIFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKGlucHV0Mikge1xuICAgIHRoaXMuaW5wdXQgPSBpbnB1dDI7XG4gICAgdGhpcy5yb290ID0gbmV3IFJvb3QkNCgpO1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMucm9vdDtcbiAgICB0aGlzLnNwYWNlcyA9IFwiXCI7XG4gICAgdGhpcy5zZW1pY29sb24gPSBmYWxzZTtcbiAgICB0aGlzLmNyZWF0ZVRva2VuaXplcigpO1xuICAgIHRoaXMucm9vdC5zb3VyY2UgPSB7IGlucHV0OiBpbnB1dDIsIHN0YXJ0OiB7IGNvbHVtbjogMSwgbGluZTogMSwgb2Zmc2V0OiAwIH0gfTtcbiAgfVxuICBhdHJ1bGUodG9rZW4pIHtcbiAgICBsZXQgbm9kZTIgPSBuZXcgQXRSdWxlJDIoKTtcbiAgICBub2RlMi5uYW1lID0gdG9rZW5bMV0uc2xpY2UoMSk7XG4gICAgaWYgKG5vZGUyLm5hbWUgPT09IFwiXCIpIHtcbiAgICAgIHRoaXMudW5uYW1lZEF0cnVsZShub2RlMiwgdG9rZW4pO1xuICAgIH1cbiAgICB0aGlzLmluaXQobm9kZTIsIHRva2VuWzJdKTtcbiAgICBsZXQgdHlwZTtcbiAgICBsZXQgcHJldjtcbiAgICBsZXQgc2hpZnQ7XG4gICAgbGV0IGxhc3QgPSBmYWxzZTtcbiAgICBsZXQgb3BlbiA9IGZhbHNlO1xuICAgIGxldCBwYXJhbXMgPSBbXTtcbiAgICBsZXQgYnJhY2tldHMgPSBbXTtcbiAgICB3aGlsZSAoIXRoaXMudG9rZW5pemVyLmVuZE9mRmlsZSgpKSB7XG4gICAgICB0b2tlbiA9IHRoaXMudG9rZW5pemVyLm5leHRUb2tlbigpO1xuICAgICAgdHlwZSA9IHRva2VuWzBdO1xuICAgICAgaWYgKHR5cGUgPT09IFwiKFwiIHx8IHR5cGUgPT09IFwiW1wiKSB7XG4gICAgICAgIGJyYWNrZXRzLnB1c2godHlwZSA9PT0gXCIoXCIgPyBcIilcIiA6IFwiXVwiKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ7XCIgJiYgYnJhY2tldHMubGVuZ3RoID4gMCkge1xuICAgICAgICBicmFja2V0cy5wdXNoKFwifVwiKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gYnJhY2tldHNbYnJhY2tldHMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgYnJhY2tldHMucG9wKCk7XG4gICAgICB9XG4gICAgICBpZiAoYnJhY2tldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBcIjtcIikge1xuICAgICAgICAgIG5vZGUyLnNvdXJjZS5lbmQgPSB0aGlzLmdldFBvc2l0aW9uKHRva2VuWzJdKTtcbiAgICAgICAgICBub2RlMi5zb3VyY2UuZW5kLm9mZnNldCsrO1xuICAgICAgICAgIHRoaXMuc2VtaWNvbG9uID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIntcIikge1xuICAgICAgICAgIG9wZW4gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwifVwiKSB7XG4gICAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzaGlmdCA9IHBhcmFtcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgcHJldiA9IHBhcmFtc1tzaGlmdF07XG4gICAgICAgICAgICB3aGlsZSAocHJldiAmJiBwcmV2WzBdID09PSBcInNwYWNlXCIpIHtcbiAgICAgICAgICAgICAgcHJldiA9IHBhcmFtc1stLXNoaWZ0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICAgIG5vZGUyLnNvdXJjZS5lbmQgPSB0aGlzLmdldFBvc2l0aW9uKHByZXZbM10gfHwgcHJldlsyXSk7XG4gICAgICAgICAgICAgIG5vZGUyLnNvdXJjZS5lbmQub2Zmc2V0Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZW5kKHRva2VuKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhbXMucHVzaCh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcy5wdXNoKHRva2VuKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRva2VuaXplci5lbmRPZkZpbGUoKSkge1xuICAgICAgICBsYXN0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIG5vZGUyLnJhd3MuYmV0d2VlbiA9IHRoaXMuc3BhY2VzQW5kQ29tbWVudHNGcm9tRW5kKHBhcmFtcyk7XG4gICAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICAgIG5vZGUyLnJhd3MuYWZ0ZXJOYW1lID0gdGhpcy5zcGFjZXNBbmRDb21tZW50c0Zyb21TdGFydChwYXJhbXMpO1xuICAgICAgdGhpcy5yYXcobm9kZTIsIFwicGFyYW1zXCIsIHBhcmFtcyk7XG4gICAgICBpZiAobGFzdCkge1xuICAgICAgICB0b2tlbiA9IHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV07XG4gICAgICAgIG5vZGUyLnNvdXJjZS5lbmQgPSB0aGlzLmdldFBvc2l0aW9uKHRva2VuWzNdIHx8IHRva2VuWzJdKTtcbiAgICAgICAgbm9kZTIuc291cmNlLmVuZC5vZmZzZXQrKztcbiAgICAgICAgdGhpcy5zcGFjZXMgPSBub2RlMi5yYXdzLmJldHdlZW47XG4gICAgICAgIG5vZGUyLnJhd3MuYmV0d2VlbiA9IFwiXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUyLnJhd3MuYWZ0ZXJOYW1lID0gXCJcIjtcbiAgICAgIG5vZGUyLnBhcmFtcyA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvcGVuKSB7XG4gICAgICBub2RlMi5ub2RlcyA9IFtdO1xuICAgICAgdGhpcy5jdXJyZW50ID0gbm9kZTI7XG4gICAgfVxuICB9XG4gIGNoZWNrTWlzc2VkU2VtaWNvbG9uKHRva2Vucykge1xuICAgIGxldCBjb2xvbiA9IHRoaXMuY29sb24odG9rZW5zKTtcbiAgICBpZiAoY29sb24gPT09IGZhbHNlKSByZXR1cm47XG4gICAgbGV0IGZvdW5kZWQgPSAwO1xuICAgIGxldCB0b2tlbjtcbiAgICBmb3IgKGxldCBqID0gY29sb24gLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbal07XG4gICAgICBpZiAodG9rZW5bMF0gIT09IFwic3BhY2VcIikge1xuICAgICAgICBmb3VuZGVkICs9IDE7XG4gICAgICAgIGlmIChmb3VuZGVkID09PSAyKSBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcbiAgICAgIFwiTWlzc2VkIHNlbWljb2xvblwiLFxuICAgICAgdG9rZW5bMF0gPT09IFwid29yZFwiID8gdG9rZW5bM10gKyAxIDogdG9rZW5bMl1cbiAgICApO1xuICB9XG4gIGNvbG9uKHRva2Vucykge1xuICAgIGxldCBicmFja2V0cyA9IDA7XG4gICAgbGV0IHRva2VuLCB0eXBlLCBwcmV2O1xuICAgIGZvciAobGV0IFtpLCBlbGVtZW50XSBvZiB0b2tlbnMuZW50cmllcygpKSB7XG4gICAgICB0b2tlbiA9IGVsZW1lbnQ7XG4gICAgICB0eXBlID0gdG9rZW5bMF07XG4gICAgICBpZiAodHlwZSA9PT0gXCIoXCIpIHtcbiAgICAgICAgYnJhY2tldHMgKz0gMTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSBcIilcIikge1xuICAgICAgICBicmFja2V0cyAtPSAxO1xuICAgICAgfVxuICAgICAgaWYgKGJyYWNrZXRzID09PSAwICYmIHR5cGUgPT09IFwiOlwiKSB7XG4gICAgICAgIGlmICghcHJldikge1xuICAgICAgICAgIHRoaXMuZG91YmxlQ29sb24odG9rZW4pO1xuICAgICAgICB9IGVsc2UgaWYgKHByZXZbMF0gPT09IFwid29yZFwiICYmIHByZXZbMV0gPT09IFwicHJvZ2lkXCIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHJldiA9IHRva2VuO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29tbWVudCh0b2tlbikge1xuICAgIGxldCBub2RlMiA9IG5ldyBDb21tZW50JDIoKTtcbiAgICB0aGlzLmluaXQobm9kZTIsIHRva2VuWzJdKTtcbiAgICBub2RlMi5zb3VyY2UuZW5kID0gdGhpcy5nZXRQb3NpdGlvbih0b2tlblszXSB8fCB0b2tlblsyXSk7XG4gICAgbm9kZTIuc291cmNlLmVuZC5vZmZzZXQrKztcbiAgICBsZXQgdGV4dCA9IHRva2VuWzFdLnNsaWNlKDIsIC0yKTtcbiAgICBpZiAoL15cXHMqJC8udGVzdCh0ZXh0KSkge1xuICAgICAgbm9kZTIudGV4dCA9IFwiXCI7XG4gICAgICBub2RlMi5yYXdzLmxlZnQgPSB0ZXh0O1xuICAgICAgbm9kZTIucmF3cy5yaWdodCA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBtYXRjaCA9IHRleHQubWF0Y2goL14oXFxzKikoW15dKlxcUykoXFxzKikkLyk7XG4gICAgICBub2RlMi50ZXh0ID0gbWF0Y2hbMl07XG4gICAgICBub2RlMi5yYXdzLmxlZnQgPSBtYXRjaFsxXTtcbiAgICAgIG5vZGUyLnJhd3MucmlnaHQgPSBtYXRjaFszXTtcbiAgICB9XG4gIH1cbiAgY3JlYXRlVG9rZW5pemVyKCkge1xuICAgIHRoaXMudG9rZW5pemVyID0gdG9rZW5pemVyMih0aGlzLmlucHV0KTtcbiAgfVxuICBkZWNsKHRva2VucywgY3VzdG9tUHJvcGVydHkpIHtcbiAgICBsZXQgbm9kZTIgPSBuZXcgRGVjbGFyYXRpb24kMigpO1xuICAgIHRoaXMuaW5pdChub2RlMiwgdG9rZW5zWzBdWzJdKTtcbiAgICBsZXQgbGFzdCA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgaWYgKGxhc3RbMF0gPT09IFwiO1wiKSB7XG4gICAgICB0aGlzLnNlbWljb2xvbiA9IHRydWU7XG4gICAgICB0b2tlbnMucG9wKCk7XG4gICAgfVxuICAgIG5vZGUyLnNvdXJjZS5lbmQgPSB0aGlzLmdldFBvc2l0aW9uKFxuICAgICAgbGFzdFszXSB8fCBsYXN0WzJdIHx8IGZpbmRMYXN0V2l0aFBvc2l0aW9uKHRva2VucylcbiAgICApO1xuICAgIG5vZGUyLnNvdXJjZS5lbmQub2Zmc2V0Kys7XG4gICAgd2hpbGUgKHRva2Vuc1swXVswXSAhPT0gXCJ3b3JkXCIpIHtcbiAgICAgIGlmICh0b2tlbnMubGVuZ3RoID09PSAxKSB0aGlzLnVua25vd25Xb3JkKHRva2Vucyk7XG4gICAgICBub2RlMi5yYXdzLmJlZm9yZSArPSB0b2tlbnMuc2hpZnQoKVsxXTtcbiAgICB9XG4gICAgbm9kZTIuc291cmNlLnN0YXJ0ID0gdGhpcy5nZXRQb3NpdGlvbih0b2tlbnNbMF1bMl0pO1xuICAgIG5vZGUyLnByb3AgPSBcIlwiO1xuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICBsZXQgdHlwZSA9IHRva2Vuc1swXVswXTtcbiAgICAgIGlmICh0eXBlID09PSBcIjpcIiB8fCB0eXBlID09PSBcInNwYWNlXCIgfHwgdHlwZSA9PT0gXCJjb21tZW50XCIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBub2RlMi5wcm9wICs9IHRva2Vucy5zaGlmdCgpWzFdO1xuICAgIH1cbiAgICBub2RlMi5yYXdzLmJldHdlZW4gPSBcIlwiO1xuICAgIGxldCB0b2tlbjtcbiAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xuICAgICAgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKTtcbiAgICAgIGlmICh0b2tlblswXSA9PT0gXCI6XCIpIHtcbiAgICAgICAgbm9kZTIucmF3cy5iZXR3ZWVuICs9IHRva2VuWzFdO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0b2tlblswXSA9PT0gXCJ3b3JkXCIgJiYgL1xcdy8udGVzdCh0b2tlblsxXSkpIHtcbiAgICAgICAgICB0aGlzLnVua25vd25Xb3JkKFt0b2tlbl0pO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUyLnJhd3MuYmV0d2VlbiArPSB0b2tlblsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5vZGUyLnByb3BbMF0gPT09IFwiX1wiIHx8IG5vZGUyLnByb3BbMF0gPT09IFwiKlwiKSB7XG4gICAgICBub2RlMi5yYXdzLmJlZm9yZSArPSBub2RlMi5wcm9wWzBdO1xuICAgICAgbm9kZTIucHJvcCA9IG5vZGUyLnByb3Auc2xpY2UoMSk7XG4gICAgfVxuICAgIGxldCBmaXJzdFNwYWNlcyA9IFtdO1xuICAgIGxldCBuZXh0O1xuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICBuZXh0ID0gdG9rZW5zWzBdWzBdO1xuICAgICAgaWYgKG5leHQgIT09IFwic3BhY2VcIiAmJiBuZXh0ICE9PSBcImNvbW1lbnRcIikgYnJlYWs7XG4gICAgICBmaXJzdFNwYWNlcy5wdXNoKHRva2Vucy5zaGlmdCgpKTtcbiAgICB9XG4gICAgdGhpcy5wcmVjaGVja01pc3NlZFNlbWljb2xvbih0b2tlbnMpO1xuICAgIGZvciAobGV0IGkgPSB0b2tlbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgaWYgKHRva2VuWzFdLnRvTG93ZXJDYXNlKCkgPT09IFwiIWltcG9ydGFudFwiKSB7XG4gICAgICAgIG5vZGUyLmltcG9ydGFudCA9IHRydWU7XG4gICAgICAgIGxldCBzdHJpbmcgPSB0aGlzLnN0cmluZ0Zyb20odG9rZW5zLCBpKTtcbiAgICAgICAgc3RyaW5nID0gdGhpcy5zcGFjZXNGcm9tRW5kKHRva2VucykgKyBzdHJpbmc7XG4gICAgICAgIGlmIChzdHJpbmcgIT09IFwiICFpbXBvcnRhbnRcIikgbm9kZTIucmF3cy5pbXBvcnRhbnQgPSBzdHJpbmc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICh0b2tlblsxXS50b0xvd2VyQ2FzZSgpID09PSBcImltcG9ydGFudFwiKSB7XG4gICAgICAgIGxldCBjYWNoZSA9IHRva2Vucy5zbGljZSgwKTtcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGogPSBpOyBqID4gMDsgai0tKSB7XG4gICAgICAgICAgbGV0IHR5cGUgPSBjYWNoZVtqXVswXTtcbiAgICAgICAgICBpZiAoc3RyLnRyaW0oKS5pbmRleE9mKFwiIVwiKSA9PT0gMCAmJiB0eXBlICE9PSBcInNwYWNlXCIpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdHIgPSBjYWNoZS5wb3AoKVsxXSArIHN0cjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RyLnRyaW0oKS5pbmRleE9mKFwiIVwiKSA9PT0gMCkge1xuICAgICAgICAgIG5vZGUyLmltcG9ydGFudCA9IHRydWU7XG4gICAgICAgICAgbm9kZTIucmF3cy5pbXBvcnRhbnQgPSBzdHI7XG4gICAgICAgICAgdG9rZW5zID0gY2FjaGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0b2tlblswXSAhPT0gXCJzcGFjZVwiICYmIHRva2VuWzBdICE9PSBcImNvbW1lbnRcIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGhhc1dvcmQgPSB0b2tlbnMuc29tZSgoaSkgPT4gaVswXSAhPT0gXCJzcGFjZVwiICYmIGlbMF0gIT09IFwiY29tbWVudFwiKTtcbiAgICBpZiAoaGFzV29yZCkge1xuICAgICAgbm9kZTIucmF3cy5iZXR3ZWVuICs9IGZpcnN0U3BhY2VzLm1hcCgoaSkgPT4gaVsxXSkuam9pbihcIlwiKTtcbiAgICAgIGZpcnN0U3BhY2VzID0gW107XG4gICAgfVxuICAgIHRoaXMucmF3KG5vZGUyLCBcInZhbHVlXCIsIGZpcnN0U3BhY2VzLmNvbmNhdCh0b2tlbnMpLCBjdXN0b21Qcm9wZXJ0eSk7XG4gICAgaWYgKG5vZGUyLnZhbHVlLmluY2x1ZGVzKFwiOlwiKSAmJiAhY3VzdG9tUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuY2hlY2tNaXNzZWRTZW1pY29sb24odG9rZW5zKTtcbiAgICB9XG4gIH1cbiAgZG91YmxlQ29sb24odG9rZW4pIHtcbiAgICB0aHJvdyB0aGlzLmlucHV0LmVycm9yKFxuICAgICAgXCJEb3VibGUgY29sb25cIixcbiAgICAgIHsgb2Zmc2V0OiB0b2tlblsyXSB9LFxuICAgICAgeyBvZmZzZXQ6IHRva2VuWzJdICsgdG9rZW5bMV0ubGVuZ3RoIH1cbiAgICApO1xuICB9XG4gIGVtcHR5UnVsZSh0b2tlbikge1xuICAgIGxldCBub2RlMiA9IG5ldyBSdWxlJDIoKTtcbiAgICB0aGlzLmluaXQobm9kZTIsIHRva2VuWzJdKTtcbiAgICBub2RlMi5zZWxlY3RvciA9IFwiXCI7XG4gICAgbm9kZTIucmF3cy5iZXR3ZWVuID0gXCJcIjtcbiAgICB0aGlzLmN1cnJlbnQgPSBub2RlMjtcbiAgfVxuICBlbmQodG9rZW4pIHtcbiAgICBpZiAodGhpcy5jdXJyZW50Lm5vZGVzICYmIHRoaXMuY3VycmVudC5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3VycmVudC5yYXdzLnNlbWljb2xvbiA9IHRoaXMuc2VtaWNvbG9uO1xuICAgIH1cbiAgICB0aGlzLnNlbWljb2xvbiA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudC5yYXdzLmFmdGVyID0gKHRoaXMuY3VycmVudC5yYXdzLmFmdGVyIHx8IFwiXCIpICsgdGhpcy5zcGFjZXM7XG4gICAgdGhpcy5zcGFjZXMgPSBcIlwiO1xuICAgIGlmICh0aGlzLmN1cnJlbnQucGFyZW50KSB7XG4gICAgICB0aGlzLmN1cnJlbnQuc291cmNlLmVuZCA9IHRoaXMuZ2V0UG9zaXRpb24odG9rZW5bMl0pO1xuICAgICAgdGhpcy5jdXJyZW50LnNvdXJjZS5lbmQub2Zmc2V0Kys7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQucGFyZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVuZXhwZWN0ZWRDbG9zZSh0b2tlbik7XG4gICAgfVxuICB9XG4gIGVuZEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudC5wYXJlbnQpIHRoaXMudW5jbG9zZWRCbG9jaygpO1xuICAgIGlmICh0aGlzLmN1cnJlbnQubm9kZXMgJiYgdGhpcy5jdXJyZW50Lm5vZGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5jdXJyZW50LnJhd3Muc2VtaWNvbG9uID0gdGhpcy5zZW1pY29sb247XG4gICAgfVxuICAgIHRoaXMuY3VycmVudC5yYXdzLmFmdGVyID0gKHRoaXMuY3VycmVudC5yYXdzLmFmdGVyIHx8IFwiXCIpICsgdGhpcy5zcGFjZXM7XG4gICAgdGhpcy5yb290LnNvdXJjZS5lbmQgPSB0aGlzLmdldFBvc2l0aW9uKHRoaXMudG9rZW5pemVyLnBvc2l0aW9uKCkpO1xuICB9XG4gIGZyZWVTZW1pY29sb24odG9rZW4pIHtcbiAgICB0aGlzLnNwYWNlcyArPSB0b2tlblsxXTtcbiAgICBpZiAodGhpcy5jdXJyZW50Lm5vZGVzKSB7XG4gICAgICBsZXQgcHJldiA9IHRoaXMuY3VycmVudC5ub2Rlc1t0aGlzLmN1cnJlbnQubm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICBpZiAocHJldiAmJiBwcmV2LnR5cGUgPT09IFwicnVsZVwiICYmICFwcmV2LnJhd3Mub3duU2VtaWNvbG9uKSB7XG4gICAgICAgIHByZXYucmF3cy5vd25TZW1pY29sb24gPSB0aGlzLnNwYWNlcztcbiAgICAgICAgdGhpcy5zcGFjZXMgPSBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBIZWxwZXJzXG4gIGdldFBvc2l0aW9uKG9mZnNldCkge1xuICAgIGxldCBwb3MgPSB0aGlzLmlucHV0LmZyb21PZmZzZXQob2Zmc2V0KTtcbiAgICByZXR1cm4ge1xuICAgICAgY29sdW1uOiBwb3MuY29sLFxuICAgICAgbGluZTogcG9zLmxpbmUsXG4gICAgICBvZmZzZXRcbiAgICB9O1xuICB9XG4gIGluaXQobm9kZTIsIG9mZnNldCkge1xuICAgIHRoaXMuY3VycmVudC5wdXNoKG5vZGUyKTtcbiAgICBub2RlMi5zb3VyY2UgPSB7XG4gICAgICBpbnB1dDogdGhpcy5pbnB1dCxcbiAgICAgIHN0YXJ0OiB0aGlzLmdldFBvc2l0aW9uKG9mZnNldClcbiAgICB9O1xuICAgIG5vZGUyLnJhd3MuYmVmb3JlID0gdGhpcy5zcGFjZXM7XG4gICAgdGhpcy5zcGFjZXMgPSBcIlwiO1xuICAgIGlmIChub2RlMi50eXBlICE9PSBcImNvbW1lbnRcIikgdGhpcy5zZW1pY29sb24gPSBmYWxzZTtcbiAgfVxuICBvdGhlcihzdGFydCkge1xuICAgIGxldCBlbmQgPSBmYWxzZTtcbiAgICBsZXQgdHlwZSA9IG51bGw7XG4gICAgbGV0IGNvbG9uID0gZmFsc2U7XG4gICAgbGV0IGJyYWNrZXQgPSBudWxsO1xuICAgIGxldCBicmFja2V0cyA9IFtdO1xuICAgIGxldCBjdXN0b21Qcm9wZXJ0eSA9IHN0YXJ0WzFdLnN0YXJ0c1dpdGgoXCItLVwiKTtcbiAgICBsZXQgdG9rZW5zID0gW107XG4gICAgbGV0IHRva2VuID0gc3RhcnQ7XG4gICAgd2hpbGUgKHRva2VuKSB7XG4gICAgICB0eXBlID0gdG9rZW5bMF07XG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICBpZiAodHlwZSA9PT0gXCIoXCIgfHwgdHlwZSA9PT0gXCJbXCIpIHtcbiAgICAgICAgaWYgKCFicmFja2V0KSBicmFja2V0ID0gdG9rZW47XG4gICAgICAgIGJyYWNrZXRzLnB1c2godHlwZSA9PT0gXCIoXCIgPyBcIilcIiA6IFwiXVwiKTtcbiAgICAgIH0gZWxzZSBpZiAoY3VzdG9tUHJvcGVydHkgJiYgY29sb24gJiYgdHlwZSA9PT0gXCJ7XCIpIHtcbiAgICAgICAgaWYgKCFicmFja2V0KSBicmFja2V0ID0gdG9rZW47XG4gICAgICAgIGJyYWNrZXRzLnB1c2goXCJ9XCIpO1xuICAgICAgfSBlbHNlIGlmIChicmFja2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiO1wiKSB7XG4gICAgICAgICAgaWYgKGNvbG9uKSB7XG4gICAgICAgICAgICB0aGlzLmRlY2wodG9rZW5zLCBjdXN0b21Qcm9wZXJ0eSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIntcIikge1xuICAgICAgICAgIHRoaXMucnVsZSh0b2tlbnMpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIn1cIikge1xuICAgICAgICAgIHRoaXMudG9rZW5pemVyLmJhY2sodG9rZW5zLnBvcCgpKTtcbiAgICAgICAgICBlbmQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiOlwiKSB7XG4gICAgICAgICAgY29sb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IGJyYWNrZXRzW2JyYWNrZXRzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgIGJyYWNrZXRzLnBvcCgpO1xuICAgICAgICBpZiAoYnJhY2tldHMubGVuZ3RoID09PSAwKSBicmFja2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRva2VuID0gdGhpcy50b2tlbml6ZXIubmV4dFRva2VuKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnRva2VuaXplci5lbmRPZkZpbGUoKSkgZW5kID0gdHJ1ZTtcbiAgICBpZiAoYnJhY2tldHMubGVuZ3RoID4gMCkgdGhpcy51bmNsb3NlZEJyYWNrZXQoYnJhY2tldCk7XG4gICAgaWYgKGVuZCAmJiBjb2xvbikge1xuICAgICAgaWYgKCFjdXN0b21Qcm9wZXJ0eSkge1xuICAgICAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgIHRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXVswXTtcbiAgICAgICAgICBpZiAodG9rZW4gIT09IFwic3BhY2VcIiAmJiB0b2tlbiAhPT0gXCJjb21tZW50XCIpIGJyZWFrO1xuICAgICAgICAgIHRoaXMudG9rZW5pemVyLmJhY2sodG9rZW5zLnBvcCgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kZWNsKHRva2VucywgY3VzdG9tUHJvcGVydHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVua25vd25Xb3JkKHRva2Vucyk7XG4gICAgfVxuICB9XG4gIHBhcnNlKCkge1xuICAgIGxldCB0b2tlbjtcbiAgICB3aGlsZSAoIXRoaXMudG9rZW5pemVyLmVuZE9mRmlsZSgpKSB7XG4gICAgICB0b2tlbiA9IHRoaXMudG9rZW5pemVyLm5leHRUb2tlbigpO1xuICAgICAgc3dpdGNoICh0b2tlblswXSkge1xuICAgICAgICBjYXNlIFwic3BhY2VcIjpcbiAgICAgICAgICB0aGlzLnNwYWNlcyArPSB0b2tlblsxXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjtcIjpcbiAgICAgICAgICB0aGlzLmZyZWVTZW1pY29sb24odG9rZW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwifVwiOlxuICAgICAgICAgIHRoaXMuZW5kKHRva2VuKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNvbW1lbnRcIjpcbiAgICAgICAgICB0aGlzLmNvbW1lbnQodG9rZW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXQtd29yZFwiOlxuICAgICAgICAgIHRoaXMuYXRydWxlKHRva2VuKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIntcIjpcbiAgICAgICAgICB0aGlzLmVtcHR5UnVsZSh0b2tlbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5vdGhlcih0b2tlbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZW5kRmlsZSgpO1xuICB9XG4gIHByZWNoZWNrTWlzc2VkU2VtaWNvbG9uKCkge1xuICB9XG4gIHJhdyhub2RlMiwgcHJvcCwgdG9rZW5zLCBjdXN0b21Qcm9wZXJ0eSkge1xuICAgIGxldCB0b2tlbiwgdHlwZTtcbiAgICBsZXQgbGVuZ3RoID0gdG9rZW5zLmxlbmd0aDtcbiAgICBsZXQgdmFsdWUgPSBcIlwiO1xuICAgIGxldCBjbGVhbiA9IHRydWU7XG4gICAgbGV0IG5leHQsIHByZXY7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICB0eXBlID0gdG9rZW5bMF07XG4gICAgICBpZiAodHlwZSA9PT0gXCJzcGFjZVwiICYmIGkgPT09IGxlbmd0aCAtIDEgJiYgIWN1c3RvbVByb3BlcnR5KSB7XG4gICAgICAgIGNsZWFuID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY29tbWVudFwiKSB7XG4gICAgICAgIHByZXYgPSB0b2tlbnNbaSAtIDFdID8gdG9rZW5zW2kgLSAxXVswXSA6IFwiZW1wdHlcIjtcbiAgICAgICAgbmV4dCA9IHRva2Vuc1tpICsgMV0gPyB0b2tlbnNbaSArIDFdWzBdIDogXCJlbXB0eVwiO1xuICAgICAgICBpZiAoIVNBRkVfQ09NTUVOVF9ORUlHSEJPUltwcmV2XSAmJiAhU0FGRV9DT01NRU5UX05FSUdIQk9SW25leHRdKSB7XG4gICAgICAgICAgaWYgKHZhbHVlLnNsaWNlKC0xKSA9PT0gXCIsXCIpIHtcbiAgICAgICAgICAgIGNsZWFuID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlICs9IHRva2VuWzFdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGVhbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSArPSB0b2tlblsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjbGVhbikge1xuICAgICAgbGV0IHJhdyA9IHRva2Vucy5yZWR1Y2UoKGFsbCwgaSkgPT4gYWxsICsgaVsxXSwgXCJcIik7XG4gICAgICBub2RlMi5yYXdzW3Byb3BdID0geyByYXcsIHZhbHVlIH07XG4gICAgfVxuICAgIG5vZGUyW3Byb3BdID0gdmFsdWU7XG4gIH1cbiAgcnVsZSh0b2tlbnMpIHtcbiAgICB0b2tlbnMucG9wKCk7XG4gICAgbGV0IG5vZGUyID0gbmV3IFJ1bGUkMigpO1xuICAgIHRoaXMuaW5pdChub2RlMiwgdG9rZW5zWzBdWzJdKTtcbiAgICBub2RlMi5yYXdzLmJldHdlZW4gPSB0aGlzLnNwYWNlc0FuZENvbW1lbnRzRnJvbUVuZCh0b2tlbnMpO1xuICAgIHRoaXMucmF3KG5vZGUyLCBcInNlbGVjdG9yXCIsIHRva2Vucyk7XG4gICAgdGhpcy5jdXJyZW50ID0gbm9kZTI7XG4gIH1cbiAgc3BhY2VzQW5kQ29tbWVudHNGcm9tRW5kKHRva2Vucykge1xuICAgIGxldCBsYXN0VG9rZW5UeXBlO1xuICAgIGxldCBzcGFjZXMgPSBcIlwiO1xuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICBsYXN0VG9rZW5UeXBlID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXVswXTtcbiAgICAgIGlmIChsYXN0VG9rZW5UeXBlICE9PSBcInNwYWNlXCIgJiYgbGFzdFRva2VuVHlwZSAhPT0gXCJjb21tZW50XCIpIGJyZWFrO1xuICAgICAgc3BhY2VzID0gdG9rZW5zLnBvcCgpWzFdICsgc3BhY2VzO1xuICAgIH1cbiAgICByZXR1cm4gc3BhY2VzO1xuICB9XG4gIC8vIEVycm9yc1xuICBzcGFjZXNBbmRDb21tZW50c0Zyb21TdGFydCh0b2tlbnMpIHtcbiAgICBsZXQgbmV4dDtcbiAgICBsZXQgc3BhY2VzID0gXCJcIjtcbiAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xuICAgICAgbmV4dCA9IHRva2Vuc1swXVswXTtcbiAgICAgIGlmIChuZXh0ICE9PSBcInNwYWNlXCIgJiYgbmV4dCAhPT0gXCJjb21tZW50XCIpIGJyZWFrO1xuICAgICAgc3BhY2VzICs9IHRva2Vucy5zaGlmdCgpWzFdO1xuICAgIH1cbiAgICByZXR1cm4gc3BhY2VzO1xuICB9XG4gIHNwYWNlc0Zyb21FbmQodG9rZW5zKSB7XG4gICAgbGV0IGxhc3RUb2tlblR5cGU7XG4gICAgbGV0IHNwYWNlcyA9IFwiXCI7XG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgIGxhc3RUb2tlblR5cGUgPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdWzBdO1xuICAgICAgaWYgKGxhc3RUb2tlblR5cGUgIT09IFwic3BhY2VcIikgYnJlYWs7XG4gICAgICBzcGFjZXMgPSB0b2tlbnMucG9wKClbMV0gKyBzcGFjZXM7XG4gICAgfVxuICAgIHJldHVybiBzcGFjZXM7XG4gIH1cbiAgc3RyaW5nRnJvbSh0b2tlbnMsIGZyb20pIHtcbiAgICBsZXQgcmVzdWx0MiA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IGZyb207IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdDIgKz0gdG9rZW5zW2ldWzFdO1xuICAgIH1cbiAgICB0b2tlbnMuc3BsaWNlKGZyb20sIHRva2Vucy5sZW5ndGggLSBmcm9tKTtcbiAgICByZXR1cm4gcmVzdWx0MjtcbiAgfVxuICB1bmNsb3NlZEJsb2NrKCkge1xuICAgIGxldCBwb3MgPSB0aGlzLmN1cnJlbnQuc291cmNlLnN0YXJ0O1xuICAgIHRocm93IHRoaXMuaW5wdXQuZXJyb3IoXCJVbmNsb3NlZCBibG9ja1wiLCBwb3MubGluZSwgcG9zLmNvbHVtbik7XG4gIH1cbiAgdW5jbG9zZWRCcmFja2V0KGJyYWNrZXQpIHtcbiAgICB0aHJvdyB0aGlzLmlucHV0LmVycm9yKFxuICAgICAgXCJVbmNsb3NlZCBicmFja2V0XCIsXG4gICAgICB7IG9mZnNldDogYnJhY2tldFsyXSB9LFxuICAgICAgeyBvZmZzZXQ6IGJyYWNrZXRbMl0gKyAxIH1cbiAgICApO1xuICB9XG4gIHVuZXhwZWN0ZWRDbG9zZSh0b2tlbikge1xuICAgIHRocm93IHRoaXMuaW5wdXQuZXJyb3IoXG4gICAgICBcIlVuZXhwZWN0ZWQgfVwiLFxuICAgICAgeyBvZmZzZXQ6IHRva2VuWzJdIH0sXG4gICAgICB7IG9mZnNldDogdG9rZW5bMl0gKyAxIH1cbiAgICApO1xuICB9XG4gIHVua25vd25Xb3JkKHRva2Vucykge1xuICAgIHRocm93IHRoaXMuaW5wdXQuZXJyb3IoXG4gICAgICBcIlVua25vd24gd29yZFwiLFxuICAgICAgeyBvZmZzZXQ6IHRva2Vuc1swXVsyXSB9LFxuICAgICAgeyBvZmZzZXQ6IHRva2Vuc1swXVsyXSArIHRva2Vuc1swXVsxXS5sZW5ndGggfVxuICAgICk7XG4gIH1cbiAgdW5uYW1lZEF0cnVsZShub2RlMiwgdG9rZW4pIHtcbiAgICB0aHJvdyB0aGlzLmlucHV0LmVycm9yKFxuICAgICAgXCJBdC1ydWxlIHdpdGhvdXQgbmFtZVwiLFxuICAgICAgeyBvZmZzZXQ6IHRva2VuWzJdIH0sXG4gICAgICB7IG9mZnNldDogdG9rZW5bMl0gKyB0b2tlblsxXS5sZW5ndGggfVxuICAgICk7XG4gIH1cbn07XG52YXIgcGFyc2VyID0gUGFyc2VyJDE7XG5sZXQgQ29udGFpbmVyJDIgPSBjb250YWluZXI7XG5sZXQgUGFyc2VyMiA9IHBhcnNlcjtcbmxldCBJbnB1dCQyID0gaW5wdXQ7XG5mdW5jdGlvbiBwYXJzZSQzKGNzcywgb3B0cykge1xuICBsZXQgaW5wdXQyID0gbmV3IElucHV0JDIoY3NzLCBvcHRzKTtcbiAgbGV0IHBhcnNlcjIgPSBuZXcgUGFyc2VyMihpbnB1dDIpO1xuICB0cnkge1xuICAgIHBhcnNlcjIucGFyc2UoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGlmIChlLm5hbWUgPT09IFwiQ3NzU3ludGF4RXJyb3JcIiAmJiBvcHRzICYmIG9wdHMuZnJvbSkge1xuICAgICAgICBpZiAoL1xcLnNjc3MkL2kudGVzdChvcHRzLmZyb20pKSB7XG4gICAgICAgICAgZS5tZXNzYWdlICs9IFwiXFxuWW91IHRyaWVkIHRvIHBhcnNlIFNDU1Mgd2l0aCB0aGUgc3RhbmRhcmQgQ1NTIHBhcnNlcjsgdHJ5IGFnYWluIHdpdGggdGhlIHBvc3Rjc3Mtc2NzcyBwYXJzZXJcIjtcbiAgICAgICAgfSBlbHNlIGlmICgvXFwuc2Fzcy9pLnRlc3Qob3B0cy5mcm9tKSkge1xuICAgICAgICAgIGUubWVzc2FnZSArPSBcIlxcbllvdSB0cmllZCB0byBwYXJzZSBTYXNzIHdpdGggdGhlIHN0YW5kYXJkIENTUyBwYXJzZXI7IHRyeSBhZ2FpbiB3aXRoIHRoZSBwb3N0Y3NzLXNhc3MgcGFyc2VyXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoL1xcLmxlc3MkL2kudGVzdChvcHRzLmZyb20pKSB7XG4gICAgICAgICAgZS5tZXNzYWdlICs9IFwiXFxuWW91IHRyaWVkIHRvIHBhcnNlIExlc3Mgd2l0aCB0aGUgc3RhbmRhcmQgQ1NTIHBhcnNlcjsgdHJ5IGFnYWluIHdpdGggdGhlIHBvc3Rjc3MtbGVzcyBwYXJzZXJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlO1xuICB9XG4gIHJldHVybiBwYXJzZXIyLnJvb3Q7XG59XG52YXIgcGFyc2VfMSA9IHBhcnNlJDM7XG5wYXJzZSQzLmRlZmF1bHQgPSBwYXJzZSQzO1xuQ29udGFpbmVyJDIucmVnaXN0ZXJQYXJzZShwYXJzZSQzKTtcbmxldCB7IGlzQ2xlYW4sIG15IH0gPSBzeW1ib2xzO1xubGV0IE1hcEdlbmVyYXRvciQxID0gbWFwR2VuZXJhdG9yO1xubGV0IHN0cmluZ2lmeSQyID0gc3RyaW5naWZ5XzE7XG5sZXQgQ29udGFpbmVyJDEgPSBjb250YWluZXI7XG5sZXQgRG9jdW1lbnQkMiA9IGRvY3VtZW50JDE7XG5sZXQgd2Fybk9uY2UkMSA9IHdhcm5PbmNlJDI7XG5sZXQgUmVzdWx0JDIgPSByZXN1bHQ7XG5sZXQgcGFyc2UkMiA9IHBhcnNlXzE7XG5sZXQgUm9vdCQzID0gcm9vdDtcbmNvbnN0IFRZUEVfVE9fQ0xBU1NfTkFNRSA9IHtcbiAgYXRydWxlOiBcIkF0UnVsZVwiLFxuICBjb21tZW50OiBcIkNvbW1lbnRcIixcbiAgZGVjbDogXCJEZWNsYXJhdGlvblwiLFxuICBkb2N1bWVudDogXCJEb2N1bWVudFwiLFxuICByb290OiBcIlJvb3RcIixcbiAgcnVsZTogXCJSdWxlXCJcbn07XG5jb25zdCBQTFVHSU5fUFJPUFMgPSB7XG4gIEF0UnVsZTogdHJ1ZSxcbiAgQXRSdWxlRXhpdDogdHJ1ZSxcbiAgQ29tbWVudDogdHJ1ZSxcbiAgQ29tbWVudEV4aXQ6IHRydWUsXG4gIERlY2xhcmF0aW9uOiB0cnVlLFxuICBEZWNsYXJhdGlvbkV4aXQ6IHRydWUsXG4gIERvY3VtZW50OiB0cnVlLFxuICBEb2N1bWVudEV4aXQ6IHRydWUsXG4gIE9uY2U6IHRydWUsXG4gIE9uY2VFeGl0OiB0cnVlLFxuICBwb3N0Y3NzUGx1Z2luOiB0cnVlLFxuICBwcmVwYXJlOiB0cnVlLFxuICBSb290OiB0cnVlLFxuICBSb290RXhpdDogdHJ1ZSxcbiAgUnVsZTogdHJ1ZSxcbiAgUnVsZUV4aXQ6IHRydWVcbn07XG5jb25zdCBOT1RfVklTSVRPUlMgPSB7XG4gIE9uY2U6IHRydWUsXG4gIHBvc3Rjc3NQbHVnaW46IHRydWUsXG4gIHByZXBhcmU6IHRydWVcbn07XG5jb25zdCBDSElMRFJFTiA9IDA7XG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xufVxuZnVuY3Rpb24gZ2V0RXZlbnRzKG5vZGUyKSB7XG4gIGxldCBrZXkgPSBmYWxzZTtcbiAgbGV0IHR5cGUgPSBUWVBFX1RPX0NMQVNTX05BTUVbbm9kZTIudHlwZV07XG4gIGlmIChub2RlMi50eXBlID09PSBcImRlY2xcIikge1xuICAgIGtleSA9IG5vZGUyLnByb3AudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmIChub2RlMi50eXBlID09PSBcImF0cnVsZVwiKSB7XG4gICAga2V5ID0gbm9kZTIubmFtZS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIGlmIChrZXkgJiYgbm9kZTIuYXBwZW5kKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHR5cGUsXG4gICAgICB0eXBlICsgXCItXCIgKyBrZXksXG4gICAgICBDSElMRFJFTixcbiAgICAgIHR5cGUgKyBcIkV4aXRcIixcbiAgICAgIHR5cGUgKyBcIkV4aXQtXCIgKyBrZXlcbiAgICBdO1xuICB9IGVsc2UgaWYgKGtleSkge1xuICAgIHJldHVybiBbdHlwZSwgdHlwZSArIFwiLVwiICsga2V5LCB0eXBlICsgXCJFeGl0XCIsIHR5cGUgKyBcIkV4aXQtXCIgKyBrZXldO1xuICB9IGVsc2UgaWYgKG5vZGUyLmFwcGVuZCkge1xuICAgIHJldHVybiBbdHlwZSwgQ0hJTERSRU4sIHR5cGUgKyBcIkV4aXRcIl07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFt0eXBlLCB0eXBlICsgXCJFeGl0XCJdO1xuICB9XG59XG5mdW5jdGlvbiB0b1N0YWNrKG5vZGUyKSB7XG4gIGxldCBldmVudHM7XG4gIGlmIChub2RlMi50eXBlID09PSBcImRvY3VtZW50XCIpIHtcbiAgICBldmVudHMgPSBbXCJEb2N1bWVudFwiLCBDSElMRFJFTiwgXCJEb2N1bWVudEV4aXRcIl07XG4gIH0gZWxzZSBpZiAobm9kZTIudHlwZSA9PT0gXCJyb290XCIpIHtcbiAgICBldmVudHMgPSBbXCJSb290XCIsIENISUxEUkVOLCBcIlJvb3RFeGl0XCJdO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50cyA9IGdldEV2ZW50cyhub2RlMik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBldmVudEluZGV4OiAwLFxuICAgIGV2ZW50cyxcbiAgICBpdGVyYXRvcjogMCxcbiAgICBub2RlOiBub2RlMixcbiAgICB2aXNpdG9ySW5kZXg6IDAsXG4gICAgdmlzaXRvcnM6IFtdXG4gIH07XG59XG5mdW5jdGlvbiBjbGVhbk1hcmtzKG5vZGUyKSB7XG4gIG5vZGUyW2lzQ2xlYW5dID0gZmFsc2U7XG4gIGlmIChub2RlMi5ub2Rlcykgbm9kZTIubm9kZXMuZm9yRWFjaCgoaSkgPT4gY2xlYW5NYXJrcyhpKSk7XG4gIHJldHVybiBub2RlMjtcbn1cbmxldCBwb3N0Y3NzJDIgPSB7fTtcbmxldCBMYXp5UmVzdWx0JDIgPSBjbGFzcyBMYXp5UmVzdWx0IHtcbiAgY29uc3RydWN0b3IocHJvY2Vzc29yMiwgY3NzLCBvcHRzKSB7XG4gICAgdGhpcy5zdHJpbmdpZmllZCA9IGZhbHNlO1xuICAgIHRoaXMucHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgbGV0IHJvb3QyO1xuICAgIGlmICh0eXBlb2YgY3NzID09PSBcIm9iamVjdFwiICYmIGNzcyAhPT0gbnVsbCAmJiAoY3NzLnR5cGUgPT09IFwicm9vdFwiIHx8IGNzcy50eXBlID09PSBcImRvY3VtZW50XCIpKSB7XG4gICAgICByb290MiA9IGNsZWFuTWFya3MoY3NzKTtcbiAgICB9IGVsc2UgaWYgKGNzcyBpbnN0YW5jZW9mIExhenlSZXN1bHQgfHwgY3NzIGluc3RhbmNlb2YgUmVzdWx0JDIpIHtcbiAgICAgIHJvb3QyID0gY2xlYW5NYXJrcyhjc3Mucm9vdCk7XG4gICAgICBpZiAoY3NzLm1hcCkge1xuICAgICAgICBpZiAodHlwZW9mIG9wdHMubWFwID09PSBcInVuZGVmaW5lZFwiKSBvcHRzLm1hcCA9IHt9O1xuICAgICAgICBpZiAoIW9wdHMubWFwLmlubGluZSkgb3B0cy5tYXAuaW5saW5lID0gZmFsc2U7XG4gICAgICAgIG9wdHMubWFwLnByZXYgPSBjc3MubWFwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcGFyc2VyMiA9IHBhcnNlJDI7XG4gICAgICBpZiAob3B0cy5zeW50YXgpIHBhcnNlcjIgPSBvcHRzLnN5bnRheC5wYXJzZTtcbiAgICAgIGlmIChvcHRzLnBhcnNlcikgcGFyc2VyMiA9IG9wdHMucGFyc2VyO1xuICAgICAgaWYgKHBhcnNlcjIucGFyc2UpIHBhcnNlcjIgPSBwYXJzZXIyLnBhcnNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcm9vdDIgPSBwYXJzZXIyKGNzcywgb3B0cyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLnByb2Nlc3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgIH1cbiAgICAgIGlmIChyb290MiAmJiAhcm9vdDJbbXldKSB7XG4gICAgICAgIENvbnRhaW5lciQxLnJlYnVpbGQocm9vdDIpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlc3VsdCA9IG5ldyBSZXN1bHQkMihwcm9jZXNzb3IyLCByb290Miwgb3B0cyk7XG4gICAgdGhpcy5oZWxwZXJzID0geyAuLi5wb3N0Y3NzJDIsIHBvc3Rjc3M6IHBvc3Rjc3MkMiwgcmVzdWx0OiB0aGlzLnJlc3VsdCB9O1xuICAgIHRoaXMucGx1Z2lucyA9IHRoaXMucHJvY2Vzc29yLnBsdWdpbnMubWFwKChwbHVnaW4yKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHBsdWdpbjIgPT09IFwib2JqZWN0XCIgJiYgcGx1Z2luMi5wcmVwYXJlKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnBsdWdpbjIsIC4uLnBsdWdpbjIucHJlcGFyZSh0aGlzLnJlc3VsdCkgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwbHVnaW4yO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGFzeW5jKCkge1xuICAgIGlmICh0aGlzLmVycm9yKSByZXR1cm4gUHJvbWlzZS5yZWplY3QodGhpcy5lcnJvcik7XG4gICAgaWYgKHRoaXMucHJvY2Vzc2VkKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmVzdWx0KTtcbiAgICBpZiAoIXRoaXMucHJvY2Vzc2luZykge1xuICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdGhpcy5ydW5Bc3luYygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzaW5nO1xuICB9XG4gIGNhdGNoKG9uUmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy5hc3luYygpLmNhdGNoKG9uUmVqZWN0ZWQpO1xuICB9XG4gIGZpbmFsbHkob25GaW5hbGx5KSB7XG4gICAgcmV0dXJuIHRoaXMuYXN5bmMoKS50aGVuKG9uRmluYWxseSwgb25GaW5hbGx5KTtcbiAgfVxuICBnZXRBc3luY0Vycm9yKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVzZSBwcm9jZXNzKGNzcykudGhlbihjYikgdG8gd29yayB3aXRoIGFzeW5jIHBsdWdpbnNcIik7XG4gIH1cbiAgaGFuZGxlRXJyb3IoZXJyb3IsIG5vZGUyKSB7XG4gICAgbGV0IHBsdWdpbjIgPSB0aGlzLnJlc3VsdC5sYXN0UGx1Z2luO1xuICAgIHRyeSB7XG4gICAgICBpZiAobm9kZTIpIG5vZGUyLmFkZFRvRXJyb3IoZXJyb3IpO1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgaWYgKGVycm9yLm5hbWUgPT09IFwiQ3NzU3ludGF4RXJyb3JcIiAmJiAhZXJyb3IucGx1Z2luKSB7XG4gICAgICAgIGVycm9yLnBsdWdpbiA9IHBsdWdpbjIucG9zdGNzc1BsdWdpbjtcbiAgICAgICAgZXJyb3Iuc2V0TWVzc2FnZSgpO1xuICAgICAgfSBlbHNlIGlmIChwbHVnaW4yLnBvc3Rjc3NWZXJzaW9uKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICBsZXQgcGx1Z2luTmFtZSA9IHBsdWdpbjIucG9zdGNzc1BsdWdpbjtcbiAgICAgICAgICBsZXQgcGx1Z2luVmVyID0gcGx1Z2luMi5wb3N0Y3NzVmVyc2lvbjtcbiAgICAgICAgICBsZXQgcnVudGltZVZlciA9IHRoaXMucmVzdWx0LnByb2Nlc3Nvci52ZXJzaW9uO1xuICAgICAgICAgIGxldCBhID0gcGx1Z2luVmVyLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICBsZXQgYiA9IHJ1bnRpbWVWZXIuc3BsaXQoXCIuXCIpO1xuICAgICAgICAgIGlmIChhWzBdICE9PSBiWzBdIHx8IHBhcnNlSW50KGFbMV0pID4gcGFyc2VJbnQoYlsxXSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiVW5rbm93biBlcnJvciBmcm9tIFBvc3RDU1MgcGx1Z2luLiBZb3VyIGN1cnJlbnQgUG9zdENTUyB2ZXJzaW9uIGlzIFwiICsgcnVudGltZVZlciArIFwiLCBidXQgXCIgKyBwbHVnaW5OYW1lICsgXCIgdXNlcyBcIiArIHBsdWdpblZlciArIFwiLiBQZXJoYXBzIHRoaXMgaXMgdGhlIHNvdXJjZSBvZiB0aGUgZXJyb3IgYmVsb3cuXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuICBwcmVwYXJlVmlzaXRvcnMoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICBsZXQgYWRkID0gKHBsdWdpbjIsIHR5cGUsIGNiKSA9PiB7XG4gICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW3R5cGVdKSB0aGlzLmxpc3RlbmVyc1t0eXBlXSA9IFtdO1xuICAgICAgdGhpcy5saXN0ZW5lcnNbdHlwZV0ucHVzaChbcGx1Z2luMiwgY2JdKTtcbiAgICB9O1xuICAgIGZvciAobGV0IHBsdWdpbjIgb2YgdGhpcy5wbHVnaW5zKSB7XG4gICAgICBpZiAodHlwZW9mIHBsdWdpbjIgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZm9yIChsZXQgZXZlbnQgaW4gcGx1Z2luMikge1xuICAgICAgICAgIGlmICghUExVR0lOX1BST1BTW2V2ZW50XSAmJiAvXltBLVpdLy50ZXN0KGV2ZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVW5rbm93biBldmVudCAke2V2ZW50fSBpbiAke3BsdWdpbjIucG9zdGNzc1BsdWdpbn0uIFRyeSB0byB1cGRhdGUgUG9zdENTUyAoJHt0aGlzLnByb2Nlc3Nvci52ZXJzaW9ufSBub3cpLmBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghTk9UX1ZJU0lUT1JTW2V2ZW50XSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwbHVnaW4yW2V2ZW50XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICBmb3IgKGxldCBmaWx0ZXIgaW4gcGx1Z2luMltldmVudF0pIHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgYWRkKHBsdWdpbjIsIGV2ZW50LCBwbHVnaW4yW2V2ZW50XVtmaWx0ZXJdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgYWRkKFxuICAgICAgICAgICAgICAgICAgICBwbHVnaW4yLFxuICAgICAgICAgICAgICAgICAgICBldmVudCArIFwiLVwiICsgZmlsdGVyLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbjJbZXZlbnRdW2ZpbHRlcl1cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwbHVnaW4yW2V2ZW50XSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIGFkZChwbHVnaW4yLCBldmVudCwgcGx1Z2luMltldmVudF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmhhc0xpc3RlbmVyID0gT2JqZWN0LmtleXModGhpcy5saXN0ZW5lcnMpLmxlbmd0aCA+IDA7XG4gIH1cbiAgYXN5bmMgcnVuQXN5bmMoKSB7XG4gICAgdGhpcy5wbHVnaW4gPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGx1Z2luMiA9IHRoaXMucGx1Z2luc1tpXTtcbiAgICAgIGxldCBwcm9taXNlID0gdGhpcy5ydW5PblJvb3QocGx1Z2luMik7XG4gICAgICBpZiAoaXNQcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgcHJvbWlzZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByZXBhcmVWaXNpdG9ycygpO1xuICAgIGlmICh0aGlzLmhhc0xpc3RlbmVyKSB7XG4gICAgICBsZXQgcm9vdDIgPSB0aGlzLnJlc3VsdC5yb290O1xuICAgICAgd2hpbGUgKCFyb290Mltpc0NsZWFuXSkge1xuICAgICAgICByb290Mltpc0NsZWFuXSA9IHRydWU7XG4gICAgICAgIGxldCBzdGFjayA9IFt0b1N0YWNrKHJvb3QyKV07XG4gICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLnZpc2l0VGljayhzdGFjayk7XG4gICAgICAgICAgaWYgKGlzUHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgYXdhaXQgcHJvbWlzZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgbGV0IG5vZGUyID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0ubm9kZTtcbiAgICAgICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlLCBub2RlMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5saXN0ZW5lcnMuT25jZUV4aXQpIHtcbiAgICAgICAgZm9yIChsZXQgW3BsdWdpbjIsIHZpc2l0b3JdIG9mIHRoaXMubGlzdGVuZXJzLk9uY2VFeGl0KSB7XG4gICAgICAgICAgdGhpcy5yZXN1bHQubGFzdFBsdWdpbiA9IHBsdWdpbjI7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyb290Mi50eXBlID09PSBcImRvY3VtZW50XCIpIHtcbiAgICAgICAgICAgICAgbGV0IHJvb3RzID0gcm9vdDIubm9kZXMubWFwKFxuICAgICAgICAgICAgICAgIChzdWJSb290KSA9PiB2aXNpdG9yKHN1YlJvb3QsIHRoaXMuaGVscGVycylcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocm9vdHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYXdhaXQgdmlzaXRvcihyb290MiwgdGhpcy5oZWxwZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb2Nlc3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCk7XG4gIH1cbiAgcnVuT25Sb290KHBsdWdpbjIpIHtcbiAgICB0aGlzLnJlc3VsdC5sYXN0UGx1Z2luID0gcGx1Z2luMjtcbiAgICB0cnkge1xuICAgICAgaWYgKHR5cGVvZiBwbHVnaW4yID09PSBcIm9iamVjdFwiICYmIHBsdWdpbjIuT25jZSkge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQucm9vdC50eXBlID09PSBcImRvY3VtZW50XCIpIHtcbiAgICAgICAgICBsZXQgcm9vdHMgPSB0aGlzLnJlc3VsdC5yb290Lm5vZGVzLm1hcChcbiAgICAgICAgICAgIChyb290MikgPT4gcGx1Z2luMi5PbmNlKHJvb3QyLCB0aGlzLmhlbHBlcnMpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoaXNQcm9taXNlKHJvb3RzWzBdKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJvb3RzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJvb3RzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwbHVnaW4yLk9uY2UodGhpcy5yZXN1bHQucm9vdCwgdGhpcy5oZWxwZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBsdWdpbjIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gcGx1Z2luMih0aGlzLnJlc3VsdC5yb290LCB0aGlzLnJlc3VsdCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuICBzdHJpbmdpZnkoKSB7XG4gICAgaWYgKHRoaXMuZXJyb3IpIHRocm93IHRoaXMuZXJyb3I7XG4gICAgaWYgKHRoaXMuc3RyaW5naWZpZWQpIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgICB0aGlzLnN0cmluZ2lmaWVkID0gdHJ1ZTtcbiAgICB0aGlzLnN5bmMoKTtcbiAgICBsZXQgb3B0cyA9IHRoaXMucmVzdWx0Lm9wdHM7XG4gICAgbGV0IHN0ciA9IHN0cmluZ2lmeSQyO1xuICAgIGlmIChvcHRzLnN5bnRheCkgc3RyID0gb3B0cy5zeW50YXguc3RyaW5naWZ5O1xuICAgIGlmIChvcHRzLnN0cmluZ2lmaWVyKSBzdHIgPSBvcHRzLnN0cmluZ2lmaWVyO1xuICAgIGlmIChzdHIuc3RyaW5naWZ5KSBzdHIgPSBzdHIuc3RyaW5naWZ5O1xuICAgIGxldCBtYXAgPSBuZXcgTWFwR2VuZXJhdG9yJDEoc3RyLCB0aGlzLnJlc3VsdC5yb290LCB0aGlzLnJlc3VsdC5vcHRzKTtcbiAgICBsZXQgZGF0YSA9IG1hcC5nZW5lcmF0ZSgpO1xuICAgIHRoaXMucmVzdWx0LmNzcyA9IGRhdGFbMF07XG4gICAgdGhpcy5yZXN1bHQubWFwID0gZGF0YVsxXTtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gIH1cbiAgc3luYygpIHtcbiAgICBpZiAodGhpcy5lcnJvcikgdGhyb3cgdGhpcy5lcnJvcjtcbiAgICBpZiAodGhpcy5wcm9jZXNzZWQpIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgICB0aGlzLnByb2Nlc3NlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMucHJvY2Vzc2luZykge1xuICAgICAgdGhyb3cgdGhpcy5nZXRBc3luY0Vycm9yKCk7XG4gICAgfVxuICAgIGZvciAobGV0IHBsdWdpbjIgb2YgdGhpcy5wbHVnaW5zKSB7XG4gICAgICBsZXQgcHJvbWlzZSA9IHRoaXMucnVuT25Sb290KHBsdWdpbjIpO1xuICAgICAgaWYgKGlzUHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICB0aHJvdyB0aGlzLmdldEFzeW5jRXJyb3IoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcmVwYXJlVmlzaXRvcnMoKTtcbiAgICBpZiAodGhpcy5oYXNMaXN0ZW5lcikge1xuICAgICAgbGV0IHJvb3QyID0gdGhpcy5yZXN1bHQucm9vdDtcbiAgICAgIHdoaWxlICghcm9vdDJbaXNDbGVhbl0pIHtcbiAgICAgICAgcm9vdDJbaXNDbGVhbl0gPSB0cnVlO1xuICAgICAgICB0aGlzLndhbGtTeW5jKHJvb3QyKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxpc3RlbmVycy5PbmNlRXhpdCkge1xuICAgICAgICBpZiAocm9vdDIudHlwZSA9PT0gXCJkb2N1bWVudFwiKSB7XG4gICAgICAgICAgZm9yIChsZXQgc3ViUm9vdCBvZiByb290Mi5ub2Rlcykge1xuICAgICAgICAgICAgdGhpcy52aXNpdFN5bmModGhpcy5saXN0ZW5lcnMuT25jZUV4aXQsIHN1YlJvb3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnZpc2l0U3luYyh0aGlzLmxpc3RlbmVycy5PbmNlRXhpdCwgcm9vdDIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuICB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgaWYgKCEoXCJmcm9tXCIgaW4gdGhpcy5vcHRzKSkge1xuICAgICAgICB3YXJuT25jZSQxKFxuICAgICAgICAgIFwiV2l0aG91dCBgZnJvbWAgb3B0aW9uIFBvc3RDU1MgY291bGQgZ2VuZXJhdGUgd3Jvbmcgc291cmNlIG1hcCBhbmQgd2lsbCBub3QgZmluZCBCcm93c2Vyc2xpc3QgY29uZmlnLiBTZXQgaXQgdG8gQ1NTIGZpbGUgcGF0aCBvciB0byBgdW5kZWZpbmVkYCB0byBwcmV2ZW50IHRoaXMgd2FybmluZy5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hc3luYygpLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmNzcztcbiAgfVxuICB2aXNpdFN5bmModmlzaXRvcnMsIG5vZGUyKSB7XG4gICAgZm9yIChsZXQgW3BsdWdpbjIsIHZpc2l0b3JdIG9mIHZpc2l0b3JzKSB7XG4gICAgICB0aGlzLnJlc3VsdC5sYXN0UGx1Z2luID0gcGx1Z2luMjtcbiAgICAgIGxldCBwcm9taXNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJvbWlzZSA9IHZpc2l0b3Iobm9kZTIsIHRoaXMuaGVscGVycyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSwgbm9kZTIucHJveHlPZik7XG4gICAgICB9XG4gICAgICBpZiAobm9kZTIudHlwZSAhPT0gXCJyb290XCIgJiYgbm9kZTIudHlwZSAhPT0gXCJkb2N1bWVudFwiICYmICFub2RlMi5wYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNQcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIHRocm93IHRoaXMuZ2V0QXN5bmNFcnJvcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB2aXNpdFRpY2soc3RhY2spIHtcbiAgICBsZXQgdmlzaXQyID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgbGV0IHsgbm9kZTogbm9kZTIsIHZpc2l0b3JzIH0gPSB2aXNpdDI7XG4gICAgaWYgKG5vZGUyLnR5cGUgIT09IFwicm9vdFwiICYmIG5vZGUyLnR5cGUgIT09IFwiZG9jdW1lbnRcIiAmJiAhbm9kZTIucGFyZW50KSB7XG4gICAgICBzdGFjay5wb3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZpc2l0b3JzLmxlbmd0aCA+IDAgJiYgdmlzaXQyLnZpc2l0b3JJbmRleCA8IHZpc2l0b3JzLmxlbmd0aCkge1xuICAgICAgbGV0IFtwbHVnaW4yLCB2aXNpdG9yXSA9IHZpc2l0b3JzW3Zpc2l0Mi52aXNpdG9ySW5kZXhdO1xuICAgICAgdmlzaXQyLnZpc2l0b3JJbmRleCArPSAxO1xuICAgICAgaWYgKHZpc2l0Mi52aXNpdG9ySW5kZXggPT09IHZpc2l0b3JzLmxlbmd0aCkge1xuICAgICAgICB2aXNpdDIudmlzaXRvcnMgPSBbXTtcbiAgICAgICAgdmlzaXQyLnZpc2l0b3JJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLnJlc3VsdC5sYXN0UGx1Z2luID0gcGx1Z2luMjtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yKG5vZGUyLnRvUHJveHkoKSwgdGhpcy5oZWxwZXJzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlLCBub2RlMik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2aXNpdDIuaXRlcmF0b3IgIT09IDApIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHZpc2l0Mi5pdGVyYXRvcjtcbiAgICAgIGxldCBjaGlsZDtcbiAgICAgIHdoaWxlIChjaGlsZCA9IG5vZGUyLm5vZGVzW25vZGUyLmluZGV4ZXNbaXRlcmF0b3JdXSkge1xuICAgICAgICBub2RlMi5pbmRleGVzW2l0ZXJhdG9yXSArPSAxO1xuICAgICAgICBpZiAoIWNoaWxkW2lzQ2xlYW5dKSB7XG4gICAgICAgICAgY2hpbGRbaXNDbGVhbl0gPSB0cnVlO1xuICAgICAgICAgIHN0YWNrLnB1c2godG9TdGFjayhjaGlsZCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmlzaXQyLml0ZXJhdG9yID0gMDtcbiAgICAgIGRlbGV0ZSBub2RlMi5pbmRleGVzW2l0ZXJhdG9yXTtcbiAgICB9XG4gICAgbGV0IGV2ZW50cyA9IHZpc2l0Mi5ldmVudHM7XG4gICAgd2hpbGUgKHZpc2l0Mi5ldmVudEluZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgICAgbGV0IGV2ZW50ID0gZXZlbnRzW3Zpc2l0Mi5ldmVudEluZGV4XTtcbiAgICAgIHZpc2l0Mi5ldmVudEluZGV4ICs9IDE7XG4gICAgICBpZiAoZXZlbnQgPT09IENISUxEUkVOKSB7XG4gICAgICAgIGlmIChub2RlMi5ub2RlcyAmJiBub2RlMi5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICBub2RlMltpc0NsZWFuXSA9IHRydWU7XG4gICAgICAgICAgdmlzaXQyLml0ZXJhdG9yID0gbm9kZTIuZ2V0SXRlcmF0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICB2aXNpdDIudmlzaXRvcnMgPSB0aGlzLmxpc3RlbmVyc1tldmVudF07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhY2sucG9wKCk7XG4gIH1cbiAgd2Fsa1N5bmMobm9kZTIpIHtcbiAgICBub2RlMltpc0NsZWFuXSA9IHRydWU7XG4gICAgbGV0IGV2ZW50cyA9IGdldEV2ZW50cyhub2RlMik7XG4gICAgZm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XG4gICAgICBpZiAoZXZlbnQgPT09IENISUxEUkVOKSB7XG4gICAgICAgIGlmIChub2RlMi5ub2Rlcykge1xuICAgICAgICAgIG5vZGUyLmVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNoaWxkW2lzQ2xlYW5dKSB0aGlzLndhbGtTeW5jKGNoaWxkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHZpc2l0b3JzID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgICBpZiAodmlzaXRvcnMpIHtcbiAgICAgICAgICBpZiAodGhpcy52aXNpdFN5bmModmlzaXRvcnMsIG5vZGUyLnRvUHJveHkoKSkpIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB3YXJuaW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5zeW5jKCkud2FybmluZ3MoKTtcbiAgfVxuICBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKS5jb250ZW50O1xuICB9XG4gIGdldCBjc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCkuY3NzO1xuICB9XG4gIGdldCBtYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCkubWFwO1xuICB9XG4gIGdldCBtZXNzYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zeW5jKCkubWVzc2FnZXM7XG4gIH1cbiAgZ2V0IG9wdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0Lm9wdHM7XG4gIH1cbiAgZ2V0IHByb2Nlc3NvcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQucHJvY2Vzc29yO1xuICB9XG4gIGdldCByb290KCkge1xuICAgIHJldHVybiB0aGlzLnN5bmMoKS5yb290O1xuICB9XG4gIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICByZXR1cm4gXCJMYXp5UmVzdWx0XCI7XG4gIH1cbn07XG5MYXp5UmVzdWx0JDIucmVnaXN0ZXJQb3N0Y3NzID0gKGRlcGVuZGFudCkgPT4ge1xuICBwb3N0Y3NzJDIgPSBkZXBlbmRhbnQ7XG59O1xudmFyIGxhenlSZXN1bHQgPSBMYXp5UmVzdWx0JDI7XG5MYXp5UmVzdWx0JDIuZGVmYXVsdCA9IExhenlSZXN1bHQkMjtcblJvb3QkMy5yZWdpc3RlckxhenlSZXN1bHQoTGF6eVJlc3VsdCQyKTtcbkRvY3VtZW50JDIucmVnaXN0ZXJMYXp5UmVzdWx0KExhenlSZXN1bHQkMik7XG5sZXQgTWFwR2VuZXJhdG9yMiA9IG1hcEdlbmVyYXRvcjtcbmxldCBzdHJpbmdpZnkkMSA9IHN0cmluZ2lmeV8xO1xubGV0IHdhcm5PbmNlMiA9IHdhcm5PbmNlJDI7XG5sZXQgcGFyc2UkMSA9IHBhcnNlXzE7XG5jb25zdCBSZXN1bHQkMSA9IHJlc3VsdDtcbmxldCBOb1dvcmtSZXN1bHQkMSA9IGNsYXNzIE5vV29ya1Jlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHByb2Nlc3NvcjIsIGNzcywgb3B0cykge1xuICAgIGNzcyA9IGNzcy50b1N0cmluZygpO1xuICAgIHRoaXMuc3RyaW5naWZpZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9wcm9jZXNzb3IgPSBwcm9jZXNzb3IyO1xuICAgIHRoaXMuX2NzcyA9IGNzcztcbiAgICB0aGlzLl9vcHRzID0gb3B0cztcbiAgICB0aGlzLl9tYXAgPSB2b2lkIDA7XG4gICAgbGV0IHJvb3QyO1xuICAgIGxldCBzdHIgPSBzdHJpbmdpZnkkMTtcbiAgICB0aGlzLnJlc3VsdCA9IG5ldyBSZXN1bHQkMSh0aGlzLl9wcm9jZXNzb3IsIHJvb3QyLCB0aGlzLl9vcHRzKTtcbiAgICB0aGlzLnJlc3VsdC5jc3MgPSBjc3M7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnJlc3VsdCwgXCJyb290XCIsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYucm9vdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwID0gbmV3IE1hcEdlbmVyYXRvcjIoc3RyLCByb290MiwgdGhpcy5fb3B0cywgY3NzKTtcbiAgICBpZiAobWFwLmlzTWFwKCkpIHtcbiAgICAgIGxldCBbZ2VuZXJhdGVkQ1NTLCBnZW5lcmF0ZWRNYXBdID0gbWFwLmdlbmVyYXRlKCk7XG4gICAgICBpZiAoZ2VuZXJhdGVkQ1NTKSB7XG4gICAgICAgIHRoaXMucmVzdWx0LmNzcyA9IGdlbmVyYXRlZENTUztcbiAgICAgIH1cbiAgICAgIGlmIChnZW5lcmF0ZWRNYXApIHtcbiAgICAgICAgdGhpcy5yZXN1bHQubWFwID0gZ2VuZXJhdGVkTWFwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXAuY2xlYXJBbm5vdGF0aW9uKCk7XG4gICAgICB0aGlzLnJlc3VsdC5jc3MgPSBtYXAuY3NzO1xuICAgIH1cbiAgfVxuICBhc3luYygpIHtcbiAgICBpZiAodGhpcy5lcnJvcikgcmV0dXJuIFByb21pc2UucmVqZWN0KHRoaXMuZXJyb3IpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yZXN1bHQpO1xuICB9XG4gIGNhdGNoKG9uUmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy5hc3luYygpLmNhdGNoKG9uUmVqZWN0ZWQpO1xuICB9XG4gIGZpbmFsbHkob25GaW5hbGx5KSB7XG4gICAgcmV0dXJuIHRoaXMuYXN5bmMoKS50aGVuKG9uRmluYWxseSwgb25GaW5hbGx5KTtcbiAgfVxuICBzeW5jKCkge1xuICAgIGlmICh0aGlzLmVycm9yKSB0aHJvdyB0aGlzLmVycm9yO1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuICB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgaWYgKCEoXCJmcm9tXCIgaW4gdGhpcy5fb3B0cykpIHtcbiAgICAgICAgd2Fybk9uY2UyKFxuICAgICAgICAgIFwiV2l0aG91dCBgZnJvbWAgb3B0aW9uIFBvc3RDU1MgY291bGQgZ2VuZXJhdGUgd3Jvbmcgc291cmNlIG1hcCBhbmQgd2lsbCBub3QgZmluZCBCcm93c2Vyc2xpc3QgY29uZmlnLiBTZXQgaXQgdG8gQ1NTIGZpbGUgcGF0aCBvciB0byBgdW5kZWZpbmVkYCB0byBwcmV2ZW50IHRoaXMgd2FybmluZy5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hc3luYygpLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9jc3M7XG4gIH1cbiAgd2FybmluZ3MoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGdldCBjb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdC5jc3M7XG4gIH1cbiAgZ2V0IGNzcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQuY3NzO1xuICB9XG4gIGdldCBtYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0Lm1hcDtcbiAgfVxuICBnZXQgbWVzc2FnZXMoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGdldCBvcHRzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdC5vcHRzO1xuICB9XG4gIGdldCBwcm9jZXNzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0LnByb2Nlc3NvcjtcbiAgfVxuICBnZXQgcm9vdCgpIHtcbiAgICBpZiAodGhpcy5fcm9vdCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XG4gICAgfVxuICAgIGxldCByb290MjtcbiAgICBsZXQgcGFyc2VyMiA9IHBhcnNlJDE7XG4gICAgdHJ5IHtcbiAgICAgIHJvb3QyID0gcGFyc2VyMih0aGlzLl9jc3MsIHRoaXMuX29wdHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgfVxuICAgIGlmICh0aGlzLmVycm9yKSB7XG4gICAgICB0aHJvdyB0aGlzLmVycm9yO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yb290ID0gcm9vdDI7XG4gICAgICByZXR1cm4gcm9vdDI7XG4gICAgfVxuICB9XG4gIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICByZXR1cm4gXCJOb1dvcmtSZXN1bHRcIjtcbiAgfVxufTtcbnZhciBub1dvcmtSZXN1bHQgPSBOb1dvcmtSZXN1bHQkMTtcbk5vV29ya1Jlc3VsdCQxLmRlZmF1bHQgPSBOb1dvcmtSZXN1bHQkMTtcbmxldCBOb1dvcmtSZXN1bHQyID0gbm9Xb3JrUmVzdWx0O1xubGV0IExhenlSZXN1bHQkMSA9IGxhenlSZXN1bHQ7XG5sZXQgRG9jdW1lbnQkMSA9IGRvY3VtZW50JDE7XG5sZXQgUm9vdCQyID0gcm9vdDtcbmxldCBQcm9jZXNzb3IkMSA9IGNsYXNzIFByb2Nlc3NvciB7XG4gIGNvbnN0cnVjdG9yKHBsdWdpbnMgPSBbXSkge1xuICAgIHRoaXMudmVyc2lvbiA9IFwiOC40LjM4XCI7XG4gICAgdGhpcy5wbHVnaW5zID0gdGhpcy5ub3JtYWxpemUocGx1Z2lucyk7XG4gIH1cbiAgbm9ybWFsaXplKHBsdWdpbnMpIHtcbiAgICBsZXQgbm9ybWFsaXplZCA9IFtdO1xuICAgIGZvciAobGV0IGkgb2YgcGx1Z2lucykge1xuICAgICAgaWYgKGkucG9zdGNzcyA9PT0gdHJ1ZSkge1xuICAgICAgICBpID0gaSgpO1xuICAgICAgfSBlbHNlIGlmIChpLnBvc3Rjc3MpIHtcbiAgICAgICAgaSA9IGkucG9zdGNzcztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgaSA9PT0gXCJvYmplY3RcIiAmJiBBcnJheS5pc0FycmF5KGkucGx1Z2lucykpIHtcbiAgICAgICAgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZWQuY29uY2F0KGkucGx1Z2lucyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpID09PSBcIm9iamVjdFwiICYmIGkucG9zdGNzc1BsdWdpbikge1xuICAgICAgICBub3JtYWxpemVkLnB1c2goaSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgbm9ybWFsaXplZC5wdXNoKGkpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaSA9PT0gXCJvYmplY3RcIiAmJiAoaS5wYXJzZSB8fCBpLnN0cmluZ2lmeSkpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiUG9zdENTUyBzeW50YXhlcyBjYW5ub3QgYmUgdXNlZCBhcyBwbHVnaW5zLiBJbnN0ZWFkLCBwbGVhc2UgdXNlIG9uZSBvZiB0aGUgc3ludGF4L3BhcnNlci9zdHJpbmdpZmllciBvcHRpb25zIGFzIG91dGxpbmVkIGluIHlvdXIgUG9zdENTUyBydW5uZXIgZG9jdW1lbnRhdGlvbi5cIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihpICsgXCIgaXMgbm90IGEgUG9zdENTUyBwbHVnaW5cIik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub3JtYWxpemVkO1xuICB9XG4gIHByb2Nlc3MoY3NzLCBvcHRzID0ge30pIHtcbiAgICBpZiAoIXRoaXMucGx1Z2lucy5sZW5ndGggJiYgIW9wdHMucGFyc2VyICYmICFvcHRzLnN0cmluZ2lmaWVyICYmICFvcHRzLnN5bnRheCkge1xuICAgICAgcmV0dXJuIG5ldyBOb1dvcmtSZXN1bHQyKHRoaXMsIGNzcywgb3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgTGF6eVJlc3VsdCQxKHRoaXMsIGNzcywgb3B0cyk7XG4gICAgfVxuICB9XG4gIHVzZShwbHVnaW4yKSB7XG4gICAgdGhpcy5wbHVnaW5zID0gdGhpcy5wbHVnaW5zLmNvbmNhdCh0aGlzLm5vcm1hbGl6ZShbcGx1Z2luMl0pKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcbnZhciBwcm9jZXNzb3IgPSBQcm9jZXNzb3IkMTtcblByb2Nlc3NvciQxLmRlZmF1bHQgPSBQcm9jZXNzb3IkMTtcblJvb3QkMi5yZWdpc3RlclByb2Nlc3NvcihQcm9jZXNzb3IkMSk7XG5Eb2N1bWVudCQxLnJlZ2lzdGVyUHJvY2Vzc29yKFByb2Nlc3NvciQxKTtcbmxldCBEZWNsYXJhdGlvbiQxID0gZGVjbGFyYXRpb247XG5sZXQgUHJldmlvdXNNYXAyID0gcHJldmlvdXNNYXA7XG5sZXQgQ29tbWVudCQxID0gY29tbWVudDtcbmxldCBBdFJ1bGUkMSA9IGF0UnVsZTtcbmxldCBJbnB1dCQxID0gaW5wdXQ7XG5sZXQgUm9vdCQxID0gcm9vdDtcbmxldCBSdWxlJDEgPSBydWxlO1xuZnVuY3Rpb24gZnJvbUpTT04kMShqc29uLCBpbnB1dHMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoanNvbikpIHJldHVybiBqc29uLm1hcCgobikgPT4gZnJvbUpTT04kMShuKSk7XG4gIGxldCB7IGlucHV0czogb3duSW5wdXRzLCAuLi5kZWZhdWx0cyB9ID0ganNvbjtcbiAgaWYgKG93bklucHV0cykge1xuICAgIGlucHV0cyA9IFtdO1xuICAgIGZvciAobGV0IGlucHV0MiBvZiBvd25JbnB1dHMpIHtcbiAgICAgIGxldCBpbnB1dEh5ZHJhdGVkID0geyAuLi5pbnB1dDIsIF9fcHJvdG9fXzogSW5wdXQkMS5wcm90b3R5cGUgfTtcbiAgICAgIGlmIChpbnB1dEh5ZHJhdGVkLm1hcCkge1xuICAgICAgICBpbnB1dEh5ZHJhdGVkLm1hcCA9IHtcbiAgICAgICAgICAuLi5pbnB1dEh5ZHJhdGVkLm1hcCxcbiAgICAgICAgICBfX3Byb3RvX186IFByZXZpb3VzTWFwMi5wcm90b3R5cGVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlucHV0cy5wdXNoKGlucHV0SHlkcmF0ZWQpO1xuICAgIH1cbiAgfVxuICBpZiAoZGVmYXVsdHMubm9kZXMpIHtcbiAgICBkZWZhdWx0cy5ub2RlcyA9IGpzb24ubm9kZXMubWFwKChuKSA9PiBmcm9tSlNPTiQxKG4sIGlucHV0cykpO1xuICB9XG4gIGlmIChkZWZhdWx0cy5zb3VyY2UpIHtcbiAgICBsZXQgeyBpbnB1dElkLCAuLi5zb3VyY2UgfSA9IGRlZmF1bHRzLnNvdXJjZTtcbiAgICBkZWZhdWx0cy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgaWYgKGlucHV0SWQgIT0gbnVsbCkge1xuICAgICAgZGVmYXVsdHMuc291cmNlLmlucHV0ID0gaW5wdXRzW2lucHV0SWRdO1xuICAgIH1cbiAgfVxuICBpZiAoZGVmYXVsdHMudHlwZSA9PT0gXCJyb290XCIpIHtcbiAgICByZXR1cm4gbmV3IFJvb3QkMShkZWZhdWx0cyk7XG4gIH0gZWxzZSBpZiAoZGVmYXVsdHMudHlwZSA9PT0gXCJkZWNsXCIpIHtcbiAgICByZXR1cm4gbmV3IERlY2xhcmF0aW9uJDEoZGVmYXVsdHMpO1xuICB9IGVsc2UgaWYgKGRlZmF1bHRzLnR5cGUgPT09IFwicnVsZVwiKSB7XG4gICAgcmV0dXJuIG5ldyBSdWxlJDEoZGVmYXVsdHMpO1xuICB9IGVsc2UgaWYgKGRlZmF1bHRzLnR5cGUgPT09IFwiY29tbWVudFwiKSB7XG4gICAgcmV0dXJuIG5ldyBDb21tZW50JDEoZGVmYXVsdHMpO1xuICB9IGVsc2UgaWYgKGRlZmF1bHRzLnR5cGUgPT09IFwiYXRydWxlXCIpIHtcbiAgICByZXR1cm4gbmV3IEF0UnVsZSQxKGRlZmF1bHRzKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIG5vZGUgdHlwZTogXCIgKyBqc29uLnR5cGUpO1xuICB9XG59XG52YXIgZnJvbUpTT05fMSA9IGZyb21KU09OJDE7XG5mcm9tSlNPTiQxLmRlZmF1bHQgPSBmcm9tSlNPTiQxO1xubGV0IENzc1N5bnRheEVycm9yMiA9IGNzc1N5bnRheEVycm9yO1xubGV0IERlY2xhcmF0aW9uMiA9IGRlY2xhcmF0aW9uO1xubGV0IExhenlSZXN1bHQyID0gbGF6eVJlc3VsdDtcbmxldCBDb250YWluZXIyID0gY29udGFpbmVyO1xubGV0IFByb2Nlc3NvcjIgPSBwcm9jZXNzb3I7XG5sZXQgc3RyaW5naWZ5ID0gc3RyaW5naWZ5XzE7XG5sZXQgZnJvbUpTT04gPSBmcm9tSlNPTl8xO1xubGV0IERvY3VtZW50MiA9IGRvY3VtZW50JDE7XG5sZXQgV2FybmluZzIgPSB3YXJuaW5nO1xubGV0IENvbW1lbnQyID0gY29tbWVudDtcbmxldCBBdFJ1bGUyID0gYXRSdWxlO1xubGV0IFJlc3VsdDIgPSByZXN1bHQ7XG5sZXQgSW5wdXQyID0gaW5wdXQ7XG5sZXQgcGFyc2UgPSBwYXJzZV8xO1xubGV0IGxpc3QgPSBsaXN0XzE7XG5sZXQgUnVsZTIgPSBydWxlO1xubGV0IFJvb3QyID0gcm9vdDtcbmxldCBOb2RlMiA9IG5vZGU7XG5mdW5jdGlvbiBwb3N0Y3NzKC4uLnBsdWdpbnMpIHtcbiAgaWYgKHBsdWdpbnMubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkocGx1Z2luc1swXSkpIHtcbiAgICBwbHVnaW5zID0gcGx1Z2luc1swXTtcbiAgfVxuICByZXR1cm4gbmV3IFByb2Nlc3NvcjIocGx1Z2lucyk7XG59XG5wb3N0Y3NzLnBsdWdpbiA9IGZ1bmN0aW9uIHBsdWdpbihuYW1lLCBpbml0aWFsaXplcikge1xuICBsZXQgd2FybmluZ1ByaW50ZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gY3JlYXRvciguLi5hcmdzKSB7XG4gICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuICYmICF3YXJuaW5nUHJpbnRlZCkge1xuICAgICAgd2FybmluZ1ByaW50ZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBuYW1lICsgXCI6IHBvc3Rjc3MucGx1Z2luIHdhcyBkZXByZWNhdGVkLiBNaWdyYXRpb24gZ3VpZGU6XFxuaHR0cHM6Ly9ldmlsbWFydGlhbnMuY29tL2Nocm9uaWNsZXMvcG9zdGNzcy04LXBsdWdpbi1taWdyYXRpb25cIlxuICAgICAgKTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5MQU5HICYmIHByb2Nlc3MuZW52LkxBTkcuc3RhcnRzV2l0aChcImNuXCIpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBuYW1lICsgXCI6IOmHjOmdoiBwb3N0Y3NzLnBsdWdpbiDooqvlvIPnlKguIOi/geenu+aMh+WNlzpcXG5odHRwczovL3d3dy53M2N0ZWNoLmNvbS90b3BpYy8yMjI2XCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHRyYW5zZm9ybWVyID0gaW5pdGlhbGl6ZXIoLi4uYXJncyk7XG4gICAgdHJhbnNmb3JtZXIucG9zdGNzc1BsdWdpbiA9IG5hbWU7XG4gICAgdHJhbnNmb3JtZXIucG9zdGNzc1ZlcnNpb24gPSBuZXcgUHJvY2Vzc29yMigpLnZlcnNpb247XG4gICAgcmV0dXJuIHRyYW5zZm9ybWVyO1xuICB9XG4gIGxldCBjYWNoZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0b3IsIFwicG9zdGNzc1wiLCB7XG4gICAgZ2V0KCkge1xuICAgICAgaWYgKCFjYWNoZSkgY2FjaGUgPSBjcmVhdG9yKCk7XG4gICAgICByZXR1cm4gY2FjaGU7XG4gICAgfVxuICB9KTtcbiAgY3JlYXRvci5wcm9jZXNzID0gZnVuY3Rpb24oY3NzLCBwcm9jZXNzT3B0cywgcGx1Z2luT3B0cykge1xuICAgIHJldHVybiBwb3N0Y3NzKFtjcmVhdG9yKHBsdWdpbk9wdHMpXSkucHJvY2Vzcyhjc3MsIHByb2Nlc3NPcHRzKTtcbiAgfTtcbiAgcmV0dXJuIGNyZWF0b3I7XG59O1xucG9zdGNzcy5zdHJpbmdpZnkgPSBzdHJpbmdpZnk7XG5wb3N0Y3NzLnBhcnNlID0gcGFyc2U7XG5wb3N0Y3NzLmZyb21KU09OID0gZnJvbUpTT047XG5wb3N0Y3NzLmxpc3QgPSBsaXN0O1xucG9zdGNzcy5jb21tZW50ID0gKGRlZmF1bHRzKSA9PiBuZXcgQ29tbWVudDIoZGVmYXVsdHMpO1xucG9zdGNzcy5hdFJ1bGUgPSAoZGVmYXVsdHMpID0+IG5ldyBBdFJ1bGUyKGRlZmF1bHRzKTtcbnBvc3Rjc3MuZGVjbCA9IChkZWZhdWx0cykgPT4gbmV3IERlY2xhcmF0aW9uMihkZWZhdWx0cyk7XG5wb3N0Y3NzLnJ1bGUgPSAoZGVmYXVsdHMpID0+IG5ldyBSdWxlMihkZWZhdWx0cyk7XG5wb3N0Y3NzLnJvb3QgPSAoZGVmYXVsdHMpID0+IG5ldyBSb290MihkZWZhdWx0cyk7XG5wb3N0Y3NzLmRvY3VtZW50ID0gKGRlZmF1bHRzKSA9PiBuZXcgRG9jdW1lbnQyKGRlZmF1bHRzKTtcbnBvc3Rjc3MuQ3NzU3ludGF4RXJyb3IgPSBDc3NTeW50YXhFcnJvcjI7XG5wb3N0Y3NzLkRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24yO1xucG9zdGNzcy5Db250YWluZXIgPSBDb250YWluZXIyO1xucG9zdGNzcy5Qcm9jZXNzb3IgPSBQcm9jZXNzb3IyO1xucG9zdGNzcy5Eb2N1bWVudCA9IERvY3VtZW50MjtcbnBvc3Rjc3MuQ29tbWVudCA9IENvbW1lbnQyO1xucG9zdGNzcy5XYXJuaW5nID0gV2FybmluZzI7XG5wb3N0Y3NzLkF0UnVsZSA9IEF0UnVsZTI7XG5wb3N0Y3NzLlJlc3VsdCA9IFJlc3VsdDI7XG5wb3N0Y3NzLklucHV0ID0gSW5wdXQyO1xucG9zdGNzcy5SdWxlID0gUnVsZTI7XG5wb3N0Y3NzLlJvb3QgPSBSb290MjtcbnBvc3Rjc3MuTm9kZSA9IE5vZGUyO1xuTGF6eVJlc3VsdDIucmVnaXN0ZXJQb3N0Y3NzKHBvc3Rjc3MpO1xudmFyIHBvc3Rjc3NfMSA9IHBvc3Rjc3M7XG5wb3N0Y3NzLmRlZmF1bHQgPSBwb3N0Y3NzO1xuY29uc3QgcG9zdGNzcyQxID0gLyogQF9fUFVSRV9fICovIGdldERlZmF1bHRFeHBvcnRGcm9tQ2pzKHBvc3Rjc3NfMSk7XG5wb3N0Y3NzJDEuc3RyaW5naWZ5O1xucG9zdGNzcyQxLmZyb21KU09OO1xucG9zdGNzcyQxLnBsdWdpbjtcbnBvc3Rjc3MkMS5wYXJzZTtcbnBvc3Rjc3MkMS5saXN0O1xucG9zdGNzcyQxLmRvY3VtZW50O1xucG9zdGNzcyQxLmNvbW1lbnQ7XG5wb3N0Y3NzJDEuYXRSdWxlO1xucG9zdGNzcyQxLnJ1bGU7XG5wb3N0Y3NzJDEuZGVjbDtcbnBvc3Rjc3MkMS5yb290O1xucG9zdGNzcyQxLkNzc1N5bnRheEVycm9yO1xucG9zdGNzcyQxLkRlY2xhcmF0aW9uO1xucG9zdGNzcyQxLkNvbnRhaW5lcjtcbnBvc3Rjc3MkMS5Qcm9jZXNzb3I7XG5wb3N0Y3NzJDEuRG9jdW1lbnQ7XG5wb3N0Y3NzJDEuQ29tbWVudDtcbnBvc3Rjc3MkMS5XYXJuaW5nO1xucG9zdGNzcyQxLkF0UnVsZTtcbnBvc3Rjc3MkMS5SZXN1bHQ7XG5wb3N0Y3NzJDEuSW5wdXQ7XG5wb3N0Y3NzJDEuUnVsZTtcbnBvc3Rjc3MkMS5Sb290O1xucG9zdGNzcyQxLk5vZGU7XG5jb25zdCB0YWdNYXAgPSB7XG4gIHNjcmlwdDogXCJub3NjcmlwdFwiLFxuICAvLyBjYW1lbCBjYXNlIHN2ZyBlbGVtZW50IHRhZyBuYW1lc1xuICBhbHRnbHlwaDogXCJhbHRHbHlwaFwiLFxuICBhbHRnbHlwaGRlZjogXCJhbHRHbHlwaERlZlwiLFxuICBhbHRnbHlwaGl0ZW06IFwiYWx0R2x5cGhJdGVtXCIsXG4gIGFuaW1hdGVjb2xvcjogXCJhbmltYXRlQ29sb3JcIixcbiAgYW5pbWF0ZW1vdGlvbjogXCJhbmltYXRlTW90aW9uXCIsXG4gIGFuaW1hdGV0cmFuc2Zvcm06IFwiYW5pbWF0ZVRyYW5zZm9ybVwiLFxuICBjbGlwcGF0aDogXCJjbGlwUGF0aFwiLFxuICBmZWJsZW5kOiBcImZlQmxlbmRcIixcbiAgZmVjb2xvcm1hdHJpeDogXCJmZUNvbG9yTWF0cml4XCIsXG4gIGZlY29tcG9uZW50dHJhbnNmZXI6IFwiZmVDb21wb25lbnRUcmFuc2ZlclwiLFxuICBmZWNvbXBvc2l0ZTogXCJmZUNvbXBvc2l0ZVwiLFxuICBmZWNvbnZvbHZlbWF0cml4OiBcImZlQ29udm9sdmVNYXRyaXhcIixcbiAgZmVkaWZmdXNlbGlnaHRpbmc6IFwiZmVEaWZmdXNlTGlnaHRpbmdcIixcbiAgZmVkaXNwbGFjZW1lbnRtYXA6IFwiZmVEaXNwbGFjZW1lbnRNYXBcIixcbiAgZmVkaXN0YW50bGlnaHQ6IFwiZmVEaXN0YW50TGlnaHRcIixcbiAgZmVkcm9wc2hhZG93OiBcImZlRHJvcFNoYWRvd1wiLFxuICBmZWZsb29kOiBcImZlRmxvb2RcIixcbiAgZmVmdW5jYTogXCJmZUZ1bmNBXCIsXG4gIGZlZnVuY2I6IFwiZmVGdW5jQlwiLFxuICBmZWZ1bmNnOiBcImZlRnVuY0dcIixcbiAgZmVmdW5jcjogXCJmZUZ1bmNSXCIsXG4gIGZlZ2F1c3NpYW5ibHVyOiBcImZlR2F1c3NpYW5CbHVyXCIsXG4gIGZlaW1hZ2U6IFwiZmVJbWFnZVwiLFxuICBmZW1lcmdlOiBcImZlTWVyZ2VcIixcbiAgZmVtZXJnZW5vZGU6IFwiZmVNZXJnZU5vZGVcIixcbiAgZmVtb3JwaG9sb2d5OiBcImZlTW9ycGhvbG9neVwiLFxuICBmZW9mZnNldDogXCJmZU9mZnNldFwiLFxuICBmZXBvaW50bGlnaHQ6IFwiZmVQb2ludExpZ2h0XCIsXG4gIGZlc3BlY3VsYXJsaWdodGluZzogXCJmZVNwZWN1bGFyTGlnaHRpbmdcIixcbiAgZmVzcG90bGlnaHQ6IFwiZmVTcG90TGlnaHRcIixcbiAgZmV0aWxlOiBcImZlVGlsZVwiLFxuICBmZXR1cmJ1bGVuY2U6IFwiZmVUdXJidWxlbmNlXCIsXG4gIGZvcmVpZ25vYmplY3Q6IFwiZm9yZWlnbk9iamVjdFwiLFxuICBnbHlwaHJlZjogXCJnbHlwaFJlZlwiLFxuICBsaW5lYXJncmFkaWVudDogXCJsaW5lYXJHcmFkaWVudFwiLFxuICByYWRpYWxncmFkaWVudDogXCJyYWRpYWxHcmFkaWVudFwiXG59O1xuZnVuY3Rpb24gZ2V0VGFnTmFtZShuKSB7XG4gIGxldCB0YWdOYW1lID0gdGFnTWFwW24udGFnTmFtZV0gPyB0YWdNYXBbbi50YWdOYW1lXSA6IG4udGFnTmFtZTtcbiAgaWYgKHRhZ05hbWUgPT09IFwibGlua1wiICYmIG4uYXR0cmlidXRlcy5fY3NzVGV4dCkge1xuICAgIHRhZ05hbWUgPSBcInN0eWxlXCI7XG4gIH1cbiAgcmV0dXJuIHRhZ05hbWU7XG59XG5mdW5jdGlvbiBhZGFwdENzc0ZvclJlcGxheShjc3NUZXh0LCBjYWNoZSkge1xuICBjb25zdCBjYWNoZWRTdHlsZSA9IGNhY2hlID09IG51bGwgPyB2b2lkIDAgOiBjYWNoZS5zdHlsZXNXaXRoSG92ZXJDbGFzcy5nZXQoY3NzVGV4dCk7XG4gIGlmIChjYWNoZWRTdHlsZSkgcmV0dXJuIGNhY2hlZFN0eWxlO1xuICBjb25zdCBhc3QgPSBwb3N0Y3NzJDEoW1xuICAgIG1lZGlhU2VsZWN0b3JQbHVnaW4sXG4gICAgcHNldWRvQ2xhc3NQbHVnaW5cbiAgXSkucHJvY2Vzcyhjc3NUZXh0KTtcbiAgY29uc3QgcmVzdWx0MiA9IGFzdC5jc3M7XG4gIGNhY2hlID09IG51bGwgPyB2b2lkIDAgOiBjYWNoZS5zdHlsZXNXaXRoSG92ZXJDbGFzcy5zZXQoY3NzVGV4dCwgcmVzdWx0Mik7XG4gIHJldHVybiByZXN1bHQyO1xufVxuZnVuY3Rpb24gY3JlYXRlQ2FjaGUoKSB7XG4gIGNvbnN0IHN0eWxlc1dpdGhIb3ZlckNsYXNzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgcmV0dXJuIHtcbiAgICBzdHlsZXNXaXRoSG92ZXJDbGFzc1xuICB9O1xufVxuZnVuY3Rpb24gYXBwbHlDc3NTcGxpdHMobiwgY3NzVGV4dCwgaGFja0NzcywgY2FjaGUpIHtcbiAgY29uc3QgY2hpbGRUZXh0Tm9kZXMgPSBbXTtcbiAgZm9yIChjb25zdCBzY24gb2Ygbi5jaGlsZE5vZGVzKSB7XG4gICAgaWYgKHNjbi50eXBlID09PSBOb2RlVHlwZS5UZXh0KSB7XG4gICAgICBjaGlsZFRleHROb2Rlcy5wdXNoKHNjbik7XG4gICAgfVxuICB9XG4gIGNvbnN0IGNzc1RleHRTcGxpdHMgPSBjc3NUZXh0LnNwbGl0KFwiLyogcnJfc3BsaXQgKi9cIik7XG4gIHdoaWxlIChjc3NUZXh0U3BsaXRzLmxlbmd0aCA+IDEgJiYgY3NzVGV4dFNwbGl0cy5sZW5ndGggPiBjaGlsZFRleHROb2Rlcy5sZW5ndGgpIHtcbiAgICBjc3NUZXh0U3BsaXRzLnNwbGljZSgtMiwgMiwgY3NzVGV4dFNwbGl0cy5zbGljZSgtMikuam9pbihcIlwiKSk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZFRleHROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoaWxkVGV4dE5vZGUgPSBjaGlsZFRleHROb2Rlc1tpXTtcbiAgICBjb25zdCBjc3NUZXh0U2VjdGlvbiA9IGNzc1RleHRTcGxpdHNbaV07XG4gICAgaWYgKGNoaWxkVGV4dE5vZGUgJiYgY3NzVGV4dFNlY3Rpb24pIHtcbiAgICAgIGNoaWxkVGV4dE5vZGUudGV4dENvbnRlbnQgPSBoYWNrQ3NzID8gYWRhcHRDc3NGb3JSZXBsYXkoY3NzVGV4dFNlY3Rpb24sIGNhY2hlKSA6IGNzc1RleHRTZWN0aW9uO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gYnVpbGRTdHlsZU5vZGUobiwgc3R5bGVFbCwgY3NzVGV4dCwgb3B0aW9ucykge1xuICBjb25zdCB7IGRvYywgaGFja0NzcywgY2FjaGUgfSA9IG9wdGlvbnM7XG4gIGlmIChuLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgYXBwbHlDc3NTcGxpdHMobiwgY3NzVGV4dCwgaGFja0NzcywgY2FjaGUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChoYWNrQ3NzKSB7XG4gICAgICBjc3NUZXh0ID0gYWRhcHRDc3NGb3JSZXBsYXkoY3NzVGV4dCwgY2FjaGUpO1xuICAgIH1cbiAgICBzdHlsZUVsLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVUZXh0Tm9kZShjc3NUZXh0KSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGJ1aWxkTm9kZShuLCBvcHRpb25zKSB7XG4gIHZhciBfYSwgX2I7XG4gIGNvbnN0IHsgZG9jLCBoYWNrQ3NzLCBjYWNoZSB9ID0gb3B0aW9ucztcbiAgc3dpdGNoIChuLnR5cGUpIHtcbiAgICBjYXNlIE5vZGVUeXBlLkRvY3VtZW50OlxuICAgICAgcmV0dXJuIGRvYy5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudChudWxsLCBcIlwiLCBudWxsKTtcbiAgICBjYXNlIE5vZGVUeXBlLkRvY3VtZW50VHlwZTpcbiAgICAgIHJldHVybiBkb2MuaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnRUeXBlKFxuICAgICAgICBuLm5hbWUgfHwgXCJodG1sXCIsXG4gICAgICAgIG4ucHVibGljSWQsXG4gICAgICAgIG4uc3lzdGVtSWRcbiAgICAgICk7XG4gICAgY2FzZSBOb2RlVHlwZS5FbGVtZW50OiB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZ2V0VGFnTmFtZShuKTtcbiAgICAgIGxldCBub2RlMjtcbiAgICAgIGlmIChuLmlzU1ZHKSB7XG4gICAgICAgIG5vZGUyID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHRhZ05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8vIElmIHRoZSB0YWcgbmFtZSBpcyBhIGN1c3RvbSBlbGVtZW50IG5hbWVcbiAgICAgICAgICBuLmlzQ3VzdG9tICYmIC8vIElmIHRoZSBicm93c2VyIHN1cHBvcnRzIGN1c3RvbSBlbGVtZW50c1xuICAgICAgICAgICgoX2EgPSBkb2MuZGVmYXVsdFZpZXcpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jdXN0b21FbGVtZW50cykgJiYgLy8gSWYgdGhlIGN1c3RvbSBlbGVtZW50IGhhc24ndCBiZWVuIGRlZmluZWQgeWV0XG4gICAgICAgICAgIWRvYy5kZWZhdWx0Vmlldy5jdXN0b21FbGVtZW50cy5nZXQobi50YWdOYW1lKVxuICAgICAgICApXG4gICAgICAgICAgZG9jLmRlZmF1bHRWaWV3LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcbiAgICAgICAgICAgIG4udGFnTmFtZSxcbiAgICAgICAgICAgIGNsYXNzIGV4dGVuZHMgZG9jLmRlZmF1bHRWaWV3LkhUTUxFbGVtZW50IHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICBub2RlMiA9IGRvYy5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3BlY2lhbEF0dHJpYnV0ZXMgPSB7fTtcbiAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBuLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobi5hdHRyaWJ1dGVzLCBuYW1lKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCB2YWx1ZSA9IG4uYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgaWYgKHRhZ05hbWUgPT09IFwib3B0aW9uXCIgJiYgbmFtZSA9PT0gXCJzZWxlY3RlZFwiICYmIHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkgdmFsdWUgPSBcIlwiO1xuICAgICAgICBpZiAobmFtZS5zdGFydHNXaXRoKFwicnJfXCIpKSB7XG4gICAgICAgICAgc3BlY2lhbEF0dHJpYnV0ZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSA7XG4gICAgICAgIGVsc2UgaWYgKHRhZ05hbWUgPT09IFwic3R5bGVcIiAmJiBuYW1lID09PSBcIl9jc3NUZXh0XCIpIHtcbiAgICAgICAgICBidWlsZFN0eWxlTm9kZShuLCBub2RlMiwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwidGV4dGFyZWFcIiAmJiBuYW1lID09PSBcInZhbHVlXCIpIHtcbiAgICAgICAgICBub2RlMi5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICBuLmNoaWxkTm9kZXMgPSBbXTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChuLmlzU1ZHICYmIG5hbWUgPT09IFwieGxpbms6aHJlZlwiKSB7XG4gICAgICAgICAgICBub2RlMi5zZXRBdHRyaWJ1dGVOUyhcbiAgICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcIm9ubG9hZFwiIHx8IG5hbWUgPT09IFwib25jbGlja1wiIHx8IG5hbWUuc3Vic3RyaW5nKDAsIDcpID09PSBcIm9ubW91c2VcIikge1xuICAgICAgICAgICAgbm9kZTIuc2V0QXR0cmlidXRlKFwiX1wiICsgbmFtZSwgdmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcIm1ldGFcIiAmJiBuLmF0dHJpYnV0ZXNbXCJodHRwLWVxdWl2XCJdID09PSBcIkNvbnRlbnQtU2VjdXJpdHktUG9saWN5XCIgJiYgbmFtZSA9PT0gXCJjb250ZW50XCIpIHtcbiAgICAgICAgICAgIG5vZGUyLnNldEF0dHJpYnV0ZShcImNzcC1jb250ZW50XCIsIHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcImxpbmtcIiAmJiAobi5hdHRyaWJ1dGVzLnJlbCA9PT0gXCJwcmVsb2FkXCIgfHwgbi5hdHRyaWJ1dGVzLnJlbCA9PT0gXCJtb2R1bGVwcmVsb2FkXCIpICYmIG4uYXR0cmlidXRlcy5hcyA9PT0gXCJzY3JpcHRcIikge1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJsaW5rXCIgJiYgbi5hdHRyaWJ1dGVzLnJlbCA9PT0gXCJwcmVmZXRjaFwiICYmIHR5cGVvZiBuLmF0dHJpYnV0ZXMuaHJlZiA9PT0gXCJzdHJpbmdcIiAmJiBuLmF0dHJpYnV0ZXMuaHJlZi5lbmRzV2l0aChcIi5qc1wiKSkge1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJpbWdcIiAmJiBuLmF0dHJpYnV0ZXMuc3Jjc2V0ICYmIG4uYXR0cmlidXRlcy5ycl9kYXRhVVJMKSB7XG4gICAgICAgICAgICBub2RlMi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgIFwicnJ3ZWItb3JpZ2luYWwtc3Jjc2V0XCIsXG4gICAgICAgICAgICAgIG4uYXR0cmlidXRlcy5zcmNzZXRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUyLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBzcGVjaWFsQXR0cmlidXRlcykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHNwZWNpYWxBdHRyaWJ1dGVzW25hbWVdO1xuICAgICAgICBpZiAodGFnTmFtZSA9PT0gXCJjYW52YXNcIiAmJiBuYW1lID09PSBcInJyX2RhdGFVUkxcIikge1xuICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gbm9kZTIuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGltYWdlLnNyYyA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgaWYgKG5vZGUyLlJSTm9kZVR5cGUpXG4gICAgICAgICAgICBub2RlMi5ycl9kYXRhVVJMID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcImltZ1wiICYmIG5hbWUgPT09IFwicnJfZGF0YVVSTFwiKSB7XG4gICAgICAgICAgY29uc3QgaW1hZ2UgPSBub2RlMjtcbiAgICAgICAgICBpZiAoIWltYWdlLmN1cnJlbnRTcmMuc3RhcnRzV2l0aChcImRhdGE6XCIpKSB7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgIFwicnJ3ZWItb3JpZ2luYWwtc3JjXCIsXG4gICAgICAgICAgICAgIG4uYXR0cmlidXRlcy5zcmNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobmFtZSA9PT0gXCJycl93aWR0aFwiKSB7XG4gICAgICAgICAgbm9kZTIuc3R5bGUud2lkdGggPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwicnJfaGVpZ2h0XCIpIHtcbiAgICAgICAgICBub2RlMi5zdHlsZS5oZWlnaHQgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwicnJfbWVkaWFDdXJyZW50VGltZVwiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIG5vZGUyLmN1cnJlbnRUaW1lID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJycl9tZWRpYVN0YXRlXCIpIHtcbiAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwicGxheWVkXCI6XG4gICAgICAgICAgICAgIG5vZGUyLnBsYXkoKS5jYXRjaCgoZSkgPT4gY29uc29sZS53YXJuKFwibWVkaWEgcGxheWJhY2sgZXJyb3JcIiwgZSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwYXVzZWRcIjpcbiAgICAgICAgICAgICAgbm9kZTIucGF1c2UoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwicnJfbWVkaWFQbGF5YmFja1JhdGVcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBub2RlMi5wbGF5YmFja1JhdGUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInJyX21lZGlhTXV0ZWRcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgbm9kZTIubXV0ZWQgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInJyX21lZGlhTG9vcFwiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICBub2RlMi5sb29wID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJycl9tZWRpYVZvbHVtZVwiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIG5vZGUyLnZvbHVtZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwicnJfb3Blbl9tb2RlXCIpIHtcbiAgICAgICAgICBub2RlMi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInJyX29wZW5fbW9kZVwiLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobi5pc1NoYWRvd0hvc3QpIHtcbiAgICAgICAgaWYgKCFub2RlMi5zaGFkb3dSb290KSB7XG4gICAgICAgICAgbm9kZTIuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSk7XG4gICAgICAgICAgKF9iID0gbi5jaHJvbWF0aWNBZG9wdGVkU3R5bGVzaGVldHMpID09IG51bGwgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKFxuICAgICAgICAgICAgKGNocm9tYXRpY0Fkb3B0ZWRTdHlsZXNoZWV0KSA9PiB7XG4gICAgICAgICAgICAgIHZhciBfYTI7XG4gICAgICAgICAgICAgIGNvbnN0IHN0eWxlU2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgICBzdHlsZVNoZWV0LnJlcGxhY2VTeW5jKGNocm9tYXRpY0Fkb3B0ZWRTdHlsZXNoZWV0KTtcbiAgICAgICAgICAgICAgKF9hMiA9IG5vZGUyLnNoYWRvd1Jvb3QpID09IG51bGwgPyB2b2lkIDAgOiBfYTIuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc3R5bGVTaGVldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aGlsZSAobm9kZTIuc2hhZG93Um9vdC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBub2RlMi5zaGFkb3dSb290LnJlbW92ZUNoaWxkKG5vZGUyLnNoYWRvd1Jvb3QuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZTI7XG4gICAgfVxuICAgIGNhc2UgTm9kZVR5cGUuVGV4dDpcbiAgICAgIGlmIChuLmlzU3R5bGUgJiYgaGFja0Nzcykge1xuICAgICAgICByZXR1cm4gZG9jLmNyZWF0ZVRleHROb2RlKGFkYXB0Q3NzRm9yUmVwbGF5KG4udGV4dENvbnRlbnQsIGNhY2hlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZG9jLmNyZWF0ZVRleHROb2RlKG4udGV4dENvbnRlbnQpO1xuICAgIGNhc2UgTm9kZVR5cGUuQ0RBVEE6XG4gICAgICByZXR1cm4gZG9jLmNyZWF0ZUNEQVRBU2VjdGlvbihuLnRleHRDb250ZW50KTtcbiAgICBjYXNlIE5vZGVUeXBlLkNvbW1lbnQ6XG4gICAgICByZXR1cm4gZG9jLmNyZWF0ZUNvbW1lbnQobi50ZXh0Q29udGVudCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5mdW5jdGlvbiBidWlsZE5vZGVXaXRoU04obiwgb3B0aW9ucykge1xuICBjb25zdCB7XG4gICAgZG9jLFxuICAgIG1pcnJvcixcbiAgICBza2lwQ2hpbGQgPSBmYWxzZSxcbiAgICBoYWNrQ3NzID0gdHJ1ZSxcbiAgICBhZnRlckFwcGVuZCxcbiAgICBjYWNoZVxuICB9ID0gb3B0aW9ucztcbiAgaWYgKG1pcnJvci5oYXMobi5pZCkpIHtcbiAgICBjb25zdCBub2RlSW5NaXJyb3IgPSBtaXJyb3IuZ2V0Tm9kZShuLmlkKTtcbiAgICBjb25zdCBtZXRhID0gbWlycm9yLmdldE1ldGEobm9kZUluTWlycm9yKTtcbiAgICBpZiAoaXNOb2RlTWV0YUVxdWFsKG1ldGEsIG4pKSByZXR1cm4gbWlycm9yLmdldE5vZGUobi5pZCk7XG4gIH1cbiAgbGV0IG5vZGUyID0gYnVpbGROb2RlKG4sIHsgZG9jLCBoYWNrQ3NzLCBjYWNoZSB9KTtcbiAgaWYgKCFub2RlMikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChuLnJvb3RJZCAmJiBtaXJyb3IuZ2V0Tm9kZShuLnJvb3RJZCkgIT09IGRvYykge1xuICAgIG1pcnJvci5yZXBsYWNlKG4ucm9vdElkLCBkb2MpO1xuICB9XG4gIGlmIChuLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50KSB7XG4gICAgZG9jLmNsb3NlKCk7XG4gICAgZG9jLm9wZW4oKTtcbiAgICBpZiAobi5jb21wYXRNb2RlID09PSBcIkJhY2tDb21wYXRcIiAmJiBuLmNoaWxkTm9kZXMgJiYgbi5jaGlsZE5vZGVzWzBdLnR5cGUgIT09IE5vZGVUeXBlLkRvY3VtZW50VHlwZSkge1xuICAgICAgaWYgKG4uY2hpbGROb2Rlc1swXS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50ICYmIFwieG1sbnNcIiBpbiBuLmNoaWxkTm9kZXNbMF0uYXR0cmlidXRlcyAmJiBuLmNoaWxkTm9kZXNbMF0uYXR0cmlidXRlcy54bWxucyA9PT0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIpIHtcbiAgICAgICAgZG9jLndyaXRlKFxuICAgICAgICAgICc8IURPQ1RZUEUgaHRtbCBQVUJMSUMgXCItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTlwiIFwiXCI+J1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jLndyaXRlKFxuICAgICAgICAgICc8IURPQ1RZUEUgaHRtbCBQVUJMSUMgXCItLy9XM0MvL0RURCBIVE1MIDQuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJcIj4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIG5vZGUyID0gZG9jO1xuICB9XG4gIG1pcnJvci5hZGQobm9kZTIsIG4pO1xuICBpZiAoKG4udHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQgfHwgbi50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSAmJiAhc2tpcENoaWxkKSB7XG4gICAgZm9yIChjb25zdCBjaGlsZE4gb2Ygbi5jaGlsZE5vZGVzKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBidWlsZE5vZGVXaXRoU04oY2hpbGROLCB7XG4gICAgICAgIGRvYyxcbiAgICAgICAgbWlycm9yLFxuICAgICAgICBza2lwQ2hpbGQ6IGZhbHNlLFxuICAgICAgICBoYWNrQ3NzLFxuICAgICAgICBhZnRlckFwcGVuZCxcbiAgICAgICAgY2FjaGVcbiAgICAgIH0pO1xuICAgICAgaWYgKCFjaGlsZE5vZGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiRmFpbGVkIHRvIHJlYnVpbGRcIiwgY2hpbGROKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoY2hpbGROLmlzU2hhZG93ICYmIGlzRWxlbWVudChub2RlMikgJiYgbm9kZTIuc2hhZG93Um9vdCkge1xuICAgICAgICBub2RlMi5zaGFkb3dSb290LmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICB9IGVsc2UgaWYgKG4udHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQgJiYgY2hpbGROLnR5cGUgPT0gTm9kZVR5cGUuRWxlbWVudCkge1xuICAgICAgICBjb25zdCBodG1sRWxlbWVudCA9IGNoaWxkTm9kZTtcbiAgICAgICAgbGV0IGJvZHkgPSBudWxsO1xuICAgICAgICBodG1sRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgaWYgKGNoaWxkLm5vZGVOYW1lID09PSBcIkJPRFlcIikgYm9keSA9IGNoaWxkO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICBodG1sRWxlbWVudC5yZW1vdmVDaGlsZChib2R5KTtcbiAgICAgICAgICBub2RlMi5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xuICAgICAgICAgIGh0bWxFbGVtZW50LmFwcGVuZENoaWxkKGJvZHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUyLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUyLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICB9XG4gICAgICBpZiAoYWZ0ZXJBcHBlbmQpIHtcbiAgICAgICAgYWZ0ZXJBcHBlbmQoY2hpbGROb2RlLCBjaGlsZE4uaWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbm9kZTI7XG59XG5mdW5jdGlvbiB2aXNpdChtaXJyb3IsIG9uVmlzaXQpIHtcbiAgZnVuY3Rpb24gd2Fsayhub2RlMikge1xuICAgIG9uVmlzaXQobm9kZTIpO1xuICB9XG4gIGZvciAoY29uc3QgaWQgb2YgbWlycm9yLmdldElkcygpKSB7XG4gICAgaWYgKG1pcnJvci5oYXMoaWQpKSB7XG4gICAgICB3YWxrKG1pcnJvci5nZXROb2RlKGlkKSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBoYW5kbGVTY3JvbGwobm9kZTIsIG1pcnJvcikge1xuICBjb25zdCBuID0gbWlycm9yLmdldE1ldGEobm9kZTIpO1xuICBpZiAoKG4gPT0gbnVsbCA/IHZvaWQgMCA6IG4udHlwZSkgIT09IE5vZGVUeXBlLkVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZWwgPSBub2RlMjtcbiAgZm9yIChjb25zdCBuYW1lIGluIG4uYXR0cmlidXRlcykge1xuICAgIGlmICghKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLmF0dHJpYnV0ZXMsIG5hbWUpICYmIG5hbWUuc3RhcnRzV2l0aChcInJyX1wiKSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IG4uYXR0cmlidXRlc1tuYW1lXTtcbiAgICBpZiAobmFtZSA9PT0gXCJycl9zY3JvbGxMZWZ0XCIpIHtcbiAgICAgIGVsLnNjcm9sbExlZnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKG5hbWUgPT09IFwicnJfc2Nyb2xsVG9wXCIpIHtcbiAgICAgIGVsLnNjcm9sbFRvcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gcmVidWlsZChuLCBvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBkb2MsXG4gICAgb25WaXNpdCxcbiAgICBoYWNrQ3NzID0gdHJ1ZSxcbiAgICBhZnRlckFwcGVuZCxcbiAgICBjYWNoZSxcbiAgICBtaXJyb3IgPSBuZXcgTWlycm9yKClcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IG5vZGUyID0gYnVpbGROb2RlV2l0aFNOKG4sIHtcbiAgICBkb2MsXG4gICAgbWlycm9yLFxuICAgIHNraXBDaGlsZDogZmFsc2UsXG4gICAgaGFja0NzcyxcbiAgICBhZnRlckFwcGVuZCxcbiAgICBjYWNoZVxuICB9KTtcbiAgdmlzaXQobWlycm9yLCAodmlzaXRlZE5vZGUpID0+IHtcbiAgICBpZiAob25WaXNpdCkge1xuICAgICAgb25WaXNpdCh2aXNpdGVkTm9kZSk7XG4gICAgfVxuICAgIGhhbmRsZVNjcm9sbCh2aXNpdGVkTm9kZSwgbWlycm9yKTtcbiAgfSk7XG4gIHJldHVybiBub2RlMjtcbn1cbmV4cG9ydCB7XG4gIElHTk9SRURfTk9ERSxcbiAgTWlycm9yLFxuICBOb2RlVHlwZSxcbiAgYWJzb2x1dGlmeVVSTHMsXG4gIGFkYXB0Q3NzRm9yUmVwbGF5LFxuICBidWlsZE5vZGVXaXRoU04sXG4gIGNsYXNzTWF0Y2hlc1JlZ2V4LFxuICBjbGVhbnVwU25hcHNob3QsXG4gIGNyZWF0ZUNhY2hlLFxuICBjcmVhdGVNaXJyb3IsXG4gIGVzY2FwZUltcG9ydFN0YXRlbWVudCxcbiAgZXh0cmFjdEZpbGVFeHRlbnNpb24sXG4gIGZpeFNhZmFyaUNvbG9ucyxcbiAgZ2VuSWQsXG4gIGdldElucHV0VHlwZSxcbiAgaWdub3JlQXR0cmlidXRlLFxuICBpczJEQ2FudmFzQmxhbmssXG4gIGlzQ1NTSW1wb3J0UnVsZSxcbiAgaXNDU1NTdHlsZVJ1bGUsXG4gIGlzRWxlbWVudCxcbiAgaXNOYXRpdmVTaGFkb3dEb20sXG4gIGlzTm9kZU1ldGFFcXVhbCxcbiAgaXNTaGFkb3dSb290LFxuICBtYXJrQ3NzU3BsaXRzLFxuICBtYXNrSW5wdXRWYWx1ZSxcbiAgbmVlZE1hc2tpbmdUZXh0LFxuICBub3JtYWxpemVDc3NTdHJpbmcsXG4gIHJlYnVpbGQsXG4gIHNlcmlhbGl6ZU5vZGVXaXRoSWQsXG4gIHNuYXBzaG90LFxuICBzcGxpdENzc1RleHQsXG4gIHN0cmluZ2lmeVJ1bGUsXG4gIHN0cmluZ2lmeVN0eWxlc2hlZXQsXG4gIHRvTG93ZXJDYXNlLFxuICB0cmFuc2Zvcm1BdHRyaWJ1dGUsXG4gIHZpc2l0U25hcHNob3Rcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ycndlYi1zbmFwc2hvdC5qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gVGhpcyBleGFtcGxlIHN1cHBvcnQvZTJlLnRzIGlzIHByb2Nlc3NlZCBhbmRcbi8vIGxvYWRlZCBhdXRvbWF0aWNhbGx5IGJlZm9yZSB5b3VyIHRlc3QgZmlsZXMuXG4vL1xuLy8gVGhpcyBpcyBhIGdyZWF0IHBsYWNlIHRvIHB1dCBnbG9iYWwgY29uZmlndXJhdGlvbiBhbmRcbi8vIGJlaGF2aW9yIHRoYXQgbW9kaWZpZXMgQ3lwcmVzcy5cbi8vXG4vLyBZb3UgY2FuIGNoYW5nZSB0aGUgbG9jYXRpb24gb2YgdGhpcyBmaWxlIG9yIHR1cm4gb2ZmXG4vLyBhdXRvbWF0aWNhbGx5IHNlcnZpbmcgc3VwcG9ydCBmaWxlcyB3aXRoIHRoZVxuLy8gJ3N1cHBvcnRGaWxlJyBjb25maWd1cmF0aW9uIG9wdGlvbi5cbi8vXG4vLyBZb3UgY2FuIHJlYWQgbW9yZSBoZXJlOlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2NvbmZpZ3VyYXRpb25cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBJbXBvcnQgY29tbWFuZHMuanMgdXNpbmcgRVMyMDE1IHN5bnRheDpcbmltcG9ydCBcIi4vY29tbWFuZHNcIjtcbi8vIEFsdGVybmF0aXZlbHkgeW91IGNhbiB1c2UgQ29tbW9uSlMgc3ludGF4OlxuLy8gcmVxdWlyZSgnLi9jb21tYW5kcycpXG4vLyBjeXByZXNzL3N1cHBvcnQvZTJlLmpzXG5pbXBvcnQgXCJAY2hyb21hdGljLWNvbS9jeXByZXNzL3N1cHBvcnRcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpUSmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVpUSmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxEaEVRVUU0UkR0QlFVTTVSQ3dyUTBGQkswTTdRVUZETDBNc0swTkJRU3RETzBGQlF5OURMRVZCUVVVN1FVRkRSaXgzUkVGQmQwUTdRVUZEZUVRc2EwTkJRV3RETzBGQlEyeERMRVZCUVVVN1FVRkRSaXgxUkVGQmRVUTdRVUZEZGtRc0swTkJRU3RETzBGQlF5OURMSE5EUVVGelF6dEJRVU4wUXl4RlFVRkZPMEZCUTBZc01FSkJRVEJDTzBGQlF6RkNMSE5EUVVGelF6dEJRVU4wUXl3NFJFRkJPRVE3UVVGRk9VUXNNRU5CUVRCRE8wRkJRekZETEU5QlFVOHNXVUZCV1N4RFFVRkRPMEZCUlhCQ0xEWkRRVUUyUXp0QlFVTTNReXgzUWtGQmQwSTdRVUZEZUVJc2VVSkJRWGxDTzBGQlEzcENMRTlCUVU4c1owTkJRV2RETEVOQlFVTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THlBcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1THk4Z1ZHaHBjeUJsZUdGdGNHeGxJSE4xY0hCdmNuUXZaVEpsTG5SeklHbHpJSEJ5YjJObGMzTmxaQ0JoYm1SY2JpOHZJR3h2WVdSbFpDQmhkWFJ2YldGMGFXTmhiR3g1SUdKbFptOXlaU0I1YjNWeUlIUmxjM1FnWm1sc1pYTXVYRzR2TDF4dUx5OGdWR2hwY3lCcGN5QmhJR2R5WldGMElIQnNZV05sSUhSdklIQjFkQ0JuYkc5aVlXd2dZMjl1Wm1sbmRYSmhkR2x2YmlCaGJtUmNiaTh2SUdKbGFHRjJhVzl5SUhSb1lYUWdiVzlrYVdacFpYTWdRM2x3Y21WemN5NWNiaTh2WEc0dkx5QlpiM1VnWTJGdUlHTm9ZVzVuWlNCMGFHVWdiRzlqWVhScGIyNGdiMllnZEdocGN5Qm1hV3hsSUc5eUlIUjFjbTRnYjJabVhHNHZMeUJoZFhSdmJXRjBhV05oYkd4NUlITmxjblpwYm1jZ2MzVndjRzl5ZENCbWFXeGxjeUIzYVhSb0lIUm9aVnh1THk4Z0ozTjFjSEJ2Y25SR2FXeGxKeUJqYjI1bWFXZDFjbUYwYVc5dUlHOXdkR2x2Ymk1Y2JpOHZYRzR2THlCWmIzVWdZMkZ1SUhKbFlXUWdiVzl5WlNCb1pYSmxPbHh1THk4Z2FIUjBjSE02THk5dmJpNWplWEJ5WlhOekxtbHZMMk52Ym1acFozVnlZWFJwYjI1Y2JpOHZJQ29xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhHNWNiaTh2SUVsdGNHOXlkQ0JqYjIxdFlXNWtjeTVxY3lCMWMybHVaeUJGVXpJd01UVWdjM2x1ZEdGNE9seHVhVzF3YjNKMElGd2lMaTlqYjIxdFlXNWtjMXdpTzF4dVhHNHZMeUJCYkhSbGNtNWhkR2wyWld4NUlIbHZkU0JqWVc0Z2RYTmxJRU52YlcxdmJrcFRJSE41Ym5SaGVEcGNiaTh2SUhKbGNYVnBjbVVvSnk0dlkyOXRiV0Z1WkhNbktWeHVMeThnWTNsd2NtVnpjeTl6ZFhCd2IzSjBMMlV5WlM1cWMxeHVhVzF3YjNKMElGd2lRR05vY205dFlYUnBZeTFqYjIwdlkzbHdjbVZ6Y3k5emRYQndiM0owWENJN1hHNGlYWDA9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9