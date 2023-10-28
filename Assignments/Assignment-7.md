# Theory Assignment- Episode 7

> **What are the various ways to add images into our APP? Explain with code examples.**

```
Two ways-
1. give the url of the image
<img src="https://reactjs.org/logo-og.png" alt="React Image" />

2. Add the image to the project folder and then include it in the component by importing it
import FoodAppPlanning from "../../../Notes/Food-App-Planning.png";
const ImageComponent = () => {
  return <img src={FoodAppPlanning} alt="Food App Planning" />;
};

export default ImageComponent;

```

> **What would happen if we do console.log(useState())?**

```
When we log the useState hook value, it will return to us an array with 2 values.
1. will be  undefined/ state value if it is assigned a state Value
2. would be a js function that would be used to update the value of the state variable.
```

> **How will useEffect behave if we don't add a dependency array?**

```
If we do not add a dependency array, useEffect will execute the callback function on every render/re-render of the component.
```

> **What is SPA(Single Page Applications)?**

```
Single Page Application (SPA) is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required.
```

> **What is the difference between client side Routing and Server Side Routing?**

```
In Server-side routing or rendering (SSR), every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

In Client-side routing or rendering (CSR), during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All Single Page Applications uses client-side routing.
```
