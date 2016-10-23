This project is an attempt by an unemployed non-student to infer from available demos what the codebase might
look like for the real-world, commercial SPAs that employed programmers work on every day. If it's easier to
learn automechanics using a real car than a bicycle, a go-kart and a differential, then it's also easier
to learn how to make a real application by getting your eyes on source code of a real application than a lot of
simplified instructional material.

This is real in architecture but not content. It was not important for the application's features to be coherent or
related. So I just combined the features of the following expert but small instructional apps that I used to
learn all of this into one big app. I integrated/restructured/restyled their code according to the following
priorities listed below in order of priority from highest to lowest. Disagreements in approach between two influences
are resolved by the lower influence yielding to the higher one:

1. [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html) by Google
2. [Tour of Heroes Final Version](https://angular.io/resources/live-examples/ngmodule/ts/plnkr.html) by Google
3. [Angular CLI](https://github.com/angular/angular-cli) by Google and the community
4. [ngrx example app](https://github.com/ngrx/example-app) by [@MikeRyan52](https://github.com/MikeRyan52)
5. [ng2-state-talk](https://github.com/JavascriptMick/ng2-state-talk) by [@JavascriptMick](https://github.com/JavascriptMick) 
6. [rangle-starter - Angular 2 with TypeScript and Redux version](https://www.npmjs.com/package/rangle-starter) by [@SethDavenport](https://github.com/SethDavenport)

In addition to the features from these demos, I added one of my own. I replaced
[this other project](http://www.bernierebuttals.org) which was made with JQuery and Google Scripts. The data is 
contained in [this Google Sheet](https://docs.google.com/spreadsheets/d/1RdIhMdNCRJ-xtl6IgbT2SdChtLIYW8VXeloq7rR1lqY/edit#gid=50602236) 
and served as JSON by a Google script.

## Prerequisites
You will need to have [Git](https://git-scm.com/) and [Node.js + NPM](http://nodejs.org) installed on your machine. 

You will also need to install the `typings` NPM package globally via `npm i -g typings`.

You will also need to install the `angular-cli` NPM package globally via `npm i -g angular-cli`.

You will also need to install the `json-server` NPM package globally via `npm i -g json-server`.


## Make it go
This is a standard angular-cli generated application so you can use all of the ng XXX commands to manage the application.

```
# Download the code
$ git clone <ToDo>
$ cd ng2-state-demo

# Install dependencies
$ npm i

# Install typescript definitions
$ typings install

# Run the backend server
$npm run backend

# Build and serve the app
$ ng serve

# Continuously run the tests
$ ng test

```

Then navigate to [http://localhost:4200](http://localhost:4200) in your browser.
