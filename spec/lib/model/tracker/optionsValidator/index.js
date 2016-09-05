import chai from 'chai'
import validateOptions from './../../../../../lib/model/tracker/optionsValidator'
import { DEFAULT_OPTIONS } from './../../../../../lib/model/tracker/options'

const expect = chai.expect

describe("OptionValidator", () => {
    it('should fail on empty object', () => {
        expect(validateOptions({})).to.be.false;
    });

    it('should fail on default options', () => {
        expect(validateOptions(DEFAULT_OPTIONS)).to.be.false
    })
});