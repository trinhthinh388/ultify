import { curry } from './curry';

describe('curry', () => {
  it('Should work', () => {
    const fn = (a: number, b: number, c: number) => a + b + c;
    expect(curry(fn)).toBeInstanceOf(Function);
    expect(curry(fn, 1, 2, 3)()).toBe(6);
    expect(curry(fn, 1)(2, 3)).toBe(6);
    expect(curry(fn, 1)(2)(3)).toBe(6);

    // @ts-expect-error excess arguments
    expect(curry(fn, 1)(2)(3, 4, 5)).toBe(6);
  });
});
