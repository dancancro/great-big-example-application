
[![Build Status](https://travis-ci.org/dancancro/great-big-example-application.svg?branch=master)](https://travis-ci.org/dancancro/great-big-example-application)
[![Dependency Status](https://david-dm.org/dancancro/great-big-example-application.svg)](https://david-dm.org/dancancro/great-big-example-application)

## [Live Demo on Heroku](https://great-big-example-application.herokuapp.com/)

# Background and Motivation

The main goal of this project is to make available to unemployed developers source code for a 
state-of-the-art web application the likes of which only exist as intellectual property
visible exclusively to employed experts who have signed non-disclosure agreements and can't let
you see it or learn how they made everything work together.

    You should not have to get hired before learning how to do a thing the right way

The other goal is to assemble enough functionality into one free example application that people 
think twice before starting another one-feature, no edge-case, example and exacerbating the already 
overwhelming starting point option overload. Hopefully this will persuade a few people to direct
that energy instead into improving what already exists. To this end I have built, over the course of 
the past 4 years, the world's biggest, most detailed database of web technology selling points so 
things could be compared easily in broad daylight without the hype and selective disclosure of
a typical product/project sales page. See below for a sample slice of it.


# But why one great big app?

"There are already lots of little example apps!!" (written in all different styles) 
"Software development is _always_ taught using lots of inconsistent simple examples!!"
"Approaches are a matter of personal preference and shouldn't be imposed" (on beginners who don't have 
strong opinions yet)

"Bloated!!"

There's a strange resistance to using big examples to educate instead of small ones. The rationale behind 
a big example is pretty simple:

    1. Real, complete code examples are better than docs, lessons and Gitter Q&A. And MUCH better 
    than ellipses (...). Real code answers every question, not just what experts using these other sources
    elect to answer. Moreover, it's much easier to copy and modify a thing, no matter how complex, than 
    to synthesize a thing, no matter how simple, out of nothing.

    2. If you want a job making commercial-grade code, you should study commercial-grade code,
    not tutorial-grade code. Anything you learn in a tutorial must be approached with caution 
    because corners have probably been cut, it's probably been simplified and it probably doesn't 
    show you the exact way anyone does it on a real job. The difference between exact and almost 
    exact is the difference between ten stones balanced on top of each other and those stones lying on
    the ground. Tutorials show you how you *can* use a feature of the technology but often they 
    do so in situations when in real life you would not do things that way. This can cost a lot of 
    time. It's just as important to know when to use a technology's features as it is to know how.

    3. If you want to know how fast an app using a particular technology will build, run and test 
    before investing the time to learn it - and you should - then you need source code for a big 
    app before you even write Hello World.

    4. If you want to know the complexity limits a technology will place on your app before you
    commit to using it, there's no better way than to see a complex example made with that technology.

    5. It's a whole lot easier to vet an idea or accept an approach others have taken when you have
    a complete application with all of its edge cases to show you what needs to be accommodated. 
    By containing many edge cases, a big application will quickly answer the common learner's question:
    "Why isn't this done the easy way I think it should be done?", or "What if we tried X instead?"

I've had a maddeningly troublesome time making the case for software development educators to provide 
a single, giant example app for their students akin to what they make for their clients and employers. 
So here's one from unemployed me.

# How did this great big app happen?

This application has been constructed by combining open source demos into one big application.
Coming from different demos, the features of the app are not related to each other and it won't make any sense
to have them together but the point is just to demonstrate how things should work technically, so that's okay.
I took these projects and integrated/restructured/restyled their code according to the following prioritization. 
Disagreements in approach between two influences are resolved by the
lower authority yielding to the higher one:

1. [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html) by Google (see [change log](https://angular.io/docs/ts/latest/guide/change-log.html) for updates)
2. [Tour of Heroes (ngModules, Routing, App Specs, HTTP, Server Communication versions)](https://github.com/dancancro/tour-of-heroes-versions) by Google
3. [Angular CLI](https://github.com/angular/angular-cli) by Google and the community
4. [Redux Docs](http://redux.js.org/) Redux.org
5. [JHipster Example](https://github.com/jhipster/jhipster-sample-app-ng2) by [@jdubois](https://github.com/jdubois) and the community
6. [JHipster Example 2](https://github.com/mraible/jhipster4-demo) by [@mraible](https://github.com/mraible)
7. [scalable-architecture-demo - P2P Typing Game](https://github.com/mgechev/scalable-architecture-demo) by [@mgechev](https://github.com/mgechev)
8. [ngrx example app - book collection](https://github.com/ngrx/example-app) by [@MikeRyan52](https://github.com/MikeRyan52)
9. [angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced) by [@mgechev](https://github.com/mgechev) + [@NathanWalker](https://github.com/NathanWalker) + community
10. [FAMN example](https://github.com/implustech/famn) by [@implustech](https://github.com/implustech)
11. [ng2-state-talk - drag/editable notes](https://github.com/JavascriptMick/ng2-state-talk) by [@JavascriptMick](https://github.com/JavascriptMick) 
12. [feathers-starter-react-redux-login-roles - Feathers back end with auth](https://github.com/eddyystop/feathers-starter-react-redux-login-roles) by [@eddyystop](https://github.com/eddyystop)
13. [rangle-starter Angular 2 with TypeScript and Redux version - counter](https://www.npmjs.com/package/rangle-starter) by [@SethDavenport](https://github.com/SethDavenport)

In addition to the features from these demos, I added one of my own. I replaced

14. [this other project](http://www.bernierebuttals.org) which was made with JQuery and Google Scripts. The data is 
contained in [this Google Sheet](https://docs.google.com/spreadsheets/d/1RdIhMdNCRJ-xtl6IgbT2SdChtLIYW8VXeloq7rR1lqY/edit#gid=50602236) 
and served as JSON by a Google script.

A huge thanks to those who created the example demos from which I put together this amalgam. 

# My Innovations

While the goal of the project is to combine the wisdom of different experts, nobody can resist introducing improvements when there's 
no obvious case against doing so. So you will see a couple of practices in this project that came from my head rather than the sources 
of expertise from which the project was assembled. If you can think of reasons not to do these things, please let me know.

1. I put the Redux store reducers in `app/core/store` separate from the feature directories located under `app` and did not make folders
for `reducers`, `actions`, and `effects`. There is a many-to-many relationship between Redux store slices and features. So putting the Redux
code for a given slice into the same directory as one of the features that uses it doesn't make sense. How do you decide which feature gets it?

2. As much as practical the names of files in a directory begin with the directory name. I did this to prevent directories from having a mixture of 
unrelated concerns. If a directory in a source demo had files for two different things, I created more directories. I thought about 
removing that part of the file name, `src/app/app.page.ts` -> `src/app/page.ts`, for the sake of DRY, but that makes it too confusing when
you are working on multiple files with the same names and different directories.

3. I noticed a lot of duplication and boilerplate of identical CRUD code for each of my types of entities. So I made utility functions and 
the related actions and models for each of three types of store slice - [entities](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/core/store/entity), [id lists](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/core/store/id), and [slices](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/core/store/slice) (everything else).

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


## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.
2. [Yarn][]: We use Yarn to manage Node dependencies.
   Depending on your system, you can install Yarn either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

    yarn install

We use yarn scripts and [Webpack][] as our build system.


Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    ./mvnw
    yarn start

[Yarn][] is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `yarn update` and `yarn install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `yarn help update`.

The `yarn run` command will list all of the scripts available to run for this project.

### Managing dependencies

For example, to add [Leaflet][] library as a runtime dependency of your application, you would run following command:

    yarn add --exact leaflet

To benefit from TypeScript type definitions from [DefinitelyTyped][] repository in development, you would run following command:

    yarn add --dev --exact @types/leaflet

Then you would import the JS and CSS files specified in library's installation instructions so that [Webpack][] knows about them:

Edit [src/main/webapp/app/vendor.ts](src/main/webapp/app/vendor.ts) file:
~~~
import 'leaflet/dist/leaflet.js';
~~~

Edit [src/main/webapp/content/css/vendor.css](src/main/webapp/content/css/vendor.css) file:
~~~
@import '~leaflet/dist/leaflet.css';
~~~

Note: there are still few other things remaining to do for Leaflet that we won't detail here.

For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

### Using angular-cli

You can also use [Angular CLI][] to generate some custom client code.

For example, the following command:

    ng generate component my-component

will generate few files:

    create src/main/webapp/app/my-component/my-component.component.html
    create src/main/webapp/app/my-component/my-component.component.ts
    update src/main/webapp/app/app.module.ts

## Building for production

Edit pom.xml by setting node.version to the one you get when you run `node -v`.

To optimize the GreatBigExampleApplication application for production, run:

    ./mvnw -Pprod clean package

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.war

Then navigate to [http://localhost:8090](http://localhost:8090) in your browser.

Refer to [Using JHipster in production][] for more details.

## Testing

To launch your application's tests, run:

    ./mvnw clean test

### Client tests

Unit tests are run by [Karma][] and written with [Jasmine][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

    yarn test

UI end-to-end tests are powered by [Protractor][], which is built on top of WebDriverJS. They're located in [src/test/javascript/e2e](src/test/javascript/e2e)
and can be run by starting Spring Boot in one terminal (`./mvnw spring-boot:run`) and running the tests (`yarn run e2e`) in a second one.
### Other tests

Performance tests are run by [Gatling][] and written in Scala. They're located in [src/test/gatling](src/test/gatling) and can be run with:

    ./mvnw gatling:execute

For more information, refer to the [Running tests page][].

## Using Docker to simplify development (optional)

You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the [src/main/docker](src/main/docker) folder to launch required third party services.
For example, to start a postgresql database in a docker container, run:

    docker-compose -f src/main/docker/postgresql.yml up -d

To stop it and remove the container, run:

    docker-compose -f src/main/docker/postgresql.yml down

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

    ./mvnw package -Pprod docker:build

Then run:

    docker-compose -f src/main/docker/app.yml up -d

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`yo jhipster:docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To configure CI for your project, run the ci-cd sub-generator (`yo jhipster:ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.

[JHipster Homepage and latest documentation]: https://jhipster.github.io
[JHipster 4.3.0 archive]: https://jhipster.github.io/documentation-archive/v4.3.0

[Using JHipster in development]: https://jhipster.github.io/documentation-archive/v4.3.0/development/
[Using Docker and Docker-Compose]: https://jhipster.github.io/documentation-archive/v4.3.0/docker-compose
[Using JHipster in production]: https://jhipster.github.io/documentation-archive/v4.3.0/production/
[Running tests page]: https://jhipster.github.io/documentation-archive/v4.3.0/running-tests/
[Setting up Continuous Integration]: https://jhipster.github.io/documentation-archive/v4.3.0/setting-up-ci/

[Gatling]: http://gatling.io/
[Node.js]: https://nodejs.org/
[Yarn]: https://yarnpkg.org/
[Webpack]: https://webpack.github.io/
[Angular CLI]: https://cli.angular.io/
[BrowserSync]: http://www.browsersync.io/
[Karma]: http://karma-runner.github.io/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[Protractor]: https://angular.github.io/protractor/
[Leaflet]: http://leafletjs.com/
[DefinitelyTyped]: http://definitelytyped.org/

If you get stuck on anything, no matter how little, 
please let me know. I know how the little things are what cause the problems and I don't want you to have any problems.

# FAQ

## 1) In many Redux examples it seems like there is a lot of boilerplate and duplicate code per store slice. Why not have the Action Types be created dynamically by combining the store slice name nouns and action name verbs?

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

## 2) Why are entities modeled as a hash (map) of objects and an array of IDs instead of just an array of objects?

I got the idea from the ngrx example app. I asked about it once and was told that it was done for performance reasons but I'm not sure under what conditions they apply.

## 3) Why do you generate IDs on the client side, not the server side?

This makes it possible to have the application work offline. It also lets your objects have some persisted attributes and some transient, UI attributes without it affecting the
api code. The way this works is that the UI lets you display things before they have been persisted to the server. Then a request to persist happens. The request only sends persistent
attributes because the api is ignorant of the user interface. When the response comes back you can find the original object by its previously established ID and handle it accordingly. 
If successful, you'd likely do nothing that the user sees. However, if you hadn't given it an ID, it would be discarded and recreated from the object in the response. This response 
object would not have all the transient attributes of the object in the request. So, for example, if its location on the screen were a transient attribute, then the user would see it 
jump to a default location since the former location would be lost.

Any other questions?  Just ask.

# Demonstrations and Features

| **Developer Experience** |[great big example application](https://github.com/dancancro/great-big-example-application)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[mgechev's angular-seed](https://github.com/mgechev/angular-seed)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|[feathers-starter-react-redux-login-roles](https://github.com/eddyystop/feathers-starter-react-redux-login-roles)|
|:------ | :------: | :------: | :------: | :------: | :------: |
[Account Management, add/remove user](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/account/register "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/account/register)| | | | |
[Account Management, forgotten/recover/reset password (?)](https://github.com/meanjs/mean/issues/867 "Saves login info to user's computer so they don't have to login next time")|X|X| | |X|
[Account Management, login/logout](http://railscasts.com/episodes/274-remember-me-reset-password "")|X|X| | |X|
[Account Management, register](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/shared/login "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/shared/login)| | | |[X](https://github.com/eddyystop/feathers-starter-react-redux-login-roles/tree/1c264df9e4c11313fd9237ba1cecb65454c41f3b/client/screens/Users/UserSignIn)|
Ambitransportous| | | | |[UNIQUE.](http:// "Feathers.js")|
[API introspection report and testing interface (?)](http://www.javarepl.com/console.html "a simple, interactive computer programming environment that takes single user inputs (i.e. single expressions), evaluates them, and returns the result to the user")|[UNIQUE.](http:// "JHipster, Swagger")| | | | |
[Asynchronously loaded data example (?)](https://github.com/CleverStack/clever-background-tasks "allows CPU intensive (blocking) operations to take place in separate processes, allowing your HTTP Web Server Processes to continue serving HTTP Requests.")|X|X| |X| |
Authentication|X|X| | |[X.](http:// "Feathers.js, Passport")|
[Authentication, JSON Web Token (JWT) (?)](http://www3.safenet-inc.com/blog/pdf/AnonymousAuthentication.pdf "Gives users access to a web site without prompting them for a user name or password    Anonymous authentication allows a more flexible security configuration. For example if you want to allow \"get\" requests to all users, and the others only to the administrator")|[X.](https://github.com/jhipster/generator-jhipster/pull/666 "JHipster")| | | |[X.](http:// "Feathers.js")|
[Authentication, social sign-in (?)](https://github.com/linnovate/mean/pull/317 "creates a new user or joins the new data to the existing user")|[UNIQUE.](http:// "JHipster")| | | | |
[Authentication, using Oauth](https://github.com/linnovate/mean/pull/317 "")|[X.](http:// "JHipster")| | | |[X.](http:// "Feathers.js")|
[Authentication, with two-factor authentication (?)](http://www.corsproxy.com/ "Click link to see how you can setup a proxy to enable CORS    Your app can serve requests from other domains.  This is an alternative to JSONP.    Your app will inspect the request and if it comes from a friendly origin, it will return an Access-Control-Allow-Origin (ACAO) header in its response.    Put this line in your app.js file of a node app:  app.use(cors()); ")| |UNIQUE| | | |
Authorization, Role-based|[X.](http:// "JHipster")| | | |[X.](http:// "Feathers.js")|
[Automated device testing](https://github.com/google/web-starter-kit/wiki/Why-another-boilerplate%3F "")|[X.](http:// "BrowserSync")| |[X.](https://github.com/mgechev/angular-seed/wiki/Add-a-Proxy-to-browsersync "BrowserSync")|[X.](https://github.com/mgechev/angular-seed/wiki/Add-a-Proxy-to-browsersync "BrowserSync")| |
back end generator|[X.](http:// "JHipster")| | | |[X.](http:// "Feathers.js")|
[Blog](https://github.com/angular-app/angular-app/issues/19 "")|UNIQUE| | | | |
Breadcrumbs| |UNIQUE| | | |
Can run on a desktop without a browser| | | |[UNIQUE.](http:// "Electron")| |
[Chatroom specifically for the technology, supports markdown](http://stackshare.io/stackups/slack-vs-gitter#more "")|[X.](http://stackshare.io/stackups/slack-vs-gitter#more "Gitter")|[X.](http://stackshare.io/stackups/slack-vs-gitter#more "Gitter")|[X.](http://stackshare.io/stackups/slack-vs-gitter#more "Gitter")|[X.](http://stackshare.io/stackups/slack-vs-gitter#more "Gitter")| |
Client-side dependency injection|[X.](http:// "Angular 2.0, Spring MVC, Java 7")|[X.](http:// "Angular 2.0")|[X.](http:// "Angular 2.0")|[X.](http:// "Angular 2.0")| |
[Client-side performance monitoring & instrumentation](https://developers.google.com/speed/pagespeed/insights/ "")|UNIQUE| | | | |
[Client-side routing, routes/states contain special properties](https://docs.google.com/document/d/1QZxp4R0Q2SbAzq0erdtUizHVMFphPaW8mfaI6SO048k/edit "")|UNIQUE| | | | |
[Client-side routing, State-based routing](http://angularclass.com/angularconnect-2015-a-highlights-tour/ "")|[X.](http://angularclass.com/angularconnect-2015-a-highlights-tour/ "Angular 2.0, JHipster")|[X.](http://angularclass.com/angularconnect-2015-a-highlights-tour/ "Angular 2.0")|[X.](http://angularclass.com/angularconnect-2015-a-highlights-tour/ "Angular 2.0")|[X.](http://angularclass.com/angularconnect-2015-a-highlights-tour/ "Angular 2.0")| |
Client-side unit tests|X|X|X|X| |
[Clustered HTTP sessions (?)](https://www.owasp.org/index.php/Main_Page "I think this needs to be reorganized.  I think the authentication types are possibilities of local authentication    Some security packages to consider:  Kraken  Helmet.js  Lusca    Douglas Crockford: In a safe system, references can only be obtained by creation, construction and introduction")|[UNIQUE.](http:// "JHipster")| | | | |
Code coverage reporting|[X.](http:// "Mocha, karma-coverage, Istanbul")|[X.](http:// "Mocha")| | |[X.](http:// "Istanbul, Mocha")|
[Command line interface (CLI) (?)](https://github.com/Hashnode/mern-cli "Generates boilerplate code")|[X.](https://github.com/vuejs/vue-cli "angular-cli, Spring MVC, Yeoman, Maven, Gradle, Vue")|[X.](http:// "angular-cli")| | |[X.](https://github.com/facebookincubator/create-react-app "React")|
[Command line interface (CLI), can do database migration/evolution](https://en.wikipedia.org/wiki/Ruby_on_Rails "")|[UNIQUE.](http:// "Liquibase")| | | | |
Compiled, supports ahead of time (AOT) compilation|X| |X|[X.](http:// "mgechev's angular-seed")| |
Components communicate with events|X|X| | | |
Concurrency (synchronization), immutable data|X|[X.](http:// "Immutable, ng-redux")| |[X.](http:// "ngrx")|[X.](http:// "Redux")|
[Concurrency (synchronization), supports database transactions (?)](https://en.wikipedia.org/wiki/Software_transactional_memory "a concurrency control mechanism analogous to database transactions for controlling access to shared memory in concurrent computing")|[UNIQUE.](http:// "JHipster")| | | | |
[Core Module (client-side)](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-10 "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/shared/shared.module.ts)| | |X| |
[Cross-Origin Resource Sharing (CORS) (?)](https://www.reddit.com/r/javascript/comments/3la78q/what_to_learn_as_a_frontend_framework_angular_or/cv4lc12 "Not having this is rare but I had to put it down because it's a big gotcha of React.")|[X.](http:// "JHipster")| | | |X|
[Data binding & change detection/tracking, no dirty checks (good), getters/setters (bad)](http://www.fullstackradio.com/30 "")|[UNIQUE.](http://www.fullstackradio.com/30 "Vue")| | | | |
[Database connection pooling (?)](https://github.com/DaftMonk/generator-angular-fullstack/issues/642 "A server-side system to handle delegation of asynchronous tasks, like sending email messages, to the resources available to do them")|[UNIQUE.](http:// "JHipster")| | | | |
[Deployment automation, to a mobile native executable](http://enclosejs.com/ "")| | | |UNIQUE| |
[Deployment automation, using Docker](https://github.com/DaftMonk/generator-angular-fullstack/issues/501 "")|X| |X|X| |
[Deployment automation, using Heroku](https://www.youtube.com/watch?v=s1-52uG0nGQ "")|UNIQUE| | | | |
[Derived, computed properties](https://github.com/google/web-starter-kit/wiki/Why-another-boilerplate%3F "")|X|X| | | |
[Development build, html page processing (?)](https://github.com/dustinspecker/generator-ng-poly/issues/96 "This goes with the step below.  To prevent asset files (css and js) from being cached, they are given unique names and the index.html file that refers to them is updated")|[UNIQUE.](http:// "JHipster")| | | | |
[Development build, script](http://www.letscodejavascript.com/v3/episodes/live/15 "")|[UNIQUE.](http:// "JHipster")| | | | |
[Dynamic component creation](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/features/bernie/rebuttal/rebuttal.component.html "")| |UNIQUE| | | |
[End-to-end tests (?)](http://www.letscodejavascript.com/v3/episodes/lessons_learned/1 "\"No code sits unintegrated for more than a couple hours.  At the end of every development episode, the code is integrated with the latest release and all the tests must run at 100%\"  - Kent Beck    1) Integrate others' changes into your local code and build locally  2) Build on a separate machine.  3) Publish known-good code.  Start new task.    Continuously merges and tests working copies from multiple developers to prevent integration problems later.  Used for projects hosted on Github")|X|X|X|X| |
[Error handling, Client-side logging (?)](https://github.com/johnpapa/angularjs-styleguide#exception-handling "Provides a consistent way to handle uncaught AngularJS exceptions for development-time or run-time.")|X| | |X| |
[Error handling, Server-side logging](https://github.com/jirutka/spring-rest-exception-handler "")|[X.](https://github.com/jhipster/generator-jhipster/issues/894 "Logback")| |[X.](http:// "Express")|[X.](http:// "Express")|[X.](http:// "Express")|
External, 3rd party, API interaction|X|X| | | |
FEATURE (a.k.a. module, entity) generator|[UNIQUE.](http:// "JHipster")| | | | |
[File Upload](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/layouts/footer "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/layouts/footer)| | | | |
[Footer (?)](http://jsfiddle.net/ProLoser/bp3Qu/light/ "A means of generating form markup from database schemas and structures    See link to a Fiddle for making a form builder  ")|X|X| | | |
[Front-end CRUD](https://youtu.be/d1MEM8PdAzQ?t=790 "")|X|X| |X|X|
Front-end CRUD, with mock/seed data|UNIQUE| | | | |
[Full-stack CRUD](https://jhipster.github.io/video-tutorial/ "")|[X](https://jhipster.github.io/video-tutorial/)|X| | | |
[Full-stack CRUD, screencast of it](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase)| | | | |
[Full-stack CRUD, with Create, Update and Delete](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase)|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos)| | | |
[Full-stack CRUD, with Create, Update and Delete, individual records](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/services/rest.service.ts "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/services/rest.service.ts)|X| | | |
[Full-stack CRUD, with Create, Update and Delete, whole data structures (?)](https://www.youtube.com/watch?v=33kl0iQByME&list=UUEGUP3TJJfMsEM_1y8iviSQ#t=963 "Blog about it http://www.dwmkerr.com/promises-in-angularjs-the-definitive-guide/")|[UNIQUE](https://jhipster.github.io/video-tutorial/)| | | | |
[Full-stack CRUD, with db-persisted seed data (?)](http://YES "Detects when users make any changes to the data so that cancel/save buttons can be appropriately enabled")|UNIQUE| | | | |
[Full-stack CRUD, with Read](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase)|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos)| | | |
[Graphical schema editing (?)](https://ionic.io/products/creator "A tool for designing user interfaces that lets you modify the user interface directly instead of coding it in a text editor")|[UNIQUE.](http:// "JDL Studio")| | | | |
Grid|UNIQUE| | | | |
[Hot Module Replacement (?)](https://github.com/born2net/Angular-kitchen-sink/blob/master/package.json#L10 "Set breakpoints (and specify trigger conditions)  Step over, step in, step out, resume (continue)  Inspect scopes, variables, object properties")|UNIQUE| | | | |
[i18n, localization](https://jhipster.github.io/video-tutorial/ "")|[X](https://jhipster.github.io/video-tutorial/)| |X|X| |
[Instrumentation, Metrics, server-side](http://dynofy.com/ "")|[UNIQUE.](http:// "JHipster")| | | | |
[Lazy (on-demand) loading of client-side code](http://blog.durandal.io/2015/05/20/porting-an-angular-2-0-app-to-aurelia/#comment-2036657491 "")|[X.](http:// "Angular 2.0, Spring MVC")|[X.](http:// "Angular 2.0")|[X.](http:// "Angular 2.0")|[X.](http:// "Angular 2.0")| |
Local storage|X|X| | |X|
[Many-to-many data](http://208.68.38.122/themes/emerald/dev/htmls/forms.html? "")|UNIQUE| | | | |
[Microservice generator (?)](https://github.com/jhipster/generator-jhipster/issues/186 "Model definitions are generated by inspecting a database")|[UNIQUE.](https://github.com/jhipster/generator-jhipster/issues/186 "JHipster")| | | | |
Modals (popups, dialogs)|UNIQUE| | | | |
[Modularized, route-specific CSS (?)](https://github.com/atomify/atomify-css "Reusable front-end styling using Rework, plugins, and Node's resolve algorithm    allows you to build nice little components that can be shared across apps    you may use atomify-css with CSS or LESS, you cannot combine them in the same workflow")|[X.](http:// "Angular 2.0")|[X.](http:// "Angular 2.0")|[X.](http:// "Angular 2.0")|[X.](http:// "Angular 2.0")| |
[Navigation bar](https://material.angularjs.org/latest/demo/sidenav "")|X|X| | | |
[No pluralization](https://github.com/jhipster/generator-jhipster/pull/2719 "")|UNIQUE| | | | |
[Notifications](http://webapplayers.com/inspinia_admin-v1.8/toastr_notifications.html "")|UNIQUE| | | | |
Number spinner|UNIQUE| | | | |
[Object-relational mapping](https://www.quora.com/Which-is-better-between-laravel-and-ruby-on-rails/answer/Prabhakar-Bhat?srid=XaU8&share=1 "")|[X.](http:// "JHipster")| | | |[X.](http:// "Feathers.js")|
[Observables for databinding a.k.a. KVO (?)](http://blog.durandal.io/2015/05/20/porting-an-angular-2-0-app-to-aurelia/#comment-2054431151 "+ It makes things happen without a lot of code    -This can be prone to infinite loop problems")|[X.](http://blog.durandal.io/2015/05/20/porting-an-angular-2-0-app-to-aurelia/#comment-2054431151 "RxJS")|[X.](http://blog.durandal.io/2015/05/20/porting-an-angular-2-0-app-to-aurelia/#comment-2054431151 "RxJS")|[X.](http://blog.durandal.io/2015/05/20/porting-an-angular-2-0-app-to-aurelia/#comment-2054431151 "RxJS, JS ES2016")|[X.](http://blog.durandal.io/2015/05/20/porting-an-angular-2-0-app-to-aurelia/#comment-2054431151 "RxJS, JS ES2016")| |
[Pagination, paging (client-side)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/entities/claim/claim.component.ts#L10 "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/entities/claim/claim.component.ts#L10)| | | | |
[Pagination, paging (server-side)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/java/org/exampleapps/greatbig/web/rest/TagResource.java#L98 "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/java/org/exampleapps/greatbig/web/rest/TagResource.java#L98)| | | |[X.](http:// "Feathers.js")|
Pagination, paging (server-side), with sorting|UNIQUE| | | | |
Panels, draggable| |UNIQUE| | | |
[Persistent, server-side data storage (?)](http://hammerprinciple.com/databases "Structured Query Language. For use with data in related tables.")|[X.](https://jhipster.github.io/2016/12/08/jhipster-release-3.12.1.html "MongoDB, SQL Server, MySQL, Postgresql, Cassandra, ElasticSearch")| |[X.](http://expressjs.com/guide/database-integration.html "MySQL, Postgresql, SQLite, MongoDB, CouchDB, ElasticSearch, LevelDB, Cassandra, Neo4J")|[X.](http://expressjs.com/guide/database-integration.html "MySQL, Postgresql, SQLite, MongoDB, CouchDB, ElasticSearch, LevelDB, Cassandra, Neo4J")|[X.](http://expressjs.com/guide/database-integration.html "MySQL, Postgresql, SQLite, MongoDB, CouchDB, ElasticSearch, LevelDB, Cassandra, Neo4J, Rethinkdb")|
[Preloads client-side data (?)](https://www.youtube.com/watch?v=33kl0iQByME&list=UUEGUP3TJJfMsEM_1y8iviSQ#t=963 "This can be useful for caching videos    Blog about it http://www.dwmkerr.com/promises-in-angularjs-the-definitive-guide/")|[X.](http:// "Angular 2.0")|[X.](http:// "Angular 2.0")|[X.](http:// "Angular 2.0")|[X.](http:// "Angular 2.0")| |
[Production build, generate docs](http://kapeli.com/docsets "")| |[X.](http:// "typedoc")| |[X.](http:// "typedoc")| |
Production build, safe pre-minification|[X.](http:// "Angular 2.0, ng-annotate")|[X.](http:// "Angular 2.0")|[X.](http:// "Angular 2.0")|[X.](http:// "Angular 2.0")| |
[Realtime data sync (?)](https://www.youtube.com/watch?v=dOCMpoeuwTI "Any change to data (addition, update, deletion) by anyone is instantly visible to everyone else without requiring a refresh")|UNIQUE| | | | |
[Responsive styles](https://www.youtube.com/watch?v=lvGAgul5QT4&app=desktop "")|UNIQUE| | | | |
[route (client side) generator](https://github.com/Swiip/generator-gulp-angular/issues/9 "")|[UNIQUE.](http:// "JHipster")| | | | |
[Safe from clickjacking (?)](https://github.com/meanjs/mean/issues/848 "Applies a rigorous validation to passwords to make sure they are secure")|[UNIQUE.](http:// "JHipster")| | | | |
[Safe from session id hacks (?)](http://en.wikipedia.org/wiki/Message_authentication_code "Server generates Message Authentication Codes from important, by-user-read-only data")|[UNIQUE.](http:// "JHipster")| | | | |
[Search, actually works with backend API](http://railscasts.com/episodes/306-elasticsearch-part-1 "")|UNIQUE| | | | |
Separate route configuration files for each module|UNIQUE| | | | |
[Separation of smart containers and dumb components](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/debate/debate.page.html#L9 "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/debate/debate.page.html#L9)| | | | |
Server-side caching|[UNIQUE.](http:// "JHipster")| | | | |
[Server-side integration & unit tests](http://willnathan.com/nodejs-vs-ruby-on-rails "")|[X.](http:// "Mocha, JUnit, Mockito")|[X.](http:// "Mocha")| | |[X.](http:// "Mocha")|
[Share code between projects](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-12 "")| | |X|[X.](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/shared/core/core.module.ts "mgechev's angular-seed")| |
[Shared Module (client side)](https://yarnpkg.com/ "")|X|X| | | |
[Single source of truth, central state management (?)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/store/entity "Usually with Redux implementations your app will have lots of similar code in action, reducer and effect files for each slice of the store.    To avoid this, takes imposing some conventions and creating utility functions.")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/store/entity)|[X.](http:// "ng-redux")| |[X.](http:// "ngrx")|[X.](http:// "Redux")|
[Single source of truth, central state management, without lots of boilerplate](https://www.youtube.com/watch?v=nYkdrAPrdcw&list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v#t=1078 "")|UNIQUE| | | | |
[State inspection tools (?)](http://mochajs.org/ "It will update the code in the client without users needing to do anything")|[X.](http:// "redux-devtools")|[X.](http:// "redux-devtools")| |[X.](http:// "redux-devtools")|[X.](http:// "redux-devtools")|
[Style guide for code (?)](https://github.com/Swiip/generator-gulp-angular/pull/469 "Provides consistency and best practices")|[X.](https://angular.io/docs/ts/latest/guide/style-guide.html "Angular Style Guide")| |[X.](https://angular.io/docs/ts/latest/guide/style-guide.html "Angular Style Guide")|[X.](https://angular.io/docs/ts/latest/guide/style-guide.html "Angular Style Guide")| |
[Supports database layer triggers (?)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/store/entity "only one piece of the application flow is tasked with mutating state data")|[X.](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/store/entity "JHipster")| | | |[X.](http:// "Feathers.js")|
[Tables](http://railscasts.com/episodes/340-datatables?autoplay=true "")|UNIQUE| | | | |
[Templating, parsable HTML, no imperative code allowed](http://railscasts.com/episodes/269-template-inheritance "")|[X.](http:// "Angular 2.0")|[X.](http:// "Angular 2.0")|[X.](http:// "Angular 2.0")|[X.](http:// "Angular 2.0")| |
[Time travel, undo (?)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/core.module.ts#L95 "After a code change the page will reload and put you in the same place you were in before without losing state.")|[X.](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/core.module.ts#L95 "ngrx")|[X.](http:// "ng-redux")| |[X.](http:// "ngrx")|[X.](http:// "Redux")|
Timepicker|UNIQUE| | | | |
[To do list](http://www.quora.com/What-is-the-best-open-source-solution-for-implementing-fast-auto-complete "")|UNIQUE| | | | |
[Two-way data binding (?)](https://medium.com/@davidsouther/song-flux-e1f9786579f6 "Reduces boilerplate and is easier to reason about than traditional data binding    Facebook engineers recognized that allowing data to flow in two directions created applications that were difficult to reason about. Hence, the concept of unidirectional data flow was introduced. Specifically, Flux says that data should flow down: starting at the topmost component and then down the tree.")|[X.](https://medium.com/@davidsouther/song-flux-e1f9786579f6 "Angular 2.0")|[X.](https://medium.com/@davidsouther/song-flux-e1f9786579f6 "Angular 2.0")|[X.](https://medium.com/@davidsouther/song-flux-e1f9786579f6 "Angular 2.0")|[X.](https://medium.com/@davidsouther/song-flux-e1f9786579f6 "Angular 2.0")| |
[Typed (?)](http://qr.ae/fe0h2 "This is a good way to check things automatically, but you should be writing unit tests that can accomplish the same thing.    It also makes possible editor assistance by giving you code completion to display available methods for an object.")|[X.](http://www.typescriptlang.org/ "Typescript")|[X.](http://www.typescriptlang.org/ "Typescript")|[X.](http://www.typescriptlang.org/ "Typescript")|[X.](http://www.typescriptlang.org/ "Typescript")| |
[Typed, statically (?)](http://php.net/manual/en/book.reflection.php "Reflection makes it possible to inspect classes, interfaces, fields and methods at runtime, without knowing the names of the classes, methods etc. at compile time. It may also be possible to instantiate new objects, invoke methods and get/set field values using reflection")|[X.](http:// "Typescript")|[X.](http:// "Typescript")|[X.](http:// "Typescript")|[X.](http:// "Typescript")| |
[UML to model generation (?)](https://github.com/dustinspecker/generator-ng-poly/releases/tag/v0.7.3 "example: choosing ES2015 for appScript then suggests the same for testScript  same with Mocha and Jasmine for unit and e2e testing framework")|[UNIQUE.](http:// "JHipster")| | | | |
Update generated code in an existing app|[X.](http:// "JHipster")| |X|[X.](http:// "mgechev's angular-seed")| |
[User tracking and analytics](http://jvectormap.com/ "")|X| | |X| |
[Virtual, shadow DOM (?)](https://plus.google.com/u/0/+AngularJS/posts/eZNUbuXwbCm "for browsers that do not support ShadowDOM natively")| | | | |[UNIQUE.](http:// "React")|
|  | | | | |
| **User Experience** |[great big example application](https://github.com/dancancro/great-big-example-application)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[mgechev's angular-seed](https://github.com/mgechev/angular-seed)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|[feathers-starter-react-redux-login-roles](https://github.com/eddyystop/feathers-starter-react-redux-login-roles)|
|  | | | | |
| **Dependencies** |[great big example application](https://github.com/dancancro/great-big-example-application)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[mgechev's angular-seed](https://github.com/mgechev/angular-seed)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|[feathers-starter-react-redux-login-roles](https://github.com/eddyystop/feathers-starter-react-redux-login-roles)|
Backend Frameworks | | |Express |Express |Express, Feathers.js
Builders |Gradle (opt), Maven (opt), Yeoman | | | |
Client-side API interfaces |@angular/http |@angular/http | |@angular/http |
Convenience method libraries |lodash |lodash | |lodash |lodash
Databases |Cassandra (opt), ElasticSearch (opt), H2, MongoDB (opt), MySQL (opt), Postgresql (opt), Redis (opt), SQL Server (opt) |Redis |Cassandra (opt), CouchDB (opt), ElasticSearch (opt), LevelDB (opt), MongoDB (opt), MySQL (opt), Neo4J (opt), Postgresql (opt), Redis (opt), SQLite (opt) |Cassandra (opt), CouchDB (opt), ElasticSearch (opt), LevelDB (opt), MongoDB (opt), MySQL (opt), Neo4J (opt), Postgresql (opt), Redis (opt), SQLite (opt) |Cassandra (opt), CouchDB (opt), ElasticSearch (opt), LevelDB (opt), MongoDB (opt), MySQL (opt), NeDB (opt), Neo4J (opt), Postgresql (opt), Redis (opt), Rethinkdb (opt), SQLite (opt)
Documentation generators | |typedoc | |typedoc |
Frontend Frameworks |Angular 2.0, Vue (opt) |Angular 2.0 |Angular 2.0 |Angular 2.0 |React, React Native (opt)
Fullstack Frameworks |Spring MVC | | | |
Languages |Java 7, Java 8, JS ES5, JS ES6 (ES2015), JSX (opt), Typescript |JS ES5, JS ES6 (ES2015), Typescript |JS ES2016, JS ES5, JS ES6 (ES2015), Typescript |JS ES2016, JS ES5, JS ES6 (ES2015), Typescript |JS ES5, JS ES6 (ES2015), JSX (opt)
Linters |codelyzer, ESLint, JSHint, tslint | |codelyzer, tslint |codelyzer, tslint |ESLint
Loaders/Bundlers |Spring, Webpack |Webpack |Rollup, SystemJS |Rollup, SystemJS |Webpack
Misc |Angular Style Guide, angular-omni-bar (opt), cssnano, Jackson, JDL Studio, Liquibase, Logback, ng-annotate, nodemon, redux-devtools, RxJS, Swagger, useref, wiredep |Immutable, redux-devtools, RxJS |Angular Style Guide, cssnano, RxJS |Angular Style Guide, cssnano, Electron, redux-devtools, RxJS |Passport, react-router, redux-devtools
Package Managers |bower, npm, Yarn |npm |npm |npm |npm
Routers |Angular Component Router |Angular Component Router |Angular Component Router |Angular Component Router |
Runtime Environments |Node |Node |Node |NativeScript, Node |Node
Security Frameworks |Spring Social | | | |
Stacks |angular-cli, JHipster |angular-cli | |mgechev's angular-seed |
State Managers |ngrx |ng-redux | |ngrx |Redux
Styles |Normalize.css | | | |
Task Runners | |Gulp |Gulp |Gulp |
Test assertion libraries |Chai, Jasmine, Mocha |Chai, Jasmine, Mocha |Jasmine |Jasmine |Chai, Mocha
Test coverage reporters |Istanbul, karma-coverage | | | |Istanbul
Test runners |BrowserSync, Karma | |BrowserSync (opt), Karma |BrowserSync (opt), Karma |
Transpilers |libsass |libsass | | |libsass
Unit testers |JUnit, Mockito | | | |
Widget collections |Angular Material |Angular Material | | |

See any mistakes? [Help improve this data](https://docs.google.com/forms/d/e/1FAIpQLSeo2fG1YwFbGF_p9zor7Tu_KHPGF6tIt5EWoZGcosGLytC_EQ/viewform)

# File Structure
```
.
├── Procfile
├── README.md
├── etc
├── mvnw
├── mvnw.cmd
├── package.json
├── pom.xml
├── proxy.conf.json
├── schema.jdl
├── src
│   ├── main
│   │   ├── docker
│   │   │   ├── Dockerfile
│   │   │   ├── app.yml
│   │   │   ├── elasticsearch.yml
│   │   │   ├── postgresql.yml
│   │   │   └── sonar.yml
│   │   ├── java
│   │   │   └── org
│   │   │       └── exampleapps
│   │   │           └── greatbig
│   │   │               ├── ApplicationWebXml.java
│   │   │               ├── GreatBigExampleApplicationApp.java
│   │   │               ├── aop
│   │   │               │   └── logging
│   │   │               │       └── LoggingAspect.java
│   │   │               ├── config
│   │   │               │   ├── ApplicationProperties.java
│   │   │               │   ├── AsyncConfiguration.java
│   │   │               │   ├── CacheConfiguration.java
│   │   │               │   ├── CloudDatabaseConfiguration.java
│   │   │               │   ├── Constants.java
│   │   │               │   ├── DatabaseConfiguration.java
│   │   │               │   ├── DateTimeFormatConfiguration.java
│   │   │               │   ├── DefaultProfileUtil.java
│   │   │               │   ├── ElasticsearchConfiguration.java
│   │   │               │   ├── LocaleConfiguration.java
│   │   │               │   ├── LoggingAspectConfiguration.java
│   │   │               │   ├── LoggingConfiguration.java
│   │   │               │   ├── MetricsConfiguration.java
│   │   │               │   ├── SecurityConfiguration.java
│   │   │               │   ├── ThymeleafConfiguration.java
│   │   │               │   ├── WebConfigurer.java
│   │   │               │   ├── WebsocketConfiguration.java
│   │   │               │   ├── WebsocketSecurityConfiguration.java
│   │   │               │   ├── audit
│   │   │               │   │   ├── AuditEventConverter.java
│   │   │               │   │   └── package-info.java
│   │   │               │   ├── package-info.java
│   │   │               │   └── social
│   │   │               │       └── SocialConfiguration.java
│   │   │               ├── domain
│   │   │               │   ├── AbstractAuditingEntity.java
│   │   │               │   ├── Authority.java
│   │   │               │   ├── Blog.java
│   │   │               │   ├── Claim.java
│   │   │               │   ├── ClaimRebuttal.java
│   │   │               │   ├── Contact.java
│   │   │               │   ├── Crisis.java
│   │   │               │   ├── Entry.java
│   │   │               │   ├── Hero.java
│   │   │               │   ├── Note.java
│   │   │               │   ├── PersistentAuditEvent.java
│   │   │               │   ├── Rebuttal.java
│   │   │               │   ├── SocialUserConnection.java
│   │   │               │   ├── Tag.java
│   │   │               │   ├── User.java
│   │   │               │   └── package-info.java
│   │   │               ├── repository
│   │   │               │   ├── AuthorityRepository.java
│   │   │               │   ├── BlogRepository.java
│   │   │               │   ├── ClaimRebuttalRepository.java
│   │   │               │   ├── ClaimRepository.java
│   │   │               │   ├── ContactRepository.java
│   │   │               │   ├── CrisisRepository.java
│   │   │               │   ├── CustomAuditEventRepository.java
│   │   │               │   ├── CustomSocialConnectionRepository.java
│   │   │               │   ├── CustomSocialUsersConnectionRepository.java
│   │   │               │   ├── EntryRepository.java
│   │   │               │   ├── HeroRepository.java
│   │   │               │   ├── NoteRepository.java
│   │   │               │   ├── PersistenceAuditEventRepository.java
│   │   │               │   ├── RebuttalRepository.java
│   │   │               │   ├── SocialUserConnectionRepository.java
│   │   │               │   ├── TagRepository.java
│   │   │               │   ├── UserRepository.java
│   │   │               │   ├── package-info.java
│   │   │               │   └── search
│   │   │               │       ├── BlogSearchRepository.java
│   │   │               │       ├── ClaimRebuttalSearchRepository.java
│   │   │               │       ├── ClaimSearchRepository.java
│   │   │               │       ├── ContactSearchRepository.java
│   │   │               │       ├── CrisisSearchRepository.java
│   │   │               │       ├── EntrySearchRepository.java
│   │   │               │       ├── HeroSearchRepository.java
│   │   │               │       ├── NoteSearchRepository.java
│   │   │               │       ├── RebuttalSearchRepository.java
│   │   │               │       ├── TagSearchRepository.java
│   │   │               │       ├── UserSearchRepository.java
│   │   │               │       └── package-info.java
│   │   │               ├── security
│   │   │               │   ├── AuthoritiesConstants.java
│   │   │               │   ├── DomainUserDetailsService.java
│   │   │               │   ├── SecurityUtils.java
│   │   │               │   ├── SpringSecurityAuditorAware.java
│   │   │               │   ├── UserNotActivatedException.java
│   │   │               │   ├── jwt
│   │   │               │   │   ├── JWTConfigurer.java
│   │   │               │   │   ├── JWTFilter.java
│   │   │               │   │   └── TokenProvider.java
│   │   │               │   ├── package-info.java
│   │   │               │   └── social
│   │   │               │       ├── CustomSignInAdapter.java
│   │   │               │       └── package-info.java
│   │   │               ├── service
│   │   │               │   ├── AuditEventService.java
│   │   │               │   ├── MailService.java
│   │   │               │   ├── SocialService.java
│   │   │               │   ├── UserService.java
│   │   │               │   ├── dto
│   │   │               │   │   ├── UserDTO.java
│   │   │               │   │   └── package-info.java
│   │   │               │   ├── mapper
│   │   │               │   │   ├── UserMapper.java
│   │   │               │   │   └── package-info.java
│   │   │               │   ├── package-info.java
│   │   │               │   └── util
│   │   │               │       └── RandomUtil.java
│   │   │               └── web
│   │   │                   ├── rest
│   │   │                   │   ├── AccountResource.java
│   │   │                   │   ├── AuditResource.java
│   │   │                   │   ├── BlogResource.java
│   │   │                   │   ├── ClaimRebuttalResource.java
│   │   │                   │   ├── ClaimResource.java
│   │   │                   │   ├── ContactResource.java
│   │   │                   │   ├── CrisisResource.java
│   │   │                   │   ├── EntryResource.java
│   │   │                   │   ├── HeroResource.java
│   │   │                   │   ├── JWTToken.java
│   │   │                   │   ├── LogsResource.java
│   │   │                   │   ├── NoteResource.java
│   │   │                   │   ├── ProfileInfoResource.java
│   │   │                   │   ├── RebuttalResource.java
│   │   │                   │   ├── SocialController.java
│   │   │                   │   ├── TagResource.java
│   │   │                   │   ├── UserJWTController.java
│   │   │                   │   ├── UserResource.java
│   │   │                   │   ├── errors
│   │   │                   │   │   ├── CustomParameterizedException.java
│   │   │                   │   │   ├── ErrorConstants.java
│   │   │                   │   │   ├── ErrorVM.java
│   │   │                   │   │   ├── ExceptionTranslator.java
│   │   │                   │   │   ├── FieldErrorVM.java
│   │   │                   │   │   └── ParameterizedErrorVM.java
│   │   │                   │   ├── package-info.java
│   │   │                   │   ├── util
│   │   │                   │   │   ├── HeaderUtil.java
│   │   │                   │   │   └── PaginationUtil.java
│   │   │                   │   └── vm
│   │   │                   │       ├── KeyAndPasswordVM.java
│   │   │                   │       ├── LoggerVM.java
│   │   │                   │       ├── LoginVM.java
│   │   │                   │       ├── ManagedUserVM.java
│   │   │                   │       └── package-info.java
│   │   │                   └── websocket
│   │   │                       ├── ActivityService.java
│   │   │                       ├── MessageService.java
│   │   │                       ├── dto
│   │   │                       │   ├── ActivityDTO.java
│   │   │                       │   ├── MessageDTO.java
│   │   │                       │   └── package-info.java
│   │   │                       └── package-info.java
│   │   ├── resources
│   │   │   ├── banner.txt
│   │   │   ├── config
│   │   │   │   ├── application-dev.yml
│   │   │   │   ├── application-heroku.yml
│   │   │   │   ├── application-prod.yml
│   │   │   │   ├── application.yml
│   │   │   │   ├── bootstrap-heroku.yml
│   │   │   │   └── liquibase
│   │   │   │       ├── authorities.csv
│   │   │   │       ├── changelog
│   │   │   │       │   ├── 00000000000000_initial_schema.xml
│   │   │   │       │   ├── 20170501195006_added_entity_Hero.xml
│   │   │   │       │   ├── 20170501195007_added_entity_Crisis.xml
│   │   │   │       │   ├── 20170501195008_added_entity_Claim.xml
│   │   │   │       │   ├── 20170501195009_added_entity_Contact.xml
│   │   │   │       │   ├── 20170501195010_added_entity_Note.xml
│   │   │   │       │   ├── 20170501195011_added_entity_Rebuttal.xml
│   │   │   │       │   ├── 20170501195012_added_entity_ClaimRebuttal.xml
│   │   │   │       │   ├── 20170501195013_added_entity_Blog.xml
│   │   │   │       │   ├── 20170501195013_added_entity_constraints_Blog.xml
│   │   │   │       │   ├── 20170501195014_added_entity_Entry.xml
│   │   │   │       │   ├── 20170501195014_added_entity_constraints_Entry.xml
│   │   │   │       │   ├── 20170501195015_added_entity_Tag.xml
│   │   │   │       │   └── 20170501195016_load_data_Seed.xml
│   │   │   │       ├── claim-rebuttal.csv
│   │   │   │       ├── claim.csv
│   │   │   │       ├── contact.csv
│   │   │   │       ├── crisis.csv
│   │   │   │       ├── hero.csv
│   │   │   │       ├── master.xml
│   │   │   │       ├── note.csv
│   │   │   │       ├── rebuttal.csv
│   │   │   │       ├── users.csv
│   │   │   │       └── users_authorities.csv
│   │   │   ├── i18n
│   │   │   │   ├── messages.properties
│   │   │   │   ├── messages_de.properties
│   │   │   │   ├── messages_en.properties
│   │   │   │   ├── messages_es.properties
│   │   │   │   └── messages_fr.properties
│   │   │   ├── logback-spring.xml
│   │   │   ├── mails
│   │   │   │   ├── activationEmail.html
│   │   │   │   ├── creationEmail.html
│   │   │   │   ├── passwordResetEmail.html
│   │   │   │   └── socialRegistrationValidationEmail.html
│   │   │   └── templates
│   │   │       └── error.html
│   │   └── webapp
│   │       ├── 404.html
│   │       ├── app
│   │       │   ├── account
│   │       │   │   ├── account.module.ts
│   │       │   │   ├── account.route.ts
│   │       │   │   ├── activate
│   │       │   │   │   ├── activate.component.html
│   │       │   │   │   ├── activate.component.ts
│   │       │   │   │   ├── activate.route.ts
│   │       │   │   │   └── activate.service.ts
│   │       │   │   ├── index.ts
│   │       │   │   ├── password
│   │       │   │   │   ├── password-strength-bar.component.ts
│   │       │   │   │   ├── password-strength-bar.css
│   │       │   │   │   ├── password.component.html
│   │       │   │   │   ├── password.component.ts
│   │       │   │   │   ├── password.route.ts
│   │       │   │   │   └── password.service.ts
│   │       │   │   ├── password-reset
│   │       │   │   │   ├── finish
│   │       │   │   │   │   ├── password-reset-finish.component.html
│   │       │   │   │   │   ├── password-reset-finish.component.ts
│   │       │   │   │   │   ├── password-reset-finish.route.ts
│   │       │   │   │   │   └── password-reset-finish.service.ts
│   │       │   │   │   └── init
│   │       │   │   │       ├── password-reset-init.component.html
│   │       │   │   │       ├── password-reset-init.component.ts
│   │       │   │   │       ├── password-reset-init.route.ts
│   │       │   │   │       └── password-reset-init.service.ts
│   │       │   │   ├── register
│   │       │   │   │   ├── register.component.html
│   │       │   │   │   ├── register.component.ts
│   │       │   │   │   ├── register.route.ts
│   │       │   │   │   └── register.service.ts
│   │       │   │   ├── settings
│   │       │   │   │   ├── settings.component.html
│   │       │   │   │   ├── settings.component.ts
│   │       │   │   │   └── settings.route.ts
│   │       │   │   └── social
│   │       │   │       ├── social-auth.component.ts
│   │       │   │       ├── social-register.component.html
│   │       │   │       ├── social-register.component.ts
│   │       │   │       └── social.route.ts
│   │       │   ├── admin
│   │       │   │   ├── admin.module.ts
│   │       │   │   ├── admin.route.ts
│   │       │   │   ├── audits
│   │       │   │   │   ├── audit-data.model.ts
│   │       │   │   │   ├── audit.model.ts
│   │       │   │   │   ├── audits.component.html
│   │       │   │   │   ├── audits.component.ts
│   │       │   │   │   ├── audits.route.ts
│   │       │   │   │   └── audits.service.ts
│   │       │   │   ├── configuration
│   │       │   │   │   ├── configuration.component.html
│   │       │   │   │   ├── configuration.component.ts
│   │       │   │   │   ├── configuration.route.ts
│   │       │   │   │   └── configuration.service.ts
│   │       │   │   ├── docs
│   │       │   │   │   ├── docs.component.html
│   │       │   │   │   ├── docs.component.ts
│   │       │   │   │   └── docs.route.ts
│   │       │   │   ├── health
│   │       │   │   │   ├── health-modal.component.html
│   │       │   │   │   ├── health-modal.component.ts
│   │       │   │   │   ├── health.component.html
│   │       │   │   │   ├── health.component.ts
│   │       │   │   │   ├── health.route.ts
│   │       │   │   │   └── health.service.ts
│   │       │   │   ├── index.ts
│   │       │   │   ├── logs
│   │       │   │   │   ├── log.model.ts
│   │       │   │   │   ├── logs.component.html
│   │       │   │   │   ├── logs.component.ts
│   │       │   │   │   ├── logs.route.ts
│   │       │   │   │   └── logs.service.ts
│   │       │   │   ├── metrics
│   │       │   │   │   ├── metrics-modal.component.html
│   │       │   │   │   ├── metrics-modal.component.ts
│   │       │   │   │   ├── metrics.component.html
│   │       │   │   │   ├── metrics.component.ts
│   │       │   │   │   ├── metrics.route.ts
│   │       │   │   │   └── metrics.service.ts
│   │       │   │   ├── tracker
│   │       │   │   │   ├── tracker.component.html
│   │       │   │   │   ├── tracker.component.ts
│   │       │   │   │   └── tracker.route.ts
│   │       │   │   └── user-management
│   │       │   │       ├── user-management-delete-dialog.component.html
│   │       │   │       ├── user-management-delete-dialog.component.ts
│   │       │   │       ├── user-management-detail.component.html
│   │       │   │       ├── user-management-detail.component.ts
│   │       │   │       ├── user-management-dialog.component.html
│   │       │   │       ├── user-management-dialog.component.ts
│   │       │   │       ├── user-management.component.html
│   │       │   │       ├── user-management.component.ts
│   │       │   │       ├── user-management.route.ts
│   │       │   │       └── user-modal.service.ts
│   │       │   ├── app.config.ts
│   │       │   ├── app.constants.ts
│   │       │   ├── app.main.ts
│   │       │   ├── app.module.ts
│   │       │   ├── app.route.ts
│   │       │   ├── blocks
│   │       │   │   ├── config
│   │       │   │   │   ├── prod.config.ts
│   │       │   │   │   └── uib-pagination.config.ts
│   │       │   │   └── interceptor
│   │       │   │       ├── auth-expired.interceptor.ts
│   │       │   │       ├── auth.interceptor.ts
│   │       │   │       ├── errorhandler.interceptor.ts
│   │       │   │       ├── http.provider.ts
│   │       │   │       └── notification.interceptor.ts
│   │       │   ├── core
│   │       │   │   ├── commands
│   │       │   │   │   ├── base.command.ts
│   │       │   │   │   ├── payloads
│   │       │   │   │   │   ├── base.command.payload.ts
│   │       │   │   │   │   └── json.command.payload.ts
│   │       │   │   │   └── restful.command.ts
│   │       │   │   ├── core.module.ts
│   │       │   │   ├── core.routing.ts
│   │       │   │   ├── gateways
│   │       │   │   │   ├── base.gateway.ts
│   │       │   │   │   ├── restful.gateway.ts
│   │       │   │   │   └── websocket.gateway.ts
│   │       │   │   ├── services
│   │       │   │   │   ├── base.async-service.ts
│   │       │   │   │   ├── default-request-options.service.ts
│   │       │   │   │   ├── exception.service.ts
│   │       │   │   │   ├── in-memory-data.service.ts
│   │       │   │   │   ├── index.ts
│   │       │   │   │   ├── rest.service.spec.ts
│   │       │   │   │   ├── rest.service.ts
│   │       │   │   │   ├── router-extensions.service.ts
│   │       │   │   │   ├── socket.service.ts
│   │       │   │   │   └── user.service.ts
│   │       │   │   └── store
│   │       │   │       ├── base
│   │       │   │       │   └── base.model.ts
│   │       │   │       ├── book
│   │       │   │       │   ├── book.effects.spec.ts
│   │       │   │       │   ├── book.effects.ts
│   │       │   │       │   ├── book.model.ts
│   │       │   │       │   └── book.reducer.ts
│   │       │   │       ├── claim
│   │       │   │       │   ├── README.md
│   │       │   │       │   ├── claim.effects.ts
│   │       │   │       │   ├── claim.model.ts
│   │       │   │       │   └── claim.reducer.ts
│   │       │   │       ├── claim-rebuttal
│   │       │   │       │   ├── claim-rebuttal.effects.ts
│   │       │   │       │   ├── claim-rebuttal.model.ts
│   │       │   │       │   └── claim-rebuttal.reducer.ts
│   │       │   │       ├── collection
│   │       │   │       │   ├── collection.effects.spec.ts
│   │       │   │       │   ├── collection.effects.ts
│   │       │   │       │   └── collection.reducer.ts
│   │       │   │       ├── contact
│   │       │   │       │   ├── contact.effects.ts
│   │       │   │       │   ├── contact.model.ts
│   │       │   │       │   └── contact.reducer.ts
│   │       │   │       ├── counter
│   │       │   │       │   ├── counter.actions.test.ts
│   │       │   │       │   ├── counter.effects.ts
│   │       │   │       │   ├── counter.model.ts
│   │       │   │       │   └── counter.reducer.ts
│   │       │   │       ├── crisis
│   │       │   │       │   ├── crisis.effects.ts
│   │       │   │       │   ├── crisis.model.ts
│   │       │   │       │   └── crisis.reducer.ts
│   │       │   │       ├── db.ts
│   │       │   │       ├── entity
│   │       │   │       │   ├── entity.actions.ts
│   │       │   │       │   ├── entity.functions.ts
│   │       │   │       │   └── entity.model.ts
│   │       │   │       ├── game
│   │       │   │       │   ├── game.action-creator.ts
│   │       │   │       │   ├── game.actions.ts
│   │       │   │       │   ├── game.model.ts
│   │       │   │       │   └── game.reducer.ts
│   │       │   │       ├── hero
│   │       │   │       │   ├── hero.effects.ts
│   │       │   │       │   ├── hero.model.ts
│   │       │   │       │   └── hero.reducer.ts
│   │       │   │       ├── id
│   │       │   │       │   ├── id.actions.ts
│   │       │   │       │   ├── id.functions.ts
│   │       │   │       │   └── id.model.ts
│   │       │   │       ├── index.ts
│   │       │   │       ├── layout
│   │       │   │       │   ├── layout.model.ts
│   │       │   │       │   └── layout.reducer.ts
│   │       │   │       ├── message
│   │       │   │       │   └── message.reducer.ts
│   │       │   │       ├── note
│   │       │   │       │   ├── note.effects.ts
│   │       │   │       │   ├── note.model.ts
│   │       │   │       │   └── note.reducer.ts
│   │       │   │       ├── p2p-game
│   │       │   │       │   └── p2p-game.model.ts
│   │       │   │       ├── rebuttal
│   │       │   │       │   ├── rebuttal.effects.ts
│   │       │   │       │   ├── rebuttal.model.ts
│   │       │   │       │   └── rebuttal.reducer.ts
│   │       │   │       ├── search
│   │       │   │       │   └── search.reducer.ts
│   │       │   │       ├── session
│   │       │   │       │   ├── session.effects.ts
│   │       │   │       │   ├── session.model.ts
│   │       │   │       │   └── session.reducer.ts
│   │       │   │       ├── slice
│   │       │   │       │   ├── slice.actions.ts
│   │       │   │       │   └── slice.functions.ts
│   │       │   │       └── util.ts
│   │       │   ├── entities
│   │       │   │   ├── blog
│   │       │   │   │   ├── blog-delete-dialog.component.html
│   │       │   │   │   ├── blog-delete-dialog.component.ts
│   │       │   │   │   ├── blog-detail.component.html
│   │       │   │   │   ├── blog-detail.component.ts
│   │       │   │   │   ├── blog-dialog.component.html
│   │       │   │   │   ├── blog-dialog.component.ts
│   │       │   │   │   ├── blog-popup.service.ts
│   │       │   │   │   ├── blog.component.html
│   │       │   │   │   ├── blog.component.ts
│   │       │   │   │   ├── blog.model.ts
│   │       │   │   │   ├── blog.module.ts
│   │       │   │   │   ├── blog.route.ts
│   │       │   │   │   ├── blog.service.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── claim
│   │       │   │   │   ├── claim-delete-dialog.component.html
│   │       │   │   │   ├── claim-delete-dialog.component.ts
│   │       │   │   │   ├── claim-detail.component.html
│   │       │   │   │   ├── claim-detail.component.ts
│   │       │   │   │   ├── claim-dialog.component.html
│   │       │   │   │   ├── claim-dialog.component.ts
│   │       │   │   │   ├── claim-popup.service.ts
│   │       │   │   │   ├── claim.component.html
│   │       │   │   │   ├── claim.component.ts
│   │       │   │   │   ├── claim.model.ts
│   │       │   │   │   ├── claim.module.ts
│   │       │   │   │   ├── claim.route.ts
│   │       │   │   │   ├── claim.service.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── claim-rebuttal
│   │       │   │   │   ├── claim-rebuttal-delete-dialog.component.html
│   │       │   │   │   ├── claim-rebuttal-delete-dialog.component.ts
│   │       │   │   │   ├── claim-rebuttal-detail.component.html
│   │       │   │   │   ├── claim-rebuttal-detail.component.ts
│   │       │   │   │   ├── claim-rebuttal-dialog.component.html
│   │       │   │   │   ├── claim-rebuttal-dialog.component.ts
│   │       │   │   │   ├── claim-rebuttal-popup.service.ts
│   │       │   │   │   ├── claim-rebuttal.component.html
│   │       │   │   │   ├── claim-rebuttal.component.ts
│   │       │   │   │   ├── claim-rebuttal.model.ts
│   │       │   │   │   ├── claim-rebuttal.module.ts
│   │       │   │   │   ├── claim-rebuttal.route.ts
│   │       │   │   │   ├── claim-rebuttal.service.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── contact
│   │       │   │   │   ├── contact-delete-dialog.component.html
│   │       │   │   │   ├── contact-delete-dialog.component.ts
│   │       │   │   │   ├── contact-detail.component.html
│   │       │   │   │   ├── contact-detail.component.ts
│   │       │   │   │   ├── contact-dialog.component.html
│   │       │   │   │   ├── contact-dialog.component.ts
│   │       │   │   │   ├── contact-popup.service.ts
│   │       │   │   │   ├── contact.component.html
│   │       │   │   │   ├── contact.component.ts
│   │       │   │   │   ├── contact.model.ts
│   │       │   │   │   ├── contact.module.ts
│   │       │   │   │   ├── contact.route.ts
│   │       │   │   │   ├── contact.service.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── crisis
│   │       │   │   │   ├── crisis-delete-dialog.component.html
│   │       │   │   │   ├── crisis-delete-dialog.component.ts
│   │       │   │   │   ├── crisis-detail.component.html
│   │       │   │   │   ├── crisis-detail.component.ts
│   │       │   │   │   ├── crisis-dialog.component.html
│   │       │   │   │   ├── crisis-dialog.component.ts
│   │       │   │   │   ├── crisis-popup.service.ts
│   │       │   │   │   ├── crisis.component.html
│   │       │   │   │   ├── crisis.component.ts
│   │       │   │   │   ├── crisis.model.ts
│   │       │   │   │   ├── crisis.module.ts
│   │       │   │   │   ├── crisis.route.ts
│   │       │   │   │   ├── crisis.service.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── entity.module.ts
│   │       │   │   ├── entry
│   │       │   │   │   ├── entry-delete-dialog.component.html
│   │       │   │   │   ├── entry-delete-dialog.component.ts
│   │       │   │   │   ├── entry-detail.component.html
│   │       │   │   │   ├── entry-detail.component.ts
│   │       │   │   │   ├── entry-dialog.component.html
│   │       │   │   │   ├── entry-dialog.component.ts
│   │       │   │   │   ├── entry-popup.service.ts
│   │       │   │   │   ├── entry.component.html
│   │       │   │   │   ├── entry.component.ts
│   │       │   │   │   ├── entry.model.ts
│   │       │   │   │   ├── entry.module.ts
│   │       │   │   │   ├── entry.route.ts
│   │       │   │   │   ├── entry.service.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── hero
│   │       │   │   │   ├── hero-delete-dialog.component.html
│   │       │   │   │   ├── hero-delete-dialog.component.ts
│   │       │   │   │   ├── hero-detail.component.html
│   │       │   │   │   ├── hero-detail.component.ts
│   │       │   │   │   ├── hero-dialog.component.html
│   │       │   │   │   ├── hero-dialog.component.ts
│   │       │   │   │   ├── hero-popup.service.ts
│   │       │   │   │   ├── hero.component.html
│   │       │   │   │   ├── hero.component.ts
│   │       │   │   │   ├── hero.model.ts
│   │       │   │   │   ├── hero.module.ts
│   │       │   │   │   ├── hero.route.ts
│   │       │   │   │   ├── hero.service.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── note
│   │       │   │   │   ├── index.ts
│   │       │   │   │   ├── note-delete-dialog.component.html
│   │       │   │   │   ├── note-delete-dialog.component.ts
│   │       │   │   │   ├── note-detail.component.html
│   │       │   │   │   ├── note-detail.component.ts
│   │       │   │   │   ├── note-dialog.component.html
│   │       │   │   │   ├── note-dialog.component.ts
│   │       │   │   │   ├── note-popup.service.ts
│   │       │   │   │   ├── note.component.html
│   │       │   │   │   ├── note.component.ts
│   │       │   │   │   ├── note.model.ts
│   │       │   │   │   ├── note.module.ts
│   │       │   │   │   ├── note.route.ts
│   │       │   │   │   └── note.service.ts
│   │       │   │   ├── rebuttal
│   │       │   │   │   ├── index.ts
│   │       │   │   │   ├── rebuttal-delete-dialog.component.html
│   │       │   │   │   ├── rebuttal-delete-dialog.component.ts
│   │       │   │   │   ├── rebuttal-detail.component.html
│   │       │   │   │   ├── rebuttal-detail.component.ts
│   │       │   │   │   ├── rebuttal-dialog.component.html
│   │       │   │   │   ├── rebuttal-dialog.component.ts
│   │       │   │   │   ├── rebuttal-popup.service.ts
│   │       │   │   │   ├── rebuttal.component.html
│   │       │   │   │   ├── rebuttal.component.ts
│   │       │   │   │   ├── rebuttal.model.ts
│   │       │   │   │   ├── rebuttal.module.ts
│   │       │   │   │   ├── rebuttal.route.ts
│   │       │   │   │   └── rebuttal.service.ts
│   │       │   │   └── tag
│   │       │   │       ├── index.ts
│   │       │   │       ├── tag-delete-dialog.component.html
│   │       │   │       ├── tag-delete-dialog.component.ts
│   │       │   │       ├── tag-detail.component.html
│   │       │   │       ├── tag-detail.component.ts
│   │       │   │       ├── tag-dialog.component.html
│   │       │   │       ├── tag-dialog.component.ts
│   │       │   │       ├── tag-popup.service.ts
│   │       │   │       ├── tag.component.html
│   │       │   │       ├── tag.component.ts
│   │       │   │       ├── tag.model.ts
│   │       │   │       ├── tag.module.ts
│   │       │   │       ├── tag.route.ts
│   │       │   │       └── tag.service.ts
│   │       │   ├── features
│   │       │   │   ├── bernie
│   │       │   │   │   ├── README.md
│   │       │   │   │   ├── bernie.module.ts
│   │       │   │   │   ├── bernie.page.html
│   │       │   │   │   ├── bernie.page.scss
│   │       │   │   │   ├── bernie.page.ts
│   │       │   │   │   ├── bernie.routing.ts
│   │       │   │   │   ├── claim
│   │       │   │   │   │   ├── claim.component.html
│   │       │   │   │   │   ├── claim.component.scss
│   │       │   │   │   │   └── claim.component.ts
│   │       │   │   │   └── rebuttal
│   │       │   │   │       ├── rebuttal.component.html
│   │       │   │   │       ├── rebuttal.component.scss
│   │       │   │   │       └── rebuttal.component.ts
│   │       │   │   ├── books
│   │       │   │   │   ├── README.md
│   │       │   │   │   ├── add-commas
│   │       │   │   │   │   └── add-commas.pipe.ts
│   │       │   │   │   ├── book-authors
│   │       │   │   │   │   └── book-authors.component.ts
│   │       │   │   │   ├── book-detail
│   │       │   │   │   │   └── book-detail.component.ts
│   │       │   │   │   ├── book-preview
│   │       │   │   │   │   ├── book-preview-list.component.ts
│   │       │   │   │   │   └── book-preview.component.ts
│   │       │   │   │   ├── book-search
│   │       │   │   │   │   └── book-search.component.ts
│   │       │   │   │   ├── books.module.ts
│   │       │   │   │   ├── books.routing.ts
│   │       │   │   │   ├── collection.page.spec.ts
│   │       │   │   │   ├── collection.page.ts
│   │       │   │   │   ├── ellipsis
│   │       │   │   │   │   ├── ellipsis.pipe.ts
│   │       │   │   │   │   └── ellipsis.spec.ts
│   │       │   │   │   ├── find-book.page.ts
│   │       │   │   │   ├── selected-book.page.ts
│   │       │   │   │   ├── services
│   │       │   │   │   │   ├── book-exists.guard.ts
│   │       │   │   │   │   └── google-books.service.ts
│   │       │   │   │   └── view-book.page.ts
│   │       │   │   ├── contact
│   │       │   │   │   ├── contact.module.ts
│   │       │   │   │   ├── contact.page.html
│   │       │   │   │   ├── contact.page.scss
│   │       │   │   │   ├── contact.page.ts
│   │       │   │   │   └── contact.routing.ts
│   │       │   │   ├── counter
│   │       │   │   │   ├── README.md
│   │       │   │   │   ├── counter.component.scss
│   │       │   │   │   ├── counter.component.ts
│   │       │   │   │   ├── counter.module.ts
│   │       │   │   │   ├── counter.page.ts
│   │       │   │   │   └── counter.routing.ts
│   │       │   │   ├── dashboard
│   │       │   │   │   ├── dashboard.component.html
│   │       │   │   │   ├── dashboard.component.ts
│   │       │   │   │   ├── dashboard.module.ts
│   │       │   │   │   ├── dashboard.routing.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── features.component.html
│   │       │   │   ├── features.component.scss
│   │       │   │   ├── features.component.ts
│   │       │   │   ├── features.module.ts
│   │       │   │   ├── features.routing.ts
│   │       │   │   ├── features.service.ts
│   │       │   │   ├── game
│   │       │   │   │   ├── assets
│   │       │   │   │   │   ├── cheater.gif
│   │       │   │   │   │   ├── main.css
│   │       │   │   │   │   └── svg
│   │       │   │   │   │       └── more.svg
│   │       │   │   │   ├── config
│   │       │   │   │   │   └── config.ts
│   │       │   │   │   ├── game.module.ts
│   │       │   │   │   ├── game.page.html
│   │       │   │   │   ├── game.page.ts
│   │       │   │   │   ├── game.routes.ts
│   │       │   │   │   ├── home
│   │       │   │   │   │   ├── home.component.html
│   │       │   │   │   │   └── home.component.ts
│   │       │   │   │   ├── multi-player
│   │       │   │   │   │   ├── actions
│   │       │   │   │   │   │   ├── action-creators
│   │       │   │   │   │   │   │   └── p2p-game.action-creators.ts
│   │       │   │   │   │   │   └── p2p-game.actions.ts
│   │       │   │   │   │   ├── commands
│   │       │   │   │   │   │   └── rpc.command.ts
│   │       │   │   │   │   ├── gateways
│   │       │   │   │   │   │   └── webrtc.gateway.ts
│   │       │   │   │   │   ├── multi-player.component.css
│   │       │   │   │   │   ├── multi-player.component.html
│   │       │   │   │   │   ├── multi-player.component.ts
│   │       │   │   │   │   ├── multi-player.module.ts
│   │       │   │   │   │   └── services
│   │       │   │   │   │       ├── command-builders
│   │       │   │   │   │       │   ├── game-p2p.command-builder.ts
│   │       │   │   │   │       │   └── game-p2p.commands.ts
│   │       │   │   │   │       ├── game-p2p.async-service.ts
│   │       │   │   │   │       └── index.ts
│   │       │   │   │   ├── navbar
│   │       │   │   │   │   ├── navbar.component.css
│   │       │   │   │   │   ├── navbar.component.html
│   │       │   │   │   │   └── navbar.component.ts
│   │       │   │   │   ├── services
│   │       │   │   │   │   └── game-server.async-service.ts
│   │       │   │   │   ├── shared
│   │       │   │   │   │   ├── game
│   │       │   │   │   │   │   └── game.component.ts
│   │       │   │   │   │   ├── shared.module.ts
│   │       │   │   │   │   └── timer
│   │       │   │   │   │       └── timer.component.ts
│   │       │   │   │   ├── single-player
│   │       │   │   │   │   ├── single-player.component.css
│   │       │   │   │   │   ├── single-player.component.html
│   │       │   │   │   │   ├── single-player.component.ts
│   │       │   │   │   │   └── single-player.module.ts
│   │       │   │   │   └── toolbar
│   │       │   │   │       ├── toolbar.component.css
│   │       │   │   │       ├── toolbar.component.html
│   │       │   │   │       └── toolbar.component.ts
│   │       │   │   ├── heroes
│   │       │   │   │   ├── admin
│   │       │   │   │   │   ├── admin-dashboard
│   │       │   │   │   │   │   └── admin-dashboard.component.ts
│   │       │   │   │   │   ├── admin.module.ts
│   │       │   │   │   │   ├── admin.page.scss
│   │       │   │   │   │   ├── admin.page.ts
│   │       │   │   │   │   └── admin.routing.ts
│   │       │   │   │   ├── crisis-center
│   │       │   │   │   │   ├── compose-message
│   │       │   │   │   │   │   ├── compose-message.component.html
│   │       │   │   │   │   │   └── compose-message.component.ts
│   │       │   │   │   │   ├── crisis-center-home
│   │       │   │   │   │   │   └── crisis-center-home.component.ts
│   │       │   │   │   │   ├── crisis-center.module.ts
│   │       │   │   │   │   ├── crisis-center.page.html
│   │       │   │   │   │   ├── crisis-center.page.scss
│   │       │   │   │   │   ├── crisis-center.page.ts
│   │       │   │   │   │   ├── crisis-center.routing.ts
│   │       │   │   │   │   ├── crisis-detail
│   │       │   │   │   │   │   ├── crisis-detail-resolver.service.ts
│   │       │   │   │   │   │   └── crisis-detail.component.ts
│   │       │   │   │   │   └── crisis-list
│   │       │   │   │   │       ├── crisis-list.component.scss
│   │       │   │   │   │       └── crisis-list.component.ts
│   │       │   │   │   ├── dashboard
│   │       │   │   │   │   ├── dashboard-crisis
│   │       │   │   │   │   │   ├── dashboard-crisis.component.html
│   │       │   │   │   │   │   ├── dashboard-crisis.component.scss
│   │       │   │   │   │   │   └── dashboard-crisis.component.ts
│   │       │   │   │   │   ├── dashboard-hero
│   │       │   │   │   │   │   ├── dashboard-hero.component.html
│   │       │   │   │   │   │   ├── dashboard-hero.component.scss
│   │       │   │   │   │   │   └── dashboard-hero.component.ts
│   │       │   │   │   │   ├── dashboard.component.html
│   │       │   │   │   │   ├── dashboard.component.scss
│   │       │   │   │   │   ├── dashboard.component.ts
│   │       │   │   │   │   ├── dashboard.module.ts
│   │       │   │   │   │   ├── dashboard.routing.ts
│   │       │   │   │   │   └── hero-search
│   │       │   │   │   │       ├── hero-search.component.html
│   │       │   │   │   │       ├── hero-search.component.scss
│   │       │   │   │   │       └── hero-search.component.ts
│   │       │   │   │   ├── hero
│   │       │   │   │   │   ├── hero-detail
│   │       │   │   │   │   │   ├── hero-detail.component.html
│   │       │   │   │   │   │   ├── hero-detail.component.no-testbed.spec.ts
│   │       │   │   │   │   │   ├── hero-detail.component.scss
│   │       │   │   │   │   │   ├── hero-detail.component.spec.ts
│   │       │   │   │   │   │   └── hero-detail.component.ts
│   │       │   │   │   │   ├── hero-list
│   │       │   │   │   │   │   ├── hero-list.component.html
│   │       │   │   │   │   │   ├── hero-list.component.scss
│   │       │   │   │   │   │   ├── hero-list.component.spec.ts
│   │       │   │   │   │   │   └── hero-list.component.ts
│   │       │   │   │   │   ├── hero.module.ts
│   │       │   │   │   │   └── hero.routing.ts
│   │       │   │   │   ├── heroes.module.ts
│   │       │   │   │   ├── heroes.page.html
│   │       │   │   │   ├── heroes.page.scss
│   │       │   │   │   ├── heroes.page.ts
│   │       │   │   │   └── heroes.routing.ts
│   │       │   │   ├── home
│   │       │   │   │   ├── home.component.html
│   │       │   │   │   └── home.component.ts
│   │       │   │   ├── index.ts
│   │       │   │   ├── messages
│   │       │   │   │   ├── index.ts
│   │       │   │   │   ├── messages.module.ts
│   │       │   │   │   ├── messages.page.html
│   │       │   │   │   ├── messages.page.ts
│   │       │   │   │   ├── messages.routing.ts
│   │       │   │   │   └── messages.service.ts
│   │       │   │   ├── meta.ts
│   │       │   │   ├── notes
│   │       │   │   │   ├── README.md
│   │       │   │   │   ├── add-button
│   │       │   │   │   │   ├── add-button.component.html
│   │       │   │   │   │   ├── add-button.component.scss
│   │       │   │   │   │   └── add-button.component.ts
│   │       │   │   │   ├── note
│   │       │   │   │   │   ├── note.component.html
│   │       │   │   │   │   ├── note.component.scss
│   │       │   │   │   │   └── note.component.ts
│   │       │   │   │   ├── notes.module.ts
│   │       │   │   │   ├── notes.page.html
│   │       │   │   │   ├── notes.page.scss
│   │       │   │   │   ├── notes.page.spec.ts
│   │       │   │   │   ├── notes.page.ts
│   │       │   │   │   └── notes.routing.ts
│   │       │   │   └── wiki
│   │       │   │       ├── wiki-smart.component.ts
│   │       │   │       ├── wiki.component.ts
│   │       │   │       ├── wiki.module.ts
│   │       │   │       ├── wiki.page.ts
│   │       │   │       ├── wiki.routing.ts
│   │       │   │       ├── wiki.scss
│   │       │   │       └── wikipedia.service.ts
│   │       │   ├── home
│   │       │   │   ├── home.component.html
│   │       │   │   ├── home.component.ts
│   │       │   │   ├── home.css
│   │       │   │   ├── home.module.ts
│   │       │   │   ├── home.route.ts
│   │       │   │   └── index.ts
│   │       │   ├── layouts
│   │       │   │   ├── error
│   │       │   │   │   ├── error.component.html
│   │       │   │   │   ├── error.component.ts
│   │       │   │   │   └── error.route.ts
│   │       │   │   ├── footer
│   │       │   │   │   ├── footer.component.html
│   │       │   │   │   └── footer.component.ts
│   │       │   │   ├── index.ts
│   │       │   │   ├── layout-routing.module.ts
│   │       │   │   ├── main
│   │       │   │   │   ├── main.component.html
│   │       │   │   │   └── main.component.ts
│   │       │   │   ├── navbar
│   │       │   │   │   ├── active-menu.directive.ts
│   │       │   │   │   ├── navbar.component.html
│   │       │   │   │   ├── navbar.component.ts
│   │       │   │   │   └── navbar.css
│   │       │   │   └── profiles
│   │       │   │       ├── page-ribbon.component.ts
│   │       │   │       ├── page-ribbon.css
│   │       │   │       ├── profile-info.model.ts
│   │       │   │       └── profile.service.ts
│   │       │   ├── polyfills.ts
│   │       │   ├── shared
│   │       │   │   ├── alert
│   │       │   │   │   ├── alert-error.component.ts
│   │       │   │   │   └── alert.component.ts
│   │       │   │   ├── animations.ts
│   │       │   │   ├── auth
│   │       │   │   │   ├── account.service.ts
│   │       │   │   │   ├── auth-jwt.service.ts
│   │       │   │   │   ├── auth.service.ts
│   │       │   │   │   ├── csrf.service.ts
│   │       │   │   │   ├── has-any-authority.directive.ts
│   │       │   │   │   ├── principal.service.ts
│   │       │   │   │   ├── state-storage.service.ts
│   │       │   │   │   └── user-route-access-service.ts
│   │       │   │   ├── awesome
│   │       │   │   │   └── awesome.pipe.ts
│   │       │   │   ├── button
│   │       │   │   │   ├── button.component.spec.ts
│   │       │   │   │   ├── button.component.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── can-deactivate
│   │       │   │   │   └── can-deactivate.guard.ts
│   │       │   │   ├── constants
│   │       │   │   │   └── pagination.constants.ts
│   │       │   │   ├── container
│   │       │   │   │   ├── container.component.spec.ts
│   │       │   │   │   └── container.component.ts
│   │       │   │   ├── dialog
│   │       │   │   │   └── dialog.service.ts
│   │       │   │   ├── draggable
│   │       │   │   │   └── draggable.directive.ts
│   │       │   │   ├── index.ts
│   │       │   │   ├── language
│   │       │   │   │   ├── language.constants.ts
│   │       │   │   │   ├── language.helper.ts
│   │       │   │   │   └── language.pipe.ts
│   │       │   │   ├── login
│   │       │   │   │   ├── login-modal.service.ts
│   │       │   │   │   ├── login.component.html
│   │       │   │   │   ├── login.component.ts
│   │       │   │   │   └── login.service.ts
│   │       │   │   ├── selective-preloading-strategy.ts
│   │       │   │   ├── services
│   │       │   │   │   ├── version.service.ts
│   │       │   │   │   └── window.service.ts
│   │       │   │   ├── shared-common.module.ts
│   │       │   │   ├── shared-libs.module.ts
│   │       │   │   ├── shared.module.ts
│   │       │   │   ├── social
│   │       │   │   │   ├── social.component.html
│   │       │   │   │   ├── social.component.ts
│   │       │   │   │   └── social.service.ts
│   │       │   │   ├── tracker
│   │       │   │   │   └── tracker.service.ts
│   │       │   │   ├── twain
│   │       │   │   │   ├── twain.component.spec.ts
│   │       │   │   │   ├── twain.component.ts
│   │       │   │   │   └── twain.service.ts
│   │       │   │   ├── user
│   │       │   │   │   ├── account.model.ts
│   │       │   │   │   ├── user.model.ts
│   │       │   │   │   └── user.service.ts
│   │       │   │   ├── welcome
│   │       │   │   │   ├── welcome.component.spec.ts
│   │       │   │   │   └── welcome.component.ts
│   │       │   │   └── widgets
│   │       │   │       ├── index.ts
│   │       │   │       └── todo
│   │       │   │           ├── index.ts
│   │       │   │           ├── todo.html
│   │       │   │           └── todo.ts
│   │       │   └── vendor.ts
│   │       ├── config
│   │       │   ├── config.common.ts
│   │       │   ├── config.dev.ts
│   │       │   ├── config.prod.ts
│   │       │   ├── config.ts
│   │       │   ├── empty.ts
│   │       │   ├── helpers.ts
│   │       │   ├── html-elements-plugin
│   │       │   │   └── index.ts
│   │       │   ├── html-head-config.ts
│   │       │   └── resource-override.ts
│   │       ├── content
│   │       │   ├── css
│   │       │   │   ├── documentation.css
│   │       │   │   ├── global.css
│   │       │   │   └── vendor.css
│   │       │   └── images
│   │       │       ├── hipster.png
│   │       │       ├── hipster2x.png
│   │       │       └── logo-jhipster.png
│   │       ├── favicon.ico
│   │       ├── i18n
│   │       │   ├── de
│   │       │   │   ├── activate.json
│   │       │   │   ├── audits.json
│   │       │   │   ├── bernie.json
│   │       │   │   ├── blog.json
│   │       │   │   ├── books.json
│   │       │   │   ├── claim.json
│   │       │   │   ├── claimRebuttal.json
│   │       │   │   ├── configuration.json
│   │       │   │   ├── contact.json
│   │       │   │   ├── crisis.json
│   │       │   │   ├── dashboard.json
│   │       │   │   ├── entry.json
│   │       │   │   ├── error.json
│   │       │   │   ├── game.json
│   │       │   │   ├── gateway.json
│   │       │   │   ├── global.json
│   │       │   │   ├── health.json
│   │       │   │   ├── hero.json
│   │       │   │   ├── heroes.json
│   │       │   │   ├── home.json
│   │       │   │   ├── login.json
│   │       │   │   ├── logs.json
│   │       │   │   ├── messages.json
│   │       │   │   ├── metrics.json
│   │       │   │   ├── note.json
│   │       │   │   ├── notes.json
│   │       │   │   ├── password.json
│   │       │   │   ├── rebuttal.json
│   │       │   │   ├── register.json
│   │       │   │   ├── reset.json
│   │       │   │   ├── sessions.json
│   │       │   │   ├── settings.json
│   │       │   │   ├── social.json
│   │       │   │   ├── tag.json
│   │       │   │   ├── tracker.json
│   │       │   │   ├── user-management.json
│   │       │   │   └── wiki.json
│   │       │   ├── en
│   │       │   │   ├── activate.json
│   │       │   │   ├── audits.json
│   │       │   │   ├── bernie.json
│   │       │   │   ├── blog.json
│   │       │   │   ├── books.json
│   │       │   │   ├── claim.json
│   │       │   │   ├── claimRebuttal.json
│   │       │   │   ├── configuration.json
│   │       │   │   ├── contact.json
│   │       │   │   ├── crisis.json
│   │       │   │   ├── dashboard.json
│   │       │   │   ├── entry.json
│   │       │   │   ├── error.json
│   │       │   │   ├── game.json
│   │       │   │   ├── gateway.json
│   │       │   │   ├── global.json
│   │       │   │   ├── health.json
│   │       │   │   ├── hero.json
│   │       │   │   ├── heroes.json
│   │       │   │   ├── home.json
│   │       │   │   ├── login.json
│   │       │   │   ├── logs.json
│   │       │   │   ├── messages.json
│   │       │   │   ├── metrics.json
│   │       │   │   ├── note.json
│   │       │   │   ├── notes.json
│   │       │   │   ├── password.json
│   │       │   │   ├── rebuttal.json
│   │       │   │   ├── register.json
│   │       │   │   ├── reset.json
│   │       │   │   ├── sessions.json
│   │       │   │   ├── settings.json
│   │       │   │   ├── social.json
│   │       │   │   ├── tag.json
│   │       │   │   ├── tracker.json
│   │       │   │   ├── user-management.json
│   │       │   │   └── wiki.json
│   │       │   ├── es
│   │       │   │   ├── activate.json
│   │       │   │   ├── audits.json
│   │       │   │   ├── bernie.json
│   │       │   │   ├── blog.json
│   │       │   │   ├── books.json
│   │       │   │   ├── claim.json
│   │       │   │   ├── claimRebuttal.json
│   │       │   │   ├── configuration.json
│   │       │   │   ├── contact.json
│   │       │   │   ├── crisis.json
│   │       │   │   ├── dashboard.json
│   │       │   │   ├── entry.json
│   │       │   │   ├── error.json
│   │       │   │   ├── game.json
│   │       │   │   ├── gateway.json
│   │       │   │   ├── global.json
│   │       │   │   ├── health.json
│   │       │   │   ├── hero.json
│   │       │   │   ├── heroes.json
│   │       │   │   ├── home.json
│   │       │   │   ├── login.json
│   │       │   │   ├── logs.json
│   │       │   │   ├── messages.json
│   │       │   │   ├── metrics.json
│   │       │   │   ├── note.json
│   │       │   │   ├── notes.json
│   │       │   │   ├── password.json
│   │       │   │   ├── rebuttal.json
│   │       │   │   ├── register.json
│   │       │   │   ├── reset.json
│   │       │   │   ├── sessions.json
│   │       │   │   ├── settings.json
│   │       │   │   ├── social.json
│   │       │   │   ├── tag.json
│   │       │   │   ├── tracker.json
│   │       │   │   ├── user-management.json
│   │       │   │   └── wiki.json
│   │       │   └── fr
│   │       │       ├── activate.json
│   │       │       ├── audits.json
│   │       │       ├── bernie.json
│   │       │       ├── blog.json
│   │       │       ├── books.json
│   │       │       ├── claim.json
│   │       │       ├── claimRebuttal.json
│   │       │       ├── configuration.json
│   │       │       ├── contact.json
│   │       │       ├── crisis.json
│   │       │       ├── dashboard.json
│   │       │       ├── entry.json
│   │       │       ├── error.json
│   │       │       ├── game.json
│   │       │       ├── gateway.json
│   │       │       ├── global.json
│   │       │       ├── health.json
│   │       │       ├── hero.json
│   │       │       ├── heroes.json
│   │       │       ├── home.json
│   │       │       ├── login.json
│   │       │       ├── logs.json
│   │       │       ├── messages.json
│   │       │       ├── metrics.json
│   │       │       ├── note.json
│   │       │       ├── notes.json
│   │       │       ├── password.json
│   │       │       ├── rebuttal.json
│   │       │       ├── register.json
│   │       │       ├── reset.json
│   │       │       ├── sessions.json
│   │       │       ├── settings.json
│   │       │       ├── social.json
│   │       │       ├── tag.json
│   │       │       ├── tracker.json
│   │       │       ├── user-management.json
│   │       │       └── wiki.json
│   │       ├── index.html
│   │       ├── robots.txt
│   │       └── swagger-ui
│   │           ├── images
│   │           │   └── throbber.gif
│   │           └── index.html
│   └── test
│       ├── gatling
│       │   ├── bodies
│       │   ├── conf
│       │   │   ├── gatling.conf
│       │   │   └── logback.xml
│       │   ├── data
│       │   └── simulations
│       │       ├── BlogGatlingTest.scala
│       │       ├── ClaimGatlingTest.scala
│       │       ├── ClaimRebuttalGatlingTest.scala
│       │       ├── ContactGatlingTest.scala
│       │       ├── CrisisGatlingTest.scala
│       │       ├── EntryGatlingTest.scala
│       │       ├── HeroGatlingTest.scala
│       │       ├── NoteGatlingTest.scala
│       │       ├── RebuttalGatlingTest.scala
│       │       └── TagGatlingTest.scala
│       ├── java
│       │   └── org
│       │       └── exampleapps
│       │           └── greatbig
│       │               ├── config
│       │               │   └── elasticsearch
│       │               │       └── IndexReinitializer.java
│       │               ├── repository
│       │               │   └── CustomSocialUsersConnectionRepositoryIntTest.java
│       │               ├── security
│       │               │   ├── SecurityUtilsUnitTest.java
│       │               │   └── jwt
│       │               │       └── TokenProviderTest.java
│       │               ├── service
│       │               │   ├── SocialServiceIntTest.java
│       │               │   └── UserServiceIntTest.java
│       │               └── web
│       │                   └── rest
│       │                       ├── AccountResourceIntTest.java
│       │                       ├── AuditResourceIntTest.java
│       │                       ├── BlogResourceIntTest.java
│       │                       ├── ClaimRebuttalResourceIntTest.java
│       │                       ├── ClaimResourceIntTest.java
│       │                       ├── ContactResourceIntTest.java
│       │                       ├── CrisisResourceIntTest.java
│       │                       ├── EntryResourceIntTest.java
│       │                       ├── HeroResourceIntTest.java
│       │                       ├── LogsResourceIntTest.java
│       │                       ├── NoteResourceIntTest.java
│       │                       ├── ProfileInfoResourceIntTest.java
│       │                       ├── RebuttalResourceIntTest.java
│       │                       ├── TagResourceIntTest.java
│       │                       ├── TestUtil.java
│       │                       └── UserResourceIntTest.java
│       ├── javascript
│       │   ├── e2e
│       │   │   ├── account
│       │   │   │   └── account.spec.ts
│       │   │   ├── admin
│       │   │   │   └── administration.spec.ts
│       │   │   └── entities
│       │   │       ├── blog.spec.ts
│       │   │       ├── claim-rebuttal.spec.ts
│       │   │       ├── claim.spec.ts
│       │   │       ├── contact.spec.ts
│       │   │       ├── crisis.spec.ts
│       │   │       ├── entry.spec.ts
│       │   │       ├── hero.spec.ts
│       │   │       ├── note.spec.ts
│       │   │       ├── rebuttal.spec.ts
│       │   │       └── tag.spec.ts
│       │   ├── karma.conf.js
│       │   ├── protractor.conf.js
│       │   └── spec
│       │       ├── app
│       │       │   ├── account
│       │       │   │   ├── activate
│       │       │   │   │   └── activate.component.spec.ts
│       │       │   │   ├── password
│       │       │   │   │   ├── password-strength-bar.component.spec.ts
│       │       │   │   │   └── password.component.spec.ts
│       │       │   │   ├── password-reset
│       │       │   │   │   ├── finish
│       │       │   │   │   │   └── password-reset-finish.component.spec.ts
│       │       │   │   │   └── init
│       │       │   │   │       └── password-reset-init.component.spec.ts
│       │       │   │   ├── register
│       │       │   │   │   └── register.component.spec.ts
│       │       │   │   └── settings
│       │       │   │       └── settings.component.spec.ts
│       │       │   ├── admin
│       │       │   │   ├── audits
│       │       │   │   │   └── audits.component.spec.ts
│       │       │   │   └── health
│       │       │   │       └── health.component.spec.ts
│       │       │   └── entities
│       │       │       ├── blog
│       │       │       │   └── blog-detail.component.spec.ts
│       │       │       ├── claim
│       │       │       │   └── claim-detail.component.spec.ts
│       │       │       ├── claim-rebuttal
│       │       │       │   └── claim-rebuttal-detail.component.spec.ts
│       │       │       ├── contact
│       │       │       │   └── contact-detail.component.spec.ts
│       │       │       ├── crisis
│       │       │       │   └── crisis-detail.component.spec.ts
│       │       │       ├── entry
│       │       │       │   └── entry-detail.component.spec.ts
│       │       │       ├── hero
│       │       │       │   └── hero-detail.component.spec.ts
│       │       │       ├── note
│       │       │       │   └── note-detail.component.spec.ts
│       │       │       ├── rebuttal
│       │       │       │   └── rebuttal-detail.component.spec.ts
│       │       │       └── tag
│       │       │           └── tag-detail.component.spec.ts
│       │       ├── entry.ts
│       │       ├── helpers
│       │       │   ├── mock-account.service.ts
│       │       │   ├── mock-language.service.ts
│       │       │   ├── mock-principal.service.ts
│       │       │   ├── mock-route.service.ts
│       │       │   ├── mock-tracker.service.ts
│       │       │   └── spyobject.ts
│       │       └── test.module.ts
│       └── resources
│           ├── config
│           │   └── application.yml
│           └── logback.xml
├── tree.txt
├── tsconfig-aot.json
├── tsconfig.json
├── tslint.json
├── webpack
│   ├── logo-jhipster.png
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   ├── webpack.prod.js
│   └── webpack.vendor.js
└── yarn.lock
```
