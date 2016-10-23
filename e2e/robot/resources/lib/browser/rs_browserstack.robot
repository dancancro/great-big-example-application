*** Settings ***
Library    Selenium2Library
Library    Collections

*** Variables ***
${BROWSERSTACK.PLATFORM}              DESKTOP
${BROWSERSTACK.ENABLE}                ${FALSE}
${BROWSERSTACK.USERNAME}
${BROWSERSTACK.KEY}
${BROWSERSTACK.REMOTE URL}            http://${BROWSERSTACK.USERNAME}:${BROWSERSTACK.KEY}@hub.browserstack.com/wd/hub
${BROWSERSTACK.LOCAL}                 false
${BROWSERSTACK.BROWSER}               Safari
${BROWSERSTACK.BROWSER.NAME}
${BROWSERSTACK.BROWSER.VERSION}       9.1
${BROWSERSTACK.OS}                    OS X
${BROWSERSTACK.OS.VERSION}            El Capitan
${BROWSERSTACK.RESOLUTION}            1024x768
${BROWSERSTACK.DEVICE}
${BROWSERSTACK.DEVICE.ORIENTATION}    portrait
${BROWSERSTACK.DEBUG}                 False

*** Keywords ***
BrowserStack Run On Desktop
    [Arguments]    ${url}
    &{DESIRED_CAPABILITIES}=    Create Dictionary
    Set To Dictionary    ${DESIRED_CAPABILITIES}    browser               ${BROWSERSTACK.BROWSER}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    browser_version       ${BROWSERSTACK.BROWSER.VERSION}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    os                    ${BROWSERSTACK.OS}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    os_version            ${BROWSERSTACK.OS.VERSION}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    resolution            ${BROWSERSTACK.RESOLUTION}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    browserstack.local    ${BROWSERSTACK.LOCAL}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    browserstack.debug    ${BROWSERSTACK.DEBUG}
    Log    Running Desktop with caps = ${DESIRED_CAPABILITIES}
    Open Browser    ${url}    remote_url=${BROWSERSTACK.REMOTE URL}     desired_capabilities=${DESIRED_CAPABILITIES}

BrowserStack Run On Mobile
    [Arguments]    ${url}
    &{DESIRED_CAPABILITIES}=    Create Dictionary
    Set To Dictionary    ${DESIRED_CAPABILITIES}    browserName           ${BROWSERSTACK.BROWSER.NAME}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    device                ${BROWSERSTACK.DEVICE}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    deviceOrientation     ${BROWSERSTACK.DEVICE.ORIENTATION}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    browserstack.local    ${BROWSERSTACK.LOCAL}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    browserstack.debug    ${BROWSERSTACK.DEBUG}
    Log    Running Mobile with caps = ${DESIRED_CAPABILITIES}
    Open Browser    ${url}    remote_url=${BROWSERSTACK.REMOTE URL}     desired_capabilities=${DESIRED_CAPABILITIES}
