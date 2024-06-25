type ForEachFn<P extends any[] | Record<string, any>> = P extends any[]
  ? (iterable: P[0]) => void
  : (key: keyof P, value: P[keyof P]) => void;

export function forEach<P extends any[]>(
  data: P,
): (fn: (iterable: P[0]) => void) => P;
export function forEach<P extends Record<string, any>>(
  data: P,
): (fn: (key: keyof P, value: P[keyof P]) => void) => P;
export function forEach<P extends any[]>(
  data: P,
  fn: (iterable: P[0]) => void,
): P;
export function forEach<P extends Record<string, any>>(
  data: P,
  fn: (key: keyof P, value: P[keyof P]) => void,
): P;

export function forEach<P extends any[] | Record<string, any>>(
  data: P,
  fn?: ForEachFn<P>,
) {
  if (fn === undefined) return (_fn: any) => forEach(data, _fn);

  if (Array.isArray(data)) {
    for (const it of data) {
      (fn as (iterable: typeof it) => void)(it);
    }
  } else if (typeof data === 'object') {
    for (const k in data) {
      fn(k, data[k]);
    }
  } else {
    throw new Error('Data should be an array or an object.');
  }

  return data;
}
