'use strict';
/**
 * Adapters
 */
// exports.USB     = require('./adapter/usb');
// exports.Serial  = require('./adapter/serial');
// exports.Network = require('./adapter/network');
// exports.Console = require('./console');

/**
 * Printer Supports
 */
// exports.Image    = require('./image');
// exports.Server   = require('./server');
// exports.Printer  = require('./printer');
// exports.Adapter  = require('./adapter');
// exports.command  = require('./commands');
// exports.Printer2 = require('./promiseify');


import * as prints from './printer';
import * as cons from './console'
export default {
    Console: cons,	//打印console.log
    Printer: prints,	//打印命令
}
