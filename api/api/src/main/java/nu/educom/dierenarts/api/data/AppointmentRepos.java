//package nu.educom.dierenarts.api.controller.data;
//
//import nu.educom.dierenarts.api.controller.models.Appointment;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Component;
//import org.springframework.stereotype.Repository;
//
//@Repository
//
//public interface AppointmentRepos extends JpaRepository<Appointment, Integer>{
//
//    @Query("select u from appointments where u.app_nr = :app_nr")
//    public Appointment getAppointmentByAppNumber(@Param("app_nr") String app_nr);
//};
//
