import chai from 'chai'
import { polyfill } from 'es6-object-assign'
import validateOptions from './../../../../../lib/model/tracker/optionsValidator'
import { DEFAULT_OPTIONS } from './../../../../../lib/model/tracker/options'

const expect = chai.expect
polyfill()

describe( 'OptionValidator', () => {
    it( 'should fail on empty object', () => {
        expect( validateOptions( {} ) ).to.equal( 'appId' )
    } )

    it( 'should fail on default options', () => {
        expect( validateOptions( DEFAULT_OPTIONS ) )
            .to.equal( 'appId' )
    } )

    it( 'should pass on default options with appId set', () => {
        const opts = Object.assign( {}, { appId: 'foo' }, DEFAULT_OPTIONS )
        expect( validateOptions( opts ) )
            .to.equal( true )
    } )

    it( 'should pass when cookieDomain is a String', () => {
        const opts = Object.assign( {}, DEFAULT_OPTIONS,
        {
            appId: 'foo',
            cookieDomain: 'bar',
        } )
        expect( validateOptions( opts ) )
            .to.equal( true )
    } )

    it( 'should pass when cookieDomain is null', () => {
        const opts = Object.assign( {}, DEFAULT_OPTIONS,
        {
            appId: 'foo',
            cookieDomain: null,
        } )
        expect( validateOptions( opts ) )
            .to.equal( true )
    } )

    it( 'should pass when userFingerprintSeed is a function', () => {
        const opts = Object.assign( {}, DEFAULT_OPTIONS,
        {
            appId: 'foo',
            userFingerprintSeed: () => 1,
        } )
        expect( validateOptions( opts ) )
            .to.equal( true )
    } )

    it( 'should invalidate when post is true and bufferSize is invalid', () => {
        const opts = Object.assign( {}, DEFAULT_OPTIONS,
        {
            appId: 'foo',
            post: true,
            bufferSize: 'a',
        } )
        expect( validateOptions( opts ) )
            .to.equal( 'bufferSize' )
    } )
} )
