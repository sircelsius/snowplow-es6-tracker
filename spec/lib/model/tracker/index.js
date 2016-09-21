import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import fetchMock from 'fetch-mock'
import { Tracker } from './../../../../lib/model/tracker'

chai.use( chaiAsPromised )
const expect = chai.expect

describe( 'Tracker', () => {
    before( () => {
        fetchMock.get( 'foo.bar', { hello: 'world' } )
    } )

    it( 'Should be instanciated properly', () => {
        const t = new Tracker( 'tracker', 'foo.bar', { appId: 'baz' } )
        expect( t ).to.have.all.keys( 'name', 'host', 'options' )
    } )

    it( 'Should trigger fetch', () => {
        const t = new Tracker( 'tracker', 'foo.bar', { appId: 'baz' } )
        
        expect( t.trackPageView() ).to.be.eventually.deep.equal( { hello: 'world' } )
    } )
} )