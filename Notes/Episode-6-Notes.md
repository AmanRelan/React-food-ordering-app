# Episode 6:- Exploring the World!

### Monolith and Microservice Architecture

<Add Monolith vs Microservices image here>

- Monolith Apps- When apps were traditionally developed they were developed using a Monolith Architecture.
  There used to be a huge big project, and in the app we used to have small pieces,
  say we have APIs, UI code, Authentication code, DB Connectivity Code, Notification, etc in the same code base.

- Microservices Architecture- The world is fast moving towards using microservices architecture.
  In the microservices architecture, we have different services for different jobs
  Say, an Auth Service, a notification service, a UI service, a backend service all of these services combined together
  made this big application.

- For Each & every small thing, we can have a different project which is also known as separation of concerns.
- It also follows the Single Responsibility Principle which states that every class, module, or function in a program should have one responsibility/purpose in a program.
- You can have multiple tech stacks for every different microservice(depends on flexibility and use case)

Then, question comes is that how do these services interact with each other?

- These services interact with each other as they make calls to /api in case we want to connect with the API

Second Question that comes is, when we have all these services, how are these services deployed and how can we access these services?

- All these services run on their own specific port, so all these ports can be mapped to domain name(/api, /sms).

===> Back to the Food Ordering APP<===
There are 2 ways that we can use to fetch data from the Backend

1. When our page loads -> we can make an API call to fetch the data -> when we get the data -> we can render it to the UI.
2. As soon as the page loads -> we will render our UI -> then make an API call -> then we get the data from the API -> then we re render the UI with the API data.

In react, we will use 2nd Approach, mostly. Because it gives us a Better UX as this gives the user a skeleton on loading.
But we are rendering twice now? -> But doesn't matter as the render cycles in React is very fast. React has the best rendering mechanism.

What is a hook? - Normal JS Function.
NEW HOOK ALERT -> **useEffect**

Syntax -> useEffect -> Takes 2 arguments

1. Callback function(arrow function)
2. Dependency Array

Examples- `useEffect(() => {}, [])`

Then the next question that comes is when will this useEffect callback function be called?

- It will be called after your component renders.
- When the component will load, it will render the component and as soon as the render cycle is finished, it will call the callback function in the useEffect hook.
- If you have to do something after rendering of the component, we do it inside a useEffect.
- It prints after the component has been rendered(VERY VERY IMPORTANT!!)
- It will be used in our food app to follow the above 2nd method of fetching data from the API.

> When we fetch data from Swiggy's API, we see that we have been blocked to get this data due to CORS policy.

- It is our browser that blocks us to call API from one origin to another origin.
  To bypass this CORS, we will use the CORS extension from Chrom WebStore

- A good way to handle API Data is to use Optional Chaining.

Also, we want to set a loading icon initially because the API would take some time to send the data.
So, we will add a logic where we will want to show a spinner with loading state until the listOfRestaurants is empty.

But the latest standard practice in the tech industry is to not show the loading spinner icon but to use the concept known as Shimmer UI.

> What is the Shimmer UI?

- A shimmer UI is a version of the UI that doesn’t contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. It uses a gradient animation that creates a shimmering effect over the placeholders, giving the user a sense of motion and progress.
  The idea of the Shimmer UI is to show something on the screen very quickly to the user.

- There is conditional rendering- rendering based on a condition
  We can do it in 2 ways:-

1. Use if condition

```
if (listOfRestaurants.length === 0) {
    return <Shimmer />;
}
return <other>
```

2. Use Ternary Operator

```
return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (<other component>)
```

Question about useState-

1. When we have normal variables then why do we need state variables?

- < Already Discussed in Episode 5 notes>

> How can a constant variable be updated/modified in case of useState hook?

- Whenever you update this value, React is updating the value of the state/rendering the component one again and when you re render, the variable is a new variable than it was before. React is keeping a track of everything.
- When this component is re rendered, it will create a new instance of the component and when this new component is created, it is created with the updated value of the setState variable.
- Behind the scenes, as soon as you call the setState, it will update the reference of the variable and it will render the component and will find the diff between the older version and the newer version and it will see that there is only a variable change and nothing else changed. This is the reconciliation process that is happening.

===> SEARCH BAR <===

- Added Search input and button
- On Click of search button, we need to filter the restaurant cards and update the UI
- Will need the search text
- To get the search text, we need to get the value attribute
- To track the value of the search box, we have to bind the value to a local state variable

===> VERY IMPORTANT CONCEPT <===

When we add this search bar as follows:-

```
<div className="search">
  <input type="text" className="search-box" value={searchText} />
  <button
    onClick={() => {
      console.log(searchText);
    }}
  >
    Search
  </button>
</div>
```

- You will observe that the search bar won't work and also you would not be able to type anything in the input box
- What we have done in our code is that we have bind the value of the input box to the state variable `searchText`.
- This means that whatever is there inside the searchText state variable, will be there inside the value of the input box
- When I am changing it, the value is still tied to this `searchText`.
- So, searchText is not getting updated, but I am trying to update my input box.
- Because this value is bind to the searchText, and it is empty, so it will not change until we change the `searchText`.
- To fix this, we will add an onChange handler.

> Definition of state react variable?
> `Whenever state variables update, react triggers a reconciliation/re-renders the component`

> A BLOCKER: Once you update your UI and add the search functionality, you will likely face 2 bugs:
>
> 1. Case insensitivity
> 2. Search results will filter out the list of Restaurants and when you will want to search again, you will not be able to do it

> Fix To the blockers:
>
> 1. add toLowerCase/toUpperCase to the String matching
> 2. We are modifying the original list, instead we will keep another copy of listOfRestaurants. So, we will create another state variable for only the filteredRestaurants; and use the new copy of the state variable, so our listOfRestaurants is not hampered.
