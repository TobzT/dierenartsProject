import React from "react";
import "./App.css";
import Header from "./header/Header.js";
import AppointmentForm from "./appointmentForm/AppointmentForm.js";
import AppointmentAvailable from "./AppointmentAvailable/AppointmentAvailable";

function App() {
  return (
    <div className="App">
      <Header />
      <AppointmentForm />
      <AppointmentAvailable />
    </div>
  );
}

export default App;
