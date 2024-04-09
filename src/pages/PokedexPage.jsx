import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../components/hooks/useFetch";
import ListPokemons from "../components/PokedexPage/ListPokemons";
import SelectType from "../components/PokedexPage/SelectType";
import Pagination from "./Pagination";
import "../components/PokedexPage/style/PokedexPage.css";
import title from "../../public/images/title.png";

const PokedexPage = () => {
  const [pokeSearch, setPokeSearch] = useState("");
  const [typeSelector, setTypeSelector] = useState("allPokemons");
  const [page, setPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(8);

  const inputSearch = useRef();

  const trainer = useSelector((states) => states.trainer);

  const url = `https://pokeapi.co/api/v2/pokemon?limit=9999999&offset=0`;
  const [pokemons, getPokemons, getPokeByType] = useFetch(url);

  useEffect(() => {
    if (typeSelector === "allPokemons") {
      getPokemons();
    } else {
      getPokeByType(typeSelector);
    }
    setPage(1);
  }, [typeSelector, url]);

  const handlesubmit = (e) => {
    e.preventDefault();
    setPokeSearch(inputSearch.current.value.trim());
    setPage(1);
  };

  const pokemonsFiltered = pokemons?.results.filter((poke) => {
    return poke.name.includes(pokeSearch);
  });

  const startIndex = (page - 1) * pokePerPage;
  const endIndex = page * pokePerPage;
  const quantyPokes = pokemonsFiltered ? pokemonsFiltered.length : 0;
  const quantyPage = Math.ceil(quantyPokes / pokePerPage);

  return (
    <div className="pokedex">
      <div className="pokedex__home__foot">
        <div className="pokedex__foot"></div>
        <img className="pokedex__img" src={title} alt="" />
        <div className="pokedex__circle">
          <div className="pokedex__circle__small"></div>
        </div>
      </div>
      <p className="pokedex_message">
        {" "}
        <span className="trainer">Welcome {trainer}</span>, here you can find
        your favorite pokemon
      </p>
      <div className="poke__options">
        <form className="poke__form" onClick={handlesubmit}>
          <input className="home__input" ref={inputSearch} type="text" />
          <button className="home__btn btn">search</button>
        </form>
        <SelectType setTypeSelector={setTypeSelector} />
      </div>

      {
        <Pagination
          pokemons={pokemonsFiltered}
          startIndex={startIndex}
          endIndex={endIndex}
          quantyPage={quantyPage}
          setPage={setPage}
          page={page}
          setPokePerPage={setPokePerPage}
          pokePerPage={pokePerPage}
        />
      }

      <ListPokemons
        pokemons={pokemonsFiltered}
        startIndex={startIndex}
        endIndex={endIndex}
        quantyPage={quantyPage}
        setPage={setPage}
        page={page}
      />

      {
        <Pagination
          pokemons={pokemonsFiltered}
          startIndex={startIndex}
          endIndex={endIndex}
          quantyPage={quantyPage}
          setPage={setPage}
          page={page}
          setPokePerPage={setPokePerPage}
          pokePerPage={pokePerPage}
        />
    }
    </div>
  );
};

export default PokedexPage;
