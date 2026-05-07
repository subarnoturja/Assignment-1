# `any` vs `unknown` in Typescript: Type Safety, Type Holes, and Narrowing

## Introduction
Static type system is the most powerful side of the typescript but it works perfectly when we use it effectively. `any` and `unknown` seems similar but they have some huge difference.

## What is `any` and why is it risky?
The `any` type tells TypeScript all the time that:

“Trust me, I know what I’m doing.”

But the problem is typescript trust the process and stops checking anything.
```
let data: any = "Hello";

data = 42;
data.toUpperCase();
```

Here, TypeScript allows invalid operations because `any` disables all type checking. This creates bugs that only appear at runtime.

That’s why `any` is called a type safety hole because it bypasses the entire type system.

## `unknown`: A Safer Alternative
The `unknown` type is like a strict version of `any` but it actually much safer then `any`.
```
let data: unknown = "Hello";

data = 42;
data.toUpperCase();
```

TypeScript now forces to check the type before using it.

## What is Type Narrowing?
Type narrowing involves writing runtime checks that gradually reduce the set of possible types for a value.  
```
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

### Common Type Narrowing Techniques
`typeof` check: 
```
if (typeof value === "number") {
  // value is number
}
```

`instanceof` check:
```
if (typeof value === "number") {
  // value is number
}
```

## Conclusion
The basic idea is simple: to opt out of TypeScript, use `any`; to stay in it, use unknown. Declare data as `unknown` and use type narrowing to safely extract the required information when it comes from external sources like an API call, a parsed JSON string, or a user event.

Type narrowing through typeof, instanceof, the in operator, and custom type predicates has provided you with precise, runtime-validated control over your current work. Your code becomes more secure and self-explanatory—every narrowing check is a clear declaration of what you anticipate to be correct