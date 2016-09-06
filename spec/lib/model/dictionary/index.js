import chai from 'chai'
import TrackerDictionary from './../../../../lib/model/dictionary'

const expect = chai.expect

describe('TrackerDictionary', () => {
	it('should be a singleton', () => {
		const d1 = new TrackerDictionary()
		const d2 = new TrackerDictionary()

		expect(d1).to.equal(d2)
		expect(d1._ts).to.equal(d2._ts)
	})
})