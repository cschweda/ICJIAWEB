module.exports.register = function(Handlebars) {
	Handlebars.registerHelper('debug', function(count) {
		console.log('Current Context');
		console.log('====================');
		console.log(this);

	});
};
