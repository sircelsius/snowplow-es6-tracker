import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import StructEvent from './../../../../lib/model/event/structEvent'

chai.use( chaiAsPromised )
const expect = chai.expect

/* eslint-disable no-unused-expressions */
describe( 'StructEvent', () => {
    it( 'should be initialized', () => {
        const e = new StructEvent( {}, 'category', [ 'context' ] )

        expect( e.timestamp ).to.be.defined
        expect( e.category ).to.equal( 'category' )
    } )

    it( 'should produce a valid GET string', ( done ) => {
        const e = new StructEvent( {
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

    it( 'should produce a valid POST body', ( done ) => {
        const e = new StructEvent( {}, 'category', 'action', 'label', 'property', 'value' )

        expect( e.toPostBody() ).to.eventually.deep.equal( {
            data: {
                e: 'se',
                se_ca: 'category',
                se_ac: 'action',
                se_la: 'label',
                se_pr: 'property',
                se_va: 'value',
            },
        } )
            .and.notify( done )
    } )
} )
/* eslint-enable no-unused-expressions */
