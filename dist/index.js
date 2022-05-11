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
const qs_1 = require("qs");
function getProxy(request, config) {
    return __awaiter(this, void 0, void 0, function* () {
        /*
            Необходимо иметь в request: proxyUrl
           */
        const { baseURL = "", url = "", params = "" } = request;
        const { proxyUrl = "" } = config;
        request.params = (0, qs_1.parse)(params);
        request.baseURL = proxyUrl;
        request.headers = Object.assign(Object.assign({}, request.headers), { "amo-url": baseURL + url, "amo-method": request.method });
        request.method = "post";
        return request;
    });
}
exports.default = getProxy;
//# sourceMappingURL=index.js.map