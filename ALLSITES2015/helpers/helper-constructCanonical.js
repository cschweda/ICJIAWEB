module.exports.register = function (Handlebars)  {
  Handlebars.registerHelper('constructCanonical', function(base,pageContext,ext) {
    path = pageContext.replace('src/', '').replace('.hbs',ext);
    canonical = base + '/' + path;
    return new Handlebars.SafeString(canonical);
  });
};
