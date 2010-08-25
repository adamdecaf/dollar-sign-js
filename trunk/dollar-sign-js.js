/**
 * Dollar Sign JavaScript
 * Adam Shannon
 * 2010-08-22
 */
 
// Debating on using this
// "use strict";

// Define some loop counter variables.
var i = i || 0;
var k = k || 0;

// Extra features that come for just using this script!!
	// Array forEach()
	Array.prototype.forEach = function (fn) {
	   for (var i = 0; i < this.length; i++) {
		 fn(this[i]);
	   }
	};
	
	// Array indexOf()
	
	// Array lastIndexOf()
	
	// Array only()
	// Run a function on elements whose value returns True on Expression
	Array.prototype.only = function (Expression, ifTrue) {
		this.foreach(function (value) {
			if (Expression(value) === true) {
				ifTrue(value);
			}
		});
	};
	
	// Date now()
	Date.prototype.now = function () {
		return (new Date()).getTime();
	};

	// Element additions
	HTMLElement.prototype.innerText = function (newText) {
		if (newText !== undefined) {
			this.innerHTML = document.createTextNode(newText);
		} else {
			return this.innerHTML;
		}
	};
	
	// String rtrim()
	
	// String ltrim()
	
	// String trim()
	
// Now for $js
(function () {

var $js = {
	
	/**
	 * mode - What mode you're wanting to work with
	 * experimental things will break and not always
	 * work!
	 *  - experimental
	 *  - user
	 */
	mode: 'experimental',

	// This is a [manual] cache system, which can be used 
	cache: {
		functions: ["{run: function (){ console.log('hi!');} }"],
		runFunctions: function () {
			for (i = 0; i < $js.cache.functions.length; i++) {
				var fn = JSON.parse($js.cache.functions[i]);
					console.log(fn);
			}
		}
	},
	
	isReady: false,
	ready: function () {
		// Run the cached functions
		//$js.cache.runFunctions();
		
		$js.isReady = true;
	},

	// Browser Detection
	
	// Canvas Handling
	
	// Cookie Handling
	
	/**
	 * The Dom (Document Object Model) object
	 * This will handel everything related to the DOM
	 * anything with elements goes here.
	 */
	
	// Device API
	
	// Encrypting
	
	// Event handling
	
	// File API
	
	// Form handling
	
	// Hashing
	
	// JSON parsing
	
	// Logging support
	log: function (msg) {
		if (console !== undefined) {
			console.log(msg);
		} else if (dump !== undefined) {
			dump('>>>' + msg + '\n');
		} else {
			if ($js.mode === 'experimental') {
				alert(msg);
			} else {
				// Append an element onto the bottom of the page
				// and hope that the user can read the message.
				// Oh, the element should be hidden (or use a 
				// optioned style).
			}
		} 
			
	},
	
	// Time (managment / parsing / converting)
	
	// Sandboxing / Workers
	
	// Serializing
	
	// Support (is there support for XMLHttpRequest...)
	
	// Storage (Local/Session)
	
	// String support
	
	// XMLHttpRequest()
	xhr: function (url, options) {
	
	}
	
	// XML parsing
		
};

	// Append the $js object on at the end.
	window.$js = $js;

	window.onload = function () {
		$js.ready();	
	};

})();
