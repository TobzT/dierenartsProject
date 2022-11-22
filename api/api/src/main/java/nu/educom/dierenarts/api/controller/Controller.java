package nu.educom.dierenarts.api.controller;

//import nu.educom.dierenarts.api.controller.data.AppointmentService;
import nu.educom.dierenarts.api.data.Test;
import nu.educom.dierenarts.api.models.Appointment;
import nu.educom.dierenarts.api.models.Available;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {
//    @Autowired
//    AppointmentService appointmentService;

    @GetMapping("/appointment/{appId}") // TODO
    public Appointment getAppointment(@PathVariable String appId) {
//        Appointment output = appointmentService.getAppointment(appId);
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

    @PostMapping("/available")
    public Test postAvailable(@RequestParam String name, @RequestParam String type_of_animal) {

        Test output = new Test(name, type_of_animal);

        return output;
    }
}
