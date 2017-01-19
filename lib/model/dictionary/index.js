import immu from 'immu'
import isUndefined from 'lodash/isUndefined'
import { TRACKER_CLASS } from './../tracker'
import PageView from './../event/pageView'

let instance = null

const trackOne = ( tracker, event ) => {
    const realEvent = isUndefined( event ) ? new PageView( tracker ) : event
    return tracker.trackEvent( realEvent )
}

export default class TrackerDictionary {
    constructor() {
        if ( !instance ) {
            instance = this
        }

        // Timestamp of creation
        this.ts = immu( new Date() )

        this.dictionary = new Map()

        return instance
    }

    newTracker( tracker ) {
        if ( !tracker || !tracker.getClass() === TRACKER_CLASS ) {
            return Promise.reject( 'Invalid parameter' )
        }

        if ( this.dictionary.get( tracker.getName() ) !== undefined ) {
            return Promise.reject( 'Tracker exists' )
        }

        this.dictionary.set( tracker.getName(), tracker )

        return Promise.resolve( this )
    }

    getTracker( trackerName ) {
        if ( this.dictionary.get( trackerName ) !== undefined ) {
            return Promise.resolve( this.dictionary.get( trackerName ) )
        }

        return Promise.reject( 'Tracker not found' )
    }

    track( event ) {
        const promises = []
        // eslint-disable-next-line prefer-const
        for ( let tracker of this.dictionary.values() ) {
            promises.push( trackOne( tracker, event ) )
        }

        return Promise.all( promises )
            .then( () => this )
    }
}
