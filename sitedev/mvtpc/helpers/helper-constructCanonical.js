module.exports.register = function(Handlebars) {
	Handlebars.registerHelper('constructCanonical', function(base, pageContext,
		ext) {
		var path = pageContext.replace('src/', '');
		var canonical = base + '/' + path;
		return new Handlebars.SafeString(canonical);
	});
};
