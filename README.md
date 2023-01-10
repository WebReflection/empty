# @webreflection/empty

<sup>**Social Media Photo by [Adlan](https://unsplash.com/@adlan7000) on [Unsplash](https://unsplash.com/)**</sup>

This is basically the same as [empty](https://www.npmjs.com/package/empty) except it's a dual module and it doesn't care about freezing callbacks (for better or worse) but it does freeze other references, such as *array* or *object*, and even in production, where *IMHO* it matters most.

```js
import {
  args,                   // (...args) => args
  arguments as Arguments, // function arguments
  array,                  // Object.freeze([])
  context,                // function context
  false as False,         // () => false
  function as noop,       // () => {}
  identity,               // any => any
  object,                 // Object.freeze({})
  string as str,          // ''
  true as True            // () => true
} from '@webreflection/empty';
```

### isolated exports

Each utility can be imported directly without bloating the outcome:

```js
import args from '@webreflection/empty/args';
import arguments as Arguments from '@webreflection/empty/arguments';
import array from '@webreflection/empty/array';
import context from '@webreflection/empty/context';
import false as False from '@webreflection/empty/false';
import function as noop from '@webreflection/empty/function';
import identity from '@webreflection/empty/identity';
import object from '@webreflection/empty/object';
import string as str from '@webreflection/empty/string';
import true as True from '@webreflection/empty/true';
```

### ... but why?

I use one of these utilities all over the place in my projects so I've decided that this approch would work better.
