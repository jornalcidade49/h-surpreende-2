jQuery(function ($) {

	$('.sidebar1').scrollToFixed( { } );

	function PopupCenter(url, title, w, h) {
		// Fixes dual-screen position                         Most browsers       Firefox
		var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
		var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

		width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
		height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

		var left = ((width / 2) - (w / 2)) + dualScreenLeft;
		var top = ((height / 2) - (h / 2)) + dualScreenTop;
		var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

		// Puts focus on the newWindow
		if(window.focus) {
			newWindow.focus();
		}
	}

	function SocialClickEvent() {
		var anchors = document.getElementsByTagName( 'a' );
		var _popupW = '640';
		var _popupH = '380';
		for( var i = 0; i < anchors.length; i++ ) {
			var anchor = anchors[i];
			if( anchor.className.indexOf( 'fb_btn' ) + 1 ) {
				anchor.onclick = function() {
					var _fbURL = 'https://www.facebook.com/sharer/sharer.php';
					var _fbTTL = 'TIP OF THE WEEK: How this little device saves you from THOUSANDS of dollars spent at crooked repair shops...';
					PopupCenter( _fbURL, _fbTTL, _popupW, _popupH );
				}
			}
			if( anchor.className.indexOf( 'tw_btn' ) + 1 ) {
				anchor.onclick = function() {
					var _twURL = 'https://twitter.com/share';
					var _twTTL = '';
					PopupCenter( _twURL, _twTTL, _popupW, _popupH );
				}
			}
			if( anchor.className.indexOf( 'gp_btn' ) + 1 ) {
				anchor.onclick = function() {
					var _gpURL = 'https://plus.google.com/share';
					var _gpTTL = '';
					PopupCenter( _gpURL, _gpTTL, _popupW, _popupH );
				}
			}
		}
	}

	window.onload = function() {
		SocialClickEvent();
	}

} );