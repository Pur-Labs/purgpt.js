"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _PurGPTJS_key;
Object.defineProperty(exports, "__esModule", { value: true });
const OpenAI_1 = require("./classes/OpenAI");
const PurGPT_1 = require("./classes/PurGPT");
const Anthropic_1 = require("./classes/Anthropic");
const Google_1 = require("./classes/Google");
const HuggingFace_1 = require("./classes/HuggingFace");
const Llama_1 = require("./classes/Llama");
const Ora_1 = require("./classes/Ora");
const Sberbank_1 = require("./classes/Sberbank");
class PurGPTJS {
    constructor(key) {
        _PurGPTJS_key.set(this, void 0);
        __classPrivateFieldSet(this, _PurGPTJS_key, key, "f");
        this.openAI = new OpenAI_1.default(key);
        this.purGPT = new PurGPT_1.default(key);
        this.anthropic = new Anthropic_1.default(key);
        this.google = new Google_1.default(key);
        this.huggingFace = new HuggingFace_1.default(key);
        this.llama = new Llama_1.default(key);
        this.ora = new Ora_1.default(key);
        this.sberbank = new Sberbank_1.default(key);
    }
    ;
}
_PurGPTJS_key = new WeakMap();
exports.default = PurGPTJS;
;
//# sourceMappingURL=index.js.map