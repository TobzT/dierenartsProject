package nu.educom.dierenarts.api.data;

public class Test {
    String name;
    String email;
    String telefoonnummer;
    int number_of_animals;
    String Diernaam;
    String appointment_type;

    public Test(String name, String email, String telefoonnummer, int number_of_animals, String Diernaam, String appointment_type) {
        this.name = name;
        this.email = email;
        this.telefoonnummer = telefoonnummer;
        this.number_of_animals = number_of_animals;
        this.Diernaam = Diernaam;
        this.appointment_type = appointment_type;

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefoonnummer() {
        return telefoonnummer;
    }

    public void setTelefoonnummer(String telefoonnummer) {
        this.telefoonnummer = telefoonnummer;
    }

    public int getNumber_of_animals() {
        return number_of_animals;
    }

    public void setNumber_of_animals(int number_of_animals) {
        this.number_of_animals = number_of_animals;
    }

    public String getDiernaam() {
        return Diernaam;
    }

    public void setDiernaam(String diernaam) {
        Diernaam = diernaam;
    }

    public String getAppointment_type() {
        return appointment_type;
    }

    public void setAppointment_type(String appointment_type) {
        this.appointment_type = appointment_type;
    }
}
