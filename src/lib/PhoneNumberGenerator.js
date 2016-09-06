import { randomPick } from './utils';

export default class PhoneNumberGenerator {
  static COUNTRY_CODE = '852';

  // https://en.wikipedia.org/wiki/Telephone_numbers_in_Hong_Kong
  static STARTING_NUM = [2, 3, 5, 6, 7, 8, 9];

  constructor () {
    this.countryCode = Math.random() >= 0.75 ? PhoneNumberGenerator.COUNTRY_CODE : '';
  }

  generate () {
    const starting = randomPick(PhoneNumberGenerator.STARTING_NUM);
    const number = starting + this._randomListOfNum(7).join('');
    const sign = Math.random() >= 0.75 ? '+' : '';
    const countryCode = this.countryCode ? sign + this.countryCode + '-' : '';
    return `${ countryCode }${ number }`;
  }

  _randomListOfNum (length) {
    return Array.apply(null, Array(length)).map(() => Math.floor(Math.random() * 10));
  }
}
