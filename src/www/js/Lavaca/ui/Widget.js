define(function(require) {

  var $ = require('$'),
      EventDispatcher = require('lavaca/events/EventDispatcher'),
      uuid = require('lavaca/util/uuid');

  /**
   * Base type for all UI elements
   * @class Lavaca.ui.Widget
   * @extends Lavaca.events.EventDispatcher
   *
   * @constructor
   *
   * @param {jQuery} el  The DOM element that is the root of the widget
   */
  var Widget = EventDispatcher.extend(function(el) {
    EventDispatcher.call(this);
    /**
     * The DOM element that is the root of the widget
     * @property {jQuery} el
     * @default null
     */
    this.el = el = $(el);
    var id = el.attr('id');
    if (!id) {
      id = 'widget-' + uuid();
    }
    /**
     * The el's ID
     * @property {String} id
     * @default (Autogenerated)
     */
    this.id = id;
  });

  return Widget;

});
