/// <reference path="./node_modules/@types/jasmine/index.d.ts" />
import 'core-js';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/proxy';
import 'zone.js/dist/jasmine-patch';
import 'rxjs';
import 'intl/locale-data/jsonp/en-US.js';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
var reflect = require('reflect-metadata');

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

declare const require: any;
const testsContext: any = require.context('./src/main/webapp/', true, /\.spec\.ts/);
testsContext.keys().forEach(testsContext);
