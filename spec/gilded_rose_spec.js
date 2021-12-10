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
          assert(gilded_rose.items[i].name != "+5 Dexterity Vest")
        }
      }
    });
  });
});