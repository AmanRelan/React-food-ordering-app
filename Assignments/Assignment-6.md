# Theory Assignment- Episode 6

> **What is a Microservice?**

```
A microservice is a service that is tasked to do certain task and it does only that- also known as Single Responsibility Principle.
An application is built as independent components that run each other applications process as a service. Each service performs a single task.
```

> **What is a Monolith architecture?**

```
Monolith Architecture is an architecture where all processes are tightly coupled and run as a single service.
It is a singular, large computing network with one code base that couples all of the business concerns together.
```

> **What is the difference between Monolith and Microservices based architecture?**

```
| Feature/Aspect                  | Monolithic Architecture     | Microservices Architecture      |
|--------------------------------|-----------------------------|---------------------------------|
| **Definition**                  | A single codebase & database for all features. | Each feature/service is a separate codebase & often has its own database. |
| **Deployment**                 | Deploy entire application for any change. | Deploy only the affected service. |
| **Scalability**                | Scale the entire application. | Scale individual services as needed. |
| **Development**                | All developers work on a single codebase. | Developers work on individual services. |
| **Tech Stack**                 | Typically uniform across the application. | Each service can use a different stack. |
| **Performance**                | A bottleneck in one module can slow down the entire app. | Bottlenecks are typically isolated to individual services. |
| **Fault Tolerance**            | A failure can bring down the entire app. | Failures are typically isolated to individual services. |
| **Complexity**                 | Lower initial complexity. | Higher initial complexity, but can be managed better in the long run. |
| **Development Speed**          | Faster in the early phases. Slows down as the app grows. | Can maintain speed as services are decoupled. |
| **Data Consistency**           | Easier to maintain consistency with a single database. | Eventual consistency is often required between services. |
| **Communication**              | Function/method calls within the codebase. | Network calls, often via HTTP or message queues. |
| **Resource Footprint**         | Single application requires a certain set of resources. | Each service requires its own resources but can be more efficient at scale. |
| **Update & Rollback**          | Changes impact the whole application. | Changes impact only specific services. Easier rollbacks. |
| **Cross-cutting Concerns**     | Addressed globally, e.g., authentication, logging. | Need to address in each service or have shared services/libraries. |

```

> **Why do we need a useEffect hook?**

```
We need a useEffect hook to do something in the component after the component has finished rendering.
It is majorly used to handle side effects in the UI.
To invoke a useEffect, we need to know how it works.
Syntax for useEffect- `useEffect(() => {}, [])`
Takes 2 arguments

1. Callback function(arrow function)
2. Dependency Array
```

> **What is Optional Chaining?**

```
Optional chaining in programming lets you access information inside objects without having to check if each step of the way is valid or exists. It's like quickly looking inside a series of nested elements without worrying if one of them is empty. If at any point there isn't what you're looking for, it simply stops and tells you "I couldn't find it," instead of causing an error or problem.
```

> **What is shimmer UI?**

```
A shimmer UI is a version of the UI that doesn’t contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. It uses a gradient animation that creates a shimmering effect over the placeholders, giving the user a sense of motion and progress.
The idea of the Shimmer UI is to show something on the screen very quickly to the user.
```

> **What is the difference between JS Expression and JS Statement?**

```
An expression in JavaScript evaluates to a single value. It doesn't cause any action to be carried out; instead, it resolves to a value.
A statement in JavaScript performs an action. It's a complete line (or block) of code that does something. Statements end with a semicolon (;).
while an expression gives you a value, a statement gets stuff done.
```

> **What Is conditional rendering? Explain with a code example?**

```
Rendering of a component based on a condition is known as conditional rendering.
Example-
return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (<other component>)
```

> **What is CORS?**

```
CORS stands for cross origin Resource Sharing.
CORS is a security feature implemented by web browsers. It allows web servers to declare who can access their resources and under what conditions, ensuring that private information stays protected. If a server hasn't given explicit permission using CORS headers to allow its resources to be accessed by a specific website, then the browser will block that request to help keep things secure.
```

> **What is async and await?**

```
- The async keyword is used to declare a function as asynchronous. This means the function returns a promise, which is a way of saying, "Hey, I'm going to do some work, and I promise to let you know when I'm done and what the result is."

- The await keyword is used inside an async function and makes JavaScript wait until a promise settles and returns its result. It makes asynchronous code look more like traditional synchronous code, making it easier to write and read.

- So, async and await together help manage operations that take time (like fetching data from the internet) without making the entire program come to a halt. Instead of freezing up while waiting, the program can continue doing other things and come back when the time-consuming task is done. It's a cleaner and more intuitive way to work with asynchronous operations in JavaScript.
```

> **What is the use `const json= await data.json(); in getRestaurants()**

```
The data object, returned by the await fetch(), is a generic placeholder for multiple data formats. so we can extract the JSON object from a fetch response by using await data.json(). data.json() is a method on the data object that lets you extract a JSON object from the data or response. The method returns a promise because we have used await keyword. so data.json() returns a promise resolved to a JSON object.
```
