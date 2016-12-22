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



|  Demonstrations and Features | This one | Rangle-starter | Angular-CLI | ngrx example |
|  :------ | :------: | :------: | :------: | :------: |
|  **Developer Experience** |  |  |  |  |
|  Immutable data | Y | Y |  | Y |
|  Centralized actions and mutations | Y | Y |  | Y |
|  Async bound JSON data (RxJS + Angular 2 async pipe) | Y |  |  | Y |
|  Many-to-many data | Y |  |  |  |
|  Feature module with nested/coupled, logic-free components | Y |  |  | Y |
|  Inter-component communication with events | Y |  |  | Y |
|  Rewind/playback (Redux dev tools) | Y | Y |  | Y |
|  State inspection (Redux dev tools) | Y | Y |  | Y |
|  Compartmentalized CSS (Angular 2) | Y | Y | Y | Y |
|  Routing (Angular 2) | Y | Y | Y | Y |
|  Build, source mapping, hot reloading, minification, bundling (Webpack) | Y | Y | Y | Y |
|  Type safety (Typescript) | Y | Y | Y | Y |
|  Derived, computed attributes | Y |  |  |  |
|  Update your code as starter code evolves | Y |  | Y | Y |
|  Ahead of time compilation (Angular 2) | Y | Y | Y | Y |
|  Lazy loading (Angular 2) | Y | Y | Y | Y |
|  Deploy on GitHub pages | Y |  | Y | Y |
|  Style checking (ESLint, TSLint) | Y | Y | Y | Y |
|  Testing |  | Y |  | Y |
|  Use tomorrow's CSS today |  | Y |  |  |
|  Debug server-side code | Y |  |  |  |
|   |  |  |  |  |
|  **User Experience** |  |  |  |  |
|  Local storage | Y | Y |  | Y |
|  Validation | Y | Y |  |  |
|  Authentication (rangle-starter + Passport) | Y | Y |  |  |
|  Responsive styling | Y | Y |  | Y |
|  Editable lists | Y |  |  |  |
|  Drag and drop | Y |  |  |  |
|  Single-record save | Y |  |  | Y |
|  Tree-level save | Y |  |  |  |


# File Structure
```
├── app
│   ├── app.module.ts
│   ├── app.page.css
│   ├── app.page.html
│   ├── app.page.spec.ts
│   ├── app.page.ts
│   ├── app.routing.ts
│   ├── books
│   │   ├── README.md
│   │   ├── add-commas
│   │   │   └── add-commas.pipe.ts
│   │   ├── book-authors
│   │   │   └── book-authors.component.ts
│   │   ├── book-detail
│   │   │   └── book-detail.component.ts
│   │   ├── book-exists
│   │   │   └── book-exists.guard.ts
│   │   ├── book-preview
│   │   │   ├── book-preview-list.component.ts
│   │   │   └── book-preview.component.ts
│   │   ├── book-search
│   │   │   └── book-search.component.ts
│   │   ├── books.module.ts
│   │   ├── books.routing.ts
│   │   ├── collection.page.ts
│   │   ├── ellipsis
│   │   │   └── ellipsis.pipe.ts
│   │   ├── find-book.page.ts
│   │   ├── selected-book.page.ts
│   │   └── view-book.page.ts
│   ├── contact
│   │   ├── contact.module.ts
│   │   ├── contact.page.css
│   │   ├── contact.page.html
│   │   ├── contact.page.ts
│   │   └── contact.routing.ts
│   ├── core
│   │   ├── about
│   │   │   └── about.page.ts
│   │   ├── core.module.ts
│   │   ├── core.routing.ts
│   │   ├── exception.service.ts
│   │   ├── logger.service.ts
│   │   ├── navigator
│   │   │   ├── bc-navigator
│   │   │   │   ├── layout.component.ts
│   │   │   │   ├── nav-item.component.ts
│   │   │   │   ├── navigator.module.ts
│   │   │   │   ├── sidenav.component.ts
│   │   │   │   └── toolbar.component.ts
│   │   │   └── navigator.module.ts
│   │   ├── not-found
│   │   │   └── not-found.page.ts
│   │   ├── spinner.component.ts
│   │   ├── store
│   │   │   ├── book
│   │   │   │   ├── book.actions.ts
│   │   │   │   ├── book.effects.ts
│   │   │   │   ├── book.model.ts
│   │   │   │   ├── book.reducer.ts
│   │   │   │   └── google-books.service.ts
│   │   │   ├── claim
│   │   │   │   ├── README.md
│   │   │   │   ├── claim.actions.ts
│   │   │   │   ├── claim.effects.ts
│   │   │   │   ├── claim.model.ts
│   │   │   │   └── claim.reducer.ts
│   │   │   ├── claim-rebuttal
│   │   │   │   ├── claim-rebuttal.actions.ts
│   │   │   │   ├── claim-rebuttal.effects.ts
│   │   │   │   ├── claim-rebuttal.model.ts
│   │   │   │   └── claim-rebuttal.reducer.ts
│   │   │   ├── collection
│   │   │   │   ├── collection.actions.ts
│   │   │   │   ├── collection.effects.ts
│   │   │   │   └── collection.reducer.ts
│   │   │   ├── contact
│   │   │   │   ├── contact.actions.ts
│   │   │   │   ├── contact.effects.ts
│   │   │   │   ├── contact.model.ts
│   │   │   │   └── contact.reducer.ts
│   │   │   ├── counter
│   │   │   │   ├── counter.actions.test.ts
│   │   │   │   ├── counter.actions.ts
│   │   │   │   ├── counter.model.ts
│   │   │   │   └── counter.reducer.ts
│   │   │   ├── crisis
│   │   │   │   ├── crisis.actions.ts
│   │   │   │   ├── crisis.effects.ts
│   │   │   │   ├── crisis.model.ts
│   │   │   │   └── crisis.reducer.ts
│   │   │   ├── data.service.ts
│   │   │   ├── db.ts
│   │   │   ├── entity
│   │   │   │   └── entity.model.ts
│   │   │   ├── hero
│   │   │   │   ├── hero.actions.ts
│   │   │   │   ├── hero.effects.ts
│   │   │   │   ├── hero.model.ts
│   │   │   │   └── hero.reducer.ts
│   │   │   ├── index.ts
│   │   │   ├── layout
│   │   │   │   ├── layout.actions.ts
│   │   │   │   ├── layout.model.ts
│   │   │   │   └── layout.reducer.ts
│   │   │   ├── note
│   │   │   │   ├── note.actions.ts
│   │   │   │   ├── note.effects.ts
│   │   │   │   ├── note.model.ts
│   │   │   │   └── note.reducer.ts
│   │   │   ├── rebuttal
│   │   │   │   ├── rebuttal.actions.ts
│   │   │   │   ├── rebuttal.effects.ts
│   │   │   │   ├── rebuttal.model.ts
│   │   │   │   └── rebuttal.reducer.ts
│   │   │   ├── search
│   │   │   │   └── search.reducer.ts
│   │   │   ├── session
│   │   │   │   ├── session.actions.ts
│   │   │   │   ├── session.effects.ts
│   │   │   │   ├── session.model.ts
│   │   │   │   └── session.reducer.ts
│   │   │   └── user
│   │   │       ├── user.model.ts
│   │   │       └── user.reducer.ts
│   │   └── title
│   │       ├── title.component.html
│   │       └── title.component.ts
│   ├── counter
│   │   ├── README.md
│   │   ├── counter.component.css
│   │   ├── counter.component.ts
│   │   ├── counter.module.ts
│   │   ├── counter.page.ts
│   │   └── counter.routing.ts
│   ├── crisis
│   │   ├── crisis-detail
│   │   │   └── crisis-detail.component.ts
│   │   ├── crisis.module.ts
│   │   ├── crisis.page.css
│   │   ├── crisis.page.ts
│   │   └── crisis.routing.ts
│   ├── debate
│   │   ├── README.md
│   │   ├── claim
│   │   │   ├── claim.component.css
│   │   │   ├── claim.component.html
│   │   │   ├── claim.component.spec.ts
│   │   │   └── claim.component.ts
│   │   ├── debate.module.ts
│   │   ├── debate.page.css
│   │   ├── debate.page.html
│   │   ├── debate.page.ts
│   │   ├── debate.routing.ts
│   │   └── rebuttal
│   │       ├── rebuttal.component.css
│   │       ├── rebuttal.component.html
│   │       ├── rebuttal.component.spec.ts
│   │       └── rebuttal.component.ts
│   ├── hero
│   │   ├── hero-detail
│   │   │   └── hero-detail.component.ts
│   │   ├── hero-list
│   │   │   ├── hero-list.component.css
│   │   │   └── hero-list.component.ts
│   │   ├── hero.module.ts
│   │   ├── hero.page.css
│   │   ├── hero.page.ts
│   │   └── hero.routing.ts
│   ├── index.ts
│   ├── login
│   │   ├── login-form
│   │   │   ├── login-form.component.css
│   │   │   ├── login-form.component.test.ts
│   │   │   └── login-form.component.ts
│   │   ├── login-modal
│   │   │   ├── login-modal.component.test.ts
│   │   │   └── login-modal.component.ts
│   │   └── login.module.ts
│   ├── notes
│   │   ├── README.md
│   │   ├── add-button
│   │   │   ├── add-button.component.css
│   │   │   ├── add-button.component.html
│   │   │   └── add-button.component.ts
│   │   ├── note
│   │   │   ├── note.component.css
│   │   │   ├── note.component.html
│   │   │   └── note.component.ts
│   │   ├── notes.module.ts
│   │   ├── notes.page.css
│   │   ├── notes.page.html
│   │   ├── notes.page.spec.ts
│   │   ├── notes.page.ts
│   │   └── notes.routing.ts
│   └── shared
│       ├── alert
│       │   ├── alert.component.test.ts
│       │   ├── alert.component.ts
│       │   └── index.ts
│       ├── assets
│       │   └── bernie-sanders-128.jpg
│       ├── awesome
│       │   └── awesome.pipe.ts
│       ├── button
│       │   ├── button.component.test.ts
│       │   ├── button.component.ts
│       │   └── index.ts
│       ├── container
│       │   ├── container.component.test.ts
│       │   └── container.component.ts
│       ├── dialog
│       │   └── dialog.service.ts
│       ├── draggable
│       │   └── draggable.directive.ts
│       ├── form
│       │   ├── form.component.ts
│       │   ├── form.test.ts
│       │   └── index.ts
│       ├── form-error
│       │   ├── form-error.component.ts
│       │   └── form-error.test.ts
│       ├── form-group
│       │   ├── form-group.component.ts
│       │   └── form-group.test.ts
│       ├── highlight
│       │   └── highlight.directive.ts
│       ├── input
│       │   ├── input.component.ts
│       │   └── input.test.ts
│       ├── label
│       │   ├── label.component.ts
│       │   └── label.test.ts
│       ├── logo
│       │   ├── index.ts
│       │   ├── logo.component.css
│       │   ├── logo.component.test.ts
│       │   └── logo.component.ts
│       ├── modal
│       │   ├── modal.component.css
│       │   ├── modal.component.test.ts
│       │   └── modal.component.ts
│       ├── modal-content
│       │   ├── modal-content.component.test.ts
│       │   └── modal-content.component.ts
│       ├── shared.module.ts
│       └── util.ts
├── assets
│   ├── bernie-app.png
│   ├── bernie-sanders-128.jpg
│   ├── bernie-spreadsheet.png
│   ├── collection.png
│   ├── counter.png
│   ├── notes.png
│   ├── rangleio-logo.svg
│   └── styles
│       ├── align.css
│       ├── background-colors.css
│       ├── basscss.css
│       ├── colors.css
│       ├── flexbox.css
│       ├── grid.css
│       ├── hero-styles.css
│       ├── hide.css
│       ├── index.css
│       ├── media-object.css
│       ├── position.css
│       ├── responsive-margin.css
│       └── responsive-padding.css
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── test.ts
├── tsconfig.json
└── typings.d.ts
```