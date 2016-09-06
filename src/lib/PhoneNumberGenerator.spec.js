import 'should';

import PhoneNumberGenerator from './PhoneNumberGenerator';

describe('lib', () => {
  describe('PhoneNumberGenerator', () => {
    let png;

    before(() => {
      png = new PhoneNumberGenerator();
    });

    it('should get some properties', () => {
      png.should.has.property('countryCode');
    });

    it('should get a list of random numbers', () => {
      const list = png._randomListOfNum(6);
      list.length.should.be.eql(6);
      list.every(n => n >= 0 && n <= 9).should.be.true();
    });

    it('should generate a phone number', () => {
      const num = png.generate();
      /(\+)?(852)?(\-)?[2356789][0-9]{7}/.test(num).should.be.true();
    });
  });
});
