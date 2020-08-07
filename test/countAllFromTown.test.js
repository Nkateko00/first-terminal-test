
let assert = require("assert")
let countAllFromTown = require("../countAllFromTown")


describe("countAllFromTown",function(){
    it("countAllFromTown should count all reg Numbers from Town",function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');

        //fromStellies should contains
        assert.deepEqual(fromStellies, 3);
});
it("countAllFromTown should count all reg Numbers from Paarl",function(){
    var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ');

    //fromStellies should contains
    assert.deepEqual(fromStellies, 1);
});
it("countAllFromTown should count all reg Numbers from Bellville",function(){
    var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CY');

    //fromStellies should contains
    assert.deepEqual(fromStellies, 1);
});
});