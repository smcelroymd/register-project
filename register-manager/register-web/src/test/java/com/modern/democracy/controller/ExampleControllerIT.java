
package com.modern.democracy.controller;

import static org.junit.Assert.assertEquals;

import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import com.modern.democracy.RegisterManagerApplication;

/**
 * @version $Id: $
 */
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment=WebEnvironment.RANDOM_PORT, classes = RegisterManagerApplication.class)
public class ExampleControllerIT {

    // ===========================================
    // Public Members
    // ===========================================

    // ===========================================
    // Private Members
    // ===========================================
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    // ===========================================
    // Static initialisers
    // ===========================================

    // ===========================================
    // Constructors
    // ===========================================

    public ExampleControllerIT() {
        super();
    }
    
    // ===========================================
    // Public Methods
    // ===========================================

    @SuppressWarnings("unchecked")
    @Test
    public void testTest() {
        Map<String, String> result = restTemplate.getForObject("/test", Map.class);
        assertEquals("hello from example controller", result.get("message"));
    }

    // ===========================================
    // Protected Methods
    // ===========================================

    // ===========================================
    // Private Methods
    // ===========================================

}
