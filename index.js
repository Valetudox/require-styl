'use strict';

var Module = require('module');
var originalRequire = Module.prototype.require;
var fs = require('fs');

Module.prototype.require = function(filePath) {
  if (filePath.indexOf('.styl') > -1) {
    var rawStyl = fs.readFileSync(Module._resolveFilename(filePath, this));
    return rawStyl;
  }
  return originalRequire.apply(this, arguments);
};
