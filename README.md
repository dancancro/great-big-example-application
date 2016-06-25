# Angular2 State & Data Demo - Talk Version

Exploring approaches to State and Data management from controllers to @ngrx/store

## What is it?
This is a bare bones version of a demonstration project that attempts to explore and illustrate the progression of approaches to data management from the 'Angular 1 Way', 
through changes to http with observables all the way to the current state of the art utilising the flux/redux implementation @ngrx/store.  

Also, While there are some other examples of using flux/redux/@ngrx/store with http, I didn't find any of them to be easy to understand.

The intent of this repo is to be the basis for a presentation on the subject.

## Prerequisites
You will need to have [Git](https://git-scm.com/) and [Node.js + NPM](http://nodejs.org) installed on your machine. 

You will also need to install the `typings` NPM package globally via `npm i -g typings`.

You will also need to install the `angular-cli` NPM package globally via `npm i -g angular-cli`.

You will also need to install the `json-server` NPM package globally via `npm i -g json-server`.


## Make it go
This is a standard angular-cli generated application so you can use all of the ng XXX commands to manage the application.

```
# Download the code
$ git clone https://github.com/JavascriptMick/ng2-state-demo.git
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

## The full Demo
Can be found here