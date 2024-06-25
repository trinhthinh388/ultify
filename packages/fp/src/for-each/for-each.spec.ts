import { forEach } from './for-each';

describe('forEach', () => {
  it('Should return a function when iterable is undefined', () => {
    const mockedFn = vi.fn();

    expect(forEach([1, 2, 3])).toBeInstanceOf(Function);
    expect(mockedFn).not.toHaveBeenCalled();
    expect(forEach([1, 2, 3])((a) => mockedFn(a))).toStrictEqual([1, 2, 3]);

    expect(mockedFn).toHaveBeenCalledWith(1);
    expect(mockedFn).toHaveBeenCalledWith(2);
    expect(mockedFn).toHaveBeenCalledWith(3);
  });

  it('Should iterate thru every argument', () => {
    const mockedFn = vi.fn();
    expect(forEach([1, 2, 3], (a) => mockedFn(a))).toStrictEqual([1, 2, 3]);
    expect(mockedFn).toHaveBeenCalledWith(1);
    expect(mockedFn).toHaveBeenCalledWith(2);
    expect(mockedFn).toHaveBeenCalledWith(3);
  });

  it('Should iterable when iterable is an object', () => {
    const mockedFn = vi.fn();
    expect(forEach({ a: 1, b: '2' })).toBeInstanceOf(Function);
    expect(
      forEach({ a: 1, b: '2' })((key, value) => mockedFn(key, value)),
    ).toStrictEqual({
      a: 1,
      b: '2',
    });
  });

  it('Should throw error when data is not either an object or an array ', () => {
    try {
      // @ts-expect-error expected
      forEach(1, (a) => console.log(a));
    } catch (e) {
      expect((e as Error).message).toBe(
        'Data should be an array or an object.',
      );
    }
  });
});
