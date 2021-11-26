/**
 * 10.5 迭代器和生成器
 */
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
/* function toArray<X>(xs: Iterable<X>): X[] {
  return [...xs]
} */
/* let someArray = [1, "string", false]

for (let entry of someArray) {
  console.log(entry)
} */
/* let list = [4, 5, 6];

for (let i in list) {
  console.log(i)
}

for (let i of list) {
  console.log(i)
} */
var pets = new Set(["cat", "dog", "hamster"]);
pets["species"] = "mammals";
for (var pet in pets) {
    console.log(pet);
}
try {
    for (var pets_1 = __values(pets), pets_1_1 = pets_1.next(); !pets_1_1.done; pets_1_1 = pets_1.next()) {
        var pet = pets_1_1.value;
        console.log(pet);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (pets_1_1 && !pets_1_1.done && (_a = pets_1["return"])) _a.call(pets_1);
    }
    finally { if (e_1) throw e_1.error; }
}
