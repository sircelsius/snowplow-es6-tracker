import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use( chaiAsPromised )
chai.use( sinonChai )
const expect = chai.expect

describe( 'TrackingService', () => {
    let track
    let stub

    beforeEach( () => {
        // eslint-disable-next-line global-require
        const inject = require( 'inject!./../../../lib/service/trackingService' )

        stub = sinon.spy()

        track = inject( {
            'isomorphic-fetch': {
                fetch: stub,
            },
        } ).default
    } )

    it( 'Should be instanciated properly', () => {
        const tracker = {
            options: {
                post: true,
            },
            host: 'foo',
        }

        const event = {
            // eslint-disable-next-line arrow-body-style
            toPostBody: () => {
                return {
                    e: 'yeepee',
                }
            },
        }

        track( event, tracker )

        expect( stub ).to.have.been.calledWith( 'foo/tp2', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application.json',
            },
            body: JSON.stringify( {
                e: 'yeepee',
            } ),
        } )
    } )
} )
