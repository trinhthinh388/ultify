export type CurriedFnOrReturnValue<
  Provided extends any[],
  Fn extends VariadicFunction,
> =
  RemainingParameters<Provided, Parameters<Fn>> extends []
    ? ReturnType<Fn>
    : CurriedFn<Provided, Fn>;

export type CurriedFn<Provided extends any[], Fn extends VariadicFunction> = <
  Args extends PartialTuple<RemainingParameters<Provided, Parameters<Fn>>>,
>(
  ...args: Args
) => CurriedFnOrReturnValue<[...Provided, ...Args], Fn>;

/**
 * Create a auto-curried function from the function provided.
 * `curry` will keep returning new function with an expected number of required arguments
 * until all of them has been provided.
 *
 * CurriedFn<`Args`, `Fn`> is the return type of the `curry`.
 * Until all expected required arguments has been provided, then the CurriedFn<`Args`, `Fn`> will always be returned.
 * Eventually, the expected return type will be returned instead of the CurriedFn<`Args`, `Fn`>.
 *
 * @example
 * ```ts
 * const fn = (a: number, b: number, c: number) => a + b + c // (a : number, b: number, c: number) => number
 * const curried = curry(fn) // CurriedFn<[], (a : number, b: number, c: number) => number>
 *
 * const curried2 = curried(1) // CurriedFn<[1], (a : number, b: number, c: number) => number> a.k.a. (b: number, c: number) => number
 * //^ Since `Args` only has one member then you will need 2 more arguments to get the return type.
 *
 *  * const curried3 = curried(2) // CurriedFn<[1, 2], (a : number, b: number, c: number) => number> a.k.a. (c: number) => number
 * //^ Since `Args` only has one member then you will need 1 more arguments to get the return type.
 *
 * const result = curried3(3) // number
 *  * //^ Provides enough arguments then the `result` will have type `number`.
 * ```
 */
export function curry<
  Fn extends VariadicFunction,
  Args extends PartialParameters<Fn>,
>(fn: Fn, ...args: Args): CurriedFn<Args, Fn> {
  return function (..._args) {
    return ((rest) =>
      rest.length >= fn.length
        ? fn(...rest)
        : curry(fn, ...(rest as PartialParameters<Fn>)))([...args, ..._args]);
  };
}
