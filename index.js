
/**
 * Module dependencies.
 */

var Hammer = require('hammer')
  , Emitter = require('emitter');

/**
 * Bind gestures to `el`.
 *
 * @param {Element} el
 * @return {Emitter}
 * @api public
 */

module.exports = function(el){
  var hammer = new Hammer(el);
  var self = new Emitter;

  // drag start
  hammer.ondragstart = function(e){
    self.emit('drag start', e);
  };

  // drag
  hammer.ondrag = function(e){
    self.emit('drag', e);
  };

  // drag end
  hammer.ondragend = function(e){
    self.emit('drag end', e);
  };

  // tag
  hammer.ontap = function(e){
    self.emit('tap', e);
  };

  // double tag
  hammer.ondoubletap = function(e){
    self.emit('double tap', e);
  };

  // hold
  hammer.onhold = function(e){
    self.emit('hold', e);
  };

  // release
  hammer.onrelease = function(e){
    self.emit('release', e);
  };

  // transform start
  hammer.ontransformstart = function(e){
    self.emit('transform start', e);
  };

  // transform
  hammer.ontransform = function(e){
    self.emit('transform', e);
  };

  // transform end
  hammer.ontransformend = function(e){
    self.emit('transform end', e);
  };

  // swipe left / right
  hammer.onswipe = function(e){
    self.emit('swipe', e);
    self.emit('swipe ' + e.direction, e);
  };

  return self;
};