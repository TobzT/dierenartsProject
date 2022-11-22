import React from "react";
import AppointmentTimeslot from "./AppointmentTimeslot.js";
import "./AppointmentAvailable.css";

export default function appointmentAvailable() {
  return (
    <div className="AppointmentAvailable">
      <h2>Selecteer een tijdslot</h2>
      <AppointmentTimeslot status="selected-timeslot" />
      <AppointmentTimeslot status="available-timeslot" />
      <AppointmentTimeslot status="unavailable-timeslot" />
    </div>
  );
}
