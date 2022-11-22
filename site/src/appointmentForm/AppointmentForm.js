import React from "react";
import "./AppointmentForm.css";

export default function appointmentForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    let formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
  }

  return (
    <div className="AppointmentForm">
      <h2>Afspraak gegevens</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="name">Naam:</label>
          <input
            type="text"
            id="name"
            name="naam"
            placeholder="Jan Klaassen"
            maxlength="30"
          />
        </div>
        <div>
          <label for="e-mail">E-mailadres:</label>
          <input type="email" id="e-mail" name="e-mail" maxlength="75" />
        </div>
        <div>
          <label for="phone">Telefoonnummer:</label>
          <input type="tel" id="phone" name="telefoonnummer" maxlength="10" />
        </div>
        <div>
          <label for="Animaltype">Soort dier</label>
          <select id="Animaltype" name="Animaltype">
            <option value="">Maak een keuze</option>
            <option value="Dog">Hond</option>
            <option value="Cat">Kat</option>
            <option value="Bunny">Konijn</option>
            <option value="Guinea Pig">Cavia</option>
            <option value="Hamster">Hamster</option>
            <option value="Rat">Rat</option>
            <option value="Mouse">Muis</option>
          </select>
        </div>
        <div>
          <label for="number_of_animals">Aantal dieren</label>
          <input type="radio" id="no_animals_1" name="number_of_animals" value="animals"/><label for="no_animals_1">1</label>
          <input type="radio" id="no_animals_2" name="number_of_animals" value="animals"/><label for="no_animals_2">2</label>
          <input type="radio" id="no_animals_3" name="number_of_animals" value="animals"/><label for="no_animals_3">3</label>
          <input type="radio" id="no_animals_4" name="number_of_animals" value="animals"/><label for="no_animals_4">4</label>
        </div>
        <div>
          <label for="animal_name">Diernamen:</label>
          <input type="text" id="animal_name" name="Diernaam" placeholder="Flappie, Boris, Tweety" maxlength="90"/>
        </div>
        <div>
          <label for="appointment_type">Type afspraak:</label>
          <select id="app_type" name="appointment_type">
            <option value="">Maak een keuze</option>
            <option value="consult">Consult</option>
            <option value="first_consult">Eerste consult</option>
            <option value="vaccination">Vaccinatie</option>
            <option value="empty_anal_glands">Anaalklieren legen</option>
            <option value="cut_nails">Nagels knippen</option>
            <option value="blood_research">Bloedonderzoek</option>
            <option value="urine_research">Urineonderzoek</option>
            <option value="teeth_check">Gebitscontrole</option>
            <option value="post_operative_check">
              Postoperatieve controle
            </option>
            <option value="repeated_prescription">
              Herhaalrecept bestellen
            </option>
          </select>
        </div>
        <div>
          <button type="submit">Afspraak bevestigen </button>
        </div>
      </form>
    </div>
  );
}
