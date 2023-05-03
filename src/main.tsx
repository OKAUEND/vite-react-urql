import React from "react"
import ReactDOM from "react-dom/client"
import { Client, Provider, cacheExchange, fetchExchange } from "urql"
import App from "./App.tsx"
import "./index.css"

const client = new Client({
  url: "https://beta.pokeapi.co/graphql/v1beta",
  exchanges: [cacheExchange, fetchExchange],
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
)
