
/**
 * Get Attributes
 *
 * Return the list of HTML attributes for the first element in the set of matched elements.
 *
 * @link https://stackoverflow.com/a/5282801
 */
;(function($) {
  'use strict';

  $.fn.getAttributes = function(prefix, removePrefix) {
    var attributes = {};

    if (this.length) {
      $.each(this[0].attributes, function(index, attr) {
        var property = attr.name,
          value = attr.value;

        if (prefix) {
          if (attr.name.indexOf(prefix) === 0) {
            property = removePrefix ? property.substring(prefix.length) : property;
            attributes[ property ] = value;
          }
        } else {
          attributes[ property ] = value;
        }
      });
    }
    return attributes;
  };
})(window.jQuery);