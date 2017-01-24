[Please click here to support the Standing Rock Sioux Tribe and their peaceful resistance to the Dakota Access Pipeline which threatens their only source of water.](http://www.powwows.com/2016/09/07/10-ways-can-help-standing-rock-sioux-fight-dakota-access-pipeline/) 


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

## Demonstrations and Features

| **Developer Experience** |[great big angular2 example](https://github.com/dancancro/great-big-angular2-example)|[angular2-redux-starter](https://github.com/rangle/angular2-redux-starter)|[angular-cli](https://github.com/angular/angular-cli)|[ngrx example app](https://github.com/ngrx/example-app)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|
|:------ | :------: | :------: | :------: | :------: | :------: |
[Authentication](https://github.com/born2net/Angular-kitchen-sink/blob/7260a89a3f968243e642b20c9fd6775ba59eaf41/src/services/DefaultAuthService.ts "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/session/session.effects.ts#L26)|[X](https://github.com/rangle/angular2-redux-example/blob/master/src/epics/session.epics.ts#L20)| | | |
[Client-side unit tests](https://github.com/born2net/Angular-kitchen-sink/blob/132ddece2635d13e983ce873742ba962fc5c7fce/src/app/app.component.spec.ts "")| |[X](https://github.com/rangle/angular2-redux-example/blob/master/src/components/button/button.component.test.ts)| | |[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/components/app.component.spec.ts)|
[Code coverage reporting (?)](http://blog.johnryding.com/post/46757192364/javascript-code-coverage-with-phantomjs-jasmine-and "Generate reports that tell you how much of your code is being tested")|[X](http://mochajs.org/)|X|[X](http://mochajs.org/)|[X](http://mochajs.org/)| |
[Command line interface (CLI)](https://github.com/Hashnode/mern-cli "")|X|X|X|X| |
[Components communicate with events](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app3/starwars/components/films-component.ts#L11 "")|X| | |X| |
[Core Module](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-12 "")|[**X**](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/core.module.ts)| | | | |
CSS style checking|**X**| | | | |
[Deployment automation, to a mobile native executable](https://github.com/NathanWalker/angular-seed-advanced#electron-app "")| | | | |[**X**](https://github.com/NathanWalker/angular-seed-advanced#electron-app)|
[Deployment automation, using Docker (?)](https://www.docker.io/ "This is for making the app lightweight, portable and self sufficient so you can run it anywhere")| |[X](https://github.com/rangle/angular2-redux-example/blob/master/Dockerfile)| | |[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/docker-compose.production.yml)|
[Deployment automation, using Github Pages](https://github.com/angular/angular-cli "")|[X](https://github.com/angular/angular-cli)| |[X](https://github.com/angular/angular-cli)|[X](https://github.com/angular/angular-cli)| |
[End-to-end tests (?)](https://github.com/born2net/Angular-kitchen-sink/tree/master/e2e "end-to-end tests    Protractor is recommended over karma e2e.  See http://karma-runner.github.io/0.10/intro/faq.html    Protractor \"runs atop\" WebDriver which \"runs atop\" Selenium")| |[X](https://github.com/rangle/angular2-redux-example/tree/master/e2e/robot)| |X|[X](https://github.com/NathanWalker/angular-seed-advanced/tree/master/src/e2e)|
[Error handling, Server-side logging](http://mean.io/network#features-menu "")|[X](http://expressjs.com/guide/error-handling.html)|[X](http://expressjs.com/guide/error-handling.html)| | |[X](http://expressjs.com/guide/error-handling.html)|
In-memory server-side database|[X](http://expressjs.com/guide/database-integration.html)|[X](http://expressjs.com/guide/database-integration.html)| | |[X](http://expressjs.com/guide/database-integration.html)|
[JavaScript 5 best practices, Doesn't use JQuery (?)](https://github.com/gocardless/angularjs-style-guide#anti-patterns "You should use directives instead")| |[X](https://www.airpair.com/js/javascript-framework-comparison)|[X](https://www.airpair.com/js/javascript-framework-comparison)| |[X](https://www.airpair.com/js/javascript-framework-comparison)|
[Live Retest (?)](https://github.com/meanjs/mean/pull/157 "Tests automatically run any time you save a change. Does not require rebuilding the distributions")| | |[**X**](http://mochajs.org/)| | |
[Local storage](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/services/LocalStorage.ts "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/e29a656b8f923ad9fb5867288f4628674994b697/src/app/core/store/index.ts#L123)|X| |X| |
[Persistent data storage (?)](http://hammerprinciple.com/databases "See link for a good explanation of NoSQL options and solutions to normalization issues")|[X](http://expressjs.com/guide/database-integration.html)|[X](http://expressjs.com/guide/database-integration.html)| | |[X](http://expressjs.com/guide/database-integration.html)|
[Separation of smart containers and dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.vkyyo356c "")|X| | |X| |
[Server-side integration & unit tests](http://www.letscodejavascript.com/v3/episodes/live/1 "")|X| |X|X| |
[Shared Module](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-10 "")|[**X**](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/shared/shared.module.ts)| | | | |
[Single source of truth, central state management (?)](http://www.reddit.com/r/javascript/comments/2uvz0x/whats_so_great_about_reactjs/ "only one piece of the application flow is tasked with mutating state data")|X|X| |X|X|
State inspection tools|X|X| |X|X|
[Style guide for code](https://github.com/Swiip/generator-gulp-angular/pull/469 "")|[**X**](https://angular.io/docs/ts/latest/guide/style-guide.html)| | | | |
[There is a book about it](http://www.amazon.com/MEAN-Web-Development-Amos-Haviv-ebook/dp/B00NXWI1BM/ref=dp_kinw_strp_1 "")| |[**X**](http://angular-2-training-book.rangle.io/)| | | |
[Time travel, undo (?)](http://redux.js.org/docs/recipes/ImplementingUndoHistory.html "You can move forward and backward through a series of state changes")|X|X| |X|X|
[Update generated code in an existing app](https://jhipster.github.io/upgrading-an-application/ "")|[X](https://github.com/angular/angular-cli#updating-angular-cli)| |[X](https://github.com/angular/angular-cli#updating-angular-cli)|[X](https://github.com/angular/angular-cli#updating-angular-cli)| |
|  | | | | |
| **User Experience** |[great big angular2 example](https://github.com/dancancro/great-big-angular2-example)|[angular2-redux-starter](https://github.com/rangle/angular2-redux-starter)|[angular-cli](https://github.com/angular/angular-cli)|[ngrx example app](https://github.com/ngrx/example-app)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|
[Account Management, login/logout](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/entry/EntryPanel.ts "")|X|[X](https://github.com/rangle/angular2-redux-example/tree/master/src/components/login)| | | |
[Analytics](https://github.com/NathanWalker/angular-seed-advanced "")|[X](https://www.google.com/analytics)| |[X](https://www.google.com/analytics)|[X](https://www.google.com/analytics)|[X](https://github.com/NathanWalker/angular-seed-advanced)|
[Asynchronously loaded data example](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/data.service.ts#L32 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/data.service.ts#L32)| | |X|X|
[Derived, computed properties](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/models/ServerModel.js#L35 "")|[**X**](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/claim/claim.model.ts#L27-L29)| | | | |
[External, 3rd party, API interaction](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/services/SearchSpotifyService.ts "")|X| | |X| |
[Full-stack CRUD (?)](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "CRUD = Create,Read,Update, Delete    The example demonstrates creating, reading, updating and deleting from a database through a web page user interface.  It includes seed data and does not require a lot of work to get the app connected to a database")|**X**| | | | |
[Full-stack CRUD, with Create, Update and Delete](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|**X**| | | | |
[Full-stack CRUD, with Create, Update and Delete, individual records](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|**X**| | | | |
Full-stack CRUD, with Create, Update and Delete, whole data structures|**X**| | | | |
[Full-stack CRUD, with Read](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|**X**| | | | |
[Grid, Editable](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/debate "")|[**X**](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/debate)| | | | |
[i18n, localization (?)](https://medium.com/@feloy/deploying-an-i18n-angular-app-with-angular-cli-fc788f17e358#.4auugsg27 "Internationalization or localization    Text for different languages are stored in separate places and used to fill in placeholders in the view depending on the user's preferences")|[X](https://medium.com/@feloy/deploying-an-i18n-angular-app-with-angular-cli-fc788f17e358#.4auugsg27)| |[X](https://medium.com/@feloy/deploying-an-i18n-angular-app-with-angular-cli-fc788f17e358#.4auugsg27)|[X](https://medium.com/@feloy/deploying-an-i18n-angular-app-with-angular-cli-fc788f17e358#.4auugsg27)|X|
[Many-to-many data](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/index.ts#L265 "")|[**X**](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/index.ts#L265)| | | | |
[Navigation bar](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/app.page.html "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/app.page.html)| | |[X](https://github.com/ngrx/example-app/blob/master/src/app/containers/app.ts#L15)| |
[Panels, draggable](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/dragndrop/make-draggable.directive.ts "")|**X**| | | | |
[Responsive styles](https://github.com/dancancro/great-big-angular2-example/blob/166ae9353bd6ff34badbc045b2044cf417c6d8c5/src/assets/styles/flexbox.css#L4 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/166ae9353bd6ff34badbc045b2044cf417c6d8c5/src/assets/styles/flexbox.css#L4)|[X](https://github.com/rangle/angular2-redux-example/blob/2c541e5ce057111c32464ccee3624ab50d84f084/src/components/modal/modal.css#L7)| | | |
[Search, actually works with backend API](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/books/book-search/book-search.component.ts "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/books/book-search/book-search.component.ts)| | |[X](https://github.com/ngrx/example-app/blob/master/src/app/components/book-search.ts)| |
|  **Libraries** |[great big angular2 example](https://github.com/dancancro/great-big-angular2-example)|[angular2-redux-starter](https://github.com/rangle/angular2-redux-starter)|[angular-cli](https://github.com/angular/angular-cli)|[ngrx example app](https://github.com/ngrx/example-app)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|
|  Build | Webpack | Webpack | Webpack | Webpack | Webpack | SystemJS + Gulp |
|  ?????? |  |  |  |  |  |  |
|  ?????? |  |  |  |  |  |  |
|  ?????? |  |  |  |  |  |  |
|  ?????? |  |  |  |  |  |  |


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
│   ├── node-app-server.js
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
│   │       ├── basscss.css
│   │       ├── colors.css
│   │       ├── flexbox.css
│   │       ├── grid.css
│   │       ├── hero-styles.css
│   │       ├── hide.css
│   │       ├── index.css
│   │       ├── media-object.css
│   │       ├── position.css
│   │       ├── responsive-margin.css
│   │       └── responsive-padding.css
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── file_structure
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── test.ts
│   ├── tsconfig.json
│   └── typings.d.ts
├── tslint.json
├── typings
│   ├── globals
│   │   ├── angular-protractor
│   │   │   ├── index.d.ts
│   │   │   └── typings.json
│   │   ├── assertion-error
│   │   │   ├── index.d.ts
│   │   │   └── typings.json
│   │   ├── jasmine
│   │   │   ├── index.d.ts
│   │   │   └── typings.json
│   │   └── selenium-webdriver
│   │       ├── index.d.ts
│   │       └── typings.json
│   ├── index.d.ts
│   └── modules
│       ├── node-uuid
│       │   ├── index.d.ts
│       │   └── typings.json
│       ├── react
│       │   ├── index.d.ts
│       │   └── typings.json
│       └── react-dom
│           ├── index.d.ts
│           └── typings.json
└── typings.json
```