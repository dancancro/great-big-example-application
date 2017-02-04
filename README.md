[Please click here to support the Standing Rock Sioux Tribe and their peaceful resistance to the Dakota Access Pipeline which threatens their only source of water.](http://www.powwows.com/2016/09/07/10-ways-can-help-standing-rock-sioux-fight-dakota-access-pipeline/) 

[Live Demo](http://great-big-angular2-example.herokuapp.com)

This project is an attempt by an unemployed non-college-student to infer from available demos what the codebase might
look like for the real-world, commercial SPAs that you don't get to see until you are hired by a real company.

It took way too long for me to find this but I recently came across this other,
[great example Angular app](https://github.com/born2net/Angular-kitchen-sink). Do check it out. It was made by experts,
not beginners.

The rationale behind this is pretty simple. Code examples are better than docs.

Hopefully, when the project is done it will make the learning process for others much easier and prepare them to
make real things rather than instructional ones. I expect it to reduce the time to implement your own real
application from months to days.

While this project's goal is to be real, I mean that its architecture and approaches are to be those of a real
application, not the content. It is not important for the application's features to be coherent or related because
your application will have its own features. These features just show you how to make your own. So I just combined
the features of the following expert but small instructional apps that I used to learn all of this into one big app.
This has the additional benefit of giving you a second implementation of the same things. So if you're familiar with one
implementation this will show you what to do to change it to the other one. 

A huge thanks to those who created the example demos from which I put together this amalgam. 

To make this big app from the small ones, I took these projects and integrated/restructured/restyled their code
according to the following prioritization. Disagreements in approach between two influences are resolved by the
lower influence yielding to the higher one:

1. [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html) by Google
2. [Tour of Heroes - Module version](https://angular.io/resources/live-examples/ngmodule/ts/plnkr.html) by Google
3. [Tour of Heroes - Routing version](https://angular.io/resources/live-examples/router/ts/plnkr.html) by Google
4. [Angular CLI](https://github.com/angular/angular-cli) by Google and the community
5. [ngrx example app - book collection](https://github.com/ngrx/example-app) by [@MikeRyan52](https://github.com/MikeRyan52)
6. [ng2-state-talk - drag/editable notes](https://github.com/JavascriptMick/ng2-state-talk) by [@JavascriptMick](https://github.com/JavascriptMick) 
7. [rangle-starter Angular 2 with TypeScript and Redux version - counter](https://www.npmjs.com/package/rangle-starter) by [@SethDavenport](https://github.com/SethDavenport)

In addition to the features from these demos, I added one of my own. I replaced

8. [this other project](http://www.bernierebuttals.org) 

which was made with JQuery and Google Scripts. The data is 
contained in [this Google Sheet](https://docs.google.com/spreadsheets/d/1RdIhMdNCRJ-xtl6IgbT2SdChtLIYW8VXeloq7rR1lqY/edit#gid=50602236) 
and served as JSON by a Google script.

## Prerequisites
You will need to have [Git](https://git-scm.com/) and [Node.js + NPM](http://nodejs.org) installed on your machine. 

You will also need to install the `typings` NPM package globally via `npm i -g typings`.

You will also need to install the `angular-cli` NPM package globally via `npm i -g angular-cli`.


## Make it go
This is a standard angular-cli generated application so you can use all of the ng XXX commands to manage the application.

```
# Download the code
$ git clone https://github.com/dancancro/great-big-angular2-example.git
$ cd great-big-angular2-example

# Install dependencies
$ npm i

# Install typescript definitions
$ typings install

# Run the backend server in debug mode
Select Launch via NPM from VSCode debug menu. Click DEBUG.

or

# Run the backend server
$npm run dev:server

# Build and serve the app
$ npm run dev:client

# Continuously run the tests
$ ng test

```

Then navigate to [http://localhost:4200](http://localhost:4200) in your browser.

## Special Heroku instruction
Set Config var NPM_CONFIG_PRODUCT to false on the Settings tab of your app admin page.

## Demonstrations and Features

| **Developer Experience** |[great big angular2 example](https://github.com/dancancro/great-big-angular2-example)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[JHipster](http://jhipster.github.io/)|[angular2-redux-starter](https://github.com/rangle/angular2-redux-starter)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|
|:------ | :------: | :------: | :------: | :------: | :------: |
[API introspection report and testing interface (?)](https://helloreverb.com/developers/swagger "The system displays a report of all possible API routes and provides a simple UI to test them")| | |[**X**](https://helloreverb.com/developers/swagger "")| | |
[Approach to data readiness, prevents Flash of Unstyled/compiled Content (FOUC) (?)](https://github.com/jhipster/generator-jhipster/issues/550 "Between the time the page renders and the data arrives, users momentarily see the placeholder code.  They shouldn't see this.")| | |[**X**](https://github.com/jhipster/generator-jhipster/issues/550 "")| | |
[Authentication](https://github.com/jhipster/jhipster-sample-app/blob/5bec9d09ac1fc523fcea5cb97769153b7e97aaf2/src/main/webapp/bower_components/swagger-ui/src/main/javascript/view/AuthView.js "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/session/session.effects.ts#L26 "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/7260a89a3f968243e642b20c9fd6775ba59eaf41/src/services/DefaultAuthService.ts "")|[X](https://github.com/jhipster/jhipster-sample-app/blob/5bec9d09ac1fc523fcea5cb97769153b7e97aaf2/src/main/webapp/bower_components/swagger-ui/src/main/javascript/view/AuthView.js "")|[X](https://github.com/rangle/angular2-redux-example/blob/master/src/epics/session.epics.ts#L20 "")| |
[Authentication, social sign-in](https://github.com/jhipster/generator-jhipster/pull/2155 "")| | |[**X**](https://github.com/jhipster/generator-jhipster/pull/2155 "")| | |
[Authentication, with two-factor authentication](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/actions/SampleActions.js#L22 "")| |[**X**](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/actions/SampleActions.js#L22 "")| | | |
[Can run on a desktop without a browser](http://electron.atom.io/ "")| | | | |[**X**](http://electron.atom.io/ "")|
[Client-side performance monitoring & instrumentation (?)](https://github.com/CleverStack/node-seed/issues/13 "User interface for displaying performance metrics")| | |**X**| | |
[Client-side unit tests](https://github.com/born2net/Angular-kitchen-sink/blob/132ddece2635d13e983ce873742ba962fc5c7fce/src/app/app.component.spec.ts "")| |[X](https://github.com/born2net/Angular-kitchen-sink/blob/132ddece2635d13e983ce873742ba962fc5c7fce/src/app/app.component.spec.ts "")|X|[X](https://github.com/rangle/angular2-redux-example/blob/master/src/components/button/button.component.test.ts "")|[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/components/app.component.spec.ts "")|
[Clustered HTTP sessions](https://github.com/linnovate/mean/releases/tag/v0.4.2 "")| | |**X**| | |
[Code coverage reporting (?)](http://blog.johnryding.com/post/46757192364/javascript-code-coverage-with-phantomjs-jasmine-and "Generate reports that tell you how much of your code is being tested")|[X](http://mochajs.org/ "")|[X](http://mochajs.org/ "")|X|X| |
[Command line interface (CLI)](https://github.com/Hashnode/mern-cli "")|X|X|X|X| |
[Command line interface (CLI), can do database migration/evolution (?)](https://github.com/meanjs/mean/issues/52 "Every schema change is saved as well as its reversal.  So it's easy to keep your schema in order    Plugins:  Modyllic in PHP  https://github.com/OnlineBuddies/Modyllic")| | |[**X**](http://www.liquibase.org/ "")| | |
[Components communicate with events](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app3/starwars/components/films-component.ts#L11 "")|X|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app3/starwars/components/films-component.ts#L11 "")| | | |
[Concurrency (synchronization), with single-thread, non-blocking, event-driven I/O (?)](https://www.youtube.com/watch?t=1001&v=8aGhZQkoFbQ "A single thread handles all requests and delegates them to something else. An event loop is an entity that handles and processes external events and converts them into callback invocations. When tasks complete, events are triggered and put on the event loop where callbacks are invoked by the original thread.")| | |**X**| | |
[Core Module](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-12 "")|[**X**](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/core.module.ts "")| | | | |
CSS style checking|**X**| | | | |
[Data binding & change detection/tracking, dirty checks (bad), no getters/setters (good)](http://www.fullstackradio.com/30 "")| | |**X**| | |
[Database connection pooling](https://github.com/brettwooldridge/HikariCP "")| | |[**X**](https://github.com/brettwooldridge/HikariCP "")| | |
[Dedicated/searchable user group for questions, resolution time in under 3 months](https://groups.google.com/forum/#!topic/clever-stack/uSqvx2oU3tQ "")| | |**X**| | |
Dedicated/searchable user group for questions, response time mostly under a day| | |**X**| | |
[Deployment automation, to a mobile native executable](https://github.com/NathanWalker/angular-seed-advanced#electron-app "")| | | | |[**X**](https://github.com/NathanWalker/angular-seed-advanced#electron-app "")|
[Deployment automation, using Docker (?)](https://www.docker.io/ "This is for making the app lightweight, portable and self sufficient so you can run it anywhere")| | |[X](https://github.com/jhipster/generator-jhipster/blob/master/Dockerfile "")|[X](https://github.com/rangle/angular2-redux-example/blob/master/Dockerfile "")|[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/docker-compose.production.yml "")|
[Deployment automation, using Github Pages](https://github.com/angular/angular-cli "")|[X](https://github.com/angular/angular-cli "")|[X](https://github.com/angular/angular-cli "")| | | |
[Development build, html page processing, inject references automatically (?)](https://www.npmjs.com/package/gulp-inject "Just put your javascript files in the right place and references to them will be automatically inserted into the html files at build time.  Or they will be concatenated and a reference to the concatenated file will be put into the html files")| | |**X**| | |
[End-to-end tests (?)](https://github.com/born2net/Angular-kitchen-sink/tree/master/e2e "end-to-end tests    Protractor is recommended over karma e2e.  See http://karma-runner.github.io/0.10/intro/faq.html    Protractor \"runs atop\" WebDriver which \"runs atop\" Selenium")| |[X](https://github.com/born2net/Angular-kitchen-sink/tree/master/e2e "")|X|[X](https://github.com/rangle/angular2-redux-example/tree/master/e2e/robot "")|[X](https://github.com/NathanWalker/angular-seed-advanced/tree/master/src/e2e "")|
[FEATURE (a.k.a. module, entity) generator (?)](https://github.com/DaftMonk/generator-angular-fullstack/issues/524 "The whole nine yards for a feature - view, business layer, routing, configuration, controller")| | |**X**| | |
[Hot reloading (?)](http://mern.io/ "After a code change the page will reload and put you in the same place you were in before without losing state.")|[X](https://youtu.be/xsSnOQynTHs?t=506 ",")|[X](https://youtu.be/xsSnOQynTHs?t=506 ",")| |[X](https://youtu.be/xsSnOQynTHs?t=506 ",")|X|
[Local storage](https://github.com/jhipster/jhipster-sample-app/blob/5bec9d09ac1fc523fcea5cb97769153b7e97aaf2/src/main/webapp/app/blocks/config/localstorage.config.js "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/e29a656b8f923ad9fb5867288f4628674994b697/src/app/core/store/index.ts#L123 "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/services/LocalStorage.ts "")|[X](https://github.com/jhipster/jhipster-sample-app/blob/5bec9d09ac1fc523fcea5cb97769153b7e97aaf2/src/main/webapp/app/blocks/config/localstorage.config.js "")|X| |
[Microservice generator](https://jhipster.github.io/2016/03/23/jhipster-release-3.0.0.html "")| | |[**X**](https://jhipster.github.io/2016/03/23/jhipster-release-3.0.0.html "")| | |
[Minification, of HTML](https://www.npmjs.com/package/gulp-htmlmin "")| | |[**X**](https://www.npmjs.com/package/gulp-htmlmin "")| | |
[Modularized Functionality (?)](https://en.wikipedia.org/wiki/Modular_programming "Distinct units of the core and user-defined functionality can be easily added/removed individually.      This needs clarification to distinguish it from modular file structuring")| | |[**X**](https://jhipster.github.io/modules/marketplace.html#/list "")| | |
[Modularized, route-specific CSS](https://github.com/cgross/generator-cg-angular/issues/113 "")|[X](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#!#style-sheets ",")|[X](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#!#style-sheets ",,")| |[X](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#!#style-sheets "")|[X](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#!#style-sheets ",")|
[Module marketplace (?)](https://jhipster.github.io/modules/marketplace.html#/list "A central, searchable repository of modules created for use with and compatible with the technology. The vast majority of quality modules for the technology are listed in this one place.")| | |[**X**](https://jhipster.github.io/modules/marketplace.html#/list "")| | |
[Object-relational mapping (?)](http://hibernate.org/orm/what-is-an-orm/ "A system for managing the difference between data that is stored in rows but used as objects.  This only applies to SQL databases, not NoSQL databases.    Examples:  ActiveRecord for Rails  Hibernate for Java")| | |**X**| | |
[Performance tests, profiling](http://willnathan.com/nodejs-vs-ruby-on-rails "")| | |**X**| | |
[Persistent data storage (?)](http://hammerprinciple.com/databases "See link for a good explanation of NoSQL options and solutions to normalization issues")|[X](http://expressjs.com/guide/database-integration.html ",,,,,,,,")| |[X](https://jhipster.github.io/2016/12/08/jhipster-release-3.12.1.html ",,,,,,")|[X](http://expressjs.com/guide/database-integration.html ",,,,,,,,")|[X](http://expressjs.com/guide/database-integration.html ",,,,,,,,")|
[Preloads client-side data (?)](http://angularclass.com/angularconnect-2015-a-highlights-tour/ "Client-side JS application and initial data arrive at the browser together in a single http request    Traditionally, the Javascript arrives first, it loads in the browser and then makes API calls to get the first data as it normally does while being used")|[X](http://angularclass.com/angularconnect-2015-a-highlights-tour/ ",")|[X](http://angularclass.com/angularconnect-2015-a-highlights-tour/ ",,")| |[X](http://angularclass.com/angularconnect-2015-a-highlights-tour/ "")|[X](http://angularclass.com/angularconnect-2015-a-highlights-tour/ ",")|
[Production build, generate docs (?)](https://github.com/yeoman/yeoman/issues/152 "By reading comments in your code or maintaining separate docs:  https://github.com/millermedeiros/mdoc    examples:  ngDoc  YUIdoc")| |[**X**](http://typedoc.org/ "")| | | |
Production build, safe pre-minification| | |**X**| | |
[Separate route configuration files for each module](https://medium.com/@iDuuck/more-structured-organisation-of-routes-in-angular-js-a348c31c2063 "")| | |**X**| | |
[Separation of smart containers and dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.vkyyo356c "")|**X**| | | | |
[Server-side integration & unit tests](http://www.letscodejavascript.com/v3/episodes/live/1 "")|X|X|X| | |
[Shared Module](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-10 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/shared/shared.module.ts "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/8cc88024f22156f397f2aa95dc142460f720f50f/src/comps/app1/lazyone/SharedModule.ts "")| | | |
[Someone is paid to develop and support it (?)](http://www.ippon.fr/ "The stakes are much higher when someone's livelihood depends on the quality of the technology.    Having a sponsor means that the project champion can spend more time working on it, and if they lose interest in the project someone else at the company will take over.    It also means that the documentation will be good because someone is being paid to do it.")| | |[**X**](http://www.ippon.fr/ "")| | |
State inspection tools|X|X| |X|X|
[Style guide for code (?)](https://github.com/Swiip/generator-gulp-angular/pull/469 "Provides consistency and best practices")|[**X**](https://angular.io/docs/ts/latest/guide/style-guide.html "")| | | | |
[There is a book about it](http://www.amazon.com/MEAN-Web-Development-Amos-Haviv-ebook/dp/B00NXWI1BM/ref=dp_kinw_strp_1 "")| | |[X](http://www.jhipster-book.com/#!/ "")|[X](http://angular-2-training-book.rangle.io/ "")| |
[Time travel, undo (?)](http://redux.js.org/docs/recipes/ImplementingUndoHistory.html "You can move forward and backward through a series of state changes")|X|X| |X|X|
[UML to model generation (?)](http://jhipster.github.io/jhipster_uml.html "Offers you the possibility to use a UML editor to create a diagram that will be parsed to create entity model code.")| | |[**X**](http://jhipster.github.io/jhipster_uml.html "")| | |
[Update generated code in an existing app](https://jhipster.github.io/upgrading-an-application/ "")|[X](https://github.com/angular/angular-cli#updating-angular-cli "")|[X](https://github.com/angular/angular-cli#updating-angular-cli "")|[X](https://jhipster.github.io/upgrading-an-application/ "")| | |
|  | | | | |
| **User Experience** |[great big angular2 example](https://github.com/dancancro/great-big-angular2-example)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[JHipster](http://jhipster.github.io/)|[angular2-redux-starter](https://github.com/rangle/angular2-redux-starter)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|
Account Management, add/remove user| | |**X**| | |
[Account Management, Forgotten Password with Resetting](https://github.com/meanjs/mean/issues/30 "")| |[X](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/entry/ForgotPass.ts "")|[X](https://github.com/jhipster/generator-jhipster/pull/1343 "")| | |
[Account Management, login/logout](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/entry/EntryPanel.ts "")|X|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/entry/EntryPanel.ts "")|X|[X](https://github.com/rangle/angular2-redux-example/tree/master/src/components/login "")| |
[Account Management, recover/reset password](https://github.com/jhipster/generator-jhipster/pull/1343 "")| | |[**X**](https://github.com/jhipster/generator-jhipster/pull/1343 "")| | |
[Admin page for users and roles](https://github.com/meanjs/mean/issues/41 "")| | |[**X**](http://jhipster.github.io/2015/09/16/jhipster-release-2.21.0.html "")| | |
[Analytics](https://github.com/jhipster/generator-jhipster/blob/4cce6ecc6719d80cc6ed29f8303ed608d8133423/generators/client/templates/angular/src/main/webapp/_index.html "")| | |[X](https://github.com/jhipster/generator-jhipster/blob/4cce6ecc6719d80cc6ed29f8303ed608d8133423/generators/client/templates/angular/src/main/webapp/_index.html "")| |[X](https://github.com/NathanWalker/angular-seed-advanced "")|
[Asynchronously loaded data example](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/data.service.ts#L32 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/data.service.ts#L32 "")|X|X| |X|
[Breadcrumbs (?)](https://github.com/born2net/Angular-kitchen-sink/tree/master/src/comps/breadcrumb "Breadcrumbs are the series of links displayed at the top of a page which take you to any of the ancestral pages between the home page and the one you're on")| |[**X**](https://github.com/born2net/Angular-kitchen-sink/tree/master/src/comps/breadcrumb "")| | | |
[Buttons](http://208.68.38.122/themes/emerald/dev/htmls/elements/buttons.html "")| | |**X**| | |
[Configurable User Interface, color theme/skin](https://github.com/hipster-labs/generator-jhipster-bootswatch "")| | |[**X**](https://github.com/hipster-labs/generator-jhipster-bootswatch "")| | |
[Date picker](https://youtu.be/d1MEM8PdAzQ?t=964 "")| | |[**X**](https://youtu.be/d1MEM8PdAzQ?t=964 "")| | |
[Deep linking with authentication (?)](https://github.com/jhipster/generator-jhipster/pull/598 "A deep link is a link to a page \"deep\" inside the application, beyond the front door of the home page where you log in.  It's useful to store these as bookmarks so you don't have to navigate to get to them later.    Unauthenticated users who navigate to a deep link are first taken to the login page and upon success should then be taken to the deep link instead of the usual page")| | |[**X**](https://github.com/jhipster/generator-jhipster/pull/598 "")| | |
[Derived, computed properties](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/models/ServerModel.js#L35 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/claim/claim.model.ts#L27-L29 "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/models/ServerModel.js#L35 "")| | | |
[Dynamic component creation](https://github.com/born2net/Angular-kitchen-sink/tree/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/dynmiaccomp "")| |[**X**](https://github.com/born2net/Angular-kitchen-sink/tree/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/dynmiaccomp "")| | | |
[E-mail sending system, using SMTP with Gmail, Outlook or Yahoo, etc.](https://jhipster.github.io/tips/011_tip_configuring_email_in_jhipster.html "")| | |[**X**](https://jhipster.github.io/tips/011_tip_configuring_email_in_jhipster.html "")| | |
[External, 3rd party, API interaction](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/services/SearchSpotifyService.ts "")|X|[X](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/services/SearchSpotifyService.ts "")| | | |
[Footer](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/footer/Footer.ts "")| |[**X**](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/footer/Footer.ts "")| | | |
Front-end CRUD| | |**X**| | |
[Front-end CRUD, screencast of it](https://youtu.be/d1MEM8PdAzQ?t=790 "")| | |[**X**](https://youtu.be/d1MEM8PdAzQ?t=790 "")| | |
Front-end CRUD, with mock/seed data| | |**X**| | |
[Full-stack CRUD (?)](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "CRUD = Create,Read,Update, Delete    The example demonstrates creating, reading, updating and deleting from a database through a web page user interface.  It includes seed data and does not require a lot of work to get the app connected to a database")|X|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|X| | |
[Full-stack CRUD, screencast of it](https://youtu.be/d1MEM8PdAzQ?t=790 "")| | |[**X**](https://youtu.be/d1MEM8PdAzQ?t=790 "")| | |
[Full-stack CRUD, with Create, Update and Delete](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|X|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|X| | |
[Full-stack CRUD, with Create, Update and Delete, individual records](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|X|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|X| | |
Full-stack CRUD, with Create, Update and Delete, whole data structures|**X**| | | | |
[Full-stack CRUD, with Read](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|X|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|X| | |
[Grid, Editable](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/debate "")|[**X**](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/debate "")| | | | |
[i18n, localization (?)](https://jhipster.github.io/installing-new-languages/ "Internationalization or localization    Text for different languages are stored in separate places and used to fill in placeholders in the view depending on the user's preferences")| | |[X](https://jhipster.github.io/installing-new-languages/ "")| |X|
[Many-to-many data](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/index.ts#L265 "")|[**X**](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/index.ts#L265 "")| | | | |
[Modals (popups, dialogs) (?)](https://material.angularjs.org/latest/demo/dialog "A popup window that when opened disables the rest of the application")| | |**X**| | |
[Mouse wheel (?)](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/Mousewheel/Mousewheel.ts "Demonstrates reaction to mouse wheel input")| |[**X**](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/Mousewheel/Mousewheel.ts "")| | | |
[Navigation bar](https://github.com/jhipster/jhipster-sample-app/tree/master/src/main/webapp/app/layouts/navbar "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/app.page.html "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/app.page.html "")|[X](https://github.com/jhipster/jhipster-sample-app/tree/master/src/main/webapp/app/layouts/navbar "")| | |
[Pagination, paging (server-side)](https://github.com/jhipster/generator-jhipster/issues/797 "")| | |[**X**](https://github.com/jhipster/generator-jhipster/issues/797 "")| | |
[Panels, draggable](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/dragndrop/make-draggable.directive.ts "")|X|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/dragndrop/make-draggable.directive.ts "")| | | |
[Responsive styles](https://youtu.be/d1MEM8PdAzQ?t=588 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/166ae9353bd6ff34badbc045b2044cf417c6d8c5/src/assets/styles/flexbox.css#L4 "")| |[X](https://youtu.be/d1MEM8PdAzQ?t=588 "")|[X](https://github.com/rangle/angular2-redux-example/blob/2c541e5ce057111c32464ccee3624ab50d84f084/src/components/modal/modal.css#L7 "")| |
[Search, actually works with backend API](https://github.com/jhipster/generator-jhipster/search?utf8=%E2%9C%93&q=elasticsearch "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/books/book-search/book-search.component.ts "")| |[X](https://github.com/jhipster/generator-jhipster/search?utf8=%E2%9C%93&q=elasticsearch "")| | |
|  | | | | |
| **Dependencies** |[great big angular2 example](https://github.com/dancancro/great-big-angular2-example)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[JHipster](http://jhipster.github.io/)|[angular2-redux-starter](https://github.com/rangle/angular2-redux-starter)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|
Backend Frameworks|Express|||Express|Express
Builders|||Gradle (opt), Maven (opt), Yeoman||
Client-side API interfaces|||$http, $resource||
Continuous integration testers|||drone.io, SonarSource, Travis||
Convenience method libraries|lodash|lodash|lodash||lodash
Databases|Cassandra (opt), CouchDB (opt), ElasticSearch (opt), LevelDB (opt), MongoDB (opt), MySQL (opt), Neo4J (opt), Postgresql (opt), Redis (opt), SQLite (opt)|Redis|Cassandra (opt), ElasticSearch (opt), H2 (opt), MongoDB (opt), MySQL (opt), Postgresql (opt), Redis (opt), SQL Server (opt)|Cassandra (opt), CouchDB (opt), ElasticSearch (opt), LevelDB (opt), MongoDB (opt), MySQL (opt), Neo4J (opt), Postgresql (opt), Redis (opt), SQLite (opt)|Cassandra (opt), CouchDB (opt), ElasticSearch (opt), LevelDB (opt), MongoDB (opt), MySQL (opt), Neo4J (opt), Postgresql (opt), Redis (opt), SQLite (opt)
Documentation generators||typedoc|||
Frontend Frameworks|AngularJS 2.0|AngularJS 2.0|AngularJS 1.2, AngularJS 1.3, AngularJS 1.4|AngularJS 2.0|AngularJS 2.0
Fullstack Frameworks|||Spring MVC||
Languages|JS ES5, JS ES6 (ES2015), Typescript|JS ES5, JS ES6 (ES2015), Typescript|Java 7, Java 8, JS ES5, JS ES6 (ES2015), SASS (opt), SCSS|JS ES5, JS ES6 (ES2015), JSX (opt), Python, Typescript|JS ES5, JS ES6 (ES2015), Typescript
Linters|stylelint||JSHint|ESLint|tslint
Loaders|Webpack|Webpack|Spring|Webpack|SystemJS
Misc|Angular Style Guide, ngrx, Redux, redux-devtools, RxJS|Angular Material, Immutable, ng2-redux, Redux, redux-devtools, RxJS|angular-omni-bar (opt), cssnano, gulp-htmlmin, HikariCP, Jackson, Liquibase, Logback, ng-annotate, Spring Boot, useref, wiredep|autoprefixer, cssnano, Helmet, nodemon, Redux, redux-devtools, redux-logging, RxJS (opt)|cssnano, Electron, ngrx, Redux, redux-devtools, RxJS
Notification Systems|Growl (opt)|Growl (opt)|||
Package Managers|npm|npm|bower, npm, Yarn (opt)|npm|npm
Performance Testers|||Gatling||
Routers|Angular Component Router|Angular Component Router||Angular Component Router|Angular Component Router
Runtime Environments|Node|Node|Node|Node|NativeScript, Node
Security Frameworks|||Spring Social||
Stacks|angular-cli|angular-cli|||
Styles|||Normalize.css||
Task Runners||Gulp|Ant (opt)||Gulp
Templating Engines|||Angular directives, Thymeleaf||
Test assertion libraries|Chai, Mocha|Chai, Jasmine, Mocha|Jasmine|Jasmine|Jasmine
Test coverage reporters|||karma-coverage|Istanbul|
Test runners|||BrowserSync, Karma|Karma, Robot|Karma
Transpilers|libsass|libsass|libsass|libsass|
Unit testers|||JUnit, Mockito||

## File Structure
```
.
├── README.md
├── angular-cli.json
├── assets
├── config
│   ├── environment.dev.ts
│   ├── environment.js
│   ├── environment.prod.ts
│   ├── karma-test-shim.js
│   ├── karma.conf.js
│   └── protractor.conf.js
├── e2e
│   ├── app.e2e-spec.ts
│   ├── app.po.ts
│   ├── robot
│   │   ├── exec
│   │   │   ├── readme.md
│   │   │   ├── run_all_on_browserstack_desktop_ie.bash
│   │   │   ├── run_all_on_browserstack_desktop_safari.bash
│   │   │   ├── run_all_on_browserstack_device_android.bash
│   │   │   ├── run_all_on_browserstack_device_ios.bash
│   │   │   ├── run_all_on_local_chrome.bash
│   │   │   ├── run_smoke_on_local_chrome.bash
│   │   │   └── run_template.bash
│   │   ├── resources
│   │   │   ├── dev_test
│   │   │   │   ├── curl_tests
│   │   │   │   │   └── check_url_status.robot
│   │   │   │   └── readme.md
│   │   │   ├── features
│   │   │   │   ├── counter
│   │   │   │   │   ├── rs_counter.robot
│   │   │   │   │   ├── rs_counter_decrement.robot
│   │   │   │   │   └── rs_counter_increment.robot
│   │   │   │   ├── login
│   │   │   │   │   ├── controls
│   │   │   │   │   │   └── login_submit.robot
│   │   │   │   │   ├── error_field
│   │   │   │   │   │   └── login_error_field.robot
│   │   │   │   │   ├── loading_field
│   │   │   │   │   │   └── login_loading_field.robot
│   │   │   │   │   ├── password
│   │   │   │   │   │   └── login_password.robot
│   │   │   │   │   ├── rs_login.robot
│   │   │   │   │   └── username
│   │   │   │   │       └── login_username.robot
│   │   │   │   ├── navigation_bar
│   │   │   │   │   ├── rs_navigation_bar.robot
│   │   │   │   │   ├── rs_navigation_bar_logout.robot
│   │   │   │   │   └── rs_navigation_bar_user_profile.robot
│   │   │   │   └── reusable_components
│   │   │   └── lib
│   │   │       ├── browser
│   │   │       │   ├── rs_browser.robot
│   │   │       │   └── rs_browserstack.robot
│   │   │       └── curl
│   │   │           └── curl.py
│   │   ├── results
│   │   └── tests
│   │       ├── bugs
│   │       ├── check_for_dead_links
│   │       │   └── check_for_dead_links.robot
│   │       └── stories
│   │           ├── us101112
│   │           │   ├── ac0_general_tests.robot
│   │           │   ├── ac1_able_to_increment.robot
│   │           │   └── ac2_able_to_decrement.robot
│   │           ├── us1234
│   │           │   ├── ac1_able_to_login_with_valid_credentials.robot
│   │           │   ├── ac2_unable_to_login_with_invalid_credentials.robot
│   │           │   └── ac3_able_to_reset_login_form.robot
│   │           └── us5678
│   │               ├── ac1_able_to_logout.robot
│   │               ├── ac2_navigator_shows_user_profile.robot
│   │               └── ac3_able_to_navigate_to_links.robot
│   └── tsconfig.json
├── karma.conf.js
├── node_modules
├── nodemon.json
├── package.json
├── protractor.conf.js
├── proxy.conf.json
├── public
├── server
│   ├── Procfile
│   ├── README.md
│   ├── auth-passport.js
│   ├── db
│   │   ├── claim-rebuttal.json
│   │   ├── claim.json
│   │   ├── contact.json
│   │   ├── crisis.json
│   │   ├── hero.json
│   │   ├── note.json
│   │   ├── rebuttal.json
│   │   └── user.json
│   ├── node-proxy.js
│   ├── node-server.js
│   ├── proxy-config.js
│   └── webpack-dev-proxy.js
├── src
│   ├── app
│   │   ├── app.module.ts
│   │   ├── app.page.css
│   │   ├── app.page.html
│   │   ├── app.page.spec.ts
│   │   ├── app.page.ts
│   │   ├── app.routing.ts
│   │   ├── books
│   │   │   ├── README.md
│   │   │   ├── add-commas
│   │   │   │   └── add-commas.pipe.ts
│   │   │   ├── book-authors
│   │   │   │   └── book-authors.component.ts
│   │   │   ├── book-detail
│   │   │   │   └── book-detail.component.ts
│   │   │   ├── book-exists
│   │   │   │   └── book-exists.guard.ts
│   │   │   ├── book-preview
│   │   │   │   ├── book-preview-list.component.ts
│   │   │   │   └── book-preview.component.ts
│   │   │   ├── book-search
│   │   │   │   └── book-search.component.ts
│   │   │   ├── books.module.ts
│   │   │   ├── books.routing.ts
│   │   │   ├── collection.page.ts
│   │   │   ├── ellipsis
│   │   │   │   └── ellipsis.pipe.ts
│   │   │   ├── find-book.page.ts
│   │   │   ├── selected-book.page.ts
│   │   │   └── view-book.page.ts
│   │   ├── contact
│   │   │   ├── contact.module.ts
│   │   │   ├── contact.page.css
│   │   │   ├── contact.page.html
│   │   │   ├── contact.page.ts
│   │   │   └── contact.routing.ts
│   │   ├── core
│   │   │   ├── about
│   │   │   │   └── about.page.ts
│   │   │   ├── core.module.ts
│   │   │   ├── core.routing.ts
│   │   │   ├── exception.service.ts
│   │   │   ├── logger.service.ts
│   │   │   ├── navigator
│   │   │   │   ├── layout.component.ts
│   │   │   │   ├── nav-item.component.ts
│   │   │   │   ├── navigator.module.ts
│   │   │   │   ├── sidenav.component.ts
│   │   │   │   └── toolbar.component.ts
│   │   │   ├── not-found
│   │   │   │   └── not-found.page.ts
│   │   │   ├── spinner.component.ts
│   │   │   ├── store
│   │   │   │   ├── book
│   │   │   │   │   ├── book.actions.ts
│   │   │   │   │   ├── book.effects.ts
│   │   │   │   │   ├── book.model.ts
│   │   │   │   │   ├── book.reducer.ts
│   │   │   │   │   └── google-books.service.ts
│   │   │   │   ├── claim
│   │   │   │   │   ├── README.md
│   │   │   │   │   ├── claim.actions.ts
│   │   │   │   │   ├── claim.effects.ts
│   │   │   │   │   ├── claim.model.ts
│   │   │   │   │   └── claim.reducer.ts
│   │   │   │   ├── claim-rebuttal
│   │   │   │   │   ├── claim-rebuttal.actions.ts
│   │   │   │   │   ├── claim-rebuttal.effects.ts
│   │   │   │   │   ├── claim-rebuttal.model.ts
│   │   │   │   │   └── claim-rebuttal.reducer.ts
│   │   │   │   ├── collection
│   │   │   │   │   ├── collection.actions.ts
│   │   │   │   │   ├── collection.effects.ts
│   │   │   │   │   └── collection.reducer.ts
│   │   │   │   ├── contact
│   │   │   │   │   ├── contact.actions.ts
│   │   │   │   │   ├── contact.effects.ts
│   │   │   │   │   ├── contact.model.ts
│   │   │   │   │   └── contact.reducer.ts
│   │   │   │   ├── counter
│   │   │   │   │   ├── counter.actions.test.ts
│   │   │   │   │   ├── counter.actions.ts
│   │   │   │   │   ├── counter.model.ts
│   │   │   │   │   └── counter.reducer.ts
│   │   │   │   ├── crisis
│   │   │   │   │   ├── crisis.actions.ts
│   │   │   │   │   ├── crisis.effects.ts
│   │   │   │   │   ├── crisis.model.ts
│   │   │   │   │   └── crisis.reducer.ts
│   │   │   │   ├── data.service.ts
│   │   │   │   ├── db.ts
│   │   │   │   ├── entity
│   │   │   │   │   └── entity.model.ts
│   │   │   │   ├── hero
│   │   │   │   │   ├── hero.actions.ts
│   │   │   │   │   ├── hero.effects.ts
│   │   │   │   │   ├── hero.model.ts
│   │   │   │   │   └── hero.reducer.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── layout
│   │   │   │   │   ├── layout.actions.ts
│   │   │   │   │   ├── layout.model.ts
│   │   │   │   │   └── layout.reducer.ts
│   │   │   │   ├── note
│   │   │   │   │   ├── note.actions.ts
│   │   │   │   │   ├── note.effects.ts
│   │   │   │   │   ├── note.model.ts
│   │   │   │   │   └── note.reducer.ts
│   │   │   │   ├── rebuttal
│   │   │   │   │   ├── rebuttal.actions.ts
│   │   │   │   │   ├── rebuttal.effects.ts
│   │   │   │   │   ├── rebuttal.model.ts
│   │   │   │   │   └── rebuttal.reducer.ts
│   │   │   │   ├── search
│   │   │   │   │   └── search.reducer.ts
│   │   │   │   ├── session
│   │   │   │   │   ├── session.actions.ts
│   │   │   │   │   ├── session.effects.ts
│   │   │   │   │   ├── session.model.ts
│   │   │   │   │   └── session.reducer.ts
│   │   │   │   └── user
│   │   │   │       ├── user.model.ts
│   │   │   │       └── user.reducer.ts
│   │   │   └── title
│   │   │       ├── title.component.html
│   │   │       └── title.component.ts
│   │   ├── counter
│   │   │   ├── README.md
│   │   │   ├── counter.component.css
│   │   │   ├── counter.component.ts
│   │   │   ├── counter.module.ts
│   │   │   ├── counter.page.ts
│   │   │   └── counter.routing.ts
│   │   ├── crisis
│   │   │   ├── crisis-detail
│   │   │   │   └── crisis-detail.component.ts
│   │   │   ├── crisis.module.ts
│   │   │   ├── crisis.page.css
│   │   │   ├── crisis.page.ts
│   │   │   └── crisis.routing.ts
│   │   ├── debate
│   │   │   ├── README.md
│   │   │   ├── claim
│   │   │   │   ├── claim.component.css
│   │   │   │   ├── claim.component.html
│   │   │   │   ├── claim.component.spec.ts
│   │   │   │   └── claim.component.ts
│   │   │   ├── debate.module.ts
│   │   │   ├── debate.page.css
│   │   │   ├── debate.page.html
│   │   │   ├── debate.page.ts
│   │   │   ├── debate.routing.ts
│   │   │   └── rebuttal
│   │   │       ├── rebuttal.component.css
│   │   │       ├── rebuttal.component.html
│   │   │       ├── rebuttal.component.spec.ts
│   │   │       └── rebuttal.component.ts
│   │   ├── hero
│   │   │   ├── hero-detail
│   │   │   │   └── hero-detail.component.ts
│   │   │   ├── hero-list
│   │   │   │   ├── hero-list.component.css
│   │   │   │   └── hero-list.component.ts
│   │   │   ├── hero.module.ts
│   │   │   ├── hero.page.css
│   │   │   ├── hero.page.ts
│   │   │   └── hero.routing.ts
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login-form
│   │   │   │   ├── login-form.component.css
│   │   │   │   ├── login-form.component.test.ts
│   │   │   │   └── login-form.component.ts
│   │   │   ├── login-modal
│   │   │   │   ├── login-modal.component.test.ts
│   │   │   │   └── login-modal.component.ts
│   │   │   └── login.module.ts
│   │   ├── notes
│   │   │   ├── README.md
│   │   │   ├── add-button
│   │   │   │   ├── add-button.component.css
│   │   │   │   ├── add-button.component.html
│   │   │   │   └── add-button.component.ts
│   │   │   ├── note
│   │   │   │   ├── note.component.css
│   │   │   │   ├── note.component.html
│   │   │   │   └── note.component.ts
│   │   │   ├── notes.module.ts
│   │   │   ├── notes.page.css
│   │   │   ├── notes.page.html
│   │   │   ├── notes.page.spec.ts
│   │   │   ├── notes.page.ts
│   │   │   └── notes.routing.ts
│   │   └── shared
│   │       ├── alert
│   │       │   ├── alert.component.test.ts
│   │       │   ├── alert.component.ts
│   │       │   └── index.ts
│   │       ├── assets
│   │       │   └── bernie-sanders-128.jpg
│   │       ├── awesome
│   │       │   └── awesome.pipe.ts
│   │       ├── button
│   │       │   ├── button.component.test.ts
│   │       │   ├── button.component.ts
│   │       │   └── index.ts
│   │       ├── container
│   │       │   ├── container.component.test.ts
│   │       │   └── container.component.ts
│   │       ├── dialog
│   │       │   └── dialog.service.ts
│   │       ├── draggable
│   │       │   └── draggable.directive.ts
│   │       ├── form
│   │       │   ├── form.component.ts
│   │       │   ├── form.test.ts
│   │       │   └── index.ts
│   │       ├── form-error
│   │       │   ├── form-error.component.ts
│   │       │   └── form-error.test.ts
│   │       ├── form-group
│   │       │   ├── form-group.component.ts
│   │       │   └── form-group.test.ts
│   │       ├── highlight
│   │       │   └── highlight.directive.ts
│   │       ├── input
│   │       │   ├── input.component.ts
│   │       │   └── input.test.ts
│   │       ├── label
│   │       │   ├── label.component.ts
│   │       │   └── label.test.ts
│   │       ├── logo
│   │       │   ├── index.ts
│   │       │   ├── logo.component.css
│   │       │   ├── logo.component.test.ts
│   │       │   └── logo.component.ts
│   │       ├── modal
│   │       │   ├── modal.component.css
│   │       │   ├── modal.component.test.ts
│   │       │   └── modal.component.ts
│   │       ├── modal-content
│   │       │   ├── modal-content.component.test.ts
│   │       │   └── modal-content.component.ts
│   │       ├── shared.module.ts
│   │       └── util.ts
│   ├── assets
│   │   ├── bernie-app.png
│   │   ├── bernie-sanders-128.jpg
│   │   ├── bernie-spreadsheet.png
│   │   ├── collection.png
│   │   ├── counter.png
│   │   ├── notes.png
│   │   ├── rangleio-logo.svg
│   │   └── styles
│   │       ├── align.css
│   │       ├── background-colors.css
│   │       ├── basscss.scss
│   │       ├── colors.css
│   │       ├── flexbox.css
│   │       ├── grid.css
│   │       ├── hero-styles.css
│   │       ├── hide.css
│   │       ├── index.scss
│   │       ├── media-object.css
│   │       ├── position.css
│   │       ├── responsive-margin.css
│   │       └── responsive-padding.css
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   ├── tsconfig.json
│   └── typings.d.ts
├── tslint.json
├── typings.json
└── webpack-config.js
```