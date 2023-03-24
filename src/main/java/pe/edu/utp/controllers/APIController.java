package pe.edu.utp.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class APIController {

    @GetMapping(value = "/")
    public String helloWorld() {
        return "Hello world!";
    }
}
