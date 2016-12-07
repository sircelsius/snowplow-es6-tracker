import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import PageView from './../../../../lib/model/event/pageView'

chai.use( chaiAsPromised )
const expect = chai.expect

/* eslint-disable no-unused-expressions */
describe( 'PageView', () => {
    it( 'should be initialized', () => {
        const e = new PageView( {}, 'title', [ 'context' ] )

        expect( e.timestamp ).to.be.defined
        expect( e.title ).to.equal( 'title' )
    } )

    it( 'should produce a valid GET string', ( done ) => {
        const e = new PageView( {
            name: 'foo',
            options: {
                appId: 'bar',
                platform: 'baz',
            },
        } )

        expect( e.toGetString() ).to
            .eventually.equal( `tna=foo&aid=bar&p=baz&stm=${ e.timestamp }&e=pv` )
            .and.notify( done )
    } )

    it( 'should produce a valid GET string', ( done ) => {
        const e = new PageView( {
            name: 'foo',
            options: {
                appId: 'bar',
                platform: 'baz',
            },
        },
        'foo',
        [ 'bar' ]
        )

        expect( e.toGetString() ).to
            .eventually.equal( `tna=foo&aid=bar&p=baz&stm=${ e.timestamp }&e=pv&page=foo&co=bar` )
            .and.notify( done )
    } )

    it( 'should fail to produce a POST body', ( done ) => {
        const e = new PageView()

        expect( e.toPostBody() ).to.be.rejectedWith( 'toPostBody not implemented' )
            .and.notify( done )
    } )
} )
/* eslint-enable no-unused-expressions */
