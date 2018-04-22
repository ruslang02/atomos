import R from 'ramda';
import F from './functional';
const { tap } = F;
const { compose, composeP, reduce } = F.R;
const { apply, prepend } = R;


tap.log = (f) => (x) => {
  console.log(x);
  f(x);
  return x;
};

// trace :: a -> a
const trace = tap(console.log.bind(console));

// trace :: a -> Promise a
const traceP = (x) => Promise.resolve(trace(x));

compose.log = compose(
  apply(compose),
  prepend(trace),
  reduce((acc, fn) => acc.concat(fn, trace), []),
  (...args) => [...args]
);

// compose.log :: ((a -> Promise b), ... (y -> Promise z)) -> (z -> Promise a)
composeP.log = compose(
  apply(composeP),
  prepend(traceP),
  reduce((acc, fn) => acc.concat(fn, traceP), []),
  (...args) => [...args]
);

F.trace = trace;
F.traceP = traceP;

export default F;
