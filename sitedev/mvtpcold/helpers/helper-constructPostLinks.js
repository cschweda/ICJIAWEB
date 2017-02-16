module.exports.register = function(Handlebars) {
	Handlebars.registerHelper('constructPostLinks', function(page, ext) {
		var pageLink = page.replace('src/', '').replace('.hbs', ext);
		return new Handlebars.SafeString(pageLink);
	});
};
