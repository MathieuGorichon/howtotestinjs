var assert = require('chai').assert;
var mockery = require('mockery');

describe('unit test', function() {
    it('should not called azure', function() {
        mockery.enable();

        var azureMock = {
             create : function() {
                 console.log('mock called');
                 return true;
             }
        };
        mockery.registerMock('./azureRepo', azureMock);

        var res = require('./resource');

        var success = res.post('mon fichier');
        assert.equal(success, true);
    });
});

