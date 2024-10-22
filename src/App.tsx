import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const handlePrecedent = () => {
    setPokemonIndex(pokemonIndex - 1)
  };

  const handleSuivant = () => {
    setPokemonIndex(pokemonIndex + 1)
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 && (
        <button type="button" onClick={handlePrecedent}>Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={handleSuivant}>Suivant</button>
      )}
    </div>
  );
}

export default App;