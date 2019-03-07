export function tagsOf(flag) {
  function arrayOf(array, flag) {
    return array.filter((_, i) => flag & (1 << i));
  }
  return flag >> 3
    ? arrayOf(flag & 1 ? zhlist : enlist, flag >> 3).slice(0, 1)
    : [{ short: '其他', long: '不属任何词表' }];
}

// length: 11
export const zhlist = [
  {
    short: 'HSK 1',
    long: '汉语水平考试一级'
  },
  {
    short: 'HSK 2',
    long: '汉语水平考试二级'
  },
  {
    short: 'HSK 3',
    long: '汉语水平考试三级'
  },
  {
    short: 'HSK 4',
    long: '汉语水平考试四级'
  },
  {
    short: 'HSK 5',
    long: '汉语水平考试五级'
  },
  {
    short: 'HSK 6',
    long: '汉语水平考试六级'
  },
  {
    short: '通用一级',
    long: '通用规范汉字一级'
  },
  {
    short: '通用二级',
    long: '通用规范汉字二级'
  },
  {
    short: '通用三级',
    long: '通用规范汉字三级'
  },
  {
    short: '台湾标准',
    long: '台湾常用标准字体'
  },
  {
    short: '香港标准',
    long: '香港常用字字形表'
  }
];
// length: 12
export const enlist = [
  {
    short: '牛津',
    long: '牛津'
  },
  {
    short: '朗文',
    long: '朗文'
  },
  {
    short: '韦氏',
    long: '韦氏'
  },
  {
    short: '中考',
    long: '中考'
  },
  {
    short: '高考',
    long: '高考'
  },
  {
    short: '四级',
    long: '四级'
  },
  {
    short: '六级',
    long: '六级'
  },
  {
    short: '考研',
    long: '考研'
  },
  {
    short: '专四',
    long: '专四'
  },
  {
    short: '专六',
    long: '专六'
  },
  {
    short: '雅思',
    long: '雅思'
  },
  {
    short: '托福',
    long: '托福'
  }
];
