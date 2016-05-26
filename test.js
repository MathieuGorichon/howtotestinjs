var assert = require('chai').assert;
var res = require('./resource');

describe('unit test', function() {
    it('should not called azure', function() {
        var success = res.post('mon fichier');
        assert.equal(success, true);
    });
});
