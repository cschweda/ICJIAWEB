
module.exports.register = function (Handlebars)  {
  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
};
