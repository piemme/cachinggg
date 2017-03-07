'use strict'

var fs = require('fs')
var test = require('tape-catch')
var build = require('./')
var cachinggg

var localHtml = 'only-for-test/content.html'
var localHtmlNew = 'only-for-test/content-new.html'

function readHtmlLocal (file) {
  return fs.readFileSync(file).toString()
}

test('read data from cache, because new data is the same', function (t) {
  cachinggg = build()
  var someContent = readHtmlLocal(localHtml)
  cachinggg.put(someContent)
  cachinggg.refresh(someContent, function () {
    var content = cachinggg.get()
    t.equal(content, someContent)
    t.end()
  })
})

test('read data from new content, not from cache', function (t) {
  cachinggg = build()
  var someContent = readHtmlLocal(localHtml)
  var someNewContent = readHtmlLocal(localHtmlNew)
  cachinggg.put(someContent)
  cachinggg.refresh(someNewContent, function () {
    var content = cachinggg.get()
    t.equal(content, someNewContent)
    t.end()
  })
})

test('modifica flag globale caching', function (t) {
  cachinggg = build()
  t.false(cachinggg.disable)
  cachinggg.disable = true
  t.true(cachinggg.disable)
  t.end()
})
