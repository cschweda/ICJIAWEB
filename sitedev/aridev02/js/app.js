Vue.component('my-list',{
  template: '<ul>\
    <li v-for="item in items.store">\
      <span class="message">{{item.name}} - ISBN {{item.isbn}}</span>\
    </li>\
  </ul>',
  methods: {
    fetch: function () {
      var self = this;

      var apiURL = './dist/data/data2.json';
      $.get( apiURL, function( data ) {
        console.log(this)
        self.items = data;
        //console.log(self.items);
      });
    }
  },
  created: function () {
    this.fetch();
  },
  data: function () {
    return {
      items: ''
    }
  }

})


Vue.component('app-nav', {
    template: '<nav>\
    <div class="nav-wrapper">\
      <a href="#!" class="brand-logo">Logo</a>\
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="fa fa-bars" aria-hidden="true" style="margin-left: 5px;"></i></a>\
      <ul class="right hide-on-med-and-down">\
        <li><a href="sass.html">Item 1</a></li>\
        <li><a href="badges.html">Item 2</a></li>\
        <li><a href="collapsible.html">Item 3</a></li>\
        <li><a href="mobile.html">Item 4</a></li>\
      </ul>\
      <ul class="side-nav" id="mobile-demo">\
        li><a href="sass.html">Item 1</a></li>\
        <li><a href="badges.html">Item 2</a></li>\
        <li><a href="collapsible.html">Item 3</a></li>\
        <li><a href="mobile.html">Item 4</a></li>\
      </ul>\
    </div>\
  </nav> '
})


Vue.component('app-footer', {
    template: '<footer class="page-footer">\
          <div class="container">\
            <div class="row">\
              <div class="col l6 s12">\
                <h5 class="white-text">Footer Content</h5>\
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>\
              </div>\
              <div class="col l4 offset-l2 s12">\
                <h5 class="white-text">Links</h5>\
                <ul>\
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>\
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>\
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>\
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>\
                </ul>\
              </div>\
            </div>\
          </div>\
          <div class="footer-copyright">\
            <div class="container">\
            © 2014 Copyright Text\
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>\
            </div>\
          </div>\
        </footer>'
})





var App = {
  init: function () {
    var v = new Vue({
      el: '#vue',
      created: function () {console.log('Vue instance created.')}
    });
    // jquery
    $(".button-collapse").sideNav();
  }
}


$( document ).ready(function() {
  App.init();
});
