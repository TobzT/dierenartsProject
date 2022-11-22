import React from "react";
import AppointmentTimeslot from "./AppointmentTimeslot.js";
import "./AppointmentAvailable.css";
import { Icon } from "@iconify/react";

export default function appointmentAvailable(data) {
  let status = "";
  const appointments = data.data;

  const ShowCalendar = () => {
    let result = [];
    appointments.forEach((appointment, index) => {
      if (appointment.occupied) {
        status = "unavailable-timeslot";
      } else {
        status = "available-timeslot";
      }
      result.push(
        <AppointmentTimeslot key={index} data={appointment} status={status} />
      );
    });
    return result;
  };

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
      <form>
        <ShowCalendar />
      </form>
    </div>
  );
}
