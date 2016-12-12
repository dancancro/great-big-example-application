[Please click here to support the Standing Rock Sioux Tribe and their peaceful resistance to the Dakota Access Pipeline which threatens their only source of water.](http://www.powwows.com/2016/09/07/10-ways-can-help-standing-rock-sioux-fight-dakota-access-pipeline/) 


This project is an attempt by an unemployed non-college-student to infer from available demos what the codebase might
look like for the real-world, commercial SPAs that you don't get to see until you are hired by a real company.

The rationale behind this is pretty simple. People need to learn how to make real applications before they get a job.
If it's easier and more sensible to learn real automechanics by studying a real car than a bicycle, a go-kart and a
differential, then it makes more sense to learn how to make a real application by getting your eyes on source code of a
real application than a lot of separate, simplified instructional material. And I've discovered that repeating the
prevailing process doesn't help either. Building go-kart number 1 is great to get you started without too much anxiety,
but building go-kart number 2, 3, 4 or 5 isn't going to make you any better able to build real car number 1. It just
makes you less sure about how to do that because it introduces conflicting advice.

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
6. [redux-orm-primer - todo app](https://github.com/tommikaikkonen/redux-orm-primer) by [@tommikaikkonen](https://github.com/tommikaikkonen)
7. [ng2-state-talk - drag/editable notes](https://github.com/JavascriptMick/ng2-state-talk) by [@JavascriptMick](https://github.com/JavascriptMick) 
8. [rangle-starter Angular 2 with TypeScript and Redux version - counter](https://www.npmjs.com/package/rangle-starter) by [@SethDavenport](https://github.com/SethDavenport)

In addition to the features from these demos, I added one of my own. I replaced

9. [this other project](http://www.bernierebuttals.org) 

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



| Demonstrations and Features                                                    |   This one     |    [Rangle-starter](https://www.npmjs.com/package/rangle-starter)  |  [Angular-CLI](https://github.com/angular/angular-cli) | ngrx example 
|:------------------------------------------------------------------------------ |:-------------: |:-----------------: | :------------:|:-------------:|
| **Developer Experience**                                                       |                |                    |               |               |
| Immutable data                                                                 |       Y        |          Y         |               |        Y      |
| Centralized actions and mutations                                              |       Y        |          Y         |               |        Y      |
| Async bound JSON data (RxJS + Angular 2 async pipe)                            |       Y        |                    |               |        Y      |
| Many-to-many data                                                              |       Y        |                    |               |               |
| Feature module with nested/coupled, logic-free components                      |       Y        |                    |               |        Y      |
| Inter-component communication with events                                      |       Y        |                    |               |        Y      |
| Rewind/playback (Redux dev tools)                                              |       Y        |          Y         |               |        Y      |
| State inspection (Redux dev tools)                                             |       Y        |          Y         |               |        Y      |
| Compartmentalized CSS (Angular 2)                                              |       Y        |          Y         |       Y       |        Y      |
| Routing (Angular 2)                                                            |       Y        |          Y         |       Y       |        Y      |
| Build, source mapping, hot reloading, minification, bundling (Webpack)         |       Y        |          Y         |       Y       |        Y      |
| Type safety (Typescript)                                                       |       Y        |          Y         |       Y       |        Y      |
| Derived, computed attributes                                                   |       Y        |                    |               |               |
| Update your code as starter code evolves                                       |       Y        |                    |       Y       |        Y      |
| Ahead of time compilation (Angular 2)                                          |       Y        |          Y         |       Y       |        Y      |
| Lazy loading (Angular 2)                                                       |       Y        |          Y         |       Y       |        Y      |
| Deploy on GitHub pages                                                         |                |                    |       Y       |        Y      |
| Style checking (ESLint, TSLint)                                                |       Y        |          Y         |       Y       |        Y      |
| Testing                                                                        |    coming      |          Y         |       Y       |        Y      |
| [Use tomorrow's CSS today](https://www.npmjs.com/package/postcss-cssnext)      |       Y        |          Y         |               |               |
| Debug server-side code                                                         |       Y        |                    |               |               |
|                                                                                |                |                    |               |               |
| **User Experience**                                                            |                |                    |               |               |
| Local storage                                                                  |       Y        |          Y         |               |               |
| [Validation](https://egghead.io/lessons/angular-2-create-and-submit-an-angular-2-form-using-ngform)                                                   |       Y        |          Y         |               |
| Authentication (rangle-starter + Passport)                                     |       Y        |          Y         |               |               |
| Responsive styling (basscss)                                                   |       Y        |          Y         |               |               |
| Editable lists                                                                 |       Y        |                    |               |               |
| JPEG images                                                                    |       Y        |                    |               |               |
| [Drag and drop](https://github.com/JavascriptMick/ng2-state-talk)              |       Y        |                    |               |               |
| [Autocomplete (?)](https://egghead.io/lessons/angular-2-building-an-instant-search-with-angular-2-consuming-events-as-observables?course=build-an-angular-2-instant-search-component)                                                               |    coming      |                    |               
| [Undo](https://github.com/brechtbilliet/ngrx-undo)                             |    coming      |                    |               |               |
| Single-record save                                                             |       Y        |                    |               |               |
| Tree-level save                                                                |       Y        |                    |               |               |