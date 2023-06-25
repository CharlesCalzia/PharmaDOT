"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOptionItem = void 0;
const util_1 = require("@polkadot/util");
function createOptionItem(address, _name) {
    const name = (0, util_1.isUndefined)(_name)
        ? ((address.length > 15)
            ? `${address.slice(0, 6)}…${address.slice(-6)}`
            : address)
        : _name;
    return {
        key: address,
        name,
        value: address
    };
}
exports.createOptionItem = createOptionItem;
