import Event from './index'

const EVENT = 'pv'

export default class PageView extends Event {
    constructor( title, contexts = [] ) {
        super()
        this.title = title
        this.contexts = contexts
    }

    toGetString() {
        const object = {
            stm: this.timestamp,
            e: EVENT,
            url: document.URL,
            page: this.title || document.title,
            refr: document.referrer,
        }

        return Promise.resolve(object)
    }
}
