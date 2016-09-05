import { isNull, isString, isBoolean, isFunction, isInteger, isObject } from 'lodash/lang'
import { DEFAULT_FINGERPRINT_SEED } from '../options'

const has = Object.prototype.hasOwnProperty

const appId = ( options ) => isObject( options ) && has.call( options, 'appId' )
    && isString( options.appId )

const platform = ( options ) => isObject( options ) && has.call( options, 'platform' )
    && isString( options.platform )

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

const bufferSize = ( options ) => ( post( options ) && has.call( options, 'bufferSize' )
    && isInteger( options.bufferSize ) )
    || ( !post( options ) && has.call( options, 'bufferSize' ) && options.bufferSize === 1 )

const useCookies = ( options ) => isObject( options ) && has.call( options, 'useCookies' )
    && isBoolean( options.useCookies )

const crossDomainLinker = ( options ) => isObject( options )
    && has.call( options, 'crossDomainLinker' ) && isFunction( options.crossDomainLinker )

const maxPostBytes = ( options ) => isObject( options ) && has.call( options, 'maxPostBytes' )
    && isFunction( options.maxPostBytes )

const discoverRootDomain = ( options ) => isObject( options )
    && has.call( options, 'discoverRootDomain' ) && isBoolean( options.discoverRootDomain )

export default ( options ) => appId( options ) && platform( options )
    && cookieDomain( options ) && cookieName( options ) && encodeBase64( options )
    && respectDoNotTrack( options ) && userFingerprint( options ) && userFingerprintSeed( options )
    && pageUnloadTimer( options ) && forceSecureTracker( options )
    && forceUnsecureTracker( options ) && sessionCookieTimeout( options ) && localStorage( options )
    && contexts( options ) && post( options ) && bufferSize( options ) && useCookies( options )
    && crossDomainLinker( options ) && maxPostBytes( options ) && discoverRootDomain( options )
