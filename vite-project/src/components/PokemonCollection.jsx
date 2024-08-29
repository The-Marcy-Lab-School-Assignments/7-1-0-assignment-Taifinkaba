import PokemonCard from './PokemonCard';

// TODO: import the PokemonContext and useContext
import PokemonContext from '../context/PokemonContext';
import React, {useContext} from 'react';


// TODO: Replace this to get the pokemon from PokemonContext


const PokemonCollection = () => {
    const { allPokemon } = useContext(PokemonContext);

    return (
        <div className="ui six cards">
            {allPokemon?.map(pokemon => (
                <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} image={pokemon.image} hp={pokemon.hp} />
            ))}
        </div>
    );
}

export default PokemonCollection;