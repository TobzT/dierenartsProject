//package nu.educom.dierenarts.api.controller.data;
//
//import nu.educom.dierenarts.api.controller.models.Appointment;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Component;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.List;
//
//@Service
//@Transactional
//public class AppointmentService{
//
//    public AppointmentService() {
//
//    };
//    @Autowired
//    private AppointmentRepos appointmentRepos;
//
//    public Appointment getAppointment(@Param("app_nr") String app_nr) {
//        return appointmentRepos.getAppointmentByAppNumber(app_nr);
//    }
//}
