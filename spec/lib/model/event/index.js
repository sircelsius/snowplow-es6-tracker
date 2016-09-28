import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import Event from './../../../../lib/model/event'

chai.use( chaiAsPromised )
const expect = chai.expect

describe( 'Event', () => {
    it( 'should have a timestamp', () => {
        const e = new Event()

        expect( e ).to.have.key( 'timestamp' )
    } )

    it( 'should fail to produce GET string', () => {
        const e = new Event()

        return e.toGetString().should.be.rejectedWith( 'toGetString not implemented' )
    } )

    it( 'should fail to produce a POST body', () => {
        const e = new Event()

        return e.toPostBody().should.be.rejectedWith( 'toPostBody not implemented' )
    } )
} )
