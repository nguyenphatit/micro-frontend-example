import { atom, useAtom } from 'jotai'

export const pokemons = atom([]);

export const addAllPokemon = atom(null, (get, set, fetchedPokemons) => {
    set(pokemons, fetchedPokemons)
})

export const selectPokemon = atom(undefined);

const useSelectPokemon = () => useAtom(selectPokemon);

export default useSelectPokemon