# Episode 13:- Time for the test

#### Highlights

- Need of Test cases
- Types of Testing
- Create Test cases

##### Types of Testing

- Manual Testing -> not efficient
- Write code to test the application known as Unit Testing, which will test our code automatically

> Any single line of code can introduce bugs anywhere in the app

###### Developer Testing Type

- Unit Testing => Test React Components in Isolation(Testing One Specific Small unit of our application)
- Integration Testing => Testing the integration of the components(Multiple Components are talking to each other & we will develop a flow of an action in our application & that is being tested)
- End To End Testing(E2E Testing) => Testing our react application as soon as the user is Landing on the page and then till whatever he does on the app.

> As a developer we are concerned about 1st and 2nd => Unit & Integration Testing.

#### Libraries for Testing

- React Testing Library => Most Standard way of writing Test cases => Built on Top of DOM Testing Library

> When you run `create-react-app`, it comes in built with this Testing Library.
> React Testing Library uses `Jest` BTS, it is a standard testing practice of testing JS Applications.
> `Jest` in turn uses `Babel`.

##### Installation of Libraries

> `npm i -D @testing-library/react` > `npm i -D jest`

- We are using Jest with Babel, so when using with Babel, you will need to install additional dependencies.
- So, we will have to also install these Babel dependencies.

> Install babel -`npm install --save-dev babel-jest @babel/core @babel/preset-env`. Post Installation, we will have to configure babel by creating a babel.config.js file in the root of your project. So, we create `babel.config.js` and add configuration for jest inside it.
> `Parcel` uses Babel BTS.Parcel has its own configuration for babel. Now, when we will use Jest and the above installed Dependencies. So, these dependencies will interfere with Parcel's Babel Configuration. The `babel.config.js` will try to override the Parcel's configuration of babel. In order to then use Babel with Jest, we will have to change Parcel's behaviour to accomodate babel with jest. So, we have to disable the parcel's default configuration to make our babel config work. To make this work, you have to make changes in `.parcelrc` file as specified in parcel's Documentation(`parceljs.org`). After making changes, it will make parcel to disable babel transpilation and instead use our babel configuration.

- How can we run Test Cases?
  => we will create a command if it is not already present, `test` script, will be run like `npm run test`.

##### Writing Jest Configuration

- Initialize Jest by -> `npx jest --init`.
- Answer questions
  -> No for TS Configuration(as we are not using Typescript files)
  -> test environment -> node/jsdom( we choose jsdom). When you run test cases, there is no server running/browser. So, they will need an environment to run/execute the test cases and for that we use jsdom. Not a browser, just like a browser and executes the test cases.
  -> Coverage Reports -> Yes
  -> provider to use -> Babel
  -> Clear Mock calls, instances -> Yes
- Creates jest.config.js & completes the configuration.

> Now, we will have to install jsdom library. Why?

- As per the Docs of React Testing Library
  => "If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.
  npm install --save-dev jest-environment-jsdom"
- This completes our current Configuration for the test cases.

##### Writing Test Cases

- Creating a dummy JS Test case to see if our app is able to test correctly
- So, we create a dummy file `sum.js` and we will test that.
- And then we write test case for this sum file.

> Where do we write test cases?

- When you run `npm run test`.
- You will see the following response
  ````
  No tests found, exiting with code 1
  Run with `--passWithNoTests` to exit with code 0
  In C:\Users\jrelana\OneDrive - Johnson Controls\Desktop\Namaste-React-October\Namaste-React\Episodes
  30 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: \\node_modules\\ - 30 matches
  testRegex:  - 0 matches```
  ````
- This gives us a hint with the regex to say that it is testing in `__tests__` directory.
- So, we create a new folder under `src/components/__tests__`.
- Any JS/TS file under tests folder will be considered as test file
- Or you can create any file with the extension `<name>.test.js`/ `<name>.test.ts`/`<name>.spec.js`/`<name>.spec.ts` and this will be treated as test files.
- Dunder (Double underscores- \_ \_) means dunder tests.

##### WRITE FIRST TEST

- Created a new folder `__tests__`.
- TO Create a test case, we will use the function `test()`.
- This test function takes 2 arguments
  1. String gives the description of the test case.
  2. In the callback function, we write code implementation of this test case.
- In the callback function, we will call the function we are testing(sum in our example)
- And we store the result in a variable.
- Then we put assertions on that result and if the expected result is achieved, the test case will pass.
- If the assertion fails, the test case will fail.
- You will always have assertions in test cases. But it is not mandatory.
- When we execute `npm run test`. It will pass/fail suggesting that we have built our first test case successfully.

##### Unit Testing

- First Testing a single component
- We will use Contact Component.
- We will try to render the component, and see if it loads or not.
- Whenever you are testing a component, you would have to render the component onto the JS DOM
- Can be done using `render` method received from `@testing-library/react`.
- render will take a component, like `render(<Contact />)`
- And then there is another method `screen` found in `@testing-library/react`
- `screen` is an object, so whatever you will render can be accessed via `screen`.
- So, using this knowledge, we will write test case for `Contact` Component which will look like this
  =>

  ```
      import Contact from "../Contact";
      import { render, screen } from "@testing-library/react";

      test("should load Contact us component", () => {
          render(<Contact />);
          // Getting Heading
          const heading = screen.getByRole("heading");
          console.log(heading);
          expect(heading).toBeInTheDocument();
      });
  ```

- But on execution of this test case, we will receive this error- `__tests__\Contact.test.js: Support for the experimental syntax 'jsx' isn't currently enabled `.
- Which Basically Suggests that we cannot use JSX inside our test case and it is not enabled for our application

> How to Enable JSX support?

- In the logs of the test case if we see, it mentions `Add @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.`
- To add this library, we first install the library by `npm i -D @babel/preset-react`.
- After Installing, we will have to include it in the babel config.
- We can add it to presets in `babel.config.js` as `["@babel/preset-react", { runtime: "automatic" }]`
- `runtime: "automatic"` is important as otherwise it will throw an error.
- What are presets? -> Babel is a transpiler, converts code from one form to another. This preset is helping our testing library to convert the JSX code to HTML, so that it can read properly.
- After adding the preset, when we run the test case, it will still fail.
- This time the error is different, `toBeInTheDocument` is not a function.
- This is because this is not present here, because one library is still missing, which is `@testing-library/jest-dom`
- After install, we will import it in the test file - `import "@testing-library/jest-dom";`
- When we console log in a test case, it returns a JSX element i.e React Element
- If we are querying, the query returns a piece of JSX, React Element,React fiber element
- Sometimes, our test file has a lot of test cases. It becomes difficult to manage all the test cases and so we can group the test cases together.
- For grouping, you have to write `describe` and it can help in grouping multiple test cases into a single block and that block is known as describe.
- It can be nested structure or a single desribe. It takes 2 parameters(1. string & 2. Callback function)
- There is also a convention, that writing the test cases, the `test` is the name of the function and you can also write it as `it`. `it` is just an alias of `test`.

##### Second test case

- We will write test case for Header component
- We will import and load everything and try to render the component.
- When we render the component, and try to run the test cases, we receive an error:- `could not find react-redux context value; please ensure the component is wrapped in a <Provider>`
- It failed at useSelector in the code, which comes from 'react-redux'
- Now, we are rendering the header component in isolation in jsdom, which understands js/React code but it does not understand Redux/what is a selector.
- So, we will have to provide a redux store to the Header.
- So, we use a `Provider` given by `react-redux` and provide it the appStore we have in `/react-redux/appStore`
- And when we run the test, it fails for another reason.
- This time, it says: `The above error occurred in the <Link> component:`, which comes from 'react-router-dom'
- So, this is happening because of the router not being present.
- Now, we will pass in a router to the header.
- We will use `BrowserRouter` and pass it to the test case
- To simulate a click, import `fireEvent` from `@testing-library.react`

#### Restaurant Card Menu Testing:

- Unique thing about them is that they receive props
- We will pass data as props by creating mockData.

### Integration Testing

- Testing Integration of Multiple Components
- Advanced Test Cases
- Feature we will test -> Important Flow -> Search flow
- We will search for something and then that should filter out the restaurant based on the search
- When multiple components work together, this is called as Integration Testing.
- We will render the body component and that will display all the components like Search, Restaurant Card etc
- There is also an API call that we will write a test case for.
- When we do the initial rendering, it will fail because we are making an API request in the body component.
- It will say that `fetch is not defined`.
- When you will test the body component, you are rendering it on jsdom, which is browser like and it does not have all the super powers of browser.
- So, we will have to mock this API request/ write mock function for our request
- We will do so by `global.fetch = jest.fn(() => {});`, where we would want to return a promise just like our original fetch function work.
- You cannot make an API call in the test environment, so we mock the functions and then mock the data as well
- You can do `HMR like feature` for Jest using the command - `jest --watch`
- Once we have mocked the fetch function, when we execute the test it passes but then it also returns a console error as follow
  :-

  ```
    console.error
    Warning: An update to Body inside a test was not wrapped in act(...).
    When testing, code that causes React state updates should be wrapped into act(...):

    act(() => {
      /* fire events that update state */
    });
    /* assert on the output */`
  ```

- This is a warning as we are making an async call and based on that trying to modify the state.
- So, we have to wrap the component inside act(()=> {}); function and this test will work correctly.
- This react function comes from `react-dom/test-utils`

> How to use act function?

```
  await act(async () => {
    render(<Body />);
  });
```

- Test case fails again, because it does not know about Link component
- We have already fixed this, so we will call the BrowserRouter
- This makes our test run.
- we will now write something on the search input and try to update the search Text.
- Find search input from the screen.
- Suppose if there is no way you can figure out how to get the input box, we also have a feature, called `getByTestId`
- For this to work, we will provide a `data-testid="searchInput"`.
- This way, we enable jest to be able to find the input id.

### Another Feature Integration Test - Add to Cart Feature

- If there is a block and it has multiple test, and you want to do something before every test, jest gives you access to an important function, `beforeAll(()=> {})`. Whatever you pass inside the function, it will do that particular operation before executing all of the tests.
- There is another one `beforeEach(()=>{})` which does something before each test case.
- Similarly, we have `afterAll(()=>{})` which runs after it has completed all the test cases.
- Also, we have `afterEach(()=>{})`, which are helper functions.

**`Back to Testing`**

- We go to a restaurant
- Click on Add Button infront of an item
- It updates the cart on the header
- It updates the Cart component

#### To Summarise what we have done:

- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom
