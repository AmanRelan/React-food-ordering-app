# Episode 12:- Let's Build our store

#### Highlights

- Redux
- State Management using Redux
- Data Management using Redux
- Redux works in the data layer
- Effective Manage Data using Redux
- Create/Manage our store
- Put/Retrieve data from store

#### Episode Notes

- Redux is not mandatory for a project
- You don't need Redux for small/mid size projects
- You need Redux for a large scale app where data is heavily used, many Read/Write operations/ large number of components where data has to be transferred from one component to other.
- Redux and React are different libraries.
- Redux is not the only library used for state management
- For Large scale apps, Redux offers you a great solution for handling data, managing store
- Redux offers easy debugging.
- We also have redux dev tool in chrome.

#### Redux- Predictable state Container for JS APPS.

- Two Libraries offered by Redux team

  1. React-Redux
  2. Redux Toolkit

- Eariler, there was a different way of writing Redux, known as Vanilla Redux.
- Currently, the latest way of writing Redux is `Redux Toolkit` and we will use `React-Redux`.

- Redux Toolkit package is intended to be the standard way to write Redux logic.
- Redux Toolkit solves 3 problems from earlier versions(Vanilla Redux):-

  1. Configuration of Redux store was complicated
  2. Had to add a lot of packages to do something
  3. Redux needed too much boilerplate code.

##### Feature we will develop using Redux :- `Cart Flow`

- Go to Restaurant Menu
- Add any dish to cart
- Then the cart will have the item
- Should show in the header
- When we click on it, we go to a cart page
- Where we will see, things we have added in the cart
- To store all this cart information, we will be using Redux Store.

##### Architecture of Redux Toolkit

<Add Image for Redux Toolkit Cart Example Diagram>

##### Redux Toolkit

> What is a Redux store?

- Redux store is a big object and it is kept in a central global space.
- Any component can access Redux store
- Any component can write data/read data from the redux store.
- There is no problem in Redux storing a very big object with a lot of data
- So that our Redux store doesn't become clumsy/big, we have `slices` inside Redux Store.

> What are Slices and why do we need them?

- Slices are basically logical partitions that we can create, to keep data separate
- Assume cart Data in our app can be a good way to create a slice
- Suppose we want to store loggedInUser details, so we can create a User Slice.
- We can create information about the theme, like `dark/light mode`.
- A slice will contain all the data regarding the logical partition we created.
- It can be empty at the start.
- We can later add and modify the cart slice.

> When we click on Add Button, how does the data go inside the Cart Slice?

- We cannot directly add data to the Cart slice.
- There is a specific way to add data.
- On click of the button, we will dispatch an Action
- On dispatch of an Action, it calls a function.
- This Function internally modifies the Cart Slice

> What is this function that updates the slice?

- This function is known as a `reducer`.
- When you press the Add button, which dispatches an action, that calls the reducer function, which modifies the slice of our Redux Store.

> How do we Retreive data from Redux Store?

- To read data from the cart slice and display it in the header, we will use a `selector`
- This `selector` will give the data over to the header
- When we use `selector` to retrieve the data, this process is called `Subscribing to the store`.
- So, we say the header component is subscribed to our store.
- It means it is in Sync with the store.
- If the data inside the store changes, and the data is automatically updated inside the Header Component
- We Subscribe using a `selector`.

#### Redux Toolkit Process

1. Install Redux Toolkit(@reduxjs/toolkit) & React-Redux(react-redux)
2. Build our store
3. Connect our store to our app.
4. Create a Cart Slice
5. Dispatch an Action
6. Read the data using Selector

##### Process in Action:-

1. Install Redux
   -> `npm i @reduxjs/toolkit`
   -> `npm i react-redux`

2. Build our store
   -> `redux/appStore.js`
   -> `import { configureStore } from "@reduxjs/toolkit";`
   -> `const appStore = configureStore();`

3. Add the store to our App
   -> `App.js`
   -> Provide store to the application
   -> Can be done using `import { Provider } from "react-redux";`
   -> Providing Store to the React app is the Provider's Job which is given to us by react-redux.
   -> To provide, we wrap the entire app inside the Provider
   -> We will pass the store as props to the Provider.
   -> Suppose, if we want a portion of our app wants redux, so we can use that for that particular portion also.
   -> Our process will look something like this -

   ```
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="app">
            <Header />
            <Outlet />
            </div>
        </UserContext.Provider>
        </Provider>
    );
   ```

4. Create a Cart Slice
   -> `redux/cartSlice.js`
   -> `import { createSlice } from "@reduxjs/toolkit";`
   -> Create Cart using `const cartSlice = createSlice();`
   -> It will take a configuration inside the createSlice Function call
   -> The first thing in the config is the name of the slice
   -> The second configuration it takes is the `initialState`.
   -> Third configuration it will take is the `reducers`, which is an object
   -> In this we will write reducer functions corresponding to the actions.
   -> Action for the cart - Add Item, Remove Item, clear cart.
   -> IN this example:-

   ```
       reducers: {
         addItem: () => {},
       },
   ```

   -> The Action is `addItem`.
   -> The function besides it `() => {}` is the reducer function
   -> The Reducer function basically modifies the slice of the store.
   -> It gets access to an argument, `state` and `action`
   -> Now, the reducer function will modify the `state` based on the `action`.
   -> So, for add we will do something like - `state.items.push(action.payload);`
   -> Similarly, we will create reducers for removeItem, clearCart.
   -> `clearCart` will not need an action.
   -> So, wherever we will not an action, we can ignore it.
   -> In export from cart Slice, we will do 2 things:- 1. Action - export const { addItem, removeItem, clearCart } = cartSlice.actions; 2. Reducers - export default cartSlice.reducer;
   -> Now, when the slice is built, we would want to add the slice to our store.

5. Add created Slice to the store
   -> If you want to modify a store, it also has a reducer for it self.
   -> And this reducer combines the reducer of its slices.
   -> So, we will add this slice to store like:-

   ```
   const appStore = configureStore({
        reducer: {
            cart: cartReducer,
        },
    });
   ```

   -> That is all we have to do to configure our slice inside the store.

6. Read the data using Selector
   -> To read the data, we need to subscribe to the store, using a selector.
   -> Go to `header.js` and we will use a selector
   -> Selector is nothing but a hook inside react-redux
   -> We can use it like- 1. `import { useSelector } from "react-redux";` 2. `const cartItems = useSelector((store) => store.cart.items);`
   -> We are subscribing to the store using `useSelector` provided by react-redux
   -> This selector gives access to the whole store.
   -> And then we subscribe to the small portion of the store, i.e store.cart.items

7. Modify the store using real world items.
   -> We will on the click of the add button in items list, dispatch an action
   -> So, we add an event handler `onClick` on the Add Button.
   -> This event listener is named as `handleAddItem`.
   -> First, we need access to dispatch, which is a function which we get from a hook called `useDispatch();`
   -> We create a variable that uses the `useDispatch` hook provided to us by react-redux as `const dispatch = useDispatch();`
   -> this `dispatch` is a function, where we want to dispatch an action now.
   -> We exported some actions in cartSlice.
   -> We will import them
   -> And then pass it as dispatch as - `dispatch(addItem("pizza"));`
   -> addItem is the action, dispatch will the dispatch the addItem action and whatever will be passed inside the `addItem` action, that is our `action.payload` defined in the cartSlice.
   -> When we dispatch this action, redux behind the scenes will, it will take whatever argument you are passing in, so it will create an object and inside the payload it will add whatever data you have passed, it will take the object and pass it as the second argument inside the reducer.
   -> Behind the scenes:-
   ```
    {
        payload: "pizza"
    };
   ```

Question => Difference between `onClick={handleAddItem(item)}/ onClick={() => handleAddItem(item)}/onClick={handleAddItem(item)}`?
=> Impure and pure functions?

##### Important Information About React Redux - Helpful in Interviews

- If you are writing `useSelector`, make sure you are subscribing to the right portion of the store. Not doing so, will cause a big performance loss.

1. `const cartItems = useSelector((store) => store.cart.items);`
   and the below code are the same code:-

2. `const store = useSelector((store) => store);`
   `const cartItems = store.cart.items;`

> 1 & 2 above helps achieve the same things but doing the 2nd way is very very less efficient, because we are using the entire store and assigning it to the store variable, right? So, whenever there is something changing inside the store the store variable will be updated in the whole store, but you don't want to subscribe to any change in the store. So, better way is to subscribe to the small portion of the store which is way 1. In this way we will subscribe only to the changes of the items of the cart and not to the entire store.

- Difference/ Confusion in `reducer` and `reducers`.
  -> When you are creating the store, the keyword there is reducer because it is one big reducer there and it can have multiple small reducers.
  -> But when we write a slice, we create multiple reducers as it can have multiple small reducer functions.
  -> When you are exporting a slice, you are exporting, just one reducer which contains multiple reducer functions.

- Redux Toolkit changes from Vanilla Redux?
  -> Allowed to Mutate the state.
  -> This was not allowed in Vanilla Redux.
  -> We have to Mutate it according to the action.
  -> We don't have to return anything
  -> Returning in Vanilla Redux was kind of Mandatory.

- If you are mutating the state, what is redux doing BTS?
  -> It is creating an Immutable State.
  -> Redux uses Immer to do this.
  -> Finds difference between original state, mutated state and gives back a new state which is immutable.

- We cannot update the state like
  =>

  ```
  clearCart: (state) => {
    state = ['new State'];
  <!-- state.items.length = 0; -->
  },
  ```

  => You are here not modifying the state, you are just changing the reference.
  => So, in case you want to empty this, you have to mutate the state.
  => This state is a local variable, and it will not update the actual state that was passed.
  => So, we have to modify the original state.

  => Also, when you want to console something inside the reducer function, normal console log won't work and so to read it, we will have to import from rtk `current` and then console as `console.log(current(state));` which prints the correct state value

  => RTK says in a reducer either return the new state or mutate the existing state.
  => When you return the new state from the reducer, it will update the current state value by the returned value.

- Redux Dev tools -> chrome extension

=> Also read about RTK Query- Way of Fetching data.
