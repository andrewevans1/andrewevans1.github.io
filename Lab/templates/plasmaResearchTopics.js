var context = {
  'title': 'Plasma and Space Propulsion Research Topics',
  'topics': [
      {
        'title': 'Design and Development of a Miniature Ring-Cusp Ion Thruster',
        'authors': [
          {
            'name': 'Stephen Samples',
            'link': ''
          },
          {
            'name': 'Gary Li',
            'link': ''
          },
          {
            'name': 'Richard Wirz',
            'link': ''
          }
        ],
        'description': 'The 3 cm Miniature Xenon Ion (MiXI) thruster, developed by Wirz in 2005, was the first miniature ion thruster to demonstrate stable operation and noteworthy total efficiency at these scales. However, the main performance limitation was the high discharge loss of ~450 eV/ion due to poor primary electron confinement from the magnetic cusp design. The current objective of this project is to design a more efficient discharge for the MiXI thruster using discharge EEDFs and plasma parameter analysis.',
        'picture': 'http://www.wirz.seas.ucla.edu/sites/default/files/styles/width-500/public/205000330.PNG?itok=ml2h2_MQ',
        'link': ''
      },
      {
        'title': 'Laser-induced Fluorescence Measurements of Energetic Ions in High Current Hollow Cathodes',
        'authors': [
          {
            'name': 'Chris Dodson',
            'link': ''
          },
          {
            'name': 'Benjamin Jorns',
            'link': ''
          },
          {
            'name': 'Richard Wirz',
            'link': ''
          }
        ],
        'description': 'This project investigates the existence of high energy ions generated in high current hollow cathode plumes using Laser Induced Fluorescence (LIF) and plasma probes. Ion acoustic turbulence is generated from a high electron to ion relative drift velocity, and wave-particle interactions lead to heating of plasma in the plume. Energetic ions can cause erosion of cathode surfaces used for long duration missions using Hall thrusters. We test a 100 A-class hollow cathode at JPL and perform LIF measurements to study the formation of energetic ions and the evolution of the IVDF in the plume.',
        'picture': 'http://www.wirz.seas.ucla.edu/sites/default/files/styles/width-500/public/1085110003.png?itok=5V_RhInv',
        'link': ''
      },
      {
        'title': '',
        'authors': [
          {
            'name': '',
            'link': ''
          }
        ],
        'description': '',
        'picture': '',
        'link': ''
      },
      {
        'title': '',
        'authors': [
          {
            'name': '',
            'link': ''
          }
        ],
        'description': '',
        'picture': '',
        'link': ''
      },{
        'title': '',
        'authors': [
          {
            'name': '',
            'link': ''
          }
        ],
        'description': '',
        'picture': '',
        'link': ''
      }
  ]
}
var templateScript = Handlebars.templates.researchTopics(context);

$('main').append(templateScript);
