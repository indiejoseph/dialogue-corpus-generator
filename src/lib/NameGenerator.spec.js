import 'should';

import NameGenerator from './NameGenerator';

describe('lib', () => {
  describe('NameGenerator', () => {
    let ng;

    before(() => {
      ng = new NameGenerator();
    });

    it('should get some properties', () => {
      ng.should.have.property('givenNames').which.is.a.Array();
      ng.should.have.property('surnames').which.is.a.Array();
    });

    it('should generate a English name', () => {
      ng = new NameGenerator(NameGenerator.EN_US);
      ng.generate().should.match(/[a-z]+\s[a-z]+/i);
    });

    it('should generate a Chinese name', () => {
      ng = new NameGenerator(NameGenerator.ZH_TW);
      ng.generate().should.match(/[\u4E00-\u9FCC]+/i);
    });
  });
});
