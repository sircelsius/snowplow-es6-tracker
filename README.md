# snowplow-es6-tracker [![Build Status](https://travis-ci.org/sircelsius/snowplow-es6-tracker.svg?branch=master)](https://travis-ci.org/sircelsius/snowplow-es6-tracker) [![codecov](https://codecov.io/gh/sircelsius/snowplow-es6-tracker/branch/master/graph/badge.svg)](https://codecov.io/gh/sircelsius/snowplow-es6-tracker) [![Minified size](http://img.badgesize.io/sircelsius/snowplow-es6-tracker/master/dist/bundle.js)](http://img.badgesize.io/sircelsius/snowplow-es6-tracker/master/dist/bundle.js)

> ES6 tracker for [snowplowanalytics.com](www.snowplowanalytics.com)

**Contributions welcome! Head over to [`CONTRIBUTING.md`](CONTRIBUTING.md) to learn how to contribute.**

**Alpha mode** This project is currently in alpha mode and does not replicate all the JavaScript tracker's features. Head over to [`ROADMAP.md`](ROADMAP.md) to see what features are present and which are planned.

This project aims to take the features described in the Snowplow [Javascript Tracker Wiki](https://github.com/snowplow/snowplow/wiki/Javascript-Tracker) and port them to an entirely new project written with the latest JS features.

*It is not* a fork of [snowplow/snowplow-javascript-tracker](https://github.com/snowplow/snowplow-javascript-tracker/) but an entirely new project.

*It is not* an official snowplow tracker implementation.

The aim of this is to have a JS tracker for Snowplow that uses a more modern stack than the official one:

  * ES6 features (classes, import/export, Promise, ...)
  * Babel transpiling of ES6 to ES5
  * Webpack bundling
  * Karma tests

It also aims (in the future) to allow developers to use things such as:
  * [tree-shaking](http://www.2ality.com/2015/12/webpack-tree-shaking.html). You can't always get get what you want, but you always get more than you need.
  * tracking offline users via Service Workers.
  * bundle Snowplow directly in their apps (instead of fetching the tracker on load, which delays the moment when you can start tracking users).
  * more unicorns.

## Usage

`yarn add snowplow-es6-tracker` (or, if you're old school, `npm install --save snowplow-es6-tracker`).

Somewhere in your app:

```` js
import { Dictionary, Tracker, PageView, StructEvent } from 'snowplow-es6-tracker'

const dict = new Dictionary()

dict.newTracker( new Tracker( 'myES6Tracker', {
  appId: 'my-website',
  post: true,
} ) )
  .then( dict => {
    dict.getTracker( 'myES6Tracker' )
      .then( tracker => {
        const pv = new PageView( tracker, 'Page Title' )
        return tracker.trackEvent( pv )
      })
      .then( () => dict)
  })
  .then( dict => {
    dict.getTracker( 'myES6Tracker' )
      .then( tracker => {
        const se = new StructEvent( tracker, 'my-category', 'my-action', 'my-label', 'my-property', 2 )
        return tracker.trackEvent( se )
      })
      .then( () => dict)
  })

// track moar stuff

````