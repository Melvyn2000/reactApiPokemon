import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Home.css';

const HomePage = () => {

    const [pokemons, setPokemons] = useState([]);
    const token = localStorage.getItem('token');
    // console.log(token);

    useEffect(() => {
        console.log(pokemons);

        if (pokemons !== []) {
            console.log('Recherche des pokemons ...');
            const headers = { "Authorization" : `Bearer ${token}` };
            axios.get('https://127.0.0.1:8000/api/pokemon', { headers })
                .then(response => setPokemons(response.data['hydra:member']));
        }
    }, []);

    if (pokemons && pokemons !== []) {
        console.log(pokemons);
    } else {
        console.log('No pokemons');
    }

    return (
        <>
            <h1>Home page</h1>
            {pokemons.map((pokemon, index) => (
                <div key={index} className='card'>
                    <img src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`} alt={pokemon.name} />
                    <p key={index}>{pokemon.name}</p>
                </div>
            ))}
        </>
    );
}

export default HomePage;