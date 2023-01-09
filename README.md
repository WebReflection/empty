# @webreflection/empty

This is basically the same as [empty](https://www.npmjs.com/package/empty) except it's a dual module and it doesn't care about freezing callbacks (for better or worse) but it does freeze other references, such as *array* or *object*, and even in production, where *IMHO* it matters most.
