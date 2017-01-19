import isUndefined from 'lodash/isUndefined'
import isEmpty from 'lodash/isEmpty'
import Event from './index'
import {
    PARAMETER_EVENT,
    PARAMETER_TITLE,
    PARAMETER_CONTEXTS,
} from './constants'

const EVENT = 'pv'

const has = Object.prototype.hasOwnProperty

export default class PageView extends Event {
    constructor( tracker, title, contexts = [] ) {
        super( tracker )
        this.title = title
        this.contexts = contexts
    }

    toGetString() {
        return super.toGetString()
            .then( origin => {
                let res = `${ origin }&${ PARAMETER_EVENT }=${ EVENT }`
                if ( !isUndefined( this.title ) ) {
                    res += `&${ PARAMETER_TITLE }=${ this.title }`
                }
                if ( !isEmpty( this.contexts ) ) {
                    res += `&${ PARAMETER_CONTEXTS }=${ this.contexts }`
                }
                return res
            } )
    }

    toPostBody() {
        const body = {
            [ PARAMETER_EVENT ]: EVENT,
        }

        // eslint-disable-next-line no-unused-expressions
        has.call( this, 'title' ) && this.title && Object.assign( body, body, {
            [ PARAMETER_TITLE ]: this.title,
        } )

        // eslint-disable-next-line no-unused-expressions
        has.call( this, 'contexts' ) && this.contexts
            && !isEmpty( this.context ) && Object.assign( body, body, {
                [ PARAMETER_CONTEXTS ]: this.contexts,
            } )

        return super.toPostBody()
        // eslint-disable-next-line arrow-body-style
            .then( base => {
                return {
                    ...base,
                    ...body,
                }
            } )
    }
}
