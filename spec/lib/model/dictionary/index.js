import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import TrackerDictionary from './../../../../lib/model/dictionary'
import { Tracker } from './../../../../lib/model/tracker'

chai.use( chaiAsPromised )
const expect = chai.expect

describe( 'TrackerDictionary', () => {
    it( 'should be a singleton', () => {
        const d1 = new TrackerDictionary()
        const d2 = new TrackerDictionary()

        expect( d1 ).to.equal( d2 )
        expect( d1.ts ).to.equal( d2.ts )
    } )

    it( 'should only be able to register trackers', ( done ) => {
        const d = new TrackerDictionary()
        const t = new Tracker( 'tracker', 'foo.bar', { appId: 'baz' } )

        expect( d.newTracker( t ) ).to.eventually.be.fulfilled
            .and.notify( done )
    } )

    it( 'should fail to register tracker when parameter is missing ', ( done ) => {
        const d = new TrackerDictionary()

        expect( d.newTracker() ).to.eventually.be.rejectedWith( 'Invalid parameter' )
            .and.notify( done )
    } )

    it( 'should fail to register already existing tracker', ( done ) => {
        const d = new TrackerDictionary()
        const t = new Tracker( 'tracker', 'foo.bar', { appId: 'baz' } )

        expect( d.newTracker( t ).then( d1 => d1.newTracker( t ) ) )
            .to.eventually.be.rejectedWith( 'Tracker exists' )
            .and.notify( done )
    } )

    it( 'should be able to get existing trackers', ( done ) => {
        const d = new TrackerDictionary()
        const t = new Tracker( 'tracker2', 'foo.bar', { appId: 'baz' } )

        expect( d.newTracker( t ).then( d1 => d1.getTracker( t.getName() ) ) )
            .to.eventually.equal( t )
            .and.notify( done )
    } )

    it( 'should not be able to get non existing trackers', ( done ) => {
        const d = new TrackerDictionary()

        expect( d.getTracker( 'foo' ) )
            .to.eventually.be.rejectedWith( 'Tracker not found' )
            .and.notify( done )
    } )
} )
