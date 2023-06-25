import type { KeyringStruct } from '../types.js';
import type { KeyringOptionInstance, KeyringOptions, KeyringSectionOption } from './types.js';
import { BehaviorSubject } from 'rxjs';
export declare class KeyringOption implements KeyringOptionInstance {
    #private;
    readonly optionsSubject: BehaviorSubject<KeyringOptions>;
    createOptionHeader(name: string): KeyringSectionOption;
    init(keyring: KeyringStruct): void;
    clear(): void;
    private linkItems;
    private addAccounts;
    private addAddresses;
    private addContracts;
    private emptyOptions;
}
