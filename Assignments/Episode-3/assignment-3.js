// Question 1:-

import React from "react";
import ReactDOM from "react-dom/client";
import logo from './impact-logo.png';
import userIcon from './avatar.png'

// Create a Nested header Element using React.createElement(h1,h2,h3, inside a div with class "Title")
const reactElem = React.createElement(
  "div",
  { className: "title", key: "title" },
  [
    React.createElement("h1", { key: "h1" }, "this is h1 tag"),
    React.createElement("h2", { key: "h2" }, "this is h2 tag"),
    React.createElement(
      "h3",
      { key: "h3" },
      "This is a title inside a nested object"
    ),
  ]
);

// Create the same element using JSX
const reactElemJSX = (
  <div className="title">
    <h1 className="h1">This is H1 Tag.</h1>
    <h2 className="h2">This is H2 Tag.</h2>
    <h3 className="h3">This is H3 Tag.</h3>
  </div>
);
// Create a functional component of the same using JSX
const ReactElemFNComp = () => (
  <div className="title">
    <h1 className="h1">This is H1 Tag.</h1>
    <h2 className="h2">This is H2 Tag.</h2>
    <h3 className="h3">This is H3 Tag.</h3>
  </div>
);

// Pass attribute into the tag in JSX
const keyName = "title";
const AttributeElem = () => (
  <div className={keyName}>
    <h1 className="h1">This is H1 Tag.</h1>
    <h2 className="h2">This is H2 Tag.</h2>
    <h3 className="h3">This is H3 Tag.</h3>
  </div>
);

// Composition of Component(Component inside a component)
const HeaderTextComponent = () => "Hello World!";
const TitleComponent = () => (
  <div className={keyName}>
    <h1 className="h1">This is H1 Tag.</h1>
    <h2 className="h2">This is H2 Tag.</h2>
    <h3 className="h3">This is H3 Tag.</h3>
    <p>
      <HeaderTextComponent />
    </p>
  </div>
);

// {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}

//Question 2
// Create a Header Component from scratch using Functional Component with JSX
// Add a Logo on Left
// Add a search bar in middle
// Add User icon on right
// Add CSS to make it look nice


const Header = () => (
    <header className="header">
        <div className="left">
            <img src={logo}/>
        </div>
        <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search Or Jump to..."
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div className="right">
            <img src={userIcon} alt="User Icon" />
        </div>
    </header>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(reactElem);
// root.render(reactElemJSX);
// root.render(<ReactElemFNComp />);
// root.render(<AttributeElem/>);
// root.render(<TitleComponent />);
root.render(<Header/>)