import React, {useState, useContext} from "react"
import PokemonContext from "../context/PokemonContext"
import handleFetch from "../utils/handleFetch"

const PokemonForm = () => {
    const {allPokemon, setAllPokemon} = useContext(PokemonContext)

    const {formData, setFormData} = useState({
        name: '',
        hp: '',
        font:'',
        back:  ''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target

        setFormData((prevData)=({
            ...prevData,
            [name]:value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        await fetch('http://localhost:4000/pokemon', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        setAllPokemon([...allPokemon, formData]);

        setFormData({
            name: '',
            hp: '',
            front: '',
            back: ''
        });
    };

    return (
        <div>
            <h3>Add a Pokemon!</h3>
            <form className="ui form">
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="field ui fluid">
                        <label>HP</label>
                        <input type="text" name="hp" placeholder="HP" />
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input type="text" name="front" placeholder="url" />
                    </div>
                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input type="text" name="back" placeholder="url" />
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PokemonForm
