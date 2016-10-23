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
01 Verify Counter Decrement Button Exist
    Verify Counter Decrement Exist

02 Verify Counter Decrement Button Enabled
    Verify Counter Decrement Enabled    ${TRUE}

03 Verify Counter Decrement Label
    Verify Counter Decrement Label    -

04 Decrement
    Decrement Counter    5
    Verify Counter Result    -5

*** Keywords ***
TEST SETUP
    Open Browser To Page    ${LOGIN_URL}    ${BROWSER}
    Login    ${USERNAME}    ${PASSWORD}
    Wait While Login Is Loading
    Sleep    2
    Navigate To    Counter
