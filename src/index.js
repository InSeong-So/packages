/**
 * 지정한 시간(ms)만큼 지연시킵니다.
 * 
 * @param {number} ms 
 * @returns Promise<any>
 */
export const sleep = (ms) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

/**
* 평가식이 falsy할 때 실행
*
* @param {*} predicate
* @param {*} callback
*/
export const unless = (predicate, callback) => {
  if (!predicate) callback();
};

/**
 * 한 번만 실행
 *
 * @param {*} callback
 * @returns
 */
export const once = callback => {
  let done = false;
  return function unnamed(...args) {
    if (done) done = undefined;
    else {
      done = true;
      callback.apply(this, args);
    }
  };
};

export const memoized = callback => {
  const lookupTable = {};

  return arg => lookupTable[arg] || (lookupTable[arg] = callback(arg));
};

export const curry = callback => {
  if (typeof callback !== 'function') throw new Error('No Function provided');

  return function curreid(...args) {
    if (args.length >= callback.length) return callback(...args);

    return (...params) => curreid(...args.concat([].slice.call(params)));
  };
};

export const partial =
  (callback, ...partialArgs) =>
    (...fullArgs) => {
      const args = Array.from(partialArgs);
      let index = 0;
      for (let i = 0; i < args.length && index < fullArgs.length; i += 1) {
        if (args[i] === undefined) {
          args[i] = fullArgs[index];
          index += 1;
        }
      }
      return callback(...args);
    };

export const compose = (a, b) => c => a(b(c));

// TODO: refactoring
export const pipe =
  (...fns) =>
    value =>
      fns.reduce((value, fn) => fn(value), value);

export const groupBy = (array = [], key = '') =>
  array.reduce((result, value) => {
    if (result[value[key]] === undefined) {
      result[value[key]] = [value];
    } else {
      result[value[key]].push(value);
    }
    return result;
  }, {});