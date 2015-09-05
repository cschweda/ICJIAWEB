// Taken from https://gist.github.com/kares/956897


function parseParams(str) {
	var re = /([^&=]+)=?([^&]*)/g;
	var decode = function(str) {
		return decodeURIComponent(str.replace(/\+/g, ' '));
	};
	var params = {},
		e;
	if (str) {
		if (str.substr(0, 1) === '?') {
			str = str.substr(1);
		}
		while (e = re.exec(str)) {
			var k = decode(e[1]);
			var v = decode(e[2]);
			if (params[k] !== undefined) {
				if (!$.isArray(params[k])) {
					params[k] = [params[k]];
				}
				params[k].push(v);
			} else {
				params[k] = v;
			}
		}
	}
	return params;
}
