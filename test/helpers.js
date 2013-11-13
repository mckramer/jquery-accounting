( function (root) {
  root.utils = {
    $: function (selector) {
      return $('#fixtures').find(selector || 'span');
    },
    buildElements: function (items, element) {
      if (!element) { element = 'span'; }
      return $.map(items, function (value, key) {
        return '<' + element + '>' + key + '</' + element + '>';
      });
    },
    clearFixtures: function () {
      $('#fixtures').empty();
    },
    setFixture: function (fixtures) {
      $('#fixtures').empty().append(fixtures);
    }
  };
})(this);