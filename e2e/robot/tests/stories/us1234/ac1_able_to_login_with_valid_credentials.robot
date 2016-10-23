*** Settings ***
Default Tags    us1234
Resource    ../../../resources/features/login/rs_login.robot

Test Setup    TEST SETUP
Test Teardown    Exit Browser

*** Variables ***
${LOGIN_URL}    http://localhost:8080/
${BROWSER}    Chrome
${VALID USERNAME}    user
${VALID PASSWORD}    pass

*** Test Cases ***
01 Able To Login With Valid Credentials
    [Tags]    Smoke
    Login    ${VALID USERNAME}    ${VALID PASSWORD}
    Verify No Login Error

02 Valid Login Navigates To Counter Page
    Login    ${VALID USERNAME}    ${VALID PASSWORD}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Page Should Contain    Counter

03 Verify Username Placeholder
    Verify Login Username Placeholder    Username

04 Verify Password Placeholder
    Verify Login Password Placeholder    Password

05 Verify Login Button Label
    Verify Login Submit Button Label    Login

06 Verify Login Username Label
    Verify Login Username Label    Username

07 Verify Login Password Label
    Verify Login Password Label    Password

*** Keywords ***
TEST SETUP
    Open Browser To Page    ${LOGIN_URL}    ${BROWSER}
    #THIS WILL SLOW DOWN ROBOT SO YOU CAN SEE WHAT IS HAPPENING
    #Set Selenium Speed    1
