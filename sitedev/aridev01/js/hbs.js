// var source   = $("#entry-template").html();
// var template = Handlebars.compile(source);
// var context = {title: "My New Post", body: "This is my first post!"};
// var html    = template(context);
//
// $('#test').html(html);



Handlebars.registerHelper("debug", function(optionalValue) {
      console.log("Current Context");
      console.log("====================");
      console.log(this);

      if (optionalValue) {
        console.log("Value");
        console.log("====================");
        console.log(optionalValue);
      }
    });


Handlebars.registerHelper('limit', function (arr, limit) {
  // if (!_.isArray(arr)) { return []; } // remove this line if you don't want the lodash/underscore dependency
  return arr.slice(0, limit);
});


// Handlebars.registerPartial(
//   'partialTemplate',
//   '{{language}} is {{adjective}}. You are reading this article on {{website}}.'
// );
