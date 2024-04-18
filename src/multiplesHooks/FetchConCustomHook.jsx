import { useCounter } from "../hooks/useCounter/useCounter";
import { useFetch } from "../hooks/useFetch/useFetch"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";


export const FetchConCustomHook = () => {

    const {counter,incrementar,decrementar}=useCounter(1);
    
    const {data,isLoading}=useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    
    
  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />

      { 
        isLoading 
        ? <LoadingMessage /> 
        : (
          <PokemonCard
            id={ counter } 
            name={ data.name } 
            sprites={ [
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_default,
              data.sprites.back_shiny,
            ] }
          />
        )
    }

      


      <button
        className="btn btn-primary mt-2"
        onClick={ () => counter > 1 ? decrementar() : null }
      >
        Anterior
      </button>
      <button
        className="btn btn-primary mt-2"
        onClick={ incrementar}
      >
        Siguiente
      </button>

    </>

    
  )
}