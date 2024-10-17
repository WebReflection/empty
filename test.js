// all at once
import * as empty from './ness/index.js';

// or each one a part
import emptyArgs from './ness/args.js';
import emptyArguments from './ness/arguments.js';
import emptyArray from './ness/array.js';
import emptyArrow from './ness/arrow.js';
import emptyClass from './ness/class.js';
import emptyContext from './ness/context.js';
import emptyFalse from './ness/false.js';
import emptyFunction from './ness/function.js';
import emptyIdentity from './ness/identity.js';
import emptyObject from './ness/object.js';
import emptySymbol from './ness/symbol.js';
import emptyTrue from './ness/true.js';

console.assert(empty.args === emptyArgs);
console.assert(emptyArgs(1, 2).join('-') === '1-2');
console.assert(empty.arguments === emptyArguments);
console.assert(JSON.stringify(emptyArguments(1)) === '{"0":1}');
console.assert(empty.array === emptyArray);
console.assert(Array.isArray(emptyArray));
console.assert(JSON.stringify(emptyArray) === '[]');
console.assert(empty.arrow === emptyArrow);
console.assert(typeof emptyArrow === 'function');
console.assert(!emptyArrow());
console.assert(empty.class === emptyClass);
console.assert(new emptyClass instanceof emptyClass);
console.assert(empty.context === emptyContext);
console.assert(emptyContext.call(1) === 1);
console.assert(empty.false === emptyFalse);
console.assert(emptyFalse() === false);
console.assert(empty.function === emptyFunction);
console.assert(emptyFunction() === void 0);
console.assert(empty.identity === emptyIdentity);
console.assert(emptyIdentity(123) === 123);
console.assert(empty.object === emptyObject);
console.assert(JSON.stringify(emptyObject) === '{}');
console.assert(empty.symbol === emptySymbol);
console.assert(String(emptySymbol) === 'Symbol(empty)');
console.assert(empty.true === emptyTrue);
console.assert(emptyTrue() === true);
