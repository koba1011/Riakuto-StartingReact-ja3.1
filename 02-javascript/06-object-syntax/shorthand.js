const keyName = 'bar';
const baz = 65536;
const obj1 = { foo: 256, [keyName]: 4096, baz: baz };
console.log(obj1);

const obj2 = { baz };
console.log(obj2);
