import fetch from './_';
// import {uncache} from './search';

export default (word, flag) => {
  // if (flag & 4) {
  //   uncache(word);
  // }
  return fetch(`/app/v1/reflag/${encodeURIComponent(word)}/${flag}`);
};
