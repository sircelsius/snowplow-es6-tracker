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

    it( 'should only be able to register trackers', () => {
        const d = new TrackerDictionary()
        const t = new Tracker( 'tracker', 'foo.bar', { appId: 'baz' } )

        return d.newTracker( t ).should.be.fulfilled
    } )

    it( 'should fail to register tracker when parameter is missing ', () => {
        const d = new TrackerDictionary()

        return d.newTracker().should.be.rejectedWith( 'Invalid parameter' )
    } )

    it( 'should fail to register already existing tracker', () => {
        const d = new TrackerDictionary()
        const t = new Tracker( 'tracker', 'foo.bar', { appId: 'baz' } )

        return d.newTracker( t )
            .then( d1 => d1.newTracker( t ) )
            .should.be.rejectedWith( 'Tracker exists' )
    } )
} )
