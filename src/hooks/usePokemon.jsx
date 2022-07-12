import {useEffect, useState} from "react";

const spriteLookup = {
    default: (pokemon) => pokemon.sprites.other['official-artwork'].front_default,
    shiny: (pokemon) => pokemon.sprites.front_shiny,
    fallback: (pokemon) => pokemon.sprites.front_default,
}

export default function usePokemon(pokemonName, pokemonUrl) {
    const [pokemon, setPokemon] = useState({name: pokemonName})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const data = localStorage.getItem(pokemonName)
        if (data) {
            setPokemon(JSON.parse(data))
            setIsLoading(false)
        } else {
            fetch(pokemonUrl)
                .then(response => response.json())
                .then(pokemon => ({
                    name: pokemon.name,
                    sprites: {
                        default: spriteLookup.default(pokemon),
                        shiny: spriteLookup.shiny(pokemon),
                        fallback: spriteLookup.fallback(pokemon)
                    }
                }))
                .then(pokemon => {
                    localStorage.setItem(pokemonName, JSON.stringify(pokemon))
                    setPokemon(pokemon)
                    setIsLoading(false)
                })
        }
    }, [])

    return [pokemon, isLoading]
}