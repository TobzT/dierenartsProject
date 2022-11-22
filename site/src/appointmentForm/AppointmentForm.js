import React from "react";
import "./AppointmentForm.css";

export default function appointmentForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));
  }

  return (
    <div className="AppointmentForm">
      <h2>Afspraak gegevens</h2>
      <form>
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
          <select id="number_of_animals" name="number_of_animals">
            <option value="">Maak een keuze</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div>
          <label for="animal_name">Diernaam:</label>
          <input type="text" id="animal_name" name="Diernaam" placeholder="Flappie" maxlength="90"/>
        </div>
        <div>
          <button type="button">Afspraak bevestigen</button>
        </div>
      </form>
    </div>
  );
}
