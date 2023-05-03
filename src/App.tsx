import { useState } from "react"
import { useQuery, gql } from "urql"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

const getPokemons = gql(`
  query getPokemons {
    pokemon_v2_pokemon(limit:30, where:{pokemon_species_id: {_gt: 500}}) {
      name
      id
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`)

function App() {
  const [count, setCount] = useState(0)
  const [result] = useQuery({ query: getPokemons })

  console.log({ result })

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
