import 'should';

import DatetimeGenerator from './DatetimeGenerator';

describe('lib', () => {
  describe('NameGenerator', () => {
    let ng;

    before(() => {
      ng = new DatetimeGenerator();
    });

    it('should get random date', () => {
      const result = ng.generate();
      console.log(result);
      result.should.not.be.empty();
    });
  });
});
