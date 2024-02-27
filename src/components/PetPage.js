import PetList from "./PetList";
import Search from './Search';
import NewPetForm from "./NewPetForm";

function PetPage(){
    return (
        <main>
            <NewPetForm/>
            <Search/>
            <PetList/>
        </main>
    );
}

export default PetPage;