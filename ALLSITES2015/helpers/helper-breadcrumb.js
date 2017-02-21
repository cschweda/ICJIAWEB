module.exports.register = function (Handlebars)  {
  Handlebars.registerHelper('constructBreadCrumb', function(depth,pageContext,slug,ext) {
    breadCrumb='';
    path = pageContext.replace('src/', '').replace('.hbs',ext);
    path=path.split('/');
    if (path.length==2) {
      parent=path[0];
      page=path[1]
      displayParent=parent.charAt(0).toUpperCase() + parent.slice(1);
    } else {
      parent='';
      page=path[0];
    }

    if (slug == undefined) {
      slug=page.replace(ext,'');
    }
    breadCrumb = breadCrumb + '<ol class="breadcrumb">';
    breadCrumb = breadCrumb + '<li><a href="'+ depth + '">Home</a></li>';
    if (parent !== '') {
    breadCrumb = breadCrumb + '<li><a href="' + depth + parent + '">' + displayParent + '</a></li>';
  }
    breadCrumb = breadCrumb + '<li>' + slug + '</li>';
    breadCrumb = breadCrumb + '</ol>';
    //breadCrumb = depth + path + '/' + slug;
    return new Handlebars.SafeString(breadCrumb);
  });
};
