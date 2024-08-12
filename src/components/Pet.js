import { useState } from "react";

function Pet({pet}){

    const [isToggled, setIsToggled] = useState(true)

    function handleClick() {
        setIsToggled(!isToggled)
    }


    return (
        <li className="pet">
            <img onClick={handleClick} src={pet.image} alt={pet.name}/>
            <h4>{isToggled ? pet.name : pet.animal_type}</h4>
            <p>
                {
                    pet.fromPetShop === true ? "From a Pet Shop" : "From the wild"
                }
            </p>
            <button className="adopt-button">Adopt</button>
        </li>
    );
}

export default Pet;