import React from "react"
import ReactDOM from "react-dom/client"
import { Client, cacheExchange, fetchExchange } from "urql"
import App from "./App.tsx"
import "./index.css"

const client = new Client({
  url: "",
  exchanges: [cacheExchange, fetchExchange],
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
