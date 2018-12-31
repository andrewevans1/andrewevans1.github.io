var context = {
  "main": `${links.css}/design.min.css`,
  "favicon":links.favicon,
  'theme_color': '#00BBFF'
}

var templateScript = Handlebars.templates.head(context);

$(document.head).append(templateScript);
