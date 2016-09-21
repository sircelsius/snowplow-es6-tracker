# snowplow-es6-tracker [![Build Status](https://travis-ci.org/sircelsius/snowplow-es6-tracker.svg?branch=master)](https://travis-ci.org/sircelsius/snowplow-es6-tracker) [![codecov](https://codecov.io/gh/sircelsius/snowplow-es6-tracker/branch/master/graph/badge.svg)](https://codecov.io/gh/sircelsius/snowplow-es6-tracker)[![Minified size](http://img.badgesize.io/https://github.com/sircelsius/snowplow-es6-tracker/master/dist/bundle.js)](http://img.badgesize.io/https://github.com/sircelsius/snowplow-es6-tracker/master/dist/bundle.js)

> ES6 tracker for snowplowanalytics.com

This project aims to take the features described in the Snowplow [Javascript Tracker Wiki](https://github.com/snowplow/snowplow/wiki/Javascript-Tracker) and port them to an entirely new project written with the latest JS features.

*It is not* a fork of [snowplow/snowplow-javascript-tracker](https://github.com/snowplow/snowplow-javascript-tracker/) but an entirely new project.

*It is not* an official snowplow tracker implementation.

The aim of this is to have a JS tracker for Snowplow that uses a more modern stack than the official one:

  * ES6 features (classes, import/export, Promise, ...)
  * Babel transpiling of ES6 to ES5
  * Webpack bundling
  * Karma tests

## Roadmap

  1. v0.1.0
    * Tracker dictionary
    * `trackPageView` and `trackStructEvent` (POST, no contexts)
  1. v0.2.0
    * Tracker contexts (predefined contexts)
    * GET trackers
    * `trackPageView` and `trackStructEvent` with contexts
  1. v1.0.0:
    * Full replica of [snowplow/snowplow-javascript-tracker](https://github.com/snowplow/snowplow-javascript-tracker/)
