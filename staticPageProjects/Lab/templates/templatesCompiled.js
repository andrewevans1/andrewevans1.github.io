(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['article'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(data && data.last),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</a>";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"4":function(container,depth0,helpers,partials,data) {
    return ", ";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "  		<div class=\"block\">\r\n          <img src=\""
    + container.escapeExpression(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data}) : helper)))
    + "\">\r\n          <p>"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n  		</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"article-wrapper\">\r\n  <div class=\"title article serif\">\r\n    <img src=\""
    + alias4(((helper = (helper = helpers["title-picture"] || (depth0 != null ? depth0["title-picture"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title-picture","hash":{},"data":data}) : helper)))
    + "\">\r\n    <h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n    <h3>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</h3>\r\n  </div>\r\n  <div class=\"article-body\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.blocks : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>\r\n";
},"useData":true});
templates['articlesHome'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"article-preview dark\">\r\n      <div class=\"article-preview__text\">\r\n        <a href="
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "><h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2></a>\r\n        <h3>"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</h3>\r\n        <p>"
    + alias4(((helper = (helper = helpers.preview || (depth0 != null ? depth0.preview : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"preview","hash":{},"data":data}) : helper)))
    + "</p>\r\n      </div>\r\n      <div class=\"article-preview__image\">\r\n        <img src=\""
    + alias4(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data}) : helper)))
    + "\">\r\n      </div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page-header\">\r\n  <h1>Articles Home</h1>\r\n  <h3>Check out these cool articles on space policy</h3>\r\n</div>\r\n<div class=\"article-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.articles : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});
templates['footer'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <a href="
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + " target=\"_blank\">\r\n      <img src="
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + ">\r\n    </a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"social-media-links\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.socialMedia : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n<div class=\"contact\">\r\n  <h2>For more information, contact wirz@ucla.edu</h2>\r\n</div>\r\n<p>Andrew Evans 2019</p>\r\n";
},"useData":true});
templates['head'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<title>Wirz Research Group</title>\r\n\r\n<!-- <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">\r\n\r\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\" integrity=\"sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T\" crossorigin=\"anonymous\"></script>\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\"> -->\r\n<link href=\"https://fonts.googleapis.com/css?family=Montserrat|Oswald|Roboto\" rel=\"stylesheet\">\r\n\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\""
    + alias4(((helper = (helper = helpers.main || (depth0 != null ? depth0.main : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"main","hash":{},"data":data}) : helper)))
    + "\">\r\n\r\n<!-- <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\""
    + alias4(((helper = (helper = helpers.favicon || (depth0 != null ? depth0.favicon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data}) : helper)))
    + "/apple-touch-icon.png\">\r\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\""
    + alias4(((helper = (helper = helpers.favicon || (depth0 != null ? depth0.favicon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data}) : helper)))
    + "/favicon-32x32.png\">\r\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\""
    + alias4(((helper = (helper = helpers.favicon || (depth0 != null ? depth0.favicon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data}) : helper)))
    + "/favicon-16x16.png\">\r\n<link rel=\"manifest\" href=\""
    + alias4(((helper = (helper = helpers.favicon || (depth0 != null ? depth0.favicon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data}) : helper)))
    + "/site.webmanifest\">\r\n<link rel=\"mask-icon\" href=\""
    + alias4(((helper = (helper = helpers.favicon || (depth0 != null ? depth0.favicon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data}) : helper)))
    + "/safari-pinned-tab.svg\" color=\"#5bbad5\"> -->\r\n\r\n<meta name=\"theme-color\" content="
    + alias4(((helper = (helper = helpers.theme_color || (depth0 != null ? depth0.theme_color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theme_color","hash":{},"data":data}) : helper)))
    + "/>\r\n";
},"useData":true});
templates['index'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "          <li data-target=\"#myCarousel\" data-slide-to=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "class=\"active\"";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"carousel-item "
    + alias4(((helper = (helper = helpers.active || (depth0 != null ? depth0.active : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"active","hash":{},"data":data}) : helper)))
    + "\">\r\n          <img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\r\n          <div class=\"carousel-caption\">\r\n            <h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\r\n            <a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\"><h3>"
    + alias4(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data}) : helper)))
    + "</h3></a>\r\n          </div>\r\n        </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <a class=\"card\" href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">\r\n        <img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\r\n        <div class=\"card-container\">\r\n          <img src=\""
    + alias4(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data}) : helper)))
    + "\"></img>\r\n          <h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\r\n          <p>"
    + alias4(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n      </a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"video\">\r\n  <div style=\"position:relative;height:100%;z-index:-1\">\r\n    <!--\r\n    <iframe width=\"100%\" src=\"https://www.youtube.com/embed/QGWQyhOfZBY?autoplay=1;rel=0&amp;controls=0&amp;showinfo=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" style=\"position:absolute;width:100%;height:100%;left:0\" allowfullscreen></iframe>\r\n    -->\r\n    <!--\r\n    <iframe width=\"100%\" src=\"https://www.youtube.com/embed/OGKqUmk_g-0?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0&amp;mute=1&amp;loop=1&playlist=OGKqUmk_g-0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" style=\"width:100%;\" allowfullscreen></iframe>\r\n    -->\r\n    <video width=\"100%\" autoplay muted loop>\r\n      <source src=\""
    + alias4(((helper = (helper = helpers["video-link"] || (depth0 != null ? depth0["video-link"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"video-link","hash":{},"data":data}) : helper)))
    + "\" type=\"video/mp4\">\r\n      HTML video is not supported by your browser.\r\n    </video>\r\n\r\n  </div>\r\n  <div class=\"caption__container\">\r\n    <div class=\"caption\">\r\n      <h1>Welcome</h1>\r\n      <h3>to Bruin Spacecraft Group</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"scrollDown\" onclick=\"scrollDown()\">\r\n    <h3>Scroll Down</h3>\r\n    <svg class=\"arrows\">\r\n      <path class=\"a1\" d=\"M0 0 L30 20 L60 0\"></path>\r\n      <path class=\"a2\" d=\"M0 15 L30 35 L60 15\"></path>\r\n      <path class=\"a3\" d=\"M0 30 L30 50 L60 30\"></path>\r\n    </svg>\r\n  </div>\r\n  <script>\r\n    function scrollDown(){\r\n      console.log(\"HELP\")\r\n      $(\"html, body\").animate({\r\n        scrollTop: $('#mission').offset().top}, 1000)\r\n    }\r\n  </script>\r\n</div>\r\n\r\n<div class=\"main-content-wrapper\">\r\n  <div id=\"mission\" class=\"paragraph-container light\">\r\n    <h1>Our Mission</h1>\r\n    <p>Bruin Spacecraft Group was founded with the intent of providing a creative and supportive environment for space mission design and development at UCLA.\r\n    Here, students of all backgrounds can come together, united by a passion for space, to do something amazing.\r\n    Here, we aim to give students the opportunity to acquire the skills necessary to become leaders in the space industry.</p>\r\n  </div>\r\n  <!-- NOT READY\r\n  <div class=\"carousel-wrapper\">\r\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n      <!-- Indicators >\r\n      <ul class=\"carousel-indicators\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.slides : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\r\n      <!-- Slides TODO: add img alts?>\r\n      <div class=\"carousel-inner\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.slides : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\r\n      <!-- Left and right controls >\r\n      <a class=\"carousel-control-prev\" href=\"#myCarousel\" data-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\"></span>\r\n      </a>\r\n      <a class=\"carousel-control-next\" href=\"#myCarousel\" data-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\"></span>\r\n      </a>\r\n    </div>\r\n  </div> -->\r\n\r\n  <div id=\"whatWeDo\" class=\"dark\">\r\n    <h1 class=\"title\">What We Do</h1>\r\n    <div class=\"flex-container\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n  </div>\r\n  <div id=\"join\" class=\"paragraph-container light\">\r\n    <h1>How to Join</h1>\r\n    <p>\r\n      Bruin Spacecraft Group is open to any and all majors and minors. All we ask is you come with a passion for space!\r\n    </p>\r\n    <p>\r\n      You don't need to be an engineer to be on a project, and you don't need to study economics to join the finance team.\r\n    </p>\r\n    <p>\r\n      If you want to join us here at Bruin Space, check out the <a href=\""
    + alias4(((helper = (helper = helpers.join || (depth0 != null ? depth0.join : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"join","hash":{},"data":data}) : helper)))
    + "\">Join</a> page for more information.\r\n    </p>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['mobNav'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      "
    + ((stack1 = ((helper = (helper = helpers.element || (depth0 != null ? depth0.element : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"element","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <ul id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"mob-nav__menu mob-nav__menu--children mob-nav__menu--closed\" data-parent=\"MobNavMain\" data-menu=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.subMenuLinks : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        "
    + ((stack1 = ((helper = (helper = helpers.element || (depth0 != null ? depth0.element : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"element","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<nav class=\"mob-nav mob-nav--closed\" id=\"MobMenu\">\r\n  <ul id=\"MobNavMain\" data-menu=\"menu0\" class=\"mob-nav__menu mob-nav__menu--parent\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.links : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.subMenus : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</nav>\r\n";
},"useData":true});
templates['navBar'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      "
    + ((stack1 = ((helper = (helper = helpers.element || (depth0 != null ? depth0.element : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"element","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a class=\"brand\" href=\""
    + alias4(((helper = (helper = helpers.home || (depth0 != null ? depth0.home : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data}) : helper)))
    + "\">\r\n  <img src=\""
    + alias4(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data}) : helper)))
    + "\">\r\n</a>\r\n<nav class=\"site-nav\" role=\"navigation\">\r\n  <ul class=\"site-nav__list\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.links : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\r\n</nav>\r\n<button class=\"mob-nav__burger\" id=\"MobMenuToggle\" onclick=\"\">\r\n  <img id=\"burger\" src=\""
    + alias4(((helper = (helper = helpers.burger || (depth0 != null ? depth0.burger : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"burger","hash":{},"data":data}) : helper)))
    + "\">\r\n</button>\r\n";
},"useData":true});
templates['researchTopics'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div class=\"topic\">\r\n			<div class=\"title\">\r\n        <img src=\""
    + alias4(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data}) : helper)))
    + "\">\r\n        <div>\r\n  				<h1 class=\"serif\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n  				<h3>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</h3>\r\n        </div>\r\n      </div>\r\n			<div class=\"description\">\r\n				<p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\r\n        <a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">Read more...</a>\r\n			</div>\r\n		</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(data && data.last),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "</a>";
},"3":function(container,depth0,helpers,partials,data) {
    return "";
},"5":function(container,depth0,helpers,partials,data) {
    return ", ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"title serif\">\r\n  <h1>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n  <h3>Current areas of research</h3>\r\n</div>\r\n<div class=\"researchTopicsList\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.topics : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});
})();