"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obervableAll = void 0;
const rxjs_1 = require("rxjs");
const accounts_js_1 = require("./accounts.js");
const addresses_js_1 = require("./addresses.js");
const contracts_js_1 = require("./contracts.js");
exports.obervableAll = (0, rxjs_1.combineLatest)([
    accounts_js_1.accounts.subject,
    addresses_js_1.addresses.subject,
    contracts_js_1.contracts.subject
]).pipe((0, rxjs_1.map)(([accounts, addresses, contracts]) => ({
    accounts,
    addresses,
    contracts
})));
