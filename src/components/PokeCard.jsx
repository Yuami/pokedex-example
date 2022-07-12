import Loader from "./Loader";
import usePokemon from "../hooks/usePokemon";
import Star from "./Star";
import {useState} from "react";
import {useContext, useEffect} from "react";
import ShinyPokemonContext from "../context/ShinyPokemonContext";

export function PokeCard({pokemon: {name, url}}) {
    const [globalShiny] = useContext(ShinyPokemonContext)
    const [pokemon, isLoading] = usePokemon(name, url)
    const [isShiny, setIsShiny] = useState(false)
    const [sprite, setSprite] = useState(null)

    useEffect(() => {
        let selectedSprite = pokemon.sprites?.default
        if (isShiny) {
            selectedSprite = pokemon.sprites?.shiny
        }
        selectedSprite = selectedSprite ?? pokemon.sprites?.fallback

        setSprite(selectedSprite)
    }, [isShiny, pokemon])

    useEffect(() => {
        setIsShiny(globalShiny)
    }, [globalShiny])

    return (
        <div className="p-4 bg-white rounded-xl h-48 relative cursor-pointer" onClick={() => setIsShiny(!isShiny)}>
            <div className="absolute top-0 right-0 mr-3 mt-3">
                <Star active={isShiny} />
            </div>
            <div className="flex flex-col justify-center items-center h-full gap-3">
                {isLoading
                    ? <Loader/>
                    : <img src={sprite} alt={`pokemon ${pokemon.name}`} className="h-24 w-24"/>
                }
                <p className="capitalize text-xl text-gray-600">{pokemon.name}</p>
            </div>
        </div>
    )
}