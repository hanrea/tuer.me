var tuerBase = require('../model/base'),
fs = require('fs'),
path = require('path'),
util = require('../lib/util'),
Avatar = require('../lib/avatar'),
pag = require('../lib/pag').pag,
config = require('../lib/config'),
rootdir = config.rootdir,
EventProxy = require('eventproxy').EventProxy;
