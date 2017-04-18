
[![Build Status](https://travis-ci.org/dancancro/great-big-angular2-example.svg?branch=master)](https://travis-ci.org/dancancro/great-big-angular2-example)
[![Dependency Status](https://david-dm.org/dancancro/great-big-angular2-example.svg)](https://david-dm.org/dancancro/great-big-angular2-example)

[Live Demo](http://great-big-angular2-example.herokuapp.com)

You can see what's newest [here](https://github.com/dancancro/great-big-angular2-example/branches) by looking
for the branch with the most recent commit and most commits ahead of master.

# Background and Motivation

This project is my attempt to infer from available demos what the codebase might look like for the real-world, 
commercial codebases that you don't get to see until you are hired by a real company and sign an NDA.

The rationale behind this is pretty simple...

    1. Real, complete code examples are better than docs, lessons and Gitter Q&A. And MUCH better 
    than ellipses (...).

    2. If you want a job making commercial-grade code, you should study commercial-grade code,
    not tutorial-grade code. Anything you learn in a tutorial must be approached with caution 
    because corners have probably been cut, it's probably been simplified and it probably doesn't 
    show you the exact way anyone does it on a real job. The difference between exact and almost 
    exact is huge. Tutorials show you how you *can* use a feature of the technology but often they 
    do so in situations when in real life you would not do things that way. This can cost a lot of 
    time. It's just as important to know how to use a technology's features as it is to know when.

    3. If you want to know how fast a big Angular app will build, run and test before investing
    the time to learn Angular - and you should - then you need source code for a big app before
    you even write Hello World.

    4. If you want to know the complexity limits a technology will place on your app before you
    commit to using it, there's no better way than to see a complex example made with that technology.

    5. It's a whole lot easier to vet an idea or accept an approach others have taken when you have
    a complete application with all of its edge cases to show you what needs to be accommodatedd. 
    By containing many edge cases, a big application will quickly answer the common learner's question:
    "Why isn't this done the easy way I think it should be done?", or "What if we tried X instead?"

Hopefully, when the project is done it will make the learning process for others much easier and prepare them to
make real things rather than instructional ones. I expect it to reduce the time to implement your own real
application from months to days.

Coming from different demos, the features of the app are not related to each other and it won't make any sense
to have them together but the point is just to demonstrate how things should work technically, so that's okay.

A huge thanks to those who created the example demos from which I put together this amalgam. 

To make this big app from the small ones, I took these projects and integrated/restructured/restyled their code
according to the following prioritization. Disagreements in approach between two influences are resolved by the
lower authority yielding to the higher one:

1. [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html) by Google
2. [Tour of Heroes (ngModules, Routing, App Specs, HTTP, Server Communication versions)](https://github.com/dancancro/tour-of-heroes-versions) by Google
3. [Angular CLI](https://github.com/angular/angular-cli) by Google and the community
4. [Redux Docs](http://redux.js.org/) Redux.org
5. [ngrx example app - book collection](https://github.com/ngrx/example-app) by [@MikeRyan52](https://github.com/MikeRyan52)
6. [angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced) by Minko Gechev + Nathan Walker + community
7. [ng2-state-talk - drag/editable notes](https://github.com/JavascriptMick/ng2-state-talk) by [@JavascriptMick](https://github.com/JavascriptMick) 
8. [rangle-starter Angular 2 with TypeScript and Redux version - counter](https://www.npmjs.com/package/rangle-starter) by [@SethDavenport](https://github.com/SethDavenport)

In addition to the features from these demos, I added one of my own. I replaced

9. [this other project](http://www.bernierebuttals.org) 

which was made with JQuery and Google Scripts. The data is 
contained in [this Google Sheet](https://docs.google.com/spreadsheets/d/1RdIhMdNCRJ-xtl6IgbT2SdChtLIYW8VXeloq7rR1lqY/edit#gid=50602236) 
and served as JSON by a Google script.

See the [Angular Change log](https://angular.io/docs/ts/latest/guide/change-log.html) for updates to the Angular team's opinions.

# My Innovations

While the goal of the project is to combine the wisdom of different experts, nobody can resist introducing improvements when there's 
no obvious case against doing so. So you will see a couple of practices in this project that came from my head rather than the sources 
of expertise from which the project was assembled. If you can think of reasons not to do these things, please let me know.

1. I have put the Redux store reducers in `app/core/store` separate from the feature directories located under `app` and did not make folders
for `reducers`, `actions`, and `effects`. There is a many-to-many relationship between Redux store slices and features. So putting the Redux
code for a given slice into the same directory as one of the features that uses it doesn't make sense. How do you decide which feature gets it?

2. As much as practical the names of files in a directory begin with the directory name. I did this to prevent directories from having a mixture of 
unrelated concerns. If a directory in a source demo had files for two different things, I created more directories. I thought about 
removing that part of the file name, `src/app/app.page.ts` -> `src/app/page.ts`, for the sake of DRY, but that makes it too confusing when
you are working on multiple files with the same names and different directories.

3. I noticed a lot of duplication and boilerplate of identical CRUD code for each of my types of entities. So I made utility functions and 
the related actions and models for each of three types of store slice - [entities](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/core/store/entity), [id lists](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/core/store/id), and [slices](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/core/store/slice) (everything else).

4. I came up with a mini lexicon of file types to keep file names shorter and more expressive. A "page" is understood to be a smart `@Component`
class that fills the page and might have a router-outlet and route configurations. A "guard" is understood to be an `@Injectable` "service" class that
returns a boolean. A "routing" is a `@NgModule` class that contains route configurations. So I memorize this simple lexicon, and drop the
redundant, less-clear words from the names. For example, I use the name `app.page.ts` rather than `app.component.ts` or `app-page.component.ts`.
I use `auth.guard.ts` instead of `auth-guard.service.ts`. I use `books.routing.ts` instead of `books-routing.module.ts`.

| A | is a class decorated with | that | Example file name | Example class name |
|:--- | :--- | :--- | :--- | :--- |
| page | @Component | more or less fills the screen - a "smart" component that gets data from something other than `@Input`s and dispatches actions to change state | app.page.ts | AppPage |
| component | @Component | has to be contained by a page or other components - a "dumb" component that only gets data from `@Input`s | login.component.ts | LoginComponent |
| guard | @Injectable | returns a boolean and [does whatever an Angular guard does](https://angular.io/docs/ts/latest/guide/router.html#!#guards) | auth.guard.ts | AuthGuard |
| service | @Injectable | provides a service or data | auth.service.ts | AuthService |
| routing | @NgModule | contains route configurations | books.routing.ts | BooksRouting |
| module | @NgModule | associates related components and providers | books.module.ts | BooksModule |

That's it. It shouldn't be too hard to remember these, and in return you will have consistent, short, expressive file names.

# Prerequisites

You will need to have [Git](https://git-scm.com/) and [Node.js + NPM](http://nodejs.org) installed on your machine. 

You will also need to install the `angular-cli` NPM package globally via `npm i -g angular-cli`.

If you want to debug server-side code, install [Visual Studio Code](https://code.visualstudio.com/). This project has the configuration to
use VS Code for debugging.

If you want to Dockerize your app, go [here](http://www.dzurico.com/dockerize-angular-application) to setup Docker, and 
install [PhantomJS](http://phantomjs.org/download.html). It's used by Docker.


# Make it go

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

## Blocking Dependency Issues

| Issue | Description | Features |
| :-- | :-- | :-- |
| [14480](https://github.com/angular/angular/issues/14480) | Angular 2 relative pathing from siblings doesn't work | Compose Message box on Crisis Center and login success routing |
| [14201](https://github.com/angular/angular/pull/14201) | Duplicate instantiation of lazy loaded modules | ngrx Effects |
| [3781](https://github.com/angular/angular-cli/issues/3781) | Cannot read property 'newLine' of undefined | Travis build |

## And other problems

There's something the matter with TypeScript that produces warnings claiming certain classes can't be found. This was merely annoying until a new release 
of angular-cli came out that put an overlay with warnings on top of the app instead of just putting them in the console.

To turn off this new overlay, you need to change line 140 of node_modules/@angular/cli/tasks/serve.js from

    overlay: serveTaskOptions.target === 'development'
to

    overlay: false // serveTaskOptions.target === 'development'


# FAQ

## 1) In many ngrx examples it seems like there is a lot of boilerplate and duplicate code per store slice. Why not have the Action Types be created dynamically by combining the store slice name nouns and action name verbs?

I agree. That's why I created utility functions to hold all the common code and got rid of plural names to enable generic handling, 
and I replaced static action type definitions with dynamic functions that combine slice nouns and action verbs. It also turns out that most of 
the tricky RxJS code is also boilerplate code that now resides inside functions that you don't have to mess with most of the time. So you
should be able to get productive on an app that uses Observables without first having to be an expert at them, which is hard.

That's a pretty big benefit. What could be seen as costs of doing that?

1) You lose some static type checking of action types. 
> Given that most Redux apps are done with React and React doesn't have any static type checking at all, I decided that was a small 
price to pay. You can also mix this approach and the other one if you really want to. Use the general, un-type-checked, CRUD stuff for
ordinary parts of your app (most of it), and use hard-coded, specialty action types when you really need TypeScript's compiler to help you.

Here's some code from the ngrx example app that gives you type checking for the action types. You won't get these checks using my approach.
```
export function reducer(state: Entities<Book> = initialEntities<Book>({}, slices.BOOK, actions, {}),
  action: book.Actions | collection.Actions): Entities<Book> {
  switch (action.type) {
    ...

```
`action: book.Actions | collection.Actions` means that `action` must be an object of a class in this union of two unions of class definitions

That gives us two checks: `action.type` must be a string value among the union of `string` values of the `type` properties of the classes that `action` can be. If any
of the case values are not among this union of string values, Typescript will point that out to you.
And same with `action.payload`. It must be an object with the structure of the payload property of one of the classes that `action` can be.

2) Using only generic action classes like `LoadSuccess` instead of `SearchComplete`, the dispatch calls in your components will be 
more explicit and refer to details of the store.
> I see this as a plus in most cases. Otherwise you have extraneous levels of abstraction and you have to look into three files to see exactly 
what's going on. In most cases, the same person is writing the component, action and reducer files, so what's the point in hiding details 
in one of them from the other? Now you can get the whole story by reading one line of code. You should decouple things when the need arises, 
but you can overdo it too.

## 2) Why isn't the `server` directory under /src? It contains source code.

This directory is not located inside /src because if it were there then the 
front-end server which watches /src would restart after any change to back-end code. That can probably be fixed by configuring which I haven't done.

## 3) Why are entities modeled as a hash (map) of objects and an array of IDs instead of just an array of objects?

I got the idea from the ngrx example app. I asked about it once and was told that it was done for performance reasons but I'm not sure under what conditions they apply.

Any other questions?  Just ask.

# Demonstrations and Features

| **Developer Experience** |[great big angular2 example](https://github.com/dancancro/great-big-angular2-example)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[ngrx example app](https://github.com/ngrx/example-app/issues/100#issuecomment-275451726)|[angular-redux-starter](https://github.com/rangle/angular-redux-starter)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|
|:------ | :------: | :------: | :------: | :------: | :------: |
[Authentication](https://github.com/jhipster/jhipster-sample-app/blob/5bec9d09ac1fc523fcea5cb97769153b7e97aaf2/src/main/webapp/bower_components/swagger-ui/src/main/javascript/view/AuthView.js "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/session/session.effects.ts#L26 "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/7260a89a3f968243e642b20c9fd6775ba59eaf41/src/services/DefaultAuthService.ts "")| |[X](https://github.com/rangle/angular2-redux-example/blob/master/src/epics/session.epics.ts#L20 "")| |
[Authentication, with two-factor authentication](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/actions/SampleActions.js#L22 "")| |[UNIQUE](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/actions/SampleActions.js#L22 "")| | | |
[Can run on a desktop without a browser](http://electron.atom.io/ "")| | | | |[UNIQUE](http://electron.atom.io/ "")|
[Client-side unit tests](https://github.com/born2net/Angular-kitchen-sink/blob/132ddece2635d13e983ce873742ba962fc5c7fce/src/app/app.component.spec.ts "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/debate/claim/claim.component.spec.ts "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/132ddece2635d13e983ce873742ba962fc5c7fce/src/app/app.component.spec.ts "")| |[X](https://github.com/rangle/angular2-redux-example/blob/master/src/components/button/button.component.test.ts "")|[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/components/app.component.spec.ts "")|
[Code coverage reporting (?)](http://blog.johnryding.com/post/46757192364/javascript-code-coverage-with-phantomjs-jasmine-and "Generate reports that tell you how much of your code is being tested")|[X](http://mochajs.org/ ",")|[X](http://mochajs.org/ "")|[X](http://mochajs.org/ "")|X| |
[Command line interface (CLI)](https://github.com/angular/angular-cli "")|[X](https://github.com/angular/angular-cli "")|[X](https://github.com/angular/angular-cli "")|[X](https://github.com/angular/angular-cli "")|X| |
[Compiled, supports ahead of time (AOT) compilation](https://github.com/mgechev/angular-seed/blob/18a6e44da97d2734d7e81377df49e52ac70d2354/tools/tasks/seed/build.js.prod.aot.ts "")| | | | |[UNIQUE](https://github.com/mgechev/angular-seed/blob/18a6e44da97d2734d7e81377df49e52ac70d2354/tools/tasks/seed/build.js.prod.aot.ts "")|
[Components communicate with events](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app3/starwars/components/films-component.ts#L11 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/debate/debate.page.html#L9 "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app3/starwars/components/films-component.ts#L11 "")|X| | |
[Core Module](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-12 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/core.module.ts "")| | | |[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/shared/core/core.module.ts "")|
CSS style checking|X| | |X| |
[Deployment automation, to a mobile native executable](https://github.com/NathanWalker/angular-seed-advanced#electron-app "")| | | | |[UNIQUE](https://github.com/NathanWalker/angular-seed-advanced#electron-app "")|
[Deployment automation, using Docker (?)](https://www.docker.io/ "This is for making the app lightweight, portable and self sufficient so you can run it anywhere")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/docker-compose.yml "")| | |[X](https://github.com/rangle/angular2-redux-example/blob/master/Dockerfile "")|[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/docker-compose.production.yml "")|
[Deployment automation, using Heroku (?)](https://github.com/jhipster/generator-jhipster/issues/1288 "Generates a dist folder that is deployment ready for heroku.com    Heroku is an interface to Amazon's US East EC2 region")|[X](http://great-big-angular2-example.herokuapp.com "")| | |[X](https://github.com/rangle/angular2-redux-example/blob/master/server/node-server.js#L15 "")| |
[Error handling, Client-side logging](http://www.bennadel.com/blog/2542-logging-client-side-errors-with-angularjs-and-stacktrace-js.htm "")| | | |X|[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/shared/core/services/log.service.ts "")|
In-memory server-side database| |UNIQUE| | | |
[Local storage](https://github.com/jhipster/jhipster-sample-app/blob/5bec9d09ac1fc523fcea5cb97769153b7e97aaf2/src/main/webapp/app/blocks/config/localstorage.config.js "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/e29a656b8f923ad9fb5867288f4628674994b697/src/app/core/store/index.ts#L123 "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/services/LocalStorage.ts "")|X|X| |
No pluralization|UNIQUE| | | | |
[Production build, generate docs (?)](https://github.com/yeoman/yeoman/issues/152 "By reading comments in your code or maintaining separate docs:  https://github.com/millermedeiros/mdoc    examples:  ngDoc  YUIdoc")| |[X](http://typedoc.org/ "")| | |[X](http://typedoc.org/ "")|
[Separation of smart containers and dumb components (?)](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.vkyyo356c "Such components typically do the following things: subscribe to data, fetch data from those subscriptions, and fetch global client-side state from stores.  Ideally, once a smart component has assembled such a set of data, it passes it off to a reusable component child to render with. Smart components usually don’t render anything apart from one or more reusable children. This makes it easy to separate rendering and data loading in your tests.")|X| |X| | |
[Server-side integration & unit tests](http://www.letscodejavascript.com/v3/episodes/live/1 "")|X|X|X| | |
[Shared Module](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-10 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/shared/shared.module.ts "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/8cc88024f22156f397f2aa95dc142460f720f50f/src/comps/app1/lazyone/SharedModule.ts "")| | | |
[Single source of truth, central state management, without lots of boilerplate (?)](https://github.com/dancancro/great-big-angular2-example/tree/4431d3f9f361fbf944f083f266e59722d8601dfe/src/app/core/store/entity "Usually with Redux implementations your app will have lots of similar code in action, reducer and effect files for each slice of the store.    To avoid this, takes imposing some conventions and creating utility functions.")|[UNIQUE](https://github.com/dancancro/great-big-angular2-example/tree/4431d3f9f361fbf944f083f266e59722d8601dfe/src/app/core/store/entity "")| | | | |
[Style guide for code (?)](https://github.com/Swiip/generator-gulp-angular/pull/469 "Provides consistency and best practices")|[X](https://angular.io/docs/ts/latest/guide/style-guide.html "")| | | |[X](https://angular.io/docs/ts/latest/guide/style-guide.html "")|
[There is a book about it](http://www.amazon.com/MEAN-Web-Development-Amos-Haviv-ebook/dp/B00NXWI1BM/ref=dp_kinw_strp_1 "")| | | |[UNIQUE](http://angular-2-training-book.rangle.io/ "")| |
[Update generated code in an existing app](https://jhipster.github.io/upgrading-an-application/ "")| | | | |[UNIQUE](https://github.com/mgechev/angular-seed/wiki/Architecture-and-usage-of-angular2-seed#build "")|
|  | | | | |
| **User Experience** |[great big angular2 example](https://github.com/dancancro/great-big-angular2-example)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[ngrx example app](https://github.com/ngrx/example-app/issues/100#issuecomment-275451726)|[angular-redux-starter](https://github.com/rangle/angular-redux-starter)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|
[Account Management, Forgotten Password with Resetting](https://github.com/meanjs/mean/issues/30 "")| |[UNIQUE](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/entry/ForgotPass.ts "")| | | |
[Account Management, login/logout](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/entry/EntryPanel.ts "")|X|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/entry/EntryPanel.ts "")| |[X](https://github.com/rangle/angular2-redux-example/tree/master/src/components/login "")| |
[Analytics](https://github.com/jhipster/generator-jhipster/blob/4cce6ecc6719d80cc6ed29f8303ed608d8133423/generators/client/templates/angular/src/main/webapp/_index.html "")| | | | |[UNIQUE](https://github.com/NathanWalker/angular-seed-advanced "")|
[Asynchronously loaded data example](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/data.service.ts#L32 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/data.service.ts#L32 "")|X|X| |[X](https://github.com/NathanWalker/angular-seed-advanced/blob/dadb1052f74cb3114547de94d297cc591ed27ab1/src/client/app/shared/sample/services/name-list.service.ts#L31 "")|
[Breadcrumbs (?)](https://github.com/born2net/Angular-kitchen-sink/tree/master/src/comps/breadcrumb "Breadcrumbs are the series of links displayed at the top of a page which take you to any of the ancestral pages between the home page and the one you're on")| |[UNIQUE](https://github.com/born2net/Angular-kitchen-sink/tree/master/src/comps/breadcrumb "")| | | |
[Derived, computed properties](http://redux.js.org/docs/recipes/ComputingDerivedData.html "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/claim/claim.model.ts#L27-L29 "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/models/ServerModel.js#L35 "")| | | |
[Dynamic component creation](https://github.com/born2net/Angular-kitchen-sink/tree/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/dynmiaccomp "")| |[UNIQUE](https://github.com/born2net/Angular-kitchen-sink/tree/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/dynmiaccomp "")| | | |
[External, 3rd party, API interaction](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/services/SearchSpotifyService.ts "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/book/google-books.service.ts "")|[X](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/services/SearchSpotifyService.ts "")|X| | |
[Footer](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/footer/Footer.ts "")| |[UNIQUE](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/footer/Footer.ts "")| | | |
[Front-end CRUD](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|[X](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/contact "")|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")| | |[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/components/home/home.component.html "")|
[Full-stack CRUD (?)](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "CRUD = Create,Read,Update, Delete    The example demonstrates creating, reading, updating and deleting from a backend file system or database through a web page user interface.  It includes seed data and does not require a lot of work to get the app connected to a database")|[X](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/contact "")|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")| | | |
[Full-stack CRUD, with Create, Update and Delete](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|[X](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/contact "")|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")| | | |
[Full-stack CRUD, with Create, Update and Delete, individual records](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|[X](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/contact "")|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")| | | |
[Full-stack CRUD, with Create, Update and Delete, whole data structures](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/data.service.ts "")|[UNIQUE](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/data.service.ts "")| | | | |
[Full-stack CRUD, with Read](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")|[X](https://github.com/dancancro/great-big-angular2-example/tree/master/src/app/contact "")|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos "")| | | |
[i18n, localization (?)](https://jhipster.github.io/installing-new-languages/ "Internationalization or localization    Text for different languages are stored in separate places and used to fill in placeholders in the view depending on the user's preferences")| | | | |[UNIQUE](https://github.com/NathanWalker/angular-seed-advanced/tree/master/src/client/app/shared/i18n "")|
[Many-to-many data](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/index.ts#L265 "")|[UNIQUE](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/store/index.ts#L265 "")| | | | |
[Mouse wheel (?)](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/Mousewheel/Mousewheel.ts "Demonstrates reaction to mouse wheel input")| |[UNIQUE](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/Mousewheel/Mousewheel.ts "")| | | |
[Navigation bar](https://github.com/jhipster/jhipster-sample-app/tree/master/src/main/webapp/app/layouts/navbar "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/app.page.html "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/app.page.html "")|[X](https://github.com/ngrx/example-app/blob/master/src/app/containers/app.ts#L15 "")| | |
[Panels, draggable](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/dragndrop/make-draggable.directive.ts "")|X|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/dragndrop/make-draggable.directive.ts "")| | | |
[Responsive styles](https://youtu.be/d1MEM8PdAzQ?t=588 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/166ae9353bd6ff34badbc045b2044cf417c6d8c5/src/assets/styles/flexbox.css#L4 "")| | |[X](https://github.com/rangle/angular2-redux-example/blob/2c541e5ce057111c32464ccee3624ab50d84f084/src/components/modal/modal.css#L7 "")| |
[Search, actually works with backend API](https://github.com/jhipster/generator-jhipster/search?utf8=%E2%9C%93&q=elasticsearch "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/books/book-search/book-search.component.ts "")| |[X](https://github.com/ngrx/example-app/blob/master/src/app/components/book-search.ts "")| | |
|  | | | | |
| **Dependencies** |[great big angular2 example](https://github.com/dancancro/great-big-angular2-example)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[ngrx example app](https://github.com/ngrx/example-app/issues/100#issuecomment-275451726)|[angular-redux-starter](https://github.com/rangle/angular-redux-starter)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|
Backend Frameworks |Express | | |Express |Express
Client-side API interfaces |@angular/http |@angular/http |@angular/http |@angular/http |@angular/http
Continuous integration testers |Travis | | | |Travis
Convenience method libraries |lodash |lodash |lodash | |lodash
Databases | |Redis | | |
Documentation generators | |typedoc | | |typedoc
Frontend Frameworks |Angular 2.0 |Angular 2.0 |Angular 2.0 |Angular 2.0 |Angular 2.0
Languages |JS ES5, JS ES6 (ES2015), JSX (opt), Typescript |JS ES5, JS ES6 (ES2015), Typescript |JS ES5, JS ES6 (ES2015), Typescript |JS ES5, JS ES6 (ES2015), JSX (opt), Python, Typescript |JS ES2016, JS ES5, JS ES6 (ES2015), Typescript
Linters |codelyzer, ESLint, stylelint, tslint | |codelyzer, tslint |ESLint, stylelint |codelyzer, tslint
Loaders/Bundlers |Webpack |Webpack |Webpack |Webpack |Rollup, SystemJS
Misc |Angular Style Guide, Helmet, nodemon, Redux, redux-devtools, RxJS |Immutable, Redux, redux-devtools, RxJS |Redux, redux-devtools, RxJS (opt) |autoprefixer, cssnano, Helmet, Immutable, nodemon, Redux, redux-devtools, redux-logging, RxJS |Angular Style Guide, cssnano, Electron, Redux, redux-devtools, RxJS
Package Managers |npm |npm |npm |npm |npm
Routers |Angular Component Router |Angular Component Router |Angular Component Router |Angular Component Router |Angular Component Router
Runtime Environments |Node |Node |Node |Node |NativeScript, Node
Stacks |angular-cli |angular-cli |angular-cli | |mgechev's angular-seed
State Managers |ngrx |ng-redux |ngrx |ng-redux |ngrx
Task Runners | |Gulp | | |Gulp
Test assertion libraries |Chai, Jasmine, Mocha |Chai, Jasmine, Mocha |Chai, Jasmine, Mocha |Jasmine |Jasmine
Test coverage reporters |Istanbul | | |Istanbul |
Test runners |Karma | |Karma, Protractor |Karma, Robot |BrowserSync (opt), Karma
Transpilers |libsass |libsass |libsass |libsass |
Widget collections |Angular Material |Angular Material | | |

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
│   ├── auth-passport.js
│   ├── db
│   │   ├── claim.json
│   │   ├── claimRebuttal.json
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
│   │   │   │   │   ├── book.effects.spec.ts
│   │   │   │   │   ├── book.effects.ts
│   │   │   │   │   ├── book.model.ts
│   │   │   │   │   ├── book.reducer.ts
│   │   │   │   │   └── google-books.service.ts
│   │   │   │   ├── claim
│   │   │   │   │   ├── README.md
│   │   │   │   │   ├── claim.effects.ts
│   │   │   │   │   ├── claim.model.ts
│   │   │   │   │   └── claim.reducer.ts
│   │   │   │   ├── claim-rebuttal
│   │   │   │   │   ├── claim-rebuttal.effects.ts
│   │   │   │   │   ├── claim-rebuttal.model.ts
│   │   │   │   │   └── claim-rebuttal.reducer.ts
│   │   │   │   ├── collection
│   │   │   │   │   ├── collection.effects.spec.ts
│   │   │   │   │   ├── collection.effects.ts
│   │   │   │   │   └── collection.reducer.ts
│   │   │   │   ├── contact
│   │   │   │   │   ├── contact.effects.ts
│   │   │   │   │   ├── contact.model.ts
│   │   │   │   │   └── contact.reducer.ts
│   │   │   │   ├── counter
│   │   │   │   │   ├── counter.actions.test.ts
│   │   │   │   │   ├── counter.effects.ts
│   │   │   │   │   ├── counter.model.ts
│   │   │   │   │   └── counter.reducer.ts
│   │   │   │   ├── crisis
│   │   │   │   │   ├── crisis.effects.ts
│   │   │   │   │   ├── crisis.model.ts
│   │   │   │   │   └── crisis.reducer.ts
│   │   │   │   ├── db.ts
│   │   │   │   ├── entity
│   │   │   │   │   ├── entity.actions.ts
│   │   │   │   │   ├── entity.functions.ts
│   │   │   │   │   └── entity.model.ts
│   │   │   │   ├── hero
│   │   │   │   │   ├── hero.effects.ts
│   │   │   │   │   ├── hero.model.ts
│   │   │   │   │   └── hero.reducer.ts
│   │   │   │   ├── id
│   │   │   │   │   ├── id.actions.ts
│   │   │   │   │   ├── id.functions.ts
│   │   │   │   │   └── id.model.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── layout
│   │   │   │   │   ├── layout.model.ts
│   │   │   │   │   └── layout.reducer.ts
│   │   │   │   ├── note
│   │   │   │   │   ├── note.effects.ts
│   │   │   │   │   ├── note.model.ts
│   │   │   │   │   └── note.reducer.ts
│   │   │   │   ├── rebuttal
│   │   │   │   │   ├── rebuttal.effects.ts
│   │   │   │   │   ├── rebuttal.model.ts
│   │   │   │   │   └── rebuttal.reducer.ts
│   │   │   │   ├── search
│   │   │   │   │   └── search.reducer.ts
│   │   │   │   ├── session
│   │   │   │   │   ├── session.effects.ts
│   │   │   │   │   ├── session.model.ts
│   │   │   │   │   └── session.reducer.ts
│   │   │   │   ├── slice
│   │   │   │   │   ├── slice.actions.ts
│   │   │   │   │   └── slice.functions.ts
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
│   │   │   ├── notes.module.ts
│   │   │   ├── notes.page.css
│   │   │   ├── notes.page.html
│   │   │   ├── notes.page.spec.ts
│   │   │   ├── notes.page.ts
│   │   │   └── notes.routing.ts
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
│   │       ├── wiki.css
│   │       ├── wiki.module.ts
│   │       ├── wiki.page.ts
│   │       ├── wiki.routing.ts
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
