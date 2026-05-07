# The Four Pillars of OOP in TypeScript
## Introduction
When the project size is small all works perfectly. When that small project getting bigger and bigger then different types of issues arise in the codebase. The codebase is going more and more chaotic when features are added.To handle those chaos the four pillars of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction are always ready to handle all of these.

## Pillar 1: Encapsulation - Guard of the state
Encapsulation means hiding internal state and implementation details, exposing only a controlled, intentional public interface. It prevents external code from putting an object into an invalid state.

#### With Encapsulation :
```
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}
```

#### without Encapsulation:
```
account.balance = -50000;
```

## Pillar 2:  Inheritance — Reuse Without Repetition
Inheritance allows one class to reuse properties and behavior from another class.

#### Parent class
```
class Animal {
  move() {
    console.log("Moving...");
  }
}
```

#### Child class
```
class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}
```

### Why it reduces complexity

#### Without inheritance:
```
class Dog {
  move() {}
}

class Cat {
  move() {}
}
```
I have to repeat shared logic everywhere.

Inheritance centralizes common behavior.

## Pillar 3: Polymorphism — One Interface, Many Behaviors
Polymorphism means:

Different objects can be used through the same interface.

Same method name → different behavior.

#### Example
```
class Bird {
  makeSound() {
    console.log("Bird sound");
  }
}

class Crow extends Bird {
  makeSound() {
    console.log("Caw!");
  }
}

class Sparrow extends Bird {
  makeSound() {
    console.log("Chirp!");
  }
}
```
```
const birds: Bird[] = [new Crow(), new Sparrow()];

birds.forEach((bird) => bird.makeSound());
```

Each object behaves differently.

### Why it reduces complexity

#### Without polymorphism:
```
if (type === "crow") {}
else if (type === "sparrow") {}
```

## Pillar 4: Abstraction — Hide Complexity, Expose Intent
Abstraction means:

Showing only essential features while hiding complex internal logic.

It focuses on what something does, not how it works.

#### Example
```
abstract class Payment {
  abstract pay(amount: number): void;
}
```

Different payment systems implement their own logic:
```
class StripePayment extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} using Stripe`);
  }
}
```

### Why it reduces complexity

A developer using the payment system only needs:

```
payment.pay(100);
```

They don’t care about:

API requests
token generation
gateway validation
retries

All complexity stays hidden internally.


## Conclusion
Encapsulation puts rules where they belong. Inheritance eliminates repetition. Polymorphism opens extension points. Abstraction separates what from how. Together, they transform a growing codebase from a fragile tangle into a system you can reason about, test in isolation, and extend with confidence.