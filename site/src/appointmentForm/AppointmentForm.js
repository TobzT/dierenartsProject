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
    <div className="appointmentForm">
      <form>
        <div>
            <label for="name">Naam:</label>
            <input type="text" id="name" name="naam" placeholder="Jan Klaassen" maxlength="30"/>
        </div>
        <div>
        <label for="e-mail">E-mailadres:</label>
        <input type="email" id="e-mail" name="e-mail" maxlength="75"/>
        </div>
        <div>
        <label for="phone">Telefoonnummer:</label>
        <input type="tel" id="phone" name="telefoonnummer" maxlength="10"/>
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
        <label for="Numberofanimals">Aantal dieren</label>
        <select id="Numberofanimals" name="Numberofanimals">
            <option value="">Maak een keuze</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <div>
            <label for="animal_name">Diernaam:</label>
            <input type="text" id="animal_name" name="Diernaam" placeholder="Flappie" maxlength="90"/>
        </div>
        Type Afspraak: 
        <input type="radio" id="ta_consult" name="appointment_type" value="consult"/><label for="ta_consult">Consult</label>
        <input type="radio" id="ta_first_consult" name="appointment_type" value="first_consult"/><label for="cp_first_consult">Eerste consult</label>
        <input type="radio" id="ta_vaccination" name="appointment_type" value="vaccination"/><label for="ta_vaccination">Vaccinatie</label>
        <input type="radio" id="ta_anal_glands" name="appointment_type" value="anal_glands"/><label for="ta_anal_glands">Anaalklieren legen</label>
        <input type="radio" id="ta_cut_nails" name="appointment_type" value="cut_nails"/><label for="ta_cut_nails">Nagels knippen</label>
        <input type="radio" id="ta_blood_research" name="appointment_type" value="blood_research"/><label for="ta_blood_research">Bloed onderzoek</label>
        <input type="radio" id="ta_urine_research" name="appointment_type" value="urine_research"/><label for="ta_urine_research">Urine onderzoek</label>
        <input type="radio" id="ta_teeth_check" name="appointment_type" value="teeth_check"/><label for="ta_teeth_check">gebitscontrole</label>
        <input type="radio" id="ta_post_operative_check" name="appointment_type" value="post_operative_check"/><label for="ta_post_operative_check">Postoperatieve controle</label>
        <input type="radio" id="ta_order_repeat_prescription" name="appointment_type" value="order_repeat_prescription"/><label for="ta_order_repeat_prescription">Herhaalrecept bestellen</label>
        <div>
    <button type="button">Afspraak bevestigen</button> 
        </div>
    </form>
    </div>
  );
}
