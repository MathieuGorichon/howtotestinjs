var repo = require('./azureRepo');

exports.post = file => repo.create(file);
