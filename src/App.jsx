import React, {useState} from "react";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";
import ShinyPokemonContext from "./context/ShinyPokemonContext";

function App() {
    const shiny = useState(false)
    return (
        <ShinyPokemonContext.Provider value={shiny}>
            <div className="min-h-screen bg-gray-100">
                <Header/>
                <Pokedex/>
            </div>
        </ShinyPokemonContext.Provider>

    )
}

export default App
