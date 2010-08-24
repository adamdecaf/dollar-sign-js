/**
 * Dollar Sign JavaScript
 * Adam Shannon
 * 2010-08-22
 */

// Extra features that come for just using this script!!
	// Array foreach
	Array.prototype.forEach = function (fn) {
	   for (var i = 0; i < this.length; i++) {
		 fn(this[i]);
	   }
	};

	// Element additions
	HTMLElement.prototype.innerText = function (newText) {
		if (newText !== undefined)
			this.innerHTML = document.createTextNode(untrusted_string);
		else
			return this.innerHTML;
	}
	
	// Make all elements editable by default (even if it's not supported by the browser).
	HTMLElement.prototype.editable = true;
	
	if (Element.prototype.contentEditable === undefined) {
		Element.prototype.onmousedown = (function (elm) {
			// Change the element to a textarea the same dimensions
			var textarea = document.createElement('textarea');
				textarea.style.height = elm.style.height || '250px';
				textarea.style.width  = elm.style.width  || '500px';
				textarea.value = elm.innerHTML.replace('<br />', '\n');
				
			// Take the elements after the element
			elm.thisIsAMarker = true;
			var 
				elmsBefore = [],
				elmsAfter = [];
				
			for (i = 0; i < elm.parent.childNodes.length; i++) {
				elmsBefore[i] = elm.parent.childNodes(i);
			}
			
				console.log(elmsBefore);
				
		})(this);
	}
	
// Now for $js
(function () {

$js = {
	i: 0,
	k: 0,
	
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
}
})();
