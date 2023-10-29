# Episode 9:- Optimising our App!

### Episodes Highlight

- Custom Hooks => Create our own custom hook(function). How to use this custom hook to make code more modular.
- Single Responsibility Principle => A single identity of code should have a single responsibility.
- Optimising the app by breaking the code into different modules
- Modularity => Break down the code into different small modules, makes the code more maintainable & testable.
- Make code reusable, maintainable, testable.
- SRP does not have a hard & fast rule.

#### Custom Hook

1. We will create one custom Hook in RestaurantMenu.
2. 2 major responsibility - fetching data - Displaying the data
3. Trying to abstract the fetch data logic and put it inside a custom hook(say useRestaurantMenu hook).
4. So, we will give the restaurantId to the hook and we expect the hook to return the data to us.
5. This frees the responsibility of the Component to think about fetching the data.
6. The best place to put/create custom hooks is to put it under utils(as they are utility function).
7. Start the hook name with `use` and small Letter at the beginning.

We create the hook similarly as creating a normal component, and export and import it and use it.

Hook will look like this:-

```
import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  // Fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${MENU_API_URL}${restaurantId}`);
    const json = await data.json();
    setRestaurantInfo(json.data);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;

```

We will create a custom hook to check if the user has internet connection/not(Offline/Online)

For writing the custom hooks:-

1. Create a contract for the hook
2. Contract means the input of the hook & what will be the output of the hook.

Another question- is it mandatory to use `use` keyword while creating a hook?

- No, it is not mandatory, but it is advised even by React.
- Using `use` gives clear indication that it is a hook.

##### Optimise the app even further

- Bundling -> Takes all your file and bundles it into one.

> Problems with Large scale app

- When you have a lot of components and when we produce a production ready app, it will create one js file
- But with the increasing number of components, the JS file will become very huge.
- With this file becoming huge, the app will become very slow.
- So, we have to keep this in mind and then we have to break the app down to smaller pieces.
- Can we break down the app in smaller js files? Yes, we can
- We will try to make smaller bundles of this file.
- To break down the app into smaller chunks.
- This process is known as `chunking/code splitting/dynamic bundling/Lazy Loading.`

> How to make smaller bundles? When to make smaller bundles? What should be there in these smaller bundles?

- Logical separation of a bundle(A bundle should have enough code for a major feature)
- In say, example of Make My trip- Make a bundle for only Flights, only hotels can form one bundle, only homestays can make one bundle and so on.
- So, this does not put the load on a single bundle.

> How to do logical bundle in our app?

- Hypothetical situation, we have another business of grocery delivery and the grocery vertical has its own 100 components
- So, what we will do is, create different bundle for Grocery
- So, we create a path and then a link to navigate to Grocery
- Wherever we are importing Grocery, we will not import Grocery directly, we will use lazy loading to load Grocery.
- Lazy Loading- When app will load, it will not load the page for grocery. But, when we go to the link, that is when our Grocery code will load. Also known as `On-Demand Loading`
- To Lazy Load, we will use `lazy()` which comes in as a Named import from the React package.
- So, this `lazy()` takes a callback function.
- In the callback function, we will add an import(which is not equal to the import that we do at the top of the component), but this import is basically a function and then this function will take the path of the Grocery Component.
- This will look like this - `const Grocery = lazy(() => import("./components/Grocery"));`
- This single line of code is very powerful and it can do a lot of things
- When we load the Grocery page, we will see that the Grocery has its own JS code(Network tab > JS)
- This means we have bundled the Grocery code separately into our app
- But when you do this and reload the page, we will see an error as below

```
index.js:1 React Router caught the following error during render Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
```

> Why did this error happen?

- What happened was when we loaded the homepage, we will have one file and it will not have Grocery code.
- We are getting the Grocery code on demand, when we click on Grocery Tab, only then we get the Grocery code on demand.
- Now react, throw an error that something went wrong, because the grocery code took some time to load.
- So that is why React suspended the rendering, so it cannot load and it threw an error
- We will use `Suspense`, which is a component given to us by React.
- So, we will import it from "React" and then we can wrap the component in suspense like

```
{
    path: "/grocery",
    element: (
        <Suspense>
        <Grocery />
        </Suspense>
    ),
}
```

- And then we will have to give this `Suspense` as a placeholder in the `fallback` attribute.
- We need this fallback because it states what should React render when the code for `Grocery` is not available.
- So, like a Loading screen.
- We can pass a JSX, like as below

```
{
    path: "/grocery",
    element: (
        <Suspense fallback={<h1>Loading.....</h1>}>
        <Grocery />
        </Suspense>
    ),
}
```

> SAME CONCEPT, DIFFERENT NAMES

- Chunking
- Code Splitting
- Dynamic Bundling
- Lazy Loading
- On Demand Loading
- Dynamic Import
