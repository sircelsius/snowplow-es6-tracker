import {
  Dictionary,
  Tracker,
  StructEvent,
} from './../lib/'

const d = new Dictionary()
const t = new Tracker( 'testTracker', '', {
    appId: 'web',
    post: true,
} )

d.newTracker( t )
    .then( dict => {
        const event = new StructEvent( t, 'test-category' )
        return Promise.all( [ dict.getTracker( 'testTracker' )
            .then( tracker => tracker.trackEvent( event ) ),
            dict.track() ] )
    } )
    .catch( error => {
        /* istanbul ignore next */
        // eslint-disable-next-line no-console
        console.error( error )
    } )

window.snowplow = d