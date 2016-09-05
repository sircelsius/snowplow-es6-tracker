var componentContext = require.context('../lib', true, /index.js/)
componentContext.keys().forEach(componentContext)

var testContext = require.context('./lib', true, /index.js/)
testContext.keys().forEach(testContext)
