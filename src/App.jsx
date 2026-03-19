import './App.css';
import useFetchCharacters from './hooks/useFetchCharacters';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const pokemon = useFetchCharacters(urlPokemon);
  const rick = useFetchCharacters(urlRick);

  return (
    <>
      <h1>Custom Hooks</h1>

      <h2>Personaje Pokemon</h2>
      {pokemon ? (
        <>
          <p>{pokemon.name}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </>
      ) : (
        <p>Cargando Pokemon...</p>
      )}

      <h2>Personaje Rick and Morty</h2>
      {rick ? (
        <>
          <p>{rick.name}</p>
          <img src={rick.image} alt={rick.name} />
        </>
      ) : (
        <p>Cargando personaje...</p>
      )}
    </>
  );
}

export default App;