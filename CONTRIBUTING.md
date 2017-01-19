# Contributing

## Linting

`npm run lint`

The linter is extremely annoying on purpose. It follows the rules described in [“Breathing air into AirBnB’s JavaScript Style Guide”](https://medium.freecodecamp.com/adding-some-air-to-the-airbnb-style-guide-3df40e31c57a#.mtp4vn607) by Alex Moldovan.

Lint your code regularly, and get used to adding spaces inside parentheses. :hankey:

## Coverage

`npm test`

At the moment of writing, this project has 100% line coverage. You can see the coverage report on [codecov.io](https://codecov.io/gh/sircelsius/snowplow-es6-tracker).

**This score should be kept**. The only file that shouldn't be fully covered is [`lib/index.js`](lib.index.js) since it only exposes the modules.

## Development Server

`npm start`

Have a look at [`server/snow.js`](server/snow.js) to understand how to integrate the ES6 Tracker in your app.

## What can I work on?

Have a look at the [open issues](https://github.com/sircelsius/snowplow-es6-tracker/issues). If nothing in there looks yummy to you, move over to [`ROADMAP.md`](ROADMAP.md) and pick something in there, preferably top to bottom.
