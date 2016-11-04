
package com.modern.democracy.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.ImmutableMap;

/**
 * The Class TestController.
 *
 * @version $Id: $
 */
@RestController
public class ExampleController {

    // ===========================================
    // Public Members
    // ===========================================

    // ===========================================
    // Private Members
    // ===========================================

    /** The Constant KEY. */
    private static final String KEY = "message";

    /** The Constant VALUE. */
    private static final String VALUE = "hello from example controller";

    // ===========================================
    // Static initialisers
    // ===========================================

    // ===========================================
    // Constructors
    // ===========================================

    /**
     * Instantiates a new test controller.
     */
    public ExampleController() {
        super();
    }

    // ===========================================
    // Public Methods
    // ===========================================

    /**
     * Test.
     *
     * @return the map
     */
    @RequestMapping("/test")
    public Map<String, String> test() {
        return ImmutableMap.of(KEY, VALUE);
    }

    // ===========================================
    // Protected Methods
    // ===========================================

    // ===========================================
    // Private Methods
    // ===========================================

}
