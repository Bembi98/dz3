Array.prototype.myFilter = function (callback, cont = null) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    if (callback.call(cont, this[index], index, this)) {
      result.push(this[index]);
    }
  }
  return result;
};

const person = [
  { name: "God", age: 999, job: "relax" },
  { name: "Bless", age: 16, job: "doingSomething" },
  { name: "Rng", age: 22 },
];
const filterpers = person.myFilter((people, index, arr) => people.age > 18);

const log100 = () => console.log(100);
function createDebounceFunction(log100, ms) {
  let delay;
  return function debounced() {
    clearTimeout(delay);
    let ar = arguments;
    let th = this;
    delay = setTimeout(function callOriginalFn() {
      log100.apply(th, ar);
    }, ms);
  };
}
const debounceLog100 = createDebounceFunction(log100, 1000);
debounceLog100();
setTimeout(debounceLog100, 200);
setTimeout(debounceLog100, 400);
