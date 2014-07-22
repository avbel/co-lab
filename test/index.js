"use strict";
let Lab = require("..");

Lab.experiment("ES6 generators", function () {
  let testCalled = false, test2Called = false, beforeCalled = false, beforeEachCalled = false, afterCalled = false, afterEachCalled = false;

  Lab.before(function*(){
    beforeCalled = true;
  });

  Lab.beforeEach(function*(){
    beforeEachCalled = true;
  });

  Lab.after(function*(){
    afterCalled = true;
  });

  Lab.afterEach(function*(){
    afterEachCalled = true;
  });

  Lab.test("returns true when 1 + 1 equals 2", function*(){
    Lab.expect(1+1).to.equal(2);
    testCalled = true;
  });

  Lab.test("returns true when 2 + 1 equals 3", {}, function*(){
    Lab.expect(2+1).to.equal(3);
    test2Called = true;
  });

  Lab.after(function(done){
    Lab.expect(testCalled).to.equal(true);
    Lab.expect(test2Called).to.equal(true);
    Lab.expect(beforeCalled).to.equal(true);
    Lab.expect(beforeEachCalled).to.equal(true);
    Lab.expect(afterEachCalled).to.equal(true);
    Lab.expect(afterCalled).to.equal(true);
    done();
  });

});

Lab.experiment("general usage", function () {
  let testCalled = false, beforeCalled = false, beforeEachCalled = false, afterCalled = false, afterEachCalled = false;
  Lab.before(function(done){
    beforeCalled = true;
    done();
  });

  Lab.beforeEach(function(done){
    beforeEachCalled = true;
    done();
  });

  Lab.after(function(done){
    afterCalled = true;
    done();
  });

  Lab.afterEach(function(done){
    afterEachCalled = true;
    done();
  });

  Lab.test("returns true when 1 + 1 equals 2", function(done){
    Lab.expect(1+1).to.equal(2);
    testCalled = true;
    done();
  });

  Lab.after(function(done){
    Lab.expect(testCalled).to.equal(true);
    Lab.expect(beforeCalled).to.equal(true);
    Lab.expect(beforeEachCalled).to.equal(true);
    Lab.expect(afterEachCalled).to.equal(true);
    Lab.expect(afterCalled).to.equal(true);
    done();
  });

});
