declare global {
  /**
   * A type of a function accepting exactly one argument
   */
  type UnaryFunction = (arg: any) => any;

  /**
   * A type of a function accepting an arbitrary amount of arguments
   */
  type VariadicFunction = (...args: any[]) => any;

  type PartialTuple<
    Tuple extends any[],
    Extracted extends any[] = [],
  > = Tuple extends [infer Next, ...infer REMAINING]
    ? PartialTuple<REMAINING, [...Extracted, Next?]>
    : [...Extracted, ...Tuple];

  type PartialParameters<Fn extends (...args: any[]) => any> = PartialTuple<
    Parameters<Fn>
  >;

  type RemainingParameters<
    Provided extends any[],
    Expected extends any[],
  > = Expected extends [infer FirstE, ...infer Ex]
    ? Provided extends [infer FirstP, ...infer Px]
      ? FirstP extends FirstE
        ? RemainingParameters<Px, Ex>
        : never
      : Expected
    : [];
}

export {};
