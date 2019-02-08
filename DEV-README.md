# Tandem Kivako Template


## <a name="included-packages"></a> File Loading Priorities

 * HTML template files are always loaded before everything else
 * Files beginning with main. are loaded last
 * Files inside any lib/ directory are loaded next
 * Files with deeper paths are loaded next
 * Files are then loaded in alphabetical order of the entire path
 
 `For more see https://guide.meteor.com/structure.html#load-order`
 
 
 ## Instalation 
 
 Prerequisites: (Win mainly)
 Install chocolate
 Install Node.js
 
 * Install meteor
 `$ choco install meteor`
 
 * Installing template:
 `$ meteor create --full --react {app-name}`
 
 * Initialize npm for the current Meteor project.
 `$ meteor npm install`
 
 *  Some manual dependecies for some plugins
 `$ meteor npm install --save bcrypt`
 `$ meteor npm install --save simpl-schema`
 
 *  Plugins
 `$ meteor add less meteortesting:mocha johanbrook:publication-collector  dburles:collection-helpers matb33:collection-hooks reywood:publish-composite iron:router@1.0.0 zimme:active-route yasinuslu:blaze-meta alanning:roles fortawesome:fontawesome useraccounts:core momentjs:moment underscore underscorestring:underscore.string cunneen:mailgun useraccounts:iron-routing accounts-password check ejson dburles:factory anti:fake aldeed:autoform msavin:mongol aldeed:collection2 cmather:handlebars-server@0.2.0 useraccounts:bootstrap cfs:standard-packages anychart:anychart tap:i18n aldeed:simple-schema accounts-ui session blaze-html-templates react-template-helper cfs:gridfs coffeescript`
 
 * Start
 `$ meteor --settings settings.json`
 
 * It should be working
 * To achieve same boilerplate code stop server, copy folders from here https://github.com/Differential/meteor-boilerplate especially folders from Both to Server to your project structure
 * Start meteor again a see the result with stylized login pages
 
 ## Notes
 * Language files must be UTF-8 encoded for internationalisation
  
 ## Instalation 
  `$ meteor npm install`
  
  `$ meteor --settings settings.json`
  