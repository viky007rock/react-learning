// This code of React is the core structure of React.

//Nested element structure
/*
<div id="parent">
<div id="child">
<h1></h1>
</div>
</div>
*/
// ReactElement(abject) => HTML(Browser Understand)

// const parent= React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement(
//             "h1",
//             {},
//             "I'm H1 Tag"
//         )
//     )
// )

//Nested element wth sibling structure
/*
<div id="parent">
<div id="child">
<h1></h1>
<h2></h2>
</div>
</div>
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm H1 Tag"),
//     React.createElement("h2", {}, "I'm H2 Tag"),
//   ])
// );

//Nested element wth sibling structure
/*
<div id="parent">
<div id="child">
<h1></h1>
<h2></h2>
</div>
<div id="child2">
<h1></h1>
<h2></h2>
</div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm H1 Tag"),
    React.createElement("h2", {}, "I'm H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm H1 Tag"),
    React.createElement("h2", {}, "I'm H2 Tag"),
  ]),
]);




//syntax:- createElement({html tage},{attribute object},{what we need to do inside that tag})
//Heading variable data is currently an json object 
const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello World From React !!!!!!");
//ReactDOM is reponsible for creating "Root" element in HTML.
// In react Root is the place where we render our DOM element of react.
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering element inside root we are using react DOM rendering method
//Render method is converting the Heading json object and convert it into HTML tag and return into UI
root.render(parent);
// root.render(heading);