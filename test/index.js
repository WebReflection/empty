const {
  args,
  arguments: Arguments,
  array,
  context,
  false: False,
  function: fn,
  identity,
  object,
  string: str,
  true: True
} = require('../cjs');

console.assert(args(1, 2).join(',') === '1,2');
console.assert(JSON.stringify(Arguments(1, 2)) === '{"0":1,"1":2}');
console.assert(Arguments(1, 2).length === 2);
console.assert(JSON.stringify(array) === '[]');
console.assert(JSON.stringify(context.call({a:1})) === '{"a":1}');
console.assert(False() === false);
console.assert(fn() === void 0);
console.assert(identity(1) === 1);
console.assert(JSON.stringify(object) === '{}');
console.assert(str === '');
console.assert(True() === true);
