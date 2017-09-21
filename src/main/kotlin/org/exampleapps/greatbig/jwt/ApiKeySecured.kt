package org.exampleapps.greatbig.jwt

import java.lang.annotation.Documented
import java.lang.annotation.Inherited

@Documented
@Inherited
@Target(AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER)
@Retention(AnnotationRetention.RUNTIME)
annotation class ApiKeySecured(val mandatory: Boolean = true)
