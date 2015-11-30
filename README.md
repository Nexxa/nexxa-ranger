# nexxa-ranger [![Build Status](https://travis-ci.org/Nexxa/nexxa-ranger.svg?branch=master)](https://travis-ci.org/Nexxa/nexxa-ranger)

Simple ranger creator.

## Signature

**`ranger(start, stop [,step])`**

Creates an array with numeric values from **start (inclusive)** to **stop (exclusive)** through **step (default 1)**.

## Use

    var ranger = require('nexxa-ranger');
    
    console.log(ranger(0, 9));
    // -> [0, 1, 2, 3, 4, 5, 6, 7, 8]
    
    console.log(ranger(0, 9, 2));
    // -> [0, 2, 4, 6, 8]

## Contribution

Fork, edit and send a pull-request.

Test made with [TAPE](https://github.com/substack/tape).

Continuous integration courtesy of [Travis CI](https://travis-ci.org/).
