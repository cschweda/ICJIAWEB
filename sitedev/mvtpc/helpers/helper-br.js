module.exports.register = function (Handlebars)  {
  Handlebars.registerHelper('br', function(count) {
    count = count - 1;
    var content = [];
    for (var i = 0; i <= count; i++) {
      content.push('<br>');
    }
    return new Handlebars.SafeString(content.join(''));
  });
};
