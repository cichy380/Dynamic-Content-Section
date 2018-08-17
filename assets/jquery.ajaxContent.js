/**
 * Dynamic Content Section
 *
 * Content loaded by AJAX
 * jQuery plugin based on https://addyosmani.com/resources/essentialjsdesignpatterns/book/#jquerypluginpatterns
 *
 * @todo: AJAX triggered manually
 */
;(function ($, window, document, undefined) {
  var pluginName = 'ajaxContent',
    defaults = {
      type: 'GET',
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: 'json',
      callback: {
        done: function () {},
        fail: function () {},
        always: function () {},
      },
    };

  function Plugin(element, options) {
    this.element = element;
    this.options = $.extend(true, {}, defaults, options);
    this._name = pluginName;

    this.init();
  }

  Plugin.prototype.init = function () {
    try {
      this.ajax($(this.element));
    }
    catch (err) {
      warningLog(err);
    }
  };

  Plugin.prototype.ajax = function($element, options, pluginName) {
    var ajaxConfig,
      options = options || this.options,
      pluginName = pluginName || this._name;

    $element.addClass('ajax-loading');

    ajaxConfig = $.extend(true, {}, options, {
      data: $element.prefixData('ajax').data
    });

    $.ajax(ajaxConfig)
      .done(function (response) {
        $element.addClass('ajax-done');
        $element.html(response.data[0].html);
        options.callback.done();
        $(document.body).trigger('content-loaded');
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        options.callback.fail();
        $element.addClass('ajax-error');
        warningLog('ERROR of .' + pluginName + '() plugin: Deferred object is rejected.');
        warningLog(errorThrown);
      })
      .always(function () {
        options.callback.always();
        $element.removeClass('ajax-loading');
      })
    ;
  };

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName,
          new Plugin(this, options));
      }
    });
  };

  function warningLog(message) {
    if (window.console && typeof console.warn === 'function') {
      console.warn(message);
    }
  }
})(window.jQuery, window, document);
