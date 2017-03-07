# Cachinggg

Module for simple key/value store, with just one key. It'a wrapper around node-persist, in sync mode.

## Install

```
npm install @piemme/cachinggg --save
```

<a name="api"></a>
## API

  * <a href="#put"><code><b>put()</b></code></a>
  * <a href="#get"><code><b>get()</b></code></a>
  * <a href="#refresh"><code><b>refresh()</b></code></a>
  * <a href="#clear"><code><b>clear()</b></code></a>
  * <a href="#disable"><code><b>disable</b></code></a>

-------------------------------------------------------

<a name="put"></a>
put(someStuff)

<a name="get"></a>
get()

<a name="refresh"></a>
refresh(someStuff)

<a name="clear"></a>
answer(clear)

<a name="disable"></a>
disable

Example:

```js
var cachinggg = require ('cachinggg')
cachinggg.put('beep')
var content = cachinggg.get()
// obtain 'beep'

// and now refresh cache with a new content
// cache system verify if value is the same in cache
cachinggg.refresh(someContent, function () {
  var content = cachinggg.get()
})
```

## License

MIT
