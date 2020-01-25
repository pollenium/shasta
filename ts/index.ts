import hashjs from 'hash.js'
import { Uu, Uish } from 'pollenium-uvaursi'

export function genSha256(prehashUish: Uish): Uu {
  const prehash = Uu.wrap(prehashUish)
  return Uu.fromArray(
     hashjs.sha256().update(prehash.unwrap()).digest()
   )
}
