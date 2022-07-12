import {PokeCard} from "./PokeCard";
import usePokemonList from "../hooks/usePokemonList";

export default function Pokedex() {
    const [pokemons, fetchNextPage] = usePokemonList(30)

    return (
        <>
            <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-4 content-center p-10">
                {pokemons.map((pokemon) => <PokeCard key={pokemon.name} pokemon={pokemon}/>)}
            </div>
            <div className="flex justify-center pb-3">
                <button className="p-2 px-10 border border-black rounded-md w-60" onClick={fetchNextPage}>View more</button>
            </div>
        </>
    )
}