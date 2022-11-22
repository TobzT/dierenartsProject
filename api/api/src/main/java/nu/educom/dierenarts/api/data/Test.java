package nu.educom.dierenarts.api.data;

public class Test {
    String name;
    String type_of_animal;

    public Test(String name, String type_of_animal) {
        this.name = name;
        this.type_of_animal = type_of_animal;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType_of_animal() {
        return type_of_animal;
    }

    public void setType_of_animal(String type_of_animal) {
        this.type_of_animal = type_of_animal;
    }
}
