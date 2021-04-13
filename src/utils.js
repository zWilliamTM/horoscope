const zodiac = {
  Aquarius: year => [`${year}/1/20`, `${year}/2/18`],
  Pisces: year => [`${year}/2/19`, `${year}/3/20`],
  Aries: year => [`${year}/3/21`, `${year}/4/19`],
  Taurus: year => [`${year}/4/20`, `${year}/5/20`],
  Gemini: year => [`${year}/5/21`, `${year}/6/20`],
  Cancer: year => [`${year}/6/21`, `${year}/7/22`],
  Leo: year => [`${year}/7/23`, `${year}/8/22`],
  Virgo: year => [`${year}/8/23`, `${year}/9/22`],
  Libra: year => [`${year}/9/23`, `${year}/10/22`],
  Scorpio: year => [`${year}/10/23`, `${year}/11/21`],
  Sagittarius: year => [`${year}/11/22`, `${year}/12/21`],
  Capricorn: year => [`${year}/12/22`, `${year + 1}/1/19`],
};

export const toMeDate = date =>
  new Date(date.getYear(), date.getMonth(), date.getDay());

export const inRange = (m, [b, e]) => b <= m && m <= e;

export const toDate = arr => arr.map(x => new Date(x));

export const sayZodiac = date => {
  // yyyy/mm/dd: string || Date sin hh:mm:ss
  let sign = '';
  Object.keys(zodiac).map(k => {
    const middle = date
    const year = new Date(date)
    const z = zodiac[k](year.getFullYear());
    const [begin, end] = toDate(z);
    if (inRange(middle, [begin, end])) sign = k;
  });
  return sign;
};
