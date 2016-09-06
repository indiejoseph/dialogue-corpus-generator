import fs from 'fs';
import path from 'path';

import { randomPickWithProb, randomPick } from './utils';

export default class NameGenerator {
  static ZH_TW = 'zh-Hant-HK';
  static EN_US = 'en-US';
  static langs = [NameGenerator.ZH_TW, NameGenerator.EN_US];

  constructor (lang) {
    if (!lang) {
      lang = randomPickWithProb(NameGenerator.langs);
    }

    this.lang = lang;
    const langCode = this.lang.split('-').shift();
    this.givenNames = this._getListByFile(`../../data/givennames.${ langCode }.txt`);
    this.surnames = this._getListByFile(`../../data/surnames.${ langCode }.txt`);
  }

  generate () {
    const givenName = randomPick(this.givenNames);
    const surname = randomPickWithProb(this.surnames);

    if (this.lang === NameGenerator.ZH_TW) {
      return surname + givenName;
    }

    return `${ givenName } ${ surname }`;
  }

  _getListByFile (file) {
    return fs
      .readFileSync(path.join(__dirname, file), 'utf-8')
      .split('\n')
      .filter(line => line.length);
  }
}
