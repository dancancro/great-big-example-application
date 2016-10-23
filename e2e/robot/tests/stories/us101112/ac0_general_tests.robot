*** Settings ***
Default Tags    us5678
Resource    ../../../resources/features/login/rs_login.robot
Resource    ../../../resources/features/navigation_bar/rs_navigation_bar.robot
Resource    ../../../resources/features/counter/rs_counter.robot

Suite Setup    TEST SETUP
Suite Teardown    Exit Browser

*** Variables ***
${LOGIN_URL}    http://localhost:8080/
${BROWSER}    Chrome
${USERNAME}    user
${PASSWORD}    pass

*** Test Cases ***
01 Verify Counter Exist
    [Tags]    Smoke
    Verify Counter Exists

02 Verify Counter Heading
    Verify Counter Heading    COUNTER

03 Verify Counter Default Value
    Verify Counter Result    0

*** Keywords ***
TEST SETUP
    Open Browser To Page    ${LOGIN_URL}    ${BROWSER}
    Login    ${USERNAME}    ${PASSWORD}
    Wait While Login Is Loading
    Sleep    2
    Navigate To    Counter
