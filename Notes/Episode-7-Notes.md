# Episode 7:- Finding the Path!

useEffect hook-

> How is useEffect called?
> Imported from React Library. Called using 2 arguments:-

- Callback Function
- Dependency Array

> When is the useEffect called?

- useEffect is called after the component is rendered.
- Callback Function in useEffect is compulsory, while dependency array is optional.
- When you do not put dependency array, it will render everytime my component renders.
- While if the dependency array is present and it is empty, it will be called only on the first time rendering/only on the initial render of the component and just once.
- When we put something inside the dependency array, it will only be called when the dependency changes.

> Best Practices for useState()?

- Never use useState outside the component, always do it in inside the component
- Used for creating local state variable inside the component
- Try to call the hook on the top, so there is less inconsistency in the code.
- Never use a useState in a conditional, this can create inconsistencies in the application.
- Never create useState inside loops/functions. They are only meant to be created in the functional component only.

# ROUTING IN REACT

> We will use npm javascript library - React Router DOM.
> Most Popular Package.
> Latest version(on this date) is version 6.

- Install react-router-dom `npm i react-router-dom`

Feature we will create is - create an about page
Before creating a route, we will have to create Routing configuration in the `root level component of the app.`

- So, in order to create a routing configuration, we will first import `createBrowserRouter from 'react-router-dom'`
- This createBrowserRouter will create routing configuration for our application.
- We will call `const appRouter = createBrowserRouter();` and inside this we will create the configuration.
- Takes a list of paths, an object.

> What is a configuration?

- Configuration means some information that will define what will happen on a specific route.

So, we will create a configuration as follows:-

```
const appRouter = createBrowserRouter(
{
  path: "/",
  element: <AppLayout />
},
{
  path: "/about",
  element: <About />
});
```

Here, path is the route in the app
Element is the component you would want to render in the app on that route.

But just creating this configuration wont work. So, we will have to provide the configuration to render it.
To Provide this, we will import {RouterProvider} from react-router-dom
This Router Provider will provide the router configuration to our app.
How?

- <RouterProvider router={appRouter} />

In react-router-dom, just like we have createBrowserRouter, if we go to the docs, we will see,there are different types of router.
There are useCases for every router.

> How do we handle Random Routes(like - localhost:1234/xyz)

- If we do not have the handling for the error page, react-router-dom has created a small page where it handles the errors.
- To create a custom error page, we will define a `errorElement` in the path of the Router Configuration, which changes the configuration as below -

```
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
```

### NOTE: Another COOL feature -> react-router-dom gives us access to an important hook - useRouteError

- useRouteError - is a special hook that helps include all the messages and can be used to display a specific message to the user.
- How to use -> const error = useRouteError();
- It will give us all the error in the path, react-router-dom will catch and will give it to us in a form of object.
- So, we can use this extra information to show better errors to user.

## Create Children Routes

> What if we want to keep the header intact and header should always be there?

- To make this as a functionality, we have to create children routes of <AppLayout />.
- we will give the configuration some children, which is also a list and it is a list of path of children.
- So the configuration looks like

```
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);
```

- write comments in jsx ({/\*\* \*/})
- So, to render now the children accordingly, we put in some conditions as below

```
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* if path = / */}
      <Body />
      {/* if path = /about */}
      <About />
      {/* if path = /contact */}
      <Contact />
    </div>
  );
};
```

We want to push the children according to the routes.
So, we will use `Outlet`.
Now, whenever there is a change in the path, this Outlet will be filled with the children according to the path on what page we are.
This will make the necessary changes.
I can have multiple parents, multiple children and according to the route it will render.

This Outlet will be replaced by the component according to the path.

Now, we will link the path to the list items.

- Normally, in HTML we would do something like `<li><a href='/about'>About US</a></li>`, which will work
  but when you do this, because when you do this, the whole page gets refreshed but in react we can navigate to the new page
  without reloading the whole page.
- Never use <a> tag whenever you want to route to some other page
- So, in react-router-dom, we have a superpower `<Link> component from react-router-dom`.

> How to use `Link`?

- <Link to="/">Home</Link>
- Link does not reload the page, it just refreshes the component
- This is an important concept, react applications are known as **Single Page Application**.
- This whole app is an app component, and any other page is just refreshing the components but the app component remains the same.
- But when go and check in the HTML, we will see that it changes back in HTML as `<a href='<link>'>- anchor tag`.
- **It acts as a wrapper over anchor tag, react router dom keeps the track of the LINK, and does not refresh the page.**

> There are two types of Routing that you can have in an application

- Client side Routing -> Components are already loaded into the client side, we do not have to make network calls and simply just loads that component.
- Server side Routing -> reloads the whole page, sends a network call, gets the data of the page from the server, refreshes and loads the page.

> **New feature- Make different pages for different restaurants.**

- Build Route like /restaurants/<xyz-restaurant>
- We will create a RestaurantMenu component
- We will reuse the component
- We will host this on a specific route.
- So, we will create a path in app.js
- In the path, we will create a dynamic route like `/restaurants/:restaurantId`
- As the element, we will use Restaurant Menu.

We will use the swiggy restaurant API to fetch data again.
Now, the challenge will be to use the restaurant id sent in the parameters.
To use this, we will make use of a super power given to us by react-router-dom

This is using a hook- called useParams
We will call it:- const { restaurantId } = useParams();
