var context = {
  "main": `${links.css}/design.min.css`,
  "favicon":links.favicon,
  'theme_color': '#003B5C'
}

var templateScript = Handlebars.templates.head(context);

$(document.head).append(templateScript);
