import {
    PARAMETER_TRACKER_NAME,
    PARAMETER_APP_ID,
    PARAMETER_PLATFORM,
    PARAMETER_DEVICE_CREATED_TIMESTAMP,
} from './constants'
import concatenate from './../../service/stringUtils'

export default class Event {
    constructor( tracker ) {
        this.timestamp = Date.now()
        this.tracker = tracker
    }

    toGetString() {
        return Promise.resolve(
            concatenate( `${ PARAMETER_TRACKER_NAME }=${ this.tracker.name }`,
                `&${ PARAMETER_APP_ID }=${ this.tracker.options.appId }`,
                `&${ PARAMETER_PLATFORM }=${ this.tracker.options.platform }`,
                `&${ PARAMETER_DEVICE_CREATED_TIMESTAMP }=${ this.timestamp }`
            )
        )
    }

    toPostBody() {
        return Promise.reject( 'toPostBody not implemented' )
    }
}
