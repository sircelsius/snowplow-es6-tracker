import immu from 'immu'
import fetch from 'isomorphic-fetch'
import { DEFAULT_OPTIONS } from './options'

export const TRACKER_CLASS = Symbol( 'tracker' )

export class Tracker {
    constructor( name, host, options ) {
        this.name = immu( name )
        this.host = immu( host )
        this.options = immu( Object.assign( {}, options, DEFAULT_OPTIONS ) )
    }

    trackPageView( customTitle, contexts, dynamicContexts ) {
        // TODO
        return fetch( this.host )
    }

    getClass() {
        return TRACKER_CLASS
    }

    getName() {
        return this.name
    }
}
