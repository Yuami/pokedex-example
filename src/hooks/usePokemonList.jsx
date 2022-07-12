import {useState, useEffect} from "react"

export default function usePokemonList(limit = 50) {
    const baseUrl = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`
    const [pokemonList, setPokemonList] = useState([])
    const [nextPage, setNextPage] = useState(null)

    useEffect(() => {
        fetchPokemons(baseUrl)
    }, [])

    const fetchPokemons = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(({results: pokemons, next}) => {
                setPokemonList([...new Set(pokemonList.concat(pokemons))])
                setNextPage(next)
            })
    }

    const fetchNextPage = () => {
        fetchPokemons(nextPage)
    }

    return [pokemonList, fetchNextPage]
}