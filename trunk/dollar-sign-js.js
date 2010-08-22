/**
 * Dollar Sign JavaScript
 * Adam Shannon
 * 2010-08-22
 */
(function () {

$js = {
	i: 0,
	k: 0,

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
	}
		
};

// Append the $js object on at the end.
window.$js = $js;

window.onload = function () {
	$js.ready();	
}
})();
