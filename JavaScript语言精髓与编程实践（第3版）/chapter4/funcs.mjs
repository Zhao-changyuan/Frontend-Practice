export function foo() {
    return this;
};

export var f2 = () => {
    return this;
};

console.log(this);

