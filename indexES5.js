"use strict"; // Definitions
// -----------
/**
 * Recursively creates an array from start to stop through step. 
 * @param  {number} start
 * @param  {number} stop
 * @param  {number} step
 * @param  {array}  result
 * @return {[array|function]}
 */function ranger(start,stop){var step=arguments.length <= 2 || arguments[2] === undefined?1:arguments[2];var result=arguments.length <= 3 || arguments[3] === undefined?[]:arguments[3];if(start >= stop){return result;}result.push(start);return ranger(start + step,stop,step,result);} // Exports
// -------
module.exports = ranger;
