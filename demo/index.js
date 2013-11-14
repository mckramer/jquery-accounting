( function ($) {
  $( function () {
    $('#examples tbody > tr').each( function () {
      var $tr = $(this)
        , method = $tr.data('method')
        , options = $tr.data('options')
      ;
      if (method) {
        $tr.children('td').each( function () {
          $(this).accounting(method, options);
        });
      }
    });
  });
})(jQuery);