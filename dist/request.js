"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const PurGPTError_1 = require("./PurGPTError");
const types_1 = require("./types");
function request(key, method = types_1.RequestMethod.Get, endpoint, data) {
    return __awaiter(this, void 0, void 0, function* () {
        let request = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${key}`
            }
        };
        if (data)
            request.data = JSON.stringify(data);
        let response;
        try {
            response = yield (0, axios_1.default)(`https://beta.purgpt.xyz/${endpoint}`, request);
        }
        catch (error) {
            response = error === null || error === void 0 ? void 0 : error.response;
        }
        ;
        if (response.status !== 200)
            throw new PurGPTError_1.default(`API has returned with ${response.status} ${response.statusText}`, response);
        return response.data;
    });
}
exports.default = request;
;
//# sourceMappingURL=request.js.map