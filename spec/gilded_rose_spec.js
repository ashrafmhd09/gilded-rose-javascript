var assert = require("assert");

var gilded_rose = require("../src/gilded_rose");

describe("Gilded Rose,", function() {
  gilded_rose.update_quality();
  describe("has", function() {
    it("items in the inventory", function() {
      assert(gilded_rose.items.length > 0);
    });
    it("+5 Dexterity Vest", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "+5 Dexterity Vest") {
          assert(gilded_rose.items[i].name == "+5 Dexterity Vest")
        }
      }
    });
    it("Aged Brie", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "Aged Brie") {
          assert(gilded_rose.items[i].name == "Aged Brie");
        }
      }
    });
    it("Elixir of the Mongoose", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "Elixir of the Mongoose") {
          assert(gilded_rose.items[i].name == "Elixir of the Mongoose");
        }
      }
    });
    it("Sulfuras, Hand of Ragnaros", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if(gilded_rose.items[i].name == "Sulfuras, Hand of Ragnaros") {
          assert(gilded_rose.items[i].name == "Sulfuras, Hand of Ragnaros");
        }
      }
    });
    it("Backstage passes to a TAFKAL80ETC concert", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
          assert(gilded_rose.items[i].name == "Backstage passes to a TAFKAL80ETC concert");
        }
      }
    });
    it("Conjured Mana Cake", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "Conjured Mana Cake") {
          assert(gilded_rose.items[i].name == "Conjured Mana Cake");
        }
      }
    });
  });
  describe("Did it lower both sell_in and quality today?", function() {
    it("for +5 Dexterity Vest", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "+5 Dexterity Vest") {
          assert(gilded_rose.items[i].sell_in < 10)
          assert(gilded_rose.items[i].quality < 20)
        }
      }
    });
    it("for Aged Brie only sell_in lowers quality increase", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "Aged Brie") {
          assert(gilded_rose.items[i].sell_in < 2);
          assert(gilded_rose.items[i].quality > 0);
        }
      }
    });
    it("for Elixir of the Mongoose", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "Elixir of the Mongoose") {
          assert(gilded_rose.items[i].sell_in < 5);
          assert(gilded_rose.items[i].quality < 7);
        }
      }
    });
    it("for Sulfuras, Hand of Ragnaros nothing changes", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "Sulfuras, Hand of Ragnaros") {
          assert(gilded_rose.items[i].sell_in == 0);
          assert(gilded_rose.items[i].quality == 80);
        }
      }
    });
    it("for Backstage passes to a TAFKAL80ETC concert sell_in decrease, quality increase", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
          assert(gilded_rose.items[i].sell_in < 15);
          assert(gilded_rose.items[i].quality > 20);
        }
      }  
    });
    it("for Conjured Mana Cake", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "Conjured Mana Cake") {
          assert(gilded_rose.items[i].sell_in < 3);
          assert(gilded_rose.items[i].quality < 6);
        }
      }
    });
  });
  describe("Quality is never Negative and never more than 50, not for Sulfuras", function() {
    it("for Dexterity Vest", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "+5 Dexterity Vest") {
          assert(gilded_rose.items[i].quality > 0 && gilded_rose.items[i].quality < 50)
        }
      }
    });
    it("for Aged Brie only sell_in lowers quality increase", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "Aged Brie") {
          assert(gilded_rose.items[i].quality > 0 && gilded_rose.items[i].quality < 50);
        }
      }
    });
    it("for Elixir of the Mongoose", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "Elixir of the Mongoose") {
          assert(gilded_rose.items[i].quality > 0 && gilded_rose.items[i].quality < 50);
        }
      }
    });
    it("for Sulfuras, Hand of Ragnaros nothing changes", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "Sulfuras, Hand of Ragnaros") {
          assert(gilded_rose.items[i].quality > 0 && gilded_rose.items[i].quality > 50);
        }
      }
    });
    it("for Conjured Mana Cake", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "Conjured Mana Cake") {
          assert(gilded_rose.items[i].quality > 0 && gilded_rose.items[i].quality < 50);
        }
      }
    });
  });
  describe("When sell_in is below 0,", function() {
    describe("decreases twice as fast", function() {
      it("for +5 Dexterity Vest", function() {
        for(let i=0;i<gilded_rose.items.length;i++) {
          if (gilded_rose.items[i].name == "+5 Dexterity Vest") {
            if (gilded_rose.items[i].sell_in < 0) {
              assert(gilded_rose.items[i].quality == (gilded_rose.items[i].quality-2));
            }
          }
        }
      });
      it("for Elixir of the Mongoose", function() {
        for(let i=0;i<gilded_rose.items.length;i++) {
          if (gilded_rose.items[i].name == "Elixir of the Mongoose") {
            if (gilded_rose.items[i].sell_in < 0) {
              assert(gilded_rose.items[i].quality == (gilded_rose.items[i].quality-2));
            }
          }
        }
      });
    });
  });
  // specific items in our inventory needs special interest
  describe("Conjured Mana Cake,", function() {
    it("decreases twice as fast as normal items", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i]["name"] == "Conjured Mana Cake") {
          assert(gilded_rose.items[i].quality == 4);
        }
      }
    });
  });
  describe("Sulfuras is legendary item,", function() {
    it("does not change at all", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "Sulfuras, Hand of Ragnaros") {
          assert(gilded_rose.items[i].sell_in == 0);
          assert(gilded_rose.items[i].quality == 80);
        }
      }
    })
  });
  describe("Backstage Passes", function() {
    it("increases in quality as sell_in decreases", function() {
      for(var i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
          assert(gilded_rose.items[i].sell_in < 15);
          assert(gilded_rose.items[i].quality > 20);
        }
      }
    });
  });
  describe("Aged Brie", function() {
    it("increase in quality as it gets older", function() {
      for(let i=0;i<gilded_rose.items.length;i++) {
        if (gilded_rose.items[i].name == "Aged Brie") {
          assert(gilded_rose.items[i].quality > 0);
        }
      }
    })
  })
});