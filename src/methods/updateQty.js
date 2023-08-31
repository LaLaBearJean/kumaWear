import emitter from './emitter'

export function updateWishQty (qty) {
  emitter.emit('wishQty', qty)
}
