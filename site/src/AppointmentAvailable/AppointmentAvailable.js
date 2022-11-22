import React from "react";
import AppointmentTimeslot from "./AppointmentTimeslot.js";
import "./AppointmentAvailable.css";
import { Icon } from "@iconify/react";

export default function appointmentAvailable() {
  return (
    <div className="AppointmentAvailable">
      <h2>Selecteer een tijdslot</h2>
      <div className="date">
        <span className="arrow-left">
          <Icon icon="material-symbols:arrow-back-ios-new-rounded" />
        </span>
        Maandag 23 nov
        <span className="arrow-right">
          <Icon icon="material-symbols:arrow-forward-ios-rounded" />
        </span>
      </div>
      <AppointmentTimeslot status="selected-timeslot" />
      <AppointmentTimeslot status="available-timeslot" />
      <AppointmentTimeslot status="unavailable-timeslot" />
    </div>
  );
}
