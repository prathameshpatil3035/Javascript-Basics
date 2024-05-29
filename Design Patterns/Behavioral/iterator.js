class Iterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }

  next() {
    if (this.index < this.items.length) {
      return {
        value: this.items[this.index++],
        done: false,
      };
    } else {
      return {
        done: true,
      };
    }
  }
}

const items = [1, 2, 3, 4, 5];
const iterator = new Iterator(items);

let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}
