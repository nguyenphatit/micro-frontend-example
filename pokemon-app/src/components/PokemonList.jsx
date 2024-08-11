import React from "react";
import { useAtom } from "jotai";
import useSelectPokemon, {
  addAllPokemon,
  pokemons as pokemonState,
} from "../atoms/Pokemon";

export default function PokemonList() {
  const [, addPokemons] = useAtom(addAllPokemon);
  const [, setSelectPokemon] = useSelectPokemon();
  const [pokemons] = useAtom(pokemonState);

  React.useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/kevinuehara/microfrontends/main/mocks/pokemonList.json"
      );
      const jsonData = await response.json();

      addPokemons(jsonData);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-medium my-6">Pokémon List Micro Frontend</h1>
      <div className="flex gap-2">
        {pokemons.map((pokemon) => (
          <div className="border rounded-md flex flex-col items-center" key={pokemon.name} onClick={() => setSelectPokemon(pokemon)}>
            <img
              src={pokemon.sprite}
              aria-label={`Image of pokemon ${pokemon.name}`}
            />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
