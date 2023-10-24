import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object This is how you create a React Element using React
// const heading = React.createElement("h1", {id: "heading"}, "Namaste React!");
// console.log(heading);

//JSX Heading(Babel Transpiles it) => React.creatElement => ReactElement-JS Object => HTMLElement(render)
// All of the above conversion is done by BABEL.

// React Element
const heading = (<h1 id="heading" tabIndex='5'>Namaste React! in Heading</h1>);
// console.log(heading);

//React Functional Component
const HeadingComponent = () => {
    return <h1>Namaste React Functional Component!!</h1>;
};

const Title = () => (<h1 id="heading" className="head" tabIndex='5'>Namaste React! using JSX</h1>);

const number = 1000;
const HeadingComponent2 = () => (
    <div id="container">
        {heading}
        <Title />
        <h1>Namaste React Functional Component Part 2</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent2 />)