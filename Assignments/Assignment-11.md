# Theory Assignment- Episode 11

> **What is prop drilling?**

```
Suppose we have a nested structure of Components, and some data has to be passed in the order from parent to Subchild Component ( Parent Component -> Child 1 -> SubChild 1).
So, the parent data will essentially send data first to the Child1 component and which in turn will send data to SubChild1.
Child1 has nothing to do with the data, it just uses it to pass the data to Subchild1.
But even then we pass it as it is required for SubChild1. This concept is known as prop drilling.
```

> **What is lifting the state up?**

```
Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up.
```

> **What are Context Provider and Context Consumer?**

```
- Context Provider
1. Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

2. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

- Context Consumer
1. A React component that subscribes to context changes. Using this component lets you subscribe to a context within a class component.
```

> **If you don't pass a value to the provider does it take the default value?**

```
Yes, in React, if you don't pass a value to the Context.Provider, it will take on the default value that was specified when the context was created using React.createContext(defaultValue).

The default value is used when a component does not have a matching Provider above it in the component tree. That means, if you have a context consumer component and it's not wrapped in the corresponding Provider, React will fall back to the default value.

If you do use a Provider but do not pass a value to it, React will warn you because it expects a value to be passed. However, if you pass undefined, intentionally or unintentionally, as the value to the Provider, the components consuming this context will revert to the default value.
```
