'use strict'

var build = require('./')
var cachinggg = build()
var debug = require('debug')('try')

cachinggg.refresh('beta', function () {
})

var result = cachinggg.get()
debug(result)

cachinggg.enable = false
debug(cachinggg.enable)
