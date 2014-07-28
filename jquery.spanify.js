/*
-----------------------------------------------------------------------------------------
@ > Bazinga's SPANIFY 0.01
@ > Licence: MIT
@ > grzegorz.karol.jasinski@gmail.com
-----------------------------------------------------------------------------------------
*/

(function($) {

	'use strict';

	$.fn.spanify = function( options ) {

		return this.each( function() {

			var _out,
				_html = $(this).text();

			_html = _html.split(' ');
			_out = '<span>' + _html.join('</span><span>') + '</span>';

			$(this).html( _out );

		});

	};

})(jQuery);