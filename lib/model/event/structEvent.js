import Event from './index'

const EVENT = 'se'
const CATEGORY_KEY = 'se_ca'
const ACTION_KEY = 'se_ac'
const LABEL_KEY = 'se_la'
const PROPERTY_KEY = 'se_pr'
const VALUE_KEY = 'se_va'

const has = Object.prototype.hasOwnProperty

export default class StructEvent extends Event {
    constructor( category, action, label, property, value, contexts = [] ) {
        super()
        this.category = category
        this.action = action
        this.label = label
        this.property = property
        this.value = value
        this.contexts = contexts
    }

    toPostBody() {
        const body = {
            data: {
                e: EVENT,
                [ CATEGORY_KEY ]: this.category,
                [ ACTION_KEY ]: this.action,
            },
        }

        // eslint-disable-next-line no-unused-expressions
        has.call( this, 'label' ) && this.label && Object.assign( body.data, body.data, {
            [ LABEL_KEY ]: this.label,
        } )

        // eslint-disable-next-line no-unused-expressions
        has.call( this, 'property' ) && this.property && Object.assign( body.data, body.data, {
            [ PROPERTY_KEY ]: this.property,
        } )

        // eslint-disable-next-line no-unused-expressions
        has.call( this, 'value' ) && this.value && Object.assign( body.data, body.data, {
            [ VALUE_KEY ]: this.value,
        } )

        return Promise.resolve( body )
    }
}
