
type Maybe<T> = T extends null | undefined ? null : T;

const m: Maybe<number> = 0;