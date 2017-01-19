/* istanbul ignore next */
import Dictionary from './model/dictionary'
import { Tracker } from './model/tracker'
import StructEvent from './model/event/structEvent'

// const startTimestamp = Date.now()

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
        // eslint-disable-next-line no-console
        console.error( error )
    } )

window.snowplow = d
