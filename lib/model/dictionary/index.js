import immu from 'immu'

let instance = null

export default class TrackerDictionary {
    constructor() {
        if ( !instance ) {
            instance = this
        }

        // Timestamp of creation
        this.ts = immu( new Date() )

        return instance
    }

    newTracker() {}
}
