# Theory Assignment- Episode 3

> **What is JSX?**
```
JSX is a JS syntax which makes it easier to create react elements.
JSX is not a part of React. JSX is separate and React is separate, it is just a syntax to help develop elements in react.

JSX is a syntax extension for JS that lets you write HTML-like markup inside a JS File.

Lot of developers feel we have written HTML inside JS files, but it is not HTML but it is JSX. 
```

> **SuperPowers OF JSX?**

```
Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

Example from the Notes- 
Write a CURLY PARANTHESIS {} & you can write any JS Code inside this curly brackets.

const number = 1000; 
{number}

It will print 1000
```

> **Role of type attribute in script tag? What options can I use there?**

```
The type attribute of the <script> element indicates the type of script represented by the element: a classic script, an import map, a JavaScript module, speculation rules, or a data block

Options :- 
1. Attribute is not set (default), an empty string, or a JavaScript MIME type - Indicates that the script is a "classic script", containing JavaScript code.
2. importmap - This value indicates that the body of the element contains an import map. The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules.
3.module- This value causes the code to be treated as a JavaScript module. The processing of the script contents is deferred. 
4.speculationrules- This value indicates that the body of the element contains speculation rules. Speculation rules take the form of a JSON object that determine what resources should be prefetched or prerendered by the browser. 
```

> **{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.**

```
{TitleComponent}: This is used when you want to reference a React component as a variable. 
{<TitleComponent/>}: This is a way to directly render the TitleComponent in JSX.
{<TitleComponent></TitleComponent>}: This is also a way to directly render the TitleComponent in JSX. The only difference is that it explicitly uses the opening and closing tags for the component. It doesn't make any difference in rendering the component. 
```
