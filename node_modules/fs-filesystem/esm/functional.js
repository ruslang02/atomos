import R from 'ramda';
const { compose, composeP, map, mapAccum } = R;

// I :: a -> a
const I = (x) => x;

// K :: a -> b -> a
const K = (x) => (y) => x;

// C :: (b -> (a -> *)), a, b -> *
const C = (f) => (a) => (b) => f(b)(a);

// S :: (x -> y -> *), (x -> y) -> *
// S :: (x -> y -> *) -> (x -> y) -> *
const S = (f, g) => g
  ? (x) => f(x)(g(x))
  : (g) => (x) => f(x)(g(x));

// each :: (a -> *), [a]|Object -> undefined
const each = (f, x) => x
  ? !Array.isArray(x) ? R.forEachObjIndexed(f, x) : R.forEach(f, x)
  : (x) => !Array.isArray(x) ? R.forEachObjIndexed(f, x) : R.forEach(f, x);

// reductor :: ((a, b, x) -> a), a, x -> a
const reductor = (f, a, x) => {
  if(Array.isArray(x)){
    return x.reduce(f, a);
  }else{
    let acc = a;
    for(let k in x){
      acc = f(acc, x[k], k, x);
    }
    return acc;
  }
};

// reduce :: ((a, b, x) -> a) -> a -> x -> a
// reduce :: ((a, b, x) -> a), a -> x -> a
// reduce :: ((a, b, x) -> a), a, x -> a
const reduce = (f, a, x) => x
  ? reductor(f, a, x)
  : a
    ? (x) => reductor(f, a, x)
    : (a, x) => x ? reductor(f, a, x) : (x) => reductor(f, a, x);

// filter :: Object -> Object
const filterObjIndexed = (f, x) => {
  return compose(
    R.reduce((acc, k) => { acc[k] = x[k]; return acc; }, {}),
    R.filter((k) => f(x[k], k, x)),
    R.keys
  )(x);
};

// filter :: Object|[a] -> Object|[a]
const filter = (f, x) => x
  ? !Array.isArray(x) ? filterObjIndexed(f, x) : R.filter(f, x)
  : (x) => !Array.isArray(x) ? filterObjIndexed(f, x) : R.filter(f, x);

// ifElse :: (a -> Bool), (a -> *), (a -> *) -> (a -> *)
const ifElse = function ifElse (f, g, h) {
  return (x) => f(x) ? g(x) : h(x);
};

// condr :: x, Integer, [{ c: (x -> Bool), a: (x -> *)}] -> *|x
const condr = function condr (x, i, cs) {
  return i < cs.length ? (cs[i].c(x) ? cs[i].a(x) : condr(x, i + 1, cs)) : x;
};

// cond :: [{ c: (x -> Bool), a: (x -> *)}] -> x -> *
const cond = function cond (...cases) {
  return (x) => ifElse(
    (cs) => cs.length,
    (cs) => condr(x, 0, cs),
    () => I(x)
  )(cases);
};

// tap :: Function -> a -> a
const tap = (f) => (x) => {
  f(x);
  return x;
};

// eqeqeq :: * -> * -> Bool
const eqeqeq = (x) => (y) => x === y;

// tautology :: * -> Bool
const tautology = () => true;

// thrower :: string, Error|undefined -> undefined
const thrower = (msg, Type = Error) => { throw new Type(msg); };

module.exports = {
  I,
  K,
  C,
  S,
  each,
  filter,
  ifElse,
  cond,
  tap,
  eqeqeq,
  tautology,
  thrower,
  identity: I,
  constant: K,
  flip: C,
  split: S,
  substitute: S,
  R: {
    compose,
    composeP,
    map,
    mapAccum,
    reduce,
    each,
    filter
  }
};
