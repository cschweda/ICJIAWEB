$( document ).ready(function() {
    $(".button-collapse").sideNav();



    //
    // var url='data.json';
    // var slingshot = function (url, tplId, anchor) {
    //    $.getJSON(url, function(data) {
    //             var template = $(tplId).html();
    //             var stone = Handlebars.compile(template)(data);
    //             $(anchor).append(stone);
    //    });
    //  }
    //
    // //4b.function firing
    // slingshot(url, '#tpl', '#anchor'); // since url = 'data.json' , we can use both notations.
    //
    //
    // function fetch(file, target, data) {
    //   $.ajax({
    //     url: file,
    //     dataType: 'html',
    //     success: function (html) {
    //       if (data){
    //         var template = Handlebars.compile(html);
    //         $(target).append(template(data));
    //       } else {
    //         $(target).append(html);
    //       }
    //     },
    //     error: function (jqxhr,status,error) {
    //       console.log(jqxhr,status,error);
    //     }
    //   });
    // }
    //
    //
    // fetch('header.html', '#target', {id: '1',"name":"chris"});
//
//   Handlebars.registerHelper("debug", function(optionalValue) {
//       console.log("Current Context");
//       console.log("====================");
//       console.log(this);
//
//       if (optionalValue) {
//         console.log("Value");
//         console.log("====================");
//         console.log(optionalValue);
//       }
//     });
//
//
// Handlebars.registerHelper('limit', function (arr, limit) {
//   // if (!_.isArray(arr)) { return []; } // remove this line if you don't want the lodash/underscore dependency
//   return arr.slice(0, limit);
// });




var App = {


loadExternalJSON: function(jsonTarget, templateTarget, renderTarget){
    $.when(

        // load your data from a json store or php backend
        $.ajax({
            dataType: "json",
            url: jsonTarget
        }),

        // load your external HTML template
        $.ajax({
            url: templateTarget
        })

    ).done(function(data,html){
        // render the template and data, append it to your target in the DOM
        var template = Handlebars.compile(html[0]);
        $(template(data[0])).appendTo(renderTarget);
        //console.log(data[0].store[0]);
        // $(template(data[0].store[2])).appendTo(renderTarget);
        // $(template(data[0].store[1])).appendTo(renderTarget);
        // for (var i = 0; i < 2; i++) {
        //   $(template(data[0].store[i])).appendTo(renderTarget);
        // }
        }
    );
}};

App.loadExternalJSON('data2.json', 'book.hbs', '#external');
App.loadExternalJSON('data2.json', 'header.hbs', '#header');
App.loadExternalJSON('data2.json', 'footer.hbs', '#footer');






});
