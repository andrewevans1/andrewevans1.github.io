var context = {
  "home":links.index,
  "logo":`${links.icons}/logo.png`,
  'links': [
    {'element':
      `<li class="site-nav__item site-nav__item--parent">
        <p class="site-nav__item site-nav__link site-nav__link--link">Research</p>
        <ul class="site-nav__dropdown" >
          <li class="site-nav__dropdown-item">
            <a class="site-nav__dropdown-link" href="${links.plasma}/topics.html">Plasma and Space Propulsion</a>
          </li>
          <li class="site-nav__dropdown-item">
            <a class="site-nav__dropdown-link" href="${links.thermal}/topics.html">Thermal Energy Storage</a>
          </li>
          <li class="site-nav__dropdown-item">
            <a class="site-nav__dropdown-link" href="${links.wind}/topics.html">Wind Energy</a>
          </li>
        </ul>
      </li>`
    },
    {'element':
      `<li class="site-nav__item">
        <a href="${links.people}" class="site-nav__link site-nav__link--link">People</a>
      </li>`
    },
    {'element':
      `<li class="site-nav__item">
        <a href="${links.publications}" class="site-nav__link site-nav__link--link">Publications</a>
      </li>`
    },
    {'element':
      `<li class="site-nav__item">
        <a href="${links.facilities}" class="site-nav__link site-nav__link--link">Facilities</a>
      </li>`
    },
    {'element':
      `<li class="site-nav__item">
        <a href="${links.join}" class="site-nav__link site-nav__link--link">Join</a>
      </li>`
    }],
    "burger": `${links.icons}/burger.png`
}

var templateScript = Handlebars.templates.navBar(context);

$('#SiteHeader').append(templateScript);
