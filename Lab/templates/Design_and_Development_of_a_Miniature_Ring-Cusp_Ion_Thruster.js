var context = {
  'title': 'Design and Development of a Miniature Ring Cusp Ion Thruster',
  'authors': [people.RichardWirz],
  'blocks': [
    {
      'text':'The 3 cm Miniature Xenon Ion (MiXI) thruster, developed by Wirz in 2005, was the first miniature ion thruster to demonstrate stable operation and noteworthy total efficiency at these scales. However, the main performance limitation was the high discharge loss of ~450 eV/ion due to poor primary electron confinement from the magnetic cusp design. The current objective of this project is to design a more efficient discharge for the MiXI thruster using discharge EEDFs and plasma parameter analysis. Understanding of magnetic cusp confinement studies from previous experiments have led to a new ring-cusp thruster design, known as the Multi-Axial Ring-Cusp Ion (MARCI) thruster. For more information on the MiXI and MARCI thruster, see References [1] and [2].',
      'picture':'http://www.wirz.seas.ucla.edu/sites/default/files/styles/research-project-thumbnail/public/205000330.PNG?itok=7K2kb03f'
    },
    {
      'text':'Future work involves incorporation of a mini cathode for both the discharge and neutralization, and performance testing (thrust measurements, beam characterization) of a finalized design. ',
      'picture':'http://www.wirz.seas.ucla.edu/sites/default/files/1179650022.PNG'
    }
    ,{
      'text':`References
[1] Ben Dankongkakul and Richard E. Wirz. "Design of Miniature Ring-Cusp Ion Thrusters via Analysis of Discharge EEDF and Plasma Parameter Mapping", (2016) 52nd AIAA/SAE/ASEE Joint Propulsion Conference, Propulsion and Energy Forum, (<a href='http://dx.doi.org/10.2514/6.2016-4545'>AIAA 2016-4545</a>)
[2] Richard E. Wirz. "Discharge Plasma Processes of Ring-Cusp Ion Thrusters" (2005) Dissertation.`,
      'picture':'http://www.wirz.seas.ucla.edu/sites/default/files/591633457.PNG'
    }
  ]
}
var templateScript = Handlebars.templates.article(context);

$('main').append(templateScript);
