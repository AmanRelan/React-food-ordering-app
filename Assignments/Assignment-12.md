# Theory Assignment- Episode 12

> **useContext vs Redux?**

```
- useContext is a hook in React that allows you to access data from a context. A context in React is designed to share data that can be considered “global” for a tree of React components, like the currently authenticated user, theme, or preferred language.

- Redux is a predictable state container for JavaScript apps, and it’s often used with React. It helps you manage the state of the application in a single immutable state tree.

- useContext vs Redux: The Comparison
    => Complexity: Redux is more complex to set up, whereas useContext is quite straightforward.
    => Performance: For large applications, Redux has optimizations to avoid unnecessary re-renders that useContext lacks without careful implementation.
```

> **Advantages of Using Redux Toolkit over Redux?**

```
RTK has Simplified Configuration, reduces boilerplate and is preconfigured
RTK has better state management with creating slices and reducers
```

> **Explain Dispatcher.**

```
"Dispatching" is the process of sending actions to the Redux store to update state.
Example of usage of Dispatch:-

import { useDispatch } from 'react-redux';

const dispatch = useDispatch();

dispatch(cart.clearCart());
```

> **Explain Reducer.**

```
A reducer is a function that determines how the state of an application changes in response to an action sent to the store
Example of reducer usage:-
    "
    const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
    });
    "
```

> **Explain Slice?**

```
A "slice" refers to a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. A slice is responsible for handling all updates to a specific piece of your Redux state.
```

> **Explain Selector?**

```
A selector is a function that allows you to select and derive data from the Redux store.

We get a hook provided to us by React-redux, which we can use :-
"
    import {useSelector} from "react-redux";
    const cartItems = useSelector((store) => store.cart.items);
"
```

> **Explain createSlice and the configuration it takes?**

```
CreateSlice is a function from Redux Toolkit (RTK) that simplifies the creation of reducer logic. It accepts a single configuration object as an argument, which specifies the slice's name, its initial state, the reducers that handle specific actions, and can also handle extra reducers for dealing with actions defined outside of the slice.

Example of creating a slice:-
"
    import { createSlice } from "@reduxjs/toolkit";

    const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
        state.items.push(action.payload);
        },
        removeItem: (state) => {
        state.items.pop();
        },
        clearCart: (state) => {
        state.items.length = 0;
        },
    },
    });

    export const { addItem, removeItem, clearCart } = cartSlice.actions;
    export default cartSlice.reducer;

"

- name: A string that is used as the prefix for the generated action types.
- initialState: The initial state for the reducer that is being defined.
- reducers: An object where keys are action names that will be generated and the values are the corresponding reducer functions for handling those actions.

```
