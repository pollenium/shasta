import hashjs from 'hash.js'
import { Uu, Uish } from 'pollenium-uvaursi'

export function getHashSha256(prehash: Uish): Uu {
   return new Uint8Array(hashjs.sha256().update(Uu.wrap(prehash).unwrap()).digest())
}
