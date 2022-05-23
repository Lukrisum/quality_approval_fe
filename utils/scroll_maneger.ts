import Router from 'next/router'

interface Iscroll {
  url: string,
  Y: number
}

let value:number[] = []
// let value = new Set<Iscroll>()

const scollManeger = () => {
  Router.events.on('routeChangeStart', (...args) => {
    // value.add({
    //   url: window.location.href,
    //   Y: document.documentElement.scrollTop
    // })
    value.push(document.documentElement.scrollTop)
  })

  Router.events.on('routeChangeComplete', (...args) => {
    value.length == 2
      ? document.documentElement.scrollTop = value.shift() || 0
      : () => { }
    // value.size == 2
    //   ? document.documentElement.scrollTop = value.shift() || 0
    //   : () => { }
  })
}

console.log('🚧 施工中')

module.exports = {
  scollManeger
}
