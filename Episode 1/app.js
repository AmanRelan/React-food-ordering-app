// const heading = React.createElement('h1',
//     { id: 'heading' },
//     'Hello World from React');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);


// Suppose we want to have a nested HTML like this
{/* <div id='parent'>
    <div id='child'>
        <h1></h1>
    </div>
</div> */}
// How do I create Nested elements?
// const parent = React.createElement('div',
//     { id: 'parent' },
//     React.createElement('div', 
//         { id: 'child' },
//         React.createElement('h1', {}, "I AM AN h1 TAG")
//     )
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);


// What if we have to create Siblings?
{/* <div id='parent'>
    <div id='child'>
        <h1></h1>
        <h2></h2>
    </div>
</div> */}

// const parent = React.createElement('div',
//     { id: 'parent' },
//     React.createElement('div',
//         { id: 'child' },
//         [React.createElement('h1', {}, "I AM AN h1 TAG"),
//         React.createElement('h2', {}, "I AM AN h2 TAG")]
//     )
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);

// What if it is a more complex nested structure?
{/* <div id='parent'>
    <div id='child'>
        <h1></h1>
        <h2></h2>
    </div>
    <div id='child2'>
        <h1></h1>
        <h2></h2>
    </div>
</div> */}

const parent = React.createElement('div',
    { id: 'parent' },
    [
        React.createElement('div',
            { id: 'child' },
            [React.createElement('h1', {}, "I AM AN h1 TAG"),
            React.createElement('h2', {}, "I AM AN h2 TAG")]
        ),
        React.createElement('div',
            { id: 'child2' },
            [React.createElement('h1', {}, "I AM AN h1 TAG"),
            React.createElement('h2', {}, "I AM AN h2 TAG")]
        )
    ]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

// But this nested structure can be much more complicated and can get much more tedious and untidy
// So to overcome this we have JSX that exists.