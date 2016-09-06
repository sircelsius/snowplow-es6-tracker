let _instance = null

export default class TrackerDictionary {
    constructor() {
        if(!_instance) {
        	_instance = this
        }

        // Timestamp of creation
        this._ts = new Date()

        return _instance
	}
}
