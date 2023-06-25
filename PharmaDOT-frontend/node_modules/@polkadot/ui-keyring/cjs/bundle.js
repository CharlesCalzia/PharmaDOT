"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keyring = exports.keyring = exports.packageInfo = void 0;
const Keyring_js_1 = require("./Keyring.js");
Object.defineProperty(exports, "Keyring", { enumerable: true, get: function () { return Keyring_js_1.Keyring; } });
var packageInfo_js_1 = require("./packageInfo.js");
Object.defineProperty(exports, "packageInfo", { enumerable: true, get: function () { return packageInfo_js_1.packageInfo; } });
exports.keyring = new Keyring_js_1.Keyring();
