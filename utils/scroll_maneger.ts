import Router from 'next/router'

let value = new Map<String, number>()

const scollManeger = () => {
  Router.events.on('routeChangeStart', (...args) => {
    value.set(window.location.pathname, document.documentElement.scrollTop)
  })

  Router.events.on('routeChangeComplete', (...args) => {
    document.documentElement.scrollTop = value.get(window.location.pathname) || 0
  })
}

module.exports = {
  scollManeger
}
