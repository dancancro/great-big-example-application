# Angular2 State Demo

Exploring State and Data management with @ngrx/store and http in an Angular2 demo

## Prerequisites
You will need to have [Git](https://git-scm.com/) and [Node.js + NPM](http://nodejs.org) installed on your machine. 

You will also need to install the `typings` NPM package globally via `npm i -g typings`.

You will also need to install the `angular-cli` NPM package globally via `npm i -g angular-cli`.

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

# Build the app
$ ng serve
```

Then navigate to [http://localhost:4200](http://localhost:4200) in your browser.

## Service & Component Summary
To support many different approaches in the one proect, I have needed to introduce more structure than would normally be required.
In a final implementation, you would probably only use one service implementation and skip the interface.
* NotesDataService - This is a thin wrapper around the http functions.
* NotesService - This is a service interface that the component will interact with. The following services implement this interface in various ways taking various approaches.
* NotesControllerComponent - Angular 1.0 style implentation using the DataService and local state management directly in the component mirroring an Angular1 controller.
* NotesComponent + NotesServiceHttpOnly - This is not a reccomended aproach but illustrates the start of the approach of taking the data service and state management out of the component into a dedicated service.
* NotesComponent + NotesServiceServerFirstOnAdd - A practical and robust implementation utilising store + DataService.  Usable in most 'real world' appliations where the server is the source of uniqueness.
* NotesComponent + NotesServiceStoreFirstOnAdd - A practical and robust implementation using client generated uuid's

## Adding Items
I did a lot of thinking about the best way to Add items and tried a lot of approaches.
Note that I avoided bringing in libraries like @ngrx/effects because I wanted to get the logic straight in my head first.

### Server First (Server generates unique Id)
This approach works well when the server is the source of the unique id.

Note that this approach Mirrors the redux-thunk approach where the add action would be delayed in the action creator untill the async response returns.

Logically, it goes like this
1. Send a Post request to the server with the details of the new item
2. When the Post returns, dispatch an 'ADD' action to the store which contains the new item from the server in the payload (with the server id)
3. The reducer in response to 'ADD' action adds the server item to the list.

Pros
* Simplest approach
* Reducer isn't poluted with server related actions
* Model isn't polluted with metadata attributes like 'dirty'
* Appropriate Affordance - It is impossible to attempt to change (or make it appear as if change is possible) untill the item has it's unique ID from the server so there are no race conditions around editing a newly added item.

Cons
* Responsiveness on Add is constrained by server responsiveness - The item doesn't appear on the UI untill the server returns.
* The initial state of the item is determined outside the store so you can't apply any 'creation logic' in the store untill after the item is created on the server.

### Store First then Sync (Client generates id)
This approach only works if 
* The Client can generate the id
* The server will honour the uniqueness and indexability of that Id.
* The server can decide on insert/update of the item based on the pre-existence of that item (i.e. Put/Post is irrelevant) 
Usually this means you will need full control over server and client.

1. Dispatch an add event to the store, the item is created with {dirty:true, id:"970c86.."}
Note here that I can't just Post the new note to the server because the store does not return me a reference to the item that was created as a part of this action. Instead, I need to now ...
2. Invoke a 'sync' function that
* spins through items and if dirty:-
* Posts the item to the server (Note, server must accept Post for existing items)
* when the Post returns from the server, dispatch an 'UPDATE_FROM_SERVER' event which contains the new item from the server in the payload (with any server-mutated properties like audit timestamps)
* the reducer in response to 'UPDATE_FROM_SERVER' swaps out the item with the server item based on the id.
* updates to immediately added items are allowed.

## Updating Items
There is only one sensible approach here.  To allow different sorts of actions that might result in different types of state changes
it only makes sense to drive these changes through the reducer and then 'sync' the changes to the server

### Store First then Sync
1. Dispatch ay type of 'updating' actionto the store, the reducer will change one or many items but must set the 'dirty' flag on any items that have change in respect of state that you want to persist to the server {dirty:true}
2. Invoke a 'sync' function that
* spins through items and if dirty:-
* Puts the item to the server
* when the Put returns from the server, dispatch an 'UPDATE_FROM_SERVER' event which contains the new item from the server in the payload
* the reducer in response to 'UPDATE_FROM_SERVER' swaps out the item with the server item based on the id

#### A note on object equality
You will notice that in the reducer, object equality is not used when handling the update from server (PATCH action) but rather am checking the equality of the id.
This is done deliberately so as not to introduce a race condition.
You may not have considered this but any change to the note between sending the http Post/Put and invoking the PATCH action will result in a new 
object so an object equality check will always fail and effectively and 'orphan' the data returning from the server.

#### A note on dirty and server based actions
You will also notice that the reducer is concerned with the dirty flag and server based actions.
This might seem like a cross concern for the reducer but the presence of a backend and the dirtiness of the data is intrinsic to the data model for the client
and it should be indicated to the user to make it clear when the changes they are making have been persisted permanently.