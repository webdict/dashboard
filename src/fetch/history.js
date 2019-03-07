import fetch from './_';
import { tagsOf } from '../data/wordlist';
import strftime, { longFormat, shortFormat } from 'hife/strftime';
export default ({ page, flag, order, operator, other, word, size = 10 }) =>
  fetch(
    `/app/v1/history/${page}/${size}/${flag}/${other}/${operator}/${order}?word=${encodeURIComponent(
      word || ''
    )}`
  ).then(({ total, data }) => ({
    total,
    data: data.map(([word, info, _flag, freq, time]) => ({
      rowid: word,
      word,
      info,
      freq,
      flag: _flag,
      loading: 0,
      time: strftime(time * 1000, (data, pad) => ({
        short: shortFormat(data, pad),
        long: longFormat(data, pad)
      })),
      tags: tagsOf(_flag & flag)
    }))
  }));
