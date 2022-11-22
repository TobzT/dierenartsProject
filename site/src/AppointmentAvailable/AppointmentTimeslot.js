import React from "react";
import "./AppointmentTimeslot.css";

export default function appointmentTimeslot(data) {
  console.log(data.status);
  return (
    <div className="AppointmentTimeslot">
      <div className="time">
        <span>09</span>:<span>15</span>
      </div>
      <div className={data.status}></div>
    </div>
  );
}
