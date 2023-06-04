function Boo() {
  console.log("start");
  let count = 0;
  const iterator = {
    next: function () {
      count++;
      if (count === 1) {
        return { value: 1, done: false };
      } else if (count === 2) {
        return { value: 2, done: false };
      } else if (count === 3) {
        return { value: 3, done: false };
      } else {
        console.log("finish");
        return { done: true };
      }
    },
  };
  return iterator;
}

const iterator = Boo();
console.log(iterator.next().value); // 1
console.log(iterator.next().done); // false

