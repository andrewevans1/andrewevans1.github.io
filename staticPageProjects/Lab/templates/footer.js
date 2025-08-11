var context = {
  'socialMedia': [
    {
      'link': 'https://www.facebook.com/uclaBruinSpace/',
      'icon': `${links.icons}/facebook_circle.svg`,
    }, {
      'link': 'https://www.instagram.com/uclabruinspace/',
      'icon': `${links.icons}/instagram_circle.svg`,
    }, {
      'link': 'https://twitter.com/uclabruinspace',
      'icon': `${links.icons}/twitter_circle.svg`,
    }, {
      'link': 'https://www.linkedin.com/company/bruin-spacecraft-group-at-ucla/',
      'icon': `${links.icons}/linkedin_circle.svg`,
    },
  ],
};

var templateScript = Handlebars.templates.footer(context);

$('footer').append(templateScript);
