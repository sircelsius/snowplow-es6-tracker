import fetch from 'isomorphic-fetch'

const PAYLOAD_DATA_SCHEMA = 'iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-3'

const postPayload = ( tracker, payload ) => fetch( `${ tracker.host }/tp2`, {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application.json',
    },
    body: JSON.stringify( payload ),
} )

// eslint-disable-next-line arrow-body-style
const post = ( tracker, ...events ) => {
    const promises = events.map( event => event.toPostBody() )
    return Promise.all( promises )
        .then( eventBodies => {
            const payload = {
                schema: PAYLOAD_DATA_SCHEMA,
                data: eventBodies,
            }
            return postPayload( tracker, payload )
        } )
}

const get = () => {}

const track = ( tracker, ...events ) =>
    ( tracker.options.post && post( tracker, ...events ) ) || get( event, tracker )

export default track
