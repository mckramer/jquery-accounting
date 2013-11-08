( function (root) {
  root.utils = {
    $: function (selector) {
      return $('#fixtures').find(selector);
    },
    clearFixtures: function () {
      $('#fixtures').empty();
    },
    setFixture: function (fixtures) {
      $('#fixtures').empty().append(fixtures);
    }
  };
})(this);