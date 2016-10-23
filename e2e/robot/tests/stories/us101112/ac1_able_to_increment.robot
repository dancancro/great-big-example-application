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
01 Verify Counter Increment Button Exist
    Verify Counter Increment Exist

02 Verify Counter Increment Button Enabled
    Verify Counter Increment Enabled    ${TRUE}

03 Verify Counter Increment Label
    Verify Counter Increment Label    +

04 Increment
    Increment Counter    5
    Verify Counter Result    5

*** Keywords ***
TEST SETUP
    Open Browser To Page    ${LOGIN_URL}    ${BROWSER}
    Login    ${USERNAME}    ${PASSWORD}
    Wait While Login Is Loading
    Sleep    2
    Navigate To    Counter
