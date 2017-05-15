# File Structure
```
.
├── Procfile
├── README.md
├── etc
├── mvnw
├── mvnw.cmd
├── package.json
├── pom.xml
├── proxy.conf.json
├── schema.jdl
├── src
│   ├── main
│   │   ├── docker
│   │   │   ├── Dockerfile
│   │   │   ├── app.yml
│   │   │   ├── elasticsearch.yml
│   │   │   ├── postgresql.yml
│   │   │   └── sonar.yml
│   │   ├── java
│   │   │   └── org
│   │   │       └── exampleapps
│   │   │           └── greatbig
│   │   │               ├── ApplicationWebXml.java
│   │   │               ├── GreatBigExampleApplicationApp.java
│   │   │               ├── aop
│   │   │               │   └── logging
│   │   │               │       └── LoggingAspect.java
│   │   │               ├── config
│   │   │               │   ├── ApplicationProperties.java
│   │   │               │   ├── AsyncConfiguration.java
│   │   │               │   ├── CacheConfiguration.java
│   │   │               │   ├── CloudDatabaseConfiguration.java
│   │   │               │   ├── Constants.java
│   │   │               │   ├── DatabaseConfiguration.java
│   │   │               │   ├── DateTimeFormatConfiguration.java
│   │   │               │   ├── DefaultProfileUtil.java
│   │   │               │   ├── ElasticsearchConfiguration.java
│   │   │               │   ├── LocaleConfiguration.java
│   │   │               │   ├── LoggingAspectConfiguration.java
│   │   │               │   ├── LoggingConfiguration.java
│   │   │               │   ├── MetricsConfiguration.java
│   │   │               │   ├── SecurityConfiguration.java
│   │   │               │   ├── ThymeleafConfiguration.java
│   │   │               │   ├── WebConfigurer.java
│   │   │               │   ├── WebsocketConfiguration.java
│   │   │               │   ├── WebsocketSecurityConfiguration.java
│   │   │               │   ├── audit
│   │   │               │   │   ├── AuditEventConverter.java
│   │   │               │   │   └── package-info.java
│   │   │               │   ├── package-info.java
│   │   │               │   └── social
│   │   │               │       └── SocialConfiguration.java
│   │   │               ├── domain
│   │   │               │   ├── AbstractAuditingEntity.java
│   │   │               │   ├── Authority.java
│   │   │               │   ├── Blog.java
│   │   │               │   ├── Claim.java
│   │   │               │   ├── ClaimRebuttal.java
│   │   │               │   ├── Contact.java
│   │   │               │   ├── Crisis.java
│   │   │               │   ├── Entry.java
│   │   │               │   ├── Hero.java
│   │   │               │   ├── Note.java
│   │   │               │   ├── PersistentAuditEvent.java
│   │   │               │   ├── Rebuttal.java
│   │   │               │   ├── SocialUserConnection.java
│   │   │               │   ├── Tag.java
│   │   │               │   ├── User.java
│   │   │               │   └── package-info.java
│   │   │               ├── repository
│   │   │               │   ├── AuthorityRepository.java
│   │   │               │   ├── BlogRepository.java
│   │   │               │   ├── ClaimRebuttalRepository.java
│   │   │               │   ├── ClaimRepository.java
│   │   │               │   ├── ContactRepository.java
│   │   │               │   ├── CrisisRepository.java
│   │   │               │   ├── CustomAuditEventRepository.java
│   │   │               │   ├── CustomSocialConnectionRepository.java
│   │   │               │   ├── CustomSocialUsersConnectionRepository.java
│   │   │               │   ├── EntryRepository.java
│   │   │               │   ├── HeroRepository.java
│   │   │               │   ├── NoteRepository.java
│   │   │               │   ├── PersistenceAuditEventRepository.java
│   │   │               │   ├── RebuttalRepository.java
│   │   │               │   ├── SocialUserConnectionRepository.java
│   │   │               │   ├── TagRepository.java
│   │   │               │   ├── UserRepository.java
│   │   │               │   ├── package-info.java
│   │   │               │   └── search
│   │   │               │       ├── BlogSearchRepository.java
│   │   │               │       ├── ClaimRebuttalSearchRepository.java
│   │   │               │       ├── ClaimSearchRepository.java
│   │   │               │       ├── ContactSearchRepository.java
│   │   │               │       ├── CrisisSearchRepository.java
│   │   │               │       ├── EntrySearchRepository.java
│   │   │               │       ├── HeroSearchRepository.java
│   │   │               │       ├── NoteSearchRepository.java
│   │   │               │       ├── RebuttalSearchRepository.java
│   │   │               │       ├── TagSearchRepository.java
│   │   │               │       ├── UserSearchRepository.java
│   │   │               │       └── package-info.java
│   │   │               ├── security
│   │   │               │   ├── AuthoritiesConstants.java
│   │   │               │   ├── DomainUserDetailsService.java
│   │   │               │   ├── SecurityUtils.java
│   │   │               │   ├── SpringSecurityAuditorAware.java
│   │   │               │   ├── UserNotActivatedException.java
│   │   │               │   ├── jwt
│   │   │               │   │   ├── JWTConfigurer.java
│   │   │               │   │   ├── JWTFilter.java
│   │   │               │   │   └── TokenProvider.java
│   │   │               │   ├── package-info.java
│   │   │               │   └── social
│   │   │               │       ├── CustomSignInAdapter.java
│   │   │               │       └── package-info.java
│   │   │               ├── service
│   │   │               │   ├── AuditEventService.java
│   │   │               │   ├── MailService.java
│   │   │               │   ├── SocialService.java
│   │   │               │   ├── UserService.java
│   │   │               │   ├── dto
│   │   │               │   │   ├── UserDTO.java
│   │   │               │   │   └── package-info.java
│   │   │               │   ├── mapper
│   │   │               │   │   ├── UserMapper.java
│   │   │               │   │   └── package-info.java
│   │   │               │   ├── package-info.java
│   │   │               │   └── util
│   │   │               │       └── RandomUtil.java
│   │   │               └── web
│   │   │                   ├── rest
│   │   │                   │   ├── AccountResource.java
│   │   │                   │   ├── AuditResource.java
│   │   │                   │   ├── BlogResource.java
│   │   │                   │   ├── ClaimRebuttalResource.java
│   │   │                   │   ├── ClaimResource.java
│   │   │                   │   ├── ContactResource.java
│   │   │                   │   ├── CrisisResource.java
│   │   │                   │   ├── EntryResource.java
│   │   │                   │   ├── HeroResource.java
│   │   │                   │   ├── JWTToken.java
│   │   │                   │   ├── LogsResource.java
│   │   │                   │   ├── NoteResource.java
│   │   │                   │   ├── ProfileInfoResource.java
│   │   │                   │   ├── RebuttalResource.java
│   │   │                   │   ├── SocialController.java
│   │   │                   │   ├── TagResource.java
│   │   │                   │   ├── UserJWTController.java
│   │   │                   │   ├── UserResource.java
│   │   │                   │   ├── errors
│   │   │                   │   │   ├── CustomParameterizedException.java
│   │   │                   │   │   ├── ErrorConstants.java
│   │   │                   │   │   ├── ErrorVM.java
│   │   │                   │   │   ├── ExceptionTranslator.java
│   │   │                   │   │   ├── FieldErrorVM.java
│   │   │                   │   │   └── ParameterizedErrorVM.java
│   │   │                   │   ├── package-info.java
│   │   │                   │   ├── util
│   │   │                   │   │   ├── HeaderUtil.java
│   │   │                   │   │   └── PaginationUtil.java
│   │   │                   │   └── vm
│   │   │                   │       ├── KeyAndPasswordVM.java
│   │   │                   │       ├── LoggerVM.java
│   │   │                   │       ├── LoginVM.java
│   │   │                   │       ├── ManagedUserVM.java
│   │   │                   │       └── package-info.java
│   │   │                   └── websocket
│   │   │                       ├── ActivityService.java
│   │   │                       ├── MessageService.java
│   │   │                       ├── dto
│   │   │                       │   ├── ActivityDTO.java
│   │   │                       │   ├── MessageDTO.java
│   │   │                       │   └── package-info.java
│   │   │                       └── package-info.java
│   │   ├── resources
│   │   │   ├── banner.txt
│   │   │   ├── config
│   │   │   │   ├── application-dev.yml
│   │   │   │   ├── application-heroku.yml
│   │   │   │   ├── application-prod.yml
│   │   │   │   ├── application.yml
│   │   │   │   ├── bootstrap-heroku.yml
│   │   │   │   └── liquibase
│   │   │   │       ├── authorities.csv
│   │   │   │       ├── changelog
│   │   │   │       │   ├── 00000000000000_initial_schema.xml
│   │   │   │       │   ├── 20170501195006_added_entity_Hero.xml
│   │   │   │       │   ├── 20170501195007_added_entity_Crisis.xml
│   │   │   │       │   ├── 20170501195008_added_entity_Claim.xml
│   │   │   │       │   ├── 20170501195009_added_entity_Contact.xml
│   │   │   │       │   ├── 20170501195010_added_entity_Note.xml
│   │   │   │       │   ├── 20170501195011_added_entity_Rebuttal.xml
│   │   │   │       │   ├── 20170501195012_added_entity_ClaimRebuttal.xml
│   │   │   │       │   ├── 20170501195013_added_entity_Blog.xml
│   │   │   │       │   ├── 20170501195013_added_entity_constraints_Blog.xml
│   │   │   │       │   ├── 20170501195014_added_entity_Entry.xml
│   │   │   │       │   ├── 20170501195014_added_entity_constraints_Entry.xml
│   │   │   │       │   ├── 20170501195015_added_entity_Tag.xml
│   │   │   │       │   └── 20170501195016_load_data_Seed.xml
│   │   │   │       ├── claim-rebuttal.csv
│   │   │   │       ├── claim.csv
│   │   │   │       ├── contact.csv
│   │   │   │       ├── crisis.csv
│   │   │   │       ├── hero.csv
│   │   │   │       ├── master.xml
│   │   │   │       ├── note.csv
│   │   │   │       ├── rebuttal.csv
│   │   │   │       ├── users.csv
│   │   │   │       └── users_authorities.csv
│   │   │   ├── i18n
│   │   │   │   ├── messages.properties
│   │   │   │   ├── messages_de.properties
│   │   │   │   ├── messages_en.properties
│   │   │   │   ├── messages_es.properties
│   │   │   │   └── messages_fr.properties
│   │   │   ├── logback-spring.xml
│   │   │   ├── mails
│   │   │   │   ├── activationEmail.html
│   │   │   │   ├── creationEmail.html
│   │   │   │   ├── passwordResetEmail.html
│   │   │   │   └── socialRegistrationValidationEmail.html
│   │   │   └── templates
│   │   │       └── error.html
│   │   └── webapp
│   │       ├── 404.html
│   │       ├── app
│   │       │   ├── account
│   │       │   │   ├── account.module.ts
│   │       │   │   ├── account.route.ts
│   │       │   │   ├── activate
│   │       │   │   │   ├── activate.component.html
│   │       │   │   │   ├── activate.component.ts
│   │       │   │   │   ├── activate.route.ts
│   │       │   │   │   └── activate.service.ts
│   │       │   │   ├── index.ts
│   │       │   │   ├── password
│   │       │   │   │   ├── password-strength-bar.component.ts
│   │       │   │   │   ├── password-strength-bar.css
│   │       │   │   │   ├── password.component.html
│   │       │   │   │   ├── password.component.ts
│   │       │   │   │   ├── password.route.ts
│   │       │   │   │   └── password.service.ts
│   │       │   │   ├── password-reset
│   │       │   │   │   ├── finish
│   │       │   │   │   │   ├── password-reset-finish.component.html
│   │       │   │   │   │   ├── password-reset-finish.component.ts
│   │       │   │   │   │   ├── password-reset-finish.route.ts
│   │       │   │   │   │   └── password-reset-finish.service.ts
│   │       │   │   │   └── init
│   │       │   │   │       ├── password-reset-init.component.html
│   │       │   │   │       ├── password-reset-init.component.ts
│   │       │   │   │       ├── password-reset-init.route.ts
│   │       │   │   │       └── password-reset-init.service.ts
│   │       │   │   ├── register
│   │       │   │   │   ├── register.component.html
│   │       │   │   │   ├── register.component.ts
│   │       │   │   │   ├── register.route.ts
│   │       │   │   │   └── register.service.ts
│   │       │   │   ├── settings
│   │       │   │   │   ├── settings.component.html
│   │       │   │   │   ├── settings.component.ts
│   │       │   │   │   └── settings.route.ts
│   │       │   │   └── social
│   │       │   │       ├── social-auth.component.ts
│   │       │   │       ├── social-register.component.html
│   │       │   │       ├── social-register.component.ts
│   │       │   │       └── social.route.ts
│   │       │   ├── admin
│   │       │   │   ├── admin.module.ts
│   │       │   │   ├── admin.route.ts
│   │       │   │   ├── audits
│   │       │   │   │   ├── audit-data.model.ts
│   │       │   │   │   ├── audit.model.ts
│   │       │   │   │   ├── audits.component.html
│   │       │   │   │   ├── audits.component.ts
│   │       │   │   │   ├── audits.route.ts
│   │       │   │   │   └── audits.service.ts
│   │       │   │   ├── configuration
│   │       │   │   │   ├── configuration.component.html
│   │       │   │   │   ├── configuration.component.ts
│   │       │   │   │   ├── configuration.route.ts
│   │       │   │   │   └── configuration.service.ts
│   │       │   │   ├── docs
│   │       │   │   │   ├── docs.component.html
│   │       │   │   │   ├── docs.component.ts
│   │       │   │   │   └── docs.route.ts
│   │       │   │   ├── health
│   │       │   │   │   ├── health-modal.component.html
│   │       │   │   │   ├── health-modal.component.ts
│   │       │   │   │   ├── health.component.html
│   │       │   │   │   ├── health.component.ts
│   │       │   │   │   ├── health.route.ts
│   │       │   │   │   └── health.service.ts
│   │       │   │   ├── index.ts
│   │       │   │   ├── logs
│   │       │   │   │   ├── log.model.ts
│   │       │   │   │   ├── logs.component.html
│   │       │   │   │   ├── logs.component.ts
│   │       │   │   │   ├── logs.route.ts
│   │       │   │   │   └── logs.service.ts
│   │       │   │   ├── metrics
│   │       │   │   │   ├── metrics-modal.component.html
│   │       │   │   │   ├── metrics-modal.component.ts
│   │       │   │   │   ├── metrics.component.html
│   │       │   │   │   ├── metrics.component.ts
│   │       │   │   │   ├── metrics.route.ts
│   │       │   │   │   └── metrics.service.ts
│   │       │   │   ├── tracker
│   │       │   │   │   ├── tracker.component.html
│   │       │   │   │   ├── tracker.component.ts
│   │       │   │   │   └── tracker.route.ts
│   │       │   │   └── user-management
│   │       │   │       ├── user-management-delete-dialog.component.html
│   │       │   │       ├── user-management-delete-dialog.component.ts
│   │       │   │       ├── user-management-detail.component.html
│   │       │   │       ├── user-management-detail.component.ts
│   │       │   │       ├── user-management-dialog.component.html
│   │       │   │       ├── user-management-dialog.component.ts
│   │       │   │       ├── user-management.component.html
│   │       │   │       ├── user-management.component.ts
│   │       │   │       ├── user-management.route.ts
│   │       │   │       └── user-modal.service.ts
│   │       │   ├── app.config.ts
│   │       │   ├── app.constants.ts
│   │       │   ├── app.main.ts
│   │       │   ├── app.module.ts
│   │       │   ├── app.route.ts
│   │       │   ├── blocks
│   │       │   │   ├── config
│   │       │   │   │   ├── prod.config.ts
│   │       │   │   │   └── uib-pagination.config.ts
│   │       │   │   └── interceptor
│   │       │   │       ├── auth-expired.interceptor.ts
│   │       │   │       ├── auth.interceptor.ts
│   │       │   │       ├── errorhandler.interceptor.ts
│   │       │   │       ├── http.provider.ts
│   │       │   │       └── notification.interceptor.ts
│   │       │   ├── core
│   │       │   │   ├── commands
│   │       │   │   │   ├── base.command.ts
│   │       │   │   │   ├── payloads
│   │       │   │   │   │   ├── base.command.payload.ts
│   │       │   │   │   │   └── json.command.payload.ts
│   │       │   │   │   └── restful.command.ts
│   │       │   │   ├── core.module.ts
│   │       │   │   ├── core.routing.ts
│   │       │   │   ├── gateways
│   │       │   │   │   ├── base.gateway.ts
│   │       │   │   │   ├── restful.gateway.ts
│   │       │   │   │   └── websocket.gateway.ts
│   │       │   │   ├── services
│   │       │   │   │   ├── base.async-service.ts
│   │       │   │   │   ├── default-request-options.service.ts
│   │       │   │   │   ├── exception.service.ts
│   │       │   │   │   ├── in-memory-data.service.ts
│   │       │   │   │   ├── index.ts
│   │       │   │   │   ├── rest.service.spec.ts
│   │       │   │   │   ├── rest.service.ts
│   │       │   │   │   ├── router-extensions.service.ts
│   │       │   │   │   ├── socket.service.ts
│   │       │   │   │   └── user.service.ts
│   │       │   │   └── store
│   │       │   │       ├── base
│   │       │   │       │   └── base.facade.ts
│   │       │   │       ├── book
│   │       │   │       │   ├── book.effects.spec.ts
│   │       │   │       │   ├── book.effects.ts
│   │       │   │       │   ├── book.model.ts
│   │       │   │       │   └── book.reducer.ts
│   │       │   │       ├── claim
│   │       │   │       │   ├── README.md
│   │       │   │       │   ├── claim.effects.ts
│   │       │   │       │   ├── claim.model.ts
│   │       │   │       │   └── claim.reducer.ts
│   │       │   │       ├── claim-rebuttal
│   │       │   │       │   ├── claim-rebuttal.effects.ts
│   │       │   │       │   ├── claim-rebuttal.model.ts
│   │       │   │       │   └── claim-rebuttal.reducer.ts
│   │       │   │       ├── collection
│   │       │   │       │   ├── collection.effects.spec.ts
│   │       │   │       │   ├── collection.effects.ts
│   │       │   │       │   └── collection.reducer.ts
│   │       │   │       ├── contact
│   │       │   │       │   ├── contact.effects.ts
│   │       │   │       │   ├── contact.model.ts
│   │       │   │       │   └── contact.reducer.ts
│   │       │   │       ├── counter
│   │       │   │       │   ├── counter.actions.test.ts
│   │       │   │       │   ├── counter.effects.ts
│   │       │   │       │   ├── counter.model.ts
│   │       │   │       │   └── counter.reducer.ts
│   │       │   │       ├── crisis
│   │       │   │       │   ├── crisis.effects.ts
│   │       │   │       │   ├── crisis.model.ts
│   │       │   │       │   └── crisis.reducer.ts
│   │       │   │       ├── db.ts
│   │       │   │       ├── entity
│   │       │   │       │   ├── entity.actions.ts
│   │       │   │       │   ├── entity.functions.ts
│   │       │   │       │   └── entity.model.ts
│   │       │   │       ├── game
│   │       │   │       │   ├── game.action-creator.ts
│   │       │   │       │   ├── game.actions.ts
│   │       │   │       │   ├── game.facade.ts
│   │       │   │       │   └── game.reducer.ts
│   │       │   │       ├── hero
│   │       │   │       │   ├── hero.effects.ts
│   │       │   │       │   ├── hero.model.ts
│   │       │   │       │   └── hero.reducer.ts
│   │       │   │       ├── id
│   │       │   │       │   ├── id.actions.ts
│   │       │   │       │   ├── id.functions.ts
│   │       │   │       │   └── id.model.ts
│   │       │   │       ├── index.ts
│   │       │   │       ├── layout
│   │       │   │       │   ├── layout.model.ts
│   │       │   │       │   └── layout.reducer.ts
│   │       │   │       ├── message
│   │       │   │       │   └── message.reducer.ts
│   │       │   │       ├── note
│   │       │   │       │   ├── note.effects.ts
│   │       │   │       │   ├── note.model.ts
│   │       │   │       │   └── note.reducer.ts
│   │       │   │       ├── p2p-game
│   │       │   │       │   └── p2p-game.facade.ts
│   │       │   │       ├── rebuttal
│   │       │   │       │   ├── rebuttal.effects.ts
│   │       │   │       │   ├── rebuttal.model.ts
│   │       │   │       │   └── rebuttal.reducer.ts
│   │       │   │       ├── search
│   │       │   │       │   └── search.reducer.ts
│   │       │   │       ├── session
│   │       │   │       │   ├── session.effects.ts
│   │       │   │       │   ├── session.model.ts
│   │       │   │       │   └── session.reducer.ts
│   │       │   │       ├── slice
│   │       │   │       │   ├── slice.actions.ts
│   │       │   │       │   └── slice.functions.ts
│   │       │   │       └── util.ts
│   │       │   ├── entities
│   │       │   │   ├── blog
│   │       │   │   │   ├── blog-delete-dialog.component.html
│   │       │   │   │   ├── blog-delete-dialog.component.ts
│   │       │   │   │   ├── blog-detail.component.html
│   │       │   │   │   ├── blog-detail.component.ts
│   │       │   │   │   ├── blog-dialog.component.html
│   │       │   │   │   ├── blog-dialog.component.ts
│   │       │   │   │   ├── blog-popup.service.ts
│   │       │   │   │   ├── blog.component.html
│   │       │   │   │   ├── blog.component.ts
│   │       │   │   │   ├── blog.model.ts
│   │       │   │   │   ├── blog.module.ts
│   │       │   │   │   ├── blog.route.ts
│   │       │   │   │   ├── blog.service.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── claim
│   │       │   │   │   ├── claim-delete-dialog.component.html
│   │       │   │   │   ├── claim-delete-dialog.component.ts
│   │       │   │   │   ├── claim-detail.component.html
│   │       │   │   │   ├── claim-detail.component.ts
│   │       │   │   │   ├── claim-dialog.component.html
│   │       │   │   │   ├── claim-dialog.component.ts
│   │       │   │   │   ├── claim-popup.service.ts
│   │       │   │   │   ├── claim.component.html
│   │       │   │   │   ├── claim.component.ts
│   │       │   │   │   ├── claim.model.ts
│   │       │   │   │   ├── claim.module.ts
│   │       │   │   │   ├── claim.route.ts
│   │       │   │   │   ├── claim.service.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── claim-rebuttal
│   │       │   │   │   ├── claim-rebuttal-delete-dialog.component.html
│   │       │   │   │   ├── claim-rebuttal-delete-dialog.component.ts
│   │       │   │   │   ├── claim-rebuttal-detail.component.html
│   │       │   │   │   ├── claim-rebuttal-detail.component.ts
│   │       │   │   │   ├── claim-rebuttal-dialog.component.html
│   │       │   │   │   ├── claim-rebuttal-dialog.component.ts
│   │       │   │   │   ├── claim-rebuttal-popup.service.ts
│   │       │   │   │   ├── claim-rebuttal.component.html
│   │       │   │   │   ├── claim-rebuttal.component.ts
│   │       │   │   │   ├── claim-rebuttal.model.ts
│   │       │   │   │   ├── claim-rebuttal.module.ts
│   │       │   │   │   ├── claim-rebuttal.route.ts
│   │       │   │   │   ├── claim-rebuttal.service.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── contact
│   │       │   │   │   ├── contact-delete-dialog.component.html
│   │       │   │   │   ├── contact-delete-dialog.component.ts
│   │       │   │   │   ├── contact-detail.component.html
│   │       │   │   │   ├── contact-detail.component.ts
│   │       │   │   │   ├── contact-dialog.component.html
│   │       │   │   │   ├── contact-dialog.component.ts
│   │       │   │   │   ├── contact-popup.service.ts
│   │       │   │   │   ├── contact.component.html
│   │       │   │   │   ├── contact.component.ts
│   │       │   │   │   ├── contact.model.ts
│   │       │   │   │   ├── contact.module.ts
│   │       │   │   │   ├── contact.route.ts
│   │       │   │   │   ├── contact.service.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── crisis
│   │       │   │   │   ├── crisis-delete-dialog.component.html
│   │       │   │   │   ├── crisis-delete-dialog.component.ts
│   │       │   │   │   ├── crisis-detail.component.html
│   │       │   │   │   ├── crisis-detail.component.ts
│   │       │   │   │   ├── crisis-dialog.component.html
│   │       │   │   │   ├── crisis-dialog.component.ts
│   │       │   │   │   ├── crisis-popup.service.ts
│   │       │   │   │   ├── crisis.component.html
│   │       │   │   │   ├── crisis.component.ts
│   │       │   │   │   ├── crisis.model.ts
│   │       │   │   │   ├── crisis.module.ts
│   │       │   │   │   ├── crisis.route.ts
│   │       │   │   │   ├── crisis.service.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── entity.module.ts
│   │       │   │   ├── entry
│   │       │   │   │   ├── entry-delete-dialog.component.html
│   │       │   │   │   ├── entry-delete-dialog.component.ts
│   │       │   │   │   ├── entry-detail.component.html
│   │       │   │   │   ├── entry-detail.component.ts
│   │       │   │   │   ├── entry-dialog.component.html
│   │       │   │   │   ├── entry-dialog.component.ts
│   │       │   │   │   ├── entry-popup.service.ts
│   │       │   │   │   ├── entry.component.html
│   │       │   │   │   ├── entry.component.ts
│   │       │   │   │   ├── entry.model.ts
│   │       │   │   │   ├── entry.module.ts
│   │       │   │   │   ├── entry.route.ts
│   │       │   │   │   ├── entry.service.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── hero
│   │       │   │   │   ├── hero-delete-dialog.component.html
│   │       │   │   │   ├── hero-delete-dialog.component.ts
│   │       │   │   │   ├── hero-detail.component.html
│   │       │   │   │   ├── hero-detail.component.ts
│   │       │   │   │   ├── hero-dialog.component.html
│   │       │   │   │   ├── hero-dialog.component.ts
│   │       │   │   │   ├── hero-popup.service.ts
│   │       │   │   │   ├── hero.component.html
│   │       │   │   │   ├── hero.component.ts
│   │       │   │   │   ├── hero.model.ts
│   │       │   │   │   ├── hero.module.ts
│   │       │   │   │   ├── hero.route.ts
│   │       │   │   │   ├── hero.service.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── note
│   │       │   │   │   ├── index.ts
│   │       │   │   │   ├── note-delete-dialog.component.html
│   │       │   │   │   ├── note-delete-dialog.component.ts
│   │       │   │   │   ├── note-detail.component.html
│   │       │   │   │   ├── note-detail.component.ts
│   │       │   │   │   ├── note-dialog.component.html
│   │       │   │   │   ├── note-dialog.component.ts
│   │       │   │   │   ├── note-popup.service.ts
│   │       │   │   │   ├── note.component.html
│   │       │   │   │   ├── note.component.ts
│   │       │   │   │   ├── note.model.ts
│   │       │   │   │   ├── note.module.ts
│   │       │   │   │   ├── note.route.ts
│   │       │   │   │   └── note.service.ts
│   │       │   │   ├── rebuttal
│   │       │   │   │   ├── index.ts
│   │       │   │   │   ├── rebuttal-delete-dialog.component.html
│   │       │   │   │   ├── rebuttal-delete-dialog.component.ts
│   │       │   │   │   ├── rebuttal-detail.component.html
│   │       │   │   │   ├── rebuttal-detail.component.ts
│   │       │   │   │   ├── rebuttal-dialog.component.html
│   │       │   │   │   ├── rebuttal-dialog.component.ts
│   │       │   │   │   ├── rebuttal-popup.service.ts
│   │       │   │   │   ├── rebuttal.component.html
│   │       │   │   │   ├── rebuttal.component.ts
│   │       │   │   │   ├── rebuttal.model.ts
│   │       │   │   │   ├── rebuttal.module.ts
│   │       │   │   │   ├── rebuttal.route.ts
│   │       │   │   │   └── rebuttal.service.ts
│   │       │   │   └── tag
│   │       │   │       ├── index.ts
│   │       │   │       ├── tag-delete-dialog.component.html
│   │       │   │       ├── tag-delete-dialog.component.ts
│   │       │   │       ├── tag-detail.component.html
│   │       │   │       ├── tag-detail.component.ts
│   │       │   │       ├── tag-dialog.component.html
│   │       │   │       ├── tag-dialog.component.ts
│   │       │   │       ├── tag-popup.service.ts
│   │       │   │       ├── tag.component.html
│   │       │   │       ├── tag.component.ts
│   │       │   │       ├── tag.model.ts
│   │       │   │       ├── tag.module.ts
│   │       │   │       ├── tag.route.ts
│   │       │   │       └── tag.service.ts
│   │       │   ├── features
│   │       │   │   ├── bernie
│   │       │   │   │   ├── README.md
│   │       │   │   │   ├── bernie.module.ts
│   │       │   │   │   ├── bernie.page.html
│   │       │   │   │   ├── bernie.page.scss
│   │       │   │   │   ├── bernie.page.ts
│   │       │   │   │   ├── bernie.routing.ts
│   │       │   │   │   ├── claim
│   │       │   │   │   │   ├── claim.component.html
│   │       │   │   │   │   ├── claim.component.scss
│   │       │   │   │   │   └── claim.component.ts
│   │       │   │   │   └── rebuttal
│   │       │   │   │       ├── rebuttal.component.html
│   │       │   │   │       ├── rebuttal.component.scss
│   │       │   │   │       └── rebuttal.component.ts
│   │       │   │   ├── books
│   │       │   │   │   ├── README.md
│   │       │   │   │   ├── add-commas
│   │       │   │   │   │   └── add-commas.pipe.ts
│   │       │   │   │   ├── book-authors
│   │       │   │   │   │   └── book-authors.component.ts
│   │       │   │   │   ├── book-detail
│   │       │   │   │   │   └── book-detail.component.ts
│   │       │   │   │   ├── book-preview
│   │       │   │   │   │   ├── book-preview-list.component.ts
│   │       │   │   │   │   └── book-preview.component.ts
│   │       │   │   │   ├── book-search
│   │       │   │   │   │   └── book-search.component.ts
│   │       │   │   │   ├── books.module.ts
│   │       │   │   │   ├── books.routing.ts
│   │       │   │   │   ├── collection.page.spec.ts
│   │       │   │   │   ├── collection.page.ts
│   │       │   │   │   ├── ellipsis
│   │       │   │   │   │   ├── ellipsis.pipe.ts
│   │       │   │   │   │   └── ellipsis.spec.ts
│   │       │   │   │   ├── find-book.page.ts
│   │       │   │   │   ├── selected-book.page.ts
│   │       │   │   │   ├── services
│   │       │   │   │   │   ├── book-exists.guard.ts
│   │       │   │   │   │   └── google-books.service.ts
│   │       │   │   │   └── view-book.page.ts
│   │       │   │   ├── contact
│   │       │   │   │   ├── contact.module.ts
│   │       │   │   │   ├── contact.page.html
│   │       │   │   │   ├── contact.page.scss
│   │       │   │   │   ├── contact.page.ts
│   │       │   │   │   └── contact.routing.ts
│   │       │   │   ├── counter
│   │       │   │   │   ├── README.md
│   │       │   │   │   ├── counter.component.scss
│   │       │   │   │   ├── counter.component.ts
│   │       │   │   │   ├── counter.module.ts
│   │       │   │   │   ├── counter.page.ts
│   │       │   │   │   └── counter.routing.ts
│   │       │   │   ├── dashboard
│   │       │   │   │   ├── dashboard.component.html
│   │       │   │   │   ├── dashboard.component.ts
│   │       │   │   │   ├── dashboard.module.ts
│   │       │   │   │   ├── dashboard.routing.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── features.component.html
│   │       │   │   ├── features.component.scss
│   │       │   │   ├── features.component.ts
│   │       │   │   ├── features.module.ts
│   │       │   │   ├── features.routing.ts
│   │       │   │   ├── features.service.ts
│   │       │   │   ├── game
│   │       │   │   │   ├── assets
│   │       │   │   │   │   ├── cheater.gif
│   │       │   │   │   │   ├── main.css
│   │       │   │   │   │   └── svg
│   │       │   │   │   │       └── more.svg
│   │       │   │   │   ├── config
│   │       │   │   │   │   └── config.ts
│   │       │   │   │   ├── game.module.ts
│   │       │   │   │   ├── game.page.html
│   │       │   │   │   ├── game.page.ts
│   │       │   │   │   ├── game.routes.ts
│   │       │   │   │   ├── home
│   │       │   │   │   │   ├── home.component.html
│   │       │   │   │   │   └── home.component.ts
│   │       │   │   │   ├── multi-player
│   │       │   │   │   │   ├── actions
│   │       │   │   │   │   │   ├── action-creators
│   │       │   │   │   │   │   │   └── p2p-game.action-creators.ts
│   │       │   │   │   │   │   └── p2p-game.actions.ts
│   │       │   │   │   │   ├── commands
│   │       │   │   │   │   │   └── rpc.command.ts
│   │       │   │   │   │   ├── gateways
│   │       │   │   │   │   │   └── webrtc.gateway.ts
│   │       │   │   │   │   ├── multi-player.component.css
│   │       │   │   │   │   ├── multi-player.component.html
│   │       │   │   │   │   ├── multi-player.component.ts
│   │       │   │   │   │   ├── multi-player.module.ts
│   │       │   │   │   │   └── services
│   │       │   │   │   │       ├── command-builders
│   │       │   │   │   │       │   ├── game-p2p.command-builder.ts
│   │       │   │   │   │       │   └── game-p2p.commands.ts
│   │       │   │   │   │       ├── game-p2p.async-service.ts
│   │       │   │   │   │       └── index.ts
│   │       │   │   │   ├── navbar
│   │       │   │   │   │   ├── navbar.component.css
│   │       │   │   │   │   ├── navbar.component.html
│   │       │   │   │   │   └── navbar.component.ts
│   │       │   │   │   ├── services
│   │       │   │   │   │   └── game-server.async-service.ts
│   │       │   │   │   ├── shared
│   │       │   │   │   │   ├── game
│   │       │   │   │   │   │   └── game.component.ts
│   │       │   │   │   │   ├── shared.module.ts
│   │       │   │   │   │   └── timer
│   │       │   │   │   │       └── timer.component.ts
│   │       │   │   │   ├── single-player
│   │       │   │   │   │   ├── single-player.component.css
│   │       │   │   │   │   ├── single-player.component.html
│   │       │   │   │   │   ├── single-player.component.ts
│   │       │   │   │   │   └── single-player.module.ts
│   │       │   │   │   └── toolbar
│   │       │   │   │       ├── toolbar.component.css
│   │       │   │   │       ├── toolbar.component.html
│   │       │   │   │       └── toolbar.component.ts
│   │       │   │   ├── heroes
│   │       │   │   │   ├── admin
│   │       │   │   │   │   ├── admin-dashboard
│   │       │   │   │   │   │   └── admin-dashboard.component.ts
│   │       │   │   │   │   ├── admin.module.ts
│   │       │   │   │   │   ├── admin.page.scss
│   │       │   │   │   │   ├── admin.page.ts
│   │       │   │   │   │   └── admin.routing.ts
│   │       │   │   │   ├── crisis-center
│   │       │   │   │   │   ├── compose-message
│   │       │   │   │   │   │   ├── compose-message.component.html
│   │       │   │   │   │   │   └── compose-message.component.ts
│   │       │   │   │   │   ├── crisis-center-home
│   │       │   │   │   │   │   └── crisis-center-home.component.ts
│   │       │   │   │   │   ├── crisis-center.module.ts
│   │       │   │   │   │   ├── crisis-center.page.html
│   │       │   │   │   │   ├── crisis-center.page.scss
│   │       │   │   │   │   ├── crisis-center.page.ts
│   │       │   │   │   │   ├── crisis-center.routing.ts
│   │       │   │   │   │   ├── crisis-detail
│   │       │   │   │   │   │   ├── crisis-detail-resolver.service.ts
│   │       │   │   │   │   │   └── crisis-detail.component.ts
│   │       │   │   │   │   └── crisis-list
│   │       │   │   │   │       ├── crisis-list.component.scss
│   │       │   │   │   │       └── crisis-list.component.ts
│   │       │   │   │   ├── dashboard
│   │       │   │   │   │   ├── dashboard-crisis
│   │       │   │   │   │   │   ├── dashboard-crisis.component.html
│   │       │   │   │   │   │   ├── dashboard-crisis.component.scss
│   │       │   │   │   │   │   └── dashboard-crisis.component.ts
│   │       │   │   │   │   ├── dashboard-hero
│   │       │   │   │   │   │   ├── dashboard-hero.component.html
│   │       │   │   │   │   │   ├── dashboard-hero.component.scss
│   │       │   │   │   │   │   └── dashboard-hero.component.ts
│   │       │   │   │   │   ├── dashboard.component.html
│   │       │   │   │   │   ├── dashboard.component.scss
│   │       │   │   │   │   ├── dashboard.component.ts
│   │       │   │   │   │   ├── dashboard.module.ts
│   │       │   │   │   │   ├── dashboard.routing.ts
│   │       │   │   │   │   └── hero-search
│   │       │   │   │   │       ├── hero-search.component.html
│   │       │   │   │   │       ├── hero-search.component.scss
│   │       │   │   │   │       └── hero-search.component.ts
│   │       │   │   │   ├── hero
│   │       │   │   │   │   ├── hero-detail
│   │       │   │   │   │   │   ├── hero-detail.component.html
│   │       │   │   │   │   │   ├── hero-detail.component.no-testbed.spec.ts
│   │       │   │   │   │   │   ├── hero-detail.component.scss
│   │       │   │   │   │   │   ├── hero-detail.component.spec.ts
│   │       │   │   │   │   │   └── hero-detail.component.ts
│   │       │   │   │   │   ├── hero-list
│   │       │   │   │   │   │   ├── hero-list.component.html
│   │       │   │   │   │   │   ├── hero-list.component.scss
│   │       │   │   │   │   │   ├── hero-list.component.spec.ts
│   │       │   │   │   │   │   └── hero-list.component.ts
│   │       │   │   │   │   ├── hero.module.ts
│   │       │   │   │   │   └── hero.routing.ts
│   │       │   │   │   ├── heroes.module.ts
│   │       │   │   │   ├── heroes.page.html
│   │       │   │   │   ├── heroes.page.scss
│   │       │   │   │   ├── heroes.page.ts
│   │       │   │   │   └── heroes.routing.ts
│   │       │   │   ├── home
│   │       │   │   │   ├── home.component.html
│   │       │   │   │   └── home.component.ts
│   │       │   │   ├── index.ts
│   │       │   │   ├── messages
│   │       │   │   │   ├── index.ts
│   │       │   │   │   ├── messages.module.ts
│   │       │   │   │   ├── messages.page.html
│   │       │   │   │   ├── messages.page.ts
│   │       │   │   │   ├── messages.routing.ts
│   │       │   │   │   └── messages.service.ts
│   │       │   │   ├── meta.ts
│   │       │   │   ├── notes
│   │       │   │   │   ├── README.md
│   │       │   │   │   ├── add-button
│   │       │   │   │   │   ├── add-button.component.html
│   │       │   │   │   │   ├── add-button.component.scss
│   │       │   │   │   │   └── add-button.component.ts
│   │       │   │   │   ├── note
│   │       │   │   │   │   ├── note.component.html
│   │       │   │   │   │   ├── note.component.scss
│   │       │   │   │   │   └── note.component.ts
│   │       │   │   │   ├── notes.module.ts
│   │       │   │   │   ├── notes.page.html
│   │       │   │   │   ├── notes.page.scss
│   │       │   │   │   ├── notes.page.spec.ts
│   │       │   │   │   ├── notes.page.ts
│   │       │   │   │   └── notes.routing.ts
│   │       │   │   └── wiki
│   │       │   │       ├── wiki-smart.component.ts
│   │       │   │       ├── wiki.component.ts
│   │       │   │       ├── wiki.module.ts
│   │       │   │       ├── wiki.page.ts
│   │       │   │       ├── wiki.routing.ts
│   │       │   │       ├── wiki.scss
│   │       │   │       └── wikipedia.service.ts
│   │       │   ├── home
│   │       │   │   ├── home.component.html
│   │       │   │   ├── home.component.ts
│   │       │   │   ├── home.css
│   │       │   │   ├── home.module.ts
│   │       │   │   ├── home.route.ts
│   │       │   │   └── index.ts
│   │       │   ├── layouts
│   │       │   │   ├── error
│   │       │   │   │   ├── error.component.html
│   │       │   │   │   ├── error.component.ts
│   │       │   │   │   └── error.route.ts
│   │       │   │   ├── footer
│   │       │   │   │   ├── footer.component.html
│   │       │   │   │   └── footer.component.ts
│   │       │   │   ├── index.ts
│   │       │   │   ├── layout-routing.module.ts
│   │       │   │   ├── main
│   │       │   │   │   ├── main.component.html
│   │       │   │   │   └── main.component.ts
│   │       │   │   ├── navbar
│   │       │   │   │   ├── active-menu.directive.ts
│   │       │   │   │   ├── navbar.component.html
│   │       │   │   │   ├── navbar.component.ts
│   │       │   │   │   └── navbar.css
│   │       │   │   └── profiles
│   │       │   │       ├── page-ribbon.component.ts
│   │       │   │       ├── page-ribbon.css
│   │       │   │       ├── profile-info.model.ts
│   │       │   │       └── profile.service.ts
│   │       │   ├── polyfills.ts
│   │       │   ├── shared
│   │       │   │   ├── alert
│   │       │   │   │   ├── alert-error.component.ts
│   │       │   │   │   └── alert.component.ts
│   │       │   │   ├── animations.ts
│   │       │   │   ├── auth
│   │       │   │   │   ├── account.service.ts
│   │       │   │   │   ├── auth-jwt.service.ts
│   │       │   │   │   ├── auth.service.ts
│   │       │   │   │   ├── csrf.service.ts
│   │       │   │   │   ├── has-any-authority.directive.ts
│   │       │   │   │   ├── principal.service.ts
│   │       │   │   │   ├── state-storage.service.ts
│   │       │   │   │   └── user-route-access-service.ts
│   │       │   │   ├── awesome
│   │       │   │   │   └── awesome.pipe.ts
│   │       │   │   ├── button
│   │       │   │   │   ├── button.component.spec.ts
│   │       │   │   │   ├── button.component.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── can-deactivate
│   │       │   │   │   └── can-deactivate.guard.ts
│   │       │   │   ├── constants
│   │       │   │   │   └── pagination.constants.ts
│   │       │   │   ├── container
│   │       │   │   │   ├── container.component.spec.ts
│   │       │   │   │   └── container.component.ts
│   │       │   │   ├── dialog
│   │       │   │   │   └── dialog.service.ts
│   │       │   │   ├── draggable
│   │       │   │   │   └── draggable.directive.ts
│   │       │   │   ├── index.ts
│   │       │   │   ├── language
│   │       │   │   │   ├── language.constants.ts
│   │       │   │   │   ├── language.helper.ts
│   │       │   │   │   └── language.pipe.ts
│   │       │   │   ├── login
│   │       │   │   │   ├── login-modal.service.ts
│   │       │   │   │   ├── login.component.html
│   │       │   │   │   ├── login.component.ts
│   │       │   │   │   └── login.service.ts
│   │       │   │   ├── selective-preloading-strategy.ts
│   │       │   │   ├── services
│   │       │   │   │   ├── version.service.ts
│   │       │   │   │   └── window.service.ts
│   │       │   │   ├── shared-common.module.ts
│   │       │   │   ├── shared-libs.module.ts
│   │       │   │   ├── shared.module.ts
│   │       │   │   ├── social
│   │       │   │   │   ├── social.component.html
│   │       │   │   │   ├── social.component.ts
│   │       │   │   │   └── social.service.ts
│   │       │   │   ├── tracker
│   │       │   │   │   └── tracker.service.ts
│   │       │   │   ├── twain
│   │       │   │   │   ├── twain.component.spec.ts
│   │       │   │   │   ├── twain.component.ts
│   │       │   │   │   └── twain.service.ts
│   │       │   │   ├── user
│   │       │   │   │   ├── account.model.ts
│   │       │   │   │   ├── user.model.ts
│   │       │   │   │   └── user.service.ts
│   │       │   │   ├── welcome
│   │       │   │   │   ├── welcome.component.spec.ts
│   │       │   │   │   └── welcome.component.ts
│   │       │   │   └── widgets
│   │       │   │       ├── index.ts
│   │       │   │       └── todo
│   │       │   │           ├── index.ts
│   │       │   │           ├── todo.html
│   │       │   │           └── todo.ts
│   │       │   └── vendor.ts
│   │       ├── config
│   │       │   ├── config.common.ts
│   │       │   ├── config.dev.ts
│   │       │   ├── config.prod.ts
│   │       │   ├── config.ts
│   │       │   ├── empty.ts
│   │       │   ├── helpers.ts
│   │       │   ├── html-elements-plugin
│   │       │   │   └── index.ts
│   │       │   ├── html-head-config.ts
│   │       │   └── resource-override.ts
│   │       ├── content
│   │       │   ├── css
│   │       │   │   ├── documentation.css
│   │       │   │   ├── global.css
│   │       │   │   └── vendor.css
│   │       │   └── images
│   │       │       ├── hipster.png
│   │       │       ├── hipster2x.png
│   │       │       └── logo-jhipster.png
│   │       ├── favicon.ico
│   │       ├── i18n
│   │       │   ├── de
│   │       │   │   ├── activate.json
│   │       │   │   ├── audits.json
│   │       │   │   ├── bernie.json
│   │       │   │   ├── blog.json
│   │       │   │   ├── books.json
│   │       │   │   ├── claim.json
│   │       │   │   ├── claimRebuttal.json
│   │       │   │   ├── configuration.json
│   │       │   │   ├── contact.json
│   │       │   │   ├── crisis.json
│   │       │   │   ├── dashboard.json
│   │       │   │   ├── entry.json
│   │       │   │   ├── error.json
│   │       │   │   ├── game.json
│   │       │   │   ├── gateway.json
│   │       │   │   ├── global.json
│   │       │   │   ├── health.json
│   │       │   │   ├── hero.json
│   │       │   │   ├── heroes.json
│   │       │   │   ├── home.json
│   │       │   │   ├── login.json
│   │       │   │   ├── logs.json
│   │       │   │   ├── messages.json
│   │       │   │   ├── metrics.json
│   │       │   │   ├── note.json
│   │       │   │   ├── notes.json
│   │       │   │   ├── password.json
│   │       │   │   ├── rebuttal.json
│   │       │   │   ├── register.json
│   │       │   │   ├── reset.json
│   │       │   │   ├── sessions.json
│   │       │   │   ├── settings.json
│   │       │   │   ├── social.json
│   │       │   │   ├── tag.json
│   │       │   │   ├── tracker.json
│   │       │   │   ├── user-management.json
│   │       │   │   └── wiki.json
│   │       │   ├── en
│   │       │   │   ├── activate.json
│   │       │   │   ├── audits.json
│   │       │   │   ├── bernie.json
│   │       │   │   ├── blog.json
│   │       │   │   ├── books.json
│   │       │   │   ├── claim.json
│   │       │   │   ├── claimRebuttal.json
│   │       │   │   ├── configuration.json
│   │       │   │   ├── contact.json
│   │       │   │   ├── crisis.json
│   │       │   │   ├── dashboard.json
│   │       │   │   ├── entry.json
│   │       │   │   ├── error.json
│   │       │   │   ├── game.json
│   │       │   │   ├── gateway.json
│   │       │   │   ├── global.json
│   │       │   │   ├── health.json
│   │       │   │   ├── hero.json
│   │       │   │   ├── heroes.json
│   │       │   │   ├── home.json
│   │       │   │   ├── login.json
│   │       │   │   ├── logs.json
│   │       │   │   ├── messages.json
│   │       │   │   ├── metrics.json
│   │       │   │   ├── note.json
│   │       │   │   ├── notes.json
│   │       │   │   ├── password.json
│   │       │   │   ├── rebuttal.json
│   │       │   │   ├── register.json
│   │       │   │   ├── reset.json
│   │       │   │   ├── sessions.json
│   │       │   │   ├── settings.json
│   │       │   │   ├── social.json
│   │       │   │   ├── tag.json
│   │       │   │   ├── tracker.json
│   │       │   │   ├── user-management.json
│   │       │   │   └── wiki.json
│   │       │   ├── es
│   │       │   │   ├── activate.json
│   │       │   │   ├── audits.json
│   │       │   │   ├── bernie.json
│   │       │   │   ├── blog.json
│   │       │   │   ├── books.json
│   │       │   │   ├── claim.json
│   │       │   │   ├── claimRebuttal.json
│   │       │   │   ├── configuration.json
│   │       │   │   ├── contact.json
│   │       │   │   ├── crisis.json
│   │       │   │   ├── dashboard.json
│   │       │   │   ├── entry.json
│   │       │   │   ├── error.json
│   │       │   │   ├── game.json
│   │       │   │   ├── gateway.json
│   │       │   │   ├── global.json
│   │       │   │   ├── health.json
│   │       │   │   ├── hero.json
│   │       │   │   ├── heroes.json
│   │       │   │   ├── home.json
│   │       │   │   ├── login.json
│   │       │   │   ├── logs.json
│   │       │   │   ├── messages.json
│   │       │   │   ├── metrics.json
│   │       │   │   ├── note.json
│   │       │   │   ├── notes.json
│   │       │   │   ├── password.json
│   │       │   │   ├── rebuttal.json
│   │       │   │   ├── register.json
│   │       │   │   ├── reset.json
│   │       │   │   ├── sessions.json
│   │       │   │   ├── settings.json
│   │       │   │   ├── social.json
│   │       │   │   ├── tag.json
│   │       │   │   ├── tracker.json
│   │       │   │   ├── user-management.json
│   │       │   │   └── wiki.json
│   │       │   └── fr
│   │       │       ├── activate.json
│   │       │       ├── audits.json
│   │       │       ├── bernie.json
│   │       │       ├── blog.json
│   │       │       ├── books.json
│   │       │       ├── claim.json
│   │       │       ├── claimRebuttal.json
│   │       │       ├── configuration.json
│   │       │       ├── contact.json
│   │       │       ├── crisis.json
│   │       │       ├── dashboard.json
│   │       │       ├── entry.json
│   │       │       ├── error.json
│   │       │       ├── game.json
│   │       │       ├── gateway.json
│   │       │       ├── global.json
│   │       │       ├── health.json
│   │       │       ├── hero.json
│   │       │       ├── heroes.json
│   │       │       ├── home.json
│   │       │       ├── login.json
│   │       │       ├── logs.json
│   │       │       ├── messages.json
│   │       │       ├── metrics.json
│   │       │       ├── note.json
│   │       │       ├── notes.json
│   │       │       ├── password.json
│   │       │       ├── rebuttal.json
│   │       │       ├── register.json
│   │       │       ├── reset.json
│   │       │       ├── sessions.json
│   │       │       ├── settings.json
│   │       │       ├── social.json
│   │       │       ├── tag.json
│   │       │       ├── tracker.json
│   │       │       ├── user-management.json
│   │       │       └── wiki.json
│   │       ├── index.html
│   │       ├── robots.txt
│   │       └── swagger-ui
│   │           ├── images
│   │           │   └── throbber.gif
│   │           └── index.html
│   └── test
│       ├── gatling
│       │   ├── bodies
│       │   ├── conf
│       │   │   ├── gatling.conf
│       │   │   └── logback.xml
│       │   ├── data
│       │   └── simulations
│       │       ├── BlogGatlingTest.scala
│       │       ├── ClaimGatlingTest.scala
│       │       ├── ClaimRebuttalGatlingTest.scala
│       │       ├── ContactGatlingTest.scala
│       │       ├── CrisisGatlingTest.scala
│       │       ├── EntryGatlingTest.scala
│       │       ├── HeroGatlingTest.scala
│       │       ├── NoteGatlingTest.scala
│       │       ├── RebuttalGatlingTest.scala
│       │       └── TagGatlingTest.scala
│       ├── java
│       │   └── org
│       │       └── exampleapps
│       │           └── greatbig
│       │               ├── config
│       │               │   └── elasticsearch
│       │               │       └── IndexReinitializer.java
│       │               ├── repository
│       │               │   └── CustomSocialUsersConnectionRepositoryIntTest.java
│       │               ├── security
│       │               │   ├── SecurityUtilsUnitTest.java
│       │               │   └── jwt
│       │               │       └── TokenProviderTest.java
│       │               ├── service
│       │               │   ├── SocialServiceIntTest.java
│       │               │   └── UserServiceIntTest.java
│       │               └── web
│       │                   └── rest
│       │                       ├── AccountResourceIntTest.java
│       │                       ├── AuditResourceIntTest.java
│       │                       ├── BlogResourceIntTest.java
│       │                       ├── ClaimRebuttalResourceIntTest.java
│       │                       ├── ClaimResourceIntTest.java
│       │                       ├── ContactResourceIntTest.java
│       │                       ├── CrisisResourceIntTest.java
│       │                       ├── EntryResourceIntTest.java
│       │                       ├── HeroResourceIntTest.java
│       │                       ├── LogsResourceIntTest.java
│       │                       ├── NoteResourceIntTest.java
│       │                       ├── ProfileInfoResourceIntTest.java
│       │                       ├── RebuttalResourceIntTest.java
│       │                       ├── TagResourceIntTest.java
│       │                       ├── TestUtil.java
│       │                       └── UserResourceIntTest.java
│       ├── javascript
│       │   ├── e2e
│       │   │   ├── account
│       │   │   │   └── account.spec.ts
│       │   │   ├── admin
│       │   │   │   └── administration.spec.ts
│       │   │   └── entities
│       │   │       ├── blog.spec.ts
│       │   │       ├── claim-rebuttal.spec.ts
│       │   │       ├── claim.spec.ts
│       │   │       ├── contact.spec.ts
│       │   │       ├── crisis.spec.ts
│       │   │       ├── entry.spec.ts
│       │   │       ├── hero.spec.ts
│       │   │       ├── note.spec.ts
│       │   │       ├── rebuttal.spec.ts
│       │   │       └── tag.spec.ts
│       │   ├── karma.conf.js
│       │   ├── protractor.conf.js
│       │   └── spec
│       │       ├── app
│       │       │   ├── account
│       │       │   │   ├── activate
│       │       │   │   │   └── activate.component.spec.ts
│       │       │   │   ├── password
│       │       │   │   │   ├── password-strength-bar.component.spec.ts
│       │       │   │   │   └── password.component.spec.ts
│       │       │   │   ├── password-reset
│       │       │   │   │   ├── finish
│       │       │   │   │   │   └── password-reset-finish.component.spec.ts
│       │       │   │   │   └── init
│       │       │   │   │       └── password-reset-init.component.spec.ts
│       │       │   │   ├── register
│       │       │   │   │   └── register.component.spec.ts
│       │       │   │   └── settings
│       │       │   │       └── settings.component.spec.ts
│       │       │   ├── admin
│       │       │   │   ├── audits
│       │       │   │   │   └── audits.component.spec.ts
│       │       │   │   └── health
│       │       │   │       └── health.component.spec.ts
│       │       │   └── entities
│       │       │       ├── blog
│       │       │       │   └── blog-detail.component.spec.ts
│       │       │       ├── claim
│       │       │       │   └── claim-detail.component.spec.ts
│       │       │       ├── claim-rebuttal
│       │       │       │   └── claim-rebuttal-detail.component.spec.ts
│       │       │       ├── contact
│       │       │       │   └── contact-detail.component.spec.ts
│       │       │       ├── crisis
│       │       │       │   └── crisis-detail.component.spec.ts
│       │       │       ├── entry
│       │       │       │   └── entry-detail.component.spec.ts
│       │       │       ├── hero
│       │       │       │   └── hero-detail.component.spec.ts
│       │       │       ├── note
│       │       │       │   └── note-detail.component.spec.ts
│       │       │       ├── rebuttal
│       │       │       │   └── rebuttal-detail.component.spec.ts
│       │       │       └── tag
│       │       │           └── tag-detail.component.spec.ts
│       │       ├── entry.ts
│       │       ├── helpers
│       │       │   ├── mock-account.service.ts
│       │       │   ├── mock-language.service.ts
│       │       │   ├── mock-principal.service.ts
│       │       │   ├── mock-route.service.ts
│       │       │   ├── mock-tracker.service.ts
│       │       │   └── spyobject.ts
│       │       └── test.module.ts
│       └── resources
│           ├── config
│           │   └── application.yml
│           └── logback.xml
├── tree.txt
├── tsconfig-aot.json
├── tsconfig.json
├── tslint.json
├── webpack
│   ├── logo-jhipster.png
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   ├── webpack.prod.js
│   └── webpack.vendor.js
└── yarn.lock
```
