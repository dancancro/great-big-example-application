
[![Build Status](https://travis-ci.org/dancancro/great-big-angular2-example.svg?branch=master)](https://travis-ci.org/dancancro/great-big-angular2-example)
[![Dependency Status](https://david-dm.org/dancancro/great-big-angular2-example.svg)](https://david-dm.org/dancancro/great-big-angular2-example)

[Live Demo](http://great-big-angular2-example.herokuapp.com)

## Background and Motivation

This project is an attempt by an unemployed non-college-student to infer from available demos what the codebase might
look like for the real-world, commercial codebases that you don't get to see until you are hired by a real company and
sign and NDA.

The rationale behind this is pretty simple...

    1. Real, complete code examples are better than docs, lessons and Gitter Q&A. And MUCH better 
    than ellipses (...).
    2. If you want a job making commercial-grade code, you should study commercial-grade code,
    not tutorial-grade code. Anything you learn in a tutorial must sadly be approached with caution 
    because corners have probably been cut, it's probably been simplified and it probably doesn't 
    show you the exact way anyone does it on a real job. The difference between exact and almost 
    exact is huge. Tutorials show you how you *can* use a feature of the technology but often they 
    do so in situations when in real life you would not do things that way. I call these cases 
    instructional red herrings. Instructional Red Herrings are very expensive, timewise. It's just 
    as important to know how to use a technology's features as it is to know when.
    3. If you want to know how fast a big Angular app will build, run and test before investing
    the time to learn Angular - and you should - then you need source code for a big app before
    you even write Hello World.
    4. If you want to know the complexity limits a technology will place on your app before you
    commit to using it, there's no better way than to see a complex example made with that technology.
    5. Making architectural decisions or convention decisions is a whole lot easier when you have
    a complete application with all of its edge cases to illuminate the consequences.

Hopefully, when the project is done it will make the learning process for others much easier and prepare them to
make real things rather than instructional ones. I expect it to reduce the time to implement your own real
application from months to days.

Coming from different demos, the features of the app are not related to each other and it won't make any sense
to have them together but the point is just to demonstrate how things should work technically, so that's okay.

A huge thanks to those who created the example demos from which I put together this amalgam. 

To make this big app from the small ones, I took these projects and integrated/restructured/restyled their code
according to the following prioritization. Disagreements in approach between two influences are resolved by the
lower influence yielding to the higher one:

1. [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html) by Google
2. [Tour of Heroes (ngModules, Routing, App Specs, HTTP, Server Communication versions)](https://github.com/dancancro/tour-of-heroes-versions) by Google
3. [Angular CLI](https://github.com/angular/angular-cli) by Google and the community
4. [ngrx example app - book collection](https://github.com/ngrx/example-app) by [@MikeRyan52](https://github.com/MikeRyan52)
5. [angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced) by Minko Gechev + Nathan Walker + community
6. [ng2-state-talk - drag/editable notes](https://github.com/JavascriptMick/ng2-state-talk) by [@JavascriptMick](https://github.com/JavascriptMick) 
7. [rangle-starter Angular 2 with TypeScript and Redux version - counter](https://www.npmjs.com/package/rangle-starter) by [@SethDavenport](https://github.com/SethDavenport)

In addition to the features from these demos, I added one of my own. I replaced

8. [this other project](http://www.bernierebuttals.org) 

which was made with JQuery and Google Scripts. The data is 
contained in [this Google Sheet](https://docs.google.com/spreadsheets/d/1RdIhMdNCRJ-xtl6IgbT2SdChtLIYW8VXeloq7rR1lqY/edit#gid=50602236) 
and served as JSON by a Google script.

See the [Angular Change log](https://angular.io/docs/ts/latest/guide/change-log.html) for updates to the Angular team's opinions.

## My Innovations

While the goal of the project is to combine the wisdom of different experts, nobody can resist introducing improvements when there's 
no obvious case against doing so. So you will see a couple of practices in this project that came from my head rather than the sources 
of expertise from which the project was assembled. If you can think of reasons not to do these things, please let me know.

1. I have put the Redux store reducers in `app/core/store` separate from the feature directories located under `app` and did not make folders
for `reducers`, `actions`, and `effects`. This jibes with the traditional relational database structure that has tables together in one place 
and referenced by UI artifacts in another place. This is the recommended practice with Redux.
2. As much as practical the names of files in a directory begin with the directory name. I did this to prevent directories from having a mixture of 
unrelated concerns. If a directory in a source demo had files for two different things, I created more directories. I thought about 
removing that part of the file name, `src/app/app.page.ts` -> `src/app/page.ts`, for the sake of DRY, and I might still do that, but I'm 
undecided on whether it would cause confusion to see many files in an editor with the same name.
3. I noticed a lot of duplication and boilerplate of identical CRUD code for each of my types of entities. So I made an `entities` folder akin to 
the other parts of the store to hold what was common to all of them. `entity.action.ts` has the common actions. `entity.effects.ts` has some utility
functions for the common CRUD effects that are called from minimal specific entities. `entity.model.ts` contains the common schema and reducer code.
4. I came up with a mini lexicon of file types to keep file names shorter and more expressive. A "page" is understood to be a smart `@Component`
class that fills the page and might have a router-outlet and route configurations. A "guard" is understood to be an `@Injectable` "service" class that
returns a boolean. A "routing" is a `@NgModule` class that contains route configurations. So I memorize this simple lexicon, and drop the
redundant, less-clear words from the names. For example, I use the name `app.page.ts` rather than `app.component.ts` or `app-page.component.ts`.
I use `auth.guard.ts` instead of `auth-guard.service.ts`. I use `books.routing.ts` instead of `books-routing.module.ts`.

| A | is a class decorated with | that | Example file name | Example class name |
|:--- | :--- | :--- | :--- | :--- |
| page | @Component | more or less fills the screen - a "smart" component that gets data from something other than `@Input`s | app.page.ts | AppPage |
| component | @Component | has to be contained by a page or other components - a "dumb" component that only gets data from `@Input`s | login.component.ts | LoginComponent |
| guard | @Injectable | returns a boolean and [does whatever an Angular guard does](https://angular.io/docs/ts/latest/guide/router.html#!#guards) | auth.guard.ts | AuthGuard |
| service | @Injectable | provides a service or data | auth.service.ts | AuthService |
| routing | @NgModule | contains route configurations | books.routing.ts | BooksRouting |
| module | @NgModule | associates related components and providers | books.module.ts | BooksModule |

That's it. It shouldn't be too hard to remember these, and in return you will have consistent, short, expressive file names.

## Blocking Angular bugs

| Issue | Description | Features |
| :-- | :-- | :-- |
| [14480](https://github.com/angular/angular/issues/14480) | Angular 2 relative pathing from siblings doesn't work | Compose Message box on Crisis Center and login success routing |
| [14201](https://github.com/angular/angular/pull/14201) | Duplicate instantiation of lazy loaded modules | ngrx Effects |

## Prerequisites

You will need to have [Git](https://git-scm.com/) and [Node.js + NPM](http://nodejs.org) installed on your machine. 

You will also need to install the `angular-cli` NPM package globally via `npm i -g angular-cli`.

If you want to debug server-side code, install [Visual Studio Code](https://code.visualstudio.com/). This project has the configuration to
use VS Code for debugging.

If you want to Dockerize your app, go [here](http://www.dzurico.com/dockerize-angular-application) to setup Docker, and 
install [PhantomJS](http://phantomjs.org/download.html). It's used by Docker.


## Make it go

This is a standard angular-cli generated application so you can use all of the ng XXX commands to manage the application.

```
# Download the code
$ git clone https://github.com/dancancro/great-big-angular2-example.git
$ cd great-big-angular2-example

# Install dependencies
$ npm install

# Run the backend server 

... in debug mode
Select Launch via NPM from VSCode debug menu. Click DEBUG.

... without debugging
$npm run dev:server

# Build and start the frontend server
$ npm run dev:client

# Continuously run the tests
$ ng test

```

Then navigate to [http://localhost:4200](http://localhost:4200) in your browser. If you get stuck on anything, no matter how little, 
please let me know. I know how the little things are what cause the problems and I don't want you to have any problems.

## Special Heroku instruction

Set Config var NPM_CONFIG_PRODUCT to false on the Settings tab of your app admin page.

## Demonstrations and Features

| **Developer Experience** |[great big angular2 example](https://github.com/dancancro/great-big-angular2-example)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|[ngrx example app](https://github.com/ngrx/example-app/issues/100#issuecomment-275451726)|[angular2-redux-starter](https://github.com/rangle/angular2-redux-starter)|[angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)|
|:------ | :------: | :------: | :------: | :------: | :------: | :------: |
[Authentication](https://github.com/jhipster/jhipster-sample-app/blob/5bec9d09ac1fc523fcea5cb97769153b7e97aaf2/src/main/webapp/bower_components/swagger-ui/src/main/javascript/view/AuthView.js "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/session/session.effects.ts#L26 "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/7260a89a3f968243e642b20c9fd6775ba59eaf41/src/services/DefaultAuthService.ts "")| | |[X](https://github.com/rangle/angular2-redux-example/blob/master/src/epics/session.epics.ts#L20 "")| |
[Authentication, with two-factor authentication](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/actions/SampleActions.js#L22 "")| |[UNIQUE](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/actions/SampleActions.js#L22 "")| | | | |
Base Redux code for common CRUD actions|UNIQUE| | | | | |
[Can run on a desktop without a browser](http://electron.atom.io/ "")| | |[UNIQUE](http://electron.atom.io/ "")| | | |
[Client-side routing](https://github.com/jgoux/generator-angulpify/blob/master/generators/app/templates/_package.json "")|[X](http://www.developereconomics.com/feature-comparison-of-4-popular-js-mv-frameworks/ ",,")|[X](http://www.developereconomics.com/feature-comparison-of-4-popular-js-mv-frameworks/ ",,")|[X](http://www.developereconomics.com/feature-comparison-of-4-popular-js-mv-frameworks/ ",,")|[X](http://www.developereconomics.com/feature-comparison-of-4-popular-js-mv-frameworks/ ",")|[X](http://www.developereconomics.com/feature-comparison-of-4-popular-js-mv-frameworks/ ",")| |
[Client-side routing, State-based routing (?)](http://www.funnyant.com/angularjs-ui-router/ "URL becomes simply a property of the state")|[X](https://www.youtube.com/watch?v=z1NB-HG0ZH4 ",,")|[X](https://www.youtube.com/watch?v=z1NB-HG0ZH4 ",,")|[X](https://www.youtube.com/watch?v=z1NB-HG0ZH4 ",,")|[X](https://www.youtube.com/watch?v=z1NB-HG0ZH4 ",")|[X](https://www.youtube.com/watch?v=z1NB-HG0ZH4 ",")| |
[Client-side unit tests](https://github.com/born2net/Angular-kitchen-sink/blob/132ddece2635d13e983ce873742ba962fc5c7fce/src/app/app.component.spec.ts "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/debate/claim/claim.component.spec.ts "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/132ddece2635d13e983ce873742ba962fc5c7fce/src/app/app.component.spec.ts "")|[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/components/app.component.spec.ts "")| |[X](https://github.com/rangle/angular2-redux-example/blob/master/src/components/button/button.component.test.ts "")| |
[Code coverage reporting (?)](http://blog.johnryding.com/post/46757192364/javascript-code-coverage-with-phantomjs-jasmine-and "Generate reports that tell you how much of your code is being tested")|[X](http://mochajs.org/ ",")|[X](http://mochajs.org/ "")| |[X](http://mochajs.org/ "")|X| |
[Command line interface (CLI)](https://github.com/angular/angular-cli "")|[X](https://github.com/angular/angular-cli "")|[X](https://github.com/angular/angular-cli "")| |[X](https://github.com/angular/angular-cli "")|X| |
[Compiled, supports ahead of time (AOT) compilation](https://github.com/mgechev/angular-seed/blob/18a6e44da97d2734d7e81377df49e52ac70d2354/tools/tasks/seed/build.js.prod.aot.ts "")| | |[UNIQUE](https://github.com/mgechev/angular-seed/blob/18a6e44da97d2734d7e81377df49e52ac70d2354/tools/tasks/seed/build.js.prod.aot.ts "")| | | |
[Components communicate with events](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app3/starwars/components/films-component.ts#L11 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/debate/debate.page.html#L9 "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app3/starwars/components/films-component.ts#L11 "")| |X| | |
[Concurrency (synchronization), immutable data (?)](https://vuejs.org/v2/guide/comparison.html#Update-Performance "With mutable objects, developers pass objects to functions by reference and then end up mutating those objects - in fact, the language encourages them to do so.  This can lead to subtle, hard to detect bugs.    Immutable data solves concurrency problems because values in a set of values are guaranteed to not change between the time the first one is read and the last one is read.    However, immutability can make strongly typed stores harder to accomplish.")|X|X|X|X|X| |
[Core Module](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-12 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/core.module.ts "")| |[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/shared/core/core.module.ts "")| | | |
CSS style checking|X| | | |X| |
[Deployment automation, to a mobile native executable](https://github.com/NathanWalker/angular-seed-advanced#electron-app "")| | |[UNIQUE](https://github.com/NathanWalker/angular-seed-advanced#electron-app "")| | | |
[Deployment automation, using Docker (?)](https://www.docker.io/ "This is for making the app lightweight, portable and self sufficient so you can run it anywhere")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/docker-compose.yml "")| |[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/docker-compose.production.yml "")| |[X](https://github.com/rangle/angular2-redux-example/blob/master/Dockerfile "")| |
[Deployment automation, using Heroku (?)](https://github.com/jhipster/generator-jhipster/issues/1288 "Generates a dist folder that is deployment ready for heroku.com    Heroku is an interface to Amazon's US East EC2 region")|[X](http://great-big-angular2-example.herokuapp.com "")| | | |[X](https://github.com/rangle/angular2-redux-example/blob/master/server/node-server.js#L15 "")| |
[End-to-end tests (?)](https://github.com/born2net/Angular-kitchen-sink/tree/master/e2e "end-to-end tests    Protractor is recommended over karma e2e.  See http://karma-runner.github.io/0.10/intro/faq.html    Protractor \"runs atop\" WebDriver which \"runs atop\" Selenium")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/e2e/app.e2e-spec.ts "")|[X](https://github.com/born2net/Angular-kitchen-sink/tree/master/e2e "")|[X](https://github.com/NathanWalker/angular-seed-advanced/tree/master/src/e2e "")|X|[X](https://github.com/rangle/angular2-redux-example/tree/master/e2e/robot "")| |
[Error handling, Client-side logging](http://www.bennadel.com/blog/2542-logging-client-side-errors-with-angularjs-and-stacktrace-js.htm "")| | |[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/shared/core/services/log.service.ts "")| |X| |
Exchange data with servers without a full page reload|X|X|X|X|X| |
[Hot reloading (?)](http://mern.io/ "After a code change the page will reload and put you in the same place you were in before without losing state.")|[X](https://youtu.be/xsSnOQynTHs?t=506 ",,")|[X](https://youtu.be/xsSnOQynTHs?t=506 ",")|X|[X](https://youtu.be/xsSnOQynTHs?t=506 ",")|[X](https://youtu.be/xsSnOQynTHs?t=506 ",,")| |
In-memory server-side database| |UNIQUE| | | | |
[Lazy (on-demand) loading of client-side code (?)](http://blog.durandal.io/2015/05/20/porting-an-angular-2-0-app-to-aurelia/#comment-2036657491 "Client side code is loaded only as soon as it is needed by the user    However, it can very quickly grow into vast amounts of requests made in a hard-to-predict manner and the latency, especially on 3G (which has very long latencies), will very quickly eat up the hypothetical performance gains")|[X](http://angularjs.blogspot.com/2015/08/angular-1-and-angular-2-coexistence.html ",,")|[X](http://angularjs.blogspot.com/2015/08/angular-1-and-angular-2-coexistence.html ",,")|[X](http://angularjs.blogspot.com/2015/08/angular-1-and-angular-2-coexistence.html ",,")|[X](http://angularjs.blogspot.com/2015/08/angular-1-and-angular-2-coexistence.html ",")|[X](http://angularjs.blogspot.com/2015/08/angular-1-and-angular-2-coexistence.html ",")| |
[Local storage](https://github.com/jhipster/jhipster-sample-app/blob/5bec9d09ac1fc523fcea5cb97769153b7e97aaf2/src/main/webapp/app/blocks/config/localstorage.config.js "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/e29a656b8f923ad9fb5867288f4628674994b697/src/app/core/store/index.ts#L123 "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/services/LocalStorage.ts "")| |X|X| |
[Modularized, route-specific CSS](https://github.com/cgross/generator-cg-angular/issues/113 "")|[X](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#!#style-sheets ",,")|[X](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#!#style-sheets ",,")|[X](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#!#style-sheets ",,")|[X](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#!#style-sheets ",")|[X](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#!#style-sheets ",")| |
[No build process is required](http://www.fullstackradio.com/30 "")|X|X|X|X|X| |
No server-side state stored|X|X|X|X|X| |
[Orders module dependencies (?)](https://github.com/yeoman/generator-angular/issues/1205 "The technology takes care of ordering the dependencies correctly so you never get an error due entirely to misordering.")|X|X|X|X|X| |
[Preloads client-side data (?)](http://angularclass.com/angularconnect-2015-a-highlights-tour/ "Client-side JS application and initial data arrive at the browser together in a single http request    Traditionally, the Javascript arrives first, it loads in the browser and then makes API calls to get the first data as it normally does while being used")|[X](http://angularclass.com/angularconnect-2015-a-highlights-tour/ ",,")|[X](http://angularclass.com/angularconnect-2015-a-highlights-tour/ ",,")|[X](http://angularclass.com/angularconnect-2015-a-highlights-tour/ ",,")|[X](http://angularclass.com/angularconnect-2015-a-highlights-tour/ ",")|[X](http://angularclass.com/angularconnect-2015-a-highlights-tour/ ",")| |
[Production build, generate docs (?)](https://github.com/yeoman/yeoman/issues/152 "By reading comments in your code or maintaining separate docs:  https://github.com/millermedeiros/mdoc    examples:  ngDoc  YUIdoc")| |[X](http://typedoc.org/ "")|[X](http://typedoc.org/ "")| | | |
[Production build, safe pre-minification (?)](https://medium.com/@MikeRyan52/angular-2-first-app-post-mortem-b2b2b3618828#.xik5mk7bd "uses grunt-ngmin or ng-annotate or gulp ng-gulp-annotate.so you don't have to use the Angular injection syntax for safe minification (i.e. you dont need $inject or (\['$scope','$http',....    ngmin does not produce minsafe code for things that are not main level elements like controller, services, providers, etc.      ng-annotate is an improvement/alternative to ng-min.  ng-min is deprecated    ng-annotate no longer requires that the following comment be written before each service declaration:    /**   * @ngInject   */")|[X](https://medium.com/@MikeRyan52/angular-2-first-app-post-mortem-b2b2b3618828#.xik5mk7bd ",,")|[X](https://medium.com/@MikeRyan52/angular-2-first-app-post-mortem-b2b2b3618828#.xik5mk7bd ",,")|[X](https://medium.com/@MikeRyan52/angular-2-first-app-post-mortem-b2b2b3618828#.xik5mk7bd ",,")|[X](https://medium.com/@MikeRyan52/angular-2-first-app-post-mortem-b2b2b3618828#.xik5mk7bd ",")|[X](https://medium.com/@MikeRyan52/angular-2-first-app-post-mortem-b2b2b3618828#.xik5mk7bd ",")| |
[Separation of smart containers and dumb components (?)](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.vkyyo356c "Such components typically do the following things: subscribe to data, fetch data from those subscriptions, and fetch global client-side state from stores.  Ideally, once a smart component has assembled such a set of data, it passes it off to a reusable component child to render with. Smart components usually don’t render anything apart from one or more reusable children. This makes it easy to separate rendering and data loading in your tests.")|X| | |X| | |
[Server-side integration & unit tests](http://www.letscodejavascript.com/v3/episodes/live/1 "")|X|X| |X| | |
[Shared Module](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-10 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/shared/shared.module.ts "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/8cc88024f22156f397f2aa95dc142460f720f50f/src/comps/app1/lazyone/SharedModule.ts "")| | | | |
[Single source of truth, central state management (?)](https://vuejs.org/v2/guide/state-management.html "only one piece of the application flow is tasked with mutating state data")|X|X|X|X|X| |
State inspection tools|X|X|X|X|X| |
[Style guide for code (?)](https://github.com/Swiip/generator-gulp-angular/pull/469 "Provides consistency and best practices")|[X](https://angular.io/docs/ts/latest/guide/style-guide.html "")| |[X](https://angular.io/docs/ts/latest/guide/style-guide.html "")| | | |
[Templating, parsable HTML, no imperative code allowed](http://www.fullstackradio.com/30 "")|X|X|X|X|X| |
[There is a book about it](http://www.amazon.com/MEAN-Web-Development-Amos-Haviv-ebook/dp/B00NXWI1BM/ref=dp_kinw_strp_1 "")| | | | |[UNIQUE](http://angular-2-training-book.rangle.io/ "")| |
[Time travel, undo (?)](http://redux.js.org/docs/recipes/ImplementingUndoHistory.html "You can move forward and backward through a series of state changes")|X|X|X|X|X| |
[Typed (?)](https://www.dartlang.org/ "When the IDE knows type information, it can offer statement completion, reducing typos.    As an application grows in size, renaming and other refactoring operations become necessary. Without type information, error-prone search and replace options must be used")|X|X|X|X|X| |
[Typed, statically (?)](http://qr.ae/fe0h2 "This is a good way to check things automatically, but you should be writing unit tests that can accomplish the same thing.    It also makes possible editor assistance by giving you code completion to display available methods for an object.")|X|X|X|X|X| |
[Update generated code in an existing app](https://jhipster.github.io/upgrading-an-application/ "")| | |[UNIQUE](https://github.com/mgechev/angular-seed/wiki/Architecture-and-usage-of-angular2-seed#build "")| | | |
|  | | | | | |
| **User Experience** |[great big angular2 example](https://github.com/dancancro/great-big-angular2-example)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|[ngrx example app](https://github.com/ngrx/example-app/issues/100#issuecomment-275451726)|[angular2-redux-starter](https://github.com/rangle/angular2-redux-starter)|[angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)|
[Account Management, Forgotten Password with Resetting](https://github.com/meanjs/mean/issues/30 "")| |[UNIQUE](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/entry/ForgotPass.ts "")| | | | |
[Account Management, login/logout](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/entry/EntryPanel.ts "")|X|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/entry/EntryPanel.ts "")| | |[X](https://github.com/rangle/angular2-redux-example/tree/master/src/components/login "")| |
[Analytics](https://github.com/jhipster/generator-jhipster/blob/4cce6ecc6719d80cc6ed29f8303ed608d8133423/generators/client/templates/angular/src/main/webapp/_index.html "")| | |[UNIQUE](https://github.com/NathanWalker/angular-seed-advanced "")| | | |
[Asynchronously loaded data example](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/data.service.ts#L32 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/data.service.ts#L32 "")|X|[X](https://github.com/NathanWalker/angular-seed-advanced/blob/dadb1052f74cb3114547de94d297cc591ed27ab1/src/client/app/shared/sample/services/name-list.service.ts#L31 "")|X| | |
[Breadcrumbs (?)](https://github.com/born2net/Angular-kitchen-sink/tree/master/src/comps/breadcrumb "Breadcrumbs are the series of links displayed at the top of a page which take you to any of the ancestral pages between the home page and the one you're on")| |[UNIQUE](https://github.com/born2net/Angular-kitchen-sink/tree/master/src/comps/breadcrumb "")| | | | |
[Derived, computed properties](http://redux.js.org/docs/recipes/ComputingDerivedData.html "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/claim/claim.model.ts#L27-L29 "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/models/ServerModel.js#L35 "")| | | | |
[Dynamic component creation](https://github.com/born2net/Angular-kitchen-sink/tree/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/dynmiaccomp "")| |[UNIQUE](https://github.com/born2net/Angular-kitchen-sink/tree/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/dynmiaccomp "")| | | | |
[External, 3rd party, API interaction](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/services/SearchSpotifyService.ts "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/book/google-books.service.ts "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/services/SearchSpotifyService.ts "")| |X| | |
[Footer](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/footer/Footer.ts "")| |[UNIQUE](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/footer/Footer.ts "")| | | | |
[Front-end CRUD](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|[X](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/contact "")|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/components/home/home.component.html "")| | | |
[Full-stack CRUD (?)](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "CRUD = Create,Read,Update, Delete    The example demonstrates creating, reading, updating and deleting from a backend file system or database through a web page user interface.  It includes seed data and does not require a lot of work to get the app connected to a database")|[X](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/contact "")|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")| | | | |
[Full-stack CRUD, with Create, Update and Delete](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|[X](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/contact "")|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")| | | | |
[Full-stack CRUD, with Create, Update and Delete, individual records](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|[X](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/contact "")|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")| | | | |
[Full-stack CRUD, with Create, Update and Delete, whole data structures](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/data.service.ts "")|[UNIQUE](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/data.service.ts "")| | | | | |
[Full-stack CRUD, with Read](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|[X](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/contact "")|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")| | | | |
[i18n, localization (?)](https://jhipster.github.io/installing-new-languages/ "Internationalization or localization    Text for different languages are stored in separate places and used to fill in placeholders in the view depending on the user's preferences")| | |[UNIQUE](https://github.com/NathanWalker/angular-seed-advanced/tree/master/src/client/app/shared/i18n "")| | | |
[Many-to-many data](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/index.ts#L265 "")|[UNIQUE](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/index.ts#L265 "")| | | | | |
[Mouse wheel (?)](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/Mousewheel/Mousewheel.ts "Demonstrates reaction to mouse wheel input")| |[UNIQUE](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/Mousewheel/Mousewheel.ts "")| | | | |
[Navigation bar](https://github.com/jhipster/jhipster-sample-app/tree/master/src/main/webapp/app/layouts/navbar "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/app.page.html "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/app.page.html "")| |[X](https://github.com/ngrx/example-app/blob/master/src/app/containers/app.ts#L15 "")| | |
[Panels, draggable](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/dragndrop/make-draggable.directive.ts "")|X|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/dragndrop/make-draggable.directive.ts "")| | | | |
[Responsive styles](https://youtu.be/d1MEM8PdAzQ?t=588 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/166ae9353bd6ff34badbc045b2044cf417c6d8c5/src/assets/styles/flexbox.css#L4 "")| | | |[X](https://github.com/rangle/angular2-redux-example/blob/2c541e5ce057111c32464ccee3624ab50d84f084/src/components/modal/modal.css#L7 "")| |
[Search, actually works with backend API](https://github.com/jhipster/generator-jhipster/search?utf8=%E2%9C%93&q=elasticsearch "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/books/book-search/book-search.component.ts "")| | |[X](https://github.com/ngrx/example-app/blob/master/src/app/components/book-search.ts "")| | |
|  | | | | | |
| **Dependencies** |[great big angular2 example](https://github.com/dancancro/great-big-angular2-example)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|[ngrx example app](https://github.com/ngrx/example-app/issues/100#issuecomment-275451726)|[angular2-redux-starter](https://github.com/rangle/angular2-redux-starter)|[angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)|
Backend Frameworks |Express | |Express | |Express |
Client-side API interfaces |@angular/http |@angular/http |@angular/http |@angular/http |@angular/http |
Continuous integration testers |Travis | |Travis | | |
Convenience method libraries |lodash |lodash |lodash |lodash | |
Databases | |Redis | | | |
Documentation generators | |typedoc |typedoc | | |
Frontend Frameworks |Angular 2.0 |Angular 2.0 |Angular 2.0 |Angular 2.0 |Angular 2.0 |
Languages |JS ES5, JS ES6 (ES2015), JSX (opt), Typescript |JS ES5, JS ES6 (ES2015), Typescript |JS ES2016, JS ES5, JS ES6 (ES2015), Typescript |JS ES5, JS ES6 (ES2015), Typescript |JS ES5, JS ES6 (ES2015), JSX (opt), Python, Typescript |
Linters |codelyzer, ESLint, stylelint, tslint | |codelyzer, tslint |codelyzer, tslint |ESLint, stylelint |
Loaders/Bundlers |Webpack |Webpack |Rollup, SystemJS |Webpack |Webpack |
Misc |Angular Style Guide, Helmet, nodemon, Redux, redux-devtools, RxJS |Immutable, Redux, redux-devtools, RxJS |Angular Style Guide, cssnano, Electron, Redux, redux-devtools, RxJS |Redux, redux-devtools, RxJS (opt) |autoprefixer, cssnano, Helmet, nodemon, Redux, redux-devtools, redux-logging, RxJS |
Package Managers |npm |npm |npm |npm |npm |
Routers |Angular Component Router |Angular Component Router |Angular Component Router |Angular Component Router |Angular Component Router |
Runtime Environments |Node |Node |NativeScript, Node |Node |Node |
Stacks |angular-cli |angular-cli |mgechev's angular-seed |angular-cli | |
Task Runners | |Gulp |Gulp | | |
Test assertion libraries |Chai, Jasmine, Mocha |Chai, Jasmine, Mocha |Jasmine |Chai, Jasmine, Mocha |Jasmine |
Test coverage reporters |Istanbul | | | |Istanbul |
Test runners |Karma | |BrowserSync (opt), Karma |Karma, Protractor |Karma, Robot |
Transpilers |libsass |libsass | |libsass |libsass |
Widget collections |Angular Material |Angular Material | | | |

## File Structure
```
.
├── README.md
├── docker-compose.production.yml
├── docker-compose.yml
├── e2e
│   ├── about.e2e-spec.ts
│   ├── app.e2e-spec.ts
│   ├── app.po.ts
│   ├── not-found.e2e-spec.ts
│   └── tsconfig.e2e.json
├── karma.conf.js
├── nodemon.json
├── package.json
├── protractor.conf.js
├── proxy.conf.json
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
│   │   ├── app.spec.ts
│   │   ├── bernie
│   │   │   ├── README.md
│   │   │   ├── bernie.module.ts
│   │   │   ├── bernie.page.css
│   │   │   ├── bernie.page.html
│   │   │   ├── bernie.page.ts
│   │   │   ├── bernie.routing.ts
│   │   │   ├── claim
│   │   │   │   ├── claim.component.css
│   │   │   │   ├── claim.component.html
│   │   │   │   ├── claim.component.spec.ts
│   │   │   │   └── claim.component.ts
│   │   │   └── rebuttal
│   │   │       ├── rebuttal.component.css
│   │   │       ├── rebuttal.component.html
│   │   │       ├── rebuttal.component.spec.ts
│   │   │       └── rebuttal.component.ts
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
│   │   │   ├── collection.page.spec.ts
│   │   │   ├── collection.page.ts
│   │   │   ├── ellipsis
│   │   │   │   ├── ellipsis.pipe.ts
│   │   │   │   └── ellipsis.spec.ts
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
│   │   │   ├── auth
│   │   │   │   ├── auth.guard.ts
│   │   │   │   ├── auth.module.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   └── login
│   │   │   │       ├── login-form
│   │   │   │       │   ├── login-form.component.css
│   │   │   │       │   ├── login-form.component.spec.ts
│   │   │   │       │   └── login-form.component.ts
│   │   │   │       ├── login-modal
│   │   │   │       │   ├── login-modal.component.spec.ts
│   │   │   │       │   └── login-modal.component.ts
│   │   │   │       ├── login.component.ts
│   │   │   │       ├── login.module.ts
│   │   │   │       └── login.routing.ts
│   │   │   ├── core.module.ts
│   │   │   ├── core.routing.ts
│   │   │   ├── index.ts
│   │   │   ├── interfaces
│   │   │   │   ├── iconsole.ts
│   │   │   │   ├── ilang.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── iwindow.ts
│   │   │   ├── navigator
│   │   │   │   ├── layout.component.ts
│   │   │   │   ├── nav-item.component.ts
│   │   │   │   ├── navigator.module.ts
│   │   │   │   ├── sidenav.component.ts
│   │   │   │   └── toolbar.component.ts
│   │   │   ├── not-found
│   │   │   │   └── not-found.page.ts
│   │   │   ├── platform
│   │   │   │   ├── platform.directive.spec.ts
│   │   │   │   └── platform.directive.ts
│   │   │   ├── services
│   │   │   │   ├── app.service.ts
│   │   │   │   ├── console.service.ts
│   │   │   │   ├── data.service.spec.ts
│   │   │   │   ├── data.service.ts
│   │   │   │   ├── default-request-options.service.ts
│   │   │   │   ├── exception.service.ts
│   │   │   │   ├── in-memory-data.service.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── log.service.spec.ts
│   │   │   │   ├── log.service.ts
│   │   │   │   ├── router-extensions.service.ts
│   │   │   │   ├── user.service.ts
│   │   │   │   └── window.service.ts
│   │   │   ├── spinner.component.ts
│   │   │   ├── store
│   │   │   │   ├── book
│   │   │   │   │   ├── book.actions.ts
│   │   │   │   │   ├── book.effects.spec.ts
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
│   │   │   │   │   ├── collection.effects.spec.ts
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
│   │   │   │   ├── db.ts
│   │   │   │   ├── entity
│   │   │   │   │   ├── entity.actions.ts
│   │   │   │   │   ├── entity.effects.ts
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
│   │   │   │   ├── user
│   │   │   │   │   ├── user.model.ts
│   │   │   │   │   └── user.reducer.ts
│   │   │   │   └── util.ts
│   │   │   ├── title
│   │   │   │   ├── title.component.html
│   │   │   │   └── title.component.ts
│   │   │   └── utils
│   │   │       ├── config.spec.ts
│   │   │       ├── config.ts
│   │   │       ├── index.ts
│   │   │       ├── type.ts
│   │   │       ├── view-broker.spec.ts
│   │   │       └── view-broker.ts
│   │   ├── counter
│   │   │   ├── README.md
│   │   │   ├── counter.component.css
│   │   │   ├── counter.component.ts
│   │   │   ├── counter.module.ts
│   │   │   ├── counter.page.ts
│   │   │   └── counter.routing.ts
│   │   ├── heroes
│   │   │   ├── admin
│   │   │   │   ├── admin-dashboard
│   │   │   │   │   └── admin-dashboard.component.ts
│   │   │   │   ├── admin.module.ts
│   │   │   │   ├── admin.page.css
│   │   │   │   ├── admin.page.ts
│   │   │   │   └── admin.routing.ts
│   │   │   ├── crisis-center
│   │   │   │   ├── compose-message
│   │   │   │   │   ├── compose-message.component.html
│   │   │   │   │   └── compose-message.component.ts
│   │   │   │   ├── crisis-center-home
│   │   │   │   │   └── crisis-center-home.component.ts
│   │   │   │   ├── crisis-center.module.ts
│   │   │   │   ├── crisis-center.page.css
│   │   │   │   ├── crisis-center.page.html
│   │   │   │   ├── crisis-center.page.ts
│   │   │   │   ├── crisis-center.routing.ts
│   │   │   │   ├── crisis-detail
│   │   │   │   │   ├── crisis-detail-resolver.service.ts
│   │   │   │   │   └── crisis-detail.component.ts
│   │   │   │   └── crisis-list
│   │   │   │       ├── crisis-list.component.css
│   │   │   │       └── crisis-list.component.ts
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard-crisis
│   │   │   │   │   ├── dashboard-crisis.component.css
│   │   │   │   │   ├── dashboard-crisis.component.html
│   │   │   │   │   └── dashboard-crisis.component.ts
│   │   │   │   ├── dashboard-hero
│   │   │   │   │   ├── dashboard-hero.component.css
│   │   │   │   │   ├── dashboard-hero.component.html
│   │   │   │   │   ├── dashboard-hero.component.spec.ts
│   │   │   │   │   └── dashboard-hero.component.ts
│   │   │   │   ├── dashboard.component.css
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.ts
│   │   │   │   ├── dashboard.module.ts
│   │   │   │   ├── dashboard.routing.ts
│   │   │   │   └── hero-search
│   │   │   │       ├── hero-search.component.css
│   │   │   │       ├── hero-search.component.html
│   │   │   │       └── hero-search.component.ts
│   │   │   ├── hero
│   │   │   │   ├── hero-detail
│   │   │   │   │   ├── hero-detail.component.css
│   │   │   │   │   ├── hero-detail.component.html
│   │   │   │   │   ├── hero-detail.component.no-testbed.spec.ts
│   │   │   │   │   ├── hero-detail.component.spec.ts
│   │   │   │   │   └── hero-detail.component.ts
│   │   │   │   ├── hero-list
│   │   │   │   │   ├── hero-list.component.css
│   │   │   │   │   ├── hero-list.component.html
│   │   │   │   │   ├── hero-list.component.spec.ts
│   │   │   │   │   └── hero-list.component.ts
│   │   │   │   ├── hero.module.ts
│   │   │   │   └── hero.routing.ts
│   │   │   ├── heroes.module.ts
│   │   │   ├── heroes.page.css
│   │   │   ├── heroes.page.html
│   │   │   ├── heroes.page.ts
│   │   │   └── heroes.routing.ts
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
│   │   │   ├── notes-routing.module.ts
│   │   │   ├── notes.module.ts
│   │   │   ├── notes.page.css
│   │   │   ├── notes.page.html
│   │   │   ├── notes.page.spec.ts
│   │   │   └── notes.page.ts
│   │   ├── shared
│   │   │   ├── alert
│   │   │   │   ├── alert.component.spec.ts
│   │   │   │   ├── alert.component.ts
│   │   │   │   └── index.ts
│   │   │   ├── analytics
│   │   │   │   ├── analytics.module.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── services
│   │   │   │       ├── analytics.service.spec.ts
│   │   │   │       └── analytics.service.ts
│   │   │   ├── animations.ts
│   │   │   ├── awesome
│   │   │   │   └── awesome.pipe.ts
│   │   │   ├── banner
│   │   │   │   ├── banner.component.css
│   │   │   │   ├── banner.component.detect-changes.spec.ts
│   │   │   │   ├── banner.component.html
│   │   │   │   ├── banner.component.spec.ts
│   │   │   │   └── banner.component.ts
│   │   │   ├── button
│   │   │   │   ├── button.component.spec.ts
│   │   │   │   ├── button.component.ts
│   │   │   │   └── index.ts
│   │   │   ├── can-deactivate
│   │   │   │   └── can-deactivate.guard.ts
│   │   │   ├── container
│   │   │   │   ├── container.component.spec.ts
│   │   │   │   └── container.component.ts
│   │   │   ├── dialog
│   │   │   │   └── dialog.service.ts
│   │   │   ├── draggable
│   │   │   │   └── draggable.directive.ts
│   │   │   ├── form
│   │   │   │   ├── form.component.spec.ts
│   │   │   │   ├── form.component.ts
│   │   │   │   └── index.ts
│   │   │   ├── form-error
│   │   │   │   ├── form-error.component.spec.ts
│   │   │   │   └── form-error.component.ts
│   │   │   ├── form-group
│   │   │   │   ├── form-group.component.spec.ts
│   │   │   │   └── form-group.component.ts
│   │   │   ├── highlight
│   │   │   │   ├── highlight.directive.spec.ts
│   │   │   │   └── highlight.directive.ts
│   │   │   ├── input
│   │   │   │   ├── input.component.spec.ts
│   │   │   │   └── input.component.ts
│   │   │   ├── label
│   │   │   │   ├── label.component.spec.ts
│   │   │   │   └── label.component.ts
│   │   │   ├── logo
│   │   │   │   ├── index.ts
│   │   │   │   ├── logo.component.css
│   │   │   │   ├── logo.component.spec.ts
│   │   │   │   └── logo.component.ts
│   │   │   ├── modal
│   │   │   │   ├── modal.component.css
│   │   │   │   ├── modal.component.spec.ts
│   │   │   │   └── modal.component.ts
│   │   │   ├── modal-content
│   │   │   │   ├── modal-content.component.spec.ts
│   │   │   │   └── modal-content.component.ts
│   │   │   ├── selective-preloading-strategy.ts
│   │   │   ├── shared.module.ts
│   │   │   ├── test
│   │   │   │   ├── browser-test-shim.js
│   │   │   │   ├── e2e
│   │   │   │   │   └── dropdowns.ts
│   │   │   │   ├── jasmine-matchers.d.ts
│   │   │   │   ├── jasmine-matchers.ts
│   │   │   │   ├── mocks
│   │   │   │   │   ├── mock-location-strategy.ts
│   │   │   │   │   ├── ng2-config.mock.ts
│   │   │   │   │   ├── router-extensions.mock.ts
│   │   │   │   │   └── window.mock.ts
│   │   │   │   ├── providers
│   │   │   │   │   ├── core.ts
│   │   │   │   │   ├── http.ts
│   │   │   │   │   └── router.ts
│   │   │   │   ├── router-stubs.ts
│   │   │   │   ├── shorthand
│   │   │   │   │   └── ng2-jasmine.ts
│   │   │   │   ├── test.module.ts
│   │   │   │   └── util.ts
│   │   │   ├── title-case
│   │   │   │   ├── title-case.pipe.spec.ts
│   │   │   │   └── title-case.pipe.ts
│   │   │   ├── twain
│   │   │   │   ├── twain.component.spec.ts
│   │   │   │   ├── twain.component.ts
│   │   │   │   └── twain.service.ts
│   │   │   └── welcome
│   │   │       ├── welcome.component.spec.ts
│   │   │       └── welcome.component.ts
│   │   └── wiki
│   │       ├── wiki-smart.component.ts
│   │       ├── wiki.component.ts
│   │       ├── wiki.module.ts
│   │       └── wikipedia.service.ts
│   ├── assets
│   │   ├── bernie-app.png
│   │   ├── bernie-sanders-128.jpg
│   │   ├── bernie-spreadsheet.png
│   │   ├── collection.png
│   │   ├── counter.png
│   │   ├── notes.png
│   │   ├── question-mark.png
│   │   ├── rangleio-logo.svg
│   │   └── styles
│   │       ├── align.css
│   │       ├── background-colors.css
│   │       ├── basscss.scss
│   │       ├── colors.css
│   │       ├── flexbox.css
│   │       ├── grid.css
│   │       ├── hero-styles.css
│   │       ├── heroes.css
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
│   ├── tsconfig.app.json
│   └── tsconfig.spec.json
├── tsconfig.json
└── tslint.json
```
