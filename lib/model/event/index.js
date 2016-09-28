export default class Event {
    constructor() {
        this.timestamp = Date.now()
    }

    toGetString() {
        return Promise.reject( 'toGetString not implemented' )
    }

    toPostBody() {
        return Promise.reject( 'toPostBody not implemented' )
    }
}
