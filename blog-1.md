## `any` vs `unknown` in Typescript: Type Safety, Type Holes, and Narrowing

# Introduction
Static type system is the most powerful side of the typescript but it works perfectly when we use it effectively. `any` and `unknown` seems similar but they have some huge difference.

## What is `any` and why is it risky?
The `any` type tells TypeScript:

“Trust me, I know what I’m doing.”

But the problem is—TypeScript stops checking anything.
```
let data: any = "Hello";

data = 42;
data.toUpperCase();
```

Here, TypeScript allows invalid operations because `any` disables all type checking. This creates bugs that only appear at runtime.

That’s why any is called a type safety hole—it bypasses the entire type system.

## `unknown`: A Safer Alternative
The `unknown` type is like a strict version of `any` but it actually much safer then `any`.
```
let data: unknown = "Hello";

data = 42;
data.toUpperCase();
```

TypeScript now forces to check the type before using it.

## What is Type Narrowing?
Type narrowing is the technique of writing runtime checks that progressively narrow down the possible types of a value. 
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
`any` make our code complicated but `unknown` help us to maintain clean codebase.