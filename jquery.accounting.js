( function ($, accounting) {
  
  "use strict";
  
  var namespace = 'accounting'
    , slice = Array.prototype.slice
    , previous = $.fn[namespace]
  ;
  
  /**
   * 
   * 
   * @param {string} method
   */
  /*jshint validthis: true */
  function format(method) {
    var $this = $(this)
      , accessor = $this.data('accessor') || $.fn[namespace].defaults.accessor
      , value = $this[accessor]()
    ;
    // Save raw format
    $this.data('raw', value);
    // Update value
    $this[accessor](accounting[method].apply(accounting, [value].concat(slice.call(arguments, 1))));
  }
  
  // API
  $.fn[namespace] = function (method) {
    var allArgs = arguments;
    return this.each( function () {
      var $this = $(this)
        , options = $this.data('options')
        , args
      ;
      if ($.isFunction(accounting[method])) {
        args = slice.call(allArgs);
        if (args.length === 1) {
          args.push(options);
        }
        format.apply(this, args);
      } else {
        $.error('Method (' + method + ') is not supported or does not exist.');
      }
    });
  };
  
  // Defaults
  $.fn[namespace].defaults = {
    accessor: 'text'
  };
  
})(jQuery, accounting);