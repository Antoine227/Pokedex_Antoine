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
    
    return (
        <div>
           {pokemonList.map((pokemon, index) => (
        <button type="button"
          key={pokemon.name} 
          onClick={() => setPokemonIndex(index)}
          disabled={index === currentIndex}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
);
}
  export default NavBar;