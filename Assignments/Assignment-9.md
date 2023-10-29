# Theory Assignment- Episode 9

> **When and why do we need lazy()?**

```
There are certain issues when you are trying to build Large scale applications.
They might have a lot of Components and these components when bundled together to be shipped to production produce a single js file.
This single js file contains all the code that is needed in our app.
But as the application grows, the size of this js file increases, and so we need to break our code down into smaller chunks.
So, in order to break down the code into smaller chunks, we use Lazy loading and for lazy loading we call lazy() function given to us by React.
```

> **What is suspense?**

```
Suspence is a component provided by react , it is used to load to add delays when we are performing a dynamic import in our application.

```

> **Why we got this error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To Fix, update that suspend should be wrapped with startTransition? How does suspense fix this error?**

```
What happened was when we loaded the homepage, we will have one js file for the homepage and it will not have the js code for the route we are trying to access. This is because, we do on Demand Loading. So, react render cycle is very fast and if it does not receive the code during this rendering cycle, it will throw an error that we see above. SO, in our on demand loading case our file took around 2s to load which is slower than the react render cycle. Hence, the error.

We will use `Suspense`, which is a component given to us by React.
So, we will import it from "React" and then we can wrap the component in suspense like
{
    path: "/grocery",
    element: (
        <Suspense>
        <Grocery />
        </Suspense>
    ),
}
And then we will have to give this `Suspense` as a placeholder in the `fallback` attribute.
We need this fallback because it states what should React render when the code for `Grocery` is not available.
So, like a Loading screen.
e can pass a JSX, like as below

{
    path: "/grocery",
    element: (
        <Suspense fallback={<h1>Loading.....</h1>}>
        <Grocery />
        </Suspense>
    ),
}

Suspense fixes this error by using a fallback for rendering for the time it takes for the grocery page to load, this way the page is loaded successfully and the render cycle also has code to be rendered. So, it does not hamper with the React render cycle and then lazy loads the grocery page. So, we do not receive any error.
```

> **Advantage and disadvantages of using this code splitting pattern?**

```
Advantage
- Modularity
- Maintainability
- Easy to Test
- Improves Performance

Disadvantages-
- The only drawback about code splitting is that you can only use it in client side rendering.
```

> **When do we and why do we need suspense?**

```
When our application grows in size the bundle created by the increases as well. This affects the application performance , when we load a large amount of data when our application loads. So it is better to load the data when we need a specific component to load which is large in size.
```
