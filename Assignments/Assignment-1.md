# Theory Assignment- Episode 1

> **What is Emmet?**

```
Emmet is a popular web development tool and abbreviation for "Expressive Meta-Language for Markup." 
It is a plugin and syntax abbreviation system that allows web developers to write HTML and CSS code more quickly and efficiently. Emmet simplifies the process of generating complex HTML and CSS structures by providing a shorthand syntax for writing code.
```

> **Difference between a library and Framework**

###### Control Flow:
```
    Framework imposes a specific structure and enforces conventions.
    Developers have more control over application flow and structure.

```
###### Inversion of Control	
```
    Framework controls the application's flow and expects developers to follow its conventions.
    While in a library, Developers retain control of the application's flow and use libraries as needed.
```
###### Extensibility
```
Frameworks provides a comprehensive solution with built-in features, limiting flexibility in some areas.
While a library, offers more flexibility to choose complementary libraries and tools.
```
###### Focus
```
Frameworks provide a broader development environment with various built-in features.
While a library often focus on specific aspects
```

> **What is a CDN? Why do we use it?**

```
CDN stands for Content Delivery Network. It is a website where say, React, has been hosted and by using a CDN Link, we are pulling React from there into our project.

We can say, a CDN is a strategically located distributed network of servers located in datacenters around the world.
It delivers content to users more efficiently and reliably
```

> **Why is React known as React?**

```
React, the JavaScript library for building user interfaces, is called "React" because of its core concept of "reacting" to changes in data. The name reflects its fundamental philosophy of efficiently updating and rendering user interfaces in response to changes in application data.
```

> **What is cross-origin in the script tag**?
```
The crossorigin attribute in the HTML <script> tag is used to specify how a web browser should handle cross-origin requests when fetching a JavaScript file. Web browsers have security mechanisms in place to prevent potentially malicious scripts from making unauthorized requests to external domains.
The purpose of the crossorigin attribute is to control how browsers handle cross-origin requests for JavaScript files and ensure that they do so securely. By specifying the appropriate crossorigin value, you can help prevent security vulnerabilities, such as cross-site request forgery (CSRF) attacks or data leakage, and ensure that the scripts are loaded and executed in a way that aligns with your security requirements.
```

> **What is the difference between React and ReactDOM?**

```
React is the core library of the React ecosystem. It provides the fundamental tools and APIs for building user interfaces.React is responsible for defining and rendering components. It allows you to create and manage the component tree, handle state and props, and define the component lifecycle methods. React is not tied to any specific platform or rendering target. It can be used for web development (via ReactDOM), mobile app development (via React Native), virtual reality, and more.

ReactDOM is a library specifically designed for web development. It's the bridge between React and the Document Object Model (DOM) in web browsers.ReactDOM provides methods for rendering React components into the DOM. The most common method is ReactDOM.render(), which is used to render a React component into a specific DOM element. It also handles event listeners and updates to the DOM when React components change.
```

> **What is the difference between react.development.js and react.production.js files via CDN?**

```
These files serve different purposes and are used in different environments, primarily for development and production.

`react.development.js`: This file is intended for development purposes. It contains additional development-specific warnings, error messages, and debugging information. It helps developers identify and debug issues during development. 

`react.production.js`: This file is optimized for production use. It does not include the extra warnings and debugging information present in the development version. Its primary goal is to minimize file size and improve performance in production environments.
```

> **What are async and defer?**
```
Async and defer are boolean attributes used with script tag to load the external scripts efficiently into our web page.

If you load a web page, two things happen:- 
1. HTML Parsing
2. Script Loading - Fetching and executing the script.

`Async`- When we use async, while the HTML parsing is going on the script is fetched asynchronously from the network.
As soon as the script is available, the HTML parsing stops and script is executed then and there. Once, the script is executed, HTML Parsing goes on as usual. Async does not guarantee the order of execution of the scripts

`Defer`- HTML parsing goes on as usual and scripts are fetched in the background asynchronously from the network.
But the script is executed only when the HTML parsing is complete. Defer guarantees the order of execution of the scripts.

When should we use either?
-> When we need to guarantee the order of scripts, use defer
-> If you want to load external scripts, use async in that case.
```