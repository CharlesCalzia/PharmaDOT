"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const rxjs_1 = require("rxjs");
const subject = new rxjs_1.BehaviorSubject(false);
exports.env = {
    isDevelopment: () => subject.getValue(),
    set: (isDevelopment) => {
        subject.next(isDevelopment);
    },
    subject
};
