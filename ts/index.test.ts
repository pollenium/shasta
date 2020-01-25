import * as shasta from './'
import { Uu } from 'pollenium-uvaursi'

interface Fixture {
  prehashArray: Array<number>,
  expectedHashArray: Array<number>
}

const fixtures: Array<Fixture> = [
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
]

fixtures.forEach((fixture) => {
  test(`genSha256: [${fixture.prehashArray}]`, () => {
    const prehashU = new Uint8Array(fixture.prehashArray)
    const expectedHashU = new Uint8Array(fixture.expectedHashArray)
    const expectedHash = Uu.fromArray(fixture.expectedHashArray)
    const hash = shasta.genSha256(prehashU)
    // expect(hash.getIsEqual(expectedHash)).toBe(true)
    expect(hash.unwrap()).toStrictEqual(expectedHash.unwrap())
  })
})
