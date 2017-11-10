
[![Build Status](https://travis-ci.org/dancancro/great-big-example-application.svg?branch=master)](https://travis-ci.org/dancancro/great-big-example-application)
[![Dependency Status](https://david-dm.org/dancancro/great-big-example-application.svg)](https://david-dm.org/dancancro/great-big-example-application)
[![Join the chat at https://gitter.im/jhipster/generator-jhipster](https://badges.gitter.im/jhipster/generator-jhipster.svg)](https://gitter.im/jhipster/generator-jhipster?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)

## [Live Demo on Heroku](https://great-big-example-application.herokuapp.com/)
If this
doesn't work, it's probably because it exceeds Heroku's 500MB memory quota for the free tier.
Sorry about that. It does work locally.

# Background and Motivation

The main goal of this project is to make available source code for a state-of-the-art starter/model web
application the likes of which only exist as intellectual property visible exclusively to employed experts who
have signed non-disclosure agreements and can't let you see it or learn how they made everything work together.

> You should not have to get hired before learning how professionals actually do a thing

The other goal is to assemble enough functionality into one excellent, free example application that people
think twice before starting another one-feature, no edge-case, blog post example and exacerbating the already
overwhelming starting point option overload. Hopefully this will persuade a few people to direct
that energy instead into improving what already exists. Don't stop making blog posts. Just demonstrate the
concept with added features to this project rather than entirely separate projects with entirely hard to incorporate,
strictly aesthetic variations in architecture.

I'd love your help with improving this application. See the project's
[to do list](https://github.com/dancancro/great-big-example-application/projects/1) for opportunities to contribute.
I'm also looking for people who would like to go through the code and ask me questions. I'll then enter answers
as comments in the code.

# But why one great big app?

"There are already lots of little example apps" (written in all different styles).

"Software development has _always_ been taught using lots of inconsistent simple examples".

"Every real app is different" (so teaching with none of them is better than with any?).

"Big, commercial artifacts of the craft are too complex and overwhelming for students of web development"
(but not for those same students on the day after they become an employee? not for students of every
other line of work under the sun?).

"Approaches are a matter of personal preference and shouldn't be imposed" (on beginners who just want
to make something that totally works, don't want to waste time and get confused learning an approach that
the pros [don't actually use](https://gitter.im/angular/angular?at=596d4193f5b3458e3057ea73), and don't have
any preferences yet).

"If _all_ you want to do is be a code monkey then sure, study real examples, but _real_ computer
scientists are above that and only engage in abstract thought of conceptual, unreal demos" (and exposure
to code used to conduct real business is somehow a detriment to learning abstract concepts?).

"Technical writers employed at a company that produces one technology with customers who use many technologies must
remain neutral to the technologies used by customers for concerns in an application not met by that company's
products. That would be impossible to do in a big application in which all things are handled."

"Creators of many tutorials don't have time to implement all of them as parts of the same big example
(like what they have readily at hand because they do this every day for a living), so they need to
make each one from scratch by spending the time to simplify the approaches they use on the job."

"It could take as many as five or even six minutes to install all the packages for a big example."

"Bloated!!"

There's a strange resistance to using big, commercial-grade examples as the _primary_ instrument of education
for making big commercial-grade applications or even at all. Would you teach automotive engineering using
go-karts? Home construction using just windows? I don't understand the resistance, not even a little. As
ones and zeroes, expertise in this field is uniquely easily transferrable, yet for some reason it isn't.
The case seems pretty plain to me but to settle the matter, here are some reasons why web development should
be taught using big examples:

    1. Production-grade code answers every production-grade code question, not just what the authors of
    tutorials choose to answer through their choices of simplifications.

    2. To make something new as an expert would do it, it's much easier to copy and modify, or study and
    emulate, an exact thing made by experts, no matter how complex, than to synthesize the missing details
    removed for the sake of simplicity, out of nothing, no matter how simple. To do the latter requires
    full comprehension of a menagerie of inconsistent learning materials in inconsistent contexts, all but
    one of which approaches you will ultimately reject and count as wasted learn time. I did that to make
    this; it's not fun. To do the former you copy, find/replace, modify, and compare/revise what you're making
    with what works until what you're making also works. It's just what you'll do on the job to make
    something new *after* you have signed the NDA and get keys to the castle of doing things like
    professionals do and the vault of expertly made things to copy/modify, or study/emulate if you prefer.
    Then spend all that saved time instead solving problems that _haven't_ been solved already.

    3. If you want a job making commercial-grade code, you should study commercial-grade code,
    not tutorial-grade code. Perfect practice makes perfect.

    4. Each tutorial contains some parts related to the lesson and some ancillary parts that are there
    to make the example work. The ancillary parts will differ from tutorial to tutorial. So with each
    new tutorial you need to learn another take on these off-topic things in order to understand the
    lesson's subject matter. With a single, unified, big example used for all the lessons, you only need
    to learn these parts once and can then spend your thinking energy on the lessons.

    5. Tutorials show you how you *can* use a feature of the technology but often they
    do so in situations when in real life you would not do things that way. This can cost a lot of
    time. It's just as important to know when to use a technology's features as it is to know how.

    6. If you want to know how fast an app using a particular technology will build, run and test in
    your development environment before investing the time to learn it, then you need source code for
    a big app before you even write Hello World.

    7. If you want to know the complexity limits a technology will place on your app before you
    commit to using it, there's no better way than to see a complex example made with that technology.

    8. It's a whole lot easier to vet an idea or accept an approach others have taken when you have
    a complete application with all of its edge cases to show you what needs to be accommodated.
    By containing many edge cases, a big application will quickly answer the common learner's question:
    "Why isn't this done the simple way I think it should be done?", or "What if we tried X instead?"
    Without access to lots of edge cases in the beginning, you can go down the wrong road for a long time.

I've had a peculiarly difficult time making the case to software development educators to provide
a single, giant example app for their students akin to what they work on every day for their clients
and employers. I'm not sure why, but it can be pretty hard to find out exactly how the best in this business
do things. So here's this attempt at one from unemployed me. No NDA needed to see it.

# How did this great big app happen?

This application is being constructed by combining small open source demos into one big application. It's
basically the application that would have been had all the tutorial experts worked together instead of separately.
Coming from different demos, the features of the app are not related to each other and it won't make any sense
to have them together but the point is just to demonstrate how things should work technically, so that's okay.
I took these projects and integrated/restructured/restyled their code according to the following prioritization.
Disagreements in approach between two influences are resolved by the
lower authority yielding to the higher one:

1. [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html) by Google
2. [Tour of Heroes (ngModules, Routing, App Specs, HTTP, Server Communication versions)](https://github.com/dancancro/tour-of-heroes-versions) by Google
3. [Angular CLI](https://github.com/angular/angular-cli) by Google and the community
4. [Redux Docs](http://redux.js.org/) Redux.org
5. [JHipster Example - AoT](https://github.com/deepu105/ngtools-sample) by [@deepu105](https://github.com/deepu105)
6. [JHipster Example - Chat](https://github.com/ruddell/jhipster-chat-example) by [@ruddell](https://github.com/ruddell)
7. [Real World - Medium blog clone](https://github.com/gothinkster/angular-realworld-example-app) by [@EricSimons](https://github.com/EricSimons)
8. [ng2-admin - Admin App](https://github.com/akveo/ng2-admin) by [@nnxiaa](https://github.com/nnixaa) and community
9. [clean-to-the-core - Recipe book](https://github.com/adriancarriger/clean-to-the-core) by [@adriancarriger](https://github.com/adriancarriger)
10. [ngrx State Management - Rate/Watch talks](https://blog.nrwl.io/using-ngrx-4-to-manage-state-in-angular-applications-64e7a1f84b7b) by [@vsavkin](https://github.com/vsavkin)
11. [scalable-architecture-demo - P2P Typing Game](https://github.com/mgechev/scalable-architecture-demo) by [@mgechev](https://github.com/mgechev)
12. [ngrx example app - book collection](https://github.com/ngrx/platform/tree/master/example-app) by [@MikeRyan52](https://github.com/MikeRyan52) and [@brandonroberts](https://github.com/brandonroberts)
13. [ng2-state-talk - drag/editable notes](https://github.com/JavascriptMick/ng2-state-talk) by [@JavascriptMick](https://github.com/JavascriptMick)
14. [rangle-starter Angular 2 with TypeScript and Redux version - counter](https://www.npmjs.com/package/rangle-starter) by [@SethDavenport](https://github.com/SethDavenport)

In addition to the features from these demos, I added one of my own. I replaced

15. [this other project](http://www.bernierebuttals.org) which was made with JQuery and Google Scripts. The data is
contained in [this Google Sheet](https://docs.google.com/spreadsheets/d/1RdIhMdNCRJ-xtl6IgbT2SdChtLIYW8VXeloq7rR1lqY/edit#gid=50602236)
and served as JSON by a Google script.

A great big thank you to those who created the example demos from which I put together this amalgam.

### Home Screen
![Image](./docs/images/home.png?raw=true)
### Bernie Rebuttals
![Image](./docs/images/bernie-app.png?raw=true)
### Book Collection
![Image](./docs/images/collection.png?raw=true)
### Counter
![Image](./docs/images/counter.png?raw=true)
### Chat
![Image](./docs/images/chat.png?raw=true)
### Editable grid
![Image](./docs/images/messages.png?raw=true)
### Entities
![Image](./docs/images/entities.png?raw=true)
### Typing Speed Game
![Image](./docs/images/game.png?raw=true)
### Tour of Heroes Dashboard
![Image](./docs/images/heroes_dashboard.png?raw=true)
### Tour of Heroes List
![Image](./docs/images/heroes_list.png?raw=true)
### Tech Talks
![Image](./docs/images/talks.png?raw=true)
### Drag, Drop and Edit Notes
![Image](./docs/images/notes.png?raw=true)
### Dashboard
![Image](./docs/images/dashboard.png?raw=true)
### To Do List
![Image](./docs/images/todos.png?raw=true)
### Calendar
![Image](./docs/images/calendar.png?raw=true)
### Meals
![Image](./docs/images/meals.png?raw=true)
### Blog
![Image](./docs/images/blog.png?raw=true)


# My Innovations

While the goal of the project is to combine the wisdom of different experts, nobody can resist introducing improvements when there's
no obvious case against doing so. So you will see a couple of practices in this project that came from my head rather than the sources
of expertise from which the project was assembled. If you can think of reasons not to do these things, please let me know.

1. I put the Redux store reducers in `app/core/store` separate from the feature directories located under `app` and did not make folders
for `reducers`, `actions`, and `effects`. There is a many-to-many relationship between Redux store slices and features. So putting the Redux
code for a given slice into the same directory as one of the features that uses it doesn't make sense. How do you decide which feature gets it?

2. As much as practical the names of files in a directory begin with the directory name. I did this to prevent directories from having a mixture of
unrelated concerns. If a directory in a source demo had files for two different things, I created more directories. I thought about
removing that part of the file name, `src/app/features/counter.page.ts` -> `src/app/features/counter/page.ts`, for the sake of DRY, but
that makes it too confusing when you are working on multiple files with the same names and different directories.

3. I noticed a lot of duplication and boilerplate of identical CRUD code for each of my types of entities. So I made utility functions and
the related actions and models for each of three types of store slice - [entities](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/core/store/entity), [id lists](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/core/store/id), and [slices](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/core/store/slice) (everything else). This is
the biggest deal in this list. It standardizes how things are treated so you don't have to solve common problems that have already
been solved. It's all optional too so you can pick and choose which parts of your state use the structure, type safety and utilities of each
standard kind of state or not use any of them.

4. I came up with a mini lexicon of file types to keep file names shorter and more expressive. A "page" is understood to be a smart `@Component`
class that fills the page and might have a router-outlet and route configurations. A "guard" is understood to be an `@Injectable` "service" class that
returns a boolean. A "routing" is a `@NgModule` class that contains route configurations. So I memorize this simple lexicon, and drop the
redundant, less-clear words from the names. For example, I use the name `counter.page.ts` rather than `counter.component.ts` or `counter-page.component.ts`.
I use `auth.guard.ts` instead of `auth-guard.service.ts`. I use `books.routing.ts` instead of `books-routing.module.ts`.

| A | is a class decorated with | that | Example file name | Example class name |
|:--- | :--- | :--- | :--- | :--- |
| page | @Component | more or less fills the screen - a "smart" component that gets data from something other than `@Input`s and dispatches actions to change state | counter.page.ts | CounterPage |
| component | @Component | has to be contained by a page or other components - a "dumb" component that only gets data from `@Input`s | login.component.ts | LoginComponent |
| guard | @Injectable | returns a boolean and [does whatever an Angular guard does](https://angular.io/docs/ts/latest/guide/router.html#!#guards) | auth.guard.ts | AuthGuard |
| service | @Injectable | provides a service or data | auth.service.ts | AuthService |
| routing | @NgModule | contains route configurations | books.routing.ts | BooksRouting |
| module | @NgModule | associates related components and providers | books.module.ts | BooksModule |

That's it. It shouldn't be too hard to remember these, and in return you will have consistent, short, expressive file names.


# Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.
   Be sure to use an [LTS version of node](https://github.com/nodejs/LTS) nvm is handy for managing different
   versions of node. Remember that every time you change node versions, you need to reinstall your global packages.
2. [Yarn][]: We use Yarn to manage Node dependencies.
   Depending on your system, you can install Yarn either from source or as a pre-packaged bundle.

We use yarn scripts and [Webpack][] as our build system.

### Download this project

    cd parent/directory/of/the/new/project/directory
    git clone https://github.com/dancancro/great-big-example-application.git
    cd great-big-example-application

### Install packages

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

    yarn install


### Run the app

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

1. back end server

    ./mvnw

2. front end server

    yarn start

[Yarn][] is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `yarn update` and `yarn install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `yarn help update`.

The `yarn run` command will list all of the scripts available to run for this project.

### Debugging info

You can get state information during development in a couple of ways. You can either have it log each state change to the console
or enable the Redux dev tools. Logging is enabled in `src/main/webapp/app/core/store/index.ts`. Last I checked Redux dev tools has
a pretty big performance penalty so it's turned off. To turn it on edit the part about StoreDevtoolsModule in `app.module.ts`.

## More Settings you'll need to set

|File|Setting|Source|
|:-- |:-- |:-- |
| src/main/resources/config/application.yml | spring.social.google.client-id | [instructions](https://jhipster.github.io/tips/012_tip_add_new_spring_social_connector.html) |
| | spring.social.google.client-secret | [instructions](https://jhipster.github.io/tips/012_tip_add_new_spring_social_connector.html) |
| | spring.social.facebook.client-id | [instructions](https://jhipster.github.io/tips/012_tip_add_new_spring_social_connector.html) |
| | spring.social.facebook.client-secret | [instructions](https://jhipster.github.io/tips/012_tip_add_new_spring_social_connector.html) |
| | spring.social.twitter.client-id | [instructions](https://jhipster.github.io/tips/012_tip_add_new_spring_social_connector.html) |
| | spring.social.twitter.client-secret | [instructions](https://jhipster.github.io/tips/012_tip_add_new_spring_social_connector.html) |
| src/main/resources/config/application-prod.yml | spring.data.elasticsearch.cluster-name | [instructions](https://jhipster.github.io/using-elasticsearch/)|
| | spring.data.elasticsearch.cluster-nodes | [instructions](https://jhipster.github.io/using-elasticsearch/)|
| src/main/resources/config/application-prod.yml | spring.datasource.username | your postgresql username |
| | spring.datasource.password | your postgresql password |

### Managing dependencies

For example, to add [Leaflet][] library as a runtime dependency of your application, you would run the following command:

    yarn add --exact leaflet

To benefit from TypeScript type definitions from [DefinitelyTyped][] repository in development, you would run the following command:

    yarn add --dev --exact @types/leaflet

Then you would import the JS and SCSS files specified in library's installation instructions so that [Webpack][] knows about them:

Edit [src/main/webapp/app/vendor.ts](src/main/webapp/app/vendor.ts) file:
~~~
import 'leaflet/dist/leaflet.js';
~~~

Edit [src/main/webapp/content/scss/vendor.scss](src/main/webapp/content/scss/vendor.scss) file:
~~~
@import '~leaflet/dist/leaflet';
~~~

Note: there is still a few other things remaining to do for Leaflet that we won't detail here.

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

This app is setup to use Postgresql for production data storage. I always have a terrible time setting up PostgreSQL.
Should I use the postgresql.org download? the EnterpriseDB download? the homebrew version? Isn't there a version
that comes with OSX? If you make a mistake and have to uninstall, which of many different uninstall instructions
should you use? It's confusing. So I'm not going to put instructions here because they probably won't work for you.

Somehow set up a server on localhost:5432 with a database named "GreatBigExampleApplication" owned by a user named "GreatBigExampleUser"
with password "password". If you use other values, just edit `src/main/resources/config/application-prod.yml` accordingly.

Then run:

    ./mvnw -Pprod clean package

or

    ./mvnw package -Pprod -DskipTests

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run the following. Unlike dev, this will be one server for both the front and back.

    java -jar target/*.war

This will create the database tables the first time and execute liquibase changes as you add them.

To see the app navigate to [http://localhost:8090](http://localhost:8090) in your browser.

Refer to [Using JHipster in production][] for more details.

To inspect the bundle use [source-map-explorer](https://angular.io/guide/aot-compiler#inspect-the-bundle)

## Server tests

To launch your backend, java tests, run:

    ./mvnw clean test

### Client tests

Unit tests are run by [Karma][] and written with [Jasmine][]. They can be run with:

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
[JHipster 4.4.1 archive]: https://jhipster.github.io/documentation-archive/v4.4.1

[Using JHipster in development]: https://jhipster.github.io/documentation-archive/v4.4.1/development/
[Using Docker and Docker-Compose]: https://jhipster.github.io/documentation-archive/v4.4.1/docker-compose
[Using JHipster in production]: https://jhipster.github.io/documentation-archive/v4.4.1/production/
[Running tests page]: https://jhipster.github.io/documentation-archive/v4.4.1/running-tests/
[Setting up Continuous Integration]: https://jhipster.github.io/documentation-archive/v4.4.1/setting-up-ci/

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

## Deploy to Heroku

Since this is a big app, you need to tweak the jhipster stdout buffer size or it won't work. Edit
file `node_modules/generator-jhipster/generator-base.js` by increasing to 2000 the buffer size.
This has been fixed in a newer version of jhipster.

    child.stdout = exec(buildCmd, { maxBuffer: 1024 * 500 }, cb).stdout;

Then run the following. This will use the jhipster in your project's node_modules directory.

    yo jhipster:heroku

For subsequent deployments to Heroku, re-build and test the app in production mode with the commands above

    ./mvnw package -Pprod -DskipTests

or

    ./mvnw package -Pprod clean package

then

    java -jar target/*.war

Then run

    heroku deploy:jar --jar target/*.war

to upload the new build.


If you get stuck on anything, no matter how little, please create an issue and let me know. I know how the
little things are what cause the problems and I don't want you to have any problems.

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

## 3) For Notes, why do you generate IDs on the client side, not the server side?

This makes it possible to have the application work offline. It also lets your objects have some persisted attributes and some transient, UI attributes without it affecting the
api code. The way this works is that the UI lets you display things before they have been persisted to the server. Then a request to persist happens. The request only sends persistent
attributes because the api is ignorant of the user interface. When the response comes back you can find the original object by its previously established ID and handle it accordingly.
If successful, you'd likely do nothing that the user sees. However, if you hadn't given it an ID, it would be discarded and recreated from the object in the response. This response
object would not have all the transient attributes of the object in the request. So, for example, if its location on the screen were a transient attribute, then the user would see it
jump to a default location since the former location would be lost. [Here](https://youtu.be/LEgpsROSfWM?t=1778) is another argument for using UUIDs: It allows you to create hashcodes
of entities that don't change after the entity is saved and given an ID by the database. You create hashcodes of entities in order to have an equals() method.

## 4) Why is it necessary to copy objects before posting to the server?

In the [convert](https://github.com/jhipster/generator-jhipster/blob/master/generators/entity/templates/client/angular/src/main/webapp/app/entities/_entity.service.ts#L138) method, when there are date fields (Instant, ZonedDateTime, LocalDate), it's necessary to convert the date to the sever format. If you use the original entity object, the values displayed in the form also change (fields appear empty and validation triggers). By copying the object, the changes to date fields only affect the object sent to the server

Any other questions?  Just ask.

# Demonstrations, Features and Selling Points

| **Developer Experience** |[great big example application](https://github.com/dancancro/great-big-example-application)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|[feathers-starter-react-redux-login-roles](https://github.com/eddyystop/feathers-starter-react-redux-login-roles)|[angular-webpack2-starter](https://github.com/qdouble/angular-webpack2-starter)|
|:------ | :------: | :------: | :------: | :------: | :------: |
[Ambitransportous (?)](https://feathersjs.slack.com/archives/C08QQ5YDA/p1493408741695918?thread_ts=1493406956.232620&cid=C08QQ5YDA "Use one API for both REST and WebSocket communication")| | | |[UNIQUE.](https://feathersjs.slack.com/archives/C08QQ5YDA/p1493408741695918?thread_ts=1493406956.232620&cid=C08QQ5YDA "Feathers.js")| |
[API introspection report and testing interface (?)](https://helloreverb.com/developers/swagger "The system displays a report of all possible API routes and provides a simple UI to test them")|[UNIQUE.](https://helloreverb.com/developers/swagger "JHipster, Swagger")| | | | |
[API Proxy](https://github.com/dancancro/great-big-example-application/blob/master/webpack/webpack.dev.js#L20-L28 "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/webpack/webpack.dev.js#L20-L28)| | | | |
[Approach to data readiness, Uses a waiting image/spinner/progressbar (?)](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/theme/services/ba-theme-spinner "Put a \"ready\" variable in your controller initialized to false.  In the callback, set it to true.    Listen to the '$stateChangeStart' and '$stateChangeSuccess' to display a loading element/screen.    In your template, put ng-show=ready into any element that should wait  ")|[X](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/theme/services/ba-theme-spinner)|[X.](http:// "Angular Material")| | |[X.](http:// "Angular Material")|
[Authentication](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/store/session/session.effects.ts#L26 "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/store/session/session.effects.ts#L26)|[X](https://github.com/born2net/Angular-kitchen-sink/blob/7260a89a3f968243e642b20c9fd6775ba59eaf41/src/services/DefaultAuthService.ts)| |[X.](https://docs.feathersjs.com/why/vs/readme.html "Feathers.js, Passport")| |
[Authentication, social sign-in](https://github.com/jhipster/generator-jhipster/pull/2155 "")|[UNIQUE.](https://github.com/jhipster/generator-jhipster/pull/2155 "JHipster")| | | | |
[Authentication, with two-factor authentication](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/actions/SampleActions.js#L22 "")| |[UNIQUE](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/actions/SampleActions.js#L22)| | | |
[Can run on a desktop without a browser](http://electron.atom.io/ "")| | |[UNIQUE.](http://electron.atom.io/ "Electron")| | |
[Client-side dependency injection](http://blog.durandal.io/2015/05/20/porting-an-angular-2-0-app-to-aurelia/#comment-2036675441 "")|[X.](http://blog.durandal.io/2015/05/20/porting-an-angular-2-0-app-to-aurelia/#comment-2036675441 "Angular, Spring MVC, Java 7")|[X.](http:// "AngularJS 1.4")|[X.](http://blog.durandal.io/2015/05/20/porting-an-angular-2-0-app-to-aurelia/#comment-2036675441 "Angular")| |[X.](http://blog.durandal.io/2015/05/20/porting-an-angular-2-0-app-to-aurelia/#comment-2036675441 "Angular")|
[Client-side performance monitoring & instrumentation (?)](https://github.com/dancancro/jhipster-sample-app-ng2/tree/newmodules/src/main/webapp/app/admin/audits "User interface for displaying performance metrics")|[UNIQUE](https://github.com/dancancro/jhipster-sample-app-ng2/tree/newmodules/src/main/webapp/app/admin/audits)| | | | |
[Client-side routing, State-based routing (?)](http://www.funnyant.com/angularjs-ui-router/ "URL becomes simply a property of the state")|[X.](https://www.youtube.com/watch?v=z1NB-HG0ZH4 "Angular, JHipster")| |[X.](https://www.youtube.com/watch?v=z1NB-HG0ZH4 "Angular")| |[X.](https://www.youtube.com/watch?v=z1NB-HG0ZH4 "Angular")|
[Client-side unit tests](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/features/bernie/claim/claim.component.spec.ts "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/features/bernie/claim/claim.component.spec.ts)|[X](https://github.com/born2net/Angular-kitchen-sink/blob/132ddece2635d13e983ce873742ba962fc5c7fce/src/app/app.component.spec.ts)|[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/components/app.component.spec.ts)| |[X](https://github.com/qdouble/angular-webpack2-starter/blob/master/src/app/app.component.spec.ts)|
[Clustered HTTP sessions](https://github.com/jhipster/generator-jhipster/blob/77959745c961c3997a01d11ae64ba7633cec496a/generators/server/templates/src/main/java/package/config/_GatewayConfiguration.java#L58 "")|[UNIQUE.](https://github.com/jhipster/generator-jhipster/blob/77959745c961c3997a01d11ae64ba7633cec496a/generators/server/templates/src/main/java/package/config/_GatewayConfiguration.java#L58 "JHipster")| | | | |
[Code coverage reporting (?)](http://blog.johnryding.com/post/46757192364/javascript-code-coverage-with-phantomjs-jasmine-and "Generate reports that tell you how much of your code is being tested")|[X.](http://mochajs.org/ "Mocha, karma-coverage, Istanbul")| | |[X.](http://mochajs.org/ "Istanbul, Mocha")| |
[Command line interface (CLI)](https://github.com/angular/angular-cli "")|[X.](https://github.com/angular/angular-cli "angular-cli, Spring MVC, Yeoman")|[X.](http:// "Yeoman")| |[X.](https://github.com/facebookincubator/create-react-app "React")| |
[Command line interface (CLI), can do database migration/evolution (?)](https://github.com/meanjs/mean/issues/52 "Every schema change is saved as well as its reversal.  So it's easy to keep your schema in order    Plugins:  Modyllic in PHP  https://github.com/OnlineBuddies/Modyllic")|[UNIQUE.](http://www.liquibase.org/ "Liquibase")| | | | |
[Compiled, supports ahead of time (AOT) compilation](https://github.com/dancancro/great-big-example-application/blob/master/webpack/webpack.prod.js "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/webpack/webpack.prod.js)| |[X.](https://github.com/mgechev/angular-seed/blob/18a6e44da97d2734d7e81377df49e52ac70d2354/tools/tasks/seed/build.js.prod.aot.ts "mgechev's angular-seed")| |[X](https://github.com/qdouble/angular-webpack2-starter/blob/5a8acbf6592dd634b571e2b1259f8255386fe86d/tsconfig.aot.json)|
[Components communicate with events](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/debate/debate.page.html#L9 "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/debate/debate.page.html#L9)|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app3/starwars/components/films-component.ts#L11)| | | |
[Core Module (client-side)](https://angular.io/guide/ngmodule-faq#coremodule "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/core/core.module.ts)| |[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/shared/core/core.module.ts)| | |
[Data binding & change detection/tracking, dirty checks (bad), no getters/setters (good)](http://www.fullstackradio.com/30 "")| |[UNIQUE.](http:// "AngularJS 1.3")| | | |
[Database connection pooling](https://github.com/jhipster/generator-jhipster/pull/2295/commits/6e8c66fc6a4c3832c5263090d80a485ca933750f "")|[UNIQUE.](https://github.com/jhipster/generator-jhipster/pull/2295/commits/6e8c66fc6a4c3832c5263090d80a485ca933750f "JHipster")| | | | |
[Deployment automation, to a mobile native executable](https://github.com/NathanWalker/angular-seed-advanced#electron-app "")| | |[UNIQUE](https://github.com/NathanWalker/angular-seed-advanced#electron-app)| | |
[Deployment automation, using Docker (?)](https://www.docker.io/ "This is for making the app lightweight, portable and self sufficient so you can run it anywhere")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/docker)| |[X](https://github.com/NathanWalker/angular-seed-advanced/blob/master/docker-compose.production.yml)| | |
[Deployment automation, using Heroku (?)](http://great-big-example-application.herokuapp.com "Generates a dist folder that is deployment ready for heroku.com    Heroku is an interface to Amazon's US East EC2 region")|[UNIQUE](http://great-big-example-application.herokuapp.com)| | | | |
[End-to-end tests (?)](https://github.com/dancancro/great-big-example-application/blob/master/src/test/javascript/e2e "end-to-end tests    Protractor is recommended over karma e2e.  See http://karma-runner.github.io/0.10/intro/faq.html    Protractor \"runs atop\" WebDriver which \"runs atop\" Selenium")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/test/javascript/e2e)|[X](https://github.com/born2net/Angular-kitchen-sink/tree/master/e2e)|[X](https://github.com/NathanWalker/angular-seed-advanced/tree/master/src/e2e)| |[X](https://github.com/qdouble/angular-webpack2-starter/blob/master/e2e/app.e2e.ts)|
[FEATURE (a.k.a. module, entity) generator (?)](https://github.com/DaftMonk/generator-angular-fullstack/issues/524 "The whole nine yards for a feature - view, business layer, routing, configuration, controller")|[UNIQUE.](http:// "JHipster")| | | | |
[Graphical schema editing](https://jhipster.github.io/jdl-studio/ "")|[UNIQUE.](https://jhipster.github.io/jdl-studio/ "JDL Studio")| | | | |
[Hot Module Replacement (?)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/core.module.ts#L95 "After a code change the page will reload and put you in the same place you were in before without losing state.")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/core.module.ts#L95)| | | |[X](https://github.com/qdouble/angular-webpack2-starter/blob/498dc04957011e71bd1d0cd3c9eab36bc848349e/package.json#L14)|
In-memory server-side database|[UNIQUE.](http:// "H2")| | | | |
[Instrumentation, Metrics, server-side (?)](http://mean.io/network#features-menu "New Relic is one way to do this    AngularJS 2.0 will add instrumentation")|[UNIQUE.](http:// "JHipster")| | | | |
[Lazy (on-demand) loading of client-side code (?)](http://blog.durandal.io/2015/05/20/porting-an-angular-2-0-app-to-aurelia/#comment-2036657491 "Client side code is loaded only as soon as it is needed by the user    However, it can very quickly grow into vast amounts of requests made in a hard-to-predict manner and the latency, especially on 3G (which has very long latencies), will very quickly eat up the hypothetical performance gains")|[X.](http://angularjs.blogspot.com/2015/08/angular-1-and-angular-2-coexistence.html "Angular, Spring MVC")| |[X.](http://angularjs.blogspot.com/2015/08/angular-1-and-angular-2-coexistence.html "Angular")| |[X.](http://angularjs.blogspot.com/2015/08/angular-1-and-angular-2-coexistence.html "Angular")|
[Local storage](https://github.com/dancancro/great-big-angular2-example/blob/e29a656b8f923ad9fb5867288f4628674994b697/src/app/core/store/index.ts#L123 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/e29a656b8f923ad9fb5867288f4628674994b697/src/app/core/store/index.ts#L123)|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/services/LocalStorage.ts)| |[X](https://github.com/eddyystop/feathers-starter-react-redux-login-roles/blob/1c264df9e4c11313fd9237ba1cecb65454c41f3b/client/index.js#L31)| |
[Microservice generator](https://jhipster.github.io/2016/03/23/jhipster-release-3.0.0.html "")|[UNIQUE.](https://jhipster.github.io/2016/03/23/jhipster-release-3.0.0.html "JHipster")| | | | |
[Modularized, route-specific CSS](https://github.com/cgross/generator-cg-angular/issues/113 "")|[X.](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#!#style-sheets "Angular")| |[X.](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#!#style-sheets "Angular")| |[X.](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#!#style-sheets "Angular")|
[No pluralization (?)](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/core/store "This is one of very few items in this list that could be considered a plus or a minus.  I personally don't like pluralization for these reasons:    1) Names mapped to Hibernate entities should not be plural    2) Plurals are always annoying, with words like \"children\".      3) If you want to make a utility that operates on entities generically, pluralization gives you one more thing to worry about")|[UNIQUE](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/core/store)| | | | |
[Object-relational mapping (?)](http://hibernate.org/orm/what-is-an-orm/ "A system for managing the difference between data that is stored in rows but used as objects.  This only applies to SQL databases, not NoSQL databases.    Examples:  ActiveRecord for Rails  Hibernate for Java")|[X.](http:// "JHipster")| | |[X.](https://docs.feathersjs.com/why/vs/readme.html "Feathers.js")| |
[Persistent, server-side data storage (?)](http://hammerprinciple.com/databases "See link for a good explanation of NoSQL options and solutions to normalization issues")|[X.](https://jhipster.github.io/2016/12/08/jhipster-release-3.12.1.html "MongoDB, Postgresql")| |[X](http://expressjs.com/guide/database-integration.html)|[X](http://expressjs.com/guide/database-integration.html)|[X](http://expressjs.com/guide/database-integration.html)|
[Preloads client-side data (?)](http://angularclass.com/angularconnect-2015-a-highlights-tour/ "Client-side JS application and initial data arrive at the browser together in a single http request    Traditionally, the Javascript arrives first, it loads in the browser and then makes API calls to get the first data as it normally does while being used")|[X.](http://angularclass.com/angularconnect-2015-a-highlights-tour/ "Angular")| |[X.](http://angularclass.com/angularconnect-2015-a-highlights-tour/ "Angular")| |[X.](http://angularclass.com/angularconnect-2015-a-highlights-tour/ "Angular")|
[Production build, generate docs (?)](https://github.com/yeoman/yeoman/issues/152 "By reading comments in your code or maintaining separate docs:  https://github.com/millermedeiros/mdoc    examples:  ngDoc  YUIdoc")| | |[UNIQUE.](http://typedoc.org/ "typedoc")| | |
[Production build, safe pre-minification (?)](https://medium.com/@MikeRyan52/angular-2-first-app-post-mortem-b2b2b3618828#.xik5mk7bd "uses grunt-ngmin or ng-annotate or gulp ng-gulp-annotate.so you don't have to use the Angular injection syntax for safe minification (i.e. you dont need $inject or (\['$scope','$http',....    ngmin does not produce minsafe code for things that are not main level elements like controller, services, providers, etc.      ng-annotate is an improvement/alternative to ng-min.  ng-min is deprecated    ng-annotate no longer requires that the following comment be written before each service declaration:    /**   * @ngInject   */")|[X.](https://medium.com/@MikeRyan52/angular-2-first-app-post-mortem-b2b2b3618828#.xik5mk7bd "Angular, ng-annotate")|[X.](https://github.com/aaronallport/generator-angular-require#what-happened-to-the-minification-safe-option "ng-annotate")|[X.](https://medium.com/@MikeRyan52/angular-2-first-app-post-mortem-b2b2b3618828#.xik5mk7bd "Angular")| |[X.](https://medium.com/@MikeRyan52/angular-2-first-app-post-mortem-b2b2b3618828#.xik5mk7bd "Angular")|
[Renders markup on the server (universal) (?)](https://github.com/qdouble/angular-webpack2-starter/tree/bootstrap-and-universal "With a single-page app, the final markup used by browser to display what a user sees is produced on the client side by javascript that runs on the client-side.  Server-side rendering does this on the server-side and sends the output to the client browser which renders it without running any javascript.")| | | | |[UNIQUE](https://github.com/qdouble/angular-webpack2-starter/tree/bootstrap-and-universal)|
[Save generator project settings for automated re-run](http://yeoman.io/authoring/storage.html "")|[X.](http://yeoman.io/authoring/storage.html "Yeoman")|[X.](http:// "generator -angular -require")| | | |
[Separate route configuration files for each module](https://medium.com/@iDuuck/more-structured-organisation-of-routes-in-angular-js-a348c31c2063 "")|[X](https://github.com/dancancro/great-big-angular2-example/blob/master/src/main/webapp/app/features/bernie/bernie.routing.ts)|[X.](http:// "generator -angular -require")| | | |
[Separation of smart containers and dumb components (?)](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.vkyyo356c "Such components typically do the following things: subscribe to data, fetch data from those subscriptions, and fetch global client-side state from stores.  Ideally, once a smart component has assembled such a set of data, it passes it off to a reusable component child to render with. Smart components usually don’t render anything apart from one or more reusable children. This makes it easy to separate rendering and data loading in your tests.")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/features/bernie/bernie.page.ts)| | | | |
[Server-side integration & unit tests](http://www.letscodejavascript.com/v3/episodes/live/1 "")|[X.](http:// "Mocha, JUnit, Mockito")| | |[X.](http:// "Mocha")| |
[Shared client and server universal/isomorphic code](http://angularclass.com/angularconnect-2015-a-highlights-tour/ "")|[X.](http://angularclass.com/angularconnect-2015-a-highlights-tour/ "Angular")| |[X.](http://angularclass.com/angularconnect-2015-a-highlights-tour/ "Angular")|[X.](https://feathersjs.slack.com/archives/C08QQ5YDA/p1493417885690773?thread_ts=1493406956.232620&cid=C08QQ5YDA "Feathers.js")|[X.](http://angularclass.com/angularconnect-2015-a-highlights-tour/ "Angular")|
[Shared Module (client side)](https://angular.io/guide/styleguide#core-feature-module "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/shared/shared.module.ts)|[X](https://github.com/born2net/Angular-kitchen-sink/blob/8cc88024f22156f397f2aa95dc142460f720f50f/src/comps/app1/lazyone/SharedModule.ts)| | | |
[Single source of truth, central state management (?)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/store/entity "only one piece of the application flow is tasked with mutating state data")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/store/entity)| |[X.](http:// "ngrx")|[X.](http:// "Redux")|[X.](http:// "ngrx")|
[Single source of truth, central state management, Server, Persistent, URL, (Transient) Client, Local UI](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/features/talks "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/features/talks)| | | | |
[Single source of truth, central state management, without lots of boilerplate (?)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/store/entity "Usually with Redux implementations your app will have lots of similar code in action, reducer and effect files for each slice of the store.    To avoid this, takes imposing some conventions and creating utility functions.")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/store/entity)| | | | |
[State inspection tools](https://github.com/zalmoxisus/redux-devtools-extension "")|[X.](https://github.com/zalmoxisus/redux-devtools-extension "redux-devtools")| |[X.](https://github.com/zalmoxisus/redux-devtools-extension "redux-devtools")|[X.](https://github.com/zalmoxisus/redux-devtools-extension "redux-devtools")|[X.](https://github.com/zalmoxisus/redux-devtools-extension "redux-devtools")|
[Style guide for code (?)](https://github.com/johnpapa/angularjs-styleguide "Provides consistency and best practices")|[X.](https://angular.io/docs/ts/latest/guide/style-guide.html "Angular Style Guide")| |[X.](https://angular.io/docs/ts/latest/guide/style-guide.html "Angular Style Guide")| | |
[Supports database layer triggers (?)](https://docs.feathersjs.com/api/hooks.html "Events attached to data objects that allow you to add custom business logic upon creation, modification or deletion of data.")|[X.](http:// "JHipster")| | |[X.](https://docs.feathersjs.com/api/hooks.html "Feathers.js")| |
[Templating, parsable HTML, no imperative code allowed](http://www.fullstackradio.com/30 "")|[X.](http:// "Angular")|[X.](http:// "AngularJS 1.2")|[X.](http:// "Angular")| |[X.](http:// "Angular")|
[Time travel, undo (?)](http://redux.js.org/docs/recipes/ImplementingUndoHistory.html "You can move forward and backward through a series of state changes")|[X.](https://github.com/ngrx/core "ngrx")| |[X.](https://github.com/ngrx/core "ngrx")|[X.](http://redux.js.org/ "Redux")|[X.](https://github.com/ngrx/core "ngrx")|
[Typed (?)](http://www.typescriptlang.org/ "When the IDE knows type information, it can offer statement completion, reducing typos.    As an application grows in size, renaming and other refactoring operations become necessary. Without type information, error-prone search and replace options must be used")|[X.](http://www.typescriptlang.org/ "Typescript")| |[X.](http://www.typescriptlang.org/ "Typescript")| |[X.](http://www.typescriptlang.org/ "Typescript")|
[Typed, statically (?)](http://qr.ae/fe0h2 "This is a good way to check things automatically, but you should be writing unit tests that can accomplish the same thing.    It also makes possible editor assistance by giving you code completion to display available methods for an object.")|[X.](http://www.typescriptlang.org/ "Typescript")| |[X.](http://www.typescriptlang.org/ "Typescript")| |[X.](http://www.typescriptlang.org/ "Typescript")|
[UML to model generation (?)](http://jhipster.github.io/jhipster_uml.html "Offers you the possibility to use a UML editor to create a diagram that will be parsed to create entity model code.")|[UNIQUE.](http://jhipster.github.io/jhipster_uml.html "JHipster")| | | | |
[Update generated code in an existing app](https://github.com/mgechev/angular-seed/wiki/Architecture-and-usage-of-angular2-seed#build "")|[X.](https://jhipster.github.io/upgrading-an-application/ "JHipster")| |[X.](https://github.com/mgechev/angular-seed/wiki/Architecture-and-usage-of-angular2-seed#build "mgechev's angular-seed")| | |
[Virtual, shadow DOM (?)](https://plus.google.com/u/0/+AngularJS/posts/eZNUbuXwbCm "writes out a full render virtually, and then checks the difference between the virtual render and what’s actually on the DOM and creates a patch.    Includes concepts such as <content> tags, projection, and selection")| | | |[UNIQUE.](https://www.packtpub.com/books/content/try-something-new-today-reactjs "React")| |
|  | | | | |
| **User Experience** |[great big example application](https://github.com/dancancro/great-big-example-application)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|[feathers-starter-react-redux-login-roles](https://github.com/eddyystop/feathers-starter-react-redux-login-roles)|[angular-webpack2-starter](https://github.com/qdouble/angular-webpack2-starter)|
[Account Management, add/remove user](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/admin/user-management "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/admin/user-management)| | | | |
[Account Management, forgotten/recover/reset password](https://github.com/dancancro/great-big-example-application/blob/main/src/main/webapp/app/account/password-reset "")|[X](https://github.com/dancancro/great-big-example-application/blob/main/src/main/webapp/app/account/password-reset)|[X](https://github.com/born2net/Angular-kitchen-sink/blob/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/entry/ForgotPass.ts)| |[X](https://github.com/eddyystop/feathers-starter-react-redux-login-roles/tree/1c264df9e4c11313fd9237ba1cecb65454c41f3b/client/screens/Users/UserForgotPwdReset)| |
[Account Management, login/logout](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/shared/login "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/shared/login)|[X](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/entry/ArticlePanel.ts)| |[X](https://github.com/eddyystop/feathers-starter-react-redux-login-roles/tree/1c264df9e4c11313fd9237ba1cecb65454c41f3b/client/screens/Users/UserSignIn)| |
[Account Management, register](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/account/register "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/account/register)| | |[X](https://github.com/eddyystop/feathers-starter-react-redux-login-roles/tree/1c264df9e4c11313fd9237ba1cecb65454c41f3b/client/screens/Users/UserSignUp)| |
[Asynchronously loaded data example](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/services/rest.service.ts "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/services/rest.service.ts)|X|[X](https://github.com/NathanWalker/angular-seed-advanced/blob/dadb1052f74cb3114547de94d297cc591ed27ab1/src/client/app/shared/sample/services/name-list.service.ts#L31)| | |
[Blog](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/entities/blog "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/entities/blog)| | | | |
[Breadcrumbs (?)](https://github.com/born2net/Angular-kitchen-sink/tree/master/src/comps/breadcrumb "Breadcrumbs are the series of links displayed at the top of a page which take you to any of the ancestral pages between the home page and the one you're on")| |[UNIQUE](https://github.com/born2net/Angular-kitchen-sink/tree/master/src/comps/breadcrumb)| | | |
[Calendar](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/features/dashboard "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/features/dashboard)| | | | |
[Charts](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/features/dashboard "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/features/dashboard)| | | | |
[Chat](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/features/chat "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/features/chat)| | | | |
[Dashboard module](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/features/dashboard "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/features/dashboard)| | | | |
[Derived, computed properties](http://redux.js.org/docs/recipes/ComputingDerivedData.html "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/store/index.ts#L218)|[X](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/models/ServerModel.js#L35)| | | |
[Dynamic component creation](https://github.com/born2net/Angular-kitchen-sink/tree/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/dynmiaccomp "")| |[UNIQUE](https://github.com/born2net/Angular-kitchen-sink/tree/08ff94405b80ee24acff09d0de270e56ba4bace2/src/comps/dynmiaccomp)| | | |
[External, 3rd party, API interaction](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/features/books/services/google-books.service.ts "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/features/books/services/google-books.service.ts)|[X](https://github.com/born2net/Angular-kitchen-sink/blob/master/src/services/SearchSpotifyService.ts)| | | |
[File Upload](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/entities/entry/entry-dialog.component.html#L37 "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/entities/entry/entry-dialog.component.html#L37)| | | | |
[Front-end CRUD, with mock/seed data](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase)| | | | |
[Full-stack CRUD (?)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase "CRUD = Create,Read,Update, Delete    The example demonstrates creating, reading, updating and deleting from a backend file system or database through a web page user interface.  It includes seed data and does not require a lot of work to get the app connected to a database")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase)|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos)| | | |
[Full-stack CRUD, screencast of it](https://jhipster.github.io/video-tutorial/ "")|[UNIQUE](https://jhipster.github.io/video-tutorial/)| | | | |
[Full-stack CRUD, with Create, Update and Delete](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase)|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos)| | | |
[Full-stack CRUD, with Create, Update and Delete, individual records](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase)|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos)| | | |
[Full-stack CRUD, with Create, Update and Delete, whole data structures](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/services/rest.service.ts "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/services/rest.service.ts)| | | | |
[Full-stack CRUD, with db-persisted seed data](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase)| | | | |
[Full-stack CRUD, with Read](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/config/liquibase)|[X](https://github.com/born2net/Angular-kitchen-sink/tree/65b01608a769578a94850bc39254d7e81f82d239/src/comps/app1/todos)| | | |
[Full-stack CRUD, with Read, with filtering](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/features/talks/filters "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/features/talks/filters)| | | | |
[Grid, Editable](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/features/messages "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/features/messages)| | | | |
[i18n, localization (?)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/i18n "Internationalization or localization    Text for different languages are stored in separate places and used to fill in placeholders in the view depending on the user's preferences")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/resources/i18n)| |[X](https://github.com/NathanWalker/angular-seed-advanced/tree/master/src/client/app/shared/i18n)| | |
[Many-to-many data](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/store/index.ts#L265 "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/core/store/index.ts#L265)| | | | |
[Modals (popups, dialogs) (?)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/admin/user-management/user-management-dialog.component.html "A popup window that when opened disables the rest of the application")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/admin/user-management/user-management-dialog.component.html)| | | | |
[Navigation bar](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/layouts/navbar "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/layouts/navbar)|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/layouts/navbar/navbar.component.html)| | | |
[Notifications](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/shared/alert "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/shared/alert)| | | | |
[Offline sync (?)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/sw.js "In general, mobile applications need to be able to operate without constant network connectivity.  This means the client app must synchronize data with the server application after a disconnected period.")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/sw.js)| | | | |
[Pagination, paging (client-side)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/entities/claim/claim.component.ts#L10 "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/entities/claim/claim.component.ts#L10)| | | | |
[Pagination, paging (server-side)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/java/org/exampleapps/greatbig/web/rest/TagResource.java#L98 "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/java/org/exampleapps/greatbig/web/rest/TagResource.java#L98)| | |[X.](https://docs.feathersjs.com/why/vs/readme.html "Feathers.js")| |
[Panels, draggable](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/dragndrop/make-draggable.directive.ts "")| |[UNIQUE](https://github.com/born2net/Angular-kitchen-sink/blob/65b01608a769578a94850bc39254d7e81f82d239/src/comps/dragndrop/make-draggable.directive.ts)| | | |
[Realtime data sync (?)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/java/org/exampleapps/greatbig/config/SecurityConfiguration.java#L109 "Any change to data (addition, update, deletion) by anyone is instantly visible to everyone else without requiring a refresh")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/java/org/exampleapps/greatbig/config/SecurityConfiguration.java#L109)| | | | |
[Responsive styles](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/layouts/navbar/navbar.component.html "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/layouts/navbar/navbar.component.html)| | | | |
[Search, actually works with backend API](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/entities/claim/claim.component.html#L14 "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/entities/claim/claim.component.html#L14)| | | | |
[Sort - client side](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/features/dashboard "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/tree/master/src/main/webapp/app/features/dashboard)| | | | |
[Tables (?)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/entities/claim/claim.component.ts "Create jQuery dataTables")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/entities/claim/claim.component.ts)| | | | |
[To do list](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/shared/widgets/todo "")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/shared/widgets/todo)| | | | |
[Toast (Snackbar) (?)](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/shared/shared-libs.module.ts#L15 "A temporary message box that slides in from a side and is dismissed with a swipe, timer or button press")|[UNIQUE](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/shared/shared-libs.module.ts#L15)| | | | |
[User tracking and analytics](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/admin/tracker "")|[X](https://github.com/dancancro/great-big-example-application/blob/master/src/main/webapp/app/admin/tracker)| |[X](https://github.com/NathanWalker/angular-seed-advanced)| | |
|  | | | | |
| **Dependencies** |[great big example application](https://github.com/dancancro/great-big-example-application)|[Angular-kitchen-sink](https://github.com/born2net/Angular-kitchen-sink)|[angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)|[feathers-starter-react-redux-login-roles](https://github.com/eddyystop/feathers-starter-react-redux-login-roles)|[angular-webpack2-starter](https://github.com/qdouble/angular-webpack2-starter)|
Builders |Yeoman |Yeoman | | |
Client-side API interfaces |@angular/http |$http, $resource, Mongoose-bird |@angular/http | |@angular/http
Convenience method libraries |lodash |Essence.js, underscore |lodash |lodash |
Databases |H2, MongoDB, Postgresql | | | |
Documentation generators | | |typedoc | |
Examples | | |mgechev's angular-seed | |
Frameworks (Back-End) |Spring MVC | |Express |Express, Feathers.js |Express
Frameworks (Front-End) |Angular |AngularJS 1.2, AngularJS 1.3, AngularJS 1.4 |Angular |React |Angular
Generators |angular-cli, JHipster |generator -angular -require | | |
Languages |Java 7, Java 8, JS ES5, JS ES6 (ES2015), Typescript |JS ES5, JS ES6 (ES2015) |JS ES2016, JS ES5, JS ES6 (ES2015), Typescript |JS ES5, JS ES6 (ES2015), JSX |JS ES5, JS ES6 (ES2015), Typescript
Linters |codelyzer, ESLint, JSHint, tslint |ESLint |codelyzer, tslint |ESLint |tslint
Live Editing Tools | |Live reload | | |
Loaders/Bundlers |Spring, Webpack |RequireJS |Rollup, SystemJS |Webpack |Webpack
Misc |Angular Style Guide, cssnano, Jackson, JDL Studio, Liquibase, Logback, ng-annotate, nodemon, redux-devtools, RxJS, Stomp, Swagger, useref, wiredep |chalk, gulp-uglify, Immutable, ng-annotate, wiredep |Angular Style Guide, cssnano, Electron, redux-devtools, RxJS |Passport, react-router, redux-devtools |nodemon, redux-devtools, RxJS
Object Database Mappers | |Mongoose | | |
Package Managers |npm, Yarn |apt-get, bower, npm |npm |npm |npm, Yarn (opt)
Routers |Angular Component Router | |Angular Component Router | |Angular Component Router
Runtime Environments |Node |Node |NativeScript, Node |Node |Node
Security Frameworks |Spring Social |Spring Social | | |
State Managers |ngrx | |ngrx |Redux |ngrx
Styles |Normalize.css | | | |
Task Runners | |NPM Scripts |Gulp | |
Test assertion libraries |Chai, Jasmine, Mocha |Jasmine, Mocha |Jasmine |Chai, Mocha |Jasmine
Test coverage reporters |Istanbul, karma-coverage | | |Istanbul |
Test runners |BrowserSync, Karma |Karma, PhantomJS |Karma | |Karma
Transpilers |libsass | | |libsass |libsass
Unit testers |JUnit, Mockito | | | |
Widget collections | |Angular Material | | |Angular Material

See any mistakes? [Help improve this data](https://docs.google.com/forms/d/e/1FAIpQLSeo2fG1YwFbGF_p9zor7Tu_KHPGF6tIt5EWoZGcosGLytC_EQ/viewform)

## [File Structure](https://github.com/dancancro/great-big-example-application/blob/master/docs/FILE_STRUCTURE.md)


## License

This project is licensed under the MIT Open Source license. For more information, see the [LICENSE](LICENSE) file in this repository.
