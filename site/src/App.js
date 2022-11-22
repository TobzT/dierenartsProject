import React from "react";
import "./App.css";
import Header from "./header/Header.js";
import AppointmentForm from "./appointmentForm/AppointmentForm.js";
import AppointmentAvailable from "./AppointmentAvailable/AppointmentAvailable";


class App extends Component {
  state={
    availableDate : [],
    id: '',
    name: '',
    email: '',
    phone: '',
    type_of_animal: '',
    nbr_of_animal: '',
    name_of_animal: [],
    type_of_consult: '',
    app_date: '',
    app_time : '',
    app_nbr: '',
    doctor : ''
};
  render() {
    
    return (
      <div  name="App">
      <Header />
      <AppointmentForm />
      <AppointmentAvailable />
    </div>
  );
}

}
export default App;
