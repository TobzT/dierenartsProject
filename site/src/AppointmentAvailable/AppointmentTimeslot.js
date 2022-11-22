import React from "react";
import "./AppointmentTimeslot.css";

export default function appointmentTimeslot(data) {
  return (
    <div className="AppointmentTimeslot">
      <input type="radio" value={data.data.id} id="{data.data.id} "></input>

      <div className="time">
        <label>
          <span>{data.data.time}</span>
        </label>
      </div>
      <div className={data.status}></div>
    </div>
  );
}
