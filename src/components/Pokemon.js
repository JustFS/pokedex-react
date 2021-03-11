import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Pokemon = ({ pokemon }) => {
    const [data, setData] = useState([""]);
    // useEffect(() => {
    //     axios
    //     .get(pokemon.url)
    //     .then((res) =>
    //         setData(res.data));
    // }, []);
    fetch(pokemon.url)
    .then((res) => res.json())
    .then((data) => {
        setData(data)
    })

// console.log(data.types['0'].type.name);
    return (
        <article className="pokemon">
            <header className="header-pokemon">
                <h2>{data.name}</h2>
                <h4>#{data.id}</h4>
                <h5>{data.stats[0].base_stat} HP</h5>
            </header>
            <div className="img-pokemon">
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + data.id + ".svg"} alt=""/>
            </div>
            <div className="moves-pokemon">
                <p className="move-1">
                    Main Attack : {data.moves['0'].move.name}
                </p>
                <p className="move-stat">
                    {data.stats[1].base_stat} Degats
                </p>
            </div>
            <footer className="footer-pokemon">
                <p>
                type : {data.types['0'].type.name} 
                </p>
            </footer>
        </article>
    );
};
export default Pokemon;



