// const heading=React.createElement("h1",{id:"heading"},"Namaste React")
// console.log(heading);
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
// to create this type of structure
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "Iam h1 tag"),
        React.createElement("h2", {}, "Iam h2 tag")
    ]),
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "Iam h1 tag"),
        React.createElement("h2", {}, "Iam h2 tag")
    ])
]);
console.log(parent); // parent return object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.c36f364e.js.map
