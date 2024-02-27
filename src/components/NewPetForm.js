function NewPetForm() {
  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>
      <form>
        <input type="text" name="name" placeholder="Pet name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="text" name="animal_type" placeholder="Animal type" />
        <select name="fromPetShop">
          <option value="true">From a Pet Shop</option>
          <option value="false">From the wild</option>
        </select>
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}
  
  export default NewPetForm;