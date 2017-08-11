.
├── LICENSE
├── NOTICES.md
├── Procfile
├── README.md
├── docs
│   ├── FILE_STRUCTURE.md
│   ├── config.json
│   ├── contents
│   │   ├── articles
│   │   │   ├── 001-getting-started
│   │   │   │   └── index.md
│   │   │   ├── 002-installation-guidelines
│   │   │   │   └── index.md
│   │   │   ├── 011-changing-color-scheme
│   │   │   │   ├── index.md
│   │   │   │   └── new-color-scheme.png
│   │   │   ├── 012-project-structure
│   │   │   │   └── index.md
│   │   │   ├── 013-create-new-page
│   │   │   │   └── index.md
│   │   │   ├── 014-switch-to-blur-theme
│   │   │   │   └── index.md
│   │   │   ├── 015-sidebar
│   │   │   │   └── index.md
│   │   │   └── 016-spinner
│   │   │       └── index.md
│   │   ├── css
│   │   │   └── main.scss
│   │   ├── images
│   │   │   ├── favicon.png
│   │   │   ├── logo.png
│   │   │   ├── sky-preview.png
│   │   │   ├── why-design.svg
│   │   │   ├── why-practices.svg
│   │   │   └── why-structure.svg
│   │   └── index.json
│   ├── images
│   │   ├── bernie-app.png
│   │   ├── bernie-spreadsheet.png
│   │   ├── calendar.png
│   │   ├── chat.png
│   │   ├── collection.png
│   │   ├── contacts.png
│   │   ├── counter.png
│   │   ├── dashboard.png
│   │   ├── entities.png
│   │   ├── game.png
│   │   ├── heroes_dashboard.png
│   │   ├── heroes_list.png
│   │   ├── home.png
│   │   ├── meals.png
│   │   ├── messages.png
│   │   ├── notes.png
│   │   ├── talks.png
│   │   └── todos.png
│   ├── package.json
│   ├── plugins
│   │   └── paginator.coffee
│   └── templates
│       ├── article.jade
│       ├── index.jade
│       └── layout.jade
├── e2e
│   ├── account
│   │   └── account.spec.ts
│   ├── admin
│   │   └── administration.spec.ts
│   └── entities
│       ├── blog.spec.ts
│       ├── claim-rebuttal.spec.ts
│       ├── claim.spec.ts
│       ├── contact.spec.ts
│       ├── crisis.spec.ts
│       ├── entry.spec.ts
│       ├── hero.spec.ts
│       ├── message.spec.ts
│       ├── note.spec.ts
│       ├── rebuttal.spec.ts
│       └── tag.spec.ts
├── etc
├── firebase.json
├── karma.conf.js
├── mvnw
├── mvnw.cmd
├── node
│   ├── node
│   └── yarn
│       └── dist
│           ├── LICENSE
│           ├── bin
│           │   ├── yarn
│           │   ├── yarn.cmd
│           │   ├── yarn.js
│           │   ├── yarnpkg
│           │   └── yarnpkg.cmd
│           ├── lib
│           │   ├── v8-compile-cache.js
│           │   └── yarn-cli.js
│           └── package.json
├── package.json
├── pom.xml
├── postcss.config.js
├── protractor.conf.js
├── protractor.sauce.conf.js
├── proxy.conf.json
├── sass-lint.yml
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
│   │   │               │   ├── JacksonConfiguration.java
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
│   │   │               │   ├── Message.java
│   │   │               │   ├── Note.java
│   │   │               │   ├── PersistentAuditEvent.java
│   │   │               │   ├── Rebuttal.java
│   │   │               │   ├── SocialUserConnection.java
│   │   │               │   ├── Tag.java
│   │   │               │   ├── Talk.java
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
│   │   │               │   ├── MessageRepository.java
│   │   │               │   ├── NoteRepository.java
│   │   │               │   ├── PersistenceAuditEventRepository.java
│   │   │               │   ├── RebuttalRepository.java
│   │   │               │   ├── SocialUserConnectionRepository.java
│   │   │               │   ├── TagRepository.java
│   │   │               │   ├── TalkRepository.java
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
│   │   │               │       ├── MessageSearchRepository.java
│   │   │               │       ├── NoteSearchRepository.java
│   │   │               │       ├── RebuttalSearchRepository.java
│   │   │               │       ├── TagSearchRepository.java
│   │   │               │       ├── TalkSearchRepository.java
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
│   │   │                   │   ├── LogsResource.java
│   │   │                   │   ├── MessageResource.java
│   │   │                   │   ├── NoteResource.java
│   │   │                   │   ├── ProfileInfoResource.java
│   │   │                   │   ├── RebuttalResource.java
│   │   │                   │   ├── SocialController.java
│   │   │                   │   ├── TagResource.java
│   │   │                   │   ├── TalkResource.java
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
│   │   │                       ├── ChatService.java
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
│   │   │   │       │   ├── 20170501195016_load_data_Seed.xml
│   │   │   │       │   ├── 20170517190733_added_entity_Message.xml
│   │   │   │       │   └── 20170725052218_added_entity_Talk.xml
│   │   │   │       ├── claim-rebuttal.csv
│   │   │   │       ├── claim.csv
│   │   │   │       ├── contact.csv
│   │   │   │       ├── crisis.csv
│   │   │   │       ├── hero.csv
│   │   │   │       ├── master.xml
│   │   │   │       ├── note.csv
│   │   │   │       ├── rebuttal.csv
│   │   │   │       ├── talk.csv
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
│   │       │   │   │   ├── activate.component.spec.ts
│   │       │   │   │   ├── activate.component.ts
│   │       │   │   │   ├── activate.route.ts
│   │       │   │   │   └── activate.service.ts
│   │       │   │   ├── index.ts
│   │       │   │   ├── password
│   │       │   │   │   ├── password-strength-bar.component.spec.ts
│   │       │   │   │   ├── password-strength-bar.component.ts
│   │       │   │   │   ├── password-strength-bar.scss
│   │       │   │   │   ├── password.component.html
│   │       │   │   │   ├── password.component.spec.ts
│   │       │   │   │   ├── password.component.ts
│   │       │   │   │   ├── password.route.ts
│   │       │   │   │   └── password.service.ts
│   │       │   │   ├── password-reset
│   │       │   │   │   ├── finish
│   │       │   │   │   │   ├── password-reset-finish.component.html
│   │       │   │   │   │   ├── password-reset-finish.component.spec.ts
│   │       │   │   │   │   ├── password-reset-finish.component.ts
│   │       │   │   │   │   ├── password-reset-finish.route.ts
│   │       │   │   │   │   └── password-reset-finish.service.ts
│   │       │   │   │   └── init
│   │       │   │   │       ├── password-reset-init.component.html
│   │       │   │   │       ├── password-reset-init.component.spec.ts
│   │       │   │   │       ├── password-reset-init.component.ts
│   │       │   │   │       ├── password-reset-init.route.ts
│   │       │   │   │       └── password-reset-init.service.ts
│   │       │   │   ├── register
│   │       │   │   │   ├── register.component.html
│   │       │   │   │   ├── register.component.spec.ts
│   │       │   │   │   ├── register.component.ts
│   │       │   │   │   ├── register.route.ts
│   │       │   │   │   └── register.service.ts
│   │       │   │   ├── settings
│   │       │   │   │   ├── settings.component.html
│   │       │   │   │   ├── settings.component.spec.ts
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
│   │       │   │   │   ├── audits.component.spec.ts
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
│   │       │   │   │   ├── health.component.spec.ts
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
│   │       │   ├── app.routing.ts
│   │       │   ├── app.service.ts
│   │       │   ├── core
│   │       │   │   ├── api
│   │       │   │   │   ├── api-interfaces.ts
│   │       │   │   │   ├── api.service.spec.ts
│   │       │   │   │   ├── api.service.ts
│   │       │   │   │   ├── mock-api-data.spec.ts
│   │       │   │   │   ├── mock-api.service.spec.ts
│   │       │   │   │   └── mock-firebase-cache.service.spec.ts
│   │       │   │   ├── commands
│   │       │   │   │   ├── base.command.ts
│   │       │   │   │   ├── payloads
│   │       │   │   │   │   ├── base.command.payload.ts
│   │       │   │   │   │   └── json.command.payload.ts
│   │       │   │   │   ├── restful.command.ts
│   │       │   │   │   └── rpc.command.ts
│   │       │   │   ├── config
│   │       │   │   │   ├── prod.config.ts
│   │       │   │   │   └── uib-pagination.config.ts
│   │       │   │   ├── core.module.ts
│   │       │   │   ├── firebase-config.ts
│   │       │   │   ├── gateways
│   │       │   │   │   ├── base.gateway.ts
│   │       │   │   │   ├── restful.gateway.ts
│   │       │   │   │   ├── webrtc.gateway.ts
│   │       │   │   │   └── websocket.gateway.ts
│   │       │   │   ├── global-events
│   │       │   │   │   ├── global-events.service.spec.ts
│   │       │   │   │   ├── global-events.service.ts
│   │       │   │   │   └── mock-global-events.service.spec.ts
│   │       │   │   ├── interceptor
│   │       │   │   │   ├── auth-expired.interceptor.ts
│   │       │   │   │   ├── auth.interceptor.ts
│   │       │   │   │   ├── errorhandler.interceptor.ts
│   │       │   │   │   ├── http.provider.ts
│   │       │   │   │   └── notification.interceptor.ts
│   │       │   │   ├── services
│   │       │   │   │   ├── base.async-service.ts
│   │       │   │   │   ├── default-request-options.service.ts
│   │       │   │   │   ├── in-memory-data.service.ts
│   │       │   │   │   ├── rest.service.spec.ts
│   │       │   │   │   ├── rest.service.ts
│   │       │   │   │   ├── restful-server.service.ts
│   │       │   │   │   ├── socket.service.ts
│   │       │   │   │   ├── user.service.ts
│   │       │   │   │   └── websocket.service.ts
│   │       │   │   └── store
│   │       │   │       ├── account
│   │       │   │       │   └── account.model.ts
│   │       │   │       ├── base
│   │       │   │       │   └── base.facade.ts
│   │       │   │       ├── book
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
│   │       │   │       │   ├── collection.effects.ts
│   │       │   │       │   └── collection.reducer.ts
│   │       │   │       ├── contact
│   │       │   │       │   ├── contact.effects.ts
│   │       │   │       │   ├── contact.model.ts
│   │       │   │       │   └── contact.reducer.ts
│   │       │   │       ├── counter
│   │       │   │       │   ├── counter.actions.spec.ts
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
│   │       │   │       │   ├── game.model.ts
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
│   │       │   │       │   ├── layout.effects.ts
│   │       │   │       │   ├── layout.model.ts
│   │       │   │       │   └── layout.reducer.ts
│   │       │   │       ├── message
│   │       │   │       │   ├── message.effects.ts
│   │       │   │       │   ├── message.model.ts
│   │       │   │       │   └── message.reducer.ts
│   │       │   │       ├── note
│   │       │   │       │   ├── note.effects.ts
│   │       │   │       │   ├── note.model.ts
│   │       │   │       │   └── note.reducer.ts
│   │       │   │       ├── p2p-game
│   │       │   │       │   ├── p2p-game.action-creators.ts
│   │       │   │       │   ├── p2p-game.actions.ts
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
│   │       │   │       ├── store-and-router-connector.guard.ts
│   │       │   │       ├── store-router-connecting.module.ts
│   │       │   │       ├── talk
│   │       │   │       │   ├── talk.effects.ts
│   │       │   │       │   ├── talk.model.ts
│   │       │   │       │   └── talk.reducer.ts
│   │       │   │       ├── user
│   │       │   │       │   └── user.model.ts
│   │       │   │       └── util.ts
│   │       │   ├── entities
│   │       │   │   ├── blog
│   │       │   │   │   ├── blog-delete-dialog.component.html
│   │       │   │   │   ├── blog-delete-dialog.component.ts
│   │       │   │   │   ├── blog-detail.component.html
│   │       │   │   │   ├── blog-detail.component.spec.ts
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
│   │       │   │   │   ├── claim-detail.component.spec.ts
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
│   │       │   │   │   ├── claim-rebuttal-detail.component.spec.ts
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
│   │       │   │   │   ├── contact-detail.component.spec.ts
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
│   │       │   │   │   ├── crisis-detail.component.spec.ts
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
│   │       │   │   │   ├── entry-detail.component.spec.ts
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
│   │       │   │   │   ├── hero-detail.component.spec.ts
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
│   │       │   │   ├── message
│   │       │   │   │   ├── index.ts
│   │       │   │   │   ├── message-delete-dialog.component.html
│   │       │   │   │   ├── message-delete-dialog.component.ts
│   │       │   │   │   ├── message-detail.component.html
│   │       │   │   │   ├── message-detail.component.spec.ts
│   │       │   │   │   ├── message-detail.component.ts
│   │       │   │   │   ├── message-dialog.component.html
│   │       │   │   │   ├── message-dialog.component.ts
│   │       │   │   │   ├── message-popup.service.ts
│   │       │   │   │   ├── message.component.html
│   │       │   │   │   ├── message.component.ts
│   │       │   │   │   ├── message.model.ts
│   │       │   │   │   ├── message.module.ts
│   │       │   │   │   ├── message.route.ts
│   │       │   │   │   └── message.service.ts
│   │       │   │   ├── note
│   │       │   │   │   ├── index.ts
│   │       │   │   │   ├── note-delete-dialog.component.html
│   │       │   │   │   ├── note-delete-dialog.component.ts
│   │       │   │   │   ├── note-detail.component.html
│   │       │   │   │   ├── note-detail.component.spec.ts
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
│   │       │   │   │   ├── rebuttal-detail.component.spec.ts
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
│   │       │   │   ├── tag
│   │       │   │   │   ├── index.ts
│   │       │   │   │   ├── tag-delete-dialog.component.html
│   │       │   │   │   ├── tag-delete-dialog.component.ts
│   │       │   │   │   ├── tag-detail.component.html
│   │       │   │   │   ├── tag-detail.component.spec.ts
│   │       │   │   │   ├── tag-detail.component.ts
│   │       │   │   │   ├── tag-dialog.component.html
│   │       │   │   │   ├── tag-dialog.component.ts
│   │       │   │   │   ├── tag-popup.service.ts
│   │       │   │   │   ├── tag.component.html
│   │       │   │   │   ├── tag.component.ts
│   │       │   │   │   ├── tag.model.ts
│   │       │   │   │   ├── tag.module.ts
│   │       │   │   │   ├── tag.route.ts
│   │       │   │   │   └── tag.service.ts
│   │       │   │   └── talk
│   │       │   │       ├── index.ts
│   │       │   │       ├── talk-delete-dialog.component.html
│   │       │   │       ├── talk-delete-dialog.component.ts
│   │       │   │       ├── talk-detail.component.html
│   │       │   │       ├── talk-detail.component.spec.ts
│   │       │   │       ├── talk-detail.component.ts
│   │       │   │       ├── talk-dialog.component.html
│   │       │   │       ├── talk-dialog.component.ts
│   │       │   │       ├── talk-popup.service.ts
│   │       │   │       ├── talk.component.html
│   │       │   │       ├── talk.component.ts
│   │       │   │       ├── talk.model.ts
│   │       │   │       ├── talk.module.ts
│   │       │   │       ├── talk.route.ts
│   │       │   │       └── talk.service.ts
│   │       │   ├── features
│   │       │   │   ├── about
│   │       │   │   │   ├── about.component.html
│   │       │   │   │   ├── about.component.scss
│   │       │   │   │   ├── about.component.spec.ts
│   │       │   │   │   ├── about.component.ts
│   │       │   │   │   ├── about.module.ts
│   │       │   │   │   └── about.routing.ts
│   │       │   │   ├── bernie
│   │       │   │   │   ├── README.md
│   │       │   │   │   ├── bernie.layout.ts
│   │       │   │   │   ├── bernie.module.ts
│   │       │   │   │   ├── bernie.page.html
│   │       │   │   │   ├── bernie.page.scss
│   │       │   │   │   ├── bernie.page.ts
│   │       │   │   │   ├── bernie.routing.ts
│   │       │   │   │   ├── claim
│   │       │   │   │   │   ├── claim.component.html
│   │       │   │   │   │   ├── claim.component.scss
│   │       │   │   │   │   └── claim.component.ts
│   │       │   │   │   ├── claims.resolver.ts
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
│   │       │   │   │   ├── books.layout.ts
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
│   │       │   │   ├── chat
│   │       │   │   │   ├── chat.module.ts
│   │       │   │   │   ├── chat.page.css
│   │       │   │   │   ├── chat.page.html
│   │       │   │   │   ├── chat.page.ts
│   │       │   │   │   ├── chat.routing.ts
│   │       │   │   │   └── services
│   │       │   │   │       └── chat.service.ts
│   │       │   │   ├── contact
│   │       │   │   │   ├── contact.module.ts
│   │       │   │   │   ├── contact.page.html
│   │       │   │   │   ├── contact.page.scss
│   │       │   │   │   ├── contact.page.spec.ts
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
│   │       │   │   │   ├── calendar
│   │       │   │   │   │   ├── calendar.component.html
│   │       │   │   │   │   ├── calendar.component.scss
│   │       │   │   │   │   ├── calendar.component.ts
│   │       │   │   │   │   └── calendar.service.ts
│   │       │   │   │   ├── dashboard.module.ts
│   │       │   │   │   ├── dashboard.page.html
│   │       │   │   │   ├── dashboard.page.scss
│   │       │   │   │   ├── dashboard.page.ts
│   │       │   │   │   ├── dashboard.routing.ts
│   │       │   │   │   ├── feed
│   │       │   │   │   │   ├── feed.component.html
│   │       │   │   │   │   ├── feed.component.scss
│   │       │   │   │   │   ├── feed.component.ts
│   │       │   │   │   │   └── feed.service.ts
│   │       │   │   │   ├── index.ts
│   │       │   │   │   ├── line-chart
│   │       │   │   │   │   ├── line-chart.component.html
│   │       │   │   │   │   ├── line-chart.component.scss
│   │       │   │   │   │   ├── line-chart.component.ts
│   │       │   │   │   │   └── line-chart.service.ts
│   │       │   │   │   ├── pie-chart
│   │       │   │   │   │   ├── pie-chart.component.html
│   │       │   │   │   │   ├── pie-chart.component.scss
│   │       │   │   │   │   ├── pie-chart.component.ts
│   │       │   │   │   │   └── pie-chart.service.ts
│   │       │   │   │   ├── popular-app
│   │       │   │   │   │   ├── popular-app.component.html
│   │       │   │   │   │   ├── popular-app.component.scss
│   │       │   │   │   │   └── popular-app.component.ts
│   │       │   │   │   ├── todo
│   │       │   │   │   │   ├── todo.component.html
│   │       │   │   │   │   ├── todo.component.scss
│   │       │   │   │   │   ├── todo.component.ts
│   │       │   │   │   │   └── todo.service.ts
│   │       │   │   │   ├── traffic-chart
│   │       │   │   │   │   ├── traffic-chart.component.html
│   │       │   │   │   │   ├── traffic-chart.component.scss
│   │       │   │   │   │   ├── traffic-chart.component.ts
│   │       │   │   │   │   └── traffic-chart.service.ts
│   │       │   │   │   └── users-map
│   │       │   │   │       ├── users-map.component.html
│   │       │   │   │       ├── users-map.component.scss
│   │       │   │   │       ├── users-map.component.ts
│   │       │   │   │       └── users-map.service.ts
│   │       │   │   ├── features.component.html
│   │       │   │   ├── features.component.scss
│   │       │   │   ├── features.component.ts
│   │       │   │   ├── features.meta.ts
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
│   │       │   │   │   ├── game.routing.ts
│   │       │   │   │   ├── home
│   │       │   │   │   │   ├── home.component.html
│   │       │   │   │   │   └── home.component.ts
│   │       │   │   │   ├── multi-player
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
│   │       │   │   │   │   │   ├── crisis-detail.component.ts
│   │       │   │   │   │   │   └── crisis-detail.resolver.ts
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
│   │       │   │   │   ├── heroes.layout.ts
│   │       │   │   │   ├── heroes.module.ts
│   │       │   │   │   ├── heroes.page.html
│   │       │   │   │   ├── heroes.page.scss
│   │       │   │   │   ├── heroes.page.ts
│   │       │   │   │   └── heroes.routing.ts
│   │       │   │   ├── home
│   │       │   │   │   ├── home.component.html
│   │       │   │   │   ├── home.component.ts
│   │       │   │   │   ├── home.module.ts
│   │       │   │   │   ├── home.route.ts
│   │       │   │   │   ├── home.scss
│   │       │   │   │   └── index.ts
│   │       │   │   ├── legal
│   │       │   │   │   ├── legal.component.html
│   │       │   │   │   ├── legal.component.scss
│   │       │   │   │   ├── legal.component.spec.ts
│   │       │   │   │   ├── legal.component.ts
│   │       │   │   │   ├── legal.module.ts
│   │       │   │   │   └── legal.routing.ts
│   │       │   │   ├── meals
│   │       │   │   │   ├── home
│   │       │   │   │   │   ├── filter
│   │       │   │   │   │   │   ├── filter-options.ts
│   │       │   │   │   │   │   ├── filter-utilities.service.spec.ts
│   │       │   │   │   │   │   ├── filter-utilities.service.ts
│   │       │   │   │   │   │   ├── filter.component.html
│   │       │   │   │   │   │   ├── filter.component.scss
│   │       │   │   │   │   │   ├── filter.component.spec.ts
│   │       │   │   │   │   │   ├── filter.component.ts
│   │       │   │   │   │   │   ├── filter.pipe.spec.ts
│   │       │   │   │   │   │   ├── filter.pipe.ts
│   │       │   │   │   │   │   ├── remap.pipe.spec.ts
│   │       │   │   │   │   │   ├── remap.pipe.ts
│   │       │   │   │   │   │   └── stop-words.ts
│   │       │   │   │   │   ├── home.component.html
│   │       │   │   │   │   ├── home.component.scss
│   │       │   │   │   │   ├── home.component.spec.ts
│   │       │   │   │   │   ├── home.component.ts
│   │       │   │   │   │   ├── home.module.ts
│   │       │   │   │   │   ├── home.routing.ts
│   │       │   │   │   │   ├── limit-to.pipe.spec.ts
│   │       │   │   │   │   ├── limit-to.pipe.ts
│   │       │   │   │   │   ├── recipe-ad
│   │       │   │   │   │   │   ├── recipe-ad.component.html
│   │       │   │   │   │   │   ├── recipe-ad.component.scss
│   │       │   │   │   │   │   ├── recipe-ad.component.spec.ts
│   │       │   │   │   │   │   └── recipe-ad.component.ts
│   │       │   │   │   │   └── sticky-scroll
│   │       │   │   │   │       ├── sticky-scroll.component.html
│   │       │   │   │   │       ├── sticky-scroll.component.scss
│   │       │   │   │   │       ├── sticky-scroll.component.spec.ts
│   │       │   │   │   │       └── sticky-scroll.component.ts
│   │       │   │   │   ├── meals.module.ts
│   │       │   │   │   ├── meals.routing.ts
│   │       │   │   │   ├── recipe
│   │       │   │   │   │   ├── recipe.component.html
│   │       │   │   │   │   ├── recipe.component.scss
│   │       │   │   │   │   ├── recipe.component.spec.ts
│   │       │   │   │   │   ├── recipe.component.ts
│   │       │   │   │   │   ├── recipe.module.ts
│   │       │   │   │   │   ├── recipe.routing.ts
│   │       │   │   │   │   └── timer-button
│   │       │   │   │   │       ├── timer-button.component.html
│   │       │   │   │   │       ├── timer-button.component.scss
│   │       │   │   │   │       ├── timer-button.component.spec.ts
│   │       │   │   │   │       └── timer-button.component.ts
│   │       │   │   │   ├── shared
│   │       │   │   │   │   ├── ax-focus-fix
│   │       │   │   │   │   │   ├── ax-focus-fix.directive.spec.ts
│   │       │   │   │   │   │   └── ax-focus-fix.directive.ts
│   │       │   │   │   │   ├── button-clear
│   │       │   │   │   │   │   ├── button-clear.component.html
│   │       │   │   │   │   │   ├── button-clear.component.scss
│   │       │   │   │   │   │   ├── button-clear.component.spec.ts
│   │       │   │   │   │   │   └── button-clear.component.ts
│   │       │   │   │   │   ├── labels
│   │       │   │   │   │   │   ├── labels.component.html
│   │       │   │   │   │   │   ├── labels.component.scss
│   │       │   │   │   │   │   ├── labels.component.spec.ts
│   │       │   │   │   │   │   └── labels.component.ts
│   │       │   │   │   │   ├── shared.module.ts
│   │       │   │   │   │   └── watch-height
│   │       │   │   │   │       ├── watch-height.directive.spec.ts
│   │       │   │   │   │       └── watch-height.directive.ts
│   │       │   │   │   └── timer
│   │       │   │   │       ├── mock-push.service.spec.ts
│   │       │   │   │       ├── mock-timer.service.spec.ts
│   │       │   │   │       ├── timer.component.html
│   │       │   │   │       ├── timer.component.scss
│   │       │   │   │       ├── timer.component.spec.ts
│   │       │   │   │       ├── timer.component.ts
│   │       │   │   │       ├── timer.service.spec.ts
│   │       │   │   │       └── timer.service.ts
│   │       │   │   ├── messages
│   │       │   │   │   ├── messages.module.ts
│   │       │   │   │   ├── messages.page.html
│   │       │   │   │   ├── messages.page.ts
│   │       │   │   │   ├── messages.routing.ts
│   │       │   │   │   └── messages.service.ts
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
│   │       │   │   │   ├── notes.page.ts
│   │       │   │   │   └── notes.routing.ts
│   │       │   │   ├── talks
│   │       │   │   │   ├── filters
│   │       │   │   │   │   ├── filters.component.html
│   │       │   │   │   │   ├── filters.component.scss
│   │       │   │   │   │   └── filters.component.ts
│   │       │   │   │   ├── format-rating
│   │       │   │   │   │   └── format-rating.pipe.ts
│   │       │   │   │   ├── rate-button
│   │       │   │   │   │   ├── rate-button.component.html
│   │       │   │   │   │   └── rate-button.component.ts
│   │       │   │   │   ├── services
│   │       │   │   │   │   └── watch.service.ts
│   │       │   │   │   ├── talk
│   │       │   │   │   │   ├── talk.component.css
│   │       │   │   │   │   ├── talk.component.html
│   │       │   │   │   │   └── talk.component.ts
│   │       │   │   │   ├── talk-details
│   │       │   │   │   │   ├── talk-details.component.css
│   │       │   │   │   │   ├── talk-details.component.html
│   │       │   │   │   │   └── talk-details.component.ts
│   │       │   │   │   ├── talks-and-filters
│   │       │   │   │   │   ├── talks-and-filters.page.css
│   │       │   │   │   │   ├── talks-and-filters.page.html
│   │       │   │   │   │   └── talks-and-filters.page.ts
│   │       │   │   │   ├── talks.component.css
│   │       │   │   │   ├── talks.component.html
│   │       │   │   │   ├── talks.component.ts
│   │       │   │   │   ├── talks.layout.ts
│   │       │   │   │   ├── talks.module.ts
│   │       │   │   │   ├── talks.page.html
│   │       │   │   │   ├── talks.page.scss
│   │       │   │   │   ├── talks.page.ts
│   │       │   │   │   ├── talks.routing.ts
│   │       │   │   │   └── watch-button
│   │       │   │   │       ├── watch-button.component.html
│   │       │   │   │       └── watch-button.component.ts
│   │       │   │   └── wiki
│   │       │   │       ├── wiki-smart.component.ts
│   │       │   │       ├── wiki.component.ts
│   │       │   │       ├── wiki.module.ts
│   │       │   │       ├── wiki.page.ts
│   │       │   │       ├── wiki.routing.ts
│   │       │   │       ├── wiki.scss
│   │       │   │       └── wikipedia.service.ts
│   │       │   ├── global.state.ts
│   │       │   ├── layouts
│   │       │   │   ├── error
│   │       │   │   │   ├── error.component.html
│   │       │   │   │   ├── error.component.ts
│   │       │   │   │   └── error.route.ts
│   │       │   │   ├── footer
│   │       │   │   │   ├── footer.component.html
│   │       │   │   │   ├── footer.component.scss
│   │       │   │   │   ├── footer.component.spec.ts
│   │       │   │   │   └── footer.component.ts
│   │       │   │   ├── index.ts
│   │       │   │   ├── layouts.module.ts
│   │       │   │   ├── main
│   │       │   │   │   ├── main.component.html
│   │       │   │   │   └── main.component.ts
│   │       │   │   ├── meals-layout
│   │       │   │   │   ├── globalz.scss
│   │       │   │   │   ├── meals-layout.component.html
│   │       │   │   │   ├── meals-layout.component.scss
│   │       │   │   │   ├── meals-layout.component.spec.ts
│   │       │   │   │   └── meals-layout.component.ts
│   │       │   │   ├── nav
│   │       │   │   │   ├── nav.component.html
│   │       │   │   │   ├── nav.component.scss
│   │       │   │   │   ├── nav.component.spec.ts
│   │       │   │   │   └── nav.component.ts
│   │       │   │   ├── navbar
│   │       │   │   │   ├── active-menu.directive.ts
│   │       │   │   │   ├── navbar.component.html
│   │       │   │   │   ├── navbar.component.ts
│   │       │   │   │   ├── navbar.css
│   │       │   │   │   └── navbar.scss
│   │       │   │   ├── profiles
│   │       │   │   │   ├── page-ribbon.component.ts
│   │       │   │   │   ├── page-ribbon.css
│   │       │   │   │   ├── page-ribbon.scss
│   │       │   │   │   ├── profile-info.model.ts
│   │       │   │   │   └── profile.service.ts
│   │       │   │   ├── skip-nav
│   │       │   │   │   ├── skip-nav.component.html
│   │       │   │   │   ├── skip-nav.component.scss
│   │       │   │   │   ├── skip-nav.component.spec.ts
│   │       │   │   │   └── skip-nav.component.ts
│   │       │   │   ├── standard-layout
│   │       │   │   │   ├── globalz.scss
│   │       │   │   │   ├── standard-layout.component.html
│   │       │   │   │   ├── standard-layout.component.scss
│   │       │   │   │   ├── standard-layout.component.ts
│   │       │   │   │   └── vendorz.scss
│   │       │   │   └── status-bar
│   │       │   │       ├── current-status.interface.ts
│   │       │   │       ├── mock-status-bar.service.spec.ts
│   │       │   │       ├── status-bar-aware.directive.spec.ts
│   │       │   │       ├── status-bar-aware.directive.ts
│   │       │   │       ├── status-bar.component.html
│   │       │   │       ├── status-bar.component.scss
│   │       │   │       ├── status-bar.component.spec.ts
│   │       │   │       ├── status-bar.component.ts
│   │       │   │       ├── status-bar.service.spec.ts
│   │       │   │       └── status-bar.service.ts
│   │       │   ├── polyfills.ts
│   │       │   ├── shared
│   │       │   │   ├── alert
│   │       │   │   │   ├── alert-error.component.ts
│   │       │   │   │   └── alert.component.ts
│   │       │   │   ├── animations.ts
│   │       │   │   ├── auth
│   │       │   │   │   ├── account.service.ts
│   │       │   │   │   ├── auth-jwt.service.ts
│   │       │   │   │   ├── csrf.service.ts
│   │       │   │   │   ├── has-any-authority.directive.ts
│   │       │   │   │   ├── principal.service.ts
│   │       │   │   │   ├── state-storage.service.ts
│   │       │   │   │   └── user-route-access-service.ts
│   │       │   │   ├── awesome
│   │       │   │   │   └── awesome.pipe.ts
│   │       │   │   ├── ba
│   │       │   │   │   ├── ba-am-chart
│   │       │   │   │   │   ├── ba-am-chart-theme.service.ts
│   │       │   │   │   │   ├── ba-am-chart.component.html
│   │       │   │   │   │   ├── ba-am-chart.component.scss
│   │       │   │   │   │   ├── ba-am-chart.component.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-app-picture
│   │       │   │   │   │   ├── ba-app-picture.pipe.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-back-top
│   │       │   │   │   │   ├── ba-back-top.component.scss
│   │       │   │   │   │   ├── ba-back-top.component.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-card
│   │       │   │   │   │   ├── ba-card-blur-helper.service.ts
│   │       │   │   │   │   ├── ba-card-blur.directive.ts
│   │       │   │   │   │   ├── ba-card.component.html
│   │       │   │   │   │   ├── ba-card.component.ts
│   │       │   │   │   │   ├── bg-metrics.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-chartist-chart
│   │       │   │   │   │   ├── ba-chartist-chart.component.html
│   │       │   │   │   │   ├── ba-chartist-chart.component.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-checkbox
│   │       │   │   │   │   ├── ba-checkbox.component.html
│   │       │   │   │   │   ├── ba-checkbox.component.scss
│   │       │   │   │   │   ├── ba-checkbox.component.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-content-top
│   │       │   │   │   │   ├── ba-content-top.component.html
│   │       │   │   │   │   ├── ba-content-top.component.scss
│   │       │   │   │   │   ├── ba-content-top.component.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-full-calendar
│   │       │   │   │   │   ├── ba-full-calendar.component.html
│   │       │   │   │   │   ├── ba-full-calendar.component.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-kameleon-picture
│   │       │   │   │   │   ├── ba-kameleon-picture.pipe.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-menu
│   │       │   │   │   │   ├── ba-menu.component.html
│   │       │   │   │   │   ├── ba-menu.component.scss
│   │       │   │   │   │   ├── ba-menu.component.ts
│   │       │   │   │   │   ├── components
│   │       │   │   │   │   │   └── ba-menu-item
│   │       │   │   │   │   │       ├── ba-menu-item.component.html
│   │       │   │   │   │   │       ├── ba-menu-item.component.scss
│   │       │   │   │   │   │       ├── ba-menu-item.component.ts
│   │       │   │   │   │   │       └── index.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-msg-center
│   │       │   │   │   │   ├── ba-msg-center.component.html
│   │       │   │   │   │   ├── ba-msg-center.component.scss
│   │       │   │   │   │   ├── ba-msg-center.component.ts
│   │       │   │   │   │   ├── ba-msg-center.service.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-multi-checkbox
│   │       │   │   │   │   ├── ba-multi-checkbox.component.html
│   │       │   │   │   │   ├── ba-multi-checkbox.component.scss
│   │       │   │   │   │   ├── ba-multi-checkbox.component.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-page-top
│   │       │   │   │   │   ├── ba-page-top.component.html
│   │       │   │   │   │   ├── ba-page-top.component.scss
│   │       │   │   │   │   ├── ba-page-top.component.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-profile-picture
│   │       │   │   │   │   ├── ba-profile-picture.pipe.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-scroll-position
│   │       │   │   │   │   ├── ba-scroll-position.directive.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-sidebar
│   │       │   │   │   │   ├── ba-sidebar.component.html
│   │       │   │   │   │   ├── ba-sidebar.component.scss
│   │       │   │   │   │   ├── ba-sidebar.component.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-slim-scroll
│   │       │   │   │   │   ├── ba-slim-scroll.directive.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-theme-run
│   │       │   │   │   │   ├── ba-theme-run.directive.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── button
│   │       │   │   │   ├── button.component.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── can-deactivate
│   │       │   │   │   └── can-deactivate.guard.ts
│   │       │   │   ├── constants
│   │       │   │   │   └── pagination.constants.ts
│   │       │   │   ├── container
│   │       │   │   │   └── container.component.ts
│   │       │   │   ├── dialog
│   │       │   │   │   └── dialog.service.ts
│   │       │   │   ├── draggable
│   │       │   │   │   └── draggable.directive.ts
│   │       │   │   ├── image-cover
│   │       │   │   │   ├── image-cover.component.html
│   │       │   │   │   ├── image-cover.component.scss
│   │       │   │   │   ├── image-cover.component.spec.ts
│   │       │   │   │   └── image-cover.component.ts
│   │       │   │   ├── index.ts
│   │       │   │   ├── language
│   │       │   │   │   ├── find-language-from-key.pipe.ts
│   │       │   │   │   ├── language.constants.ts
│   │       │   │   │   └── language.helper.ts
│   │       │   │   ├── login
│   │       │   │   │   ├── login-modal.service.ts
│   │       │   │   │   ├── login.component.html
│   │       │   │   │   ├── login.component.ts
│   │       │   │   │   └── login.service.ts
│   │       │   │   ├── model
│   │       │   │   │   ├── base-entity.ts
│   │       │   │   │   ├── request-util.ts
│   │       │   │   │   └── response-wrapper.model.ts
│   │       │   │   ├── nga.module.ts
│   │       │   │   ├── selective-preloading-strategy.ts
│   │       │   │   ├── services
│   │       │   │   │   ├── ba-image-loader
│   │       │   │   │   │   ├── ba-image-loader.service.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-menu
│   │       │   │   │   │   ├── ba-menu.service.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-theme-preloader
│   │       │   │   │   │   ├── ba-theme-preloader.service.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── ba-theme-spinner
│   │       │   │   │   │   ├── ba-theme-spinner.service.ts
│   │       │   │   │   │   └── index.ts
│   │       │   │   │   ├── index.ts
│   │       │   │   │   ├── version.service.ts
│   │       │   │   │   └── window.service.ts
│   │       │   │   ├── shared-common.module.ts
│   │       │   │   ├── shared-libs.module.ts
│   │       │   │   ├── shared.module.ts
│   │       │   │   ├── social
│   │       │   │   │   ├── social.component.html
│   │       │   │   │   ├── social.component.ts
│   │       │   │   │   └── social.service.ts
│   │       │   │   ├── theme
│   │       │   │   │   ├── index.ts
│   │       │   │   │   ├── theme.config-provider.ts
│   │       │   │   │   ├── theme.config.ts
│   │       │   │   │   └── theme.constants.ts
│   │       │   │   ├── tracker
│   │       │   │   │   └── tracker.service.ts
│   │       │   │   ├── twain
│   │       │   │   │   ├── twain.component.spec.ts
│   │       │   │   │   ├── twain.component.ts
│   │       │   │   │   └── twain.service.ts
│   │       │   │   ├── ui
│   │       │   │   │   ├── icons
│   │       │   │   │   │   ├── icon-arrow-down
│   │       │   │   │   │   │   ├── icon-arrow-down.component.html
│   │       │   │   │   │   │   ├── icon-arrow-down.component.scss
│   │       │   │   │   │   │   ├── icon-arrow-down.component.spec.ts
│   │       │   │   │   │   │   └── icon-arrow-down.component.ts
│   │       │   │   │   │   ├── icon-facebook
│   │       │   │   │   │   │   ├── icon-facebook.component.html
│   │       │   │   │   │   │   ├── icon-facebook.component.scss
│   │       │   │   │   │   │   ├── icon-facebook.component.spec.ts
│   │       │   │   │   │   │   └── icon-facebook.component.ts
│   │       │   │   │   │   ├── icon-heart
│   │       │   │   │   │   │   ├── icon-heart.component.html
│   │       │   │   │   │   │   ├── icon-heart.component.scss
│   │       │   │   │   │   │   ├── icon-heart.component.spec.ts
│   │       │   │   │   │   │   └── icon-heart.component.ts
│   │       │   │   │   │   ├── icon-instagram
│   │       │   │   │   │   │   ├── icon-instagram.component.html
│   │       │   │   │   │   │   ├── icon-instagram.component.scss
│   │       │   │   │   │   │   ├── icon-instagram.component.spec.ts
│   │       │   │   │   │   │   └── icon-instagram.component.ts
│   │       │   │   │   │   ├── icon-minus
│   │       │   │   │   │   │   ├── icon-minus.component.html
│   │       │   │   │   │   │   ├── icon-minus.component.scss
│   │       │   │   │   │   │   ├── icon-minus.component.spec.ts
│   │       │   │   │   │   │   └── icon-minus.component.ts
│   │       │   │   │   │   ├── icon-nav
│   │       │   │   │   │   │   ├── icon-nav.component.html
│   │       │   │   │   │   │   ├── icon-nav.component.scss
│   │       │   │   │   │   │   ├── icon-nav.component.spec.ts
│   │       │   │   │   │   │   └── icon-nav.component.ts
│   │       │   │   │   │   ├── icon-pinterest
│   │       │   │   │   │   │   ├── icon-pinterest.component.html
│   │       │   │   │   │   │   ├── icon-pinterest.component.scss
│   │       │   │   │   │   │   ├── icon-pinterest.component.spec.ts
│   │       │   │   │   │   │   └── icon-pinterest.component.ts
│   │       │   │   │   │   ├── icon-plus
│   │       │   │   │   │   │   ├── icon-plus.component.html
│   │       │   │   │   │   │   ├── icon-plus.component.scss
│   │       │   │   │   │   │   ├── icon-plus.component.spec.ts
│   │       │   │   │   │   │   └── icon-plus.component.ts
│   │       │   │   │   │   ├── icon-reset
│   │       │   │   │   │   │   ├── icon-reset.component.html
│   │       │   │   │   │   │   ├── icon-reset.component.scss
│   │       │   │   │   │   │   ├── icon-reset.component.spec.ts
│   │       │   │   │   │   │   └── icon-reset.component.ts
│   │       │   │   │   │   ├── icon-search
│   │       │   │   │   │   │   ├── icon-search.component.html
│   │       │   │   │   │   │   ├── icon-search.component.scss
│   │       │   │   │   │   │   ├── icon-search.component.spec.ts
│   │       │   │   │   │   │   └── icon-search.component.ts
│   │       │   │   │   │   └── icon-time
│   │       │   │   │   │       ├── icon-time.component.html
│   │       │   │   │   │       ├── icon-time.component.scss
│   │       │   │   │   │       ├── icon-time.component.spec.ts
│   │       │   │   │   │       └── icon-time.component.ts
│   │       │   │   │   ├── input
│   │       │   │   │   │   ├── input.component.html
│   │       │   │   │   │   ├── input.component.scss
│   │       │   │   │   │   ├── input.component.spec.ts
│   │       │   │   │   │   └── input.component.ts
│   │       │   │   │   ├── loading
│   │       │   │   │   │   ├── loading.component.html
│   │       │   │   │   │   ├── loading.component.scss
│   │       │   │   │   │   ├── loading.component.spec.ts
│   │       │   │   │   │   └── loading.component.ts
│   │       │   │   │   ├── select
│   │       │   │   │   │   ├── select.component.html
│   │       │   │   │   │   ├── select.component.scss
│   │       │   │   │   │   ├── select.component.spec.ts
│   │       │   │   │   │   └── select.component.ts
│   │       │   │   │   └── ui.module.ts
│   │       │   │   ├── user
│   │       │   │   │   ├── account.model.ts
│   │       │   │   │   ├── user.model.ts
│   │       │   │   │   └── user.service.ts
│   │       │   │   ├── validators
│   │       │   │   │   ├── email.validator.ts
│   │       │   │   │   ├── equal-passwords.validator.ts
│   │       │   │   │   └── index.ts
│   │       │   │   └── welcome
│   │       │   │       ├── welcome.component.spec.ts
│   │       │   │       └── welcome.component.ts
│   │       │   └── vendor.ts
│   │       ├── assets
│   │       ├── content
│   │       │   ├── css
│   │       │   │   └── vendor.css
│   │       │   ├── fonts
│   │       │   │   ├── GeosansLight.ttf
│   │       │   │   ├── cheddar-jack.ttf
│   │       │   │   ├── socicon.eot
│   │       │   │   ├── socicon.svg
│   │       │   │   ├── socicon.ttf
│   │       │   │   ├── socicon.woff
│   │       │   │   └── socicon.woff2
│   │       │   ├── icon
│   │       │   │   ├── android-icon-192x192.png
│   │       │   │   ├── apple-icon-114x114.png
│   │       │   │   ├── apple-icon-120x120.png
│   │       │   │   ├── apple-icon-144x144.png
│   │       │   │   ├── apple-icon-152x152.png
│   │       │   │   ├── apple-icon-180x180.png
│   │       │   │   ├── apple-icon-57x57.png
│   │       │   │   ├── apple-icon-60x60.png
│   │       │   │   ├── apple-icon-72x72.png
│   │       │   │   ├── apple-icon-76x76.png
│   │       │   │   ├── favicon-16x16.png
│   │       │   │   ├── favicon-32x32.png
│   │       │   │   ├── favicon-96x96.png
│   │       │   │   └── ms-icon-144x144.png
│   │       │   ├── images
│   │       │   │   ├── 76ers.gif
│   │       │   │   ├── blazers.gif
│   │       │   │   ├── bucks.gif
│   │       │   │   ├── bulls.gif
│   │       │   │   ├── cavaliers.gif
│   │       │   │   ├── celtic.gif
│   │       │   │   ├── clippers.gif
│   │       │   │   ├── example-1.png
│   │       │   │   ├── example-2.png
│   │       │   │   ├── example-3.png
│   │       │   │   ├── example.gif
│   │       │   │   ├── feed-video.svg
│   │       │   │   ├── hawks.gif
│   │       │   │   ├── heat.gif
│   │       │   │   ├── hipster.png
│   │       │   │   ├── hipster2x.png
│   │       │   │   ├── hornets.gif
│   │       │   │   ├── jazz.gif
│   │       │   │   ├── kings.gif
│   │       │   │   ├── knicks.gif
│   │       │   │   ├── lakers.gif
│   │       │   │   ├── logo-jhipster.png
│   │       │   │   ├── logo.png
│   │       │   │   ├── magic.gif
│   │       │   │   ├── mavericks.gif
│   │       │   │   ├── memphis.gif
│   │       │   │   ├── nets.gif
│   │       │   │   ├── nuggets.gif
│   │       │   │   ├── orleans.gif
│   │       │   │   ├── pacers.gif
│   │       │   │   ├── pistons.gif
│   │       │   │   ├── push-logo.png
│   │       │   │   ├── raptors.gif
│   │       │   │   ├── rockets.gif
│   │       │   │   ├── spurs.gif
│   │       │   │   ├── suns.gif
│   │       │   │   ├── test.png
│   │       │   │   ├── thunder.gif
│   │       │   │   ├── timberwolves.gif
│   │       │   │   ├── warriors.gif
│   │       │   │   └── wizards.gif
│   │       │   ├── img
│   │       │   │   ├── app
│   │       │   │   │   ├── browsers
│   │       │   │   │   │   ├── chrome.svg
│   │       │   │   │   │   ├── firefox.svg
│   │       │   │   │   │   ├── ie.svg
│   │       │   │   │   │   ├── opera.svg
│   │       │   │   │   │   └── safari.svg
│   │       │   │   │   ├── feed
│   │       │   │   │   │   ├── genom.png
│   │       │   │   │   │   ├── my-little-kitten.png
│   │       │   │   │   │   ├── new-york-location.png
│   │       │   │   │   │   └── vader-and-me-preview.png
│   │       │   │   │   ├── my-app-logo.png
│   │       │   │   │   ├── profile
│   │       │   │   │   │   ├── Alexander.png
│   │       │   │   │   │   ├── Andrey.png
│   │       │   │   │   │   ├── Kostya.png
│   │       │   │   │   │   ├── Nasta.png
│   │       │   │   │   │   ├── Nick.png
│   │       │   │   │   │   └── Vlad.png
│   │       │   │   │   ├── skin-thumbnails
│   │       │   │   │   │   ├── 01_default.jpg
│   │       │   │   │   │   ├── 02_transparent.jpg
│   │       │   │   │   │   ├── 03_blue.jpg
│   │       │   │   │   │   ├── 04_peachy.jpg
│   │       │   │   │   │   ├── 05_material.jpg
│   │       │   │   │   │   └── 06_transblue.jpg
│   │       │   │   │   ├── todo
│   │       │   │   │   │   └── check-icon.png
│   │       │   │   │   └── typography
│   │       │   │   │       ├── banner.png
│   │       │   │   │       ├── typo01.png
│   │       │   │   │       ├── typo03.png
│   │       │   │   │       ├── typo04.png
│   │       │   │   │       ├── typo05.png
│   │       │   │   │       ├── typo06.png
│   │       │   │   │       └── typo07.png
│   │       │   │   ├── arrow-green-up.svg
│   │       │   │   ├── arrow-red-down.svg
│   │       │   │   ├── blue-bg.jpg
│   │       │   │   ├── blur-bg-blurred.jpg
│   │       │   │   ├── blur-bg-mobile.jpg
│   │       │   │   ├── blur-bg.jpg
│   │       │   │   ├── chernika.png
│   │       │   │   ├── comments.svg
│   │       │   │   ├── face.svg
│   │       │   │   ├── green-bg.jpg
│   │       │   │   ├── money.svg
│   │       │   │   ├── peachy-bg.jpg
│   │       │   │   ├── person.svg
│   │       │   │   ├── refresh.svg
│   │       │   │   ├── shopping-cart.svg
│   │       │   │   ├── sky-bg.jpg
│   │       │   │   ├── theme
│   │       │   │   │   ├── icon
│   │       │   │   │   │   ├── feed
│   │       │   │   │   │   │   ├── feed-image.svg
│   │       │   │   │   │   │   ├── feed-location.svg
│   │       │   │   │   │   │   └── feed-video.svg
│   │       │   │   │   │   └── kameleon
│   │       │   │   │   │       ├── Alien.svg
│   │       │   │   │   │       ├── Analytics.svg
│   │       │   │   │   │       ├── Apartment.svg
│   │       │   │   │   │       ├── Batman.svg
│   │       │   │   │   │       ├── Beach.svg
│   │       │   │   │   │       ├── Bell.svg
│   │       │   │   │   │       ├── Bonsai.svg
│   │       │   │   │   │       ├── Boss-3.svg
│   │       │   │   │   │       ├── Boss-5.svg
│   │       │   │   │   │       ├── Burglar.svg
│   │       │   │   │   │       ├── Bus.svg
│   │       │   │   │   │       ├── Candy.svg
│   │       │   │   │   │       ├── Checklist.svg
│   │       │   │   │   │       ├── Cheese.svg
│   │       │   │   │   │       ├── Chessboard.svg
│   │       │   │   │   │       ├── Clipboard-Plan.svg
│   │       │   │   │   │       ├── Desert.svg
│   │       │   │   │   │       ├── Dna.svg
│   │       │   │   │   │       ├── Euro-Coin.svg
│   │       │   │   │   │       ├── Food-Dome.svg
│   │       │   │   │   │       ├── Hacker.svg
│   │       │   │   │   │       ├── Images.svg
│   │       │   │   │   │       ├── Key.svg
│   │       │   │   │   │       ├── Laptop-Signal.svg
│   │       │   │   │   │       ├── Locked-Cloud.svg
│   │       │   │   │   │       ├── Love-Letter.svg
│   │       │   │   │   │       ├── Magician.svg
│   │       │   │   │   │       ├── Makeup.svg
│   │       │   │   │   │       ├── Medal-2.svg
│   │       │   │   │   │       ├── Microscope.svg
│   │       │   │   │   │       ├── Mind-Map-Paper.svg
│   │       │   │   │   │       ├── Money-Increase.svg
│   │       │   │   │   │       ├── Music-Equalizer.svg
│   │       │   │   │   │       ├── Ninja.svg
│   │       │   │   │   │       ├── Online-Shopping.svg
│   │       │   │   │   │       ├── Pantone.svg
│   │       │   │   │   │       ├── Party-Poppers.svg
│   │       │   │   │   │       ├── Phone-Booth.svg
│   │       │   │   │   │       ├── Programming.svg
│   │       │   │   │   │       ├── Santa.svg
│   │       │   │   │   │       ├── Shop.svg
│   │       │   │   │   │       ├── Street-View.svg
│   │       │   │   │   │       ├── Student-3.svg
│   │       │   │   │   │       ├── Surfer.svg
│   │       │   │   │   │       ├── Surgeon.svg
│   │       │   │   │   │       ├── Tower.svg
│   │       │   │   │   │       └── Vector.svg
│   │       │   │   │   ├── no-photo.png
│   │       │   │   │   ├── palette.png
│   │       │   │   │   └── vendor
│   │       │   │   │       ├── ammap
│   │       │   │   │       │   ├── arrowDown.gif
│   │       │   │   │       │   ├── arrowUp.gif
│   │       │   │   │       │   ├── export.png
│   │       │   │   │       │   ├── homeIcon.gif
│   │       │   │   │       │   ├── homeIconWhite.gif
│   │       │   │   │       │   ├── minus.gif
│   │       │   │   │       │   ├── panDown.gif
│   │       │   │   │       │   ├── panLeft.gif
│   │       │   │   │       │   ├── panRight.gif
│   │       │   │   │       │   ├── panUp.gif
│   │       │   │   │       │   ├── plus.gif
│   │       │   │   │       │   ├── xIcon.gif
│   │       │   │   │       │   └── xIconH.gif
│   │       │   │   │       └── leaflet
│   │       │   │   │           ├── marker-icon-2x.png
│   │       │   │   │           ├── marker-icon.png
│   │       │   │   │           └── marker-shadow.png
│   │       │   │   └── transblue-bg.jpg
│   │       │   └── scss
│   │       │       ├── _auth.scss
│   │       │       ├── _buttons.scss
│   │       │       ├── _fonts.scss
│   │       │       ├── _form.scss
│   │       │       ├── _icons.scss
│   │       │       ├── _ionicons.scss
│   │       │       ├── _layout.scss
│   │       │       ├── _modal.scss
│   │       │       ├── _preloader.scss
│   │       │       ├── _socicon.scss
│   │       │       ├── _table.scss
│   │       │       ├── _treeView.scss
│   │       │       ├── _typography.scss
│   │       │       ├── bootstrap-overrides
│   │       │       │   ├── _card.scss
│   │       │       │   ├── _dropdown.scss
│   │       │       │   ├── _tabs.scss
│   │       │       │   └── overrides.scss
│   │       │       ├── conf
│   │       │       │   ├── _mixins.scss
│   │       │       │   ├── _variables.scss
│   │       │       │   ├── color-schemes
│   │       │       │   │   ├── _blur.scss
│   │       │       │   │   ├── _mint.scss
│   │       │       │   │   └── _ng2.scss
│   │       │       │   └── conf.scss
│   │       │       ├── global.scss
│   │       │       ├── postcss.config.js
│   │       │       ├── theme.scss
│   │       │       └── vendor.scss
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
│   │       │   │   ├── message.json
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
│   │       │   │   ├── talk.json
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
│   │       │   │   ├── message.json
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
│   │       │   │   ├── talk.json
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
│   │       │   │   ├── message.json
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
│   │       │   │   ├── talk.json
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
│   │       │       ├── message.json
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
│   │       │       ├── talk.json
│   │       │       ├── tracker.json
│   │       │       ├── user-management.json
│   │       │       └── wiki.json
│   │       ├── index.html
│   │       ├── manifest.webapp
│   │       ├── mocks
│   │       │   ├── mock-account.service.ts
│   │       │   ├── mock-angular-fire.service.spec.ts
│   │       │   ├── mock-document.service.spec.ts
│   │       │   ├── mock-language.service.ts
│   │       │   ├── mock-ng2-localforage.service.spec.ts
│   │       │   ├── mock-principal.service.ts
│   │       │   ├── mock-route.service.ts
│   │       │   ├── mock-router.spec.ts
│   │       │   ├── mock-tracker.service.ts
│   │       │   ├── mock-window.service.spec.ts
│   │       │   ├── spyobject.ts
│   │       │   └── test.module.ts
│   │       ├── robots.txt
│   │       ├── sw.js
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
│       │   ├── simulations
│       │   │   ├── BlogGatlingTest.scala
│       │   │   ├── ClaimGatlingTest.scala
│       │   │   ├── ClaimRebuttalGatlingTest.scala
│       │   │   ├── ContactGatlingTest.scala
│       │   │   ├── CrisisGatlingTest.scala
│       │   │   ├── EntryGatlingTest.scala
│       │   │   ├── HeroGatlingTest.scala
│       │   │   ├── MessageGatlingTest.scala
│       │   │   ├── NoteGatlingTest.scala
│       │   │   ├── RebuttalGatlingTest.scala
│       │   │   └── TagGatlingTest.scala
│       │   └── user-files
│       │       ├── bodies
│       │       ├── data
│       │       └── simulations
│       │           ├── BlogGatlingTest.scala
│       │           ├── ClaimGatlingTest.scala
│       │           ├── ClaimRebuttalGatlingTest.scala
│       │           ├── ContactGatlingTest.scala
│       │           ├── CrisisGatlingTest.scala
│       │           ├── EntryGatlingTest.scala
│       │           ├── HeroGatlingTest.scala
│       │           ├── MessageGatlingTest.scala
│       │           ├── NoteGatlingTest.scala
│       │           ├── RebuttalGatlingTest.scala
│       │           ├── TagGatlingTest.scala
│       │           └── TalkGatlingTest.scala
│       ├── java
│       │   └── org
│       │       └── exampleapps
│       │           └── greatbig
│       │               ├── config
│       │               │   ├── WebConfigurerTest.java
│       │               │   ├── WebConfigurerTestController.java
│       │               │   └── elasticsearch
│       │               │       └── IndexReinitializer.java
│       │               ├── repository
│       │               │   ├── CustomAuditEventRepositoryIntTest.java
│       │               │   └── CustomSocialUsersConnectionRepositoryIntTest.java
│       │               ├── security
│       │               │   ├── SecurityUtilsUnitTest.java
│       │               │   └── jwt
│       │               │       ├── JWTFilterTest.java
│       │               │       └── TokenProviderTest.java
│       │               ├── service
│       │               │   ├── MailServiceIntTest.java
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
│       │                       ├── MessageResourceIntTest.java
│       │                       ├── NoteResourceIntTest.java
│       │                       ├── ProfileInfoResourceIntTest.java
│       │                       ├── RebuttalResourceIntTest.java
│       │                       ├── TagResourceIntTest.java
│       │                       ├── TalkResourceIntTest.java
│       │                       ├── TestUtil.java
│       │                       ├── UserJWTControllerIntTest.java
│       │                       ├── UserResourceIntTest.java
│       │                       ├── errors
│       │                       │   ├── ExceptionTranslatorIntTest.java
│       │                       │   └── ExceptionTranslatorTestController.java
│       │                       └── util
│       │                           └── PaginationUtilUnitTest.java
│       ├── javascript
│       │   ├── e2e
│       │   │   └── entities
│       │   │       └── talk.spec.ts
│       │   ├── karma.conf.js
│       │   └── spec
│       │       └── app
│       │           └── core
│       │               └── store
│       │                   └── collection
│       │                       └── collection.effects.spec.ts
│       └── resources
│           ├── config
│           │   └── application.yml
│           ├── i18n
│           │   └── messages_en.properties
│           ├── logback.xml
│           └── mails
│               └── testEmail.html
├── sw-precache-config.js
├── test.ts
├── tsconfig-aot.json
├── tsconfig.json
├── tslint.json
├── typings.d.ts
├── webpack
│   ├── logo-jhipster.png
│   ├── utils.js
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   ├── webpack.prod.js
│   ├── webpack.test.js
│   └── webpack.vendor.js
└── yarn.lock

356 directories, 1654 files
