describe("jQuery.accounting", function () {
  
  var ITEMS = {
    "0.01"    : { integer: "0",         money: "$0.01",         number2: "0.01"         },
    "0.1"     : { integer: "0",         money: "$0.10",         number2: "0.10"         },
    "0"       : { integer: "0",         money: "$0.00",         number2: "0.00"         },
    "1"       : { integer: "1",         money: "$1.00",         number2: "1.00"         },
    "10"      : { integer: "10",        money: "$10.00",        number2: "10.00"        },
    "100"     : { integer: "100",       money: "$100.00",       number2: "100.00"       },
    "100.0"   : { integer: "100",       money: "$100.00",       number2: "100.00"       },
    "100.00"  : { integer: "100",       money: "$100.00",       number2: "100.00"       },
    "5318008" : { integer: "5,318,008", money: "$5,318,008.00", number2: "5,318,008.00" }
  };
  
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
      
      utils.setFixture(utils.buildElements(ITEMS));
      
      $items = utils.$();
      $items.accounting('formatMoney');
      
      $items.each( function () {
        var $item = $(this);
        $item.text().should.equal(ITEMS[$item.data('raw')].money);
      });
      
    });
    
    it("formats with programatic options", function () {
      var $item;
      
      utils.setFixture('<span>5318008</span>');
      
      $item = utils.$('span');
      $item.text().should.equal('5318008');
      $item.accounting('formatMoney', { symbol: "GBP", format: "%v %s" });
      $item.text().should.equal('5,318,008.00 GBP');
    });
    
    it("formats with data options", function () {
      var $item;
      
      utils.setFixture('<span data-options=\'{ "symbol": "GBP", "format": "%v %s" }\'>5318008</span>');
      
      $item = utils.$('span');
      
      $item.text().should.equal('5318008');
      $item.accounting('formatMoney');
      $item.text().should.equal('5,318,008.00 GBP');
    });
    
  });
  
  describe("formatNumber", function () {
    
    afterEach(utils.clearFixtures);
    
    it("formats one item as integer", function () {
      var $item;
      
      utils.setFixture('<span>100.00</span>');
      
      $item = utils.$('span');
      $item.text().should.equal('100.00');
      $item.accounting('formatNumber');
      $item.text().should.equal('100');
    });
    
    it("formats many items as integers", function () {
      var $items;
      
      utils.setFixture(utils.buildElements(ITEMS));
      
      $items = utils.$();
      $items.accounting('formatNumber');
      
      $items.each( function () {
        var $item = $(this);
        $item.text().should.equal(ITEMS[$item.data('raw')].integer);
      });
      
    });
    
    it("formats one item with precision 2", function () {
      var $item;
      
      utils.setFixture('<span>100.00</span>');
      
      $item = utils.$('span');
      $item.text().should.equal('100.00');
      $item.accounting('formatNumber', 2);
      $item.text().should.equal('100.00');
    });
    
    it("formats many items with precision 2", function () {
      var $items;
      
      utils.setFixture(utils.buildElements(ITEMS));
      
      $items = utils.$();
      $items.accounting('formatNumber', 2);
      
      $items.each( function () {
        var $item = $(this);
        $item.text().should.equal(ITEMS[$item.data('raw')].number2);
      });
      
    });
    
  });
  
});