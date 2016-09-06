var componentContext = require.context('../lib', true, /\.js$/)
componentContext.keys().forEach(componentContext)

var testContext = require.context('./lib', true, /\.js$/)
testContext.keys().forEach(testContext)
