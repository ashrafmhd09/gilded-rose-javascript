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
  });
});