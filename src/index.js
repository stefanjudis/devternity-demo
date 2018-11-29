import React from "react";
import ReactDOM from "react-dom";
import { createClient } from "contentful";
import ReactMarkdown from "react-markdown";

import "./styles.css";

const client = createClient({
  space: "qco6lu15xu9m",
  accessToken:
    "252e8242462c9712f3aecfa2ef78a9dbed9e90ceeea0dab81f77e3fd5c5ad2bd"
});

client
  .getEntries({
    "sys.id": "1trpcRU1RaGCKsOWyeIgiI"
  })
  .then(({ items }) => {
    const [page] = items;

    function App() {
      return (
        <div className="App">
          <h1>{page.fields.title}</h1>
          <ReactMarkdown source={page.fields.body} />
        </div>
      );
    }

    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
  });
