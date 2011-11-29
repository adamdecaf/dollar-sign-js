/**
 * Dollar Sign JS
 * dollar-sign.js
 * Adam Shannon
 * 2009-12-08
 *
 * Copyright (c) 2009 Adam Shannon & Decaf Productions
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

// Set the global usage.
var $ = {};

	// Set a common use function
	window.$ = function (value, position) {
		return $.dom.get(value, position);
	};

// Declare a new date object.
var d = new Date();

function format(value) {
	return (value < 10) ? '0' + value.toString() : value;
}

	// Ok, we have to check to see if everything is formatted correctly.
	if (d.getSeconds() < 10) { 
		d.setSeconds('0' + d.getSeconds().toString()); 
	}
	if (d.getMinutes() < 10) { 
		d.setMinutes('0' + d.getMinutes().toString()); 
	}
	if (d.getHours() < 10) { 
		d.setHours('0' + d.getMilliseconds().toString());
	}
	if (d.getDate() < 10) {
		d.setDate('0' + d.getDate().toString());
	}
	if (d.getMonth() < 10) {
		d.setMonth('0' + d.getMonth().toString());
	}
	
$.date = {
	
	// The values set when d is assigned to new Date();
	// They're current, but not 'fresh'.
	'ms': d.getMilliseconds(),
	'milliseconds': d.getMilliseconds(),
	
	's': format(d.getSeconds()),
	'seconds': format(d.getSeconds()),
	
	'm': format(d.getMinutes()),
	'minutes': format(d.getMinutes()),
	
	'h': format(d.getHours()),
	'hours': format(d.getHours()),

	'day': format(d.getDate()),
	'day_numb': d.getDay(),
	
	'month': format(d.getMonth()),
	'year': d.getFullYear(),
	
	'unix': parseInt((d.getTime()) / 100, 10),
	'unix_ms': d.getTime()
};

$.dom = {
	
	// This is a 'get' function, it will grab a DOM element based
	// on the given paramaters of getting the element via an id,
	// class or tag name.
	// It then returns the elemnt as a DOM object.
	'get': function (value, position) {
		// Remember the four types of selection
		// class  - .classname
		// id     - #id
		// name   - name
		// tag    - <tag>
		
		// Declare the position
		var pos = 0;
		
		// Check to see if there is a specific position to return.
		// If there is no value then an array will be sent back.
		if (position !== undefined) {
			
			// If it's a numeric value
			if ((/^([0-9])$/g).test(position)) {
			
				// Set the position to the numeric position
				pos = position;
				
			} else {
				
				// Change a value like second to 2.
				if (typeof position === 'string') {
					switch (position) {
						case 'first':   pos = 0; break;
						case 'second':  pos = 1; break;
						case 'third':   pos = 2; break;
						case 'fourth':  pos = 3; break;
						case 'fifth':   pos = 4; break;
						case 'sixth':   pos = 5; break;
						case 'seventh': pos = 6; break;
						case 'eighth':  pos = 7; break;
						case 'ninth':   pos = 8; break;
						case 'tenth':   pos = 9; break;
						default: 		pos = 0; break;
					}
				}
				
			}
		}
		
		// Decide what type of result(s) to return.
		if ((/^(\.)/).test(value)) {
			// Return an array by the class arrtibute
			if (pos !== undefined) {
				return document.getElementsByClassName(value.substr(1))[pos];
			} else {
				return document.getElementsByClassName(value.substr(1));
			}
			
		} else if ((/^#/).test(value)) {
			// Return a single element
			return document.getElementById(value.substr(1));
			
		} else if ((/^(<)/) && (/(>)$/).test(value)) {
			// Return an array by the tag name
			if (pos !== undefined) {
				return document.getElementsByTagName(value.substr(1).substr(0, value.length - 2))[pos];
			} else {
				return document.getElementsByTagName(value.substr(1).substr(0, value.length - 2));
			}
			
		} else {
			// Return an array by the name attribute
			if (pos !== undefined) {
				return document.getElementsByName(value)[pos];
			} else {
				return document.getElementsByName(value);
			}
			
		}
		
	},
	
	// This function will create elements, you simply give it the 
	// (x)HTML/XML tag that you want and it will create it and send
	// you back the element in the form of an object.
	'create': function (type) {
		return document.createElement(type);
	},
	
	// This function will append an element onto an existing element
	// as a child node.
	'append': function(elm, tag) {
		return tag.appendChild(elm);
	}
	
};

// Keyboard Shortcuts
$.key = function (e) {
	
	// The list of keys
	var keys = [];
		keys[8] = 'Backspace';
		keys[9] = 'Tab';
		keys[13] = 'Enter';
		keys[16] = 'Shift';
		keys[17] = 'Ctlr';
		keys[18] = 'Alt';
		keys[19] = 'Pause';
		keys[20] = 'Capslock';
		keys[27] = 'Esc';
		keys[32] = 'Space';
		keys[33] = 'Page Up';
		keys[34] = 'Page Down';
		keys[35] = 'End';
		keys[36] = 'Home';
		keys[37] = 'Left Arrow';
		keys[38] = 'Up Arrow';
		keys[39] = 'Right Arrow';
		keys[40] = 'Down Arrow';
		keys[44] = 'Print Screen';
		keys[45] = 'Insert';
		keys[46] = 'Delete';
		keys[48] = '0';
		keys[49] = '1';
		keys[50] = '2';
		keys[51] = '3';
		keys[52] = '4';
		keys[53] = '5';
		keys[54] = '6';
		keys[55] = '7';
		keys[56] = '8';
		keys[57] = '9';
		keys[65] = 'a';
		keys[66] = 'b';
		keys[67] = 'c';
		keys[68] = 'd';
		keys[69] = 'e';
		keys[70] = 'f';
		keys[71] = 'g';
		keys[72] = 'h';
		keys[73] = 'i';
		keys[74] = 'j';
		keys[75] = 'k';
		keys[76] = 'l';
		keys[77] = 'm';
		keys[78] = 'n';
		keys[79] = 'o';
		keys[80] = 'p';
		keys[81] = 'q';
		keys[82] = 'r';
		keys[83] = 's';
		keys[84] = 't';
		keys[85] = 'u';
		keys[86] = 'v';
		keys[87] = 'w';
		keys[88] = 'x';
		keys[89] = 'y';
		keys[90] = 'z';
		keys[96] = '0 (numpad)';
		keys[97] = '1 (numpad)';
		keys[98] = '2 (numpad)';
		keys[99] = '3 (numpad)';
		keys[100] = '4 (numpad)';
		keys[101] = '5 (numpad)';
		keys[102] = '6 (numpad)';
		keys[103] = '7 (numpad)';
		keys[104] = '8 (numpad)';
		keys[105] = '9 (numpad)';
		keys[106] = '*';
		keys[107] = '+';
		keys[109] = '-';
		keys[110] = '.';
		keys[111] = '/';
		keys[112] = 'F1';
		keys[113] = 'F2';
		keys[114] = 'F3';
		keys[115] = 'F4';
		keys[116] = 'F5';
		keys[117] = 'F6';
		keys[118] = 'F7';
		keys[119] = 'F8';
		keys[120] = 'F9';
		keys[121] = 'F10';
		keys[122] = 'F11';
		keys[123] = 'F12';
		keys[144] = 'Num Lock';
		keys[145] = 'Scroll Lock';
		keys[186] = ';';
		keys[187] = '=';
		keys[188] = 'Comma';
		keys[189] = '-';
		keys[190] = '.';
		keys[191] = '/';
		keys[192] = '`';
		keys[219] = '[';
		keys[220] = '\\';
		keys[221] = ']';
		keys[222] = '\'';

	// Listen for the keypress
		return keys[e.which];
};


// A lot of the credit for the actual code is given to 
// http://doctype.googlecode.com/svn/trunk/goog/math/math.js
// Some of it I've adapted, but the ideas were gathered from here.
 
$.math = {
	// Declare some constants.
	'e': 2.718281828459,
	'pi': 3.14159265358979,
	'phi': 1.61803398874989,
	'sqrt_2': 1.414213562373,
	'sqrt_3': 1.732050807568,
	'sqrt_5': 2.236067977499,
	
	// Add all of the numbers and return the result.
	'sum': function (numbs) {
		var 
			length = numbs.length,
			total = 0,
			n = 0;
			
		while(n < length) {
			total += numbs[n++];
		}
		
		return total;
	},
	
	// Subtract
	'subtract': function (numbs) {
		var 
			length = numbs.length,
			total = 0,
			n = 0;
			
		while(n < length) {
			total -= numbs[n++];
		}
		
		return total;
	},
	
	// Find the average of the numbers given.
	'average': function (numbs) {
		var 
			total = this.sum(numbs),
			count = numbs.length;
			
		return total / count;
	},
	
	// Multiply all of the numbers and return the result.
	'multiply': function (numbs) {
		var 
			length = numbs.length,
			total = 1,
			n = 0;
			
		while(n < length) {
			total *= numbs[n++];
		}
		
		return total;
	},
	
	// Divide
	'divide': function (numbs) {
		var 
			length = numbs.length,
			total = numbs[0],
			n = 1;
			
		while(n < length) {
			total /= numbs[n++];
		}
		
		return total;
	},
	
	// Produce a random number between these two values.
	// The amount is then truncated to the amount of decimal
	// places wanted.
	// Just a note, this function is a Pseudorandom Number Generator
	// this is not a TRNG, so it's not specifically strong enough
	// for cryptographic usage.
	'random': function (min, max, places) {
		// Make places an optional variable.
		if (places === undefined) {
			places = places || 5;
		}
		
		var 
			result = (min + Math.random() * (max - min)).toString(),
			whole_numbs = result.indexOf('.'),
			part_one = result.substr(0, whole_numbs),
			part_two = result.substr(whole_numbs + 2);
			
			// Ok, now that we have separated the two numbers,
			// so we can truncate part_two.
			if (places === 0) {
				return parseInt(part_one, 10);
			} else {
				return parseFloat(part_one + '.' + part_two.substr(0, places), 10);
			}
	},
	
	// This function will secure a value between a min and a max.
	// If the number is between the two bounds then it will return that number.
	'clamp': function (value, min, max) {
		return Math.min(Math.max(value, max), min);
	},
	
	// Javascript's modulus operation returns the sign of the remainder from
	// the equation a / b.  So, this removes any sign from the amount.
	'mod': function (a, b) {
		var d = a % b;
		return ((d * b) < 0) ? d + b : d;
	},
	
	// Javascript uses the IEEE standard for floating point numbers, this means
	// that 5.21 + 3.4112 is often represented as 8.621200000000001.
	// This checks to see if the two values are equal to a given boundry.
	'equal': function (a, b, bounds) {
		return Math.abs(a - b) <= bounds;
	},
	
	// This will return true if the given number is greator than 0.
	'positive': function (value) {
		return (value >= 0) ? true : false;
	},
	
	// Return the absolute value of a number.
	'abs': function (a) {
		return (a < 0) ? (-1) * a : a;
	},
	
	// The six trig functions
	// First we need to change between degrees and radians
	'deg': function (r) {
		return r * this.pi / 180;
	}, 
	
	'rad': function (d) {
		return d * 180 / this.pi;
	},
	
	'sin': function (a) {
		return Math.sin(a);
	},
	
	'cos': function (a) {
		return Math.cos(a);
	},
	
	'tan': function (a) {
		return this.sin(a) / this.cos(a);
	},
	
	'csc': function (a) {
		return 1 / this.sin(a);
	},
	
	'sec': function (a) {
		return 1 / this.cos(a);
	},
	
	'cot': function (a) {
		return this.cos(a) / this.sin(a);
	},
	
	// The natural log
	'ln': function (a) {
		return Math.log(a);
	},
	
	'pow': function (a, b) {
		return Math.pow(a, b);
	},
	
	// Min and max
	'min': function (numbs) {
		var 
			min = numbs[0],
			n = 0,
			count = numbs.length;
		
		for (n = 0; n < count; n++) {
			if (numbs[n] < min) {
				min = numbs[n];
			}
		}
		
		return min;
	},
	
	'max': function (numbs) {
		var 
			max = numbs[0],
			n = 0,
			count = numbs.length;
		
		for (n = 0; n < count; n++) {
			if (numbs[n] > max) {
				max = numbs[n];
			}
		}
		
		return max;
	},
	
	'truncate': function(value) {
		return value.toString().split(/\./, 1)[0];
	}
	
};

// Simple regex object
$.regex = {
	'check': function (string, type) {
	// Set up the regular expressions
		var
			alpha = new RegExp(/^([a-z]+)$/ig),
			not_alpha = new RegExp(/^([^a-z]+)$/ig),
			
			lowercase = new RegExp(/^([a-z]+)$/g),
			uppercase = new RegExp(/^([A-Z]+)$/g),
			
			numeric = new RegExp(/^([0-9]+)$/g),
			not_numeric = new RegExp(/^([^0-9]+)$/g),
			
			alpha_numeric = new RegExp(/^([a-z0-9]+)$/ig),
			not_alpha_numeric = new RegExp(/^([^a-z0-9]+)$/ig),
			
			phone_number_us = new RegExp(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/g),
			phone_number_world = new RegExp(/^\+?[0-9]{1,2}\s[0-9]{3}-[0-9]{3}-[0-9]{4}$/g),
			
			uri = new RegExp(/^(https?:\/\/)?([a-z0-9]{0,20}\.)?([a-z0-9]{2,32}\.[a-z]{2,5}\/?)+(\/[a-z0-9\.]\/?)?$/ig),
			uri_secure = new RegExp(/^(https:\/\/)?([a-z0-9]{0,20}\.)?([a-z0-9]{2,32}\.[a-z]{2,5}\/?)+(\/[a-z0-9\.]\/?)?$/ig),
			ftp = new RegExp(/^(ftp:\/\/)?([a-z0-9]{0,20}\.)?[a-z0-9]{2,32}\.[a-z]{2,5}\/?/ig),
			
			ip_v4 = new RegExp(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/g),
			ip_v6 = new RegExp(/^([0-9a-f]{1,4}:)?([0-9a-f]{1,4}:)?([0-9a-f]{1,4}:)?([0-9a-f]{1,4}:)?([0-9a-f]{1,4}:)?[0-9a-f]{1,4}:[0-9a-f]{1,4}:[0-9a-f]{1,4}$/ig);
			
		// Now that we have some basic regex expressions, we can check
		// them against the string.
		var regex;
		switch (type) {
			case 'alpha': regex = alpha; break;
			case 'not_alpha': regex = not_alpha; break;
			
			case 'lowercase': regex = lowercase; break;
			case 'uppercase': regex = uppercase; break;
			
			case 'numeric': regex = numeric; break;
			case 'not_numeric': regex = not_numeric; break;
			
			case 'alpha_numeric': regex = alpha_numeric; break;
			case 'not_alpha_numeric': regex = not_alpha_numeric; break;
			
			case 'phone_us': regex = phone_number_us; break;
			case 'phone_world': regex = phone_number_world; break;
			
			case 'url': regex = uri; break;
			case 'uri': regex = uri; break;
			
			case 'url_secure': regex = uri_secure; break;
			case 'uri_secure': regex = uri_secure; break;
			
			case 'ftp': regex = ftp; break;
			
			case 'ip': regex = ip_v4; break;
			case 'ipv6': regex = ip_v6; break;
			
			default: regex = alpha; break;
		}
		
		return (string.match(regex)) ? true : false;
	}
};

// Localstorage object
$.storage = {
	// Set a new item
	'set': function (key, value, type) {
		if (type === undefined || type === 'local') {
			window.localStorage.setItem(key, value);
		} else {
			window.sessionStorage.setItem(key, value);
		}
	},
	
	// Get an item
	'get': function (key, type) {
		if (type === undefined || type === 'local') {
			return window.localStorage.getItem(key);
		} else {
			return window.sessionStorage.getItem(key);
		}
	},
	
	// Return all items stored
	'all': function (type) {
		// Declare some stuff.
		var n = 0, items = [], count = 0;
	
		if (type === undefined || type === 'local') {
			
			// Return all stored (key, value) pairs
			count = this.count('local');
			
			while (n < count) {
				items[n++] = this.get(this.key(n), 'local');
			}
			
			// Send the array back
			return items;
			
		} else {
		
			// Return all stored (key, value) pairs
			count = this.count('session');
			
			while (n < count) {
				items[n++] = this.get(this.key(n), 'session');
			}
			
			// Send the array back
			return items;
		}
	},
	
	// Remove an item
	'remove': function (key, type) {
		if (type === undefined || type === 'local') {
			window.localStorage.removeItem(key);
		} else {
			window.sessionStorage.removeItem(key);
		}
	},
	
	// Clear all items
	'clear': function (type) {
		if (type === undefined || type === 'local') {
			window.localStorage.clear();
		} else {
			window.sessionStorage.clear();
		}
	},
	
	// Return the count of items
	'count': function (type) {
		if (type === undefined || type === 'local') {
			return window.localStorage.length;
		} else {
			return window.sessionStorage.length;
		}
	},
	
	// Get the name of the key at position x.
	'key': function (index, type) {
		if (type === undefined || type === 'local') {
			return window.localStorage.key(index);
		} else {
			return window.sessionStorage.key(index);
		}
	}
	
};

// Credit given to for the ideas behind the code here.
// http://doctype.googlecode.com/svn/trunk/goog/string/string.js

$.string = {
	// Some basic string functions
	'starts_with': function (phrase, string) {
		return string.indexOf(phrase) === 0;
	},
	
	'ends_with': function (phrase, string) {
		var length = string.length - phrase.length;
		return string.indexOf(phrase) === length;
	},
	
	'whitespace': function (string) {
		return string.replace(/[\s]/g, ' ');
	},
	
	'breaking_whitespace': function (string) {
		return string.replace(/\s/, '###').replace(/[\t\n\r]*/g, '').replace('###', ' ');
	},
	
	'trim_front': function (string) {
		return string.replace(/^([\s]+)/g, '');
	},
	
	'trim_end': function (string) {
		return string.replace(/([\s]+)$/g, '');
	},
	
	'trim': function (string) {
		return this.trim_front(this.trim_end(string));
	},
	
	'empty': function (string) {
		if (string.length === 0) {
			return true;
		}
		
		return (/^[\s]*$/g).test(string);
	},
	
	'breaks_to_space': function (string) {
		return string.replace(/(\n|\r\n|\r)+/g, ' ');
	},
	
	'unix_breaks': function (string) {
		return string.replace(/(\n|\r\n|\r)+/g, '\n');
	},
	
	'compare': function (a, b) {
		a = (a.toString()).toLowerCase();
		b = (b.toString()).toLowerCase();
		
		if (a === b) {
			return true;
		}
		
		return false;
	},
	
	'search': function (word, string) {
		return string.indexOf(word) != -1;
	},
	
	'leading': function (string) {
		if (string.substr(0,1) !== '0') {
			return '0' + string.toString();
		} else {
			return string.toString();
		}
	}
};

$.useragent = {
	'get': function () {
		// Get the useragent.
		var agent = navigator.userAgent.toLowerCase();

		// The order of these is important!
		if (agent.match("chrome")) {
			return "Google Chrome";
		} else if (agent.match("safari")) {
			return "Safari";
		}
		
		// Check for a beta version of Fx.
		if (agent.match("minefield")) {
			return "Minefield";
		}
		
		// Check for only firefox.
		if (agent.match("firefox") && !agent.match("navigator")) {
			return "Firefox";
		} else if (agent.match("navigator")) {
			return "Netscape";
		}
		
		// Opear
		if (agent.match("opera")) {
			return "Opera";
		}
		
		// MSIE 8
		if (agent.match("msie 8.0")) {
			return "Internet Explorer 8";
		} else if (agent.match("msie 7.0")) {
			return "Internet Explorer 7";
		} else if (agent.match("msie 6.0")) {
			return "Internet Explorer 6";
		}
	}
	
};

$.window = {
	// Get the current amount of frames.
	'frame_count': function () {
		return window.length;
	},
	
	'alert': function (message) {
		alert(message);
	},
	
	'confirm': function (message) {
		return confirm(message);
	},
	
	'prompt': function (message) {
		return prompt(message);
	},
	
	'print': function () {
		window.print();
	},
	
	'scroll': function (x,y) {
		window.scrollBy(x,y);
	},
	
	'scroll_to': function (x,y) {
		window.scrollTo(x,y);
	}
	
};

	// The window.history object
	$.window.history = {
		// Some basic history methods
		'count' : function () {
			return history.length;
		},
		
		'back': function () {
			history.go(-1);
		},
		
		'forward': function () {
			history.go(1);
		},
		
		'go': function (n) {
			history.go(n);
		}
	};

	// The window.location object
	$.window.location = {
		'get_hash': function () {
			return window.hash;
		},
		
		'set_hash': function (message) {
			window.hash = message;
		},
		
		'hostname': function () {
			return window.hostname;
		},
		
		'get': function () {
			return window.location;
		},
		
		'set': function (uri) {
			window.location = uri;
		},
		
		'reload': function () {
			window.location.reload();
		},
		
		'get_protocol': function () {
			return window.location.protocol;
		},
		
		'set_protocol': function (proto) {
			window.location.protocol = proto;
		}
	};

$.xhr = {
	// We have to find the way that the specific browser
	// is able to grab a remote page.
	'new_xhr': function () {
		if (window.XMLHttpRequest) {
			return new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} else if (window.ActiveXObject) {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} else {
			return new XMLHttpRequest();
		}
	}, 
	
	// A simple function that returns the ready state
	// of an XHR object.
	'ready_state': function (xhr) {
		return xhr.readyState;
	},
	
	// This will return the text from a xhr request.
	'text': function (xhr) {
		return xhr.responseText;
	},
	
	// Return any XML data from the request.
	'xml': function (xhr) {
		xhr.overrideMimeType('text/xml');
		return xhr.responseXML;
	},
	
	// Return a numeric HTTP status code.
	'status': function (xhr) {
		return xhr.status;
	},
	
	// Return the HTTP status as the message, not
	// a numeric value.
	'status_text': function (xhr) {
		return xhr.statusText;
	},
	
	// Now the larger and common 'get' function for
	// a XHR request.
	'get': function (uri) {
		var xhr = this.new_xhr();
			xhr.open('GET', uri, false);
			xhr.send(null);
			
		return xhr.responseText;
	}
	
};