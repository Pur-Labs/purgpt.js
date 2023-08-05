"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PurGPTError extends Error {
    constructor(message, response) {
        super(message);
        this.name = 'PurGPTError';
        this.response = response;
    }
    ;
}
exports.default = PurGPTError;
;
//# sourceMappingURL=PurGPTError.js.map