import React from "react";
import "./App.css";
import Header from "./header/Header.js";
import AppointmentForm from "./appointmentForm/AppointmentForm.js";
import AppointmentAvailable from "./AppointmentAvailable/AppointmentAvailable";

function App() {
  let availableData = [
    { id: 1, time: "9:30", occupied: true, doctor: "Danique" },
    { id: 2, time: "9:30", occupied: true, doctor: "Sylvia" },
    { id: 3, time: "9:45", occupied: true, doctor: "Danique" },
    { id: 4, time: "9:45", occupied: false, doctor: "Sylvia" },
    { id: 5, time: "10:00", occupied: false, doctor: "Danique" },
    { id: 6, time: "10:00", occupied: false, doctor: "Sylvia" },
  ];

  return (
    <div className="App">
      <Header />
      <div className="section">
        <div className="AppointmentPage">
          <AppointmentForm />
          <AppointmentAvailable data={availableData} />
        </div>
      </div>
    </div>
  );
}

export default App;
