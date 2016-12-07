import { fetch } from 'isomorphic-fetch'

// eslint-disable-next-line arrow-body-style
const post = ( event, tracker ) => {
    return fetch( `${ tracker.host }/tp2`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application.json',
        },
        body: JSON.stringify( event.toPostBody() ),
    } )
}

const get = () => {}

const track = ( event, tracker ) =>
    ( tracker.options.post && post( event, tracker ) ) || get( event, tracker )

export default track
