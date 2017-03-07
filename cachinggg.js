'use strict'

// require deps
var crypto = require('crypto')
var storage = require('node-persist')
var debug = require('debug')('cachinggg')

const pathLocalCache = '.cache'
var disable = false

// SYNC init (like read conf file)
storage.initSync({dir: pathLocalCache})

function cachinggg () {

  debug('cachinggg instance')

  return {
    get: get,
    put: put,
    refresh: refresh,
    clear: clear,
    disable: disable
  }

  function put (content, bundle) {
    debug('put')
    try {
      clear()
      storage.setItemSync('content', content)
      storage.setItemSync('bundle', bundle)
    } catch (err) {
      debug(err)
    }
  }

  function get () {
    debug('get')
    return storage.getItemSync('content')
  }

  function clear () {
    debug('clear')
    return storage.clearSync()
  }

  function refresh (freshContent, done) {
    debug('refresh')
    var cachedBundle = storage.getItemSync('bundle')
    var freshBundle = crypto.createHash('md5').update(freshContent).digest('hex')
    if (disable) {
      put(freshContent, freshBundle)
      done()
    }
    if (!isCacheValid(cachedBundle, freshBundle)) {
      debug('clear and renew cache:' + freshBundle)
      put(freshContent, freshBundle)
    }
    done()
  }

  function isCacheValid (cachedBundle, freshContent) {
    return (cachedBundle === freshContent)
  }

}
module.exports = cachinggg
