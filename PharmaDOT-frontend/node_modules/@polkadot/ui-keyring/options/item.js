import { isUndefined } from '@polkadot/util';
export function createOptionItem(address, _name) {
    const name = isUndefined(_name)
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
