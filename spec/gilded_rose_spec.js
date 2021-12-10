var assert = require("assert");

var gilded_rose = require("../src/gilded_rose");

describe("Gilded Rose,", function() {
  gilded_rose.update_quality();
  describe("has", function() {
    it("items in the inventory", function() {
      assert(gilded_rose.items.length > 0);
    });
  });
});