
# Gesture

  Emitter wrapper and a little sugar on top of [Hammer.js](https://github.com/eightmedia/hammer.js).

## Installation

```
$ component install component/gesture
```

## Events

  - `drag start`
  - `drag`
  - `drag end`
  - `tap`
  - `double tap`
  - `hold`
  - `release`
  - `transform start`
  - `transform`
  - `transform end`
  - `swipe`
  - `swipe left`
  - `swipe right`
  - `swipe up`
  - `swipe down`

## API
  
### gesture(el)

  Bind gestures to the given `el` and returns a `Gesture`.

```js
var gesture = require('gesture');
var img = document.getElementById('maru');

var maru = gesture(img);

maru.on('transform', function(e){
  var r = e.rotation.toFixed(2);
  var s = e.scale.toFixed(2);
  img.style['-webkit-transform'] = 'rotate(' + r + 'deg) scale(' + s + ')';
});

setTimeout(function(){
  maru.unbind();
}, 5000);
```

### Gesture#unbind()

  Unbind event handlers.

## License

  MIT