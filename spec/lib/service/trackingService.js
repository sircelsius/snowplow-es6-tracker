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
            'isomorphic-fetch': stub,
        } ).default
    } )

    it( 'Should be instanciated properly', ( done ) => {
        const tracker = {
            options: {
                post: true,
            },
            host: 'foo',
        }

        const event = {
            // eslint-disable-next-line arrow-body-style
            toPostBody: () => Promise.resolve( {
                e: 'yeepee',
            } ),
        }

        track( tracker, event )
            .then( () => {
                expect( stub ).calledWith( 'foo/tp2', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application.json',
                    },
                    body: JSON.stringify( {
                        schema: 'iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-3',
                        data: [
                            {
                                e: 'yeepee',
                            },
                        ],
                    } ),
                } )
                done()
            } )
    } )
} )
