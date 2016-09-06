import immu from 'immu'
import { DEFAULT_OPTIONS } from './options'

export default class Tracker {
    constructor( name, host, options ) {
        this.name = immu( name )
        this.host = immu( host )
        this.options = immu( Object.assign( {}, options, DEFAULT_OPTIONS ) )
    }

    trackPageView( customTitle, contexts, dynamicContexts ) {}
}
