import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import Event from './../../../../lib/model/event'

chai.use( chaiAsPromised )
const expect = chai.expect

describe( 'Event', () => {
    it( 'should have a timestamp', () => {
        const e = new Event()

        expect( e.timestamp ).to.be.defined
    } )

    it( 'should fail to produce GET string', ( done ) => {
        const e = new Event( {
            name: 'foo',
            options: {
                appId: 'bar',
                platform: 'baz',
            },
        } )

        expect( e.toGetString() ).to
            .eventually.equal( `tna=foo&aid=bar&p=baz&stm=${ e.timestamp }` )
            .and.notify( done )
    } )

    it( 'should fail to produce a POST body', () => {
        const e = new Event()

        return e.toPostBody().should.be.rejectedWith( 'toPostBody not implemented' )
    } )
} )
