// ========================================================================
// Task 1 - Hex converter Class
// ========================================================================
  class Hex {
    constructor(num) {
      this.num = num;
    }

    toString() {
      return 'Ox' + this.num.toString(16).toUpperCase();
    }
    valueOf() {
      return this.num;
    }
    plus(entry) {

    }
    minus() {}
  }

const fancyHex = new Hex(255);

console.log(fancyHex.toString());
console.log(fancyHex.valueOf() + 1);
// ========================================================================
// Task 2 - Interactive dictionery Class
// ========================================================================
class Dictionary {
  constructor(){
    this._state = {};
  }
  newEntry(entity, description) {
    this._state[entity] = description;
  }
  look(entity) {
    return this._state[entity] || `Can't find entry for ${entity}`;
  }
  get state() {
    return this._state;
  }
  set state(newState) {
    this._state = newState;
  }
}

const book = new Dictionary();

book.newEntry('Hulk', 'Huge, big super hero. Hulk SMAAASH!');
book.newEntry('Hulk2', 'Huge, big super hero. Hulk SMAAASH!');
book.newEntry('Hulk3', 'Huge, big super hero. Hulk SMAAASH!');
book.newEntry('Hulk4', 'Huge, big super hero. Hulk SMAAASH!');

book.state = { name: 'Yevhen' };


// ========================================================================
// Task 3 - Pagination Helper Class
// ========================================================================

class PaginationHelper {
  constructor(items, amount){
    this.items = items;
    this.amount = amount;
  }

  pageCount(){
    return Math.ceil(this.items.length / this.amount);
  }

  itemCount(){
    return this.items.length;
  }

  pageItemCount(num){
    if (num >= this.pageCount()) {
      return -1;
    }
    if (num === 0) {
      return this.amount;
    }
    if (num === this.pageCount() - 1) {
      return this.itemCount() % this.amount;
    }
    return this.amount;
  }

  pageIndex(index){
    if (!this.itemCount() || index >= this.itemCount() || index < 0) {
      return -1;
    }
    if (index < this.amount) {
      return 0;
    }
    return Math.floor(index / this.amount);
  }
}

const helper = new PaginationHelper(['a','b','c','d','e','f','f'], 3);