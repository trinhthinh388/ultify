/**
 * A type of a function accepting exactly one argument
 */
export type UnaryFunction = (arg: any) => any;

/**
 * A type of a function accepting an arbitrary amount of arguments
 */
export type VariadicFunction = (...args: any[]) => any;

/**
 * A type of a partial parameter of a function
 */
export type PartialParameter<Fn extends VariadicFunction> = Partial<
  Parameters<Fn>
>;
