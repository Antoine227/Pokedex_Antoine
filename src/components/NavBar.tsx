interface Pokemon {
    name: string;
    imgSrc?: string;
  }

  interface NavBarProps {
    currentIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
}

function NavBar({currentIndex, setPokemonIndex, pokemonList}: NavBarProps) {
    
    const handlePokemonSelect = (index: number) => {
        setPokemonIndex(index);
        
        if (pokemonList[index].name === "pikachu") {
          alert("pika pikachu !!!");
        }
      };
    
      return (
        <div>
          {pokemonList.map((pokemon, index) => (
            <button type="button"
              key={pokemon.name} 
              onClick={() => handlePokemonSelect(index)}
          disabled={index === currentIndex}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
);
}
  export default NavBar;