var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.returnOne = function () {
        return 1;
    };
    return Base;
}());
var mixin = {
    returnTwo: function () {
        return 2;
    }
};
Object.assign(Base.prototype, mixin);
var b = new Base();
console.log(b.returnOne());
console.log(b.returnTwo());
