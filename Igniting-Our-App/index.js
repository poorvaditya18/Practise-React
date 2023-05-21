import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "Heading 1 from parcel"
);

const heading2 = React.createElement(
  "h2",
  { id: "title", key: "h2" },
  "heading 2 from parcel"
);

const container = React.createElement("div", { id: "contatiner" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
