const DEFAULT_PLATFORM = 'web'

const DEFAULT_COOKIE_NAME = 'sp'

const DEFAULT_ENCODE_BASE_64 = true

const DEFAULT_DO_NOT_TRACK = false

const DEFAULT_FINGERPRINT = true

export const DEFAULT_FINGERPRINT_SEED = 123412414

const DEFAULT_PAGE_UNLOAD_TIMER = 500

const DEFAULT_FORCE_SECURE_TRACKER = false

const DEFAULT_FORCE_UNSECURE_TRACKER = false

const DEFAULT_SESSION_COOKIE_TIMEOUT = 1300

const DEFAULT_LOCAL_STORAGE = true

const DEFAULT_CONTEXTS = []

const DEFAULT_POST = false

const DEFAULT_CROSS_DOMAIN_LINKER = () => false

const DEFAULT_USE_COOKIES = true

const DEFAULT_POST_BYTES = 40000

export const DEFAULT_BUFFER_SIZE = 1

const DEFAULT_DISCOVER_ROOT_DOMAIN = false

export const DEFAULT_OPTIONS = {
    platform: DEFAULT_PLATFORM,
    cookieName: DEFAULT_COOKIE_NAME,
    encodeBase64: DEFAULT_ENCODE_BASE_64,
    respectDoNotTrack: DEFAULT_DO_NOT_TRACK,
    userFingerprint: DEFAULT_FINGERPRINT,
    userFingerprintSeed: DEFAULT_FINGERPRINT_SEED,
    pageUnloadTimer: DEFAULT_PAGE_UNLOAD_TIMER,
    forceSecureTracker: DEFAULT_FORCE_SECURE_TRACKER,
    forceUnsecureTracker: DEFAULT_FORCE_UNSECURE_TRACKER,
    sessionCookieTimeout: DEFAULT_SESSION_COOKIE_TIMEOUT,
    localStorage: DEFAULT_LOCAL_STORAGE,
    contexts: DEFAULT_CONTEXTS,
    post: DEFAULT_POST,
    bufferSize: DEFAULT_BUFFER_SIZE,
    crossDomainLinker: DEFAULT_CROSS_DOMAIN_LINKER,
    useCookies: DEFAULT_USE_COOKIES,
    maxPostBytes: DEFAULT_POST_BYTES,
    discoverRootDomain: DEFAULT_DISCOVER_ROOT_DOMAIN,
}
