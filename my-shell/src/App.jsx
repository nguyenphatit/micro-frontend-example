import "./App.css";

import PokemonList from "PokemonApp/PokemonList";
import usePokemonSelected from "PokemonApp/Pokemon";

function App() {
  const [pokemon] = usePokemonSelected();

  return (
    <>
      <PokemonList />
      {pokemon && (
        <div className="mt-20">
          <h1 className="text-md text-green-400">Selected Pokémon:</h1>
          <div className="rounded-3xl flex flex-col justify-center items-center p-6">
            <img
              src={pokemon?.sprite}
              aria-label="Image of Pokemon Selected"
            />
            <label className="pokemon-name">{pokemon?.name}</label>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

