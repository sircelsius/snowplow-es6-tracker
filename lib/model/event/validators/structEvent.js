import isInteger from 'lodash/isInteger'
import isNull from 'lodash/isNull'

const has = Object.prototype.hasOwnProperty

const category = ( structEvent ) => has.call( structEvent, 'category' )
    && !isNull( structEvent.category )

const action = ( structEvent ) => has.call( structEvent, 'action' )
    && !isNull( structEvent.action )

const label = () => true

const property = () => true

const value = ( structEvent ) => ( !has.call( structEvent, 'value' ) )
  || isInteger( structEvent.value )

export default ( structEvent ) =>
    category( structEvent ) && action( structEvent )
    && property() && label() && value( structEvent )
