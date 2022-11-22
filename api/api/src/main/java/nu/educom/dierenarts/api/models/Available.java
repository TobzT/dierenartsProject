package nu.educom.dierenarts.api.models;

public class Available {
    int id;
    String time;
    boolean occupied;
    String doctor;

    public Available(int id, String time, boolean occupied, String doctor) {
        this.id = id;
        this.time = time;
        this.occupied = occupied;
        this.doctor = doctor;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public boolean isOccupied() {
        return occupied;
    }

    public void setOccupied(boolean occupied) {
        this.occupied = occupied;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }
}
