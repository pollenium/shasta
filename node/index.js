"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var hash_js_1 = __importDefault(require("hash.js"));
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
function genSha256(prehashUish) {
    var prehash = pollenium_uvaursi_1.Uu.wrap(prehashUish);
    return pollenium_uvaursi_1.Uu.fromArray(hash_js_1["default"].sha256().update(prehash.unwrap()).digest());
}
exports.genSha256 = genSha256;
