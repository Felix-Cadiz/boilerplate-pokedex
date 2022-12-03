import react, {useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";

const Pokemon = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get("searchTerm" || "");

    const [pokemonNumber, setPokemonNumber] = useState(Number(searchTerm) || 1)
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const getPokemon = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
        // console.log(response);
        const result = await response.json();
        setName(result.name)
        setImage(result.sprites.front_default)
        setSearchParams({searchTerm: pokemonNumber})
    }

    const formHelper = (event) => {
        console.log(event.target.value);
        setPokemonNumber(event.target.value);
    }

    useEffect(() => {
        getPokemon();
        // console.log("use effect has ran")
    }, [pokemonNumber])

    return <>
        <div id="container">
            <h1> Pokedex </h1>
            <h2>{name}</h2>
            <img src={image} />
            <form>
                <input type="number" onChange={(event) => {
                    formHelper(event)
                    setSearchParams({searchTerm: event.target.value})
                }}/>
            </form>
            <div id="buttons">
                <button onClick={() => setPokemonNumber(pokemonNumber - 1)}>-</button>
                <button onClick={() => setPokemonNumber(pokemonNumber + 1)}>+</button>
            </div>
        </div>
    </>
}

export default Pokemon;
