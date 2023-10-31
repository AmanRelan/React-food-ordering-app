# Episode 11:- Data is the new Oil!

#### Highlights

- Higher Order Components
- Controlled & Uncontrolled Components
- Lifting the state up

#### Higher Order Components

> What is Higher Order Components?

- Higher order components are functions that takes a component and returns a component.
- Takes a component, enhances the component, and returns that component.
- Feature we will develop in our APP :-
  -> We will add a promoted label to our restaurant code
  -> We will take our existing card, but according to data, we will write a HOC and then that will take this card, and spit out the new component with Promoted tag.
  -> Since Promoted field was not visible in this Live API, I will rather be using the veg property, and filter out the veg restaurants instead.

> **How to write a HOC(Higher Order Component)?**

- It is a JS function which will take an input of RestaurantCard
- It will return another component(function) -> with a veg label on top of it
- This HOC will generate a Restaurant Code Component
- So, we will render a Restaurant Card
- But if it is a vegetarian Restaurant, It will render a HOC(Higher Order Component).
- Name import the HOC
- Create Restaurant Card Component with Veg Label in it.
- HOC are pure functions.
- pure functions means that we will not change/modifying the passed component(argument).

#### Important Information from the Episode

- An important part of a React application is to manage it's data
- All the react applications have two important layers
  -> UI Layer( JSX mostly)
  -> Data Layer( State, props, local variable)
- UI layer is powered by Data Layer
- We will learn to manage our Data Layer.
- Feature we will build - Build Menu Page

> Menu Collapse and expand type is called accordion.

- Two things in accordion-

  1. Accordion Header
  2. Accordion Body

- Another Important Extension is - `React Develper Tools`. Available on Chrome Extension Store
- Gives React Dev powers

  1. Contains Components - shows the hierarchy of component, basically is the UI Layer(hierarchy). Right side contains all the props and that represents Data Layer.
  2. Contains Profilers - Records the React Application. Helps you record/monitor the app by profiling and providing graphs and views. This can help in improving the performance.

- In the restaurant menu, we want that when we click on one accordion item, the other items are collapsed and each of the Item List has its own state for expanding and collpasing
- But we want that one items expansion should collapse all the other items and only expand the item we have expanded.
- To build this feature, we want the state of the particular item component, to be `lifted up`.
- So, instead of items, we want the power of show to the parent(Restauran Menu).
- So, we want restaurant Menu to control all the items, as right now the restaurant items are controlling themselves.
- So, we will `LIFT THE STATE UP` of the items
- So, we do not want the items to have its state, but it should take it from props, from the parent.
- Controlled Component -> This is a controlled component, this restaurant category is a controlled component, because the parent(restaurant menu) is controlling the restaurant category.
- Uncontrolled Component -> When it had it's own state, it was an uncontrolled component. If it has to hide/show something, it can do that on its own.

`**How can a child modify the state of the parent?**`

> It is not possible directly, but indirectly it is possible.
> We can pass the setter function as a prop to the child
> But when we click on the and handle the function for the click, it will automatically set the index.

### Lifting the state up

> Homework - Close all the accordions and then expand any of the accordion you want

From the React Docs -
Lifting state up

```
Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up, and it’s one of the most common things you will do writing React code.
```

- When you want to coordinate two components, move their state to their common parent.
- Then pass the information down through props from their common parent.
- Finally, pass the event handlers down so that the children can change the parent’s state.
- It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).

#### React Context

##### Props Drilling

- In a real world React application, a React application there are big tree structure of components and there is lot of nesting, and passing data from one component to another is a very big challenge when the application is huge
- React has one way data flow, data is passed from parent to children.
- What if there is data in one component which has some data which we want to pass to a child of a children ( Parent Component -> Child 1 -> SubChild 1), how will we send that?
- In what we have learnt till now, we cannot directly pass data from Parent to Subchild1.
- We have to pass data from Parent to Child1 and then from child to SubChild1.
- And child1 has nothing to do with the data
- This concept is known as `prop drilling`.
- If we want to pass data 1-2 level deep but if there is nesting more deeper than this, we would want to avoid prop drilling.
- To avoid prop drilling, and we are at any place at whatever level of nesting we are, we can access data with a superpower known as `React Context`.
- While we use Context, we can avoid prop drilling, which is like a global place where your data is present where that data can be access by anywhere in the app.

> When we think of some data, what is something that is needed in all parts of the app?

- Details about the logged in User.
- Another example, theme(Light/Dark Mode).
- For all this data, we hold in a Context and can be accessed from anywhere in the app.

> How to Create a Context?

- For Reference( will create under src/utils/UserContext.js)
- Assume Context is like a global object inside our React application
- React gives us access to a utility function that is `createContext`
- Can be done as `const UserContext = createContext({});`
- Where the Object will, it will hold information.
- then we export our UserContext.
- Now, wherever we want details about loggedInUser, we will just use it
- To use it, lets suppose we want to display user name of the logged in user,
- We go to header.js, and we will use a React hook, which is called as `useContext`
- We can use the context as this `const dataFromContext = useContext(UserContext);`
- You can create any number of Contexts.

> If we can put all the data in Context, why do we have to pass props?

- Only the data that is being used in multiple places, that is when you will use Context.
- In class based Components, we do not have hooks.
- So we cannot use `useContext` in Class components.
- In class component, instead of using hooks, we will import it and then using this way -> ```
  <UserContext.Consumer>
  {(data) => data.loggedInUser}
  </UserContext.Consumer>

```

- We use it as a Component, and inside it we pass a callback function and then access the data directly.
```

> What if we want to change the value of information inside the Context?
> Suppose, we have this Authentication Logic inside App Root Level.

```
  //Authentication
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    // Make an API Call where we send the userName and Password
    const data = {
      name: "Aman Relan",
    };
    setUserInfo(data.name);
  }, []);
```

> Now, we want to update the value of the Context( which is currently Default User everywhere).
> Suppose, we want to update it with Aman Relan.
> How do I pass this information to the entire app?

- To pass this Information, we will use `Context Provider`.
- Just like we have `<UserContext.Consumer> </UserContext.Consumer>`.
- So, we will use this in our Authentication Logic
- This can be used as `<UserContext.Provider></UserContext.Provider>`
- We update the app Layout code as :-

```
  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
```

- What this does is, it wraps the whole app inside the provider.
- This means anywhere inside the app, our components will not be using the Default User
- And now the username everywhere will be `Aman Relan` which we got from the Authentication Logic.

> If we had just wrapped the header, like:-

```
  return (
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: userName }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
  );
```

- What this will do is, just inside the Header, we will have the loggedInUser as Aman Relan
- Everywhere else it will be what the default value is `Default User`.
- Basically, if we use our Provider for specific portion, we can do that too.
- This means Context is a global space that can be provided to the whole app, or a small portion
- We can make multiple Context, new context for header, new for something else and it can override anywhere.
- And it is performant.
- We can also wrap the Header in a different context even though the top level at the app we already have a context, Like:-

```
  <UserContext.Provider value={{ loggedInUser: userName }}>
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: "Kunal" }}>
        <Header />
      </UserContext.Provider>
      <Outlet />
    </div>
  </UserContext.Provider>
```

- This is a perfectly valid code
- The header will use `Kunal`
- All the other places, It will use `Aman Relan`
- Outside of the app based JSX, if it had something else, there it will use `Default User`.

> How will we update our UserContext on the fly?

- We create an input tag inside body and we will update the user Context with any value that is going to be typed inside the input tag.
- We can pass the setter function also to userContext.
- SO, we pass setUsername from `App.js`

To Summarise:-

1. Create Context - `const UserContext = createContext({});`, createContext is provided to us by React
2. How to read the context :-

- useContext(`<pass the context here>`) Hook in Functional Component
- <UserContext.Consumer></UserContext.Consumer> in Class Component
  -> This UserContext takes a callback function and this cb function gives access to Context.

3. We can use context multiple times
4. Modify the context

- `<UserContext.Provider value={<overriding-the-default-value>}>`
- We created a state variable and binded it to the state variable and also passed the setter function to the UserContext inside the value.
- This binding helps us to use the setter function and we can do a read/write of context from anywhere.
- This helps to Manage data inside the app.
- Small to Medium Sized apps don't need Redux.
- Cart Context/UI Context/Theme Context.
