/*
 * Project home: https://github.com/jaxio/celerio-angular-quickstart
 *
 * Source code generated by Celerio, an Open Source code generator by Jaxio.
 * Documentation: http://www.jaxio.com/documentation/celerio/
 * Source code: https://github.com/jaxio/celerio/
 * Follow us on twitter: @jaxiosoft
 * This header can be customized in Celerio conf...
 * Template pack-angular:src/test/java/ApplicationTests.java.p.vm
 */
package com.willbe.giftapp

import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@ActiveProfiles("test")
open //@ComponentScan(basePackages={"com.willbe.giftapp"})
//@ContextConfiguration(classes = arrayOf(TestConfig::class))

class BaseTest{
    @Test
    fun test() {

    }
}
