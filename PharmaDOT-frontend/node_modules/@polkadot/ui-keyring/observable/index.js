import { combineLatest, map } from 'rxjs';
import { accounts } from './accounts.js';
import { addresses } from './addresses.js';
import { contracts } from './contracts.js';
export const obervableAll = /*#__PURE__*/ combineLatest([
    accounts.subject,
    addresses.subject,
    contracts.subject
]).pipe(map(([accounts, addresses, contracts]) => ({
    accounts,
    addresses,
    contracts
})));
