import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import validate from './../../../../../lib/model/event/validators/structEvent'

chai.use( chaiAsPromised )
const expect = chai.expect

describe( 'StructEvent validator', () => {
    it( 'should fail on empty event', () => {
        expect( validate() ).to.equal( false )
    } )

    it( 'should fail when category is missing', ( ) => {
        expect( validate() ).to.equal( false )
    } )

    it( 'should fail when category is null or undefined', ( ) => {
        expect( validate( {
            category: null,
        } ) ).to.equal( false )

        expect( validate( {
            category: undefined,
        } ) ).to.equal( false )
    } )

    it( 'should fail when action is missing', ( ) => {
        expect( validate( {
            category: 'foo',
        } ) ).to.equal( false )
    } )

    it( 'should fail when action is null or undefined', ( ) => {
        expect( validate( {
            category: 'foo',
            action: undefined,
        } ) ).to.equal( false )

        expect( validate( {
            category: 'foo',
            action: null,
        } ) ).to.equal( false )
    } )

    it( 'should fail when value is not an integer', () => {
        expect( validate( {
            category: 'foo',
            action: 'bar',
            value: 'baz',
        } ) ).to.equal( false )
    } )

    it( 'should succeed otherwise', () => {
        expect( validate( {
            category: 'foo',
            action: 'bar',
            value: 1,
        } ) ).to.equal( true )
    } )
} )
