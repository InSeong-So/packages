"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function map(array, iteratee) {
    var index = -1;
    var length = array == null ? 0 : array.length;
    var result = new Array(length);
    while (++index < length) {
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
exports.default = map;