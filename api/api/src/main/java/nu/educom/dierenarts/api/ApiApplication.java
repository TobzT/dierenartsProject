package nu.educom.dierenarts.api;

//import nu.educom.dierenarts.api.controller.data.AppointmentConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class }, scanBasePackages={"nu.educom.dierenarts"})
//@SpringBootApplication
public class ApiApplication {


	public static void main(String[] args) {
//		ApplicationContext context
//				= new AnnotationConfigApplicationContext(
//				AppointmentConfig.class);
//		Appointment appointment
//				= context.getBean("appointmentBean", Appointment.class);
		SpringApplication.run(ApiApplication.class, args);
	}

}
