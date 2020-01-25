"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var shasta = __importStar(require("./"));
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
var fixtures = [
    {
        prehashArray: [],
        expectedHashArray: [227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85]
    },
    {
        prehashArray: [0],
        expectedHashArray: [110, 52, 11, 156, 255, 179, 122, 152, 156, 165, 68, 230, 187, 120, 10, 44, 120, 144, 29, 63, 179, 55, 56, 118, 133, 17, 163, 6, 23, 175, 160, 29]
    },
    {
        prehashArray: [255, 255],
        expectedHashArray: [202, 47, 208, 15, 160, 1, 25, 7, 68, 193, 92, 49, 118, 67, 171, 9, 46, 112, 72, 206, 8, 106, 36, 62, 43, 233, 67, 124, 137, 141, 225, 187]
    }
];
fixtures.forEach(function (fixture) {
    test("genSha256: [" + fixture.prehashArray + "]", function () {
        var prehashU = new Uint8Array(fixture.prehashArray);
        var expectedHashU = new Uint8Array(fixture.expectedHashArray);
        var expectedHash = pollenium_uvaursi_1.Uu.fromArray(fixture.expectedHashArray);
        var hash = shasta.genSha256(prehashU);
        // expect(hash.getIsEqual(expectedHash)).toBe(true)
        expect(hash.unwrap()).toStrictEqual(expectedHash.unwrap());
    });
});
