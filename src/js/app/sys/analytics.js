global._gaq = {
	instance: null,

	_iframe: null,

	init: function(next) {
		var cw, iframe, wrapper,
				html = '<iframe src="about:blank" id="__google" style="position:absolute;width:1px;height:1px;top:-100px;left:-100px;" nwdisable nwfaketop></iframe>';
		
		wrapper = document.createElement('p');
		wrapper.innerHTML = html;
		
		iframe = wrapper.firstElementChild;
		iframe.src = 'http://pad.haroopress.com/assets/google_analytics.html';

		document.body.appendChild(iframe);

		this._iframe = cw = iframe.contentWindow;
		cw.onload = function() {
			global._gaq.instance = cw._gaq;
			if (next) {
				next(cw._gaq);
			}
		};
	},

	push: function(cate, action, label) {
		var arr = [ '_trackEvent', cate, action, label ];

		navigator.onLine && global._gaq.instance && global._gaq.instance.push(arr);
	}
};

window.addEventListener('online', function(e) {
  global._gaq._iframe.location.reload();
}, false);