import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { Tracker } from './../../../../lib/model/tracker'

chai.use( chaiAsPromised )
const expect = chai.expect

describe( 'Tracker', () => {
    it( 'Should be instanciated properly', () => {
        const t = new Tracker( 'tracker', 'foo.bar', { appId: 'baz' } )
        expect( t ).to.have.all.keys( 'name', 'host', 'options' )
    } )

    it( 'Should trigger fetch', () => {
        const t = new Tracker( 'tracker', 'foo.bar', { appId: 'baz' } )

        // expect( t.trackEvent() ).to.eventually.deep.equal( { hello: 'world' } )
    } )
} )
