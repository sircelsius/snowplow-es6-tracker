import immu from 'immu'
import { TRACKER_CLASS } from './../tracker'

let instance = null

const has = Object.prototype.hasOwnProperty

export default class TrackerDictionary {
    constructor() {
        if ( !instance ) {
            instance = this
        }

        // Timestamp of creation
        this.ts = immu( new Date() )

        this.dictionary = {}

        return instance
    }

    newTracker( tracker ) {
        return new Promise( ( resolve, reject ) => {
            if ( !tracker || !tracker.getClass() === TRACKER_CLASS ) {
                reject( 'Invalid parameter' )
            }

            if ( has.call( this.dictionary, tracker.getName() ) ) {
                reject( 'Tracker exists' )
            }

            Object.assign( this.dictionary, this.dictionary, { [ tracker.getName() ]: tracker } )

            resolve( this )
        } )
    }
}
