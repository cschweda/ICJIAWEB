(function() {

	module.exports.register = function(Handlebars, options) {
		Handlebars.registerHelper('navPages', function(keyword, options) {
			var result = '';
			var collectionItem = _.find(this['keywords'], {
				'keyword': keyword
			});
			if (collectionItem) {
				var sortedPages = _.sortBy(collectionItem.pages, function(page, index,
					pages) {
					return page.data.navSort || 0;
				});
				_.each(sortedPages, function(page, index, pages) {
					result += options.fn(page);
				});
			}
			return result;
		});
	};
}).call(this);
