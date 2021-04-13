import {inRange, sayZodiac, toMeDate} from '../src/utils';

describe('Utilities', () => {
  it('inRange', () => {
    expect(inRange(1, [0, 3])).toEqual(true);
  });

  it('sayZodiac', () => {
    expect(sayZodiac(new Date('2021/12/22'))).toEqual('Capricorn');
    expect(sayZodiac(new Date('2021/2/18'))).toEqual('Aquarius');
    expect(sayZodiac(new Date('2021/3/20'))).toEqual('Pisces');
    expect(sayZodiac(new Date('2021/4/19'))).toEqual('Aries');
    expect(sayZodiac(new Date('2021/5/20'))).toEqual('Taurus');
    expect(sayZodiac(new Date('2021/6/20'))).toEqual('Gemini');
    expect(sayZodiac(new Date('2021/7/22'))).toEqual('Cancer');
    expect(sayZodiac(new Date('2021/8/22'))).toEqual('Leo');
    expect(sayZodiac(new Date('2021/9/22'))).toEqual('Virgo');
    expect(sayZodiac(new Date('2021/10/22'))).toEqual('Libra');
    expect(sayZodiac(new Date('2021/11/21'))).toEqual('Scorpio');
    expect(sayZodiac(new Date('2021/12/21'))).toEqual('Sagittarius');
  });
});
