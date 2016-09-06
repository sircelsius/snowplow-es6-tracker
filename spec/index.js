const componentContext = require.context( '../lib', true, /\.js$/ )
componentContext.keys().forEach( componentContext )

const testContext = require.context( './lib', true, /\.js$/ )
testContext.keys().forEach( testContext )
