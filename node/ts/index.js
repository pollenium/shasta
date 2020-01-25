"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var hash_js_1 = __importDefault(require("hash.js"));
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
function getHashSha256(prehash) {
    return new Uint8Array(hash_js_1["default"].sha256().update(pollenium_uvaursi_1.Uu.wrap(prehash).unwrap()).digest());
}
exports.getHashSha256 = getHashSha256;
