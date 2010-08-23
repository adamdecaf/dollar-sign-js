/**
 * Dollar Sign JavaScript
 * Adam Shannon
 * 2010-08-22
 */
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
	
	// Array foreach
	
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
	
	// Cross browser event handling
	
	// File API
	
	// Cross browser form handling
	
	// Hashing
	
	// JSON parsing
	
	// Cross browser logging support
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
			
	}
	
	// Time (managment / parsing / converting)
	
	// Sandboxing / Workers
	
	// Serializing
	
	// Support (is there support for XMLHttpRequest...)
	
	// Storage (Local/Session)
	
	// Cross browser string support
	
	// Cross browser resource fetching
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
