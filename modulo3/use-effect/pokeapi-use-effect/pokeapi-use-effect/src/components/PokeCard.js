import axios from "axios";
import {useState, useEffect} from "react"

function PokeCard({pokeName}) {
  // Passo 4b
  // Implementa suas variáveis de estado aqui.
  const [pokemon, setPokemon] = useState({})

  // Passo 4c
  useEffect(() => {
    pegaPokemon(pokeName)
  },[])

  useEffect(() => {
    pegaPokemon(pokeName)
  },[pokeName])

  // Passo 4c
  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        setPokemon(res.data)
        console.log(res.data.types)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <figure>
      {/* Passo 4d */}
      <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
      {/* Passo 4d */}
      <p>Peso: {pokemon.weight}</p>
      {/* Passo 4d */}
      <p>Tipos: {pokemon.types && pokemon.types.map((item) => {return item.type.name.toUpperCase() + ' '})}</p>
      {/* Passo 4d */}
      {true && (
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
      )}
    </figure>
  );
};

export default PokeCard;
