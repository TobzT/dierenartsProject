package nu.educom.dierenarts.api.controller.models;

public class Available {
    String time;
    boolean occupied;
    String doctor;

    public Available(String time, boolean occupied, String doctor) {
        this.time = time;
        this.occupied = occupied;
        this.doctor = doctor;
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
