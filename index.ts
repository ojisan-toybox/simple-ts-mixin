class Base {
  returnOne() {
    return 1;
  }
}

const mixin = {
  returnTwo() {
    return 2;
  },
};

Object.assign(Base.prototype, mixin);

const base = new Base();

console.log(base.returnOne());
console.log(base.returnTwo());
