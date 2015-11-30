// Definitions
// -----------
/**
 * Recursively creates an array from start to stop through step. 
 * @param  {number} start
 * @param  {number} stop
 * @param  {number} step
 * @param  {array}  result
 * @return {[array|function]}
 */
function ranger(start, stop, step = 1, result = []) {
  if (start >= stop) {
    return result;
  }
  
  result.push(start);
  
  return ranger((start + step), stop, step, result);
}

// Exports
// -------
module.exports = ranger;
