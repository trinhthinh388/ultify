import type {
  Gradual,
  VariadicFunction,
  Slice,
  PartialParameter,
} from '../types';

type ArgsLength<L> = L extends number ? L : 0;

type RemainParameters<
  Fn extends VariadicFunction,
  StartingArgs extends PartialParameter<Fn>,
> = Slice<Parameters<Fn>, ArgsLength<StartingArgs['length']>>;

/**
 * Creates a type for an auto-curried function.
 */
export type Curry<
  Fn extends VariadicFunction,
  StartingArgs extends PartialParameter<Fn>,
> = StartingArgs['length'] extends Parameters<Fn>['length']
  ? ReturnType<Fn>
  : <RemainArgs extends Gradual<RemainParameters<Fn, StartingArgs>>>(
      ...args: RemainArgs
    ) => Curry<
      Fn,
      // @ts-expect-error TODO: Fix this.
      [...StartingArgs, ...RemainArgs]
    >;

/**
 * Create a auto-curried function from the function provided.
 * `curry` will keep returning new function with an expected number of required arguments
 * until all of them has been provided.
 */
export default function curry<
  Fn extends VariadicFunction,
  StartingArgs extends PartialParameter<Fn>,
>(fn: Fn, ...args: StartingArgs): Curry<Fn, StartingArgs> {
  // @ts-expect-error TODO: Fix this.
  return function (..._args) {
    return ((rest) =>
      rest.length >= fn.length
        ? fn(...rest)
        : curry(fn, ...(rest as PartialParameter<Fn>)))([...args, ..._args]);
  };
}
