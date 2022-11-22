package nu.educom.dierenarts.api.models;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;

import java.io.Serializable;
import javax.persistence.*;


@Entity
//@Table(name="appointments")
public class Appointment implements Serializable {

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    String email;
    String phone;
    String type_of_animal;
    int number_of_animals;
    String name_of_animals;
    String type_of_consult;
    String app_date;
    String app_time;
    String app_number;

    public Appointment() {
        id = 1;
        name = "test";
        email = "test@test.nl";
        phone = "06-12312312";
        type_of_animal = "dog";
        number_of_animals = 1;
        name_of_animals = "Dog";
        type_of_consult = "test-consult";
        app_date = "2022-11-22";
        app_time = "9:30";
        app_number = "2022-0001";

    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getType_of_animal() {
        return type_of_animal;
    }

    public void setType_of_animal(String type_of_animal) {
        this.type_of_animal = type_of_animal;
    }

    public int getNumber_of_animals() {
        return number_of_animals;
    }

    public void setNumber_of_animals(int number_of_animals) {
        this.number_of_animals = number_of_animals;
    }

    public String getName_of_animals() {
        return name_of_animals;
    }

    public void setName_of_animals(String name_of_animals) {
        this.name_of_animals = name_of_animals;
    }

    public String getType_of_consult() {
        return type_of_consult;
    }

    public void setType_of_consult(String type_of_consult) {
        this.type_of_consult = type_of_consult;
    }

    public String getApp_date() {
        return app_date;
    }

    public void setApp_date(String app_date) {
        this.app_date = app_date;
    }

    public String getApp_time() {
        return app_time;
    }

    public void setApp_time(String app_time) {
        this.app_time = app_time;
    }

    public String getApp_number() {
        return app_number;
    }

    public void setApp_number(String app_number) {
        this.app_number = app_number;
    }
}
