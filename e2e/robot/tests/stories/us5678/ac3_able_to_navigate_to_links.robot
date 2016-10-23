*** Settings ***
Default Tags    us5678
Resource    ../../../resources/features/login/rs_login.robot
Resource    ../../../resources/features/navigation_bar/rs_navigation_bar.robot

Suite Setup    TEST SETUP
Suite Teardown    Exit Browser

*** Variables ***
${LOGIN_URL}    http://localhost:8080/
${BROWSER}    Chrome
${USERNAME}    user
${PASSWORD}    pass

*** Test Cases ***
01 Navigate To Counter
    Navigate To    Counter
    Page Should Contain    Counter

01 Navigate To About Us
    Navigate To    About Us
    Page Should Contain    About Us

*** Keywords ***
TEST SETUP
    Open Browser To Page    ${LOGIN_URL}    ${BROWSER}
    Login    ${USERNAME}    ${PASSWORD}
    Wait While Login Is Loading
