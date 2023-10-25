# Theory Assignment- Episode 5

> **What is the difference between Named Export, Default Export and \* as export?**

```
The export statement is used in modules to expose variables, functions, or classes so that they can be accessed and used in other parts of the application or in separate files.

Named Exports:-  With named exports, one can have multiple named exports per file.
Default Exports:- One can have only one default export per file.
`*` Export :- Import all the named exports onto an object.
```

> **What is the importance of config.js file?**

```
One purpose to add config.js file is to use static data which needs to be used all over the application.
They allow you to customize how you interact with an application or how an application interacts with the rest of your system.
```

> **What are React hooks?**

```
In React version 16.8, React introduced a new pattern called Hooks. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. Hooks allow you to reuse stateful logic without changing your component hierarchy.
```

> **Why do we need a useState hook?**

```
useState hook is used to maintain the state in our React application. It keeps track of the state changes.
The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.
This array has
1. The current state and
2. a function that updates it

Example-
  const [fruit, setFruit] = useState('banana');
where
- fruit is the state value,
- setFruit is the function that updates the state value
- 'banana' is the initial state value passed to useState as an argument

PS- This example follows the **Array Destructuring** JS Syntax.
It can also be obtained as:-

const fruitStateVariable = useState('banana');
const fruit = fruitStateVariable[0];
const setFruit = fruitStateVariable[1];

and it is same as the above defined in the example.
```
