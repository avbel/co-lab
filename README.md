# co-lab

[![Build](https://travis-ci.org/avbel/co-lab.png)](https://travis-ci.org/avbel/co-lab)
[![Dependencies](https://david-dm.org/avbel/co-lab.png)](https://david-dm.org/avbel/co-lab)


This module lets you use powered by [co](https://github.com/visionmedia/co) generators inside [lab](https://github.com/spumko/lab) tests. Node 0.11+ is required.


## Install

    $ npm install co lab co-lab

## Usage

Use inside tests

```
let Lab = require("co-lab");
```

instead of

```
var Lab = require("lab");
```

See a demo bellow to see abilities of this module

```
"use strict";
let Lab = require("co-lab");

Lab.experiment("ES6 generators", function(){
  Lab.before(function*(){ //beforeEach is supported too
    //some preparations here
  });

  Lab.after(function*(){ //afterEach is supported too
    //some finalizations here
  });

  Lab.test("my test", function*(){
    //do some test here. throw an exception on error
  });

  Lab.test("my test2", function(done){
    //general function with callback is supported too
    done();
  });
});

```
