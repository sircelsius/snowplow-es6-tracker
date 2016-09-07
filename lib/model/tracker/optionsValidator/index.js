import { isNull, isString, isBoolean, isFunction, isInteger, isObject } from 'lodash/lang'
import { DEFAULT_FINGERPRINT_SEED, DEFAULT_BUFFER_SIZE } from '../options'

const has = Object.prototype.hasOwnProperty

const appId = ( options ) => isObject( options ) && has.call( options, 'appId' )
    && isString( options.appId )

const platform = ( options ) => isObject( options ) && has.call( options, 'platform' )
    && isString( options.platform )

/**
 * @param  {object} the options
 * @return {boolean} whether or not the cookieDomain is valid
 */
const cookieDomain = ( options ) => isObject( options ) && ( !has.call( options, 'cookieDomain' )
    || ( has.call( options, 'cookieDomain' )
    && ( isString( options.cookieDomain ) || isNull( options.cookieDomain ) ) ) )

const cookieName = ( options ) => isObject( options ) && has.call( options, 'cookieName' )
    && ( isString( options.cookieName ) )

const encodeBase64 = ( options ) => isObject( options ) && has.call( options, 'encodeBase64' )
    && isBoolean( options.encodeBase64 )

const respectDoNotTrack = ( options ) => isObject( options )
    && has.call( options, 'respectDoNotTrack' ) && isBoolean( options.respectDoNotTrack )

const userFingerprint = ( options ) => isObject( options )
    && has.call( options, 'userFingerprint' ) && isBoolean( options.userFingerprint )

const userFingerprintSeed = ( options ) => isObject( options )
    && has.call( options, 'userFingerprintSeed' )
    && ( options.userFingerprintSeed === DEFAULT_FINGERPRINT_SEED
    || isFunction( options.userFingerprintSeed ) )

const pageUnloadTimer = ( options ) => isObject( options ) && has.call( options, 'pageUnloadTimer' )
    && isInteger( options.pageUnloadTimer )

const forceSecureTracker = ( options ) => isObject( options )
    && has.call( options, 'forceSecureTracker' ) && isBoolean( options.forceSecureTracker )

const forceUnsecureTracker = ( options ) => isObject( options )
    && has.call( options, 'forceUnsecureTracker' ) && isBoolean( options.forceUnsecureTracker )

const sessionCookieTimeout = ( options ) => isObject( options )
    && has.call( options, 'sessionCookieTimeout' ) && isInteger( options.sessionCookieTimeout )

const localStorage = ( options ) => isObject( options ) && has.call( options, 'localStorage' )
    && isBoolean( options.localStorage )

const contexts = ( options ) => isObject( options ) && has.call( options, 'contexts' )
    && isObject( options.contexts )

const post = ( options ) => isObject( options ) && has.call( options, 'post' )
    && isBoolean( options.post )

const bufferSize = ( options ) => ( post( options ) && options.post
    && has.call( options, 'bufferSize' ) && isInteger( options.bufferSize ) )
    || ( post( options ) && !post.options
    && has.call( options, 'bufferSize' ) && options.bufferSize === DEFAULT_BUFFER_SIZE )

const useCookies = ( options ) => isObject( options ) && has.call( options, 'useCookies' )
    && isBoolean( options.useCookies )

const crossDomainLinker = ( options ) => isObject( options )
    && has.call( options, 'crossDomainLinker' ) && isFunction( options.crossDomainLinker )

const maxPostBytes = ( options ) => isObject( options ) && has.call( options, 'maxPostBytes' )
    && isInteger( options.maxPostBytes )

const discoverRootDomain = ( options ) => isObject( options )
    && has.call( options, 'discoverRootDomain' ) && isBoolean( options.discoverRootDomain )

const getInvalid = ( options ) => {
    return {
        appId: appId( options ),
        platform: platform( options ),
        cookieDomain: cookieDomain( options ),
        cookieName: cookieName( options ),
        encodeBase64: encodeBase64( options ),
        respectDoNotTrack: respectDoNotTrack( options ),
        userFingerprint: userFingerprint( options ),
        userFingerprintSeed: userFingerprintSeed( options ),
        pageUnloadTimer: pageUnloadTimer( options ),
        forceSecureTracker: forceSecureTracker( options ),
        forceUnsecureTracker: forceUnsecureTracker( options ),
        sessionCookieTimeout: sessionCookieTimeout( options ),
        localStorage: localStorage( options ),
        contexts: contexts( options ),
        post: post( options ),
        bufferSize: bufferSize( options ),
        useCookies: useCookies( options ),
        crossDomainLinker: crossDomainLinker( options ),
        maxPostBytes: maxPostBytes( options ),
        discoverRootDomain: discoverRootDomain( options ),
    }
}

export default ( options ) => {
    const entries = function* entries( obj ) {
        for ( const key of Object.keys( obj ) ) {
            yield [ key, obj[ key ] ]
        }
    }

    for ( const [ key, value ] of entries( getInvalid( options ) ) ) {
        if ( value === false ) {
            return key
        }
    }

    return true
}
