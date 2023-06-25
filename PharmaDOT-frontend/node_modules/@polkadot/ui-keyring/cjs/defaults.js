"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractRegex = exports.addressRegex = exports.accountRegex = exports.contractKey = exports.addressKey = exports.accountKey = void 0;
const keyring_1 = require("@polkadot/keyring");
const util_1 = require("@polkadot/util");
const ACCOUNT_PREFIX = 'account:';
const ADDRESS_PREFIX = 'address:';
const CONTRACT_PREFIX = 'contract:';
function toHex(address) {
    return (0, util_1.u8aToHex)(
    // When saving pre-checksum changes, ensure that we can decode
    (0, keyring_1.decodeAddress)(address, true));
}
function accountKey(address) {
    return `${ACCOUNT_PREFIX}${toHex(address)}`;
}
exports.accountKey = accountKey;
function addressKey(address) {
    return `${ADDRESS_PREFIX}${toHex(address)}`;
}
exports.addressKey = addressKey;
function contractKey(address) {
    return `${CONTRACT_PREFIX}${toHex(address)}`;
}
exports.contractKey = contractKey;
exports.accountRegex = new RegExp(`^${ACCOUNT_PREFIX}0x[0-9a-f]*`, '');
exports.addressRegex = new RegExp(`^${ADDRESS_PREFIX}0x[0-9a-f]*`, '');
exports.contractRegex = new RegExp(`^${CONTRACT_PREFIX}0x[0-9a-f]*`, '');
