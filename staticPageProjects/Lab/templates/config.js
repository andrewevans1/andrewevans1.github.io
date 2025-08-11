let localPaths = {
  'andrew': 'C:/Users/andre/OneDrive/Documents/Programming/andrewevans1.github.io/Lab',
  'prod':   '',
};

let localPath = localPaths.andrew;
//let localPath = localPaths.prod;

var links = {
  'index':    `${localPath}/index.html`,
  'people': `${localPath}/people.html`,
  'publications': `${localPath}/publications.html`,
  'facilities': `${localPath}/facilities.html`,
  'join':     `${localPath}/join.html`,
  'plasma':   `${localPath}/research/plasma`,
  'thermal':  `${localPath}/research/thermal`,
  'wind':     `${localPath}/research/wind`,

  'bios': `${localPath}/people`,

  'css':      `${localPath}/css`,

  'images':   `${localPath}/images`,
  'videos':   `${localPath}/images/videos`,
  'pictures': `${localPath}/images/pictures`,
  'icons':    `${localPath}/images/Icons`,
  'favicon':  `${localPath}/images/favicon`,
};

var people = {
  'RichardWirz': {
    'name': 'Richard Wirz',
    'link': `${links.bios}/richard-wirz.html`,
    'photo': `${links.pictures}/people/richard-wirz.jpg`
  },
  'RichardWirz': {
    'name': 'Richard Wirz',
    'link': `${links.bios}/richard-wirz.html`,
    'photo': `${links.pictures}/people/richard-wirz.jpg`
  }
}
