# Episode 5:- Let's get Hooked!

> Everything you can do with React, it can be done by HTML,CSS, JS. So, why react?

- It makes the developer experience easy. Makes you write less code and do more on the webpage.
React gives you super-powers, so that you can build these large scale production-ready performant applications.
React makes the coding experience very fast and optimises things on the web page so that things happen very fast.

> Best Practice in the industry is to make separate files for separate components

React folder structure(Popular Industry Approach), you can structure however you want-
All the main code remains in the src folder.
All the components go to the src/components folder

Some people write their file extension as `.jsx`/`.tsx`(if using typescript). But again, it is a personal choice.

When you move the components to their respective files under src/components,
you will see that there is an error which says that the component is undefined.
It comes because we now moved the components out of those files. So, we will have to import our components into the main `app.js`

But to import the components, we will first need to export the component
What is exporting a component?
-> The export statement is used in modules to expose variables, functions, or classes so that they can be accessed and used in other parts of the application or in separate files.

Exporting can be done in two ways:-
> 1. Default Exports => `export default <component name>`, which enables it to be imported in the main `app.js` file.
> 2. Named Exports => `export const <variable_name>`, used when in a single file you have to export multiple things

Each file can have only 1 default export. So, if you have to export multiple things we can use Named exports

Similarly, we have two types of imports

> 1. Default Import => `import resList from "../utils/mockData";`
> 2. Named Import => `import { CDN_URL } from "../utils/constants";`

====> Make our App Interactive/Dynamic <====
We will create a Filter button -> on click of which, we will filter the top rated restaurant (rating >4 stars)

Event Handlers ->
`OnClick Event` => we will just pass an attribute to the element where we want to pass the event handler
For every type of event handler in JS, there is an event handler in React

We added an onClick event on the `top rated restuarants` button, so on button click we filter out the required data based on
the average rating of the restaurant. But that does not display the updated list of restaurants in the UI.
And on any change we expect, that the UI updates automatically? So to do this, react gives us a superpower
With this superpower, any normal JS variable will change to super powerful React variable, which is also known as a
`State Variable`.

So to change a normal JS variable to a state variable, we use a react HOOK, called `useState`.

A react hook is normal JS function, that is given to us by REACT, it is pre built and it has some logic written that acts as a utility function given by react to us. These functions are written by fb developers, written inside the React core.

To use these, we will have to import these utility functions inside our code.
Two very important hooks -

1. useState() - used to generate state variables in React
2. useEffect()

First thing to do when using a hook is to import it.
We import a hook as a named export(`import {useState} from 'React';`)

useState() - is used to create a state variable. It is called state variable because it maintains the state of your component.
To create a state variable - `const [listOfRestaurants, setListOfRestaurants] = useState();

To modify/update the state variable, we need to modify it as a function and it comes in as the second parameter of the array.
and it is called `setListOfRestaurants`, we can name it anything but it is just a convention and is not a mandatory thing.

To update, we will call the function and pass in the new data inside the function.

Why is it super powerful?
As compared to a normal JS variable, it will not just change the JS object but will also update the UI while the UI would never update in a normal JS Variable.
State Variable keeps the UI in sync with that variable.
As soon as the list of restaurant changes, it will automatically refresh our component. This is known as `Render`.
Whenever a state variable updates, React re renders the component.

IMPORTANT >> That logic of updating the UI is re-rendering. React makes the app fast by only doing DOM manipulation operations.

HOW React Works BTS?
-> React uses Reconciliation Algorithm. Whenever something changes in the DOM it is known as Reconciliation.
In React 16 to update the DOM a new Algorithm came out, this Reconciliation algorithm is called React fiber.

![React-core](React-core.png)
React creates a Virtual DOM. Virtual DOM is a representation of the real/Actual DOM.
It is just a JS object which contains all the React Elements. or a Virtual Representation of all the HTML elements.

Diff Algorithm just finds out the difference between two virtual DOM, i.e Old Virtual DOM and the updated(New) Virtual DOM.
It will calculate the difference and will then actually update the DOM on every Render cycle and that is how React becomes fast.

Finding out difference between two HTML element is slow while finding difference in JS Object is fast.

Whenever there is any change in any state variable, React will find out the difference between the virtual DOM and it will re render the component, update the DOM.

QUESTION for INTERVIEWS =>
Why is React fast?
React is fast because it does efficient DOM Manipulation.
How does it do efficient DOM Manipulation?
-> It has a virtual DOM which is a representation of the real DOM.
React can find out the difference between virtual DOMs and update the UI

`useState Information => `
useState(state, setState) Second argument(setState is a function and this function will automatically re render the UI) => There needs to be a trigger to start the diff algorithm and update the UI
-> useState keeps the UI Layer and Data Layer in Sync.
useState returns an Array and that is why we destructure it.
BTS we can also write use State like:-

```
const arr = useState(resList);
const listOfRestaurants = arr[0];
const setListOfRestaurants = arr[1];
```
