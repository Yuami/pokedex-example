import React, {useContext} from "react";
import PokeballIcon from "../PokeballIcon";
import Star from "./Star";
import ShinyPokemonContext from "../context/ShinyPokemonContext";

function Header() {
    const [shiny, setShiny] = useContext(ShinyPokemonContext)

    return (
        <header className="bg-white flex justify-between px-6 py-3 shadow">
            <div className="flex gap-2 items-center">
                <PokeballIcon className="h-12 w-12 fill-gray-800"/>
                <h1 className="text-2xl text-gray-800">Pokémon</h1>
            </div>
            <div className="flex gap-3 items-center">
                <div className="flex gap-3 cursor-pointer" onClick={() => setShiny(!shiny)}>
                    <p className="text-gray-700">Shiny</p>
                    <Star active={shiny} />
                </div>
                <div
                    className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center text-2xl">Y
                </div>
            </div>
        </header>
    );
}

export default Header