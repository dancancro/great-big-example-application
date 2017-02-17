[Please click here to support the Standing Rock Sioux Tribe and their peaceful resistance to the Dakota Access Pipeline which threatens their only source of water.](http://www.powwows.com/2016/09/07/10-ways-can-help-standing-rock-sioux-fight-dakota-access-pipeline/) 

[Live Demo](http://great-big-angular2-example.herokuapp.com)

This project is an attempt by an unemployed non-college-student to infer from available demos what the codebase might
look like for the real-world, commercial SPAs that you don't get to see until you are hired by a real company.

The rationale behind this is pretty simple...

    1. Code examples are better than docs, lessons and Gitter Q&A.
    2. If you want a job making commercial-grade code, you should study commercial-grade code,
    not tutorial-grade code. Anything you learn in a tutorial must sadly be judged with 
    trepidation becauase it's probably been simplified and isn't the right way.
    3. If you want to know how fast a big Angular app will build, run and test before investing the time to 
    learn Angular - and you should - then you need source code for a big app before you even write Hello World.
    4. If you want to know the complexity limits a technology will place on your app before you
    commit to using it, there's no better way than to see a complex example made with that technology.

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
2. [Tour of Heroes](https://angular.io/resources/live-examples/ngmodule/ts/plnkr.html) by Google
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

See the [Angular Change log](https://angular.io/docs/ts/latest/guide/change-log.html) for updates.

## My Innovations

Nobody can resist introducing improvements when there's no obvious case against doing so. So you will see a couple of practices in
this project that came from my head rather than the sources of expertise from which the project was assembled. If you can think of 
reasons not to do these things, please let me know.

1. I have put the Redux store reducers in `app/core/store` separate from the feature directories located under `app`. This agrees with 
the traditional relational database structure that has tables together in one place and referenced by UI artifacts in another place. This is the
recommended practice with Redux.
2. As much as practical I created directories named with the first word of their contained files. So the files in a directory are not
a mixture of unrelated concerns.
3. I came up with a mini lexicon of file types to keep file names shorter and more expressive. A "page" is understood to be a `@Component`
class that fills the page and might have a router-outlet and route configurations. A "guard" is understood to be an `@Injectable` "service" class that
returns a boolean. A "routing" is a `@NgModule` class that contains route configurations. So I memorize this simple lexicon, and drop the
redundant, less-clear words from the names. For example, I use the name `app.page.ts` rather than `app.component.ts` or `app-page.component.ts`.
I use `auth.guard.ts` instead of `auth-guard.service.ts`. I use `books.routing.ts` instead of `books-routing.module.ts`.

| A | is a class decorated with | that | Example file name | Example class name |
|:--- | :--- | :--- | :--- | :--- |
| page | @Component | more or less fills the screen - a "smart" component | app.page.ts | AppPage |
| component | @Component | has to be contained by a page or other components - a "dumb" component | login.component.ts | LoginComponent |
| guard | @Injectable | returns a boolean and [does whatever an Angular guard does](https://angular.io/docs/ts/latest/guide/router.html#!#guards) | auth.guard.ts | AuthGuard |
| service | @Injectable | provides a service or data | auth.service.ts | AuthService |
| routing | @NgModule | contains route configurations | books.routing.ts | BooksRouting |
| module | @NgModule | associates related components and providers | books.module.ts | BooksModule |


## Prerequisites
You will need to have [Git](https://git-scm.com/) and [Node.js + NPM](http://nodejs.org) installed on your machine. 

You will also need to install the `angular-cli` NPM package globally via `npm i -g angular-cli`.

If you want to debug server-side code, install [Visual Studio Code](https://code.visualstudio.com/). This project has the configuration to
use VS Code for debugging.

If you want to Dockerize your app, go [here](http://www.dzurico.com/dockerize-angular-application) to setup Docker.

Install [PhantomJS](http://phantomjs.org/download.html). It's used by Docker.


## Make it go
This is a standard angular-cli generated application so you can use all of the ng XXX commands to manage the application.

```
# Download the code
$ git clone https://github.com/dancancro/great-big-angular2-example.git
$ cd great-big-angular2-example

# Install dependencies
$ npm install

# Run the backend server in debug mode
Select Launch via NPM from VSCode debug menu. Click DEBUG.

# Or run the backend server without debugging
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

| **Developer Experience** |[great big angular2 example](https://github.com/dancancro/great-big-angular2-example)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[ngrx example app](https://github.com/ngrx/example-app/issues/100#issuecomment-275451726)|[angular2-redux-starter](https://github.com/rangle/angular2-redux-starter)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|
|:------ | :------: | :------: | :------: | :------: | :------: |
[Authentication](https://github.com/jhipster/jhipster-sample-app/blob/5bec9d09ac1fc523fcea5cb97769153b7e97aaf2/src/main/webapp/bower_components/swagger-ui/src/main/javascript/view/AuthView.js "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/session/session.effects.ts#L26 "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/7260a89a3f968243e642b20c9fd6775ba59eaf41/src/services/DefaultAuthService.ts "")| |[X](https://github.com/rangle/angular2-redux-example/blob/master/src/epics/session.epics.ts#L20 "")| |
[Authentication, with two-factor authentication](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/actions/SampleActions.js#L22 "")| |[**X**](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/actions/SampleActions.js#L22 "")| | | |
[Can run on a desktop without a browser](http://electron.atom.io/ "")| | | | |[**X**](http://electron.atom.io/ "")|
[Client-side unit tests](https://github.com/born2net/Angular-kitchen-sink/blob/132ddece2635d13e983ce873742ba962fc5c7fce/src/app/app.component.spec.ts "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/debate/claim/claim.component.spec.ts "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/132ddece2635d13e983ce873742ba962fc5c7fce/src/app/app.component.spec.ts "")| |[X](https://github.com/rangle/angular2-redux-example/blob/master/src/components/button/button.component.test.ts "")|[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/components/app.component.spec.ts "")|
[Code coverage reporting (?)](http://blog.johnryding.com/post/46757192364/javascript-code-coverage-with-phantomjs-jasmine-and "Generate reports that tell you how much of your code is being tested")|[X](http://mochajs.org/ ",")|[X](http://mochajs.org/ "")|[X](http://mochajs.org/ "")|X| |
[Command line interface (CLI)](https://github.com/angular/angular-cli "")|[X](https://github.com/angular/angular-cli "")|[X](https://github.com/angular/angular-cli "")|[X](https://github.com/angular/angular-cli "")|X| |
[Components communicate with events](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app3/starwars/components/films-component.ts#L11 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/debate/debate.page.html#L9 "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app3/starwars/components/films-component.ts#L11 "")|X| | |
[Core Module](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-12 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/core.module.ts "")| | | |[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/shared/core/core.module.ts "")|
CSS style checking|**X**| | | | |
[Deployment automation, to a mobile native executable](https://github.com/NathanWalker/angular-seed-advanced#electron-app "")| | | | |[**X**](https://github.com/NathanWalker/angular-seed-advanced#electron-app "")|
[Deployment automation, using Docker (?)](https://www.docker.io/ "This is for making the app lightweight, portable and self sufficient so you can run it anywhere")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/docker-compose.yml "")| | |[X](https://github.com/rangle/angular2-redux-example/blob/master/Dockerfile "")|[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/docker-compose.production.yml "")|
[Deployment automation, using Heroku (?)](https://github.com/jhipster/generator-jhipster/issues/1288 "Generates a dist folder that is deployment ready for heroku.com    Heroku is an interface to Amazon's US East EC2 region")|[X](http://great-big-angular2-example.herokuapp.com "")| | |[X](https://github.com/rangle/angular2-redux-example/blob/master/server/node-server.js#L15 "")| |
[Error handling, Client-side logging](http://www.bennadel.com/blog/2542-logging-client-side-errors-with-angularjs-and-stacktrace-js.htm "")| | | |X|[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/shared/core/services/log.service.ts "")|
In-memory server-side database| |**X**| | | |
[Local storage](https://github.com/jhipster/jhipster-sample-app/blob/5bec9d09ac1fc523fcea5cb97769153b7e97aaf2/src/main/webapp/app/blocks/config/localstorage.config.js "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/e29a656b8f923ad9fb5867288f4628674994b697/src/app/core/store/index.ts#L123 "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/services/LocalStorage.ts "")|X|X| |
[Production build, generate docs (?)](https://github.com/yeoman/yeoman/issues/152 "By reading comments in your code or maintaining separate docs:  https://github.com/millermedeiros/mdoc    examples:  ngDoc  YUIdoc")| |[**X**](http://typedoc.org/ "")| | | |
[Separation of smart containers and dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.vkyyo356c "")|X| |X| | |
[Server-side integration & unit tests](http://www.letscodejavascript.com/v3/episodes/live/1 "")|X|X|X| | |
[Shared Module](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-10 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/shared/shared.module.ts "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/8cc88024f22156f397f2aa95dc142460f720f50f/src/comps/app1/lazyone/SharedModule.ts "")| | | |
[Style guide for code (?)](https://github.com/Swiip/generator-gulp-angular/pull/469 "Provides consistency and best practices")|[**X**](https://angular.io/docs/ts/latest/guide/style-guide.html "")| | | | |
[There is a book about it](http://www.amazon.com/MEAN-Web-Development-Amos-Haviv-ebook/dp/B00NXWI1BM/ref=dp_kinw_strp_1 "")| | | |[**X**](http://angular-2-training-book.rangle.io/ "")| |
[Update generated code in an existing app](https://jhipster.github.io/upgrading-an-application/ "")|[X](https://github.com/angular/angular-cli#updating-angular-cli "")|[X](https://github.com/angular/angular-cli#updating-angular-cli "")|[X](https://github.com/angular/angular-cli#updating-angular-cli "")| | |
|  | | | | |
| **User Experience** |[great big angular2 example](https://github.com/dancancro/great-big-angular2-example)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[ngrx example app](https://github.com/ngrx/example-app/issues/100#issuecomment-275451726)|[angular2-redux-starter](https://github.com/rangle/angular2-redux-starter)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|
[Account Management, Forgotten Password with Resetting](https://github.com/meanjs/mean/issues/30 "")| |[**X**](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/entry/ForgotPass.ts "")| | | |
[Account Management, login/logout](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/entry/EntryPanel.ts "")|X|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/entry/EntryPanel.ts "")| |[X](https://github.com/rangle/angular2-redux-example/tree/master/src/components/login "")| |
[Analytics](https://github.com/jhipster/generator-jhipster/blob/4cce6ecc6719d80cc6ed29f8303ed608d8133423/generators/client/templates/angular/src/main/webapp/_index.html "")| | | | |[**X**](https://github.com/NathanWalker/angular-seed-advanced "")|
[Asynchronously loaded data example](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/data.service.ts#L32 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/data.service.ts#L32 "")|X|X| |[X](https://github.com/NathanWalker/angular-seed-advanced/blob/dadb1052f74cb3114547de94d297cc591ed27ab1/src/client/app/shared/sample/services/name-list.service.ts#L31 "")|
[Breadcrumbs (?)](https://github.com/born2net/Angular-kitchen-sink/tree/master/src/comps/breadcrumb "Breadcrumbs are the series of links displayed at the top of a page which take you to any of the ancestral pages between the home page and the one you're on")| |[**X**](https://github.com/born2net/Angular-kitchen-sink/tree/master/src/comps/breadcrumb "")| | | |
[Derived, computed properties](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/models/ServerModel.js#L35 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/claim/claim.model.ts#L27-L29 "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/models/ServerModel.js#L35 "")| | | |
[Dynamic component creation](https://github.com/born2net/Angular-kitchen-sink/tree/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/dynmiaccomp "")| |[**X**](https://github.com/born2net/Angular-kitchen-sink/tree/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/dynmiaccomp "")| | | |
[External, 3rd party, API interaction](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/services/SearchSpotifyService.ts "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/book/google-books.service.ts "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/services/SearchSpotifyService.ts "")|X| | |
[Footer](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/footer/Footer.ts "")| |[**X**](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/footer/Footer.ts "")| | | |
[Front-end CRUD](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|[X](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/contact "")|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")| | |[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/components/home/home.component.html "")|
[Full-stack CRUD (?)](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "CRUD = Create,Read,Update, Delete    The example demonstrates creating, reading, updating and deleting from a backend file system or database through a web page user interface.  It includes seed data and does not require a lot of work to get the app connected to a database")|[X](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/contact "")|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")| | | |
[Full-stack CRUD, with Create, Update and Delete](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|[X](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/contact "")|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")| | | |
[Full-stack CRUD, with Create, Update and Delete, individual records](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|[X](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/contact "")|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")| | | |
[Full-stack CRUD, with Create, Update and Delete, whole data structures](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/data.service.ts "")|[**X**](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/data.service.ts "")| | | | |
[Full-stack CRUD, with Read](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|[X](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/contact "")|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")| | | |
[Grid, Editable](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/debate "")|[**X**](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/debate "")| | | | |
[i18n, localization (?)](https://jhipster.github.io/installing-new-languages/ "Internationalization or localization    Text for different languages are stored in separate places and used to fill in placeholders in the view depending on the user's preferences")| | | | |[**X**](https://github.com/NathanWalker/angular-seed-advanced/tree/master/src/client/app/shared/i18n "")|
[Many-to-many data](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/index.ts#L265 "")|[**X**](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/index.ts#L265 "")| | | | |
[Mouse wheel (?)](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/Mousewheel/Mousewheel.ts "Demonstrates reaction to mouse wheel input")| |[**X**](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/Mousewheel/Mousewheel.ts "")| | | |
[Navigation bar](https://github.com/jhipster/jhipster-sample-app/tree/master/src/main/webapp/app/layouts/navbar "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/app.page.html "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/app.page.html "")|[X](https://github.com/ngrx/example-app/blob/master/src/app/containers/app.ts#L15 "")| | |
[Panels, draggable](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/dragndrop/make-draggable.directive.ts "")|X|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/dragndrop/make-draggable.directive.ts "")| | | |
[Responsive styles](https://youtu.be/d1MEM8PdAzQ?t=588 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/166ae9353bd6ff34badbc045b2044cf417c6d8c5/src/assets/styles/flexbox.css#L4 "")| | |[X](https://github.com/rangle/angular2-redux-example/blob/2c541e5ce057111c32464ccee3624ab50d84f084/src/components/modal/modal.css#L7 "")| |
[Search, actually works with backend API](https://github.com/jhipster/generator-jhipster/search?utf8=%E2%9C%93&q=elasticsearch "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/books/book-search/book-search.component.ts "")| |[X](https://github.com/ngrx/example-app/blob/master/src/app/components/book-search.ts "")| | |
|  | | | | |
| **Dependencies** |[great big angular2 example](https://github.com/dancancro/great-big-angular2-example)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[ngrx example app](https://github.com/ngrx/example-app/issues/100#issuecomment-275451726)|[angular2-redux-starter](https://github.com/rangle/angular2-redux-starter)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|
Backend Frameworks |Express | | |Express |Express
Client-side API interfaces |@angular/http |@angular/http |@angular/http |@angular/http |@angular/http
Continuous integration testers |Travis | | | |Travis
Convenience method libraries |lodash |lodash |lodash | |lodash
Databases | |Redis | | |
Documentation generators | |typedoc | | |
Frontend Frameworks |AngularJS 2.0 |AngularJS 2.0 |AngularJS 2.0 |AngularJS 2.0 |AngularJS 2.0
Languages |JS ES5, JS ES6 (ES2015), JSX (opt), Typescript |JS ES5, JS ES6 (ES2015), Typescript |JS ES5, JS ES6 (ES2015), Typescript |JS ES5, JS ES6 (ES2015), JSX (opt), Python, Typescript |JS ES5, JS ES6 (ES2015), Typescript
Linters |codelyzer, ESLint, stylelint, tslint | |codelyzer, tslint |ESLint |tslint
Loaders/Bundlers |Webpack |Webpack |Webpack |Webpack |SystemJS
Misc |Angular Style Guide, Helmet, nodemon, Redux, redux-devtools, RxJS |Immutable, Redux, redux-devtools, RxJS |Redux, redux-devtools, RxJS (opt) |autoprefixer, cssnano, Helmet, nodemon, Redux, redux-devtools, redux-logging, RxJS |cssnano, Electron, Redux, redux-devtools, RxJS
Package Managers |npm |npm |npm |npm |npm
Routers |Angular Component Router |Angular Component Router |Angular Component Router |Angular Component Router |Angular Component Router
Runtime Environments |Node |Node |Node |Node |NativeScript, Node
Stacks |angular-cli |angular-cli |angular-cli | |
Task Runners | |Gulp | | |Gulp
Test assertion libraries |Chai, Jasmine, Mocha |Chai, Jasmine, Mocha |Chai, Jasmine, Mocha |Jasmine |Jasmine
Test coverage reporters |Istanbul | | |Istanbul |
Test runners |Karma | |Karma, Protractor |Karma, Robot |Karma
Transpilers |libsass |libsass |libsass |libsass |
Widget collections | |Angular Material | | |

## File Structure
```
.
├── README.md
├── angular-cli.json
├── docker-compose.production.yml
├── docker-compose.yml
├── e2e
│   ├── about.e2e-spec.ts
│   ├── app.e2e-spec.ts
│   ├── app.po.ts
│   ├── not-found.e2e-spec.ts
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
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   │   ├── app.page.css
│   │   ├── app.page.html
│   │   ├── app.page.spec.ts
│   │   ├── app.page.ts
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
│   │   │   ├── directives
│   │   │   │   ├── index.ts
│   │   │   │   ├── platform.directive.spec.ts
│   │   │   │   └── platform.directive.ts
│   │   │   ├── exception.service.ts
│   │   │   ├── index.ts
│   │   │   ├── interfaces
│   │   │   │   ├── iconsole.ts
│   │   │   │   ├── ilang.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── iwindow.ts
│   │   │   ├── logger.service.ts
│   │   │   ├── navigator
│   │   │   │   ├── layout.component.ts
│   │   │   │   ├── nav-item.component.ts
│   │   │   │   ├── navigator.module.ts
│   │   │   │   ├── sidenav.component.ts
│   │   │   │   └── toolbar.component.ts
│   │   │   ├── not-found
│   │   │   │   └── not-found.page.ts
│   │   │   ├── services
│   │   │   │   ├── app.service.ts
│   │   │   │   ├── console.service.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── log.service.spec.ts
│   │   │   │   ├── log.service.ts
│   │   │   │   ├── router-extensions.service.ts
│   │   │   │   └── window.service.ts
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
│   │   │   │   ├── login-form.component.spec.ts
│   │   │   │   └── login-form.component.ts
│   │   │   ├── login-modal
│   │   │   │   ├── login-modal.component.spec.ts
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
│   │       │   ├── alert.component.spec.ts
│   │       │   ├── alert.component.ts
│   │       │   └── index.ts
│   │       ├── analytics
│   │       │   ├── analytics.module.ts
│   │       │   ├── index.ts
│   │       │   └── services
│   │       │       ├── analytics.service.spec.ts
│   │       │       └── analytics.service.ts
│   │       ├── assets
│   │       │   └── bernie-sanders-128.jpg
│   │       ├── awesome
│   │       │   └── awesome.pipe.ts
│   │       ├── button
│   │       │   ├── button.component.spec.ts
│   │       │   ├── button.component.ts
│   │       │   └── index.ts
│   │       ├── container
│   │       │   ├── container.component.spec.ts
│   │       │   └── container.component.ts
│   │       ├── dialog
│   │       │   └── dialog.service.ts
│   │       ├── draggable
│   │       │   └── draggable.directive.ts
│   │       ├── form
│   │       │   ├── form.component.spec.ts
│   │       │   ├── form.component.ts
│   │       │   └── index.ts
│   │       ├── form-error
│   │       │   ├── form-error.component.spec.ts
│   │       │   └── form-error.component.ts
│   │       ├── form-group
│   │       │   ├── form-group.component.spec.ts
│   │       │   └── form-group.component.ts
│   │       ├── highlight
│   │       │   └── highlight.directive.ts
│   │       ├── input
│   │       │   ├── input.component.spec.ts
│   │       │   └── input.component.ts
│   │       ├── label
│   │       │   ├── label.component.spec.ts
│   │       │   └── label.component.ts
│   │       ├── logo
│   │       │   ├── index.ts
│   │       │   ├── logo.component.css
│   │       │   ├── logo.component.spec.ts
│   │       │   └── logo.component.ts
│   │       ├── modal
│   │       │   ├── modal.component.css
│   │       │   ├── modal.component.spec.ts
│   │       │   └── modal.component.ts
│   │       ├── modal-content
│   │       │   ├── modal-content.component.spec.ts
│   │       │   └── modal-content.component.ts
│   │       ├── shared.module.ts
│   │       ├── test
│   │       │   ├── e2e
│   │       │   │   └── dropdowns.ts
│   │       │   ├── index.ts
│   │       │   ├── jasmine-matchers.d.ts
│   │       │   ├── jasmine-matchers.ts
│   │       │   ├── mocks
│   │       │   │   ├── mock-location-strategy.ts
│   │       │   │   ├── ng2-config.mock.ts
│   │       │   │   ├── router-extensions.mock.ts
│   │       │   │   └── window.mock.ts
│   │       │   ├── providers
│   │       │   │   ├── core.ts
│   │       │   │   ├── http.ts
│   │       │   │   └── router.ts
│   │       │   ├── router-stubs.ts
│   │       │   ├── shorthand
│   │       │   │   └── ng2-jasmine.ts
│   │       │   └── test.module.ts
│   │       └── util.ts
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
│   └── tsconfig.json
└── tslint.json
```