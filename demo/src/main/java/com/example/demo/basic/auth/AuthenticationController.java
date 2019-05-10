
package com.example.demo.basic.auth;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*")
public class AuthenticationController {

    @RequestMapping(value = "/basicauth", method = RequestMethod.GET)
    public AuthenticationBean authenticationBean() {
        return new AuthenticationBean("You are authenticated");
    }
}