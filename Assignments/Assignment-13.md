# Theory Assignment- Episode 13

> **What are the different types of testing?**

```
Developer Testing Type

- Unit Testing => Test React Components in Isolation(Testing One Specific Small unit of our application)
- Integration Testing => Testing the integration of the components(Multiple Components are talking to each other & we will develop a flow of an action in our application & that is being tested)
- End To End Testing(E2E Testing) => Testing our react application as soon as the user is Landing on the page and then till whatever he does on the app.
```

> **What is Enzyme?**

```
Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.
```

> **Enzyme vs React Testing Library**

```
Enzyme and React Testing Library are both popular testing utilities for React applications, but they have different philosophies and approaches.

1. Testing Approach:
Enzyme focuses on the component's implementation details and provides a set of tools for manipulating, traversing, and querying React components' output. It allows you to test components in isolation, focusing on the component's internal behavior.
React Testing Library, on the other hand, promotes testing the application from the user's perspective, emphasizing testing the application as a user would interact with it. It encourages testing the components based on their rendered output and how users interact with them.

2. Testing Philosophy
Enzyme encourages shallow rendering and accessing the internal state of components, which allows for a more detailed inspection of the component's structure. This approach is useful for testing individual components in isolation.
React Testing Library discourages accessing a component's internal state and implementation details. Instead, it promotes testing the components based on their output and the way users interact with them. This approach ensures that tests are closer to real-world usage and behavior.

3. Maintenance and Compatibility:
Enzyme has been known to have some compatibility issues with the latest React features, as it relies heavily on the internal implementation details of React components. As a result, it might require updates or modifications when using the latest React versions.
React Testing Library aims to be compatible with the latest React features and follows best practices recommended by the React team. It focuses on testing the components in a way that is less likely to break with changes in the React framework.

4. Learning Curve:
Enzyme is generally considered easier to start with for developers who are new to testing React applications, especially for those who are already familiar with jQuery or have experience with DOM manipulation.
React Testing Library has a steeper learning curve for those accustomed to Enzyme or other testing libraries, as it requires a different mindset and approach to testing React components.
```

> **What is Jest and why do we use it?**

```
Jest is a delightful JavaScript Testing Framework with a focus on simplicity. Jest provides a comprehensive and developer-friendly environment for writing and running tests, making it a powerful tool for testing JavaScript applications.

Here’s a shortlist of Jest advantages.

1. Offers a CLI tool to control your tests easily
2. Comes with an interactive mode that automatically runs all affected tests for the code changes you’ve made in your last commit
3. Provides syntax to test a single test or skip tests with .only and .skip. This feature is useful when debugging individual tests
4. Provides excellent documentation with plenty of examples and a supportive community.
5. Brings easy mocking to developers as it’s one of the most painful things to do for testing engineers. We explain further in this post how Jest mocking works
6. Jest offers code coverage out of the box through its CLI—just use the –coverage option or the collectCoverage property in the Jest configuration file.
```
