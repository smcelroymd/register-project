
package com.modern.democracy.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * The Class WebConfig.
 *
 * @version $Id: $
 */
@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {

    // ===========================================
    // Public Members
    // ===========================================

    // ===========================================
    // Private Members
    // ===========================================

    /** The Constant ROOT_URL. */
    private static final String ROOT_URL = "/";
    
    /** The Constant ROOT_TEMPLATE. */
    private static final String ROOT_TEMPLATE = "index"; 
    
    // ===========================================
    // Static initialisers
    // ===========================================

    // ===========================================
    // Constructors
    // ===========================================

    /**
     * Instantiates a new web config.
     */
    public WebConfig() {
        super();
    }

    // ===========================================
    // Public Methods
    // ===========================================

    /*
     * (non-Javadoc)
     *
     * @see org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter#addViewControllers(org.springframework.web.servlet.config.annotation.ViewControllerRegistry)
     */
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController(ROOT_URL).setViewName(ROOT_TEMPLATE);
    }

    // ===========================================
    // Protected Methods
    // ===========================================

    // ===========================================
    // Private Methods
    // ===========================================

}
