"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accounts = void 0;
const defaults_js_1 = require("../defaults.js");
const genericSubject_js_1 = require("./genericSubject.js");
exports.accounts = (0, genericSubject_js_1.genericSubject)(defaults_js_1.accountKey, true);
