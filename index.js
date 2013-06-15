/**
 * Module dependencies.
 */

var Hammer = require('hammer')
  , Emitter = require('emitter')
  , inherit = require('inherit');

/**
 * Bind gestures to `el`.
 *
 * @param {Element} el
 * @return {Gesture}
 * @api public
 */

module.exports = function(el){
  return new Gesture(el);
};

/**
 * Initalize a new `Gesture` with the given `el`.
 *
 * @param {Element} el
 * @api public
 */

function Gesture(el) {
  this.hammer = new Hammer(el);
  this.el = el;
  this.bind();
}

/**
 * Mixin Emitter
 */

Emitter(Gesture.prototype);

/**
 * Bind to hammer.js events.
 *
 * @api private
 */

Gesture.prototype.bind = function(){
  var self = this;
  var hammer = this.hammer;

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
};

/**
 * Unbind events.
 *
 * @api public
 */

Gesture.prototype.unbind = function(){
  this.hammer.destroy();
};

