import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import { isEmpty } from "./Utils";

const Pokedex = () => {
  const [data, setData] = useState([""]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => setData(res.data.results));
  }, []);
  return (
    <section id="pokedex">
      {!isEmpty(data) &&
        data.map((pokemon) => <Pokemon key={pokemon.name} pokemon={pokemon} />)}
    </section>
  );
};

export default Pokedex;
