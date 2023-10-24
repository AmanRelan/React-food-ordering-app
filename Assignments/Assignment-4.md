# Theory Assignment- Episode 4

> **is JSX mandatory for React?**
```
JSX is simple an extension syntax to JS that simplifies the code development and helps us write better and clean code. But in no way is JSX Mandatory for React. We can write the same code using React.createElement and still achieve the same result.
```

> **IS ES6 mandatory for React?**
```
It is not mandatory to learn ES6 for ReactJS, but it is beneficial as it makes the code more readable and maintainable.
```

> **{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.**

```
{TitleComponent}: This is used when you want to reference a React component as a variable. 
{<TitleComponent/>}: This is a way to directly render the TitleComponent in JSX.
{<TitleComponent></TitleComponent>}: This is also a way to directly render the TitleComponent in JSX. The only difference is that it explicitly uses the opening and closing tags for the component. It doesn't make any difference in rendering the component. 
```
> **How can I write comments in JSX?**

```
To write comments in JSX we use the syntax:- `{/* */}`
```

> **What is <React.Fragment></React.Fragment> and <></>?**
```
<React.Fragment></React.Fragment> is a way for a component to return multiple elements.
Fragment lets you group a list of children without adding extra nodes to the DOM.

Example-
const HeadingComponent = () => {
    return(
        <React.Fragment>
            <ChildA/>
            <ChildB/>
            <ChildC/>
        </React.Fragment>
    )
};
<></> is the latest short syntax for React Fragments
```
>**What is Virtual DOM?**

```
It is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM.
```
>**What is Reconciliation in React?**

```
Reconciliation is the process through which React updates the browser DOM and makes React work faster.
React uses a diffing algorithm so that the component updates are predictable and faster.
React would first calculate the difference between the real DOM and the copy of DOM(Virtual DOM) when there's an update of components.
React stores a copy of Browser DOM which is called a Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by the diffing algorithm. React compares the Virtual DOM with the Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest of the nodes as it is. 
This process is called Reconciliation.
```

> **What is React Fiber?**

```
React Fiber is a concept of React JS that is used to render a system faster and smoother. 
Introduced from React 16, Fiber Reconciler is the new reconciliation algorithm in React.
The term fiber refers to React's data structure/architecture and originates from 'fiber'-
a representation of a node of the DOM tree.

Earlier React had a stack reconciler, which changed from React 16 and now uses the Fiber Reconciler.
Stack Reconciler was synchronous and it worked like a stack. Add/Remove items, but it had to work until the stack was empty.
Couldn't be interrupted. So, what would happen is that suppose there was a network call that would render the elements and
we had a text field, and before it's response if we started typing in the text field, we would experience a delay,
because stack reconciler was in the middle of processing those elements.

Fiber is asynchronous, as compared to the stack reconciler. It is a JS Object, a unit of work.

It breaks the computation of the component tree into nodes, or 'units' of work that it can commit at any time.
This allows react to pause, resume or restart computation for various components.

Fiber allows the reconciliation and rendering to the DOM to be split into 2 separate phases:
1. Reconciliation 

- creates an Effect list to be rendered in the UI
- Post computation of the list, schedules these changes to be executed in the next phase

2. Commit
- React tells the DOM to render the effect list from Phase 1
- This phase is not interrupted, but phase 1 can be interrupted.

```

> **Why do we need Keys in React?**

```
A `key` is a special attribute we need to include when creating list of elements in React.Keys are used in react to identify which items in the list are changed, updated or deleted.
```

> **Can we use index as keys in React?**

```
Yes, we can use index as keys in React, but it is not considered as a good practice to use them because if for example, a key is removed from the middle of an array, there will be a reorder of indexes and that means that the particular index will be assigned to some other element and that key(index) will still be present in the array.
And if the key is same as before React assumes that the DOM element represents the same component as before.
But that is no longer true.It may break your application and display wrong data!
```

> **What is props in React? **

```
props is a shorthand for properties. Props are arguments passed into React components. Props are used in React to pass dynamic data.
Example- 
<RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>
where resName, cuisine are properties in the props object and can be accessed as props.resName/ const{resName} = props;
```

> **What is a config driven UI?**
```
Config driven UI is a user interface that is built and configured using a declarative configuration file or data structure rather than being hardcoded.
The configuration file typically contains information about the structure of the UI, such as the layout of the elements, the properties and behaviors of each element, and any data sources or APIs that the UI interacts with.
Using this type of approach, the UI can be easily modified and customized without requiring changes to the underlying codebase.
This makes it easier to maintain, extend and scale the UI, and allows for more rapid development and iteration.
```