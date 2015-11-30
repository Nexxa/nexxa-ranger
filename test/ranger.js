/**
 * @file Test for nexxa-ranger
 * @author StefanoMagrasi <stefano.magrassi@gmail.com>
 */

var test = require('tape');
var ranger = require('../indexES5');

test('Range from start to stop through step', function(assert) {
  var actual   = ranger(0, 9);
  var expected = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var msg      = 'should create an array of 9 elements from 0 to 8';
  
  assert.deepEqual(actual, expected, msg);
  
  assert.end();
});

test('Range from start to stop through step (bigger than 1)', function(assert) {
  var actual   = ranger(0, 9, 2);
  var expected = [0, 2, 4, 6, 8];
  var msg      = 'should create an array of 5 elements from 0 to 8';
  
  assert.deepEqual(actual, expected, msg);
  
  assert.end();
});
