import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use( chaiAsPromised )
chai.use( sinonChai )
const expect = chai.expect

describe( 'Tracker', () => {
    let Tracker
    let stub

    beforeEach( () => {
        // eslint-disable-next-line global-require
        const inject = require( 'inject!./../../../../lib/model/tracker' )

        stub = sinon.spy()

        Tracker = inject( {
            './../../service/trackingService': {
                track: stub,
            },
        } ).Tracker
    } )

    it( 'Should be instanciated properly', () => {
        const t = new Tracker( 'tracker', 'foo.bar', { appId: 'baz' } )
        expect( t ).to.have.all.keys( 'name', 'host', 'options' )
    } )

    it( 'Should trigger fetch', () => {
        const t = new Tracker( 'tracker', 'foo.bar', { appId: 'baz' } )

        const event = {}

        t.trackEvent( event )
        expect( stub ).to.have.been.calledWith( event, t )
    } )

    it( 'Should not have a cross-domain linker', () => {
        const t = new Tracker( 'tracker', 'foo.bar', { appId: 'baz' } )

        expect( t.options.crossDomainLinker() ).to.equal( false )
    } )
} )
