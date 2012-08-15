
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
    e.originalEvent.preventDefault();
    self.emit('drag start', e);
  };

  // drag
  hammer.ondrag = function(e){
    e.originalEvent.preventDefault();
    self.emit('drag', e);
  };

  // drag end
  hammer.ondragend = function(e){
    e.originalEvent.preventDefault();
    self.emit('drag end', e);
  };

  // tag
  hammer.ontap = function(e){
    e.originalEvent.preventDefault();
    self.emit('tap', e);
  };

  // double tag
  hammer.ondoubletap = function(e){
    e.originalEvent.preventDefault();
    self.emit('double tap', e);
  };

  // hold
  hammer.onhold = function(e){
    e.originalEvent.preventDefault();
    self.emit('hold', e);
  };

  // release
  hammer.onrelease = function(e){
    e.originalEvent.preventDefault();
    self.emit('release', e);
  };

  // transform start
  hammer.ontransformstart = function(e){
    e.originalEvent.preventDefault();
    self.emit('transform start', e);
  };

  // transform
  hammer.ontransform = function(e){
    e.originalEvent.preventDefault();
    self.emit('transform', e);
  };

  // transform end
  hammer.ontransformend = function(e){
    e.originalEvent.preventDefault();
    self.emit('transform end', e);
  };

  // swipe left / right
  hammer.onswipe = function(e){
    e.originalEvent.preventDefault();
    self.emit('swipe', e);
    self.emit('swipe ' + e.direction, e);
  };

  return self;
};