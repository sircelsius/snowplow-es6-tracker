import immu from 'immu'
import { DEFAULT_OPTIONS } from './options'
import track from './../../service/trackingService'

export const TRACKER_CLASS = Symbol( 'tracker' )

export class Tracker {
    constructor( name, host, options ) {
        this.name = immu( name )
        this.host = immu( host )
        this.options = immu( Object.assign( {}, DEFAULT_OPTIONS, options ) )
    }

    trackEvent( event ) {
        return track( this, event )
    }

    getClass() {
        return TRACKER_CLASS
    }

    getName() {
        return this.name
    }
}
