const root = ReactDOM.createRoot(document.getElementById("root")); 

const heading1 = React.createElement("h1", { id: "title" }, "Heading 1");

const heading2 = React.createElement("h2", { id: "title" }, "heading 2");

const container = React.createElement("div", { id: "contatiner" }, [
  heading1,
  heading2,
]);

root.render(container);
