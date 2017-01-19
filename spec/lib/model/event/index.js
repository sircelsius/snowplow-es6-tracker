import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import Event from './../../../../lib/model/event'
import { version } from './../../../../package.json'

chai.use( chaiAsPromised )
const expect = chai.expect

describe( 'Event', () => {
    it( 'should have a timestamp', () => {
        const e = new Event()

        // eslint-disable-next-line no-unused-expressions
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

    it( 'should fail to produce a POST body', ( done ) => {
        const e = new Event( {
            name: 'foo',
            options: {
                appId: 'bar',
                platform: 'baz',
            },
        } )

        expect( e.toPostBody() ).to
            .eventually.deep.equal( {
                tna: 'foo',
                aid: 'bar',
                p: 'baz',
                stm: e.timestamp,
                tv: `es6-${ version }`,
            } )
            .and.notify( done )
    } )
} )
