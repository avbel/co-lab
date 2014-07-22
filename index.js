"use strict";
let co = require("co");
let Lab = require("lab");

function canUseCo(result){
  return result && (typeof result.next === "function" /* generator */ ||
    typeof result.then === "function" /* promise */ ||
    typeof result === "function") /* thunk function */;
}

function createWrapper(fn){
  if(typeof fn !== "function"){
    return fn;
  }
  let wrapper = function(done){
    let result = fn.apply(this, arguments);
    if(canUseCo(result)){
      co(result).call(this, done);
    }
  };
  return wrapper;
}

function wrap(original){
  return function(fn){
    return original.call(this, createWrapper(fn));
  };
}


Lab.before = wrap(Lab.before);
Lab.after = wrap(Lab.after);
Lab.beforeEach = wrap(Lab.beforeEach);
Lab.afterEach = wrap(Lab.afterEach);

let test = Lab.test;
Lab.test = Lab.it = function(){
  let args = Array.prototype.slice.call(arguments, 0);
  if(args.length === 3){
    args[2] = createWrapper(args[2]);
  }
  else{
    args[1] = createWrapper(args[1]);
  }
  return test.apply(this, args);
};


module.exports = Lab;
