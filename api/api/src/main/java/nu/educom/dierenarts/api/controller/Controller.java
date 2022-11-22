package nu.educom.dierenarts.api.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {

    @PostMapping("/test")
    public void test() {
        System.out.println("test");
    }


}
