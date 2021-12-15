function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function isNotAgedBrie(item) {
  if (item.name != "Aged Brie") {
    return item.name;
  }
}

function isNotSulfuras(item) {
  if (item.name != "Sulfuras, Hand of Ragnaros") {
    return item.name;
  }
}

function isNotBackstage(item) {
  if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
    return item.name;
  }
}

function isQualityLessThan50(item) {
  return item.quality < 50;
}

function isQualityGreaterThan0(item) {
  return item.quality > 0;
}

function isSellInLessThan11(item) {
  return item.sell_in < 11;
}

function isSellInLessThan6(item) {
  return item.sell_in < 6;
}

function isSellInLessThan0(item) {
  return item.sell_in < 0;
}

function whenQualityGreaterThanZero(item) {
  if (isQualityGreaterThan0(item)) {
    if ((isNotSulfuras(item))) {
      item.quality = item.quality - 1;
    }
  }
}

function whenQualityLessThan50(item) {
  if (isQualityLessThan50(item)) {
    item.quality = item.quality + 1;
  }
}

function whenConcertIsDone(item) {
  item.quality = item.quality - item.quality;
}

function BackstageActivity(item) {
  if (isSellInLessThan11(item)) {
    whenQualityLessThan50(item);
  }
  if (isSellInLessThan6(item)) {
    whenQualityLessThan50(item);
  }
}

function whenSellInLessThanZero(item) {
  if ((isNotAgedBrie(item))) {
    if ((isNotBackstage(item))) {
      whenQualityGreaterThanZero(item);
    } else {
      whenConcertIsDone(item);
    }
  } else {
    whenQualityLessThan50(item);
  }
}

function updateQuality() {
  items.map(function(item) {
    if (isNotAgedBrie(item) && isNotBackstage(item)) {
      whenQualityGreaterThanZero(item);
    } else {
      if (isQualityLessThan50(item)) {
        item.quality = item.quality + 1;
        BackstageActivity(item);
      }
    }
    if (isNotSulfuras(item)) {
      item.sell_in = item.sell_in - 1;
    }
    if (isSellInLessThan0(item)) {
      whenSellInLessThanZero(item);
    }
  });
}

updateQuality();

module.exports.items = items;

module.exports.update_quality = updateQuality;

