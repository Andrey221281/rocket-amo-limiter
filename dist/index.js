"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qs_1 = require("qs");
async function getProxy(request) {
    let { baseURL, url } = request;
    request.params = (0, qs_1.parse)(request.params);
    request.baseURL = 'http://localhost:3300/proxy/catch';
    request.headers = Object.assign(Object.assign({}, request.headers), { amoUrl: baseURL + url });
    return request;
}
exports.default = getProxy;
//# sourceMappingURL=index.js.map