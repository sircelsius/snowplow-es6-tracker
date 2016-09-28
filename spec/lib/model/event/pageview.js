import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import PageView from './../../../../lib/model/event/pageView'

chai.use( chaiAsPromised )
const expect = chai.expect

describe( 'PageView', () => {
    it( 'should be initialized', () => {
        const e = new PageView( 'title', [ 'context' ] )

        expect( e.timestamp ).to.be.defined
        expect( e.title ).to.equal( 'title' )
    } )

    it( 'should fail to produce GET string', () => {
        const e = new PageView()

        e.toGetString()
        .then( res => {
            console.log( JSON.stringify( res ) )
        } )
        // return e.toGetString().should.be.rejectedWith( 'toGetString not implemented' )
    } )

    it( 'should fail to produce a POST body', () => {
        const e = new PageView()

        return e.toPostBody().should.be.rejectedWith( 'toPostBody not implemented' )
    } )
} )
