// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from JavaScript";

// const root = document.getElementById("root");
// root.appendChild(heading);

const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [React.createElement("div", {id: "child1"}, [React.createElement("h1", {}, "Iam an h1 tag"), React.createElement("h2", {}, "Iam an h2 tag")]),
    React.createElement("div", {id: "child2"}, [React.createElement("h1", {}, "Iam an h1 tag"), React.createElement("h2", {}, "Iam an h2 tag")])]
);

console.log(parent);

const heading = React.createElement("h1", {id: "heading", xyz: "Hello"}, "Hello world from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);