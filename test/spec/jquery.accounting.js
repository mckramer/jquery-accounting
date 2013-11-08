describe("jQuery.accounting", function () {
  
  describe("formatMoney", function () {
    
    afterEach(utils.clearFixtures);
    
    it("formats one item", function () {
      var $item;
      
      utils.setFixture('<span>100</span>');
      
      $item = utils.$('span');
      $item.text().should.equal('100');
      $item.accounting('formatMoney');
      $item.text().should.equal('$100.00');
    });
    
    it("formats many items", function () {
      var $items;
      
      utils.setFixture('<span>100</span><span>100.0</span><span>100.00</span>');
      
      $items = utils.$('span');
      $items.accounting('formatMoney');
      
      $items.each( function () {
        $(this).text().should.equal('$100.00');
      });
      
    });
    
    it("formats with provided options", function () {
      var $item;
      
      utils.setFixture('<span>100</span>');
      
      $item = utils.$('span');
      $item.text().should.equal('100');
      $item.accounting('formatMoney', { symbol: '@' });
      $item.text().should.equal('@100.00');
    });
    
    it("formats with provided options", function () {
      var $item;
      
      utils.setFixture('<span data-options=\'{ "symbol": "@" }\'>100</span>');
      
      $item = utils.$('span');
      $item.text().should.equal('100');
      $item.accounting('formatMoney', { symbol: '@' });
      $item.text().should.equal('@100.00');
    });
    
  });
  
});