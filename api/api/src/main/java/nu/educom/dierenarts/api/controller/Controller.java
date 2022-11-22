package nu.educom.dierenarts.api.controller;

import nu.educom.dierenarts.api.controller.models.Appointment;
import nu.educom.dierenarts.api.controller.models.Available;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.lang.model.util.AbstractAnnotationValueVisitor6;
import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {


    @GetMapping("/appointment/{appId}") // TODO
    public Appointment getAppointment(@PathVariable String appId) {
        Appointment output = new Appointment();
        return output;
    }

    @GetMapping("/available")
    public List<Available> getAvailable() {
        List<Available> output = new ArrayList<Available>();
        output.add(new Available(1, "9:30", true, "Danique"));
        output.add(new Available(2, "9:30", true, "Sylvia"));
        output.add(new Available(3, "9:45", true, "Danique"));
        output.add(new Available(4, "9:45", false, "Sylvia"));
        output.add(new Available(5, "10:00", false, "Danique"));
        output.add(new Available(6, "10:00", false, "Sylvia"));
        return output;
    }
}
