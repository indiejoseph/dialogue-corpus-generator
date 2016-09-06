import intl from 'intl';
import IntlRelativeFormat from 'intl-relativeformat';

import { randomRange, randomPick, randomPickWithProb } from './utils' ;

export default class DatetimeGenerator {
  static ZH_TW = 'zh-Hant-HK';
  static EN_US = 'en-US';
  static langs = [DatetimeGenerator.ZH_TW, DatetimeGenerator.EN_US];
  static units = ['second', 'minute', 'hour', 'day', 'month', 'year'];
  static formats = {
    weekday: [
      'narrow', 'short', 'long'
    ],
    year: [
      'numeric', '2-digit'
    ],
    month: [
      'numeric', '2-digit', 'narrow', 'short', 'long'
    ],
    day: [
      'numeric', '2-digit'
    ],
    hour: [
      'numeric', '2-digit'
    ],
    minute: [
      'numeric', '2-digit'
    ],
    second: [
      'numeric', '2-digit'
    ]
  };

  constructor (lang) {
    if (!lang) {
      lang = randomPickWithProb(DatetimeGenerator.langs);
    }
    const Formatter = randomPick([
      IntlRelativeFormat,
      intl.DateTimeFormat
    ]);
    const options = {};

    if (Formatter === IntlRelativeFormat) {
      // COmpose random option for RelativeFormat
      options.units = randomPick(DatetimeGenerator.units);
    } else if (Formatter === intl.DateTimeFormat) {
      // Compose random option for DateTimeFormat
      const formatLen = Object.keys(DatetimeGenerator.formats).length - 1;
      const offset = randomRange(formatLen);
      const length = randomRange(formatLen - offset);

      for (let i = offset; i <= offset + length; i++) {
        let key = Object.keys(DatetimeGenerator.formats)[i];
        options[key] = randomPick(DatetimeGenerator.formats[key]);
      }
    }

    this.formatter = new Formatter(lang, options);
    this.lang = lang;
  }

  generate (dateTime) {
    if (!dateTime) {
      dateTime = new Date();
    }
    return this.formatter.format(dateTime);
  }
}
