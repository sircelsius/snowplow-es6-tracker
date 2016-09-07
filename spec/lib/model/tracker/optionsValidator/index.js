import chai from 'chai'
import { polyfill } from 'es6-object-assign'
import validateOptions from './../../../../../lib/model/tracker/optionsValidator'
import { DEFAULT_OPTIONS } from './../../../../../lib/model/tracker/options'

chai.should()
polyfill()

describe( 'OptionValidator', () => {
    it( 'should fail on empty object', () => {
        
        ( validateOptions( {} ) ).should.equal( 'appId' )
    } )

    it( 'should fail on default options', () => {
        ( validateOptions( DEFAULT_OPTIONS ) )
            .should.equal( 'appId' )
    } )

    it( 'should pass on default options with appId set', () => {
        const opts = Object.assign( {}, { appId: 'foo' }, DEFAULT_OPTIONS )
        validateOptions( opts )
            .should.equal( true )
    } )
} )
