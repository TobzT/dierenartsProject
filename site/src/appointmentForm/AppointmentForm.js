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
    </div>
  );
}
