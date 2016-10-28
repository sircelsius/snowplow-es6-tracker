import isInteger from 'lodash/isInteger'
import isNull from 'lodash/isNull'
import isUndefined from 'lodash/isUndefined'

const has = Object.prototype.hasOwnProperty

const category = ( structEvent ) => has.call( structEvent, 'category' )
    && !isNull( structEvent.category ) && !isUndefined( structEvent.action )

const action = ( structEvent ) => has.call( structEvent, 'action' )
    && !isNull( structEvent.action ) && !isUndefined( structEvent.action )

const label = () => true

const property = () => true

const value = ( structEvent ) => ( !has.call( structEvent, 'value' ) )
  || isInteger( structEvent.value )

export default ( structEvent ) =>
    !isUndefined( structEvent ) && category( structEvent ) && action( structEvent )
    && property() && label() && value( structEvent )
