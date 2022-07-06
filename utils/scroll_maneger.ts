namespace scrollManager {
  let mo = function (e: any) {
    e.preventDefault()
  }

  export function stop() {
    document.body.style.overflow = 'hidden'
    document.addEventListener('touchmove', mo, { passive: false })
  }

  export function move() {
    document.body.style.overflow = ''
    document.removeEventListener('touchmove', mo)
  }
}

module.exports = {
  scrollManager,
}
