// TODO: Make this a controlled component. On each stroke of the key, it should filter the displayed pokemon
import React, { useState, useContext } from 'react';
import PokemonContext from '../context/PokemonContext';
import PokemonCard from './PokemonCard';

const Filter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { allPokemon, setAllPokemon } = useContext(PokemonContext);

    // Function to handle search input changes
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Function to filter Pokémon based on search term
    const filteredPokemon = allPokemon.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="ui search">
            <div className="ui icon input">
                <input
                    className="prompt"
                    placeholder="Search by Name..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <i className="search icon" />
            </div>
            {/* Render filtered Pokémon list */}
            <div className="ui six cards">
                {filteredPokemon.map(pokemon => (
                    <PokemonCard
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.front}
                        hp={pokemon.hp}
                    />
                ))}
            </div>
        </div>
    );
}

export default Filter;