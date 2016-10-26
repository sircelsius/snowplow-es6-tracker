import Event from './index'

const EVENT = 'pv'

export default class PageView extends Event {
    constructor( title, contexts = [] ) {
        super()
        this.title = title
        this.contexts = contexts
    }

    toGetString() {
        const string = `stm=${ this.timestamp }&e=${ EVENT }`

        return Promise.resolve( string )
    }
}
