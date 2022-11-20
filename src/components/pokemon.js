import react, {useState, useEffect} from "react";

const Pokemon = () => {
    const [pokemonNumber, setPokemonNumber] = useState(1)
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const getPokemon = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
        // console.log(response);
        const result = await response.json();
        setName(result.name)
        setImage(result.sprites.front_default)

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
        <h1> Pokedex </h1>
        <h2>{name}</h2>
        <img src={image} />
        <button onClick={() => setPokemonNumber(pokemonNumber - 1)}>-</button>
        <form>
            <input type="number" onChange={(event) => formHelper(event)}/>
        </form>
        <button onClick={() => setPokemonNumber(pokemonNumber + 1)}>+</button>
    </>
}

export default Pokemon;
