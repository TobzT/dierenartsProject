import React from "react";

export default function ShowCalendar(data) {
  let status = "";
  const appointments = data.data.data;
  console.log(appointments);
  appointments.forEach((appointment, index) => {
    if (appointment.occupied) {
      status = "unavailable";
    } else {
      status = "available";
    }
    return (
      <div className="AppointmentTimeslot">
        <div className="time">
          <span>{data.data.time}</span>
        </div>
        <div className={status}></div>
      </div>
    );
  });
}
